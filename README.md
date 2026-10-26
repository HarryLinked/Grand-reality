# Grand Reality – React website

Multi-page, responsive React site built from the supplied UI mockups (React 18 + Vite + React Router).

## Run it
```bash
npm install
npm start        # http://localhost:5173
npm run build    # production build in /dist
```

## Contact form submissions
Copy `.env.example` to `.env.local` and set `VITE_SUPABASE_URL` to your
Supabase project URL (for example, `https://your-project.supabase.co`), not its
`/rest/v1/` API endpoint. Set `VITE_SUPABASE_PUBLISHABLE_KEY` to the project's
publishable key. The client removes a trailing `/rest/v1/` if one is included.
Run `supabase/enquiries.sql` in the Supabase SQL Editor to create the `enquiries`
table and allow anonymous form submissions. The table must have `name`, `email`,
`phone`, `subject`, and `message` columns. The form shows its success message
only after Supabase confirms the insert.

## Pages / routes
| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/projects` | Projects overview (Ongoing / Completed / Upcoming cards) |
| `/projects/tesla-city` | Tesla City, Ponmar (on‑going project) |
| `/projects/sri-mayura-avenue` | Sri Mayura Avenue (completed project) |
| `/projects/grand-square` | Grand Square (completed project, same template) |
| `/channel-partners` | Channel Partner registration |
| `/contact` | Contact (`?subject=` pre-fills the subject) |
| `/privacy-policy`, `/terms` | Placeholder legal pages |

## Where things live
- `src/data.js` – company details, project cards, completed-project content, nav menu. Edit text/prices here.
- `src/pages/*` – one file per page. `src/components/*` – Header, Footer, sliders, form fields, map.
- `src/styles.css` – all styling (colour tokens at the top, responsive breakpoints at 1180 / 980 / 680px).
- `public/images/*` – photos. They were cropped from the mockups, so some are low resolution.
  **Swap in your original high-res photos using the same file names** and nothing else needs changing.

## Things to finish
- Channel Partner and Newsletter forms validate and show a success state but do not send anywhere yet – connect them to your API / email service.
- Maps use a Google Maps embed (no API key). Update `mapQuery` in `src/data.js` for exact pins.
- "Download Brochure" has no file yet – point it at a PDF in `public/`.
- Grand Square page text, Privacy Policy and Terms are placeholder copy.
- Font is Plus Jakarta Sans (loaded from Google Fonts in `index.html`).
