# 💸 SnapBack Price Engine 💸

Automated tracking to snap back your savings.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

**SnapBack** is a full-stack automated price tracking solution that empowers users to monitor product prices across retailers, visualize historical trends, and receive instant alerts when prices drop below their target threshold.

## ✨ Key Features

### 🛒 Intelligent Tracking

- **Automated Scraper Engine:** A background worker system that regularly ingests and normalizes product data from external sources.
- **Historical Analytics:** Visualizes price trends over time using interactive Recharts graphs, helping users identify the perfect buying moment.
- **Smart Alerts:** Users define custom price targets. The system runs distinct `alertChecker` jobs to trigger notifications instantly when targets are met.

### 🛡️ Secure & Scalable Architecture

- **Robust Authentication:** Full JWT-based auth flow including secure session management and password hashing with Bcrypt.
- **Type-Safe Development:** Built entirely with TypeScript for rigorous end-to-end type safety from the database (Prisma) to the client (React).
- **Performance Optimization:** Uses optimistic UI updates and responsive design with Tailwind CSS.

## ⚙️ Core Architecture & System Design

- **Decoupled Micro-Architecture:** Developed a modular Express.js backend using a Controller-Route-Service pattern to ensure separation of concerns between business logic and API orchestration.

- **Type-Safe Data Modeling:** Leveraged Prisma ORM with PostgreSQL to enforce strict schema definitions, ensuring data integrity across User, Product, and Price History relations.

- **Security & Identity:** Implemented a stateless authentication flow using JSON Web Tokens (JWT) and Bcrypt.js for secure password hashing and protected route middleware.

## 📊 Automated Data Pipeline

- **Ingestion Engine:** Built a background data worker (ingestor.ts) designed to fetch, normalize, and upsert product data from external sources into the persistent storage layer.

- **Scheduled Monitoring:** Integrated node-cron to orchestrate recurring "Price Check" jobs that execute at defined intervals to detect market fluctuations.

- **Trigger-Based Notification Logic:** Developed an asynchronous alertChecker service that evaluates price deltas against user-defined target thresholds to trigger automated communication via Nodemailer.

## 🚀 Technologies Used

### Frontend

- **[React:](https://react.dev/)** Used a component-based architecture with TypeScript to build a modular and scalable user interface.
- **[TypeScript:](https://www.typescriptlang.org/)** Implemented end-to-end type safety to minimize runtime errors and ensure data consistency with backend models.
- **[Tailwind CSS:](https://tailwindcss.com/)** Leveraged a utility-first framework to create a responsive, high-performance design system without custom CSS overhead.
- **[Axios:](https://axios-http.com/)** Configured with a centralized interceptor pattern to handle authenticated API requests and global error management.
- **[React Router DOM:](https://reactrouter.com/)** Implemented declarative, client-side routing to provide a seamless single-page application (SPA) experience.
- **[Recharts:](https://recharts.github.io/)** Integrated a composable charting library to visualize complex historical price trends through interactive data visualizations.
- **[Lucide React:](https://lucide.dev/)** Utilized for a consistent and accessible set of UI icons across the platform.

### Backend

- **[Node.js](https://nodejs.org/en) & [Express.js:](https://expressjs.com/)** Built a high-concurrency RESTful API using a modular architecture for efficient request handling.
- **[TypeScript:](https://www.typescriptlang.org/)** Utilized for strict type-checking across business logic, ensuring reliability in complex data processing tasks.
- **[Prisma ORM:](https://www.prisma.io/)** Employed as a next-generation ORM to manage PostgreSQL interactions with a type-safe API and automated migrations.
- **[PostgreSQL:](https://www.postgresql.org/)** Relational database chosen for its reliability and support for queries involving product history and user alerts.
- **[JSON Web Tokens (JWT):](https://jwt.io/)** Facilitates stateless, secure authentication and fine-grained authorization for protected API routes.
- **[Bcrypt.js:](https://www.npmjs.com/package/bcryptjs)** Ensures industry-standard security through salted one-way hashing of user credentials.
- **[Nodemailer:](https://nodemailer.com/)** Configured to handle automated SMTP communication for real-time price-drop email notifications.
- **[node-cron:](https://www.npmjs.com/package/node-cron)** Orchestrates scheduled background jobs, including the ingestor and alertChecker services, for automated monitoring.
- **[Cors:](https://www.npmjs.com/package/cors)** Implemented to manage secure cross-origin resource sharing between the frontend and API layers.

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- PostgreSQL database instance

### Backend

1.  Navigate to the server directory:
    ```bash
    cd backend
    npm install
    ```
2.  Configure environment variables:
    - Create a `.env` file matching `.env.example`.
    - Ensure your **PostgreSQL** instance is running.
3.  Initialize the database:
    ```bash
    npx prisma migrate dev --name init
    ```
4.  Start the server:
    ```bash
    npm run dev
    ```

### Frontend

1.  Navigate to the client directory:
    ```bash
    cd frontend
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```

---

## API Endpoints Overview

- **`POST /api/auth/register`**: Register a new user.
- **`POST /api/auth/login`**: Log in a user.
- **`GET /api/user/me`**: Get authenticated user's profile.
- **`PATCH /api/user/me`**: Update authenticated user's profile.
- **`GET /api/products`**: Get all products.
- **`GET /api/products/:id`**: Get a single product with price history.
- **`GET /api/alerts`**: Get all price alerts for the authenticated user.
- **`POST /api/alerts`**: Create a new price alert.
- **`DELETE /api/alerts/:id`**: Delete a price alert.
- **`GET /api/notifications`**: Get all notifications for the authenticated user.
- **`PATCH /api/notifications/:id/read`**: Mark a notification as read.
- **`GET /health`**: Health check endpoint.
- **`GET /api/ingest`**: Manually trigger data ingestion.

## Folder Structure (Simplified)

```
.
├── backend/
│   ├── src/
│   │   ├── api/             # Frontend API client configurations
│   │   ├── config/          # Backend configurations (Prisma, mail, scheduler)
│   │   ├── controllers/     # Business logic for routes
│   │   ├── middleware/      # Authentication, error handling middleware
│   │   ├── routes/          # API route definitions
│   │   ├── workers/         # Background tasks/logic (authenticator, ingestor)
│   │   └── index.ts         # Main backend entry point
│   ├── prisma/              # Prisma schema and migrations
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/             # Frontend API client configurations
│   │   ├── assets/          # Static assets
│   │   ├── components/      # Reusable UI components (common, dashboard, layout, products)
│   │   ├── contexts/        # React Context providers (AuthContext)
│   │   ├── hooks/           # Custom React hooks (useAuth)
│   │   ├── pages/           # Page-level components
│   │   ├── services/        # Frontend services (auth.service)
│   │   ├── types/           # TypeScript interfaces and types
│   │   ├── utils/           # Utility functions
│   │   └── main.tsx         # Main frontend entry point
│   ├── public/
│   └── package.json
│
├── package.json (root)
└── README.md
```
