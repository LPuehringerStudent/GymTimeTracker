# Gym Tracker - Multi-User Fitness & Supplement Tracking Web App

A sophisticated, feature-rich web application for tracking gym visits and supplement intake with **multi-user support**, beautiful data visualization, and comprehensive achievement system.

## 🌟 New Features - User Account System

### Multi-User Support
- **Individual User Accounts**: Each user has separate data, settings, and achievements
- **Secure Authentication**: Username/password login with basic encryption
- **User Profiles**: Personal information, avatars, and custom settings
- **Data Isolation**: Complete separation between user accounts
- **Guest Mode**: Quick access without registration

### User Management
- **Registration System**: Create new accounts with personalized profiles
- **Avatar Selection**: Choose from 16+ fitness-themed avatars
- **Profile Customization**: First name, last name, and email options
- **Easy User Switching**: Quick logout and account switching

## 🏋️ Core Features

### Gym Tracking
- **One-Click Check-in**: Select workout type and start session
- **Duration Timer**: Real-time workout timing with pause/resume
- **Workout Categories**: Strength, Cardio, Flexibility, Mixed
- **Session Notes**: Add personal workout reflections
- **Achievement Tracking**: Unlock badges for consistency

### Supplement Management
- **Visual Supplement Cards**: Beautiful grid interface
- **Daily Intake Logging**: One-click "taken" tracking
- **Streak Counters**: Monitor supplement consistency
- **Custom Supplements**: Add, edit, and remove supplements
- **Dosage Tracking**: Set and monitor supplement amounts

### Analytics Dashboard
- **Interactive Calendar**: 30-day workout heatmap
- **Progress Charts**: ECharts.js powered visualizations
- **Statistics Overview**: Key metrics and trends
- **Achievement Gallery**: Unlocked badges and milestones
- **Goal Progress**: Weekly workout targets and completion

## 🎨 Design & User Experience

### Visual Design
- **Modern Aesthetic**: Inspired by editorial fitness publications
- **Sophisticated Palette**: Warm terracotta, sage green, and cream tones
- **Custom Typography**: Playfair Display + Inter font pairing
- **Smooth Animations**: Anime.js powered micro-interactions
- **Responsive Layout**: Mobile-first design approach

### User Interface
- **Intuitive Navigation**: Clear, consistent menu structure
- **Visual Feedback**: Hover effects and loading states
- **Error Handling**: User-friendly error messages
- **Accessibility**: Keyboard navigation and screen reader support

## 🔐 User Account System

### Registration & Login
```
1. Create Account → Fill registration form
2. Choose Avatar → Select from 16+ options  
3. Set Password → Secure authentication
4. Login → Access personalized dashboard
```

### User Profiles
- **Personal Information**: First name, last name, email
- **Custom Avatar**: Fitness-themed profile pictures
- **Individual Settings**: Personalized preferences
- **Private Data**: Secure local storage per user

### Data Management
- **Complete Isolation**: Each user's data is separate
- **Local Storage**: All data stored in browser
- **Export Function**: Download individual user data
- **Guest Access**: Try without registration

## 📱 Pages & Navigation

### 1. Login (login.html)
- User registration and authentication
- Avatar selection during signup
- Existing user quick selection
- Guest mode access

### 2. Track (index.html)
- Main workout tracking interface
- Supplement daily management
- Quick stats and achievements
- Timer and notes system

### 3. Analytics (analytics.html)
- Progress visualization dashboard
- Calendar heatmap of activities
- Goal tracking and achievements
- Workout type distribution

### 4. Settings (settings.html)
- Profile management
- Supplement configuration
- Data export and backup
- Theme and appearance options

## 🛠 Technical Implementation

### Architecture
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS framework
- **Storage**: Browser localStorage with user isolation
- **Charts**: ECharts.js for data visualization
- **Animations**: Anime.js for smooth interactions

### Data Structure
```javascript
// User Account Data
{
  "username": {
    "firstName": "John",
    "lastName": "Doe", 
    "email": "john@example.com",
    "avatar": { "emoji": "💪", "name": "Strong" },
    "password": "hashed_password",
    "settings": { "gymGoal": 4, "theme": "light" }
  }
}

// User Fitness Data
{
  "workouts": [...],
  "supplements": [...],
  "settings": {...},
  "currentStreak": 7,
  "achievements": [...]
}
```

