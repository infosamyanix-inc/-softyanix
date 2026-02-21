# Softyanix - Digital Solutions Agency

A modern, full-featured website for Softyanix, showcasing our expertise in MERN stack development, AI chatbots, mobile apps, and UI/UX design.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Fast Performance**: Powered by Vite for optimal build and development speed
- **Type-Safe**: Written in TypeScript for better code quality
- **WhatsApp Integration**: Direct communication with clients via WhatsApp
- **Contact Form**: Backend API for handling contact form submissions
- **Multi-Page Application**: Home, Services, Projects, About, and Contact pages
- **Smooth Animations**: Engaging user experience with modern animations

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe code
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **React Router** - Client-side routing
- **Lucide Icons** - Modern icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **bun** - Package manager

## 🔧 Installation

1. **Clone the repository**
```sh
git clone https://github.com/infosamyanix-inc/-softyanix.git
cd -softyanix
```

2. **Install frontend dependencies**
```sh
npm install
# or
bun install
```

3. **Install backend dependencies**
```sh
cd backend
npm install
cd ..
```

## 🚀 Running the Application

### Development Mode

1. **Start the frontend development server**
```sh
npm run dev
# or
bun dev
```
The frontend will run on `http://localhost:5173`

2. **Start the backend server** (in a separate terminal)
```sh
cd backend
node server.js
```
The backend API will run on `http://localhost:3000`

### Production Build

```sh
# Build the frontend
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
-softyanix/
├── backend/                 # Backend API
│   ├── routes/             # API routes
│   │   └── whatsapp.js    # WhatsApp integration
│   ├── index.js           # Backend entry point
│   └── server.js          # Express server setup
├── src/                    # Frontend source code
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   └── WhatsAppButton.tsx
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── assets/           # Images and static files
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Application entry point
├── public/               # Public static files
└── package.json          # Project dependencies

```

## 🎨 Customization

### Colors and Theming
Edit the theme in `tailwind.config.ts` to customize colors, fonts, and other design tokens.

### Components
All UI components are in `src/components/ui/` and can be customized as needed.

### Content
Update page content in `src/pages/` directory.

## 📧 Contact Form Setup

The contact form sends data to the backend API. To enable email notifications:

1. Configure your email service in the backend
2. Update the API endpoint in `src/pages/Contact.tsx`
3. Set up environment variables for email credentials

## 🌐 Deployment

### Frontend Deployment (Vercel/Netlify)
```sh
npm run build
```
Deploy the `dist` folder to your hosting provider.

### Backend Deployment
Deploy the `backend` folder to a Node.js hosting service (e.g., Heroku, Railway, DigitalOcean).

## 📄 License

This project is proprietary and confidential.

## 🤝 Contributing

For internal development only. Please contact the development team for any changes.

## 📞 Support

For support, email infosamyanix@gmail.com or contact us through our website.

---

**Built with ❤️ by Softyanix Team** 
