import { accessRequirements, freeTiers, type AccessRequirement } from "./free-tiers"

export type Locale = "en" | "es"

export interface Category {
  id: string
  icon: string
  name: Record<Locale, string>
}

export interface Resource {
  name: string
  slug: string
  url: string
  pricingUrl: string
  faviconFile?: string
  category: string
  description: Record<Locale, string>
  freeTier: Record<Locale, string>
  accessRequirement: AccessRequirement
  tags: string[]
  featured?: boolean
}

export const sourceReviewedAt = "2026-07-23"

export const categories: Category[] = [
  { id: "hosting", icon: "cloud-computing", name: { en: "Hosting & deploy", es: "Hosting y deploy" } },
  { id: "data", icon: "database", name: { en: "Data & backend", es: "Datos y backend" } },
  { id: "ai", icon: "brain", name: { en: "AI & machine learning", es: "IA y machine learning" } },
  { id: "auth", icon: "fingerprint", name: { en: "Auth & users", es: "Auth y usuarios" } },
  { id: "email", icon: "mail", name: { en: "Email & forms", es: "Email y formularios" } },
  { id: "observability", icon: "activity-heartbeat", name: { en: "Monitoring", es: "Monitorización" } },
  { id: "ci", icon: "git-merge", name: { en: "CI/CD & code", es: "CI/CD y código" } },
  { id: "analytics", icon: "chart-histogram", name: { en: "Analytics", es: "Analítica" } },
  { id: "api", icon: "api", name: { en: "APIs & automation", es: "APIs y automatización" } },
  { id: "design", icon: "palette", name: { en: "Design & UI", es: "Diseño y UI" } },
  { id: "security", icon: "shield-lock", name: { en: "Security", es: "Seguridad" } },
  { id: "collaboration", icon: "users-group", name: { en: "Team & productivity", es: "Equipo y productividad" } },
  { id: "cms", icon: "file-text", name: { en: "Content & CMS", es: "Contenido y CMS" } },
  { id: "media", icon: "photo", name: { en: "Storage & media", es: "Storage y multimedia" } },
]

