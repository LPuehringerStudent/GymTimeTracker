// Gym Tracker - Main Application Logic
class GymTracker {
    constructor() {
        this.currentUser = localStorage.getItem('gymTrackerCurrentUser') || 'default';
        this.loadUserData();
        this.currentWorkout = null;
        this.timerInterval = null;
        this.init();
    }

    loadUserData() {
        const userDataKey = `gymTracker_${this.currentUser}`;
        const userData = JSON.parse(localStorage.getItem(userDataKey)) || {};
        
        this.workouts = userData.workouts || [];
        this.supplements = userData.supplements || this.getDefaultSupplements();
        this.settings = userData.settings || this.getDefaultSettings();
        this.currentStreak = userData.currentStreak || 0;
        this.achievements = userData.achievements || [];
    }

    init() {
        this.setupEventListeners();
        this.loadData();
        this.initializeAnimations();
    }

    getDefaultSupplements() {
        return [
            { id: 1, name: 'Protein Powder', dosage: '1 scoop', time: 'morning', taken: false, streak: 0 },
            { id: 2, name: 'Creatine', dosage: '5g', time: 'daily', taken: false, streak: 0 },
            { id: 3, name: 'Multivitamin', dosage: '1 tablet', time: 'morning', taken: false, streak: 0 },
            { id: 4, name: 'Omega-3', dosage: '2 capsules', time: 'evening', taken: false, streak: 0 }
        ];
    }

    getDefaultSettings() {
        return {
            userName: 'Fitness Enthusiast',
            gymGoal: 4, // workouts per week
            theme: 'light',
            notifications: true
        };
    }

