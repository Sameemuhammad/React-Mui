# MUI Auth Dashboard

Simple React + Material UI project with Login, Sign Up, aur Dashboard pages.

## Features
- Login page
- Sign Up page
- Protected Dashboard route (login ke baghair access nahi ho sakta)
- Simple auth using `localStorage` (demo/learning ke liye — production app mein real backend use karein)

## Setup

```bash
npm install
npm run dev
```

Phir browser mein `http://localhost:5173` open karein.

## Project Structure

```
src/
  AuthContext.jsx     # Simple auth logic (signup, login, logout)
  App.jsx             # Routes (Login, SignUp, Dashboard)
  theme.js            # MUI theme
  pages/
    Login.jsx
    SignUp.jsx
    Dashboard.jsx
```

## Notes
- Pehle "Sign Up" se account banayein, phir "Login" se sign in karein.
- Data browser ke `localStorage` mein save hota hai, isliye refresh karne par login state maintain rehti hai.
- Real project ke liye password ko backend par hash karke store karein (yahan sirf demo ke liye plain text hai).
