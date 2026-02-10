# AOTMS - Academy of Tech Masters

<div align="center">
  <img src="https://aotms.in/brand-logo-new.png" alt="AOTMS Logo" width="200" onerror="this.src='/brand-logo-new.png'"/>
  
  <h1>Academy of Tech Masters</h1>
  
  <p>
    <strong>Empowering Students with Industry-Ready Tech Skills</strong>
  </p>

  <p>
    <a href="https://aotms.in">Live Website</a> • 
    <a href="#-getting-started">Getting Started</a> • 
    <a href="#-features">Features</a> • 
    <a href="#-tech-stack">Tech Stack</a>
  </p>

[![Live Website](https://img.shields.io/badge/Live-aotms.in-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://aotms.in)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

</div>

---

## 📋 About AOTMS

**Academy of Tech Masters (AOTMS)** is a premier tech education platform based in **Vijayawada, Andhra Pradesh**. We are dedicated to bridging the gap between academic learning and industry requirements. Our mission is to provide students with comprehensive, hands-on training in cutting-edge technologies, ensuring they are job-ready from day one.

Through a blend of rigorous coursework, practical workshops, competitive hackathons, and real-world projects, AOTMS equips aspiring tech professionals with the skills and confidence needed to excel in the modern tech landscape.

---

## ✨ Key Features

Our platform offers a rich ecosystem for learning and growth:

- **🎓 Comprehensive Course Catalog**: Explore specialized tracks in Full Stack Web Development, AI/ML, Data Science, and Cybersecurity.
- **🤖 AI-Powered Assistance**: Integrated chatbot support to answer student queries instantly and guide them through their learning journey.
- **📊 Interactive Student Dashboard**: Track progress, view upcoming schedules, and access personalized learning resources.
- **🛠️ Hands-on Workshops**: Participate in intensive coding sessions led by industry experts to master specific tools and frameworks.
- **🏆 Hackathons & Challenges**: Test your skills in competitive coding events and hackathons designed to foster innovation.
- **💼 Career Support**: Access placement assistance, internship opportunities, and career counseling services.
- **📱 Fully Responsive Design**: Seamless experience across desktops, tablets, and mobile devices.
- **⚡ High Performance**: Built with Vite and React for lightning-fast load times and smooth interactions.

---

## 🛠️ Tech Stack

This project is built using a modern, robust technology stack designed for scalability and performance.

### **Frontend**

| Category             | Technology                                       | Description                                        |
| :------------------- | :----------------------------------------------- | :------------------------------------------------- |
| **Framework**        | [React 18](https://react.dev/)                   | Library for building user interfaces               |
| **Build Tool**       | [Vite](https://vitejs.dev/)                      | Next-generation frontend tooling                   |
| **Language**         | [TypeScript](https://www.typescriptlang.org/)    | Typed superset of JavaScript                       |
| **Styling**          | [Tailwind CSS](https://tailwindcss.com/)         | Utility-first CSS framework                        |
| **UI Components**    | [shadcn/ui](https://ui.shadcn.com/)              | Reusable component set based on Radix UI           |
| **State Management** | [Zustand](https://github.com/pmndrs/zustand)     | Small, fast, and scalable bearer-state solution    |
| **Data Fetching**    | [React Query](https://tanstack.com/query/latest) | Powerful asynchronous state management             |
| **Routing**          | [React Router](https://reactrouter.com/)         | Declarative routing for React                      |
| **Forms**            | [React Hook Form](https://react-hook-form.com/)  | Performant, flexible and extensible forms          |
| **Validation**       | [Zod](https://zod.dev/)                          | TypeScript-first schema declaration and validation |
| **Animation**        | [Framer Motion](https://www.framer.com/motion/)  | Production-ready motion library for React          |
| **Visualizations**   | [Recharts](https://recharts.org/)                | Redefined chart library built with React and D3    |
| **Maps**             | [Leaflet](https://leafletjs.com/)                | JavaScript library for interactive maps            |

### **Backend & Services**

| Service            | Technology        | Description                                        |
| :----------------- | :---------------- | :------------------------------------------------- |
| **Runtime**        | Node.js           | JavaScript runtime built on Chrome's V8 engine     |
| **Authentication** | Firebase Auth     | Secure user authentication and management          |
| **Hosting**        | Vercel (Frontend) | Platform for static sites and serverless functions |
| **Database**       | MongoDB           | (As per project context) NoSQL database            |

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:

- **Node.js**: v18.0.0 or higher
- **npm** (or yarn/pnpm/bun)

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/jayaveerR/Aotms_2026.git
    cd Aotms_2026/Frontend
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root of the `Frontend` directory and add the necessary environment variables:

    ```env
    VITE_API_URL=your_backend_api_url
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
    # Add other variables as needed
    ```

4.  **Start the development server**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

---

## 📁 Project Structure

A quick look at the top-level files and directories in the `src` folder:

```text
src/
├── components/      # Shared UI components (buttons, inputs, etc.)
│   ├── ui/          # shadcn/ui base components
│   ├── navbar/      # Navigation bar components
│   └── ...
├── pages/           # Application pages (Courses, Dashboard, etc.)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and helpers
├── store/           # Global state (Zustand stores)
├── assets/          # Static assets (images, fonts)
├── data/            # Static data files
├── App.tsx          # Main application component with routing
└── main.tsx         # Entry point
```

---

## 📦 Available Scripts

In the project directory, you can run:

| Script            | Description                                        |
| :---------------- | :------------------------------------------------- |
| `npm run dev`     | Runs the app in development mode                   |
| `npm run build`   | Builds the app for production to the `dist` folder |
| `npm run preview` | Locally preview the production build               |
| `npm run lint`    | Runs ESLint to check for code quality issues       |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  **Fork** the repository.
2.  Create a new **Branch** for your feature or bug fix (`git checkout -b feature/AmazingFeature`).
3.  **Commit** your changes (`git commit -m 'Add some AmazingFeature'`).
4.  **Push** to the branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

---

## 📞 Contact

For verify, support, or inquiries, please reach out to us:

- **Website**: [https://aotms.in](https://aotms.in)
- **Email**: [info@aotms.in](mailto:info@aotms.in)
- **Location**: Vijayawada, Andhra Pradesh, India

---

## 📄 License

**© 2024-2026 Academy of Tech Masters.**  
This project is proprietary software. Unauthorized copying, distribution, or use is strictly prohibited.

---

<div align="center">
  <small>Made with ❤️ by the AOTMS Team</small>
</div>
