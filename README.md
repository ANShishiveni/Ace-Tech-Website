# Ace Tech Website

A modern, full-stack website for Ace Tech - a leading technology company providing innovative software development, cloud solutions, and digital transformation services.

## 🚀 Features

- **Modern Frontend**: Built with Next.js 14, React 18, and TypeScript
- **Responsive Design**: Fully responsive design using Tailwind CSS
- **Backend API**: Express.js with RESTful endpoints
- **Contact Form**: Working contact form with email notifications
- **Newsletter Signup**: Email subscription system
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Accessible**: WCAG compliance with proper ARIA labels

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Validation**: Express Validator
- **Email**: Nodemailer
- **Security**: Helmet, CORS, Rate Limiting

## 📁 Project Structure

```
ace-tech-website/
├── frontend/                 # Next.js frontend application
│   ├── app/                 # App router pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── services/       # Services page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Footer component
│   │   └── NewsletterSignup.tsx # Newsletter form
│   ├── lib/               # Utility functions
│   └── public/            # Static assets
├── backend/               # Express.js backend
│   ├── routes/           # API routes
│   │   ├── contact.js    # Contact form endpoint
│   │   └── newsletter.js # Newsletter endpoints
│   ├── middleware/       # Custom middleware
│   ├── models/          # Data models (future database integration)
│   ├── utils/           # Utility functions
│   └── server.js        # Main server file
└── package.json         # Root package.json for scripts
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ace-tech-website
   ```

2. **Install dependencies for all packages**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**

   Frontend (.env.local):
   ```bash
   cd frontend
   cp .env.local.example .env.local
   # Edit the file with your API URL
   ```

   Backend (.env):
   ```bash
   cd backend
   cp .env.example .env
   # Edit the file with your configuration
   ```

4. **Start development servers**
   ```bash
   # Start both frontend and backend
   npm run dev

   # Or start them separately
   npm run dev:frontend  # Frontend only (port 3000)
   npm run dev:backend   # Backend only (port 5000)
   ```

### Environment Variables

#### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

#### Backend (.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/acetech
JWT_SECRET=your_jwt_secret_here_change_in_production
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:3000
```

## 📧 Email Configuration

To enable contact form and newsletter functionality:

1. **Gmail Setup** (recommended for development):
   - Enable 2-factor authentication
   - Generate an app password
   - Use the app password in `EMAIL_PASS`

2. **Other SMTP Providers**:
   - Update `EMAIL_HOST` and `EMAIL_PORT`
   - Provide appropriate credentials

## 🔧 Development

### Available Scripts

```bash
# Root level scripts
npm run dev              # Start both frontend and backend
npm run dev:frontend     # Start frontend only
npm run dev:backend      # Start backend only
npm run build           # Build frontend for production
npm run start           # Start production server
npm run install:all     # Install all dependencies

# Frontend scripts (cd frontend)
npm run dev             # Start development server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint

# Backend scripts (cd backend)
npm run dev             # Start with nodemon
npm start              # Start production server
```

### Adding New Pages

1. Create a new folder in `frontend/app/`
2. Add a `page.tsx` file with your component
3. Update navigation in `components/Header.tsx`

### API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `GET /api/newsletter/count` - Get subscriber count
- `GET /api/health` - Health check

## 🎨 Styling

The project uses Tailwind CSS with custom utilities:

- `.gradient-text` - Gradient text effect
- `.btn-primary` - Primary button styles
- `.btn-secondary` - Secondary button styles

## 📱 Responsive Design

All components are designed mobile-first:
- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Large: 1280px and up

## 🔒 Security Features

- **Rate Limiting**: Prevents spam and abuse
- **Input Validation**: Server-side validation for all inputs
- **XSS Protection**: Helmet.js security headers
- **CORS**: Configured for specific origins
- **Input Sanitization**: HTML entities escaped

## 🚀 Deployment

### Frontend (Vercel - Recommended)

1. **Connect to Vercel**:
   ```bash
   npm i -g vercel
   cd frontend
   vercel
   ```

2. **Environment Variables**:
   - Add `NEXT_PUBLIC_API_URL` in Vercel dashboard

### Backend (Railway/Heroku)

1. **Railway**:
   ```bash
   npm i -g @railway/cli
   cd backend
   railway login
   railway init
   railway up
   ```

2. **Environment Variables**:
   - Set all backend environment variables in your platform

### Full-Stack (Docker)

```dockerfile
# Dockerfile example for production
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm run test        # Run tests
npm run test:watch  # Watch mode
npm run test:coverage # Coverage report
```

### Backend Testing
```bash
cd backend
npm test           # Run API tests
npm run test:watch # Watch mode
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: support@acetech.com
- Documentation: [Project Wiki](link-to-wiki)
- Issues: [GitHub Issues](link-to-issues)

## 🎯 Roadmap

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication system
- [ ] Blog/CMS integration
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] SEO enhancements

---

Built with ❤️ by the Ace Tech Team