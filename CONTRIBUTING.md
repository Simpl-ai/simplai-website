# Contributing to SIMPL AI Website

Thank you for your interest in contributing to the SIMPL AI website! This document provides guidelines for development, code standards, and deployment.

---

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/simplai-site.git
   cd simplai-site
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Project Structure
- `src/app/` — Main Next.js app directory
- `src/components/ui/` — Atomic UI components (Card, Button, etc.)
- `src/components/overlays/` — Overlay/modal components
- `src/components/sections/` — Page sections (Features, About, etc.)
- `public/images/` — Images and assets

---

## Code Standards
- Use TypeScript for all components
- Use explicit types for props and state
- Use React functional components and hooks
- Use Tailwind CSS for styling
- Use react-icons for all icons
- Use Next.js `next/image` for images
- Remove unused code and imports
- Follow the Rules of Hooks
- Use semantic HTML and accessible ARIA attributes

---

## Development Notes
- All overlays should support closing via Escape key
- Use `scroll-mt-*` for anchor sections to offset sticky header
- Standardize overlay container classes for consistent spacing
- Validate any user-supplied URLs before navigation or redirect
- Use `rel="noopener noreferrer"` for external links
- Test responsiveness and accessibility on all devices

---

## Deployment
- Build and export the site:
  ```bash
  npm run build
  npm run export
  ```
- Deploy the `out/` folder to GitHub Pages or your static host
- Update `next.config.ts` with `output: "export"` and set `basePath`/`assetPrefix` if needed

---

## Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## Feedback & Issues

Please open an issue or pull request for any bugs, suggestions, or improvements.

---

Thank you for helping make SIMPL AI better!
