<div align="center">
  <a href="https://github.com/micael-jerry/coucou-app">
    <h1>Coucou App</h1>
  </a>
  <p>
    The frontend for Coucou, a real-time chat application inspired by modern messaging platforms.
  </p>
  <br />
  <a href="https://coucou-app.vercel.app/" target="_blank">
    <strong>🚀 View Live Demo 🚀</strong>
  </a>
</div>

## 🚀 Introduction

**Coucou App** is the web-based client for the Coucou chat application. It provides a modern, responsive user interface for interacting with the backend services. Built with Next.js and TypeScript, it offers a seamless user experience for authentication, messaging, and conversation management.

## 🔗 Backend API

This frontend application communicates with the **Coucou API**.

- **API Documentation (Swagger)**: [https://sour-georgena-micael-jerry-3c76162d.koyeb.app/api#/](https://sour-georgena-micael-jerry-3c76162d.koyeb.app/api#/)
- **Backend GitHub Repository**: [https://github.com/micael-jerry/coucou-api](https://github.com/micael-jerry/coucou-api)

## ✨ Features

- **Secure User Authentication**: Complete auth flows for sign-up, login, and password reset using NextAuth.js.
- **Component-Based UI**: Built with React and styled using Tailwind CSS for a modern and responsive design.
- **Form Management**: Robust and validated forms using React Hook Form and Zod.
- **Code Quality**: Maintained with ESLint and Prettier to ensure consistency and readability.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)
- **Deployment**: [Vercel](https://vercel.com/)

## 🏁 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20.x or later)
- [pnpm](https://pnpm.io/installation)

### 1. Clone the Repository

```bash
git clone https://github.com/micael-jerry/coucou-app.git
cd coucou-app
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory by copying the template:

```bash
cp .env.template .env
```

Update the `.env` file with the URL of your backend API and a secret for NextAuth.

```env
# .env
NEXT_PUBLIC_API_BASE_URL="http://localhost:8080" # Backend API URL
NEXTAUTH_SECRET="your-super-secret-and-long-key-for-session-encryption"
NODE_ENV="development"
```

## ධ Running the Application

### Development Mode

To run the application in development mode with hot-reloading (using Turbopack):

```bash
pnpm run dev
```

The application will be available at `http://localhost:3000`.

### Production Mode

To build and run the application for production:

```bash
pnpm run build
pnpm run start
```

## 📜 Available Scripts

- `pnpm run dev`: Starts the development server.
- `pnpm run build`: Creates a production-ready build.
- `pnpm run start`: Starts the production server.
- `pnpm run lint`: Lints the codebase using Next.js' ESLint config.
- `pnpm run format`: Formats all files with Prettier.

## ☁️ Deployment

This application is configured for seamless deployment on [Vercel](https://vercel.com/), the platform created by the developers of Next.js. Pushing to the main branch will trigger an automatic deployment.
