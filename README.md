# Ace Tech Website

A modern, full-stack technology company website built with React and Node.js. Features a beautiful, responsive design with complete frontend and backend functionality.

## 🚀 Features

### Frontend
- **Modern UI/UX**: Beautiful, responsive design with smooth animations using Framer Motion
- **Pages**: Home, About, Services, Projects, Blog, Contact, Login/Register
- **Admin Panel**: Complete dashboard for content management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Content**: Real-time data fetching with React Query
- **Form Handling**: Robust form validation with React Hook Form

### Backend
- **RESTful API**: Built with Express.js and Node.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based authentication system
- **Email Service**: Contact form submissions with email notifications
- **File Uploads**: Image upload support for blog posts and projects
- **Security**: CORS, input validation, password hashing with bcrypt

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router v6
- Tailwind CSS
- Framer Motion
- React Query
- React Hook Form
- Axios
- React Icons
- Swiper
- Date-fns

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Nodemailer
- Multer
- Express Validator

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/acetech
JWT_SECRET=your-secret-key-change-this-in-production
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FRONTEND_URL=http://localhost:3000
```

4. Start the backend server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000` and the backend API on `http://localhost:5000`.

## 🔐 Default Admin Credentials

For demo purposes, you can use:
- Email: `admin@acetech.com`
- Password: `password123`

**Note**: Remember to change these credentials in production!

## 📁 Project Structure

```
ace-tech-website/
├── backend/
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   └── server.js       # Entry point
│   ├── uploads/           # File uploads directory
│   └── package.json
├── frontend/
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── contexts/      # React contexts
│   │   ├── pages/         # Page components
│   │   ├── utils/         # Utility functions
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json
└── README.md
```

## 🚀 Deployment

### Backend Deployment (Heroku/Railway)

1. Create a new app on your hosting platform
2. Set environment variables
3. Connect your GitHub repository
4. Deploy the backend folder

### Frontend Deployment (Vercel/Netlify)

1. Build the production version:
```bash
cd frontend
npm run build
```

2. Deploy the `build` folder to your hosting platform
3. Set the environment variable for the API URL

### Database (MongoDB Atlas)

1. Create a free cluster on MongoDB Atlas
2. Get your connection string
3. Update the `MONGODB_URI` in your environment variables

## 📝 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Blog Endpoints
- `GET /api/blog` - Get all published posts
- `GET /api/blog/:slug` - Get single post
- `POST /api/blog` - Create post (admin)
- `PUT /api/blog/:id` - Update post (admin)
- `DELETE /api/blog/:id` - Delete post (admin)

### Projects Endpoints
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Services Endpoints
- `GET /api/services` - Get all services
- `POST /api/services` - Create service (admin)
- `PUT /api/services/:id` - Update service (admin)
- `DELETE /api/services/:id` - Delete service (admin)

### Contact Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all inquiries (admin)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React Documentation
- Tailwind CSS
- MongoDB Documentation
- All the amazing open-source libraries used in this project