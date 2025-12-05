# Gym Tracker - Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html              # Main tracking interface
├── analytics.html          # Progress analytics and dashboard
├── settings.html           # User settings and supplement management
├── main.js                 # Core application logic
├── resources/              # Images and assets
│   ├── hero-fitness.png    # Generated hero image
│   ├── supplements-grid.png # Supplement visualization
│   └── progress-abstract.png # Abstract progress background
├── interaction.md          # Interaction design documentation
├── design.md              # Visual design style guide
└── outline.md             # This project outline
```

## Page Breakdown

### index.html - Main Tracking Interface
**Purpose**: Primary user interaction hub for gym check-ins and daily supplement tracking
**Key Sections**:
- Navigation bar with app branding
- Compact hero section with motivational messaging
- **Gym Check-in Panel**: 
  - Large check-in button with timestamp
  - Workout type selector (Strength, Cardio, Flexibility, Mixed)
  - Duration timer with start/pause/stop controls
  - Quick notes text area
- **Daily Supplement Grid**:
  - Visual cards for each supplement
  - "Take" buttons with timestamp logging
  - Completion status indicators
  - Daily streak counter
- **Quick Stats Display**:
  - Current streak
  - This week's visits
  - Today's supplement progress
- Achievement notifications panel

### analytics.html - Progress Dashboard
**Purpose**: Comprehensive data visualization and progress tracking
**Key Sections**:
- Navigation bar
- Hero section with progress summary
- **Calendar Heatmap**: Monthly attendance visualization
- **Statistics Cards**:
  - Total gym visits
  - Average workout duration
  - Supplement adherence rate
  - Current streak metrics
- **Progress Charts**:
  - Weekly workout frequency line chart
  - Supplement consistency over time
  - Workout type distribution
  - Monthly progress trends
- **Achievement Gallery**:
  - Unlocked badges and milestones
  - Progress towards next achievements
  - Personal records and bests

### settings.html - Configuration & Management
**Purpose**: User preferences, supplement management, and data controls
**Key Sections**:
- Navigation bar
- Settings hero section
- **Profile Management**:
  - User name and preferences
  - Goal setting interface
  - Notification preferences
- **Supplement Management**:
  - Add/edit/remove supplements
  - Set dosage and frequency
  - Schedule reminders
- **Data Controls**:
  - Export workout data
  - Clear data options
  - Backup and restore
- **Theme Settings**:
  - Dark/light mode toggle
  - Color preference adjustments

## Interactive Components

### 1. Gym Check-in System
- One-click check-in with automatic timestamp
- Workout type categorization
- Live duration timer
- Notes and reflection logging

### 2. Supplement Tracking Grid
- Visual supplement cards with images
- One-click "taken" logging
- Daily completion tracking
- Streak visualization

### 3. Progress Analytics
- Interactive calendar heatmap
- Dynamic charts with hover details
- Achievement progress bars
- Goal tracking interfaces

### 4. Data Management
- Local storage persistence
- Data export functionality
- Settings synchronization
- Backup and restore capabilities

## Technical Implementation

### Core Libraries Integration
- **Anime.js**: Button animations, card transitions, achievement celebrations
- **ECharts.js**: All data visualizations with custom terracotta/sage theme
- **Splide.js**: Achievement gallery carousels
- **p5.js**: Subtle background particle effects
- **Pixi.js**: Smooth hover effects and visual transitions

### Data Structure
- Local storage for all user data
- JSON format for workout logs and supplement data
- Automatic backup and restore functionality
- Export capabilities for data portability

### Responsive Design
- Mobile-first approach
- Touch-friendly interactions
- Optimized for gym environment use
- Accessible design patterns