    setupEventListeners() {
        // Gym check-in button
        const checkInBtn = document.getElementById('checkInBtn');
        if (checkInBtn) {
            checkInBtn.addEventListener('click', () => this.checkIn());
        }

        // Timer controls
        const startTimerBtn = document.getElementById('startTimer');
        const pauseTimerBtn = document.getElementById('pauseTimer');
        const stopTimerBtn = document.getElementById('stopTimer');

        if (startTimerBtn) startTimerBtn.addEventListener('click', () => this.startTimer());
        if (pauseTimerBtn) pauseTimerBtn.addEventListener('click', () => this.pauseTimer());
        if (stopTimerBtn) stopTimerBtn.addEventListener('click', () => this.stopTimer());

        // Supplement buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('supplement-btn')) {
                const supplementId = parseInt(e.target.dataset.supplementId);
                this.takeSupplement(supplementId);
            }
        });

        // Settings form
        const settingsForm = document.getElementById('settingsForm');
        if (settingsForm) {
            settingsForm.addEventListener('submit', (e) => this.saveSettings(e));
        }

        // Add supplement form
        const addSupplementForm = document.getElementById('addSupplementForm');
        if (addSupplementForm) {
            addSupplementForm.addEventListener('submit', (e) => this.addSupplement(e));
        }
    }

    checkIn() {
        const workoutType = document.getElementById('workoutType')?.value || 'General';
        const now = new Date();
        
        this.currentWorkout = {
            id: Date.now(),
            date: now.toISOString(),
            type: workoutType,
            duration: 0,
            startTime: now.getTime(),
            notes: ''
        };

        this.updateUI('checkin-active');
        this.showNotification('Workout started! Good luck!', 'success');
        this.animateCheckIn();
    }

    startTimer() {
        if (!this.currentWorkout) return;
        
        this.timerInterval = setInterval(() => {
            this.currentWorkout.duration += 1;
            this.updateTimerDisplay();
        }, 1000);

        this.updateUI('timer-running');
    }

    pauseTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this.updateUI('timer-paused');
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }

        if (this.currentWorkout) {
            const notes = document.getElementById('workoutNotes')?.value || '';
            this.currentWorkout.notes = notes;
            this.currentWorkout.endTime = Date.now();
            
            this.workouts.push(this.currentWorkout);
            this.saveData();
            
            this.showNotification(`Great workout! Duration: ${this.formatDuration(this.currentWorkout.duration)}`, 'success');
            this.currentWorkout = null;
        }

        this.updateUI('checkin-inactive');
        this.updateStats();
    }

    takeSupplement(supplementId) {
        const supplement = this.supplements.find(s => s.id === supplementId);
        if (!supplement) return;

        supplement.taken = true;
        supplement.streak += 1;
        
        this.saveData();
        this.updateSupplementDisplay(supplementId);
        this.showNotification(`${supplement.name} taken!`, 'success');
        
        // Check if all supplements taken today
        if (this.allSupplementsTaken()) {
            this.showNotification('All supplements taken today! Great job!', 'achievement');
        }
    }

    allSupplementsTaken() {
        return this.supplements.every(s => s.taken);
    }

    resetDailySupplements() {
        const today = new Date().toDateString();
        const lastReset = localStorage.getItem('lastSupplementReset');
        
        if (lastReset !== today) {
            this.supplements.forEach(s => s.taken = false);
            localStorage.setItem('lastSupplementReset', today);
            this.saveData();
        }
    }

    addSupplement(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        const newSupplement = {
            id: Date.now(),
            name: formData.get('name'),
            dosage: formData.get('dosage'),
            time: formData.get('time'),
            taken: false,
            streak: 0
        };

        this.supplements.push(newSupplement);
        this.saveData();
        this.renderSupplements();
        form.reset();
        
        this.showNotification('Supplement added successfully!', 'success');
    }

    removeSupplement(supplementId) {
        this.supplements = this.supplements.filter(s => s.id !== supplementId);
        this.saveData();
        this.renderSupplements();
        this.showNotification('Supplement removed', 'info');
    }

    saveSettings(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        this.settings.userName = formData.get('userName');
        this.settings.gymGoal = parseInt(formData.get('gymGoal'));
        this.settings.notifications = formData.get('notifications') === 'on';
        
        this.saveData();
        this.showNotification('Settings saved!', 'success');
    }

    updateUI(state) {
        const checkInBtn = document.getElementById('checkInBtn');
        const timerControls = document.getElementById('timerControls');
        const workoutTypeSelect = document.getElementById('workoutType');

        switch (state) {
            case 'checkin-active':
                if (checkInBtn) checkInBtn.disabled = true;
                if (timerControls) timerControls.style.display = 'block';
                if (workoutTypeSelect) workoutTypeSelect.disabled = true;
                break;
            case 'timer-running':
                // Update timer button states
                break;
            case 'timer-paused':
                // Update timer button states
                break;
            case 'checkin-inactive':
                if (checkInBtn) checkInBtn.disabled = false;
                if (timerControls) timerControls.style.display = 'none';
                if (workoutTypeSelect) workoutTypeSelect.disabled = false;
                break;
        }
    }

    updateTimerDisplay() {
        const timerDisplay = document.getElementById('timerDisplay');
        if (timerDisplay && this.currentWorkout) {
            timerDisplay.textContent = this.formatDuration(this.currentWorkout.duration);
        }
    }

    updateSupplementDisplay(supplementId) {
        const button = document.querySelector(`[data-supplement-id="${supplementId}"]`);
        const card = button?.closest('.supplement-card');
        
        if (button && card) {
            button.textContent = 'Taken!';
            button.disabled = true;
            card.classList.add('taken');
            
            // Animate the card
            anime({
                targets: card,
                scale: [1, 1.05, 1],
                duration: 600,
                easing: 'easeOutElastic(1, .8)'
            });
        }
    }

    updateStats() {
        const currentStreak = this.calculateStreak();
        const weeklyVisits = this.getWeeklyVisits();
        const supplementProgress = this.getSupplementProgress();

        // Update stats displays
        const streakElement = document.getElementById('currentStreak');
        const weeklyElement = document.getElementById('weeklyVisits');
        const supplementElement = document.getElementById('supplementProgress');

        if (streakElement) streakElement.textContent = currentStreak;
        if (weeklyElement) weeklyElement.textContent = weeklyVisits;
        if (supplementElement) supplementElement.textContent = `${supplementProgress.taken}/${supplementProgress.total}`;
    }

    calculateStreak() {
        if (this.workouts.length === 0) return 0;
        
        const sortedWorkouts = this.workouts
            .map(w => new Date(w.date).toDateString())
            .filter((date, index, arr) => arr.indexOf(date) === index)
            .sort((a, b) => new Date(b) - new Date(a));

        let streak = 0;
        const today = new Date();
        
        for (let i = 0; i < sortedWorkouts.length; i++) {
            const workoutDate = new Date(sortedWorkouts[i]);
            const daysDiff = Math.floor((today - workoutDate) / (1000 * 60 * 60 * 24));
            
            if (daysDiff === i) {
                streak++;
            } else {
                break;
            }
        }
        
        this.currentStreak = streak;
        this.saveData();
        return streak;
    }

    getWeeklyVisits() {
        const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        return this.workouts.filter(w => new Date(w.date) >= oneWeekAgo).length;
    }

    getSupplementProgress() {
        const taken = this.supplements.filter(s => s.taken).length;
        return { taken, total: this.supplements.length };
    }

    renderSupplements() {
        const container = document.getElementById('supplementsGrid');
        if (!container) return;

        container.innerHTML = this.supplements.map(supplement => `
            <div class="supplement-card bg-white rounded-lg shadow-md p-4 border border-gray-200 ${supplement.taken ? 'taken opacity-75' : ''}">
                <div class="flex justify-between items-start mb-3">
                    <h3 class="font-semibold text-gray-800">${supplement.name}</h3>
                    <button onclick="gymTracker.removeSupplement(${supplement.id})" class="text-red-500 hover:text-red-700 text-sm">Remove</button>
                </div>
                <p class="text-sm text-gray-600 mb-2">${supplement.dosage}</p>
                <p class="text-xs text-gray-500 mb-3">${supplement.time}</p>
                <button 
                    class="supplement-btn w-full py-2 px-4 rounded-md font-medium transition-colors ${
                        supplement.taken 
                            ? 'bg-green-500 text-white cursor-not-allowed' 
                            : 'bg-terracotta text-white hover:bg-terracotta-dark'
                    }" 
                    data-supplement-id="${supplement.id}"
                    ${supplement.taken ? 'disabled' : ''}
                >
                    ${supplement.taken ? 'Taken!' : 'Take Now'}
                </button>
                <p class="text-xs text-gray-500 mt-2">Streak: ${supplement.streak} days</p>
            </div>
        `).join('');
    }

    renderAnalytics() {
        this.renderCalendarHeatmap();
        this.renderProgressCharts();
        this.renderAchievements();
    }

    renderCalendarHeatmap() {
        const container = document.getElementById('calendarHeatmap');
        if (!container) return;

        // Generate last 30 days
        const days = [];
        for (let i = 29; i >= 0; i--) {
            const date = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
            const dateStr = date.toDateString();
            const hasWorkout = this.workouts.some(w => new Date(w.date).toDateString() === dateStr);
            days.push({ date, hasWorkout });
        }

        container.innerHTML = days.map(day => `
            <div class="calendar-day ${day.hasWorkout ? 'has-workout' : ''}" title="${day.date.toDateString()}">
                ${day.date.getDate()}
            </div>
        `).join('');
    }

    renderProgressCharts() {
        // Workout frequency chart
        const workoutChart = echarts.init(document.getElementById('workoutChart'));
        const weeklyData = this.getWeeklyWorkoutData();
        
        workoutChart.setOption({
            title: { text: 'Weekly Workout Frequency', textStyle: { color: '#36454F' } },
            xAxis: { 
                type: 'category', 
                data: weeklyData.labels,
                axisLabel: { color: '#36454F' }
            },
            yAxis: { 
                type: 'value',
                axisLabel: { color: '#36454F' }
            },
            series: [{
                data: weeklyData.values,
                type: 'line',
                smooth: true,
                lineStyle: { color: '#D2691E' },
                itemStyle: { color: '#D2691E' }
            }],
            backgroundColor: 'transparent'
        });

        // Supplement adherence chart
        const supplementChart = echarts.init(document.getElementById('supplementChart'));
        supplementChart.setOption({
            title: { text: 'Supplement Adherence', textStyle: { color: '#36454F' } },
            series: [{
                type: 'pie',
                data: [
                    { value: this.getSupplementProgress().taken, name: 'Taken', itemStyle: { color: '#9CAF88' } },
                    { value: this.getSupplementProgress().total - this.getSupplementProgress().taken, name: 'Pending', itemStyle: { color: '#F5F5DC' } }
                ]
            }],
            backgroundColor: 'transparent'
        });
    }

    getWeeklyWorkoutData() {
        const labels = [];
        const values = [];
        
        for (let i = 6; i >= 0; i--) {
            const date = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
            const dateStr = date.toDateString();
            const dayName = date.toLocaleDateString('en', { weekday: 'short' });
            const workoutCount = this.workouts.filter(w => new Date(w.date).toDateString() === dateStr).length;
            
            labels.push(dayName);
            values.push(workoutCount);
        }
        
        return { labels, values };
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
            type === 'success' ? 'bg-green-500 text-white' :
            type === 'achievement' ? 'bg-terracotta text-white' :
            'bg-blue-500 text-white'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        anime({
            targets: notification,
            translateX: [300, 0],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutCubic'
        });
        
        setTimeout(() => {
            anime({
                targets: notification,
                translateX: [0, 300],
                opacity: [1, 0],
                duration: 500,
                easing: 'easeInCubic',
                complete: () => notification.remove()
            });
        }, 3000);
    }

    animateCheckIn() {
        const checkInBtn = document.getElementById('checkInBtn');
        if (checkInBtn) {
            anime({
                targets: checkInBtn,
                scale: [1, 1.1, 1],
                backgroundColor: ['#D2691E', '#9CAF88', '#D2691E'],
                duration: 1000,
                easing: 'easeOutElastic(1, .8)'
            });
        }
    }

    initializeAnimations() {
        // Animate cards on page load
        anime({
            targets: '.supplement-card',
            translateY: [20, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
            duration: 800,
            easing: 'easeOutCubic'
        });

        // Animate stats cards
        anime({
            targets: '.stats-card',
            scale: [0.9, 1],
            opacity: [0, 1],
            delay: anime.stagger(150),
            duration: 600,
            easing: 'easeOutCubic'
        });
    }

    formatDuration(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }

    saveData() {
        const userDataKey = `gymTracker_${this.currentUser}`;
        const userData = {
            workouts: this.workouts,
            supplements: this.supplements,
            settings: this.settings,
            currentStreak: this.currentStreak,
            achievements: this.achievements,
            lastUpdated: new Date().toISOString()
        };
        
        localStorage.setItem(userDataKey, JSON.stringify(userData));
        
        // Also save to global settings for current user
        localStorage.setItem('gymTrackerCurrentUser', this.currentUser);
    }

    loadData() {
        this.resetDailySupplements();
        this.updateStats();
        this.renderSupplements();
        this.updateUserDisplay();
        
        if (document.getElementById('calendarHeatmap')) {
            this.renderAnalytics();
        }
    }

    updateUserDisplay() {
        const userNameElement = document.getElementById('userName');
        if (userNameElement) {
            const users = JSON.parse(localStorage.getItem('gymTrackerUsers')) || {};
            const currentUserData = users[this.currentUser];
            
            if (currentUserData) {
                userNameElement.textContent = `${currentUserData.firstName} ${currentUserData.avatar.emoji}`;
            } else if (this.currentUser.startsWith('guest_')) {
                userNameElement.textContent = `Guest ${this.currentUser.split('_')[1].slice(-4)} 👤`;
            } else {
                userNameElement.textContent = 'User 👤';
            }
        }
    }

    exportData() {
        const data = {
            workouts: this.workouts,
            supplements: this.supplements,
            settings: this.settings,
            exportDate: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'gym-tracker-data.json';
        a.click();
        URL.revokeObjectURL(url);
        
        this.showNotification('Data exported successfully!', 'success');
    }

    clearAllData() {
        if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
            localStorage.removeItem('gymWorkouts');
            localStorage.removeItem('gymSupplements');
            localStorage.removeItem('gymSettings');
            location.reload();
        }
    }
}

// Initialize the app
let gymTracker;
document.addEventListener('DOMContentLoaded', () => {
    gymTracker = new GymTracker();
});

// Logout functionality
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('gymTrackerCurrentUser');
        window.location.href = 'login.html';
    }
}

// Add CSS custom properties for theming
document.documentElement.style.setProperty('--terracotta', '#D2691E');
document.documentElement.style.setProperty('--sage', '#9CAF88');
document.documentElement.style.setProperty('--cream', '#F5F5DC');
document.documentElement.style.setProperty('--charcoal', '#36454F');