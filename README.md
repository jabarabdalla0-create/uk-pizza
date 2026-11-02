# UK Pizza · Erbil

A responsive restaurant website built with React, Vite, Tailwind CSS, and Lucide React. It includes an English / Kurdish Sorani / Arabic interface, RTL and LTR layout support, a categorized menu preview, an interactive basket, restaurant information, and links to ordering and digital menu services.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

The generated static site is in `dist/` and can be deployed to Vercel, Netlify, Cloudflare Pages, or another static host. No server-side environment variables are required.

## Confirm these details before launch

- **Menu:** The entries in `src/data.js` are illustrative examples, not a verified UK Pizza menu. Replace names, descriptions, categories, and photos with the restaurant's confirmed menu.
- **Prices:** Sample entries intentionally have `price: null`; no menu prices are shown or calculated. Add confirmed IQD prices in `src/data.js` if available. The provided IQD 5,000–15,000 per-person range is shown as business information.
- **Social profile:** `business.instagramUrl` currently links to the general Instagram homepage. Replace it with UK Pizza's verified profile.
- **Ordering:** Talabat uses its general homepage until a restaurant-specific ordering page is confirmed. The in-site basket prepares a local order summary only; it does not submit or charge an order. Customers are prompted to call the restaurant to confirm the menu, prices, and delivery.
- **Restaurant photo:** The supplied exterior photo is included at `public/assets/uk-pizza-exterior.png` and used in the story section.
- **Food photography:** Menu and hero food images are loaded from Unsplash URLs in `src/data.js` and `src/App.jsx`.

## Main files

- `src/App.jsx` — page sections, translations, language controls, mobile navigation, menu filtering, and basket behavior.
- `src/data.js` — business details, external links, menu categories, sample dishes, and food images.
- `src/index.css` — visual system, responsive layouts, and RTL adjustments.
- `public/assets/uk-pizza-exterior.png` — supplied restaurant exterior photo.
