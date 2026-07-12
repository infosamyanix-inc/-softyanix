# Softyanix - Modern Software House Website

A premium, fully responsive software house website built with React + Vite for the frontend and Node.js + Express for the backend. Features include dark/light mode, smooth animations, contact form integration, and a professional design with glassmorphism effects.

## 🚀 Features

- **Modern Design**: Premium dark/light mode UI with gradient highlights
- **Fully Responsive**: Mobile-friendly design for all screen sizes
- **Smooth Animations**: CSS animations with fade-in, slide, and scale effects
- **Dark/Light Mode Toggle**: Theme switcher in navbar
- **Contact Form Integration**: Backend email integration with nodemailer
- **WhatsApp Integration**: One-click WhatsApp contact button
- **Project Portfolio**: Showcase your projects with filtering
- **Service Cards**: Display your services with detailed information
- **Testimonials**: Client testimonial slider
- **Newsletter Subscription**: Footer newsletter signup
- **SEO Optimized**: Meta tags and semantic HTML
- **Performance Optimized**: Lazy loading and code splitting

## 📁 Project Structure

```
softyanix-main/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with dark mode toggle
│   │   ├── Footer.tsx          # Footer with newsletter signup
│   │   ├── ScrollToTop.tsx     # Scroll-to-top button
│   │   ├── WhatsAppButton.tsx  # WhatsApp CTA button
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   └── ui/                 # shadcn/ui components
│   ├── pages/
│   │   └── HomePage.tsx        # Main page with all sections
│   ├── lib/
│   │   ├── api.ts              # API utilities
│   │   └── utils.ts            # Utility functions
│   ├── App.tsx                 # Main app component with routing
│   ├── App.css                 # Global styles
│   ├── index.css               # Tailwind + animations
│   └── main.tsx                # React DOM entry point
├── backend/
│   ├── routes/
│   │   ├── contact.js          # Contact form endpoint
│   │   └── whatsapp.js         # WhatsApp redirect
│   ├── server.js               # Express server
│   ├── .env                    # Environment variables
│   └── package.json            # Backend dependencies
├── public/                     # Static assets
├── package.json                # Frontend dependencies
├── tailwind.config.ts          # Tailwind CSS configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # This file
```

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Pre-built components
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **React Query** - Data fetching
- **React Hook Form** - Form handling
- **Sonner** - Toast notifications

### Backend

