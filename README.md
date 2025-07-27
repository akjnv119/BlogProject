# React + Vite

# Blogging Website

## Overview
This is a full-stack blogging website built using React for the frontend and Appwrite as the backend as a service (BaaS). The platform allows users to create, edit, delete, and read blog posts.
![Screenshot 2025-02-28 103726](https://github.com/user-attachments/assets/124e01a0-3580-423c-ab00-deb90a627d6f)



## Features
- User authentication (Signup/Login/Logout)
- Create, read, update, and delete (CRUD) blog posts
- Responsive and modern UI
- Image uploads for blog posts
- Secure and scalable backend using Appwrite
- Real-time updates and data fetching

## Tech Stack
### Frontend
- React.js
- React Router
- React Redux
- Tailwind CSS (or any other styling framework of choice)

### Backend
- Appwrite (Authentication, Database, Storage)

## Installation

### Prerequisites
- Node.js and npm installed
- Appwrite instance set up
- react-hook-form installed
- tinyMce Editor installed
- HTML parser installed

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/akjnv119/BlogProject.git
   cd BlogProject
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add your Appwrite credentials:
   ```env
   VITE_APPWRITE_URL=your_appwrite_URL
   VITE_PROJECT_ID=your_appwrite_project_id
   VITE_DATABASE_ID=your_appwrite_database_id
   VITE_COLLECTION_ID=your_appwrite_collection_id
   VITE_BUCKET_ID=your_appwrite_bucket_id
   ```

4. **Start the Development Server**
   ```bash
   npm start
   ```
   The project will be available at `http://localhost:5174/`

## Deployment
To deploy the project, you can use services like Vercel, Netlify, or Firebase for the frontend. Make sure to configure the environment variables in the respective hosting platforms.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
