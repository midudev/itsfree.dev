# itsfree.dev

[itsfree.dev](https://itsfree.dev) is a curated, bilingual directory of genuinely useful free tools for developers, makers, and small teams.

It focuses on products with a practical free tier—not just a short trial—and makes their limits, access requirements, and current pricing pages easy to find.

## What is included

- Free developer tools across hosting, databases, AI, authentication, observability, CI/CD, APIs, design, security, and more.
- English and Spanish copy throughout the interface.
- Direct links to each product's current pricing page.
- Clear free-tier summaries and card or sign-up requirements.
- Search and category filters.
- Static resource pages with structured data, canonical metadata, and sitemap support.

## Tech stack

- [Astro](https://astro.build/) for the static site.
- TypeScript for the catalog and supporting data.
- Plain CSS for the design system and responsive layout.
- [Tabler Icons](https://tabler.io/icons) for category icons.

## Run locally

Requirements: Node.js 22 or newer and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

The development server is available at `http://localhost:4321` by default.

## Available commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Astro development server. |
| `pnpm check` | Run Astro and TypeScript diagnostics. |
| `pnpm build` | Validate and generate the production site in `dist/`. |
| `pnpm preview` | Preview the generated production build. |
| `pnpm preview:cloudflare` | Build and preview the site in the Workers runtime. |
| `pnpm deploy` | Build and deploy the static assets with Wrangler. |

## Project structure

```text
src/
├── components/          Reusable interface components
├── data/                Resources, pricing links, and free-tier details
├── layouts/             Shared page metadata and document layout
├── pages/               Home, sitemap, and resource pages
└── styles/              Global and resource-detail styles
public/
├── favicons/            Local resource icons
├── fonts/               Self-hosted fonts
└── robots.txt           Search crawler rules
```

The catalog lives primarily in [`src/data/resources.ts`](src/data/resources.ts), while free-tier limits and access requirements live in [`src/data/free-tiers.ts`](src/data/free-tiers.ts).

## Deploy to Cloudflare Workers

The project is configured as an assets-only Cloudflare Worker in [`wrangler.jsonc`](wrangler.jsonc). Astro generates a static `dist/` directory and Wrangler uploads it to Workers Static Assets; no SSR adapter or Worker entrypoint is required.

To preview the production build locally:

```bash
pnpm preview:cloudflare
```

To deploy from an authenticated local environment:

```bash
pnpm exec wrangler login
pnpm deploy
```

For [Cloudflare Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/), connect this GitHub repository and use:

- Production branch: `main`
- Build command: `pnpm build`
- Deploy command: `pnpm exec wrangler deploy`
- Root directory: `/`

After the first deployment, attach `itsfree.dev` as a custom domain from the Worker's **Settings → Domains & Routes** section. The custom domain is intentionally not hard-coded in `wrangler.jsonc`, so preview deployments and different Cloudflare accounts remain safe to use.

## Contributing

Corrections and genuinely useful additions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

When proposing a resource, include evidence of its current free tier and link directly to its official pricing or limits page.

## Acknowledgements

Category icon paths come from [Tabler Icons](https://tabler.io/icons), available under the MIT license.

## License

No license has been granted for this repository yet. Please open an issue before reusing substantial parts of the project.
