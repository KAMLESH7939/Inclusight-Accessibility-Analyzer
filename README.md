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

---

## 📂 Project Structure

Inclusight/
│
├── 📁 client # React Frontend
│ ├── 📁 public
│ │ └── index.html
│ ├── 📁 src
│ │ ├── 📁 assets
│ │ │ ├── illustration-accessibility.png
│ │ │ └── logo.svg
│ │ ├── 📁 components
│ │ │ ├── Navbar.jsx
│ │ │ ├── Footer.jsx
│ │ │ ├── DarkModeToggle.jsx
│ │ │ ├── AnalyzeForm.jsx
│ │ │ ├── AnalysisResults.jsx
│ │ │ └── Spinner.jsx
│ │ ├── 📁 pages
│ │ │ ├── Home.jsx
│ │ │ ├── About.jsx
│ │ │ └── Testimonials.jsx
│ │ ├── App.jsx
│ │ ├── index.js
│ │ ├── routes.jsx
│ │ └── styles.css
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ └── package.json
│
├── 📁 server # Node.js Backend (MVC Architecture)
│ ├── 📁 controllers
│ │ ├── analysisController.js # Handles analysis logic and CSV generation
│ │ └── userController.js # Handles authentication & user data
│ ├── 📁 routes
│ │ ├── analysisRoutes.js # Routes for running accessibility analysis
│ │ └── userRoutes.js # Routes for user login/signup
│ ├── 📁 utils
│ │ └── pa11yRunner.js # Helper functions for running accessibility tools
│ ├── config.js # MongoDB & Firebase setup
│ ├── server.js # Express app entry point
│ └── package.json
│
└── README.md

---

## 🏛 MVC Architecture

The **backend** follows the **Model-View-Controller** pattern:

- **Model**:  
  MongoDB schemas for storing analysis results and user data (not shown in above structure, stored in `/models` if added).
  
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
In /client, create a .env:

env
Copy
Edit
VITE_BACKEND_URL=http://localhost:5001
🚀 Getting Started
1️⃣ Clone the repo
bash
Copy
Edit
git clone https://github.com/KAMLESH7939/Inclusight-Accessibility-Analyzer.git
cd Inclusight-Accessibility-Analyzer
2️⃣ Install dependencies
Backend
bash
Copy
Edit
cd server
npm install
Frontend
bash
Copy
Edit
cd ../client
npm install
3️⃣ Run the app locally
Backend
bash
Copy
Edit
cd server
npm run dev
Frontend
bash
Copy
Edit
cd ../client
npm run dev
The frontend will run on http://localhost:5173
The backend will run on http://localhost:5001


📦 CSV Report Generation
When you analyze a URL:

Lighthouse & axe-core scan for accessibility issues.

The results are compiled into JSON.

CSV is generated from the JSON.

User can download the CSV report directly from the frontend.

🌍 Real-world Problem Solved
Over 1 billion people worldwide live with some form of disability. Many websites still fail basic accessibility checks, excluding these users from accessing information, services, or products.

Inclusight helps developers:

Identify barriers for visually impaired or color-blind users.

Comply with accessibility standards (WCAG 2.1).

Create an inclusive online experience for everyone.

📸 Screenshots
(Add screenshots or gifs of your frontend, analysis results, and CSV download here)

🔗 Live Demo (Frontend)
Frontend: https://frontend-inclusight-u5nq.vercel.app
Backend: (Available locally or on request due to hosting costs)

🛠 Tech Stack
Frontend: React.js, Tailwind CSS, Axios

Backend: Node.js, Express.js, Puppeteer, Lighthouse, axe-core

Database: MongoDB (Mongoose)

Auth: JWT

Other: Cloudinary (file storage), CSV generation

📜 License
This project is licensed under the MIT License.

🤝 Contributing
Contributions are welcome! Please open an issue or submit a PR.

👤 Author
Kamlesh – Full Stack Developer | Competitive Programmer
GitHub: KAMLESH7939
LinkedIn: (Your LinkedIn profile here)