### Security Features
- **Password Hashing**: Basic client-side encryption
- **Data Isolation**: Complete separation between users
- **Session Management**: Automatic logout handling
- **Local Storage Only**: No server data transmission

## 🚀 Getting Started

### Quick Start
1. **Visit Login Page**: Access `login.html`
2. **Create Account**: Register with username and password
3. **Choose Avatar**: Select your fitness persona
4. **Start Tracking**: Begin logging workouts and supplements

### Local Development
```bash
# Navigate to project directory
cd gym-tracker

# Start local server
python -m http.server 8000

# Open in browser
http://localhost:8000/login.html
```

### GitHub Hosting
1. **Create Repository**: New GitHub repo for the project
2. **Upload Files**: Add all project files to repository
3. **Enable Pages**: Settings → Pages → Deploy from branch
4. **Access App**: `https://[username].github.io/[repo-name]`

## 🎯 Usage Guide

### For New Users
1. **Registration**: Click "Create New Account"
2. **Profile Setup**: Fill personal information
3. **Avatar Selection**: Choose fitness-themed profile picture
4. **Goal Setting**: Set weekly workout targets in Settings
5. **First Workout**: Use check-in system to log initial session

### For Returning Users
1. **Quick Login**: Select from existing users on login page
2. **Continue Tracking**: Access personalized dashboard
3. **View Progress**: Check analytics for trends and achievements
4. **Manage Supplements**: Update daily supplement intake

### Multi-User Environment
- **Account Switching**: Logout to return to user selection
- **Data Privacy**: Each user has completely separate data
- **Guest Access**: Try app features without registration
- **User Management**: All accounts managed locally

## 🏆 Achievement System

### Individual Achievements
- **Week Warrior**: 7-day workout streak
- **Strength Builder**: Complete 10 strength workouts
- **Supplement Pro**: 30 days consistent supplement intake
- **Cardio King**: Complete 20 cardio sessions
- **Goal Crusher**: Meet monthly workout goals
- **Lightning Streak**: 14-day workout streak

### Progress Tracking
- **Personal Streaks**: Individual consistency tracking
- **Badge Collection**: Unlock achievements per user
- **Goal Completion**: Weekly and monthly targets
- **Progress Visualization**: Charts and statistics

## 📊 Data & Analytics

### Individual User Insights
- **Workout Frequency**: Weekly and monthly patterns
- **Duration Trends**: Average session length over time
- **Supplement Adherence**: Daily intake consistency
- **Achievement Progress**: Badge unlock status
- **Goal Completion**: Target vs. actual performance

### Data Export
- **JSON Export**: Complete user data download
- **CSV Format**: Spreadsheet-compatible export
- **Backup System**: Local data preservation
- **Import/Export**: Data portability between devices

## 🔧 Customization

### User Preferences
- **Weekly Goals**: Set personalized workout targets
- **Notification Settings**: Enable/disable reminders
- **Theme Options**: Light/dark mode preferences
- **Supplement Management**: Custom supplement types

### Avatar System
- **16+ Options**: Diverse fitness-themed avatars
- **Profile Personalization**: Visual user identification
- **Achievement Integration**: Special avatars for milestones
- **Color Customization**: Avatar background options

## 🌐 Browser Compatibility

### Supported Browsers
- **Chrome**: 90+ (recommended)
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Mobile Support
- **iOS Safari**: Full functionality
- **Chrome Mobile**: Complete feature set
- **Responsive Design**: Optimized for touch interfaces
- **PWA Ready**: Can be installed as app

## 🔮 Future Enhancements

### Planned Features
- **Cloud Synchronization**: Cross-device data sync
- **Social Features**: Workout sharing and challenges
- **Wearable Integration**: Fitness tracker connectivity
- **Advanced Analytics**: Machine learning insights
- **Nutrition Tracking**: Meal logging integration

### Community Features
- **Group Challenges**: Multi-user fitness competitions
- **Progress Sharing**: Social media integration
- **Workout Buddies**: Partner workout tracking
- **Community Achievements**: Collaborative goals

## 📄 License & Contributing

### Open Source
- **License**: MIT License
- **Contributions**: Welcome and encouraged
- **Issues**: Report bugs and feature requests
- **Pull Requests**: Submit improvements

### Development
- **Code Quality**: Clean, documented JavaScript
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliance
- **Performance**: Optimized loading and interactions

---

**Built with ❤️ for the fitness community. Track consistently, achieve greatness, together.**

*Version 2.0 - Multi-User Support*