const pricingUrls: Record<string, string> = {
  "Vercel": "https://vercel.com/pricing",
  "Cloudflare": "https://www.cloudflare.com/plans/",
  "Netlify": "https://www.netlify.com/pricing/",
  "Cloud 66": "https://www.cloud66.com/pricing/",
  "deployment.io": "https://deployment.io/pricing",
  "Render": "https://render.com/pricing",
  "Appish": "https://appi.sh/#pricing",
  "Deno Deploy": "https://deno.com/deploy/pricing",
  "GitHub": "https://github.com/pricing",
  "Supabase": "https://supabase.com/pricing",
  "InsForge": "https://insforge.dev/pricing",
  "Neon": "https://neon.com/pricing",
  "Turso": "https://turso.tech/pricing",
  "MongoDB Atlas": "https://www.mongodb.com/pricing",
  "Upstash": "https://upstash.com/pricing",
  "CockroachDB": "https://www.cockroachlabs.com/pricing/",
  "Aiven": "https://aiven.io/pricing",
  "Braintrust": "https://www.braintrust.dev/pricing",
  "Langfuse": "https://langfuse.com/pricing",
  "Hugging Face": "https://huggingface.co/pricing",
  "Google AI Studio": "https://ai.google.dev/gemini-api/docs/pricing",
  "NVIDIA NIM": "https://docs.api.nvidia.com/nim/re/docs/run-anywhere#pricing",
  "Cerebras": "https://www.cerebras.ai/pricing",
  "Groq": "https://groq.com/pricing/",
  "Mistral AI": "https://mistral.ai/pricing/api/",
  "NotebookLM": "https://notebooklm.google/plans?hl=en",
  "Cloudflare Workers AI": "https://developers.cloudflare.com/workers-ai/platform/pricing/",
  "Freebuff": "https://freebuff.com/",
  "OpenRouter": "https://openrouter.ai/models",
  "Keywords AI": "https://keywordsai.co/pricing",
  "Pollinations.AI": "https://pollinations.ai/docs",
  "Portkey": "https://portkey.ai/pricing",
  "Comet Opik": "https://www.comet.com/site/pricing/",
  "Clerk": "https://clerk.com/pricing",
  "Auth0": "https://auth0.com/pricing",
  "WorkOS": "https://workos.com/pricing",
  "Kinde": "https://kinde.com/pricing",
  "Stytch": "https://stytch.com/pricing",
  "Descope": "https://www.descope.com/pricing",
  "Logto": "https://logto.io/pricing",
  "Resend": "https://resend.com/pricing",
  "Brevo": "https://www.brevo.com/pricing/",
  "Mailjet": "https://www.mailjet.com/pricing/",
  "Mailtrap": "https://mailtrap.io/pricing/",
  "Formspree": "https://formspree.io/plans",
  "Tally": "https://tally.so/pricing",
  "Web3Forms": "https://web3forms.com/pricing",
  "Sentry": "https://sentry.io/pricing/",
  "Better Stack": "https://betterstack.com/pricing",
  "Grafana Cloud": "https://grafana.com/pricing/",
  "UptimeRobot": "https://uptimerobot.com/pricing/",
  "Uptime.com": "https://uptime.com/pricing",
  "Checkly": "https://www.checklyhq.com/pricing/",
  "healthchecks.io": "https://healthchecks.io/pricing/",
  "New Relic": "https://newrelic.com/pricing",
  "Logtail": "https://betterstack.com/pricing",
  "GitHub Actions": "https://docs.github.com/en/billing/managing-billing-for-your-products/managing-billing-for-github-actions/about-billing-for-github-actions",
  "GitLab CI/CD": "https://about.gitlab.com/pricing/",
  "CircleCI": "https://circleci.com/pricing/",
  "Buildkite": "https://buildkite.com/pricing",
  "Codecov": "https://about.codecov.io/pricing/",
  "SonarCloud": "https://www.sonarsource.com/plans-and-pricing/sonarcloud/",
  "Dependabot": "https://docs.github.com/en/code-security/getting-started/github-security-features",
  "CodeRabbit": "https://www.coderabbit.ai/pricing",
  "Jules": "https://jules.google/",
  "PostHog": "https://posthog.com/pricing",
  "Mixpanel": "https://mixpanel.com/pricing/",
  "Amplitude": "https://amplitude.com/pricing",
  "Google Analytics": "https://marketingplatform.google.com/about/analytics/compare/",
  "Umami": "https://umami.is/pricing",
  "Ahrefs Web Analytics": "https://ahrefs.com/web-analytics",
  "Cloudflare Web Analytics": "https://developers.cloudflare.com/web-analytics/",
  "Microsoft Clarity": "https://clarity.microsoft.com/pricing",
  "Axiom": "https://axiom.co/pricing",
  "Pipedream": "https://pipedream.com/docs/pricing",
  "Beeceptor": "https://beeceptor.com/pricing",
  "MockAPI": "https://mockapi.io/pricing",
  "Abstract API": "https://www.abstractapi.com/api",
  "IPinfo": "https://ipinfo.io/pricing",
  "JSONPlaceholder": "https://jsonplaceholder.typicode.com/guide/",
  "Open-Meteo": "https://open-meteo.com/en/pricing",
  "OpenGraph.to": "https://www.opengraph.to/api",
  "Hoppscotch": "https://hoppscotch.com/pricing",
  "Figma": "https://www.figma.com/pricing/",
  "Canva": "https://www.canva.com/pricing/",
  "Excalidraw": "https://plus.excalidraw.com/pricing",
  "Penpot": "https://penpot.app/pricing",
  "tldraw": "https://tldraw.dev/pricing",
  "Fontshare": "https://www.fontshare.com/licenses/itf-ffl",
  "Stitch": "https://stitch.withgoogle.com/",
  "GitGuardian": "https://www.gitguardian.com/pricing",
  "Socket": "https://socket.dev/pricing",
  "Mozilla Observatory": "https://observatory.mozilla.org/",
  "Have I Been Pwned": "https://haveibeenpwned.com/API/Key",
  "Linear": "https://linear.app/pricing",
  "Notion": "https://www.notion.so/pricing",
  "Trello": "https://trello.com/pricing",
  "Miro": "https://miro.com/pricing/",
  "ClickUp": "https://clickup.com/pricing",
  "Discord": "https://discord.com/nitro",
  "Slack": "https://slack.com/pricing",
  "Sanity": "https://www.sanity.io/pricing",
  "Contentful": "https://www.contentful.com/pricing/",
  "Storyblok": "https://www.storyblok.com/pricing",
  "Hygraph": "https://hygraph.com/pricing",
  "DatoCMS": "https://www.datocms.com/pricing",
  "Prismic": "https://prismic.io/pricing",
  "Cloudinary": "https://cloudinary.com/pricing",
  "Uploadcare": "https://uploadcare.com/pricing/",
  "ImageKit": "https://imagekit.io/plans",
  "Dokploy": "https://dokploy.com/pricing",
}