- **Node.js** - Runtime environment
- **Express** - Web framework
- **nodemailer** - Email service
- **CORS** - Cross-origin support
- **dotenv** - Environment variables

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v16 or higher)
- **npm** or **bun** package manager
- **Git**
- Gmail account with [App Password](https://myaccount.google.com/apppasswords) (for email functionality)

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/softyanix.git
cd softyanix
```

### 2. Install Frontend Dependencies

```bash
npm install
# or
bun install
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
cd ..
```

### 4. Configure Environment Variables

Create/update `.env` file in the `backend` folder:

```env
# SMTP Configuration (Gmail)
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password        # Use App Password, not regular password
RECEIVER_EMAIL=your_email@gmail.com

# Server Configuration
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# WhatsApp Configuration
WHATSAPP_PHONE=923150657943       # Your WhatsApp number with country code
```

### 5. Generate Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication if not already enabled
3. Generate [App Password](https://myaccount.google.com/apppasswords)
4. Use the generated 16-character password in `.env`

## 🚀 Running the Project

### Development Mode

#### Terminal 1 - Frontend Dev Server:

```bash
npm run dev
# Frontend runs on http://localhost:5173
```

#### Terminal 2 - Backend Dev Server:

```bash
cd backend
npm run dev
# Backend runs on http://localhost:5000
```

### Using VS Code Tasks

The project includes pre-configured tasks:

1. **Install Frontend Packages**: `Ctrl+Shift+B` → Select "Install Frontend Packages"
2. **Install Backend Packages**: `Ctrl+Shift+B` → Select "Install Backend Packages"
3. **Run Frontend Dev Server**: `Ctrl+Shift+B` → Select "Run Frontend Dev Server"

## 📝 Configuration

### Update Your Information

Edit the following files to add your company information:

1. **src/pages/HomePage.tsx** - Update:
   - Company stats (Projects, Clients, etc.)
   - Team information
   - Services and pricing
   - Projects/Portfolio
   - Contact details

2. **backend/.env** - Update:
   - Email address
   - WhatsApp number
   - Other contact details

3. **src/components/Footer.tsx** - Update:
   - Social media links
   - Contact information
   - Company description

4. **src/components/Navbar.tsx** - Update:
   - Logo/brand colors
   - Navigation links

## 🎨 Customization

### Colors & Theme

Edit `src/index.css` and `tailwind.config.ts` to customize:

- **Primary Color**: Deep Blue (currently `222 84% 20%`)
- **Accent Color**: Electric Green (currently `142 76% 36%`)
- **Shadows**: Glow effects and shadows
- **Gradients**: Background and text gradients

### Animations

All animations are defined in `src/index.css`:

- `fadeInUp` - Fade in while moving up
- `fadeInDown` - Fade in while moving down
- `slideInLeft` - Slide from left
- `slideInRight` - Slide from right
- `scaleIn` - Scale in effect
- `float` - Floating animation
- `glow` - Glowing effect

### Adding New Sections

1. Add section ID: `<section id="new-section">`
2. Update navigation: Add to `navItems` in Navbar
3. Add styling: Use `section-shell`, `section-soft`, or `section-muted` classes
4. Add animations: Use `animate-fade-in-up` and other animation classes

## 📚 Pages & Sections

### Home Page

- **Hero Section** - Large heading with CTA buttons
- **Services Highlight** - 4 featured services with images
- **Detailed Services** - 6 services with features and pricing
- **Development Process** - 4-step process breakdown
- **Benefits & Testimonials** - Why choose us + client reviews
- **Projects** - Portfolio showcase with filtering
- **About** - Company stats, mission, skills, values, timeline
- **Contact** - Contact form with company info
- **Final CTA** - Call-to-action banner

## 🔌 API Endpoints

### Contact Form

- **POST** `/api/contact/send-email`
- Sends email to company and confirmation to user
- Requires: `name`, `email`, `message`
- Optional: `company`, `service`, `budget`, `timeline`

### Health Check

- **GET** `/health` - Server health status
- **GET** `/` - Server info

### WhatsApp

- **GET** `/api/whatsapp/redirect` - Redirect to WhatsApp chat

## 🔒 Security

- CORS enabled with frontend URL
- Request logging
- Error handling
- Email validation
- Rate limiting recommended for production

## 📦 Building for Production

### Build Frontend

```bash
npm run build
# Output: dist/
```

### Build Backend (if needed)

```bash
cd backend
npm run build
```

### Environment Variables for Production

Update `.env` with production values:

```env
NODE_ENV=production
FRONTEND_URL=https://your-domain.com
```

## 🚀 Deployment Options

### Frontend (Vercel, Netlify)

```bash
npm run build
# Deploy 'dist' folder
```

### Backend (Heroku, Railway, Render)

1. Push to GitHub
2. Connect to hosting platform
3. Set environment variables
4. Deploy

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🐛 Troubleshooting

### Email not sending

- Check Gmail App Password in `.env`
- Verify 2FA is enabled on Gmail
- Check RECEIVER_EMAIL is correct
- Allow "Less secure apps" if needed

### API connection error

- Ensure backend is running on port 5000
- Check CORS_ORIGIN in backend/.env
- Verify frontend is on port 5173

### Styling issues

- Clear cache: `npm run build` then refresh
- Check Tailwind classes are present
- Verify dark mode toggle works

### Animations not showing

- Check browser supports CSS animations
- Verify `animate-fade-in-up` class applied
- Check animation duration is appropriate

## 📊 Performance Tips

1. **Image Optimization**: Use WebP format where possible
2. **Code Splitting**: Components use lazy loading
3. **Caching**: Configure browser cache headers
4. **Compression**: Enable gzip on server
5. **CDN**: Use CDN for static assets

## 🎯 SEO Optimization

- Semantic HTML markup
- Meta descriptions
- Open Graph tags
- Structured data (JSON-LD)
- Sitemap included
- Robots.txt configured

## 📞 Support & Contact

- **Email**: infosamyanix@gmail.com
- **WhatsApp**: +92 (315) 065-7943
- **GitHub**: [Softyanix](https://github.com/infosamyanix-inc/-softyanix)

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 Changelog

### Version 1.0.0

- Initial release
- All major features implemented
- Dark/light mode support
- Contact form integration
- Portfolio showcase
- Newsletter subscription

---

**Built with ❤️ by Softyanix**

Made with React, Vite, Node.js, and modern web technologies.
