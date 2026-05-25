# GoIT Advanced JS — Homework 4

Image search application built with the [Pixabay API](https://pixabay.com/api/docs/). Users enter a search query and the app fetches and displays matching images in a responsive gallery with pagination via a **Load more** button.

**Live demo:** https://innaivboiko.github.io/goit-advancedjs-hw-04/

## Task

Extend the image search application from the previous homework with new functionality: refactor HTTP requests to use **Axios** and `async/await`, add **pagination**, an **end-of-collection** message, and **smooth scrolling** between pages.

### Refactoring

- Replace `fetch` with the [Axios](https://axios-http.com/) library.
- Use `async/await` syntax for all asynchronous requests.

### Pagination

- Request **15** images per response (`per_page=15`).
- Start with `page=1`; increment by 1 with each subsequent request.
- Reset `page` to `1` on a new search query.
- Save the current query in a global variable on form submit so the **Load more** button can request the next page.

### Load more button

- After the gallery markup, add a **Load more** button.
- The button is hidden while the gallery is empty.
- It appears once images are rendered, and on each new submit it is first hidden, then shown again after results are received (if more pages remain).
- Move the loading indicator below the **Load more** button.

### End of collection

- Use the `totalHits` property from the API response to detect the last page.
- When the user reaches the end of the collection, hide the **Load more** button and show the toast message:
  *"We're sorry, but you've reached the end of search results."*

### Smooth scrolling

- After each new page of images is rendered, smoothly scroll the page by **two heights of a gallery card**.
- Use `getBoundingClientRect()` to measure the card and `window.scrollBy()` to scroll.

## Module structure

Code is organised with ES modules using `export` / `import`:

- [`src/js/pixabay-api.js`](src/js/pixabay-api.js) — HTTP requests.
  - `getImagesByQuery(query, page)` — performs the request and returns `response.data`.
- [`src/js/render-functions.js`](src/js/render-functions.js) — `SimpleLightbox` instance and UI helpers.
  - `createGallery(images)` — renders gallery markup and calls `lightbox.refresh()`.
  - `clearGallery()` — empties the gallery container.
  - `showLoader()` / `hideLoader()` — toggle the loader class.
  - `showLoadMoreButton()` / `hideLoadMoreButton()` — toggle the **Load more** button class.
- [`src/main.js`](src/main.js) — application logic: form submit, `iziToast` notifications, response checks, scrolling.

## Tech stack

- [Vite](https://vitejs.dev/) — dev server and build tool
- [Axios](https://axios-http.com/) — HTTP client
- [SimpleLightbox](https://simplelightbox.com/) — modal viewer
- [iziToast](https://izitoast.marcelodolza.com/) — notifications
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

The output is written to `dist/` and is base-pathed to `/goit-advancedjs-hw-04/`.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project structure

```
src/
├── css/                     # Styles (reset, base, components)
├── img/                     # Local images
├── js/
│   ├── pixabay-api.js       # Pixabay API client (Axios + async/await)
│   └── render-functions.js  # DOM rendering helpers + SimpleLightbox
├── index.html
└── main.js                  # Application entry point and logic
```

## Submission

- Link to the source files (this repository).
- Link to the live page on GitHub Pages.
- Repository archive in `.zip` format.

## Author

Inna Boiko
