# Assets

Drop the real files here (the site reads them by these exact names):

| File name | What it is | Used by |
| --- | --- | --- |
| `nurai-2026-certificate.jpg` | The NURAI 2026 participation certificate image (JPG or PNG). If PNG, keep the `.jpg` name or update `ASSETS.certificate` in `src/content/site.ts`. | NURAI 2026 section + lightbox |
| `intelligent-study-assistant-paper.pdf` | The Intelligent Study Assistant research paper. | "View Research Paper" buttons |
| `og-image.png` | 1200×630 social share preview image (optional). | Open Graph / Twitter meta |

Until these files are added:

- The certificate card shows a graceful placeholder (no broken image).
- The research-paper buttons open the (currently missing) PDF path; add the file to activate them.

The file names are the single source of truth — change them in `src/content/site.ts` (`ASSETS`) and `index.html` (og-image) if you prefer different names.
