# Pixel Rival: Refined Gamified Habit Tracker with AI Rival

A Flutter-based mobile app that gamifies habit tracking through competition with an AI rival. Complete your daily goals to earn XP, or watch your rival gain ground when you miss them! Now refined with improved UX, better data handling, and streamlined goal creation.

## 🆕 Latest Refinements (v2.1)

### **Enhanced User Experience**
- **Proper Data Prefilling**: Settings screen now shows actual user values instead of placeholders
- **Improved Goal Display**: Removed default example goals - shows helpful placeholder when no goals exist
- **Streamlined Goal Creation**: Time-based XP system (1 minute = 1 XP) with dropdown time selection
- **Better Storage**: Persistent data handling using SharedPreferences for web and mobile

### **Refined Goal Creation Flow**
- **Time-Based XP**: Users select time to spend (10, 15, 30, 45, 60, 90, 120 minutes)
- **Automatic XP Calculation**: XP automatically assigned based on time (no manual XP input)
- **Clear Visual Feedback**: Shows XP calculation in goal creation dialog
- **Intuitive Interface**: Dropdown selection for common time intervals

### **Improved Data Management**
- **Real Data Display**: Settings page shows actual saved user information
- **Persistent Storage**: All user profile and goal data saved locally
- **Clean State Management**: Proper loading and saving of user preferences
- **No Default Clutter**: Clean slate approach - only user-created content appears

## Core Features (Milestone 1)

### **Daily Goal Creation & Tracking**
- Create goals by selecting time commitment (10-120 minutes)
- Automatic XP assignment (1 minute = 1 XP)
- Interactive pixel-style checkboxes
- Real-time XP updates with animations
- Add/remove goals dynamically

### **AI Rival System**
- **Smart XP Gain**: Rival gains 1-3 XP per incomplete goal every 30 seconds
- **Real-time Competition**: Live XP comparison with visual feedback
- **Level Progression**: Both user and rival level up every 100 XP
- **Win/Loss Tracking**: Daily battle outcomes

### **Gamification Elements**
- **Time-Based XP System**: Earn points based on time commitment
- **Streak Bonuses**: 10% bonus XP for maintaining consistency
- **Level System**: Visual progression with level bars
- **Animated Feedback**: Smooth XP animations and haptic feedback

## User Experience Improvements

### **Onboarding & Personalization**
- **Welcome Screen**: Clean, friendly onboarding flow for new users
- **Personal Profile**: Collect user's name, profession, birthday, and gender
- **Personalized Greetings**: App addresses users by name and profession
- **Birthday Reminders**: Special greeting on user's birthday

### **Settings & Profile Management**
- **Real Data Display**: Shows actual saved user information (not placeholders)
- **Easy Editing**: Update personal information anytime
- **Comprehensive Game Info**: Detailed how-to-play instructions
- **AI Rival Logic**: Clear explanation of rival XP mechanics

### **Goal Management**
- **Clean Interface**: No default goals - shows helpful placeholder text
- **Time-Based Creation**: Select time commitment instead of manual XP
- **Visual XP Feedback**: Clear indication of XP earned per goal
- **Persistent Tracking**: Goals and progress saved between sessions

## Design & User Experience

### **Visual Design**
- **Pixel Art Aesthetic**: Custom avatars and retro-styled UI
- **Roboto Font**: Clean, readable typography throughout
- **Black & White Theme**: Minimalist color palette
- **Responsive Layout**: Works on desktop and mobile browsers

### **Navigation**
- **Home Screen**: Main goal tracking interface with personalized greeting
- **Stats Screen**: Progress tracking with completion rates and level bars
- **Settings Screen**: Profile management with real data display
- **Bottom Navigation**: Easy switching between screens

## Technical Implementation

### **Frontend**
- **Framework**: Flutter 3.33.0 with Dart
- **Fonts**: Google Fonts (Roboto Regular 400)
- **State Management**: Built-in Flutter state management
- **Storage**: SharedPreferences for persistent user data
- **Platform**: Web-first with mobile responsiveness

### **Dependencies**
- `google_fonts: ^6.1.0` - Roboto font integration
- `shared_preferences: ^2.2.2` - Local data storage
- `cupertino_icons: ^1.0.8` - iOS-style icons

## User Flow

### **First-Time Users**
1. **Splash Screen**: Welcome with app logo and loading
2. **Onboarding**: Collect personal information (name, profession, birthday, gender)
3. **Main App**: Clean interface with "Your created goals will appear here" placeholder

### **Returning Users**
1. **Splash Screen**: Quick loading with birthday check
2. **Birthday Greeting**: Special message if it's user's birthday
3. **Main App**: Continue with saved progress and personalized experience

### **Goal Creation Flow**
1. **Click + Button**: Opens goal creation dialog
2. **Enter Goal Title**: Type what you want to accomplish
3. **Select Time**: Choose from 10, 15, 30, 45, 60, 90, or 120 minutes
4. **Auto XP Calculation**: XP automatically set based on time (1 min = 1 XP)
5. **Add Goal**: Goal appears in main list with time and XP display

