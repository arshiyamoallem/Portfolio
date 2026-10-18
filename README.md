# Arshiya Moallem - Portfolio

Personal portfolio showcasing my projects, experience, education, and skills.

**Live site:** [arshiyamoallem.com](https://arshiyamoallem.com)

## Features

- **Responsive design** for phone, tablet, and desktop
- **Single dark theme** with one accent color, defined once in CSS
- **Sticky navbar** with a mobile menu
- **Project cards** with tech tags and GitHub links
- **Timeline** for experience and education
- **Skills** grouped by category with icons
- **Blog section** (placeholder posts for now)
- **Contact form** in a modal, with a confirmation message and Escape-to-close
- **Scroll fade-in animations** that respect the "reduce motion" system setting
- **Content stored as data**, so adding a project or job means editing one file

## Tech Stack

- [React](https://react.dev) with [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) for the dev server and build
- [Tailwind CSS](https://tailwindcss.com) (v4) for styling
- [Devicon](https://devicon.dev) for skill icons and [Inter](https://rsms.me/inter/) for type
- [Formspree](https://formspree.io) for the contact form
- GitHub Actions and GitHub Pages for deployment

## Project Structure

```
Portfolio/
├── .github/workflows/deploy.yml   # Builds and deploys on push to main
├── public/                        # Served as-is (copied into dist/)
│   ├── CNAME
│   ├── docs/                      # Resume PDF
│   └── img/                       # Profile photo and icons
├── src/
│   ├── components/                # Navbar, Hero, ProjectCard, Timeline, ...
│   ├── data/                      # projects, experience, education, skills, blog, links
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                  # Theme colors and base styles
├── index.html
├── vite.config.ts
└── package.json
```

## Getting Started

Requires Node.js 20.19+ (or 22.12+).

```bash
git clone https://github.com/arshiyamoallem/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Then open the local URL that Vite prints (usually `http://localhost:5173/`).

| Command           | What it does                               |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start the dev server with live reload      |
| `npm run build`   | Type-check and build the site into `dist/` |
| `npm run preview` | Serve the built site locally               |
| `npm run lint`    | Run ESLint                                 |

## Customizing

- **Content:** edit the files in `src/data/` (projects, experience, education, skills, blog posts, and links).
- **Colors:** change the values under `@theme` in `src/index.css`. The accent color is `--color-accent`.
- **Contact form:** the endpoint is in `src/components/ContactModal.tsx`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which installs dependencies, runs `npm run build`, and publishes `dist/` to GitHub Pages. In the repo settings, Pages must use **GitHub Actions** as its source, and the custom domain is set there.

## Version History

- **v3.0:** Rebuilt with React, TypeScript, Vite, and Tailwind
- **v2.0:** Plain HTML, CSS, and JavaScript version (preserved as a Git tag)

## License

Available under the [MIT License](LICENSE).

## Author

**Arshiya Moallem**

- GitHub: [@arshiyamoallem](https://github.com/arshiyamoallem)
- LinkedIn: [arshiya-moallem](https://www.linkedin.com/in/arshiya-moallem-63282b2a0/)
- Contact: use the form on the [website](https://arshiyamoallem.com)
