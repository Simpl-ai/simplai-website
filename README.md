# SIMPL AI Website

Welcome to the official SIMPL AI website. This site showcases our private AI technology for business intelligence and ERP reporting, built with Next.js, React, TypeScript, and Tailwind CSS.

## About SIMPL AI

SIMPL AI enables organizations to securely and efficiently report on data in their business systems using artificial intelligence—without ever touching your data. Our solution is fast, secure, and unlimited, with a focus on privacy and ease of use.

### Key Features
- Natural language data querying
- Private AI technology (no data extraction)
- Unlimited, real-time reporting
- Compliance and regulatory support
- Seamless integration with existing business systems
- Modern, responsive UI/UX

## Website Structure
- Home, Features, Solutions, Services, About, and Contact sections
- Interactive overlays for survey, investment, and getting started
- Responsive navigation and footer
- Optimized images and icons

## Deployment

This site is statically exported and ready for deployment to GitHub Pages or any static hosting provider.

### Deploy to GitHub Pages
1. Ensure `next.config.ts` contains:
   ```ts
   output: "export"
   ```
2. Build and export the site:
   ```bash
   npm run build
   npm run export
   ```
3. Deploy the contents of the `out/` folder to your GitHub Pages branch (e.g., `gh-pages`).
4. If your site is served from a subpath, set `basePath` and `assetPrefix` in `next.config.ts`.

## License

This website and its source code are copyright © 2025 SIMPL AI. All rights reserved.

---

For development instructions, contributing guidelines, and template information, see [CONTRIBUTING.md](CONTRIBUTING.md).