## Game Mechanics

### **Time-Based XP System**
- **Goal Creation**: Select time commitment (10-120 minutes)
- **XP Calculation**: 1 minute = 1 XP (automatic calculation)
- **Streak Bonuses**: 10% bonus per streak level
- **Rival Competition**: Rival gains XP for missed goals
- **Level Progression**: 100 XP per level for both user and rival

### **AI Rival Logic**
The AI rival gains XP based on:
- Number of incomplete goals
- Time elapsed (updates every 30 seconds)
- Random factor (1-3 XP per incomplete goal)
- More incomplete goals = faster rival progression

### **Data Persistence**
- **User Profile**: Name, profession, birthday, gender saved locally
- **Goal Data**: All goals and completion status persisted
- **Game State**: XP, levels, and progress maintained between sessions
- **Settings**: Real user data displayed (no placeholder values)

## How to Use

### **Setting Up Your Profile**
1. Enter your name and select your profession
2. Optionally add your birthday for special greetings
3. Choose gender preference (optional)
4. Complete onboarding to start tracking

### **Creating Goals**
1. **Click + Button**: Open goal creation dialog
2. **Enter Title**: Describe what you want to accomplish
3. **Select Time**: Choose how long you'll spend (10-120 minutes)
4. **View XP**: See automatic XP calculation (1 min = 1 XP)
5. **Add Goal**: Goal appears in your list

### **Daily Habit Tracking**
1. **Check Off Goals**: Tap checkboxes to mark goals complete
2. **Earn XP**: Gain XP equal to time committed
3. **Beat Your Rival**: Complete goals before rival gains too much XP
4. **Review Results**: Use "Complete Day" to see daily battle outcome

### **Managing Your Profile**
1. Go to Settings → Profile → Edit
2. See your actual saved information (not placeholders)
3. Update name, profession, birthday, or gender
4. Changes are saved automatically

## Development & Deployment

### **Running Locally**
```bash
# Development server
flutter run -d web-server --web-port=8080

# Production build
flutter build web
```

### **Project Structure**
```
pixel_rival/
├── lib/
│   └── main.dart              # Complete refined application code
├── assets/
│   ├── images/
│   │   ├── avatar.png         # User avatar (pixel art)
│   │   └── rival.png          # AI rival avatar (pixel art)
│   └── fonts/
│       └── PixelifySans-Medium.ttf  # Pixel font (legacy)
├── build/
│   └── web/                   # Production web build
└── pubspec.yaml               # Dependencies and configuration
```

## Key Improvements Summary

### **UX Refinements**
- ✅ **Real Data Display**: Settings show actual user values, not placeholders
- ✅ **Clean Goal Interface**: No default examples, helpful placeholder text
- ✅ **Time-Based XP**: Intuitive time selection with automatic XP calculation
- ✅ **Persistent Storage**: Proper data handling for web and mobile

### **Goal Creation Improvements**
- ✅ **Dropdown Time Selection**: 10, 15, 30, 45, 60, 90, 120 minute options
- ✅ **Automatic XP Calculation**: 1 minute = 1 XP (no manual input needed)
- ✅ **Visual Feedback**: Clear XP display in creation dialog
- ✅ **Streamlined Flow**: Faster, more intuitive goal creation

### **Data Management**
- ✅ **SharedPreferences Integration**: Proper local storage for all platforms
- ✅ **Profile Prefilling**: Settings form shows saved user information
- ✅ **Clean State**: No default clutter, only user-created content
- ✅ **Persistent Sessions**: Data maintained between app launches

## Future Enhancements

### **Planned Features**
- **Cloud Sync**: Cross-device data synchronization
- **Social Features**: Friend competition and leaderboards
- **Advanced AI**: More sophisticated rival behavior patterns
- **Mobile Apps**: Native iOS and Android versions
- **Analytics**: Detailed progress tracking and insights

### **Technical Improvements**
- **Backend Integration**: Firebase/Supabase for real-time data
- **Push Notifications**: Reminder and celebration alerts
- **Offline Support**: Local data with sync capabilities
- **Performance**: Optimized animations and loading

## Version History

### **v2.1 (Current) - Refined Experience**
- Proper user data prefilling in settings
- Clean goal interface with helpful placeholders
- Time-based XP system with dropdown selection
- Improved data persistence and storage

### **v2.0 - Enhanced Experience**
- User onboarding and personalization
- Birthday reminder system
- Roboto font integration
- Enhanced settings and profile management

### **v1.0 - Core Functionality**
- Basic habit tracking with XP system
- AI rival competition
- Pixel art design
- Real-time XP updates

## Development Notes

This refined version focuses on improving the user experience through better data handling, cleaner interfaces, and more intuitive goal creation. The time-based XP system makes goal creation more meaningful by connecting time commitment to reward, while the improved data management ensures users see their actual information rather than placeholder text.

The app now provides a truly personalized experience with persistent data storage, clean interfaces, and streamlined workflows that make habit tracking both engaging and efficient.

