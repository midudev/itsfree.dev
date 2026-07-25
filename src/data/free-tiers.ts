export interface LocalizedFreeTier {
  en: string
  es: string
}

export type AccessRequirement =
  | "no-card"
  | "no-signup"
  | "card-for-full-limits"
  | "trial-only"

export const accessRequirements: Partial<Record<string, AccessRequirement>> = {
  "Deno Deploy": "card-for-full-limits",
  "Pollinations.AI": "no-signup",
  "Uptime.com": "trial-only",
  "JSONPlaceholder": "no-signup",
  "Open-Meteo": "no-signup",
  "OpenGraph.to": "no-signup",
  "Excalidraw": "no-signup",
  "tldraw": "no-signup",
  "Fontshare": "no-signup",
  "Mozilla Observatory": "no-signup",
  "Have I Been Pwned": "no-signup",
  "Dokploy": "no-signup",
}

/**
 * Short, card-sized summaries of the most useful permanent free allowance.
 * Limits change frequently, so keep these in one place and review them as a set.
 */
export const freeTiers: Record<string, LocalizedFreeTier> = {
  "Vercel": { en: "Hobby: 1M edge requests, 1M function calls and 100 deployments/day for personal, non-commercial projects.", es: "Hobby: 1 M de peticiones edge, 1 M de invocaciones y 100 deploys/día para proyectos personales no comerciales." },
  "Cloudflare": { en: "Workers Free: 100k requests/day; Pages includes 500 builds/month, unlimited sites and static bandwidth.", es: "Workers Free: 100.000 peticiones/día; Pages incluye 500 builds/mes, sitios y ancho de banda estático ilimitados." },
  "Netlify": { en: "Free forever: 300 usage credits/month, one concurrent build, custom domains, SSL and deploy previews.", es: "Gratis para siempre: 300 créditos de uso/mes, un build simultáneo, dominios propios, SSL y previews." },
  "Cloud 66": { en: "Free: 1 deployment server, 1 static site, 5 deploys/day and 50 build minutes; cloud costs are separate.", es: "Gratis: 1 servidor, 1 sitio estático, 5 deploys/día y 50 minutos de build; el cloud se paga aparte." },
  "deployment.io": { en: "Free self-serve plan: 10 agent jobs/month for one user, running inside your own cloud.", es: "Plan self-service gratis: 10 tareas de agente/mes para un usuario, ejecutadas en tu propio cloud." },
  "Render": { en: "750 instance hours/month for free web services; static sites are free. Services sleep after 15 idle minutes.", es: "750 horas de instancia/mes para servicios web; sitios estáticos gratis. Se duermen tras 15 min sin tráfico." },
  "Appish": { en: "Free demo hosting for temporary Docker containers; slots are short-lived and intended for previews, not production.", es: "Hosting gratis para demos con contenedores Docker temporales; los slots caducan y no son para producción." },
  "Deno Deploy": { en: "Free organization with monthly request, bandwidth and compute allowances; apps pause when a limit is reached.", es: "Organización gratis con cuotas mensuales de peticiones, tráfico y cómputo; las apps se pausan al agotarlas." },
  "GitHub": { en: "Unlimited public/private repositories; Pages and 2,000 Actions minutes/month for private repositories.", es: "Repositorios públicos y privados ilimitados; Pages y 2.000 min/mes de Actions para repos privados." },

  "Supabase": { en: "Free: 2 projects, 500 MB database, 1 GB storage, 5 GB egress and 50k monthly active users.", es: "Gratis: 2 proyectos, 500 MB de base de datos, 1 GB de storage, 5 GB de salida y 50.000 usuarios activos/mes." },
  "InsForge": { en: "Free developer plan with a Postgres database, auth, storage, functions and limited model credits for prototypes.", es: "Plan developer gratis con Postgres, auth, storage, funciones y créditos de modelos limitados para prototipos." },
  "Neon": { en: "Free: 100 projects, 100 CU-hours and 0.5 GB storage per project, with scale-to-zero after 5 idle minutes.", es: "Gratis: 100 proyectos, 100 horas de cómputo y 0,5 GB por proyecto, con scale-to-zero tras 5 min inactivo." },
  "Turso": { en: "Free: 100 databases, 5 GB total storage, 500M row reads and 10M row writes/month.", es: "Gratis: 100 bases de datos, 5 GB totales, 500 M de lecturas y 10 M de escrituras de filas/mes." },
  "MongoDB Atlas": { en: "M0 cluster: 512 MB storage and shared RAM, free forever with one cluster per project.", es: "Clúster M0: 512 MB de storage y RAM compartida, gratis para siempre con uno por proyecto." },
  "Upstash": { en: "Redis Free: 256 MB and 500k commands/month; QStash includes 1,000 messages/day.", es: "Redis Free: 256 MB y 500.000 comandos/mes; QStash incluye 1.000 mensajes/día." },
  "CockroachDB": { en: "Basic: up to 10 GiB storage and 50M request units/month at no cost, across one organization.", es: "Basic: hasta 10 GiB y 50 M de request units/mes sin coste dentro de una organización." },
  "Aiven": { en: "Free plans for PostgreSQL, MySQL, Valkey and Kafka: one small node with limited storage and no SLA.", es: "Planes gratis para PostgreSQL, MySQL, Valkey y Kafka: un nodo pequeño, storage limitado y sin SLA." },

  "Braintrust": { en: "Free: 1 GB of logs/month, 10k scores and experiments, prompt playground and unlimited users.", es: "Gratis: 1 GB de logs/mes, 10.000 scores y experimentos, playground de prompts y usuarios ilimitados." },
  "Langfuse": { en: "Hobby: 50k usage units/month with 30-day retention; self-hosting the open-source edition is also free.", es: "Hobby: 50.000 unidades de uso/mes y 30 días de retención; la edición open source self-hosted también es gratis." },
  "Hugging Face": { en: "Free account for public models, datasets and Spaces; includes limited shared CPU and monthly inference credits.", es: "Cuenta gratis para modelos, datasets y Spaces públicos; incluye CPU compartida y créditos de inferencia limitados." },
  "Google AI Studio": { en: "AI Studio is free to use; selected Gemini API models include a free tier with model-specific rate limits.", es: "AI Studio es gratis; algunos modelos de la API de Gemini incluyen una cuota gratuita con límites específicos." },
  "NVIDIA NIM": { en: "Free hosted NIM API endpoints for prototyping through the NVIDIA Developer Program; available models and limits can change.", es: "Endpoints NIM alojados gratis para prototipado mediante NVIDIA Developer Program; los modelos y límites pueden cambiar." },
  "Cerebras": { en: "Free inference tier with access to all Cerebras-powered models, lower rate limits and community support.", es: "Capa de inferencia gratis con acceso a todos los modelos servidos por Cerebras, límites reducidos y soporte comunitario." },
  "Groq": { en: "Free API plan with model-specific request and token limits; exact quotas are published in the Groq console docs.", es: "Plan API gratis con límites de peticiones y tokens según el modelo; las cuotas se publican en la documentación de Groq." },
  "Mistral AI": { en: "Free API mode for experimentation with lower usage limits; current quotas are shown in the account usage page.", es: "Modo API gratis para experimentación con límites reducidos; las cuotas actuales se muestran en la cuenta." },
  "NotebookLM": { en: "Free: 100 notebooks with up to 50 sources each, plus 50 chat queries and 3 audio generations/day.", es: "Gratis: 100 cuadernos con hasta 50 fuentes cada uno, más 50 consultas de chat y 3 generaciones de audio/día." },
  "Cloudflare Workers AI": { en: "10,000 Neurons of AI inference per day at no charge across the available model catalog.", es: "10.000 Neurons diarios de inferencia sin coste para usar el catálogo de modelos disponible." },
  "Freebuff": { en: "Free CLI, web app builder, cloud workspace and AI chat with no subscription, API key or credit card; supported by text ads.", es: "CLI, creador web, workspace cloud y chat de IA gratis, sin suscripción, API key ni tarjeta; financiado con anuncios de texto." },
  "OpenRouter": { en: "Free models allow up to 50 requests/day, or 1,000/day after purchasing at least $10 in credits.", es: "Los modelos gratuitos permiten 50 peticiones/día, o 1.000/día tras comprar al menos 10 $ en créditos." },
  "Keywords AI": { en: "Free developer plan with limited monthly logs and evaluations; model-provider inference costs remain separate.", es: "Plan developer gratis con logs y evaluaciones mensuales limitados; la inferencia del proveedor se paga aparte." },
  "Pollinations.AI": { en: "Free image and text generation API with no sign-up or API key; public usage is rate-limited under fair use.", es: "API gratis de imagen y texto sin registro ni API key; el uso público tiene límites de fair use." },
  "Portkey": { en: "Free developer plan: AI gateway, caching, fallbacks and a limited monthly log allowance; inference is separate.", es: "Plan developer gratis: gateway, caché, fallbacks y una cuota mensual de logs; la inferencia se paga aparte." },
  "Comet Opik": { en: "Free cloud tier for one developer with limited monthly traces; the open-source self-hosted edition is unlimited.", es: "Cloud gratis para un developer con trazas mensuales limitadas; la edición open source self-hosted es ilimitada." },

  "Clerk": { en: "Hobby: 50k monthly retained users per app, up to 5 dashboard seats and 100 organizations.", es: "Hobby: 50.000 usuarios retenidos al mes por app, hasta 5 miembros y 100 organizaciones." },
  "Auth0": { en: "Free: up to 25k monthly active users, social connections, passwordless login and 5 organizations.", es: "Gratis: hasta 25.000 usuarios activos/mes, conexiones sociales, passwordless y 5 organizaciones." },
  "WorkOS": { en: "AuthKit is free up to 1M monthly active users; enterprise SSO and Directory Sync are free while onboarding.", es: "AuthKit es gratis hasta 1 M de usuarios activos/mes; SSO y Directory Sync son gratis durante el onboarding." },
  "Kinde": { en: "Free: 10,500 monthly active users, 5 organizations and core authentication with no credit card.", es: "Gratis: 10.500 usuarios activos/mes, 5 organizaciones y autenticación base sin tarjeta." },
  "Stytch": { en: "Free: up to 10k monthly active users for consumer auth or 1,000 for B2B auth, with usage caps by method.", es: "Gratis: hasta 10.000 usuarios activos/mes en B2C o 1.000 en B2B, con cuotas según el método." },
  "Descope": { en: "Free: 7,500 monthly active users, unlimited applications and core authentication flows.", es: "Gratis: 7.500 usuarios activos/mes, aplicaciones ilimitadas y flujos de autenticación base." },
  "Logto": { en: "Free cloud plan: 50k monthly active users and core auth; the open-source edition can be self-hosted free.", es: "Cloud gratis: 50.000 usuarios activos/mes y auth base; la edición open source se puede autoalojar gratis." },

  "Resend": { en: "Free: 3,000 emails/month and 100/day, one domain, one webhook endpoint and one-day log retention.", es: "Gratis: 3.000 emails/mes y 100/día, un dominio, un webhook y logs durante un día." },
  "Brevo": { en: "Free: 300 emails/day, unlimited contacts, transactional email and basic campaign tools.", es: "Gratis: 300 emails/día, contactos ilimitados, email transaccional y herramientas básicas de campañas." },
  "Mailjet": { en: "Free: 6,000 emails/month with a 200/day limit, unlimited contacts, APIs, SMTP and one user.", es: "Gratis: 6.000 emails/mes con límite de 200/día, contactos ilimitados, APIs, SMTP y un usuario." },
  "Mailtrap": { en: "Email API Free: 4,000 emails/month with a 150/day limit, one domain and 3-day log retention.", es: "Email API Free: 4.000 emails/mes con límite de 150/día, un dominio y logs durante 3 días." },
  "Formspree": { en: "Free: 50 form submissions/month, unlimited forms and projects, spam filtering and email notifications.", es: "Gratis: 50 envíos de formulario/mes, formularios y proyectos ilimitados, antispam y avisos por email." },
  "Tally": { en: "Free: unlimited forms and submissions with most input types, payments, logic and integrations included.", es: "Gratis: formularios y respuestas ilimitados con casi todos los campos, pagos, lógica e integraciones." },
  "Web3Forms": { en: "Free: 250 form submissions/month, unlimited forms and websites, with no backend or account required.", es: "Gratis: 250 envíos de formulario/mes, formularios y webs ilimitados, sin backend ni cuenta." },

  "Sentry": { en: "Developer: 5k errors, 5M spans, 50 replays and 5 GB logs/month for one user.", es: "Developer: 5.000 errores, 5 M de spans, 50 replays y 5 GB de logs/mes para un usuario." },
  "Better Stack": { en: "Free: 10 monitors, 3-minute checks, 1 status page, 1 GB logs/month and 3-day retention.", es: "Gratis: 10 monitores, checks cada 3 min, 1 página de estado, 1 GB de logs/mes y 3 días de retención." },
  "Grafana Cloud": { en: "Free forever: 10k metric series, 50 GB logs, 50 GB traces and 14-day retention for 3 users.", es: "Gratis para siempre: 10.000 series, 50 GB de logs, 50 GB de trazas y 14 días de retención para 3 usuarios." },
  "UptimeRobot": { en: "Free: 50 monitors with 5-minute checks, 3-month log retention and one basic status page.", es: "Gratis: 50 monitores con checks cada 5 min, logs durante 3 meses y una página de estado básica." },
  "Uptime.com": { en: "No permanent free tier: the platform currently offers a time-limited free trial of its paid monitoring plans.", es: "Sin capa gratis permanente: actualmente ofrece una prueba temporal de sus planes de monitorización de pago." },
  "Checkly": { en: "Free: 10k API checks and 1,500 browser checks/month, 1-minute frequency and 7-day retention.", es: "Gratis: 10.000 checks de API y 1.500 de navegador/mes, frecuencia de 1 min y 7 días de retención." },
  "healthchecks.io": { en: "Hosted free plan: 20 checks for one team member with email, webhook and chat integrations.", es: "Plan alojado gratis: 20 checks para un miembro con integraciones de email, webhooks y chat." },
  "New Relic": { en: "Free: 100 GB data ingest/month, one full-platform user and unlimited basic users.", es: "Gratis: 100 GB de ingesta/mes, un usuario full-platform y usuarios básicos ilimitados." },
  "Logtail": { en: "Better Stack free logs: 1 GB/month with 3-day retention, live tail, SQL queries and alerts.", es: "Logs gratis de Better Stack: 1 GB/mes y 3 días de retención, live tail, consultas SQL y alertas." },

  "GitHub Actions": { en: "Free for public repositories; private repositories include 2,000 minutes and 500 MB artifact storage/month.", es: "Gratis en repos públicos; los privados incluyen 2.000 min y 500 MB de artefactos/mes." },
  "GitLab CI/CD": { en: "Free: 400 compute minutes/month on GitLab-hosted runners; self-managed runners do not consume that quota.", es: "Gratis: 400 minutos de cómputo/mes en runners de GitLab; los runners propios no consumen esa cuota." },
  "CircleCI": { en: "Free: 30k credits/month, up to 5 active users and 80 concurrent jobs on supported resource classes.", es: "Gratis: 30.000 créditos/mes, hasta 5 usuarios activos y 80 jobs simultáneos en recursos compatibles." },
  "Buildkite": { en: "Free: up to 3 users and 5k job minutes/month; jobs run on your own agents and infrastructure.", es: "Gratis: hasta 3 usuarios y 5.000 min de jobs/mes; se ejecutan en tus propios agentes e infraestructura." },
  "Codecov": { en: "Free for open-source projects; private-code Basic plan covers 1 user with unlimited repositories and uploads.", es: "Gratis para open source; el plan Basic privado cubre 1 usuario con repositorios y subidas ilimitados." },
  "SonarCloud": { en: "Free for public repositories with unlimited lines of code; private projects require a paid plan.", es: "Gratis para repositorios públicos con líneas de código ilimitadas; los proyectos privados son de pago." },
  "Dependabot": { en: "Free inside GitHub for dependency alerts, security updates and version-update pull requests.", es: "Gratis dentro de GitHub para alertas, parches de seguridad y pull requests de actualización." },
  "CodeRabbit": { en: "Free: unlimited public and private repositories, PR summaries and limited reviews in IDE/CLI; open source gets Pro+ features.", es: "Gratis: repos públicos y privados ilimitados, resúmenes de PR y revisiones limitadas en IDE/CLI; open source recibe funciones Pro+." },
  "Jules": { en: "Free: 15 coding tasks/day, up to 3 concurrent tasks, powered by Gemini 2.5 Pro.", es: "Gratis: 15 tareas de programación/día, hasta 3 tareas simultáneas y Gemini 2.5 Pro." },

  "PostHog": { en: "Free monthly: 1M analytics events, 5k session recordings, 1M feature-flag requests and 100k exceptions.", es: "Gratis al mes: 1 M de eventos, 5.000 grabaciones, 1 M de peticiones de flags y 100.000 excepciones." },
  "Mixpanel": { en: "Free: up to 1M monthly events with unlimited reports, core product analytics and limited session replay.", es: "Gratis: hasta 1 M de eventos/mes con informes ilimitados, analítica de producto y replay limitado." },
  "Amplitude": { en: "Starter: up to 50k monthly tracked users with core analytics, session replay and feature flags.", es: "Starter: hasta 50.000 usuarios medidos/mes con analítica base, session replay y feature flags." },
  "Google Analytics": { en: "Standard Google Analytics is free for most sites and apps; enterprise-scale Analytics 360 is paid.", es: "Google Analytics estándar es gratis para la mayoría de webs y apps; Analytics 360 enterprise es de pago." },
  "Umami": { en: "Free cloud plan: up to 3 websites, 100k events/month and 6-month retention; self-hosting is unlimited.", es: "Cloud gratis: hasta 3 webs, 100.000 eventos/mes y 6 meses de retención; self-hosted es ilimitado." },
  "Ahrefs Web Analytics": { en: "Free with Ahrefs Free: up to 1M events/month per verified project, unlimited sites, cookie-free tracking; no card required.", es: "Gratis con Ahrefs Free: hasta 1 M de eventos/mes por proyecto verificado, sitios ilimitados y tracking sin cookies; sin tarjeta." },
  "Cloudflare Web Analytics": { en: "Completely free privacy-first analytics for any site: no cookies, no personal data collection and no traffic cap on the free product.", es: "Analítica privacy-first totalmente gratis para cualquier web: sin cookies, sin datos personales y sin tope de tráfico en el producto gratis." },
  "Microsoft Clarity": { en: "Completely free: unlimited projects, heatmaps and session recordings with no traffic cap.", es: "Totalmente gratis: proyectos, mapas de calor y grabaciones ilimitados, sin límite de tráfico." },
  "Axiom": { en: "Free: 500 GB-hours of query time and 25 GB ingest/month, with 30-day retention.", es: "Gratis: 500 GB-horas de consulta y 25 GB de ingesta/mes, con 30 días de retención." },

  "Pipedream": { en: "Free: 100 workflow credits/month, 3 active workflows and unlimited testing in the builder.", es: "Gratis: 100 créditos de workflows/mes, 3 workflows activos y pruebas ilimitadas en el editor." },
  "Beeceptor": { en: "Free: 50 requests/day, 1 mock endpoint and 10 days of request history, with no credit card.", es: "Gratis: 50 peticiones/día, 1 endpoint mock y 10 días de historial, sin tarjeta." },
  "MockAPI": { en: "Free: one project with up to 2 resources and basic fake REST endpoints for prototyping.", es: "Gratis: un proyecto con hasta 2 recursos y endpoints REST falsos básicos para prototipos." },
  "Abstract API": { en: "Free API keys with product-specific monthly quotas; common APIs include limited requests for testing.", es: "API keys gratis con cuotas mensuales según el producto; las APIs comunes incluyen peticiones limitadas para pruebas." },
  "IPinfo": { en: "Free Lite API: unlimited IP geolocation requests for country, continent and ASN data.", es: "API Lite gratis: peticiones de geolocalización IP ilimitadas para país, continente y ASN." },
  "JSONPlaceholder": { en: "Completely free public fake REST API: 6 common resources; writes are simulated and not persisted.", es: "API REST falsa pública y gratis: 6 recursos habituales; las escrituras se simulan y no se guardan." },
  "Open-Meteo": { en: "Open-Access free API with no sign-up or key for non-commercial use: 600 calls/min, 5,000/hour, 10,000/day and 300,000/month.", es: "API Open-Access gratis sin registro ni clave para uso no comercial: 600 llamadas/min, 5.000/hora, 10.000/día y 300.000/mes." },
  "OpenGraph.to": { en: "Free public API with no sign-up or key: 10 requests/hour per IP, JSON responses with a 5-minute cache.", es: "API pública gratis sin registro ni clave: 10 peticiones/hora por IP, respuestas JSON con caché de 5 minutos." },
  "Hoppscotch": { en: "The web client and self-hosted Community Edition are free; cloud collaboration has a free personal workspace.", es: "El cliente web y Community self-hosted son gratis; el cloud incluye un workspace personal gratuito." },

  "Figma": { en: "Starter: unlimited drafts, UI kits and collaborators, with 3 collaborative design files and 3 FigJam files.", es: "Starter: borradores, kits y colaboradores ilimitados, con 3 archivos de diseño y 3 de FigJam compartidos." },
  "Canva": { en: "Free: 250k+ templates, 1M+ stock assets, 5 GB cloud storage and standard design tools.", es: "Gratis: más de 250.000 plantillas, 1 M de recursos, 5 GB de storage y herramientas de diseño estándar." },
  "Excalidraw": { en: "The core whiteboard is free and open source with unlimited local drawings; paid Plus adds cloud collaboration.", es: "La pizarra base es gratis y open source con dibujos locales ilimitados; Plus añade colaboración cloud." },
  "Penpot": { en: "Professional: $0 with up to 8 team members, unlimited viewers and files, 10 GB storage and 7-day version history.", es: "Professional: 0 $ con hasta 8 miembros, viewers y archivos ilimitados, 10 GB y 7 días de historial." },
  "tldraw": { en: "The multiplayer web whiteboard is free; the SDK is free in development and offers a 100-day production trial or hobby license.", es: "La pizarra web multijugador es gratis; el SDK es gratuito en desarrollo y ofrece 100 días de prueba en producción o licencia hobby." },
  "Fontshare": { en: "All fonts are free for personal and commercial use under Fontshare's license; no account is required.", es: "Todas las fuentes son gratis para uso personal y comercial bajo su licencia; no hace falta cuenta." },
  "Stitch": { en: "Free Google Labs access for generating UI from text or images, iterating in chat and exporting to Figma or frontend code; usage limits may apply.", es: "Acceso gratuito de Google Labs para generar UI desde texto o imágenes, iterar por chat y exportar a Figma o código frontend; pueden aplicarse límites de uso." },

  "GitGuardian": { en: "Free: secret scanning for individual developers, up to 25 developers and 100 incidents/month.", es: "Gratis: escaneo de secretos para developers individuales, hasta 25 developers y 100 incidentes/mes." },
  "Socket": { en: "Free for open-source projects; personal GitHub protection and dependency analysis are available at no cost.", es: "Gratis para open source; la protección personal de GitHub y el análisis de dependencias no tienen coste." },
  "Mozilla Observatory": { en: "Completely free public web-security scanner with unlimited on-demand scans and no account required.", es: "Escáner público de seguridad web totalmente gratis, con análisis bajo demanda y sin necesidad de cuenta." },
  "Have I Been Pwned": { en: "Pwned Passwords and basic breach lookups are free; authenticated account and domain API access is paid.", es: "Pwned Passwords y las búsquedas básicas son gratis; la API autenticada de cuentas y dominios es de pago." },

  "Linear": { en: "Free: unlimited members, 2 teams and 250 issues, with Slack/GitHub integrations and API access.", es: "Gratis: miembros ilimitados, 2 equipos y 250 issues, con integraciones de Slack/GitHub y API." },
  "Notion": { en: "Free for individuals with unlimited pages; teams get a limited collaborative block trial and 5 MB uploads.", es: "Gratis para uso individual con páginas ilimitadas; los equipos tienen bloques limitados y subidas de 5 MB." },
  "Trello": { en: "Free: up to 10 boards per workspace, unlimited cards, 10 collaborators and 250 automation runs/month.", es: "Gratis: hasta 10 tableros por workspace, tarjetas ilimitadas, 10 colaboradores y 250 automatizaciones/mes." },
  "Miro": { en: "Free: unlimited team members, 3 editable boards, templates and core integrations.", es: "Gratis: miembros ilimitados, 3 tableros editables, plantillas e integraciones básicas." },
  "ClickUp": { en: "Free Forever: unlimited tasks and members, 100 MB storage, collaborative docs and Kanban boards.", es: "Gratis para siempre: tareas y miembros ilimitados, 100 MB, documentos colaborativos y tableros Kanban." },
  "Discord": { en: "Core text, voice, video, communities and bots are free; upload quality and customization have limits.", es: "Texto, voz, vídeo, comunidades y bots son gratis; las subidas, calidad y personalización tienen límites." },
  "Slack": { en: "Free: 90 days of message history, 10 app integrations and one-to-one huddles for small teams.", es: "Gratis: 90 días de historial, 10 integraciones y huddles uno a uno para equipos pequeños." },

  "Sanity": { en: "Free: 20 user seats, 2 datasets, 10k documents, 100k API requests and 100 GB CDN bandwidth/month.", es: "Gratis: 20 usuarios, 2 datasets, 10.000 documentos, 100.000 peticiones y 100 GB de CDN/mes." },
  "Contentful": { en: "Free: 10 users, 2 roles, 2 locales, 1M API calls and 50 GB CDN bandwidth/month.", es: "Gratis: 10 usuarios, 2 roles, 2 idiomas, 1 M de llamadas API y 50 GB de CDN/mes." },
  "Storyblok": { en: "Free: one space, one user, 100k API requests/month and visual editing for small projects.", es: "Gratis: un espacio, un usuario, 100.000 peticiones API/mes y edición visual para proyectos pequeños." },
  "Hygraph": { en: "Hobby: 3 seats, 2 locales, 100k API calls/month, 1 GB assets and 100 GB asset traffic.", es: "Hobby: 3 usuarios, 2 idiomas, 100.000 llamadas API/mes, 1 GB de assets y 100 GB de tráfico." },
  "DatoCMS": { en: "Free: 3 team members, 2 environments, 300 records, 10 GB bandwidth and 100k API calls/month.", es: "Gratis: 3 miembros, 2 entornos, 300 registros, 10 GB de tráfico y 100.000 llamadas API/mes." },
  "Prismic": { en: "Free: up to 4 users, unlimited documents and locales, 100 GB CDN and 4M API calls/month.", es: "Gratis: hasta 4 usuarios, documentos e idiomas ilimitados, 100 GB de CDN y 4 M de llamadas API/mes." },

  "Cloudinary": { en: "Free: 25 monthly credits for image/video transformations, storage and bandwidth, with 3 users.", es: "Gratis: 25 créditos mensuales para transformaciones, storage y tráfico de imagen/vídeo, con 3 usuarios." },
  "Uploadcare": { en: "Free for personal use: 1,000 operations/month, files up to 500 MB, upload widget and API, basic image transformations, adaptive bitrate streaming, CDN delivery, signed uploads and webhooks.", es: "Gratis para uso personal: 1.000 operaciones/mes, archivos de hasta 500 MB, widget y API de subida, transformaciones básicas de imagen, streaming adaptativo, entrega por CDN, subidas firmadas y webhooks." },
  "ImageKit": { en: "Free forever: 20 GB bandwidth and 3 GB media storage/month, with transformations and video processing.", es: "Gratis para siempre: 20 GB de tráfico y 3 GB de media/mes, con transformaciones y procesado de vídeo." },
  "Dokploy": { en: "Free forever when self-hosted on your own server, unlimited apps and databases; the managed Dokploy Cloud is paid, from $4.50/month per server with no free tier.", es: "Gratis para siempre en self-hosting en tu propio servidor, apps y bases de datos ilimitadas; Dokploy Cloud gestionado es de pago desde 4,50 $/mes por servidor y no tiene capa gratuita." },
}
