# Mahoro Hyacinthe - React Developer Portfolio

A professional portfolio website built with React, TypeScript, Vite, and Tailwind CSS, showcasing my skills and projects as a React developer completing a bootcamp at Solvit Africa.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with glassmorphism effects
- **Smooth Animations**: Framer Motion for engaging user experience
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **SEO Optimized**: Meta tags and Open Graph properties
- **Contact Form**: React Hook Form with Google reCAPTCHA integration
- **Reflection Journal**: Personal blog with localStorage functionality
- **Project Showcase**: Dynamic project loading with lazy loading
- **CV Section**: Downloadable documents and skills overview

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── NavBar.tsx      # Navigation with glassmorphism
│   ├── Hero.tsx        # Hero section with video
│   ├── SocialLinks.tsx # Social media links
│   ├── ProjectCard.tsx # Project display card
│   ├── JournalCard.tsx # Journal entry card
│   ├── ContactForm.tsx # Contact form with validation
│   └── CVSection.tsx   # CV and cover letter section
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About me page
│   ├── CV.tsx          # CV and documents
│   ├── Projects.tsx    # Projects showcase
│   ├── Journal.tsx     # Reflection journal
│   ├── Contact.tsx     # Contact page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
│   ├── useProjects.ts  # Projects data fetching
│   └── useJournal.ts   # Journal functionality
├── types/              # TypeScript interfaces
│   ├── Project.ts      # Project interface
│   ├── JournalEntry.ts # Journal entry interface
│   ├── FormData.ts     # Form data interfaces
│   └── index.ts        # Type exports
├── data/               # Static data files
│   ├── projects.json   # Projects data
│   └── journal.json    # Journal entries
├── utils/              # Utility functions
│   └── api.ts          # Axios configuration
└── assets/             # Static assets
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/MahoroHyacinthe/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment to Vercel

### Method 1: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Method 2: GitHub Integration

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`

3. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with:
- Custom colors: ivory (#F8F1E9), amber (#F59E0B), darkGray (#1F2937)
- Custom fonts: Poppins (headings), Inter (body text)
- Dark mode support

### Google reCAPTCHA Setup

1. Go to [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Create a new site with reCAPTCHA v2
3. Add your domain to the list
4. Copy the site key to your environment variables

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Copy the service ID, template ID, and public key to your environment variables

## 📱 Features Overview

### Navigation
- Responsive navbar with glassmorphism effect
- Dark/light mode toggle
- Mobile hamburger menu with animations

### Hero Section
- Full-screen gradient background
- Embedded YouTube video introduction
- Call-to-action button with smooth scrolling

### Projects Section
- Dynamic project loading from JSON
- Lazy loading for images
- Hover effects and animations
- "Load More" functionality

### Journal Section
- Personal reflection entries
- Topic filtering
- Add new entries (stored in localStorage)
- Responsive card layout

### Contact Section
- Form validation with React Hook Form
- Google reCAPTCHA integration
- Social media links
- Professional contact information

### CV Section
- Downloadable CV and cover letter
- Skills, education, and experience overview
- Glassmorphism card design

## 🎨 Design System

### Colors
- **Primary**: Ivory (#F8F1E9)
- **Accent**: Amber (#F59E0B)
- **Dark**: Dark Gray (#1F2937)
- **Background**: White (#FFFFFF)

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

### Effects
- Glassmorphism with backdrop blur
- Smooth hover transitions
- Framer Motion animations
- Responsive design patterns

## 🔍 SEO Optimization

- Meta tags for search engines
- Open Graph properties for social sharing
- Semantic HTML structure
- Accessible design with ARIA labels
- Fast loading with Vite optimization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Mahoro Hyacinthe**
- Email: mahoro.hyacinthe@example.com
- GitHub: [@MahoroHyacinthe](https://github.com/MahoroHyacinthe)
- LinkedIn: [Mahoro Hyacinthe](https://linkedin.com/in/mahoro-hyacinthe)

---

Built with ❤️ using React, TypeScript, and modern web technologies.