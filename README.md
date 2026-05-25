# GoIT Advanced JS — Homework 3

Image search application built with the [Pixabay API](https://pixabay.com/api/docs/). Users enter a search query and the app fetches and displays matching images in a responsive gallery.

**Live demo:** https://innaivboiko.github.io/goit-advancedjs-hw-03/

## Task

Build a frontend application for searching images via the public Pixabay API.

**Requirements:**

1. **HTML form** with a text input and a submit button to enter the search query.
2. **HTTP request** to the Pixabay API on form submit, using the following query parameters:
   - `key` — your unique API access key
   - `q` — the user's search term (URL-encoded)
   - `image_type=photo` — restrict results to photos
   - `orientation=horizontal` — restrict to horizontal images
   - `safesearch=true` — only safe-for-work content
3. **Gallery rendering** — display the returned images as a grid of cards. Each card shows the image and four stats below it: `likes`, `views`, `comments`, `downloads`.
4. **Lightbox** — clicking an image opens it at full size (e.g. via [SimpleLightbox](https://simplelightbox.com/)).
5. **Notifications** — if the API returns no matches, show a toast message (e.g. via [iziToast](https://izitoast.marcelodolza.com/)) such as:
   *"Sorry, there are no images matching your search query. Please try again!"*
6. **Loader** — show a loading indicator while the request is in progress.
7. Code is split into modules: API calls in [`src/js/pixabay-api.js`](src/js/pixabay-api.js), DOM rendering in [`src/js/render-functions.js`](src/js/render-functions.js).

## Tech stack

- [Vite](https://vitejs.dev/) — dev server and build tool
- Vanilla JavaScript (ES modules)
- HTML5 / CSS3
- Pixabay REST API

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- A free [Pixabay API key](https://pixabay.com/api/docs/)

### Installation

```bash
npm install
```

### Development

Start the local dev server with hot reload:

```bash
npm run dev
```

### Production build

Build the project for deployment to GitHub Pages:

```bash
npm run build
```

The output is written to `dist/` and is base-pathed to `/goit-advancedjs-hw-03/`.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project structure

```
src/
├── css/                 # Styles (reset, base, components)
├── img/                 # Local images
├── js/
│   ├── pixabay-api.js   # Pixabay API client
│   └── render-functions.js  # DOM rendering helpers
├── index.html
└── main.js              # Application entry point
```

## Author

Inna Boiko
