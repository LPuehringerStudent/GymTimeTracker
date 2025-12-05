# Gym Tracker - Fitness & Supplement Tracking Web App

A sophisticated, feature-rich web application for tracking gym visits and supplement intake with beautiful data visualization and achievement system.

## 🌟 Features

### Core Functionality
- **Gym Check-in System**: One-click check-in with workout type selection and duration tracking
- **Supplement Tracking**: Visual supplement cards with daily intake logging and streak tracking
- **Progress Analytics**: Interactive charts, calendar heatmap, and comprehensive statistics
- **Achievement System**: Unlockable badges and milestones to motivate consistency
- **Local Data Storage**: All data persisted in browser local storage for privacy

### Interactive Components
- **Timer Interface**: Start/pause/stop workout duration tracking
- **Dynamic Charts**: ECharts.js powered visualizations with custom theming
- **Calendar Heatmap**: 30-day workout activity visualization
- **Supplement Management**: Add, edit, and remove supplements with dosage tracking
- **Goal Setting**: Weekly workout goals and progress tracking

### Visual Design
- **Modern Aesthetic**: Inspired by editorial design with sophisticated color palette
- **Smooth Animations**: Anime.js powered micro-interactions and transitions
- **Responsive Design**: Mobile-first approach with touch-friendly interfaces
- **Custom Typography**: Playfair Display + Inter font pairing
- **Color Palette**: Warm terracotta, sage green, and cream tones

## 🎨 Design Philosophy

The application follows a minimalist yet sophisticated design approach, drawing inspiration from high-end fitness and wellness publications. The visual language emphasizes:

- **Clean Lines**: Generous white space and purposeful design elements
- **Organic Shapes**: Subtle curves and flowing elements suggesting movement
- **Sophisticated Textures**: Subtle gradients and depth without overwhelming
- **Editorial Inspiration**: Professional aesthetic that motivates and inspires

## 🛠 Technical Implementation

### Libraries & Technologies
- **Anime.js**: Smooth animations and micro-interactions
- **ECharts.js**: Data visualization with custom theming
- **Tailwind CSS**: Utility-first styling framework
- **Local Storage**: Client-side data persistence
- **Responsive Design**: Mobile-first responsive approach

### Data Structure
- **Workout Logs**: Timestamp, type, duration, and notes
- **Supplement Data**: Name, dosage, timing, and intake history
- **User Settings**: Goals, preferences, and customization options
- **Achievement Progress**: Milestones and badge unlock tracking

## 📱 Pages & Navigation

### 1. Track (index.html)
- Main gym check-in interface
- Daily supplement tracking grid
- Quick stats and achievement notifications
- Workout timer and notes system

### 2. Analytics (analytics.html)
- Comprehensive progress dashboard
- Interactive calendar heatmap
- Workout type distribution charts
- Goal progress tracking
- Achievement gallery

### 3. Settings (settings.html)
- Profile management and preferences
- Supplement management interface
- Data export and backup options
- Theme and appearance settings

## 🚀 Getting Started

### Local Development
1. Clone or download the repository
2. Navigate to the project directory
3. Start a local server:
   ```bash
   python -m http.server 8000
   ```
4. Open `http://localhost:8000` in your browser

### GitHub Hosting
1. Create a new GitHub repository
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Select "Deploy from a branch" and choose "main" branch
5. Your app will be available at `https://[your-username].github.io/[repository-name]`

### File Structure
```
/
├── index.html              # Main tracking interface
├── analytics.html          # Progress analytics
├── settings.html           # User settings
├── main.js                 # Core application logic
├── resources/              # Images and assets
│   ├── hero-fitness.png    # Generated hero image
│   ├── supplements-grid.png # Supplement visualization
│   └── progress-abstract.png # Abstract progress background
├── design.md              # Visual design documentation
├── interaction.md         # Interaction design guide
└── outline.md             # Project structure outline
```

## 🎯 Usage Guide

### Gym Tracking
1. Select workout type from dropdown
2. Click "Check In to Gym" to start session
3. Use timer controls to track duration
4. Add workout notes (optional)
5. Click "Stop" to complete and save workout

### Supplement Management
1. Navigate to Settings page
2. Click "Add Supplement" to create new supplement
3. Fill in name, dosage, and timing
4. On main page, click "Take Now" to log intake
5. Track daily progress and streaks

### Goal Setting
1. Go to Settings page
2. Set weekly workout goal (2-7 workouts)
3. Monitor progress in Analytics page
4. Achieve goals to unlock badges

## 📊 Data Export & Backup

- **Export Data**: Download all workout and supplement data as JSON
- **Local Storage**: All data automatically saved in browser
- **Cloud Backup**: Future feature for cross-device sync
- **Data Privacy**: No data sent to external servers

## 🏆 Achievement System

Unlock badges for consistent behavior:
- **Week Warrior**: 7-day workout streak
- **Strength Builder**: Complete 10 strength workouts
- **Supplement Pro**: 30 days of consistent supplement intake
- **Cardio King**: Complete 20 cardio sessions
- **Goal Crusher**: Meet monthly workout goals
- **Lightning Streak**: 14-day workout streak

## 🔧 Customization

### Theme Colors
The application uses CSS custom properties for theming:
```css
:root {
    --terracotta: #D2691E;
    --sage: #9CAF88;
    --cream: #F5F5DC;
    --charcoal: #36454F;
}
```

### Supplement Management
- Add custom supplements with personalized dosages
- Set timing preferences (morning, afternoon, evening, daily)
- Track individual supplement streaks
- Remove supplements as needed

## 🌐 Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Support**: iOS Safari, Chrome Mobile
- **Local Storage**: Required for data persistence
- **JavaScript**: ES6+ features used

## 📈 Future Enhancements

- Cloud synchronization across devices
- Social features and workout sharing
- Advanced analytics and insights
- Integration with fitness wearables
- Custom workout plan creation
- Nutrition tracking integration

## 🤝 Contributing

This project is open for contributions! Areas for improvement:
- Additional achievement badges
- Enhanced data visualization
- Mobile app development
- Integration with fitness APIs
- Performance optimizations

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for fitness enthusiasts who value both functionality and beautiful design.**