<div align="center">

# 🎓 SkillXIntell

### *Holistic Academic and Professional Skill Intelligence System*

**Empowering learners and professionals across Healthcare, Agriculture, and Urban Technology sectors**

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express.js-4.19+-green?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.0+-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Supabase](https://img.shields.io/badge/Supabase-Storage-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com/)

[🚀 Quick Start](#-quick-start-local-development) • [📖 Documentation](#-how-to-use-skillxintell) • [🎯 Features](#-key-features) • [🛠️ Tech Stack](#️-technology-stack)

</div>

---

## 🌟 Overview

**SkillXIntell** is a comprehensive digital platform that revolutionizes how learners, educators, and professionals track, analyze, and develop skills across three critical emerging sectors:

- 🏥 **Healthcare Informatics** - Digital health, telemedicine, health data analytics
- 🌾 **Agricultural Technology** - Precision farming, agritech, sustainable agriculture
- 🏙️ **Urban/Smart City Systems** - IoT, smart infrastructure, urban planning

### 🎯 Mission

Enable **data-driven self-awareness** and **informed decision-making** through intelligent skill tracking, AI-powered recommendations, and comprehensive career readiness analytics aligned with the future of work in emerging sectors.

---

## ✨ Key Features

### 🎯 Core Functionality

| Feature | Description |
|---------|-------------|
| **📊 Skill Tracker** | Create and manage skills with sector-specific proficiency levels, track progress over time |
| **📜 Certifications Hub** | Store, verify, and manage professional certifications with expiry tracking |
| **💼 Projects Portfolio** | Showcase your work with detailed project descriptions, outcomes, and skill mappings |
| **📈 Analytics Dashboard** | Cross-sector insights with skill gap analysis, readiness scores, and growth metrics |
| **🤖 AI Recommendations** | Personalized learning paths powered by OpenRouter API (GPT-4o-mini) |
| **🔄 Sector Comparison** | Compare your readiness across Healthcare, Agriculture, and Urban sectors |
| **📋 Assessment System** | Quick competency assessments to identify strengths and gaps |
| **🎓 Career Pathways** | Explore career paths with Udemy course recommendations |

### 🚀 Advanced Features

| Feature | Description |
|---------|-------------|
| **🧠 AI Chatbot** | Conversational career guidance using OpenRouter API for real-time advice |
| **👥 Mentor Network** | Connect with industry mentors in your sector of interest |
| **✅ Skill Verification** | Peer-to-peer skill verification system for credibility |
| **🎨 Multi-Sector Dashboards** | Dedicated, color-coded dashboards for each sector |
| **📱 Responsive Design** | Seamless experience across desktop, tablet, and mobile devices |
| **🌙 Dark Mode** | Full dark mode support for comfortable viewing |
| **👤 Rich Profiles** | Customizable profiles with avatar uploads, bio, and social links |
| **📊 Data Visualization** | Interactive charts and graphs using Recharts library |

---

## 🛠️ Technology Stack

<div align="center">

### Frontend Architecture

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14+ (App Router) with TypeScript |
| **Styling** | Tailwind CSS with custom gradients & animations |
| **UI Components** | Shadcn UI + Custom React components |
| **Data Visualization** | Recharts with responsive charts & legends |
| **State Management** | React Hooks (useState, useCallback, useEffect, useMemo) |
| **Authentication** | JWT tokens with localStorage persistence |
| **File Storage** | Supabase Storage for avatar uploads |
| **HTTP Client** | Fetch API with custom interceptors |
| **Icons** | Lucide React icon library |

### Backend Architecture

| Category | Technologies |
|----------|-------------|
| **Runtime** | Node.js (Latest LTS) |
| **Framework** | Express.js with TypeScript |
| **Database (Dev)** | SQLite via Prisma ORM |
| **Database (Prod)** | PostgreSQL (Supabase) |
| **ORM** | Prisma with automatic migrations |
| **Authentication** | JWT with Bearer token validation |
| **File Uploads** | Multer middleware for multipart forms |
| **File Storage** | Supabase Storage (persistent) |
| **AI Integration** | OpenRouter API (GPT-4o-mini) |
| **Environment** | dotenv for configuration |

### External Services & APIs

| Service | Purpose |
|---------|---------|
| **OpenRouter API** | AI-powered recommendations & chatbot (GPT-4o-mini) |
| **RapidAPI (Udemy)** | Course recommendations & learning resources |
| **Supabase** | PostgreSQL database + file storage |
| **Vercel** | Production deployment (frontend & backend) |

### Infrastructure & DevOps

| Tool | Purpose |
|------|---------|
| **Docker** | Containerization with Docker Compose |
| **Vercel** | Serverless deployment platform |
| **Git + GitHub** | Version control & collaboration |
| **npm Workspaces** | Monorepo package management |
| **ESLint** | Code quality & linting |
| **Prisma CLI** | Database migrations & management |
| **Nodemon** | Auto-reload during development |

</div>

---

## 🎨 Design System

### Sector Color Palette

<div align="center">

| Sector | Primary Color | Hex Code | Represents |
|--------|--------------|----------|------------|
| 🏥 **Healthcare** | Blue | `#0080FF` | Medical care & innovation |
| 🌾 **Agriculture** | Green | `#4CAF50` | Growth & sustainability |
| 🏙️ **Urban** | Purple/Orange | `#9C27B0` / `#FF6B35` | Modernization & transformation |

</div>

### Design Principles

- ✨ **Modern & Minimalist** - Clean interfaces with purposeful design
- 🌓 **Dual Theme Support** - Light mode primary + comprehensive dark mode
- ♿ **Accessibility First** - WCAG 2.1 AA compliant with proper contrast ratios
- 📱 **Mobile-First** - Responsive breakpoints for all device sizes
- 📐 **Consistent Spacing** - 4px grid system using Tailwind utilities
- 🎯 **Clear Typography** - Hierarchical text with system fonts for performance

---

## 🚀 Quick Start (Local Development)

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

- ✅ **Node.js** 18+ ([Download](https://nodejs.org/)) - Check: `node --version`
- ✅ **npm** 8+ (comes with Node.js) - Check: `npm --version`
- ✅ **Git** ([Download](https://git-scm.com/)) - Check: `git --version`
- ✅ **Supabase Account** ([Sign up](https://supabase.com/)) - For storage and optional database

### 1️⃣ Clone & Install

```bash
# Clone the repository
git clone https://github.com/NikzRN01/SkillXIntell.git
cd SkillXIntell

# Install all dependencies (monorepo setup)
npm install
```

### 2️⃣ Configure Environment Variables

#### Backend Configuration

```bash
# Copy the example environment file
cp backend/.env.example backend/.env
```

Edit `backend/.env` with your configuration:

```dotenv
# Database (SQLite for local development)
DATABASE_URL="file:./dev.db"

# Server Configuration
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000

# JWT Authentication (IMPORTANT: Use strong secret in production)
JWT_SECRET=your_jwt_secret_key_min_32_chars_change_this_in_production
JWT_EXPIRES_IN=7d

# Supabase Configuration (Get from https://app.supabase.com)
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_ANON_KEY=YOUR_ANON_KEY
SUPABASE_SERVICE_KEY=YOUR_SERVICE_ROLE_KEY
SUPABASE_AVATAR_BUCKET=avatars

# RapidAPI for Udemy Integration (Get from https://rapidapi.com/)
RAPIDAPI_KEY=your_rapidapi_key_here
RAPIDAPI_HOST=paid-udemy-course-for-free.p.rapidapi.com

# OpenRouter AI Service (Get from https://openrouter.ai/)
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_MODEL=openai/gpt-4o-mini
```

#### Frontend Configuration

```bash
# Copy the template file
cp frontend/ENV_TEMPLATE.txt frontend/.env.local
```

Edit `frontend/.env.local`:

```dotenv
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3️⃣ Setup Database

```bash
# Navigate to backend directory
cd backend

# Generate Prisma Client
npx prisma generate

# Create and sync database schema
npx prisma db push

# Seed demo data (recommended for testing)
npm run seed

# Return to root directory
cd ..
```

### 4️⃣ Start Development Servers

#### Option A: Start Both Servers (Recommended)

```bash
# From repository root - starts both frontend and backend
npm run dev
```

This will start:
- 🎨 **Frontend:** [http://localhost:3000](http://localhost:3000)
- ⚙️ **Backend API:** [http://localhost:5000](http://localhost:5000)

#### Option B: Start Servers Individually

```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend (in a new terminal)
cd frontend
npm run dev
```

### 🔐 Test Login Credentials

After running the seed script (`npm run seed`), use these credentials:

| Role | Email | Password |
|------|-------|----------|
| **Test User** | `test@skillxintell.com` | `Test@123` |
| **Student** | `student@skillxintell.com` | `Student@123` |
| **Educator** | `educator@skillxintell.com` | `Educator@123` |
| **Employee** | `employee@skillxintell.com` | `Employee@123` |

### ✅ Verify Installation

1. Open [http://localhost:3000](http://localhost:3000) in your browser
2. You should see the SkillXIntell homepage
3. Click "Login" and use one of the test credentials above
4. Explore the dashboard and features!

---

## 📖 How to Use SkillXIntell

### 🎯 Quick Start Guide

<div align="center">

| Step | Action | Time | Description |
|------|--------|------|-------------|
| 1️⃣ | **Register** | 2 min | Create your account with email and password |
| 2️⃣ | **Setup Profile** | 3 min | Add avatar, bio, social links, and sector preferences |
| 3️⃣ | **Add Skills** | 2 min each | Track abilities with proficiency levels (Beginner → Expert) |
| 4️⃣ | **Create Projects** | 4 min each | Showcase your work with descriptions and outcomes |
| 5️⃣ | **Add Certifications** | 3 min each | Track credentials with expiry dates and verification |
| 6️⃣ | **Explore Sectors** | - | Navigate Healthcare, Agriculture, and Urban dashboards |
| 7️⃣ | **Get AI Insights** | - | Receive personalized learning paths and recommendations |
| 8️⃣ | **Use AI Chatbot** | - | Ask career questions on the Analytics page |
| 9️⃣ | **Track Progress** | - | Monitor cross-sector analytics and readiness scores |

</div>

### 👥 User Workflows by Role

#### � Students
```
Track coursework skills → Build project portfolio → Get course recommendations → Request skill verification → Connect with mentors
```

#### 💼 Professionals
```
Manage work projects → Track certifications → Explore career transitions → Compare sector readiness → Network with peers
```

#### 👨‍🏫 Educators
```
Mentor students → Verify skill claims → Track student progress → Provide guidance → Review portfolios
```

### 📚 Detailed Documentation

For comprehensive guides and tutorials, see **[USER_GUIDE.md](USER_GUIDE.md)**

---

## 📁 Project Structure

```
SkillXIntell/
├── 🎨 frontend/                       # Next.js 14+ Frontend Application
│   ├── src/
│   │   ├── app/                      # Next.js App Router
│   │   │   ├── dashboard/           # 🏠 Main Dashboard
│   │   │   │   ├── agriculture/     # 🌾 Agriculture Sector
│   │   │   │   │   ├── assessment/  # Competency assessments
│   │   │   │   │   ├── certifications/ # Sector certifications
│   │   │   │   │   ├── projects/    # Sector projects
│   │   │   │   │   └── skills/      # Sector skills
│   │   │   │   ├── healthcare/      # 🏥 Healthcare Sector
│   │   │   │   ├── urban/           # 🏙️ Urban/Smart City Sector
│   │   │   │   ├── analytics/       # 📊 Cross-sector Analytics + AI Chatbot
│   │   │   │   ├── profile/         # 👤 User Profile Management
│   │   │   │   ├── skills/          # 🎯 Global Skills Management
│   │   │   │   ├── projects/        # 💼 Projects Portfolio
│   │   │   │   ├── certifications/  # 📜 Certifications Hub
│   │   │   │   └── verification/    # ✅ Skill Verification System
│   │   │   ├── (auth)/              # 🔐 Authentication (Login/Register)
│   │   │   ├── layout.tsx           # Root layout with providers
│   │   │   ├── page.tsx             # Landing page
│   │   │   └── globals.css          # Global styles & Tailwind
│   │   ├── components/              # ⚛️ Reusable React Components
│   │   │   ├── ui/                  # Shadcn UI primitives
│   │   │   ├── layout/              # Layout components (Navbar, Sidebar)
│   │   │   └── *.tsx                # Custom feature components
│   │   └── lib/                     # 🛠️ Utilities & Helpers
│   │       ├── api.ts               # API client with interceptors
│   │       ├── auth.ts              # Auth utilities & token management
│   │       ├── supabase.ts          # Supabase client configuration
│   │       ├── constants.ts         # App-wide constants
│   │       └── utils.ts             # Helper functions
│   ├── public/                      # 📦 Static Assets
│   ├── next.config.ts              # Next.js configuration
│   ├── tailwind.config.ts          # Tailwind CSS configuration
│   └── tsconfig.json               # TypeScript configuration
│
├── ⚙️ backend/                        # Express.js Backend API
│   ├── src/
│   │   ├── config/                  # 🔧 Configuration Modules
│   │   │   ├── database.ts          # Prisma database connection
│   │   │   ├── env.ts               # Environment validation
│   │   │   └── supabase.ts          # Supabase client setup
│   │   ├── controllers/             # 🎮 Route Controllers
│   │   │   ├── auth.controller.ts   # Authentication endpoints
│   │   │   ├── user.controller.ts   # User profile management
│   │   │   ├── skill.controller.ts  # Skills CRUD operations
│   │   │   ├── agriculture.controller.ts  # Agriculture sector
│   │   │   ├── healthcare.controller.ts   # Healthcare sector
│   │   │   ├── urban.controller.ts        # Urban sector
│   │   │   ├── analytics.controller.ts    # Analytics & insights
│   │   │   ├── chat.controller.ts         # AI Chatbot
│   │   │   ├── mentor.controller.ts       # Mentor network
│   │   │   └── verification.controller.ts # Skill verification
│   │   ├── services/                # 🔌 Business Logic & External APIs
│   │   │   ├── auth.service.ts      # JWT & authentication
│   │   │   ├── user.service.ts      # User operations
│   │   │   ├── skill.service.ts     # Skill operations
│   │   │   ├── ai-recommendation.service.ts  # OpenRouter integration
│   │   │   ├── mentor.service.ts    # Mentor matching logic
│   │   │   ├── verification.service.ts  # Verification workflow
│   │   │   └── udemy.service.ts     # Course recommendations
│   │   ├── middleware/              # 🛡️ Express Middleware
│   │   │   ├── auth.middleware.ts   # JWT token verification
│   │   │   └── upload.middleware.ts # Multer file uploads
│   │   ├── routes/                  # 🛣️ API Route Definitions
│   │   ├── scripts/                 # 📝 Database Scripts
│   │   │   ├── seed.ts              # Demo data seeding
│   │   │   └── test-db.ts           # Database connection test
│   │   ├── server.ts               # Express app initialization
│   │   └── express.d.ts            # TypeScript type extensions
│   ├── prisma/
│   │   ├── schema.prisma           # 🗄️ Database Schema
│   │   └── seed.ts                 # Seeding script
│   ├── .env.example                # Environment template
│   └── tsconfig.json               # TypeScript configuration
│
├── 🐳 docker-compose.yml             # Docker multi-container setup
├── 📦 package.json                   # Root workspace configuration
├── 📖 README.md                      # This file
├── 📚 USER_GUIDE.md                  # Comprehensive user guide
└── 📄 LICENSE                        # MIT License
```



---

## 📡 API Endpoints Reference

<div align="center">

### 🔐 Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register new user account |
| `POST` | `/api/auth/login` | User login with credentials |
| `POST` | `/api/auth/refresh` | Refresh JWT access token |

### 👤 User Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/users/profile` | Get current user profile |
| `PUT` | `/api/users/profile` | Update profile details |
| `PATCH` | `/api/users/basic-info` | Update name/email |
| `PATCH` | `/api/users/avatar` | Upload profile avatar |
| `GET` | `/api/users/:id` | Get user by ID |

### 🎯 Skills Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/skills` | List all user skills |
| `POST` | `/api/skills` | Create new skill |
| `PUT` | `/api/skills/:id` | Update existing skill |
| `DELETE` | `/api/skills/:id` | Delete skill |
| `GET` | `/api/skills/sector/:sector` | Get skills by sector |

### 📜 Certifications

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/certifications` | List all certifications |
| `POST` | `/api/certifications` | Add new certification |
| `PUT` | `/api/certifications/:id` | Update certification |
| `DELETE` | `/api/certifications/:id` | Remove certification |

### 💼 Projects Portfolio

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/projects` | List all projects |
| `POST` | `/api/projects` | Create new project |
| `PUT` | `/api/projects/:id` | Update project |
| `DELETE` | `/api/projects/:id` | Delete project |

### 🏥🌾🏙️ Sector-Specific Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/{sector}/skills` | Get sector-specific skills |
| `GET` | `/api/{sector}/projects` | Get sector-specific projects |
| `GET` | `/api/{sector}/certifications` | Get sector certifications |
| `GET` | `/api/{sector}/assessment` | Get sector assessment |
| `GET` | `/api/{sector}/career-pathways` | Get career paths with courses |

*Replace `{sector}` with: `healthcare`, `agriculture`, or `urban`*

### 📊 Analytics & AI Recommendations

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/analytics` | Cross-sector analytics dashboard |
| `GET` | `/api/analytics/:sector` | Sector-specific analytics |
| `POST` | `/api/recommendations` | Get AI-powered recommendations |
| `GET` | `/api/recommendations/:sector` | Sector-specific recommendations |

### 🤖 AI Chatbot

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/chat` | Send message to AI chatbot |
| `GET` | `/api/chat/history` | Retrieve chat history |

### 👥 Mentor Network

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/mentors` | Find available mentors |
| `POST` | `/api/mentor-requests` | Send mentor connection request |
| `GET` | `/api/mentor-requests` | Get mentor requests |
| `PATCH` | `/api/mentor-requests/:id` | Accept/reject mentor request |

### ✅ Skill Verification

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/verification-requests` | Request skill verification |
| `GET` | `/api/verification-requests` | Get verification requests |
| `PATCH` | `/api/verification-requests/:id` | Verify/reject skill claim |
| `GET` | `/api/verified-skills` | Get all verified skills |

</div>

---



## 🐳 Docker Deployment

Run the entire application stack with Docker:

```bash
# Build and start all services in detached mode
docker-compose up -d

# View real-time logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild containers after code changes
docker-compose up -d --build
```

---

## 🚢 Production Deployment

### Deploy to Vercel (Recommended)

#### Frontend Deployment

```bash
cd frontend
vercel --prod
```

#### Backend Deployment

```bash
cd backend
vercel --prod
```

### 🔧 Production Environment Setup

1. **Vercel Project Settings**
   - Add all environment variables from `.env.example`
   - Set `NODE_ENV=production`
   - Configure build settings

2. **Database Configuration**
   - Use Supabase PostgreSQL for production
   - Update `DATABASE_URL` to PostgreSQL connection string
   - Run migrations: `npx prisma migrate deploy`

3. **Security Configuration**
   - Generate strong `JWT_SECRET` (min 32 characters)
   - Configure `CORS_ORIGIN` to match frontend URL
   - Use production API keys for all services

4. **Storage Configuration**
   - Create Supabase Storage bucket for avatars
   - Set appropriate bucket permissions
   - Configure `SUPABASE_SERVICE_KEY`

### 📊 Deployment Checklist

- [ ] Environment variables configured in Vercel
- [ ] Database migrated to production
- [ ] Supabase Storage bucket created
- [ ] CORS origins properly configured
- [ ] API keys (OpenRouter, RapidAPI) activated
- [ ] JWT secret generated and set
- [ ] Frontend `NEXT_PUBLIC_API_URL` points to backend
- [ ] Test login functionality
- [ ] Verify file uploads work
- [ ] Check AI chatbot responses

---

## 📚 Available Scripts

### Root Level Commands

```bash
npm run dev              # 🚀 Start both frontend & backend concurrently
npm run build           # 🏗️ Build both frontend and backend for production
npm run lint            # 🔍 Run ESLint on frontend code
```

### Frontend Commands

```bash
cd frontend

npm run dev             # 🎨 Start Next.js development server (port 3000)
npm run build           # 📦 Build Next.js production bundle
npm run start           # ▶️ Start production server
npm run lint            # 🔍 Lint frontend code with ESLint
npm run type-check      # ✅ Run TypeScript type checking
```

### Backend Commands

```bash
cd backend

npm run dev             # ⚙️ Start Express with nodemon (port 5000)
npm run build           # 🏗️ Compile TypeScript to JavaScript
npm run start           # ▶️ Start production server
npm run seed            # 🌱 Seed demo data to database
npm run test-db         # 🧪 Test database connection
```

### Database Commands

```bash
cd backend

npx prisma generate     # 🔄 Generate Prisma Client
npx prisma db push      # 📤 Push schema changes to database
npx prisma db pull      # 📥 Pull schema from database
npx prisma migrate dev  # 🔄 Create and apply migration
npx prisma studio       # 🎨 Open Prisma Studio (GUI)
```

---

## 🔧 Troubleshooting

### 🚫 Port Already in Use

<details>
<summary><b>Error: EADDRINUSE - Port 3000 or 5000 already in use</b></summary>

**Windows:**
```bash
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace <PID> with actual process ID)
taskkill /PID <PID> /F
```

**macOS/Linux:**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```
</details>

### 🗄️ Database Issues

<details>
<summary><b>Error: Table does not exist / Prisma schema out of sync</b></summary>

```bash
cd backend

# Reset database and apply schema
npx prisma db push --force-reset

# Regenerate Prisma Client
npx prisma generate

# Seed demo data
npm run seed
```
</details>

<details>
<summary><b>Error: Prisma Client not generated</b></summary>

```bash
cd backend
npx prisma generate
```
</details>

### 🖼️ Avatar Upload Issues

<details>
<summary><b>Error: Bucket not found / Upload failed</b></summary>

1. **Create Supabase Storage Bucket:**
   - Go to [Supabase Dashboard](https://app.supabase.com)
   - Navigate to Storage → Create bucket
   - Name it `avatars` (or match `SUPABASE_AVATAR_BUCKET` in `.env`)
   - Set to **Public** bucket

2. **Verify Environment Variables:**
   - Check `SUPABASE_SERVICE_KEY` is set in `backend/.env`
   - Ensure it's the **service role key**, not anon key

3. **Check Bucket Permissions:**
   - Bucket should allow public reads
   - Service role should have write permissions
</details>

### 🔐 Authentication Problems

<details>
<summary><b>Error: Invalid credentials / Login failed</b></summary>

**Solution 1: Seed the database**
```bash
cd backend
npm run seed
```

**Solution 2: Register a new account**
- Use the registration page to create a new account

**Solution 3: Check JWT configuration**
- Ensure `JWT_SECRET` is set in `backend/.env`
- Verify `JWT_EXPIRES_IN` is valid (e.g., `7d`)
- Clear browser localStorage and try again
</details>

### 🌐 API Connection Issues

<details>
<summary><b>Error: Failed to fetch / Network error</b></summary>

1. **Check Backend is Running:**
   ```bash
   # Should see "Server running on port 5000"
   cd backend && npm run dev
   ```

2. **Verify Environment Variables:**
   - Frontend `.env.local`: `NEXT_PUBLIC_API_URL=http://localhost:5000`
   - Backend `.env`: `CORS_ORIGIN=http://localhost:3000`

3. **Check Browser Console:**
   - Open DevTools (F12)
   - Look for detailed error messages
   - Verify API URL is correct

4. **Test API Directly:**
   ```bash
   curl http://localhost:5000/api/auth/login
   ```
</details>

### 🏗️ Build Failures

<details>
<summary><b>Error: Build failed / TypeScript errors</b></summary>

**Solution 1: Clean install**
```bash
# Remove all node_modules
rm -rf node_modules frontend/node_modules backend/node_modules

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install
```

**Solution 2: Clear TypeScript cache**
```bash
# Unix/macOS/Linux
find . -name "tsconfig.tsbuildinfo" -delete
find . -name ".next" -type d -exec rm -rf {} +

# Windows PowerShell
Get-ChildItem -Recurse -Filter "tsconfig.tsbuildinfo" | Remove-Item
Get-ChildItem -Recurse -Filter ".next" -Directory | Remove-Item -Recurse -Force
```

**Solution 3: Check Node version**
```bash
node --version  # Should be 18.0.0 or higher
npm --version   # Should be 8.0.0 or higher
```
</details>

### 🤖 AI Features Not Working

<details>
<summary><b>Error: OpenRouter API error / Chatbot not responding</b></summary>

1. **Verify API Key:**
   - Check `OPENROUTER_API_KEY` is set in `backend/.env`
   - Get key from [OpenRouter](https://openrouter.ai/)

2. **Check API Credits:**
   - Ensure your OpenRouter account has credits
   - Check usage limits

3. **Verify Model:**
   - Default model: `openai/gpt-4o-mini`
   - Check model availability on OpenRouter
</details>

### 📚 Course Recommendations Not Loading

<details>
<summary><b>Error: RapidAPI error / No courses found</b></summary>

1. **Verify RapidAPI Key:**
   - Check `RAPIDAPI_KEY` is set in `backend/.env`
   - Get key from [RapidAPI](https://rapidapi.com/)

2. **Check API Subscription:**
   - Ensure you're subscribed to the Udemy API
   - Verify API quota hasn't been exceeded

3. **Check Host Configuration:**
   - `RAPIDAPI_HOST=paid-udemy-course-for-free.p.rapidapi.com`
</details>

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the Repository** - Click the "Fork" button on GitHub
2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/SkillXIntell.git
   cd SkillXIntell
   ```
3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Make Your Changes** - Write clean, documented code following existing style
5. **Commit Your Changes**
   ```bash
   git commit -m "Add: Amazing new feature"
   ```
6. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request** - Describe your changes in detail

### Contribution Guidelines

- ✅ Follow TypeScript best practices
- ✅ Write meaningful commit messages
- ✅ Update documentation as needed
- ✅ Test your changes thoroughly
- ✅ Keep PRs focused on a single feature/fix

---

## 🌟 Key Highlights

<div align="center">

| Feature | Benefit |
|---------|---------|
| 🎯 **Multi-Sector Focus** | Specialized dashboards for Healthcare, Agriculture, and Urban sectors |
| 🤖 **AI-Powered Insights** | OpenRouter GPT-4o-mini integration for intelligent recommendations |
| 📊 **Comprehensive Analytics** | Cross-sector skill gap analysis and career readiness metrics |
| ✅ **Peer Verification** | Build credibility through skill verification system |
| 🎓 **Learning Integration** | Udemy course recommendations aligned with skill gaps |
| 👥 **Mentor Network** | Connect with industry professionals for guidance |
| 🔒 **Secure & Scalable** | JWT authentication, Prisma ORM, Supabase infrastructure |
| 📱 **Modern UX** | Responsive design with dark mode support |

</div>

---

## 📊 Project Statistics

<div align="center">

| Metric | Count |
|--------|-------|
| **API Endpoints** | 50+ RESTful endpoints |
| **Database Models** | 12+ Prisma models |
| **React Components** | 100+ reusable components |
| **Sectors Supported** | 3 (Healthcare, Agriculture, Urban) |
| **AI Models Integrated** | OpenRouter GPT-4o-mini |
| **External APIs** | Supabase, OpenRouter, RapidAPI |
| **Lines of Code** | 10,000+ (TypeScript) |

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see [LICENSE](./LICENSE) file for details.

---

## 📞 Support & Contact

<div align="center">

| Resource | Link |
|----------|------|
| 📖 **Documentation** | [User Guide](USER_GUIDE.md) |
| 🐛 **Bug Reports** | [GitHub Issues](https://github.com/NikzRN01/SkillXIntell/issues) |
| 💡 **Feature Requests** | [GitHub Discussions](https://github.com/NikzRN01/SkillXIntell/discussions) |
| 👨‍💻 **Project Lead** | [@NikzRN01](https://github.com/NikzRN01) |
| 📦 **Repository** | [GitHub - SkillXIntell](https://github.com/NikzRN01/SkillXIntell) |

</div>

---

## 🙏 Acknowledgments

Special thanks to:
- **Next.js Team** - For the amazing React framework
- **Prisma Team** - For the excellent ORM
- **Supabase** - For backend infrastructure and storage
- **OpenRouter** - For AI API integration
- **Shadcn UI** - For beautiful UI components
- **Vercel** - For seamless deployment platform

---

<div align="center">

### 🚀 Built for Better Education and Career Outcomes

**Empowering the next generation of professionals in emerging sectors**

[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)](https://github.com/NikzRN01/SkillXIntell)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)

**⭐ Star this repository if you find it helpful!**

</div>
