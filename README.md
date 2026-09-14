# PubEngine Demo Site

A static, single-page demo site used to showcase the PubEngine PDF viewer web component in a realistic
publication/resource-page layout. All branding ("PubEngine Science"), navigation links, and article
content are fictional — this is not a real company or publication.

## Structure

- `index.html` — the page markup
- `styles.css` — all styling
- `script.js` — small UI behaviors (mobile nav toggle, region banner dismiss)

## Swapping in the real PDF viewer

The placeholder lives in `index.html`, inside `.viewer-card`:

```html
<div class="pdf-placeholder" id="pdfViewerPlaceholder">
  ...
</div>
```

Replace that `<div>` with the actual web component (e.g. `<pdf-viewer src="..."></pdf-viewer>`), and
include its script tag in `<head>` or before `</body>`. The surrounding `.viewer-card` keeps its size via
an `aspect-ratio: 8.5 / 11` on `.pdf-placeholder` — apply an equivalent aspect ratio (or a fixed height) to
the real component so the layout doesn't shift.

## Running locally

No build step — just open `index.html` in a browser, or serve the folder with any static file server:

```bash
npx serve .
```

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings, enable **Pages** and point it at the `main` branch, root folder.
3. The site will be published at `https://<username>.github.io/<repo-name>/`.
