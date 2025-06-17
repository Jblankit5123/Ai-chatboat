# AI Chatbot

A frontend-only chatbot demonstrating conversation UI patterns with:  
- React hooks state management  
- Voice recognition integration  
- Zero backend dependencies 

## 🚀 Features

- ⚡️ **Vite** - Lightning fast build tool
- 🎯 **React 19** with TypeScript
- 🎨 **TailwindCSS** with PrimeReact UI components

- ✅ **Form Handling** with Formik
- 📝 **Code Quality** tools including ESLint, Prettier, and StyleLint
- 🔄 **Git Hooks** with Husky and lint-staged

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/Jblankit5123/Ai-chatboat.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run prepare` - Setup Husky git hooks

## 🏗️ Tech Stack

### Core

- React 19
- TypeScript
- Vite 6
- React Router DOM 7


### UI & Styling

- TailwindCSS
- PrimeReact
- Lucide React Icons
- clsx & tailwind-merge for conditional styling

### Forms & Validation

- React Formik Form


### Development & Quality Tools

- ESLint with multiple plugins
- Prettier
- Husky
- lint-staged
- TypeScript ESLint
- Vitest
- React Testing Library

## 🚀 Deployment

This project uses GitHub Actions for CI/CD. The workflow includes:

- Code quality checks
- Testing and linting
- Building the application
- Deployment

## 📝 Development Guidelines

### Code Style

- TypeScript is used for type safety
- ESLint and Prettier are configured for code consistency
- Import sorting is automated
- Git hooks ensure code quality before commits

### Architecture Diagram
 ┌────────────────────────────────────────────────────────┐
 │                     App.tsx (Root)                     │
 └────────────┬───────────────────────────────────────────┘
              │
              ▼
      ┌──────────────┐
      │   Routes     │
      └──────┬───────┘
             ▼
 ┌─────────────────────────────────────────────┐
 │              Page Components                │
 ├─────────────────────────────────────────────┤
 │                                             │
 │  ┌────────────┐   ┌────────────┐            │
 │  │ Login Page │   │ Register Page │         │
 │  └────┬───────┘   └────┬─────────┘           │
 │       │                │                     │
 │       ▼                ▼                     │
 │   Auth Context     Auth Context              │
 │   (Hooks/context)  (Hooks/context)           │
 │                                             │
 │  ┌───────────────────────────────────────┐   │
 │  │         Chat Page (Pages/chat)       │   │
 │  └────────────┬─────────────────────────┘   │
 │               ▼                             │
 │      ┌────────────────────────────┐         │
 │      │ useChatBot (Hooks)         │         │
 │      ├────────────────────────────┤         │
 │      │ useChatHistory (Hooks)     │         │
 │      ├────────────────────────────┤         │
 │      │ useVoiceInput (Hooks)      │         │
 │      └────────────────────────────┘         │
 └─────────────────────────────────────────────┘



