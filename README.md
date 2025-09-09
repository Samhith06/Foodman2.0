# FoodMan - Food Delivery App

A modern food delivery application built with React, Vite, and Firebase.

## Features

- User authentication (Email/Password and Google Sign-in)
- Protected routes for authenticated users
- Responsive design with Tailwind CSS
- Firebase integration for user management
- Shopping cart functionality

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env`
   - Fill in your Firebase configuration values:

   ```
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   VITE_FIREBASE_PROJECT_ID=your_project_id_here
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
   VITE_FIREBASE_APP_ID=your_app_id_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password and Google providers
3. Create a Firestore database
4. Copy your Firebase config to the `.env` file

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable components
├── contexts/           # React contexts (Auth)
├── pages/              # Page components
├── config/             # Configuration files
└── assets/             # Static assets
```

## Security Features

- Environment variables for sensitive data
- Protected routes with authentication guards
- Secure Firebase configuration
