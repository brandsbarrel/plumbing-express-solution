# Plumbing Express Solutions

React + Vite Home page built from the supplied desktop and mobile designs. All React components use the `.js` extension; the Vite configuration enables JSX in those files.

## Run locally

```sh
npm install
npm run dev
```

On Windows PowerShell with script execution disabled, use `npm.cmd` instead of `npm`.

```sh
npm run build
npm run preview
```

The Home page is split into reusable components under `src/components/`. Business details and service content are in `src/data.js`. Original imagery is extracted from the supplied design files into `public/assets/`; `scripts/prepare-assets.py` documents those crops.

All eight service cards link to their corresponding `/services/:id` page. These pages share a reusable React component, with a Services index at `/services`. The Contact Us link returns to the Home page footer; a separate Contact Us page is pending its design. Production hosting must rewrite application URLs to `index.html` for direct service page visits (Vite dev and preview servers do this automatically).

The hero and footer preserve the supplied flattened artwork as uninterrupted responsive images, with accessible headings and correctly positioned telephone, booking and email links. Text in those two artworks is part of the supplied images. The remaining sections use editable React content. The footer follows the standalone footer reference, without a contact form.
