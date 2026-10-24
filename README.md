# Vinay Kumar — Premium Developer Portfolio 🚀

A modern, production-grade, dynamic personal portfolio website engineered for **Bejadi Vinay Kumar**, a Computer Science and Engineering undergraduate (Class of 2027) at Christu Jyothi Institute of Technology and Science, Jangaon.

Built with **React 19**, **Vite**, **Modern CSS Design System**, **Lucide Icons**, and **Canvas Constellations**.

---

## 🌟 Key Highlights & Implemented Features

1. **Sticky Adaptive Navigation**:
   - Monogram logo (`VK`) with electric gradient borders.
   - Smooth section scrolling with `IntersectionObserver` active item indicator.
   - Mobile slide drawer menu with backdrop blur.
   - 3-mode visual theme toggle (**Dark Default**, **Midnight Cyber**, **Clean Light**).
   - Instant "Let's Talk" CTA.

2. **High-Impact Hero Section**:
   - Live typewriter effect cycling through authenticated roles:
     - `Full Stack Developer`
     - `Java & Python Programmer`
     - `Data Analytics Enthusiast`
     - `Machine Learning Explorer`
   - Verified B.Tech CSE Class of 2027 badge.
   - Direct Resume Download button linked to confirmed `Vinay_Kumar_Resume.pdf`.
   - Verified GitHub (`vinaykumar081722-wq`) and LinkedIn profile buttons.
   - Glassmorphic Python code terminal card with syntax checking and developer facts.
   - Interactive floating tech chips.

3. **About Me Section**:
   - Authentic, first-person narrative reflecting a motivated fresher.
   - Quick facts metric card (Degree, CGPA 7.9, Internship, GitHub repos).
   - Three engineering pillar cards:
     - *Software Development*
     - *Data & Intelligence*
     - *Continuous Learning*

4. **Grouped Skills Showcase**:
   - Tabbed category filter (`All`, `Languages`, `Web & Frontend`, `Data & ML`, `Databases`, `Tools`).
   - Authentic proficiency labels without fake mastery percentages.
   - Context descriptions detailing how each technology was practically utilized.

5. **Plasmid Internship Timeline**:
   - Verified experience: **Full Stack Development Intern at Plasmid** (September 1, 2025 – November 1, 2025).
   - Glowing timeline track with milestone nodes.
   - 4 verified highlights from resume:
     - Developed and maintained full-stack web applications.
     - Designed and implemented REST APIs and integrated databases.
     - Built responsive user interfaces and optimized performance.
     - Collaborated with the development team to debug and deploy applications.

6. **Engineered Projects & Interactive Sandboxes**:
   - Filterable projects grid: `All`, `Machine Learning & Data`, `Full Stack & Web`, `Frontend & Mini Apps`.
   - Detailed modal view with architectural breakdowns, problem statements, and key implemented capabilities.
   - **Interactive Live Sandboxes for each project**:
     - **Movie Recommendation System**: Interactive movie selector, TMDB poster preview, and top 5 vector similarity rankings.
     - **Career Readiness Engine**: Real-time interactive employability score calculator with CGPA, project, and skill sliders.
     - **Food Delivery Frontend**: Interactive dish cart with dynamic quantity adjustments and subtotal calculation.
     - **Tactile Mini Calculator**: Functional live calculator keypad for real-time arithmetic.
     - **Form Validation Portal**: Interactive client-side input validation test bench with instant regex error cues.

7. **Featured Project Deep-Dive**:
   - In-depth architectural spotlight on the **Movie Recommendation Engine** (`vinaykumar081722-wq/Movie-Recommendation`).
   - Detailed explanation of tokenization, Porter stemming, CountVectorizer, and pairwise cosine similarity.
   - Transparent implementation note clarifying content-based filtering approach with TMDB 5000 dataset.

8. **Academic Qualifications & Certifications**:
   - Education:
     - **B.Tech in CSE** (2023–2027) | Christu Jyothi Institute of Technology and Science | **CGPA: 7.9**
     - **Intermediate MPC** (2021–2023) | ABV Junior College, Jangaon | **TSBIE: 93.1%**
     - **SSC** (2021) | St. Mary's High School, Jangaon | **CGPA: 10.0**
   - 4 Verified Industry Credentials:
     - OutSkill: Generative AI MasterMind
     - Novitech: Data Analytics Certification
     - JPMorgan Chase (Forage): Software Engineering Virtual Experience
     - Deloitte (Forage): Data Analytics Virtual Experience

9. **Contact & Resume Integration**:
   - Working email copy button with clipboard API feedback and confetti celebration.
   - Direct prefilled `mailto:` transmission fallback.
   - Verified resume asset (`public/Vinay_Kumar_Resume.pdf`) with download and new-tab preview.

---

## 📁 Project Structure

```
vinay-portfolio/
├── public/
│   ├── favicon.svg              # Custom VK SVG icon
│   └── Vinay_Kumar_Resume.pdf   # Confirmed resume PDF
├── src/
│   ├── assets/                  # Static assets
│   ├── components/
│   │   ├── About.jsx            # About Me narrative & pillar cards
│   │   ├── BackToTop.jsx        # Floating back to top button
│   │   ├── CanvasBackground.jsx # Animated particle constellation canvas
│   │   ├── Certifications.jsx   # Grid of verified certifications
│   │   ├── Contact.jsx          # Contact form & copy email with confetti
│   │   ├── Education.jsx        # Academic qualifications cards
│   │   ├── Experience.jsx       # Plasmid internship timeline
│   │   ├── FeaturedDeepDive.jsx # Movie Recommender technical spotlight
│   │   ├── Footer.jsx           # Footer with links & credentials
│   │   ├── Hero.jsx             # Hero section with typewriter & code terminal
│   │   ├── Icons.jsx            # Brand SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.jsx           # Sticky nav with active tracking & theme switch
│   │   ├── ProjectModal.jsx     # Deep dive modal with 5 interactive sandboxes
│   │   └── Projects.jsx         # Reusable project cards with category filters
│   ├── data/
│   │   └── portfolioData.js     # Centralized, authentic data source
│   ├── App.jsx                  # Main application orchestrator
│   ├── index.css                # Custom CSS design system & glassmorphism
│   └── main.jsx                 # Entry point
├── index.html                   # SEO metadata, Open Graph tags & Google fonts
├── package.json
└── vite.config.js
```

---

## 🛠️ How to Run Locally

### Prerequisites
- Node.js (v20+) and npm installed.

### Steps
1. Navigate to the project directory:
   ```bash
   cd C:\Users\bejad\.gemini\antigravity\scratch\vinay-portfolio
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

---

## 🚀 How to Deploy

### Option 1: Vercel (Recommended — 2 Minutes)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Vinay Kumar Portfolio"
   git remote add origin https://github.com/vinaykumar081722-wq/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import your `portfolio` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Your site will be live on a fast global CDN with free SSL!

### Option 2: GitHub Pages
1. In `vite.config.js`, set `base: '/<repository-name>/'` (or `'/'` if using `vinaykumar081722-wq.github.io`).
2. Run:
   ```bash
   npm run build
   ```
3. Use GitHub Actions with the official Vite deployment workflow.
