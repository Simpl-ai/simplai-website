# TODO.md: Final Code Review Checklist for SIMPL AI Website

---

## 1. Code Correctness & Best Practices
- [ ] Ensure all components use explicit TypeScript types for props and state
- [ ] Remove unused imports and variables in all files
- [ ] Use consistent naming conventions (PascalCase for components, camelCase for variables)
- [ ] Refactor any inline SVGs to use react-icons for consistency
- [ ] Ensure all hooks are called in the same order on every render (Rules of Hooks)
- [ ] Remove commented-out code (e.g., unused Link in Card)
- [ ] Use Next.js dynamic imports for overlays if needed for performance

## 2. Security
- [ ] Validate all user-supplied URLs before using in navigation or redirects
- [ ] Ensure all external links use rel="noopener noreferrer" and target="_blank" where appropriate
- [ ] Sanitize any user input in forms (e.g., newsletter signup)
- [ ] Ensure overlays and modals have role="dialog" and aria-modal="true" for accessibility

## 3. Functionality
- [ ] Add Escape key support to all overlays (already implemented, verify consistency)
- [ ] Ensure overlays close on background click (optional, for better UX)
- [ ] Test all anchor navigation with scroll-mt-* for header offset
- [ ] Ensure all overlay close buttons are positioned and styled consistently
- [ ] Test all forms for validation and error handling
- [ ] Ensure all navigation links work as expected on desktop and mobile
- [ ] Test static export (next export) and verify all pages and assets are included

## 4. UI/UX
- [ ] Standardize spacing, padding, and margin across all sections and overlays
- [ ] Use consistent accent colors and font sizes for headings and cards
- [ ] Ensure all cards use the new Card component with react-icons
- [ ] Test responsiveness on mobile, tablet, and desktop
- [ ] Ensure all images use next/image for optimization
- [ ] Add scroll-mt-* to all anchor-targeted sections
- [ ] Test overlays for scrollability and accessibility
- [ ] Ensure all buttons and links have clear hover/focus states

## 5. Documentation
- [ ] Update README.md with deployment instructions for GitHub Pages
- [ ] Add comments to complex components and functions
- [ ] Document prop types for all components
- [ ] Add a CONTRIBUTING.md if open to contributions
- [ ] Add LICENSE file if publishing publicly

## 6. Project Structure
- [ ] Rename simplai-clone folder to simplai-site (or simplai-app)
- [ ] Group atomic UI components in src/components/ui/
- [ ] Group overlays in src/components/overlays/
- [ ] Group sections in src/components/sections/
- [ ] Standardize image naming in public/images/
- [ ] Remove unused or legacy files

## 7. Final Deployment
- [ ] Update next.config.ts for static export (output: "export")
- [ ] Set basePath/assetPrefix if deploying to a subpath
- [ ] Add export and deploy scripts to package.json
- [ ] Build and export site (npm run build && npm run export)
- [ ] Deploy out/ folder to GitHub Pages (gh-pages branch or GitHub Action)
- [ ] Test live site for all functionality, UI/UX, and performance

---

**Track progress by checking off each item as completed.**
