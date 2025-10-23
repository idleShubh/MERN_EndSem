# Shubh's Draw2UI

This app leverages tldraw and the GPT-4 Vision API to transform your wireframe sketches into fully functional HTML with Tailwind styling. It provides an innovative way to rapidly prototype your UI designs by simply drawing them out.

<img width="1470" height="956" alt="Screenshot 2025-10-24 at 12 29 54 AM" src="https://github.com/user-attachments/assets/4cfcf20a-50cc-4c38-9df3-fed42329a593" />


## How It Works

- Draw your UI wireframe using tldraw.
- The app captures the current canvas as an SVG and converts it to a PNG image.
- The PNG is sent to GPT-4 Vision with instructions to return a single HTML file, styled with Tailwind CSS.


## Getting Started

This is a Next.js app. To get started, follow the commands below in the root directory of the project. You will need an Gemini API key.

> Requirements: Next.js 14 and Node version greater than 18.17. [Read more here](https://nextjs.org/docs/pages/building-your-application/upgrading/version-14).


<!-- Insert new content -->
## Project Structure

The codebase is organized as follows:

- **Root Files:** Includes configuration and metadata files such as `LICENSE`, `next.config.js`, `package.json`, `postcss.config.js`, `tailwind.config.ts`, and `tsconfig.json`.

- **app/**
  - `globals.css`: Global styles for the application.
  - `layout.tsx`: Main layout component.
  - `page.tsx`: The home page of the app.
  - `api/toHtml/route.ts`: API route that converts the canvas to HTML.

- **components/**
  - `PreviewModal.tsx`: A modal component for previewing UI output.

- **lib/**
  - Contains utility functions including `blobToBase64.ts`, `getBrowserCanvasMaxSize.ts`, `getSvgAsImage.ts`, and `png.ts`.

- **public/**
  - Hosts static assets and images.
<!-- End of insert -->

Open https://mern-end-9wtwtcmir-idleshubh-gmailcoms-projects.vercel.app/ in your browser to see the app in action.
