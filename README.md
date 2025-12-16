# M.T.R Auto Parts - Business Portfolio

A modern, responsive website for M.T.R Auto Parts — a leading manufacturer and supplier of high-quality automotive parts since 1980.

## Features

- 🎨 Custom theme with gold/black color scheme
- 📱 Fully responsive design with smooth animations
- 🧭 React Router for navigation
- 📧 Contact form with EmailJS integration
- ⚡ Fast builds with Vite
- 🚗 Product catalog for automotive parts

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/mtr-auto-parts.git

# Navigate to project directory
cd mtr-auto-parts

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your EmailJS credentials

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from your [EmailJS Dashboard](https://www.emailjs.com/).

## Deployment to Vercel

### Step 1: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account (recommended) or email

### Step 2: Push Your Code to GitHub

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/my-business-portfolio.git
   git push -u origin main
   ```

### Step 3: Import Your Repository

1. Log in to your Vercel dashboard
2. Click **"Add New..."** → **"Project"**
3. Select **"Import Git Repository"**
4. Choose your `my-business-portfolio` repository
5. Click **"Import"**

### Step 4: Configure Environment Variables

1. In the project configuration screen, expand **"Environment Variables"**
2. Add the following variables:
   | Name | Value |
   |------|-------|
   | `VITE_EMAILJS_SERVICE_ID` | Your EmailJS Service ID |
   | `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS Template ID |
   | `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS Public Key |
3. Click **"Deploy"**

### Step 5: Automatic Deployments

Once connected, Vercel automatically:
- Deploys your site on every push to `main`
- Creates preview deployments for pull requests
- Provides instant rollbacks if needed

Your site will be live at `https://your-project-name.vercel.app`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **React Router** - Routing
- **EmailJS** - Contact form emails
