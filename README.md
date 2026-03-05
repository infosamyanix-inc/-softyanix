<div align="center">

# 🚀 Softyanix - Digital Solutions Agency

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)

**A modern, full-featured digital agency website showcasing expertise in MERN stack development, AI chatbots, mobile apps, and UI/UX design.**

[Live Demo](https://softyanix.com) • [Report Bug](https://github.com/infosamyanix-inc/-softyanix/issues) • [Request Feature](https://github.com/infosamyanix-inc/-softyanix/issues)

</div>

---

## ✨ Features

<table>
  <tr>
    <td width="50%">
      <h3>🎨 Modern UI/UX</h3>
      <ul>
        <li>Fully responsive design across all devices</li>
        <li>Built with shadcn/ui component library</li>
        <li>Tailwind CSS for utility-first styling</li>
        <li>Smooth animations and transitions</li>
      </ul>
    </td>
    <td width="50%">
      <h3>⚡ Performance</h3>
      <ul>
        <li>Powered by Vite for lightning-fast builds</li>
        <li>Code splitting and lazy loading</li>
        <li>Optimized assets and images</li>
        <li>SEO-friendly architecture</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🔒 Type Safety</h3>
      <ul>
        <li>Written in TypeScript</li>
        <li>Comprehensive type definitions</li>
        <li>Better IDE support and autocomplete</li>
        <li>Reduced runtime errors</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🛠️ Developer Experience</h3>
      <ul>
        <li>Hot module replacement (HMR)</li>
        <li>ESLint for code quality</li>
        <li>Well-organized folder structure</li>
        <li>Comprehensive documentation</li>
      </ul>
    </td>
  </tr>
</table>

### 🌟 Core Functionality

- 📱 **WhatsApp Integration** - Direct client communication via WhatsApp
- 📬 **Contact Forms** - Backend API for handling inquiries
- 🔄 **Multi-Page Application** - Seamless navigation between pages
- 🎯 **Portfolio Showcase** - Dynamic project gallery with filtering
- 💼 **Services Display** - Comprehensive service offerings

## 🛠️ Tech Stack

<div align="center">

| Frontend       | Backend   | Tools & Platforms |
| -------------- | --------- | ----------------- |
| React 18       | Node.js   | Vite              |
| TypeScript 5.8 | Express 5 | ESLint            |
| Tailwind CSS   | CORS      | Git               |
| shadcn/ui      | Dotenv    | VS Code           |
| React Router   | Nodemon   | npm/bun           |
| TanStack Query | -         | -                 |
| Lucide Icons   | -         | -                 |

</div>

### Frontend Dependencies

```json
{
  "react": "^18.3.1",
  "typescript": "^5.8.3",
  "vite": "^5.4.19",
  "tailwindcss": "^3.4.17",
  "react-router-dom": "^6.30.1"
}
```

### Backend Dependencies

```json
{
  "express": "^5.2.1",
  "cors": "^2.8.5",
  "dotenv": "^16.4.5"
}
```

## 📋 Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher) or **bun** (v1.0.0 or higher)
- **Git** - [Download](https://git-scm.com/)

Check your installations:

```bash
node --version
npm --version
git --version
```

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/infosamyanix-inc/-softyanix.git
cd -softyanix
```

### 2️⃣ Install Frontend Dependencies

```bash
npm install
# or
bun install
```

### 3️⃣ Install Backend Dependencies

```bash
cd backend
npm install
cd ..
```

### 4️⃣ Environment Configuration

#### Frontend Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
VITE_API_URL=http://localhost:5000
VITE_WHATSAPP_PHONE=923402573560
VITE_EMAIL=contact@softyanix.com
```

#### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```bash
cd backend
cp .env.example .env
```

Edit `backend/.env`:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
WHATSAPP_PHONE=923402573560
```

## 🚀 Running the Application

### Development Mode

#### Option 1: Using NPM Tasks (Recommended)

**Terminal 1 - Frontend:**

```bash
npm run dev
```

Frontend runs on: `http://localhost:5173`

**Terminal 2 - Backend:**

```bash
cd backend
npm run dev
```

Backend API runs on: `http://localhost:5000`

#### Option 2: Using Task Runner

If you're using VS Code, you can use the built-in tasks:

- `Run Frontend Dev Server` - Starts the frontend
- `Run Backend Dev Server` - Starts the backend

### Production Build

#### Build Frontend

```bash
npm run build
```

The build output will be in the `dist/` directory.

#### Preview Production Build

```bash
npm run preview
```

#### Run Backend in Production

```bash
cd backend
NODE_ENV=production npm start
```

## 📁 Project Structure

```
-softyanix/
├── 📂 backend/                  # Backend API server
│   ├── 📂 routes/              # API route handlers
│   │   └── whatsapp.js        # WhatsApp integration endpoints
│   ├── .env.example           # Backend environment template
│   ├── package.json           # Backend dependencies
│   └── server.js              # Express server configuration
│
├── 📂 src/                     # Frontend source code
│   ├── 📂 components/         # React components
│   │   ├── 📂 ui/            # shadcn/ui components
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   └── WhatsAppButton.tsx
│   │
│   ├── 📂 pages/             # Page components
│   │   ├── HomePage.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   │
│   ├── 📂 config/            # Configuration files
│   │   └── constants.ts      # App constants and config
│   │
│   ├── 📂 types/             # TypeScript type definitions
│   │   └── index.ts          # Global type definitions
│   │
│   ├── 📂 hooks/             # Custom React hooks
│   │   └── use-toast.ts
│   │
│   ├── 📂 lib/               # Utility functions
│   │   ├── api.ts           # API client and helpers
│   │   └── utils.ts         # Common utilities
│   │
│   ├── 📂 assets/            # Static assets
│   │   ├── 📂 projects/     # Project images
│   │   └── 📂 services/     # Service images
│   │
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles
│
├── 📂 public/                 # Public static files
│   └── robots.txt
│
├── .env.example              # Frontend environment template
├── .gitignore               # Git ignore rules
├── components.json          # shadcn/ui configuration
├── package.json             # Frontend dependencies
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## 🎨 Customization

### Tailwind Theme

Edit `tailwind.config.ts` to customize:

- Colors and color schemes
- Fonts and typography
- Spacing and sizing
- Breakpoints
- Animations

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {...},
        secondary: {...},
      },
    },
  },
}
```

### shadcn/ui Components

Customize components in `src/components/ui/`:

```bash
# Add new components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

### Environment Variables

Update `.env` files to configure:

- API endpoints
- Contact information
- Social media links
- Feature flags

## 🌐 Deployment

### Frontend Deployment

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify

```bash
# Build the project
npm run build

# Deploy the dist/ folder
netlify deploy --prod --dir=dist
```

#### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting provider
3. Configure the server to serve `index.html` for all routes

### Backend Deployment

#### Railway

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

#### Heroku

```bash
# Login to Heroku
heroku login

# Create app
heroku create softyanix-api

# Deploy
git subtree push --prefix backend heroku main
```

#### DigitalOcean / VPS

1. SSH into your server
2. Clone the repository
3. Install dependencies: `npm install`
4. Set up environment variables
5. Use PM2 to run the server: `pm2 start server.js`

### Environment Variables for Production

Don't forget to set these in your deployment platform:

- `VITE_API_URL` - Your backend API URL
- `PORT` - Backend server port
- `NODE_ENV=production`
- `FRONTEND_URL` - Your frontend URL

## 🧪 Testing

```bash
# Run linter
npm run lint

# Type check
npm run type-check

# Run tests (when implemented)
npm test
```

## 📊 Performance Optimization

- ✅ Code splitting with React lazy loading
- ✅ Image optimization
- ✅ Minified production builds
- ✅ Tree shaking
- ✅ CSS purging with Tailwind
- ✅ Gzip compression ready

## 🔐 Security Best Practices

- Environment variables for sensitive data
- CORS configuration
- Input validation and sanitization
- Secure HTTP headers
- Rate limiting (recommended for production)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused
- Write clean, maintainable code

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Development Team** - [Softyanix](https://github.com/infosamyanix-inc)

## 📞 Contact & Support

- **Email**: contact@softyanix.com
- **Phone**: +92 340 257 3560
- **WhatsApp**: [Chat with us](https://wa.me/923402573560)
- **Website**: [softyanix.com](https://softyanix.com)
- **GitHub Issues**: [Report a bug](https://github.com/infosamyanix-inc/-softyanix/issues)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Lucide Icons](https://lucide.dev/) - Icon library

## 📈 Roadmap

- [ ] Add comprehensive test suite
- [ ] Implement email service for contact form
- [ ] Add blog section
- [ ] Integrate analytics dashboard
- [ ] Add multilingual support
- [ ] Implement dark mode
- [ ] Add more interactive animations
- [ ] Create mobile app version

---

<div align="center">

**Built with ❤️ by the Softyanix Team**

⭐ Star us on GitHub if you find this project useful!

[Website](https://softyanix.com) • [GitHub](https://github.com/infosamyanix-inc) • [LinkedIn](https://linkedin.com/company/softyanix)

</div>