const resourceCatalog: Omit<Resource, "slug" | "pricingUrl" | "freeTier" | "accessRequirement">[] = [
  // Hosting & deploy
  { name: "Vercel", url: "https://vercel.com", category: "hosting", featured: true, tags: ["hosting", "edge", "frontend"], description: { en: "Deploy web apps with a global CDN, SSL and preview URLs on every push.", es: "Despliega aplicaciones web con CDN global, SSL y previews en cada push." } },
  { name: "Cloudflare", url: "https://www.cloudflare.com", category: "hosting", featured: true, tags: ["cdn", "workers", "security"], description: { en: "A global developer platform for DNS, CDN, edge functions, storage and web security.", es: "Plataforma global para DNS, CDN, funciones edge, almacenamiento y seguridad web." } },
  { name: "Netlify", url: "https://www.netlify.com", category: "hosting", tags: ["hosting", "functions", "jamstack"], description: { en: "A complete platform for deploying modern web projects and serverless functions.", es: "Una plataforma completa para desplegar proyectos web modernos y funciones serverless." } },
  { name: "Cloud 66", url: "https://www.cloud66.com", category: "hosting", tags: ["deploy", "cloud", "automation"], description: { en: "Deploy and manage applications on your own cloud without the server busywork.", es: "Despliega y gestiona aplicaciones en tu cloud sin el trabajo pesado de servidores." } },
  { name: "deployment.io", url: "https://deployment.io", category: "hosting", tags: ["aws", "deploy", "preview"], description: { en: "Automate AWS deployments for static sites, services and preview environments.", es: "Automatiza en AWS sitios estáticos, servicios y entornos de preview." } },
  { name: "Render", url: "https://render.com", faviconFile: "render.com.svg", category: "hosting", tags: ["web services", "cron", "static"], description: { en: "Run web services, static sites and scheduled jobs from one dashboard.", es: "Ejecuta servicios web, sitios estáticos y tareas programadas desde un panel." } },
  { name: "Appish", url: "https://appi.sh", category: "hosting", tags: ["containers", "demos", "docker"], description: { en: "Push Docker containers to short-lived public slots made for demos.", es: "Publica contenedores Docker en slots temporales pensados para demos." } },
  { name: "Deno Deploy", url: "https://deno.com/deploy", category: "hosting", tags: ["typescript", "edge", "serverless"], description: { en: "Run JavaScript and TypeScript close to users on a global edge network.", es: "Ejecuta JavaScript y TypeScript cerca del usuario en una red edge global." } },
  { name: "GitHub", url: "https://github.com", category: "hosting", tags: ["git", "pages", "actions"], description: { en: "Repositories, static Pages, CI/CD and project tools in one developer platform.", es: "Repositorios, Pages, CI/CD y gestión en una plataforma para developers." } },
  { name: "Dokploy", url: "https://dokploy.com", faviconFile: "dokploy.com.webp", category: "hosting", tags: ["self-hosted", "docker", "paas"], description: { en: "An open-source, self-hostable alternative to Heroku, Vercel and Netlify for Docker apps and databases.", es: "Alternativa open source y self-hosted a Heroku, Vercel y Netlify para apps Docker y bases de datos." } },

  // Data & backend
  { name: "Supabase", url: "https://supabase.com", category: "data", featured: true, tags: ["postgres", "realtime", "backend"], description: { en: "A Postgres backend with database, auth, storage, realtime and edge functions.", es: "Backend Postgres con base de datos, auth, storage, realtime y funciones edge." } },
  { name: "InsForge", url: "https://insforge.dev", category: "data", featured: true, tags: ["backend", "ai agents", "postgres"], description: { en: "An agent-native backend with database, auth, storage, functions and model access.", es: "Backend nativo para agentes con base de datos, auth, storage, funciones y acceso a modelos." } },
  { name: "Neon", url: "https://neon.tech", category: "data", featured: true, tags: ["postgres", "serverless", "branching"], description: { en: "Serverless Postgres with instant database branches and scale-to-zero compute.", es: "Postgres serverless con ramas instantáneas y cómputo que escala a cero." } },
  { name: "Turso", url: "https://turso.tech", category: "data", featured: true, tags: ["sqlite", "edge", "database"], description: { en: "Edge-hosted SQLite databases with replicas close to your users.", es: "Bases SQLite en el edge con réplicas cerca de tus usuarios." } },
  { name: "MongoDB Atlas", url: "https://www.mongodb.com/atlas", category: "data", tags: ["nosql", "database", "cloud"], description: { en: "Managed MongoDB clusters with a permanent free option for small projects.", es: "Clústeres MongoDB gestionados con opción gratuita para proyectos pequeños." } },
  { name: "Upstash", url: "https://upstash.com", category: "data", featured: true, tags: ["redis", "kafka", "serverless"], description: { en: "Serverless Redis, Kafka and workflow tools with usage-based free tiers.", es: "Redis, Kafka y workflows serverless con capas gratuitas por uso." } },
  { name: "CockroachDB", url: "https://www.cockroachlabs.com", faviconFile: "cockroachlabs.com.webp", category: "data", tags: ["sql", "distributed", "cloud"], description: { en: "Distributed SQL built for resilient, globally available applications.", es: "SQL distribuido para aplicaciones resistentes y disponibles globalmente." } },
  { name: "Aiven", url: "https://aiven.io", category: "data", tags: ["postgres", "valkey", "kafka"], description: { en: "Managed open-source data services with free plans for selected products.", es: "Servicios de datos open source gestionados con planes gratuitos seleccionados." } },

  // AI
  { name: "Braintrust", url: "https://www.braintrustdata.com", category: "ai", tags: ["evals", "prompts", "data"], description: { en: "Evaluate AI applications, compare prompts and manage test datasets.", es: "Evalúa aplicaciones de IA, compara prompts y gestiona datasets de prueba." } },
  { name: "Langfuse", url: "https://langfuse.com", category: "ai", tags: ["observability", "evals", "llm"], description: { en: "Open-source tracing, prompt management and evaluation for LLM products.", es: "Trazas, gestión de prompts y evaluación open source para productos con LLM." } },
  { name: "Hugging Face", url: "https://huggingface.co", category: "ai", featured: true, tags: ["models", "datasets", "spaces"], description: { en: "Discover models and datasets, run demos, and publish ML applications.", es: "Descubre modelos y datasets, ejecuta demos y publica aplicaciones de ML." } },
  { name: "Google AI Studio", url: "https://aistudio.google.com", faviconFile: "aistudio.google.com.svg", category: "ai", featured: true, tags: ["gemini", "api", "playground"], description: { en: "Prototype with Gemini models in a browser playground and generate API keys for development.", es: "Prueba modelos Gemini en un playground web y genera claves API para desarrollo." } },
  { name: "NVIDIA NIM", url: "https://build.nvidia.com/models", faviconFile: "https://build.nvidia.com/favicon.ico", category: "ai", featured: true, tags: ["models", "api", "inference"], description: { en: "Prototype with hosted APIs for a rotating catalog of leading AI models and NVIDIA NIM microservices.", es: "Prueba mediante API un catálogo cambiante de modelos de IA y microservicios NVIDIA NIM." } },
  { name: "Cerebras", url: "https://cloud.cerebras.ai", faviconFile: "cloud.cerebras.ai.webp", category: "ai", tags: ["inference", "api", "low latency"], description: { en: "Run open AI models through an OpenAI-compatible API optimized for very fast inference.", es: "Ejecuta modelos abiertos mediante una API compatible con OpenAI optimizada para inferencia muy rápida." } },
  { name: "Groq", url: "https://console.groq.com", faviconFile: "console.groq.com.webp", category: "ai", featured: true, tags: ["inference", "api", "low latency"], description: { en: "Build with fast hosted inference for open models through an OpenAI-compatible API.", es: "Desarrolla con inferencia rápida de modelos abiertos mediante una API compatible con OpenAI." } },
  { name: "Mistral AI", url: "https://console.mistral.ai", faviconFile: "console.mistral.ai.webp", category: "ai", tags: ["models", "api", "europe"], description: { en: "Access Mistral's language, code, embedding and multimodal models through its developer API.", es: "Accede a los modelos de lenguaje, código, embeddings y multimodales de Mistral mediante su API." } },
  { name: "NotebookLM", url: "https://notebooklm.google", faviconFile: "notebooklm.google.webp", category: "ai", tags: ["research", "sources", "gemini"], description: { en: "Research and reason across documents, websites, audio and other sources with grounded Gemini answers.", es: "Investiga y razona sobre documentos, webs, audio y otras fuentes con respuestas de Gemini basadas en tus materiales." } },
  { name: "Cloudflare Workers AI", url: "https://developers.cloudflare.com/workers-ai/", faviconFile: "cloudflare.com.webp", category: "ai", tags: ["serverless", "edge", "models"], description: { en: "Run serverless open-source AI models on Cloudflare's global GPU network.", es: "Ejecuta modelos de IA open source de forma serverless en la red global de GPU de Cloudflare." } },
  { name: "Freebuff", url: "https://freebuff.com/", faviconFile: "freebuff.com.svg", category: "ai", featured: true, tags: ["coding agent", "cli", "app builder"], description: { en: "A free, ad-supported coding agent available in the terminal, browser and cloud workspaces.", es: "Agente de programación gratuito financiado con anuncios, disponible en terminal, navegador y workspaces cloud." } },
  { name: "OpenRouter", url: "https://openrouter.ai/models?q=free", faviconFile: "openrouter.ai.webp", category: "ai", tags: ["llm", "gateway", "models"], description: { en: "One API for many language models, including a rotating selection of free models.", es: "Una API para muchos LLM, incluida una selección cambiante de modelos gratis." } },
  { name: "Keywords AI", url: "https://keywordsai.co", category: "ai", tags: ["gateway", "monitoring", "llm"], description: { en: "Call and monitor many language models through one consistent interface.", es: "Usa y monitoriza muchos modelos de lenguaje desde una interfaz común." } },
  { name: "Pollinations.AI", url: "https://pollinations.ai", category: "ai", tags: ["images", "api", "open source"], description: { en: "Generate AI images through a free API without sign-up or API keys.", es: "Genera imágenes con IA mediante una API gratis sin registro ni claves." } },
  { name: "Portkey", url: "https://portkey.ai", category: "ai", tags: ["gateway", "observability", "llm"], description: { en: "An AI gateway and control plane with logging, routing and guardrails.", es: "Gateway y panel de control de IA con logs, routing y guardrails." } },
  { name: "Comet Opik", url: "https://www.comet.com/site/products/opik", category: "ai", tags: ["evals", "tracing", "open source"], description: { en: "Trace, evaluate and test LLM applications throughout development.", es: "Traza, evalúa y prueba aplicaciones con LLM durante su desarrollo." } },

  // Auth
  { name: "Clerk", url: "https://clerk.com", category: "auth", featured: true, tags: ["auth", "components", "organizations"], description: { en: "Authentication and user management with polished prebuilt components.", es: "Autenticación y gestión de usuarios con componentes listos y cuidados." } },
  { name: "Auth0", url: "https://auth0.com", category: "auth", tags: ["sso", "oauth", "identity"], description: { en: "Hosted identity with social login, SSO and extensible authentication flows.", es: "Identidad alojada con login social, SSO y flujos de auth extensibles." } },
  { name: "WorkOS", url: "https://workos.com", category: "auth", tags: ["auth", "enterprise", "sso"], description: { en: "User management plus enterprise features such as SSO, SCIM and audit logs.", es: "Gestión de usuarios y funciones enterprise como SSO, SCIM y logs de auditoría." } },
  { name: "Kinde", url: "https://kinde.com", category: "auth", tags: ["auth", "billing", "organizations"], description: { en: "Straightforward authentication, organizations and feature access for SaaS apps.", es: "Autenticación, organizaciones y acceso a funciones para aplicaciones SaaS." } },
  { name: "Stytch", url: "https://stytch.com", category: "auth", tags: ["passwordless", "fraud", "b2b"], description: { en: "APIs and SDKs for authentication, B2B identity and fraud prevention.", es: "APIs y SDKs para autenticación, identidad B2B y prevención de fraude." } },
  { name: "Descope", url: "https://www.descope.com", category: "auth", tags: ["no-code", "auth", "flows"], description: { en: "Visual authentication flows backed by APIs and SDKs for custom experiences.", es: "Flujos visuales de autenticación con APIs y SDKs para experiencias propias." } },
  { name: "Logto", url: "https://logto.io", category: "auth", tags: ["identity", "auth", "open source"], description: { en: "Authentication and authorization infrastructure for consumer and business apps.", es: "Infraestructura de autenticación y autorización para aplicaciones B2C y B2B." } },

  // Email & forms
  { name: "Resend", url: "https://resend.com", category: "email", featured: true, tags: ["transactional", "email", "api"], description: { en: "A modern transactional email API with excellent React and developer tooling.", es: "API moderna de email transaccional con gran integración con React." } },
  { name: "Brevo", url: "https://www.brevo.com", category: "email", tags: ["email", "marketing", "smtp"], description: { en: "Transactional email, campaigns and contact management in one platform.", es: "Email transaccional, campañas y gestión de contactos en una plataforma." } },
  { name: "Mailjet", url: "https://www.mailjet.com", category: "email", tags: ["email", "smtp", "templates"], description: { en: "Send transactional and marketing email with APIs, SMTP and templates.", es: "Envía email transaccional y marketing con APIs, SMTP y plantillas." } },
  { name: "Mailtrap", url: "https://mailtrap.io", category: "email", tags: ["testing", "email", "sandbox"], description: { en: "Test email safely in sandboxes and send transactional messages in production.", es: "Prueba emails en sandboxes y envía mensajes transaccionales en producción." } },
  { name: "Formspree", url: "https://formspree.io", category: "email", tags: ["forms", "static", "email"], description: { en: "Add a reliable form backend to any site without writing server code.", es: "Añade un backend fiable para formularios sin escribir código de servidor." } },
  { name: "Tally", url: "https://tally.so", category: "email", tags: ["forms", "no-code", "surveys"], description: { en: "Create flexible forms and surveys with a generous free plan.", es: "Crea formularios y encuestas flexibles con un plan gratuito generoso." } },
  { name: "Web3Forms", url: "https://web3forms.com", category: "email", tags: ["forms", "api", "static"], description: { en: "Receive static-site form submissions directly in your inbox through an API.", es: "Recibe formularios de sitios estáticos en tu email mediante una API." } },

  // Observability
  { name: "Sentry", url: "https://sentry.io", category: "observability", featured: true, tags: ["errors", "tracing", "replay"], description: { en: "Track errors, performance traces and user sessions across your stack.", es: "Monitoriza errores, trazas de rendimiento y sesiones en todo tu stack." } },
  { name: "Better Stack", url: "https://betterstack.com", category: "observability", tags: ["uptime", "logs", "status"], description: { en: "Uptime checks, logs, incident response and status pages in one place.", es: "Uptime, logs, respuesta a incidentes y páginas de estado en un solo lugar." } },
  { name: "Grafana Cloud", url: "https://grafana.com/products/cloud", category: "observability", tags: ["metrics", "logs", "traces"], description: { en: "Hosted dashboards, metrics, logs, traces and application observability.", es: "Dashboards, métricas, logs, trazas y observabilidad alojados." } },
  { name: "UptimeRobot", url: "https://uptimerobot.com", category: "observability", featured: true, tags: ["uptime", "alerts", "status"], description: { en: "Simple uptime monitoring with alerting and public status pages.", es: "Monitorización sencilla de uptime con alertas y páginas de estado." } },
  { name: "Uptime.com", url: "https://uptime.com", faviconFile: "uptime.com.webp", category: "observability", tags: ["uptime", "synthetic", "alerts"], description: { en: "Website, API and real-user monitoring with alerts and incident workflows.", es: "Monitorización de webs, APIs y usuarios reales con alertas y gestión de incidentes." } },
  { name: "Checkly", url: "https://www.checklyhq.com", category: "observability", tags: ["playwright", "synthetic", "api"], description: { en: "Code-first synthetic monitoring for web apps and APIs using Playwright.", es: "Monitorización sintética como código para webs y APIs con Playwright." } },
  { name: "healthchecks.io", url: "https://healthchecks.io", category: "observability", tags: ["cron", "alerts", "jobs"], description: { en: "Monitor cron jobs and background tasks with simple heartbeat URLs.", es: "Monitoriza tareas cron y procesos en background con URLs heartbeat." } },
  { name: "New Relic", url: "https://newrelic.com", category: "observability", tags: ["apm", "logs", "infra"], description: { en: "Full-stack application performance and infrastructure monitoring.", es: "Monitorización full-stack del rendimiento e infraestructura." } },
  { name: "Logtail", url: "https://betterstack.com/logs", category: "observability", tags: ["logs", "sql", "alerts"], description: { en: "Centralize structured logs and query them quickly with SQL-like syntax.", es: "Centraliza logs estructurados y consúltalos con una sintaxis tipo SQL." } },

  // CI/CD
  { name: "GitHub Actions", url: "https://github.com/features/actions", category: "ci", featured: true, tags: ["ci", "automation", "github"], description: { en: "Automate builds, tests, releases and workflows next to your code.", es: "Automatiza builds, tests, releases y workflows junto a tu código." } },
  { name: "GitLab CI/CD", url: "https://docs.gitlab.com/ci", category: "ci", tags: ["ci", "gitlab", "pipelines"], description: { en: "Integrated pipelines, runners and environments for GitLab projects.", es: "Pipelines, runners y entornos integrados para proyectos de GitLab." } },
  { name: "CircleCI", url: "https://circleci.com", category: "ci", tags: ["ci", "testing", "deploy"], description: { en: "Flexible hosted pipelines with multiple executors and parallel jobs.", es: "Pipelines alojados flexibles con varios ejecutores y trabajos paralelos." } },
  { name: "Buildkite", url: "https://buildkite.com", category: "ci", tags: ["ci", "agents", "pipelines"], description: { en: "Flexible pipelines with hosted orchestration and your own build agents.", es: "Pipelines flexibles con orquestación alojada y tus propios agentes." } },
  { name: "Codecov", url: "https://about.codecov.io", category: "ci", tags: ["coverage", "testing", "reports"], description: { en: "Turn code coverage uploads into pull-request checks and visual reports.", es: "Convierte la cobertura en checks de pull request e informes visuales." } },
  { name: "SonarCloud", url: "https://sonarcloud.io", category: "ci", tags: ["quality", "static analysis", "code"], description: { en: "Cloud static analysis for code quality, maintainability and security.", es: "Análisis estático cloud de calidad, mantenibilidad y seguridad." } },
  { name: "Dependabot", url: "https://dependabot.com", category: "ci", tags: ["dependencies", "automation", "security"], description: { en: "Automated dependency updates and vulnerability alerts inside GitHub.", es: "Actualizaciones de dependencias y alertas de vulnerabilidades en GitHub." } },
  { name: "CodeRabbit", url: "https://www.coderabbit.ai", faviconFile: "coderabbit.ai.webp", category: "ci", featured: true, tags: ["code review", "ai", "pull requests"], description: { en: "AI code reviews for pull requests, IDEs and the command line, with free access for open-source projects.", es: "Revisiones de código con IA para pull requests, IDE y terminal, con acceso gratis para proyectos open source." } },
  { name: "Jules", url: "https://jules.google/", faviconFile: "jules.google.webp", category: "ci", tags: ["coding agent", "github", "gemini"], description: { en: "An asynchronous coding agent that works on real tasks in GitHub repositories and prepares changes for review.", es: "Agente de programación asíncrono que resuelve tareas reales en repositorios de GitHub y prepara los cambios para revisarlos." } },

  // Analytics
  { name: "PostHog", url: "https://posthog.com", category: "analytics", tags: ["product", "replay", "experiments"], description: { en: "Product analytics, session replay, feature flags and experiments together.", es: "Analítica de producto, replay, feature flags y experimentos en un sitio." } },
  { name: "Mixpanel", url: "https://mixpanel.com", category: "analytics", tags: ["product", "funnels", "retention"], description: { en: "Understand product usage through events, funnels, cohorts and retention.", es: "Entiende el uso con eventos, funnels, cohortes y retención." } },
  { name: "Amplitude", url: "https://amplitude.com", category: "analytics", tags: ["product", "journeys", "experiments"], description: { en: "Digital analytics for user journeys, behavior and product experiments.", es: "Analítica digital para journeys, comportamiento y experimentos." } },
  { name: "Google Analytics", url: "https://analytics.google.com", category: "analytics", tags: ["web", "traffic", "google"], description: { en: "Widely supported web and app traffic analytics from Google.", es: "Analítica de tráfico web y apps de Google con gran soporte." } },
  { name: "Umami", url: "https://umami.is", category: "analytics", featured: true, tags: ["privacy", "web", "simple"], description: { en: "Clean, privacy-minded website analytics with straightforward reports.", es: "Analítica web limpia y centrada en privacidad con informes sencillos." } },
  { name: "Ahrefs Web Analytics", url: "https://ahrefs.com/web-analytics", category: "analytics", featured: true, tags: ["privacy", "web", "cookie-free"], description: { en: "Simple, cookie-free website analytics with AI traffic, funnels and SEO context from Ahrefs.", es: "Analítica web simple y sin cookies, con tráfico de IA, funnels y contexto SEO de Ahrefs." } },
  { name: "Cloudflare Web Analytics", url: "https://www.cloudflare.com/web-analytics/", faviconFile: "cloudflare.com.webp", category: "analytics", tags: ["privacy", "web", "free"], description: { en: "Privacy-first web analytics from Cloudflare: no cookies, no personal data, free for any site.", es: "Analítica web privacy-first de Cloudflare: sin cookies, sin datos personales y gratis para cualquier web." } },
  { name: "Microsoft Clarity", url: "https://clarity.microsoft.com", category: "analytics", tags: ["heatmaps", "replay", "web"], description: { en: "Free heatmaps and session recordings for understanding website behavior.", es: "Mapas de calor y grabaciones gratis para entender el comportamiento web." } },
  { name: "Axiom", url: "https://axiom.co", category: "analytics", tags: ["events", "logs", "datasets"], description: { en: "Store and explore event data and logs with fast queries and dashboards.", es: "Almacena y explora eventos y logs con consultas rápidas y dashboards." } },

  // APIs
  { name: "Pipedream", url: "https://pipedream.com", category: "api", tags: ["automation", "workflows", "api"], description: { en: "Connect APIs and run event-driven workflows with code when you need it.", es: "Conecta APIs y ejecuta workflows por eventos usando código cuando haga falta." } },
  { name: "Beeceptor", url: "https://beeceptor.com", category: "api", tags: ["mock", "http", "debug"], description: { en: "Create instant mock endpoints and inspect, transform or proxy requests.", es: "Crea endpoints mock e inspecciona, transforma o redirige peticiones." } },
  { name: "MockAPI", url: "https://mockapi.io", category: "api", tags: ["mock", "rest", "prototype"], description: { en: "Generate REST endpoints and realistic sample data for prototypes.", es: "Genera endpoints REST y datos realistas para prototipos." } },
  { name: "Abstract API", url: "https://www.abstractapi.com", category: "api", tags: ["validation", "geolocation", "utilities"], description: { en: "A practical API suite for IP, email, phone and other validation tasks.", es: "Suite de APIs para IP, email, teléfono y otras validaciones habituales." } },
  { name: "IPinfo", url: "https://ipinfo.io", category: "api", tags: ["ip", "geolocation", "network"], description: { en: "IP address data for geolocation, networks, privacy and security use cases.", es: "Datos de IP para geolocalización, redes, privacidad y seguridad." } },
  { name: "JSONPlaceholder", url: "https://jsonplaceholder.typicode.com", category: "api", tags: ["fake api", "rest", "testing"], description: { en: "A dependable fake REST API for examples, tests and quick prototypes.", es: "Una API REST falsa y fiable para ejemplos, pruebas y prototipos." } },
  { name: "Open-Meteo", url: "https://open-meteo.com", category: "api", tags: ["weather", "forecast", "open data"], description: { en: "Global weather forecasts and historical data through a free JSON API with no API key.", es: "Pronósticos globales e históricos del tiempo mediante una API JSON gratis sin API key." } },
  { name: "OpenGraph.to", url: "https://www.opengraph.to", faviconFile: "opengraph.to.svg", category: "api", tags: ["open graph", "seo", "social"], description: { en: "Scrape Open Graph, Twitter Card and SEO tags for any public URL: title, description, image, score, issues and suggested meta tags as JSON.", es: "Extrae tags Open Graph, Twitter Card y SEO de cualquier URL pública: título, descripción, imagen, puntuación, problemas y meta tags sugeridos en JSON." } },
  { name: "Hoppscotch", url: "https://hoppscotch.io", category: "api", tags: ["api client", "graphql", "realtime"], description: { en: "A fast web API client for REST, GraphQL and realtime protocols.", es: "Cliente web rápido para APIs REST, GraphQL y protocolos realtime." } },

  // Design
  { name: "Figma", url: "https://www.figma.com", category: "design", featured: true, tags: ["ui", "prototype", "collaboration"], description: { en: "Collaborative interface design, prototyping and developer handoff.", es: "Diseño de interfaces, prototipado y handoff colaborativo." } },
  { name: "Canva", url: "https://canva.com", category: "design", tags: ["graphics", "templates", "visual"], description: { en: "Create visual assets quickly with templates and browser-based editing.", es: "Crea recursos visuales rápidamente con plantillas y edición en el navegador." } },
  { name: "Excalidraw", url: "https://excalidraw.com", category: "design", tags: ["whiteboard", "diagrams", "sketch"], description: { en: "A delightful hand-drawn canvas for diagrams and collaborative sketches.", es: "Un lienzo estilo boceto para diagramas y trabajo colaborativo." } },
  { name: "Penpot", url: "https://penpot.app", faviconFile: "https://penpot.app/favicon.ico", category: "design", tags: ["ui", "prototype", "open source"], description: { en: "Open-source interface design and prototyping with real-time collaboration and developer handoff.", es: "Diseño de interfaces y prototipado open source con colaboración en tiempo real y handoff para desarrollo." } },
  { name: "tldraw", url: "https://www.tldraw.com", faviconFile: "https://www.tldraw.com/favicon.ico", category: "design", tags: ["whiteboard", "infinite canvas", "sdk"], description: { en: "A fast collaborative infinite canvas plus a React SDK for building custom canvas experiences.", es: "Un lienzo infinito colaborativo y rápido, más un SDK de React para crear experiencias de canvas." } },
  { name: "Fontshare", url: "https://www.fontshare.com", category: "design", tags: ["fonts", "typography", "assets"], description: { en: "A growing collection of professional fonts free for personal and commercial use.", es: "Colección de fuentes profesionales gratis para uso personal y comercial." } },
  { name: "Stitch", url: "https://stitch.withgoogle.com/", faviconFile: "stitch.withgoogle.com.webp", category: "design", tags: ["ai", "ui", "frontend"], description: { en: "Turn text prompts, images and wireframes into UI designs, frontend code and editable Figma work.", es: "Convierte prompts, imágenes y wireframes en diseños UI, código frontend y trabajo editable en Figma." } },

  // Security
  { name: "GitGuardian", url: "https://www.gitguardian.com", category: "security", tags: ["secrets", "git", "scanning"], description: { en: "Detect exposed secrets in source code and guide their remediation.", es: "Detecta secretos expuestos en el código y guía su corrección." } },
  { name: "Socket", url: "https://socket.dev", category: "security", tags: ["supply chain", "npm", "dependencies"], description: { en: "Protect JavaScript supply chains by analyzing dependency behavior.", es: "Protege la cadena de suministro JavaScript analizando dependencias." } },
  { name: "Mozilla Observatory", url: "https://observatory.mozilla.org", category: "security", tags: ["headers", "audit", "web"], description: { en: "Scan a website for security headers and common web hardening practices.", es: "Escanea headers y prácticas habituales de protección web." } },
  { name: "Have I Been Pwned", url: "https://haveibeenpwned.com/API/v3", category: "security", tags: ["breaches", "api", "passwords"], description: { en: "Check accounts and domains against known data breaches through an API.", es: "Comprueba cuentas y dominios frente a filtraciones conocidas mediante API." } },

  // Collaboration
  { name: "Linear", url: "https://linear.app", category: "collaboration", featured: true, tags: ["issues", "roadmap", "product"], description: { en: "Fast issue tracking, cycles and product roadmaps for software teams.", es: "Issues, ciclos y roadmaps rápidos para equipos de software." } },
  { name: "Notion", url: "https://www.notion.so", category: "collaboration", tags: ["docs", "wiki", "projects"], description: { en: "Connected docs, wikis, databases and lightweight project management.", es: "Documentos, wikis, bases de datos y gestión ligera de proyectos." } },
  { name: "Trello", url: "https://trello.com", category: "collaboration", tags: ["kanban", "tasks", "boards"], description: { en: "Visual Kanban boards for organizing projects and team workflows.", es: "Tableros Kanban visuales para organizar proyectos y workflows." } },
  { name: "Miro", url: "https://miro.com", category: "collaboration", tags: ["whiteboard", "workshops", "remote"], description: { en: "A collaborative whiteboard for workshops, diagrams and remote planning.", es: "Pizarra colaborativa para workshops, diagramas y planificación remota." } },
  { name: "ClickUp", url: "https://clickup.com", category: "collaboration", tags: ["tasks", "docs", "projects"], description: { en: "Tasks, docs, goals and project views in a highly configurable workspace.", es: "Tareas, documentos, objetivos y proyectos en un espacio configurable." } },
  { name: "Discord", url: "https://discord.com", category: "collaboration", tags: ["community", "chat", "voice"], description: { en: "Persistent text, voice and video spaces for developer communities.", es: "Espacios persistentes de texto, voz y vídeo para comunidades." } },
  { name: "Slack", url: "https://slack.com", category: "collaboration", tags: ["chat", "integrations", "teams"], description: { en: "Team messaging with channels, huddles and a large integration ecosystem.", es: "Mensajería de equipo con canales, huddles y muchas integraciones." } },

  // CMS
  { name: "Sanity", url: "https://www.sanity.io", category: "cms", tags: ["headless", "content lake", "studio"], description: { en: "A customizable content workspace backed by a real-time content platform.", es: "Workspace de contenido personalizable sobre una plataforma realtime." } },
  { name: "Contentful", url: "https://www.contentful.com", category: "cms", tags: ["headless", "api", "content"], description: { en: "API-first content infrastructure with a mature editor and ecosystem.", es: "Infraestructura de contenido API-first con editor y ecosistema maduros." } },
  { name: "Storyblok", url: "https://www.storyblok.com", category: "cms", tags: ["headless", "visual editor", "components"], description: { en: "Headless CMS with a visual editor and component-based content model.", es: "CMS headless con editor visual y contenido basado en componentes." } },
  { name: "Hygraph", url: "https://hygraph.com", category: "cms", tags: ["graphql", "headless", "api"], description: { en: "GraphQL-native content platform for structured, multi-source content.", es: "Plataforma de contenido GraphQL para datos estructurados y múltiples fuentes." } },
  { name: "DatoCMS", url: "https://www.datocms.com", category: "cms", tags: ["graphql", "headless", "images"], description: { en: "Headless CMS with GraphQL delivery and a built-in image pipeline.", es: "CMS headless con entrega GraphQL y pipeline de imágenes integrado." } },
  { name: "Prismic", url: "https://prismic.io", category: "cms", tags: ["headless", "slices", "visual"], description: { en: "Page-building CMS with reusable slices and visual previews for editors.", es: "CMS para construir páginas con slices reutilizables y previews visuales." } },

  // Storage & media
  { name: "Cloudinary", url: "https://cloudinary.com", category: "media", featured: true, tags: ["images", "video", "cdn"], description: { en: "Upload, transform, optimize and deliver images and video through a CDN.", es: "Sube, transforma, optimiza y entrega imágenes y vídeo mediante CDN." } },
  { name: "Uploadcare", url: "https://uploadcare.com", category: "media", tags: ["uploads", "images", "cdn"], description: { en: "File uploads, image processing and adaptive delivery for web apps.", es: "Subida de archivos, procesado de imágenes y entrega adaptativa." } },
  { name: "ImageKit", url: "https://imagekit.io", category: "media", tags: ["images", "optimization", "cdn"], description: { en: "Real-time image and video optimization, transformation and delivery.", es: "Optimización, transformación y entrega de imagen y vídeo en tiempo real." } },
]

export const slugifyResourceName = (name: string) => name
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "")

export const getResourceFaviconUrl = (resource: Pick<Resource, "url" | "faviconFile">) => {
  if (resource.faviconFile?.startsWith("http")) return resource.faviconFile
  const filename = resource.faviconFile
    ?? `${new URL(resource.url).hostname.replace(/^www\./, "").replace(/[^a-z0-9.-]/gi, "-")}.webp`
  return `/favicons/${filename}`
}

export const resources: Resource[] = resourceCatalog.map((resource) => {
  const pricingUrl = pricingUrls[resource.name]
  if (!pricingUrl) throw new Error(`Missing pricing URL for ${resource.name}`)

  return {
    ...resource,
    slug: slugifyResourceName(resource.name),
    pricingUrl,
    freeTier: freeTiers[resource.name],
    accessRequirement: accessRequirements[resource.name] ?? "no-card",
  }
})
