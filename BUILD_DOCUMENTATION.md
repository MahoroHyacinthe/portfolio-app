# Build Documentation

## Project Overview
Mahoro Hyacinthe's professional portfolio website built with React 18, TypeScript, Vite, and Tailwind CSS. Features an AI secretary chatbot with voice capabilities, appointment scheduling, and comprehensive portfolio showcase.

## Build Process

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation
```bash
git clone https://github.com/MahoroHyacinthe/portfolio.git
cd portfolio
npm install
```

### Development Build
```bash
npm run dev
```
Starts development server at `http://localhost:5173`

### Production Build
```bash
npm run build
```
Generates optimized production files in `dist/` directory

### Build Verification
```bash
npm run preview
```
Serves production build locally for testing

## Architecture

### Tech Stack
- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Voice**: Web Speech API
- **Icons**: React Icons

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ChatBot.tsx     # AI Secretary with voice
│   ├── Hero.tsx        # Landing section
│   ├── NavBar.tsx      # Navigation
│   └── CVSection.tsx   # Professional profile
├── pages/              # Page components
│   ├── About.tsx       # About page
│   ├── Projects.tsx    # Projects showcase
│   ├── Journal.tsx     # Reflection journal
│   └── Contact.tsx     # Contact form
├── data/               # Static data
│   └── chatbotKnowledge.ts  # AI knowledge base
├── types/              # TypeScript interfaces
└── utils/              # Utility functions
```

## Features Implemented

### Core Features
✅ Responsive portfolio website
✅ Dark/light mode toggle
✅ Smooth animations and transitions
✅ SEO optimized

### AI Secretary Chatbot
✅ Voice recognition (speech-to-text)
✅ Text-to-speech responses
✅ Appointment scheduling system
✅ Message handling for visitors
✅ Comprehensive knowledge base
✅ Auto-greeting on page load

### Portfolio Sections
✅ Hero section with social links
✅ About page with SkillLink information
✅ CV section with downloadable documents
✅ Projects showcase
✅ Reflection journal
✅ Contact form

## Deployment

### Vercel Deployment
1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to web server
```

## Performance Optimizations
- Vite for fast builds and HMR
- Code splitting with React.lazy
- Optimized images and assets
- Tailwind CSS purging
- Framer Motion optimizations

## Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Voice features require modern browser support

## Known Issues
- Voice recognition requires HTTPS in production
- Speech synthesis may need user interaction to start
- Some browsers require permission for microphone access

## Maintenance Notes
- Update dependencies regularly
- Test voice features across browsers
- Monitor chatbot knowledge base accuracy
- Backup appointment data if implementing persistence