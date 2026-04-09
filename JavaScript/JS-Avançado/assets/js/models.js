class Habit {
    constructor(name, completed = false) {
        this.name = name;
        this.completed = completed;
    }

    toggle() {
        this.completed = !this.completed;
    }
}


class DayRecord {

    constructor(id, date, mood, observation, habits) {
        this.id = id || Date.now().toString();
        this.date = date;
        this.mood = mood;
        this.observation = observation;
        this.habits = habits || [];
    }

    getCompletionPercentage() {
        if (this.habits.length === 0) return 0;
        const completed = this.habits.filter(h => h.completed).length;
        return Math.round((completed / this.habits.length) * 100);
    }

    getMoodEmoji() {
        const emojis = {
            1: 'Muito Triste 😢',
            2: 'Neutro 😐',
            3: 'Feliz 🙂',
            4: 'Muito Feliz 🤩'
        };
        return emojis[this.mood] || 'Desconhecido ❓';
    }

    toJSON() {
        return {
            id: this.id,
            date: this.date,
            mood: this.mood,
            observation: this.observation,
            habits: this.habits.map(h => ({ name: h.name, completed: h.completed }))
        };
    }

    merge(other) {
        if (other.mood) this.mood = other.mood;
        
        if (other.observation && this.observation !== other.observation) {
            this.observation = this.observation 
                ? `${this.observation} | ${other.observation}`
                : other.observation;
        }

        other.habits.forEach(otherHabit => {
            const existingHabit = this.habits.find(h => h.name === otherHabit.name);
            if (existingHabit) {
                existingHabit.completed = existingHabit.completed || otherHabit.completed;
            } else {
                this.habits.push(new Habit(otherHabit.name, otherHabit.completed));
            }
        });
    }

    static fromJSON(data) {
        if (!data) return null;
        const habitsData = Array.isArray(data.habits) ? data.habits : [];
        const habits = habitsData.map(h => h ? new Habit(h.name, h.completed) : null).filter(h => h !== null);
        
        return new DayRecord(
            data.id, 
            data.date, 
            data.mood || 0, 
            data.observation || '', 
            habits
        );
    }
}

window.Habit = Habit;
window.DayRecord = DayRecord;
