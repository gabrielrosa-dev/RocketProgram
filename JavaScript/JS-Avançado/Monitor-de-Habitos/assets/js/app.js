angular.module('HabitTrackerApp', [])
    .controller('MainController', ['$scope', 'TrackerService', function($scope, TrackerService) {
        
        $scope.records = []; 
        $scope.stats = {};   
        
        const defaultHabits = [
            'Beber Água 💧',
            'Exercício 🏃',
            'Estudo 📚',
            'Leitura 📖',
            'Dormir Cedo 😴'
        ];

        $scope.resetForm = () => {
            $scope.todayRecord = {
                date: new Date(), 
                mood: 0,
                observation: '',
                habits: defaultHabits.map(name => new Habit(name, false))
            };
        };

        $scope.filters = {
            mood: '',
            startDate: null,
            endDate: null
        };

        $scope.init = () => {
            $scope.refreshData();
            $scope.resetForm();
        };
        
        $scope.refreshData = () => {
            $scope.records = TrackerService.getRecords();
            $scope.stats = TrackerService.calculateStats($scope.records);
        };

    
        $scope.selectMood = (level) => {
            $scope.todayRecord.mood = level;
        };

        $scope.toggleHabit = (habit) => {
            habit.toggle();
        };

        $scope.saveCurrentRecord = () => {
            if (!$scope.todayRecord.mood) {
                alert('Por favor, selecione seu humor!');
                return;
            }

            const d = $scope.todayRecord.date;
            const dateString = [
                d.getFullYear(),
                String(d.getMonth() + 1).padStart(2, '0'),
                String(d.getDate()).padStart(2, '0')
            ].join('-');

            const record = new DayRecord(
                null,
                dateString,
                $scope.todayRecord.mood,
                $scope.todayRecord.observation,
                $scope.todayRecord.habits
            );

            TrackerService.saveRecord(record);
            $scope.refreshData();
            $scope.resetForm();
            alert('Registro salvo com sucesso! 🚀');
        };

        $scope.deleteRecord = (id) => {
            if (confirm('Deseja realmente excluir este registro?')) {
                TrackerService.deleteRecord(id);
                $scope.refreshData();
            }
        };

        $scope.filterRecords = (record) => {
            if ($scope.filters.mood && record.mood != $scope.filters.mood) {
                return false;
            }
            
            if ($scope.filters.startDate instanceof Date) {
                const d = $scope.filters.startDate;
                const filterStartStr = [
                    d.getFullYear(),
                    String(d.getMonth() + 1).padStart(2, '0'),
                    String(d.getDate()).padStart(2, '0')
                ].join('-');
                if (record.date < filterStartStr) {
                    return false;
                }
            }
            
            if ($scope.filters.endDate instanceof Date) {
                const d = $scope.filters.endDate;
                const filterEndStr = [
                    d.getFullYear(),
                    String(d.getMonth() + 1).padStart(2, '0'),
                    String(d.getDate()).padStart(2, '0')
                ].join('-');
                if (record.date > filterEndStr) {
                    return false;
                }
            }

            return true;
        };

        $scope.init();
    }]);
