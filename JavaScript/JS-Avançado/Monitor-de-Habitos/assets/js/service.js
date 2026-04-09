angular.module('HabitTrackerApp').factory('TrackerService', ['$window', function($window) {
    const STORAGE_KEY = 'habit_mood_tracker_data';
    const storage = $window.localStorage;

    const getRecords = () => {
        try {
            const rawData = storage.getItem(STORAGE_KEY);
            if (!rawData) return []; 

            const data = JSON.parse(rawData);
            if (!Array.isArray(data)) return [];

            return data
                .map(item => DayRecord.fromJSON(item))
                .filter(record => record !== null); 
        } catch (e) {
            console.error('Erro ao ler do localStorage:', e);
            return [];
        }
    };

    const saveRecord = (record) => {
        const records = getRecords();
        const existingRecord = records.find(r => r.date === record.date);
        
        if (existingRecord) {
            existingRecord.merge(record);
        } else {
            records.push(record);
        }

        records.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        storage.setItem(STORAGE_KEY, JSON.stringify(records.map(r => r.toJSON())));
    };

    const deleteRecord = (id) => {
        const records = getRecords().filter(r => r.id !== id);
        storage.setItem(STORAGE_KEY, JSON.stringify(records.map(r => r.toJSON())));
    };

    const calculateStats = (records) => {
        if (!records || records.length === 0) {
            return { avgMood: 0, completionRate: 0, totalDays: 0 };
        }

        const stats = records.reduce((acc, curr) => {
            acc.moodSum += curr.mood;
            acc.habitCompletenessSum += curr.getCompletionPercentage();
            return acc;
        }, { moodSum: 0, habitCompletenessSum: 0 });

        return {
            avgMood: (stats.moodSum / records.length).toFixed(1),
            completionRate: Math.round(stats.habitCompletenessSum / records.length),
            totalDays: records.length
        };
    };

    return {
        getRecords,
        saveRecord,
        deleteRecord,
        calculateStats
    };
}]);
