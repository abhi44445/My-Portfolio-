# My-Portfolio- - Miranda Paper Portfolio

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Repository Overview
This is a personal portfolio repository for Miranda Paper. Currently, it contains only a README.md file and is in the initial setup phase. The portfolio is designed to showcase work, skills, and projects.

## Working Effectively

### Initial Setup
Since this is a minimal repository, you'll need to set up the development environment based on the intended technology stack:

**For Static HTML/CSS/JS Portfolio:**
- No build process required
- Create `index.html`, `style.css`, and `script.js` files directly
- Use a simple HTTP server for testing: `python3 -m http.server 8000` or `npx serve .`
- Validation: Open `http://localhost:8000` in browser and verify portfolio loads correctly

**For Node.js/React Portfolio:**
- Node.js v20.19.5 and npm v10.8.2 are pre-installed in this environment
- Initialize project: `npm init -y` -- takes 1-2 seconds
- Install dependencies: `npm install react react-dom next.js` (or preferred framework)
- Set up build scripts in package.json
- NEVER CANCEL: Initial npm install can take 5-10 minutes. Set timeout to 15+ minutes.
- Build: `npm run build` -- typically takes 1-3 minutes. NEVER CANCEL. Set timeout to 10+ minutes.
- Development server: `npm run dev` -- starts immediately, runs continuously
- Test: `npm test` (if tests are added) -- typically takes 30 seconds to 2 minutes. Set timeout to 5+ minutes.

**For Jekyll/GitHub Pages Portfolio:**
- Ruby 3.2.3 is pre-installed in this environment
- Install Jekyll: `gem install jekyll bundler` -- takes 1-2 minutes. Set timeout to 5+ minutes.
- Initialize: `jekyll new . --force` (if starting fresh)
- Install dependencies: `bundle install` -- can take 3-5 minutes. NEVER CANCEL. Set timeout to 10+ minutes.
- Build: `bundle exec jekyll build` -- takes 30 seconds to 2 minutes. Set timeout to 5+ minutes.
- Serve: `bundle exec jekyll serve` -- starts immediately, runs continuously

### Common Development Tasks

**Adding New Portfolio Sections:**
- Create appropriate HTML/React components for: About, Projects, Skills, Contact
- Ensure responsive design for mobile and desktop viewing
- Add proper navigation between sections
- Include proper meta tags for SEO

**Testing and Validation:**
- ALWAYS test portfolio on both desktop and mobile viewports
- Verify all links work correctly (internal navigation and external project links)
- Test contact forms if implemented (ensure form validation works)
- Check loading performance with browser dev tools
- Validate HTML with W3C validator if using static HTML
- Test accessibility with screen readers or browser accessibility tools

**Image and Asset Management:**
- Create `assets/` or `public/` directory for images, documents, and other files
- Optimize images for web (use appropriate formats: WebP, JPEG, PNG)
- Ensure proper alt text for all images for accessibility

## Common Validation Commands

**Pre-development environment validation:**
- Check Node.js: `node --version` (should show v20.19.5)
- Check npm: `npm --version` (should show v10.8.2)
- Check Ruby: `ruby --version` (should show 3.2.3)
- Check Python: `python3 --version` (for simple HTTP server)

**Testing Local Development Server:**
- Static files: `python3 -m http.server 8000` then test `curl -I http://localhost:8000`
- Node.js apps: `npm run dev` then test `curl -I http://localhost:3000` (typical port)
- Jekyll: `bundle exec jekyll serve` then test `curl -I http://localhost:4000`

**File Structure Validation:**
- List all files: `find . -type f -not -path './.git/*' | sort`
- Check for common web files: `ls -la *.html *.css *.js 2>/dev/null || echo "No web files found"`
- Verify assets directory: `ls -la assets/ public/ 2>/dev/null || echo "No assets directory found"`

## Validation Scenarios

After making changes, ALWAYS run through these complete scenarios:

**Navigation Test:**
1. Load the homepage
2. Navigate to each major section (About, Projects, Skills, Contact)
3. Verify all internal links work
4. Test any external project links open correctly

**Responsive Design Test:**
1. Test on desktop viewport (1920x1080)
2. Test on tablet viewport (768x1024)
3. Test on mobile viewport (375x667)
4. Verify layout adapts appropriately for each screen size

