//# ✨ Full Stack Realtime Chat App ✨

//![Demo App](/frontend/public/screenshot-for-readme.png)

//[Video Tutorial on Youtube](https://youtu.be/ntKkVrQqBYY)

# 🌐 Inclusight – Accessibility Analyzer

**Inclusight** is a full-stack web application that helps **website owners, developers, and accessibility advocates** evaluate the accessibility of any public website.

It uses **Lighthouse**, **axe-core**, and **Puppeteer** to check for accessibility issues such as:
- Low contrast text (difficult for people with color blindness or low vision)
- Poor font readability
- Missing alternative text for images
- Keyboard navigation issues
- And more…

The tool is designed to **empower developers to create more inclusive websites** for people with disabilities, including:
- **Color vision deficiencies**
- **Low vision**
- **Motor impairments** (keyboard-only navigation)
- **Cognitive impairments**

Inclusight provides:
- A **beautiful React frontend** (Tailwind CSS) for a modern user experience
- A **Node.js/Express backend** that runs the analysis
- **MongoDB** for storing analysis history
- **CSV report generation** for sharing and record-keeping

## 📁 Project Structure

### 🖥 Frontend (React + Tailwind CSS)
```
client/
├── public/ # Static public assets
│ └── index.html # Main HTML file
├── src/ # React application source
│ ├── assets/ # Images, icons, logos
│ │ ├── illustration-accessibility.png
│ │ └── logo.svg
│ ├── components/ # Reusable UI components
│ │ ├── Navbar.jsx # Navigation bar
│ │ ├── Footer.jsx # Footer section
│ │ ├── DarkModeToggle.jsx # Theme toggle
│ │ ├── AnalyzeForm.jsx # Form for URL submission
│ │ ├── AnalysisResults.jsx# Displays audit results
│ │ └── Spinner.jsx # Loading indicator
│ ├── pages/ # Page-level components
│ │ ├── Home.jsx # Landing page
│ │ ├── About.jsx # About the app
│ │ └── Testimonials.jsx # User reviews
│ ├── routes.jsx # Application routes
│ ├── App.jsx # Root app component
│ ├── index.js # Entry point
│ └── styles.css # Optional global styles
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js # PostCSS configuration
└── package.json # Frontend dependencies
```


### ⚙️ Backend (Node.js + Express + MongoDB)
```
server/
├── controllers/ # Request handling logic
│ ├── analysisController.js # Runs accessibility audits, CSV generation
│ └── userController.js # Authentication and user profile logic
├── routes/ # API route definitions
│ ├── analysisRoutes.js # Routes for analysis features
│ └── userRoutes.js # Routes for user management
├── utils/ # Utility functions
│ └── pa11yRunner.js # Helper for running accessibility tools
├── config.js # MongoDB and Firebase config
├── server.js # Express app entry point
└── package.json # Backend dependencies
```
---

## 🏛 MVC Architecture

The **backend** follows the **Model-View-Controller** pattern:

- **Model**:  
  MongoDB schemas for storing analysis results and user data (can be placed in `/models`).

- **View**:  
  The **React frontend** in `/client` acts as the view layer.

- **Controller**:  
  Logic in `/controllers` handles requests:
  - `analysisController.js`: runs Lighthouse & axe-core, formats results, generates CSV reports.
  - `userController.js`: manages authentication, profile, and settings.

- **Routes**:  
  Express routes in `/routes` map API endpoints to the appropriate controllers.

---

## ✨ Features

- **Accessibility Audits**: Uses Lighthouse and axe-core to detect WCAG violations.
- **Visual Design Checks**: Identifies poor contrast, small fonts, inaccessible color schemes.
- **CSV Report Generation**: Downloadable reports of all accessibility issues.
- **User Dashboard**: View past analyses (stored in MongoDB).
- **Responsive UI**: Built with Tailwind CSS and React.
- **Dark Mode**: Toggle for accessibility-friendly viewing.
- **YouTube Guides**: Links to tutorials for fixing issues.

---

## ⚙️ Environment Variables

Create a `.env` file in `/server` with:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/Inclusight
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
FRONTEND_ORIGIN=http://localhost:5173
NODE_ENV=development
```
In /client, create a .env:
```
VITE_BACKEND_URL=http://localhost:5001
```

🚀 Getting Started

1️⃣ Clone the repo
```bash
git clone https://github.com/KAMLESH7939/Inclusight-Accessibility-Analyzer.git
cd Inclusight-Accessibility-Analyzer
``` 
2️⃣ Install dependencies
```bash
Backend
cd server
npm install

Frontend
cd ../client
npm install
```

3️⃣ Run the app locally
```bash
Backend:
cd server
npm run dev

Frontend:
cd ../client
npm run dev
The frontend will run on http://localhost:5173
The backend will run on http://localhost:5001
```
##📦 CSV Report Generation

### When you analyze a URL:

Lighthouse & axe-core scan for accessibility issues.

The results are compiled into JSON.

CSV is generated from the JSON.

User can download the CSV report directly from the frontend.

## 🌍 Real-world Problem Solved

Over 1 billion people worldwide live with some form of disability. Many websites still fail basic accessibility checks, excluding these users from accessing information, services, or products.

### Inclusight helps developers:

1. Identify barriers for visually impaired or color-blind users.

2. Comply with accessibility standards (WCAG 2.1).

3. Create an inclusive online experience for everyone.

## 🔗 Test with Known Poor Accessibility Websites

### Here are some example URLs you can use to see Inclusight in action:

1. Contrast Rebellion – Low contrast text

2. Ling’s Cars – Messy fonts & colors

3. World’s Worst Website Ever – Poor design & readability

4. Arngren.net – Cluttered design

## 📸 Screenshots
(Add screenshots or gifs of your frontend, analysis results, and CSV download here)

## 🔗 Live Demo (Frontend)

- Frontend: https://frontend-inclusight-u5nq.vercel.app
- Backend: (Available locally or on request due to hosting costs)

🛠 Tech Stack
- **Frontend **: React.js, Tailwind CSS, Axios

- **Backend** : Node.js, Express.js, Puppeteer, Lighthouse, axe-core

- **Database** : MongoDB (Mongoose)

- **Auth** : JWT

- **Other** : Cloudinary (file storage), CSV generation

## 📜 License
This project is licensed under the MIT License.

## 🤝 Contributing
Contributions are welcome! Please open an issue or submit a PR.

## 👤 Author
Kamlesh – Full Stack Developer | Competitive Programmer
GitHub: KAMLESH7939
LinkedIn: (Your LinkedIn profile here)
