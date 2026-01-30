# 🏗️ DesignStudio Architecture Platform

A modern **SaaS-grade architecture studio platform** built with **React** and a lightweight **Node-style backend API**.  
This project includes a **public website**, **admin dashboard**, **authentication system**, and **role-based access**, designed with a clean, professional UI suitable for real-world use.

---

## 🌐 Live Demo

🔗 **Live URL:**  
http://localhost:3000 (local)  
or  
http://<your-network-ip>:3000  

> ⚠️ Note: The app runs on **HTTP** in local environments. HTTPS requires a hosted SSL-enabled deployment (Netlify/Vercel).

---

## ✨ Features

### 🔐 Authentication
- Admin Login & Signup
- Persistent login using `localStorage`
- Role-based access (`admin`, `editor`)
- Protected admin routes

### 🖥️ Admin Dashboard
- Real-time stats (Projects, Clients, Contacts, Subscribers)
- Clickable stat cards
- Dark / Light mode toggle
- Collapsible sidebar
- Profile dropdown with avatar

### 👤 Profile Management
- SaaS-grade profile page
- Upload profile photo from device
- Workspace & account details
- Editable user name
- Role badge & status indicator

### 🌍 Public Website
- Hero section
- Projects showcase
- Clients & testimonials
- Contact form (lead capture)
- Newsletter subscription
- SEO-friendly structure
- Fully responsive (mobile + desktop)

---

## 🧰 Tech Stack

### Frontend
- ⚛️ React (Create React App)
- 🎨 Custom CSS (SaaS-style UI)
- 🔀 React Router DOM
- 📦 Fetch API

### Backend (Lightweight API)
- Node-style API simulation
- REST endpoints
- JSON-based responses
- Authentication logic handled client-side for demo

> ⚠️ Backend is intentionally lightweight to meet submission timelines.

---

## 📁 Project Structure

architecture-frontend/
│
├── public/
│ ├── index.html
│ └── assets/
│
├── src/
│ ├── admin/
│ │ ├── AdminLayout.jsx
│ │ ├── Dashboard.jsx
│ │ ├── Profile.jsx
│ │ ├── auth.js
│ │
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Projects.jsx
│ │ ├── Clients.jsx
│ │ ├── Contact.jsx
│ │ ├── Newsletter.jsx
│ │ └── Footer.jsx
│ │
│ ├── services/
│ │ └── api.js
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── AdminLogin.jsx
│ │ └── AdminSignup.jsx
│ │
│ ├── styles/
│ │ └── main.css
│ │
│ └── App.js
│
└── package.json

---

## 🔑 Demo Credentials

Use these credentials to log in:

Email: admin@gmail.com
Password: admin123
Role: ADMIN

(Signup is also enabled for demo purposes)

---

## 🚀 How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/designstudio-architecture-platform.git
cd designstudio-architecture-platform

npm install
http://localhost:3000

npm run build
npx serve -s build

----