**Contact Functionality Test (if applicable):**
1. Fill out contact form with valid information
2. Submit form and verify success message or email sending
3. Test form validation with invalid inputs

**Performance Test:**
1. Check page load time in browser dev tools
2. Verify images load properly and are optimized
3. Test with slow network connection simulation

## Repository Structure

### Current Structure
```
.
├── README.md
└── .github/
    └── copilot-instructions.md
```

### Expected Portfolio Structure (as it develops)
```
.
├── README.md
├── index.html (or pages/ for framework-based)
├── css/ (or styles/)
├── js/ (or src/)
├── assets/
│   ├── images/
│   ├── documents/
│   └── icons/
├── projects/ (project-specific pages/data)
└── package.json (if using Node.js)
```

## Technology Stack Considerations

**Static Portfolio (Recommended for simplicity):**
- HTML5, CSS3, JavaScript (vanilla or minimal libraries)
- No build process required
- Easy to deploy to GitHub Pages, Netlify, or Vercel
- Fast loading and SEO-friendly

**Framework-Based Portfolio:**
- React, Vue.js, or Angular for dynamic content
- Next.js or Nuxt.js for static site generation with React/Vue
- Requires build process and more complex deployment
- Better for complex portfolios with dynamic content

**CMS-Based Portfolio:**
- Jekyll (Ruby), Hugo (Go), or Gatsby (React) for static site generation
- Good balance of simplicity and features
- Markdown support for easy content management

## Deployment and CI/CD

**GitHub Pages (Static):**
- Enable GitHub Pages in repository settings
- Choose source: main branch or /docs folder
- Access at: `https://abhi44445.github.io/My-Portfolio-/`

**Netlify/Vercel (Static or Framework):**
- Connect GitHub repository
- Configure build command and output directory
- Automatic deployments on push to main branch

## Timing Expectations and Timeouts

**CRITICAL: NEVER CANCEL these commands - they may take longer than expected:**

- `npm install` (fresh): 5-10 minutes, set timeout to 15+ minutes
- `npm install` (with cache): 30 seconds - 2 minutes, set timeout to 5+ minutes
- `npm run build` (React/Next.js): 1-3 minutes, set timeout to 10+ minutes
- `bundle install` (Jekyll): 3-5 minutes, set timeout to 10+ minutes
- `gem install jekyll bundler`: 1-2 minutes, set timeout to 5+ minutes
- `bundle exec jekyll build`: 30 seconds - 2 minutes, set timeout to 5+ minutes
- `npm test`: 30 seconds - 2 minutes, set timeout to 5+ minutes

**Immediate commands (under 10 seconds):**
- `npm init -y`
- `python3 -m http.server 8000` (starts immediately)
- `npm run dev`, `bundle exec jekyll serve` (start immediately, run continuously)

## Common Issues and Solutions

**Images not loading:**
- Check file paths are relative to the HTML file
- Ensure proper case sensitivity in filenames
- Verify images are committed to repository

**CSS not applying:**
- Check CSS file path in HTML link tag
- Verify CSS syntax is valid
- Check browser dev tools for CSS loading errors

**Responsive design issues:**
- Add proper viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Use CSS media queries for different screen sizes
- Test with browser dev tools device emulation

## Performance Guidelines

- Optimize images: use WebP format when possible, compress JPEG/PNG files
- Minimize CSS and JavaScript for production
- Use CDN for external libraries when possible
- Implement lazy loading for images below the fold
- Keep total page size under 3MB for good performance

## SEO and Accessibility

- Include proper meta tags (title, description, keywords)
- Use semantic HTML elements (header, nav, main, footer, section, article)
- Provide alt text for all images
- Ensure proper heading hierarchy (h1, h2, h3, etc.)
- Test with screen readers and keyboard navigation
- Maintain good color contrast ratios (WCAG guidelines)

## Content Guidelines

**About Section:** Include professional summary, skills, and personal interests
**Projects Section:** Showcase 3-6 best projects with descriptions, technologies used, and links
**Skills Section:** List technical skills, tools, and frameworks
**Contact Section:** Provide multiple contact methods (email, LinkedIn, GitHub)

Remember: This portfolio represents Miranda Paper professionally, so maintain high quality standards in both code and content presentation.