# 🚀 Deployment Guide

## Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Mortgage Calculator - Day 2 Frontend Mentor Challenge"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon in the top right
3. Select **"New repository"**
4. Name it: `mortgage-repayment-calculator`
5. **Don't** initialize with README (we already have one)
6. Click **"Create repository"**

## Step 3: Connect and Push to GitHub

Replace `yourusername` with your actual GitHub username:

```bash
git remote add origin https://github.com/yourusername/mortgage-repayment-calculator.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel (Free Hosting)

### Option A: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel
```

### Option B: Using Vercel Website

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import your `mortgage-repayment-calculator` repository
5. Vercel will auto-detect Vite settings
6. Click **"Deploy"**
7. Done! 🎉

## Step 5: Update README with Live Links

After deployment, update these lines in `README.md`:

```markdown
- Solution URL: [GitHub Repository](https://github.com/yourusername/mortgage-repayment-calculator)
- Live Site URL: [Live Demo](https://your-project.vercel.app)
```

## Step 6: Submit to Frontend Mentor

1. Go to the [challenge page](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73)
2. Click **"Submit solution"**
3. Add your GitHub repo URL
4. Add your live site URL (Vercel)
5. Share what you learned!

---

## Quick Commands Reference

```bash
# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# Build for production
npm run build

# Preview production build
npm run preview
```

---

**Good luck with your Day 2 challenge! 🎉**

