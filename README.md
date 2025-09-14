# Miranda Portfolio - Abhijeet Santosh Joshi

A pixel-perfect recreation of the Miranda Paper Portfolio design, built with React + TypeScript and populated with Abhijeet's professional data.

## 🎨 Design

This portfolio reproduces the exact layout, typography, and interactions of [niccolomiranda.com](https://www.niccolomiranda.com/), featuring:

- Left-aligned hero with very large name display
- Narrow content columns with wide white space
- Precise spacing and typographic scale
- Miranda-style reveal animations and hover effects
- Identical easing curves and timing functions

**Design Permission**: The user has explicitly granted permission to use and replicate the visual, typographic and interaction design of niccolomiranda.com for this portfolio.

## 🚀 Tech Stack

- **Framework**: Vite + React 18 + TypeScript
- **Styling**: CSS Modules with custom properties
- **Animations**: CSS transitions with IntersectionObserver
- **Accessibility**: Focus trap, ESC close, semantic HTML
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint + Prettier

## 📁 Project Structure

```
/
├── public/
│   ├── resume.pdf
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── avatar.jpg
│   │   └── projects/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── Button.tsx
│   ├── data/
│   │   ├── resumeData.json
│   │   └── parsedResumeLog.json
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tests/
│   └── ProjectCard.test.tsx
└── package.json
```

## 🏃‍♂️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Lint code
npm run lint
```

## 📊 Features

### Data-Driven Content
All content is loaded from `src/data/resumeData.json`:
- Personal information and contact details
- Professional experience and skills
- Project portfolio with detailed descriptions
- Education background

### Accessibility
- Semantic HTML structure
- Focus trap in modal dialogs
- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels and roles

### Responsive Design
- Mobile-first approach
- Fluid typography scaling
- Optimized for all screen sizes
- Touch-friendly interactions

### Performance
- Code splitting and lazy loading
- Optimized images and assets
- Minimal bundle size
- Fast loading times

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**:
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy from project root
   vercel
   ```

2. **Configure Build Settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Environment Variables**: None required for basic deployment

### Netlify

1. **Manual Deploy**:
   ```bash
   # Build the project
   npm run build
   
   # Deploy dist folder to Netlify
   ```

2. **Continuous Deployment**:
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

### GitHub Pages

1. **Build and Deploy**:
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

## 🔧 Configuration

### CSS Variables
Design tokens are defined in `src/index.css`:
```css
:root {
  --color-background: #ffffff;
  --color-foreground: #1a1a1a;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --space-xs: 0.5rem;
  /* ... */
}
```

### Animation Settings
Miranda-style animations with precise timing:
```css
--ease-out: cubic-bezier(.2,.9,.2,1);
--duration-normal: 360ms;
--duration-slow: 420ms;
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Tests cover:
- Component rendering
- User interactions
- Accessibility features
- Data integration

## 📝 License

This project is for portfolio purposes. Design inspiration credited to [Niccolò Miranda](https://www.niccolomiranda.com/) with explicit user permission.

## 👤 Contact

**Abhijeet Santosh Joshi**
- Email: abhijeet789@gmail.com
- GitHub: [@aj3434](https://github.com/aj3434)
- Website: [abhijeet1512.com](https://www.abhijeet1512.com)

---

Built with ❤️ using React + TypeScript
