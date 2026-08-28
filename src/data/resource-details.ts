import type { Locale, Resource } from "./resources"

interface LocalizedGuide {
  overview: Record<Locale, string>
  idealFor: Record<Locale, string>
  useCases: Record<Locale, string[]>
  exampleTitle: Record<Locale, string>
  exampleSteps: Record<Locale, string[]>
  caveat: Record<Locale, string>
}

export interface ResourceDetail {
  longDescription: Record<Locale, string[]>
  idealFor: Record<Locale, string>
  useCases: Record<Locale, string[]>
  exampleTitle: Record<Locale, string>
  exampleSteps: Record<Locale, string[]>
  caveats: Record<Locale, string[]>
}

const categoryGuides: Record<string, LocalizedGuide> = {
  hosting: {
    overview: { en: "It removes infrastructure work from the path between a repository and a public URL, making it easier to test ideas, share previews and ship small products.", es: "Elimina trabajo de infraestructura entre un repositorio y una URL pública, facilitando probar ideas, compartir previews y lanzar productos pequeños." },
    idealFor: { en: "Frontend projects, APIs, demos and small production services", es: "Proyectos frontend, APIs, demos y pequeños servicios en producción" },
    useCases: { en: ["Publish a portfolio or documentation site with a custom domain.", "Create a preview environment for every pull request.", "Launch an MVP without maintaining deployment servers."], es: ["Publicar un portfolio o documentación con dominio propio.", "Crear un entorno de preview por cada pull request.", "Lanzar un MVP sin mantener servidores de despliegue."] },
    exampleTitle: { en: "Ship a weekend project", es: "Publica un proyecto de fin de semana" },
    exampleSteps: { en: ["Connect the Git repository and select the framework preset.", "Add environment variables and verify the preview deployment.", "Attach a domain, enable analytics and watch the free allowance."], es: ["Conecta el repositorio y selecciona el preset del framework.", "Añade variables de entorno y comprueba el deploy de preview.", "Conecta un dominio, activa analítica y vigila la cuota gratuita."] },
    caveat: { en: "Check sleep policies, commercial-use restrictions, bandwidth and what happens when the allowance runs out.", es: "Comprueba políticas de suspensión, restricciones de uso comercial, ancho de banda y qué ocurre al agotar la cuota." },
  },
  data: {
    overview: { en: "It provides managed data infrastructure so an application can persist, query and synchronize information without operating a database cluster from scratch.", es: "Proporciona infraestructura de datos gestionada para persistir, consultar y sincronizar información sin operar un clúster desde cero." },
    idealFor: { en: "Prototypes, application backends and workloads that need managed persistence", es: "Prototipos, backends y cargas que necesitan persistencia gestionada" },
    useCases: { en: ["Back a SaaS prototype with persistent application data.", "Create an isolated database for previews and automated tests.", "Validate a data model before committing to production infrastructure."], es: ["Dar persistencia a un prototipo SaaS.", "Crear una base aislada para previews y pruebas automáticas.", "Validar un modelo de datos antes de elegir infraestructura de producción."] },
    exampleTitle: { en: "Build the backend for a small app", es: "Construye el backend de una app pequeña" },
    exampleSteps: { en: ["Create the smallest free database and copy its connection credentials.", "Apply a schema and seed it with representative test data.", "Add usage alerts and test export or migration before storing important data."], es: ["Crea la base gratuita más pequeña y copia sus credenciales.", "Aplica un esquema y añade datos de prueba representativos.", "Configura alertas y prueba la exportación antes de guardar datos importantes."] },
    caveat: { en: "Measure storage, compute, read/write quotas, backups and inactivity policies separately; they rarely share the same limit.", es: "Mide por separado storage, cómputo, lecturas/escrituras, backups e inactividad; rara vez comparten el mismo límite." },
  },
  ai: {
    overview: { en: "It helps teams build, evaluate or operate AI features without first creating the entire model, tracing and experimentation stack themselves.", es: "Ayuda a crear, evaluar u operar funciones de IA sin construir primero todo el stack de modelos, trazas y experimentación." },
    idealFor: { en: "LLM prototypes, model experiments, evaluations and AI observability", es: "Prototipos con LLM, experimentos, evaluaciones y observabilidad de IA" },
    useCases: { en: ["Compare prompts or models against a small evaluation set.", "Add an AI feature to a prototype while keeping usage measurable.", "Trace failures, latency and cost before a wider release."], es: ["Comparar prompts o modelos con un pequeño set de evaluación.", "Añadir IA a un prototipo manteniendo el uso medible.", "Trazar fallos, latencia y coste antes de un lanzamiento mayor."] },
    exampleTitle: { en: "Prototype an AI assistant", es: "Prototipa un asistente de IA" },
    exampleSteps: { en: ["Start with one narrow task and a small, representative test set.", "Log inputs, outputs, latency and feedback while iterating.", "Set a hard usage limit and compare quality before scaling traffic."], es: ["Empieza con una tarea concreta y un set de pruebas pequeño.", "Registra entradas, salidas, latencia y feedback durante la iteración.", "Fija un límite de uso y compara la calidad antes de escalar tráfico."] },
    caveat: { en: "Platform access may be free while model inference is billed by a separate provider. Treat both quotas independently.", es: "La plataforma puede ser gratis mientras la inferencia se factura en otro proveedor. Trata ambas cuotas por separado." },
  },
  auth: {
    overview: { en: "It replaces sensitive identity plumbing with maintained authentication flows, SDKs and user-management primitives.", es: "Sustituye la infraestructura sensible de identidad por flujos, SDKs y gestión de usuarios mantenidos." },
    idealFor: { en: "SaaS authentication, user management and organization-aware applications", es: "Autenticación SaaS, gestión de usuarios y aplicaciones con organizaciones" },
    useCases: { en: ["Add email, social or passwordless sign-in to an MVP.", "Model teams and organizations in a multi-tenant product.", "Protect an internal dashboard without building identity infrastructure."], es: ["Añadir login por email, social o passwordless a un MVP.", "Modelar equipos y organizaciones en un producto multi-tenant.", "Proteger un dashboard interno sin construir infraestructura de identidad."] },
    exampleTitle: { en: "Add production-shaped login", es: "Añade un login preparado para crecer" },
    exampleSteps: { en: ["Integrate the SDK and enable only the sign-in methods you need.", "Protect server routes and test account recovery end to end.", "Export user identifiers and document an exit path before launch."], es: ["Integra el SDK y activa solo los métodos de login necesarios.", "Protege rutas de servidor y prueba la recuperación de cuenta.", "Exporta identificadores y documenta una vía de salida antes de lanzar."] },
    caveat: { en: "Compare monthly active user definitions, organization limits, MFA and the price jump after the free allowance.", es: "Compara cómo se calculan los usuarios activos, límites de organizaciones, MFA y el salto de precio tras la cuota." },
  },
  email: {
    overview: { en: "It handles delivery, forms or contact workflows that otherwise require a mail server, reputation management and anti-spam infrastructure.", es: "Resuelve envíos, formularios o contactos que de otro modo requieren servidor de correo, reputación e infraestructura antispam." },
    idealFor: { en: "Transactional messages, contact forms, onboarding and small newsletters", es: "Mensajes transaccionales, formularios, onboarding y newsletters pequeñas" },
    useCases: { en: ["Send verification, password-reset or receipt emails.", "Receive contact-form submissions from a static site.", "Test templates and delivery before a production launch."], es: ["Enviar emails de verificación, recuperación o recibos.", "Recibir formularios desde una web estática.", "Probar plantillas y entregabilidad antes de producción."] },
    exampleTitle: { en: "Create a reliable onboarding email", es: "Crea un email de onboarding fiable" },
    exampleSteps: { en: ["Verify a sending domain and configure SPF, DKIM and DMARC.", "Build one accessible template and test it across common clients.", "Handle bounces and keep transactional traffic separate from marketing."], es: ["Verifica el dominio y configura SPF, DKIM y DMARC.", "Crea una plantilla accesible y pruébala en clientes habituales.", "Gestiona rebotes y separa el tráfico transaccional del marketing."] },
    caveat: { en: "Daily caps, monthly caps, contact limits and test-email quotas are different things. Domain verification is usually required.", es: "Los límites diarios, mensuales, de contactos y de pruebas son distintos. Normalmente hay que verificar el dominio." },
  },
  observability: {
    overview: { en: "It makes failures and performance visible through checks, logs, traces, errors or incident workflows before users become the monitoring system.", es: "Hace visibles fallos y rendimiento mediante checks, logs, trazas, errores o incidentes antes de que los usuarios sean el sistema de monitorización." },
    idealFor: { en: "Small production apps, scheduled jobs, APIs and incident awareness", es: "Apps pequeñas en producción, tareas programadas, APIs y gestión de incidentes" },
    useCases: { en: ["Receive an alert when an API or website stops responding.", "Investigate an error with enough context to reproduce it.", "Publish a status page during an incident."], es: ["Recibir una alerta cuando una API o web deja de responder.", "Investigar un error con contexto suficiente para reproducirlo.", "Publicar una página de estado durante un incidente."] },
    exampleTitle: { en: "Cover the first production signals", es: "Cubre las primeras señales de producción" },
    exampleSteps: { en: ["Monitor the critical user path, not only the homepage.", "Route alerts to a channel someone will actually read.", "Tune noisy checks and document the first response action."], es: ["Monitoriza el flujo crítico, no solo la portada.", "Envía alertas a un canal que alguien vaya a leer.", "Ajusta checks ruidosos y documenta la primera acción de respuesta."] },
    caveat: { en: "Retention and ingest are often more restrictive than dashboard count. Sample aggressively before sending high-volume telemetry.", es: "La retención y la ingesta suelen limitar más que los dashboards. Muestrea antes de enviar telemetría de gran volumen." },
  },
  ci: {
    overview: { en: "It automates repeatable checks around code changes, turning tests, builds, releases and dependency maintenance into reviewable workflows.", es: "Automatiza comprobaciones repetibles alrededor del código y convierte tests, builds, releases y dependencias en workflows revisables." },
    idealFor: { en: "Automated tests, builds, releases and repository hygiene", es: "Tests automáticos, builds, releases y mantenimiento de repositorios" },
    useCases: { en: ["Run tests and type checks on every pull request.", "Build and publish a release after merging a tag.", "Detect dependency or security regressions automatically."], es: ["Ejecutar tests y tipos en cada pull request.", "Construir y publicar una release al crear una etiqueta.", "Detectar regresiones de dependencias o seguridad automáticamente."] },
    exampleTitle: { en: "Protect a small repository", es: "Protege un repositorio pequeño" },
    exampleSteps: { en: ["Start with one workflow for install, lint, test and build.", "Cache dependencies and cancel superseded branch runs.", "Require the check before merge and monitor consumed minutes."], es: ["Empieza con un workflow de instalación, lint, test y build.", "Cachea dependencias y cancela ejecuciones sustituidas.", "Exige el check antes del merge y vigila los minutos consumidos."] },
    caveat: { en: "Public and private repositories often receive different quotas. Self-hosted runners also move security and compute costs to you.", es: "Los repos públicos y privados suelen tener cuotas distintas. Los runners propios trasladan seguridad y cómputo a tu infraestructura." },
  },
  analytics: {
    overview: { en: "It turns product or website activity into evidence about acquisition, behavior, friction and retention.", es: "Convierte la actividad de producto o web en evidencia sobre adquisición, comportamiento, fricción y retención." },
    idealFor: { en: "Product decisions, funnels, website behavior and early growth analysis", es: "Decisiones de producto, funnels, comportamiento web y análisis de crecimiento" },
    useCases: { en: ["Measure the activation path from visit to first value.", "Find where users abandon an important flow.", "Compare retention or conversion after a product change."], es: ["Medir la activación desde la visita hasta el primer valor.", "Encontrar dónde abandonan los usuarios un flujo importante.", "Comparar retención o conversión tras un cambio de producto."] },
    exampleTitle: { en: "Instrument one useful funnel", es: "Instrumenta un funnel útil" },
    exampleSteps: { en: ["Define a small event vocabulary before adding the SDK.", "Track the critical path and validate events in a test environment.", "Build one decision-oriented dashboard and review data quality."], es: ["Define pocos eventos antes de añadir el SDK.", "Mide el flujo crítico y valida eventos en un entorno de prueba.", "Crea un dashboard orientado a decisiones y revisa la calidad del dato."] },
    caveat: { en: "Events, sessions, users and recordings may have separate quotas. Review consent, retention and data location before production use.", es: "Eventos, sesiones, usuarios y grabaciones pueden tener cuotas distintas. Revisa consentimiento, retención y ubicación de datos." },
  },
  api: {
    overview: { en: "It shortens integration and prototyping work by exposing a focused API, automation layer or development client.", es: "Reduce trabajo de integración y prototipado mediante una API especializada, automatización o cliente de desarrollo." },
    idealFor: { en: "API prototypes, integrations, testing and workflow automation", es: "Prototipos de API, integraciones, pruebas y automatización" },
    useCases: { en: ["Replace an unfinished backend with predictable test data.", "Validate an integration before paying for production volume.", "Automate a repetitive workflow between two services."], es: ["Sustituir un backend incompleto por datos de prueba predecibles.", "Validar una integración antes de pagar volumen de producción.", "Automatizar un flujo repetitivo entre dos servicios."] },
    exampleTitle: { en: "Validate an integration quickly", es: "Valida una integración rápidamente" },
    exampleSteps: { en: ["Create a minimal request and store credentials outside the client.", "Handle errors, retries and rate limits from the first test.", "Record representative responses so local tests do not depend on the network."], es: ["Crea una petición mínima y guarda credenciales fuera del cliente.", "Gestiona errores, reintentos y rate limits desde la primera prueba.", "Guarda respuestas representativas para que los tests no dependan de la red."] },
    caveat: { en: "A free request count says little about latency, allowed use, data freshness or production rights. Read the API terms as well as pricing.", es: "La cuota de peticiones no explica latencia, usos permitidos, frescura o derechos de producción. Lee términos y precios." },
  },
  design: {
    overview: { en: "It helps turn an idea into visual assets, interfaces or diagrams that can be reviewed before implementation.", es: "Ayuda a convertir una idea en recursos visuales, interfaces o diagramas revisables antes de implementar." },
    idealFor: { en: "Interface design, visual communication, prototypes and developer handoff", es: "Diseño de interfaces, comunicación visual, prototipos y handoff" },
    useCases: { en: ["Prototype a product flow before writing frontend code.", "Create diagrams or assets for documentation and launch pages.", "Share a visual direction with collaborators and collect feedback."], es: ["Prototipar un flujo antes de escribir frontend.", "Crear diagramas o recursos para documentación y lanzamientos.", "Compartir una dirección visual y recoger feedback."] },
    exampleTitle: { en: "Turn a rough idea into a testable flow", es: "Convierte una idea en un flujo comprobable" },
    exampleSteps: { en: ["Map the user goal and the smallest number of screens.", "Build a clickable path using reusable components or assets.", "Test it with someone else and hand off decisions, not just pixels."], es: ["Mapea el objetivo y el mínimo número de pantallas.", "Crea un recorrido clicable con componentes o recursos reutilizables.", "Pruébalo con otra persona y entrega decisiones, no solo píxeles."] },
    caveat: { en: "Check collaborative file limits, export formats, asset licenses and whether developer handoff is included.", es: "Comprueba límites de archivos compartidos, exportaciones, licencias y si el handoff está incluido." },
  },
  security: {
    overview: { en: "It adds a focused security check that is easy to automate early, when remediation is still inexpensive.", es: "Añade una comprobación de seguridad fácil de automatizar pronto, cuando corregir todavía es barato." },
    idealFor: { en: "Repository hygiene, web hardening and early security feedback", es: "Higiene de repositorios, hardening web y feedback de seguridad temprano" },
    useCases: { en: ["Catch an exposed credential before or shortly after a push.", "Audit a public site for common security weaknesses.", "Add dependency or breach intelligence to a development workflow."], es: ["Detectar una credencial expuesta antes o después de un push.", "Auditar una web pública frente a debilidades comunes.", "Añadir inteligencia de dependencias o filtraciones al workflow."] },
    exampleTitle: { en: "Add a lightweight security baseline", es: "Añade una base de seguridad ligera" },
    exampleSteps: { en: ["Run the tool against a test repository or domain first.", "Triage findings by exploitability and rotate exposed secrets immediately.", "Automate the useful check and document how to handle a failure."], es: ["Ejecuta la herramienta sobre un repo o dominio de prueba.", "Prioriza por explotabilidad y rota secretos expuestos inmediatamente.", "Automatiza el check útil y documenta cómo actuar ante un fallo."] },
    caveat: { en: "A clean scan is not a security guarantee. Confirm private-repository support, history depth and incident retention.", es: "Un escaneo limpio no garantiza seguridad. Confirma soporte de repos privados, profundidad del historial y retención." },
  },
  collaboration: {
    overview: { en: "It creates a shared place for decisions, tasks or conversation so small teams can coordinate without building their own workflow system.", es: "Crea un espacio compartido para decisiones, tareas o conversaciones y evita que equipos pequeños inventen su propio sistema." },
    idealFor: { en: "Small teams, open-source communities, planning and asynchronous work", es: "Equipos pequeños, comunidades open source, planificación y trabajo asíncrono" },
    useCases: { en: ["Plan a small product and keep ownership visible.", "Document decisions next to the work they affect.", "Coordinate a community or remote team asynchronously."], es: ["Planificar un producto pequeño manteniendo ownership visible.", "Documentar decisiones junto al trabajo afectado.", "Coordinar una comunidad o equipo remoto de forma asíncrona."] },
    exampleTitle: { en: "Create a lightweight team operating system", es: "Crea un sistema de trabajo ligero" },
    exampleSteps: { en: ["Choose one place for active work and define a minimal workflow.", "Import only current tasks instead of recreating the entire archive.", "Set notification rules and review what the free history retains."], es: ["Elige un lugar para el trabajo activo y define un workflow mínimo.", "Importa solo tareas actuales en vez de recrear todo el archivo.", "Configura notificaciones y revisa cuánto historial conserva el plan." ] },
    caveat: { en: "History, guest access, automations, uploads and integrations usually hit limits before basic task count.", es: "Historial, invitados, automatizaciones, subidas e integraciones suelen agotarse antes que las tareas." },
  },
  cms: {
    overview: { en: "It separates structured content from presentation, giving editors a maintained workspace while developers keep control of the frontend.", es: "Separa contenido estructurado y presentación, dando un workspace a editores mientras desarrollo controla el frontend." },
    idealFor: { en: "Marketing sites, documentation, editorial projects and structured content APIs", es: "Webs de marketing, documentación, proyectos editoriales y APIs de contenido" },
    useCases: { en: ["Let non-developers update a marketing site safely.", "Deliver the same structured content to web and mobile clients.", "Preview editorial changes before publishing them."], es: ["Permitir que personas no técnicas actualicen una web con seguridad.", "Entregar el mismo contenido a clientes web y móviles.", "Previsualizar cambios editoriales antes de publicarlos."] },
    exampleTitle: { en: "Build an editable launch site", es: "Construye una web de lanzamiento editable" },
    exampleSteps: { en: ["Model a small set of reusable content types.", "Connect preview and production datasets to the frontend.", "Add image handling, roles and a content export before handoff."], es: ["Modela pocos tipos de contenido reutilizables.", "Conecta datasets de preview y producción al frontend.", "Añade imágenes, roles y exportación antes del handoff."] },
    caveat: { en: "API calls, asset traffic, locales, roles and record counts are separate limits. Migration quality matters as much as editing quality.", es: "Llamadas API, tráfico de assets, idiomas, roles y registros tienen límites separados. La migración importa tanto como el editor." },
  },
  media: {
    overview: { en: "It moves uploads, transformations and delivery out of the application server, improving consistency and reducing bandwidth work.", es: "Saca subidas, transformaciones y entrega del servidor de la aplicación, mejorando consistencia y reduciendo trabajo de ancho de banda." },
    idealFor: { en: "Responsive images, user uploads, media-heavy sites and asset pipelines", es: "Imágenes responsive, subidas de usuarios, webs multimedia y pipelines de assets" },
    useCases: { en: ["Generate responsive formats and sizes from one source image.", "Accept user uploads without proxying files through the app server.", "Optimize a media-heavy landing page through a CDN."], es: ["Generar formatos y tamaños responsive desde una imagen.", "Aceptar subidas sin pasar archivos por el servidor de la app.", "Optimizar una landing con mucho contenido mediante CDN."] },
    exampleTitle: { en: "Create a production-shaped image pipeline", es: "Crea un pipeline de imagen preparado para producción" },
    exampleSteps: { en: ["Upload representative images and define a small transformation set.", "Generate modern formats and responsive widths in the frontend.", "Track storage, transformation and delivery usage separately."], es: ["Sube imágenes representativas y define pocas transformaciones.", "Genera formatos modernos y anchos responsive en el frontend.", "Vigila storage, transformaciones y tráfico por separado."] },
    caveat: { en: "Credits may combine storage, transformation and bandwidth at different rates. Video can consume the allowance much faster than images.", es: "Los créditos pueden mezclar storage, transformación y tráfico con costes distintos. El vídeo consume la cuota mucho más rápido." },
  },
}

const accessCaveats: Record<Resource["accessRequirement"], Record<Locale, string>> = {
  "no-card": { en: "You can start without adding a credit card, reducing the risk of accidental overage charges.", es: "Puedes empezar sin añadir tarjeta, reduciendo el riesgo de cargos accidentales por exceso." },
  "no-signup": { en: "The useful free experience is available without creating an account; review privacy before sending sensitive data.", es: "La experiencia gratuita útil está disponible sin crear cuenta; revisa la privacidad antes de enviar datos sensibles." },
  "card-for-full-limits": { en: "A card is needed to unlock the complete free allowance. Set spending controls before sending real traffic.", es: "Hace falta tarjeta para desbloquear toda la cuota gratuita. Configura límites de gasto antes de enviar tráfico real." },
  "trial-only": { en: "This is a time-limited trial rather than a permanent free tier. Plan an exit or budget before relying on it.", es: "Es una prueba temporal, no una capa gratis permanente. Prepara una salida o presupuesto antes de depender del servicio." },
}

/** Optional per-resource guides that replace the generic category copy on detail pages. */
const resourceGuides: Partial<Record<string, LocalizedGuide & { longDescription: Record<Locale, string[]> }>> = {
  "Cloudflare Browser Run": {
    overview: {
      en: "It runs headless Chrome on Cloudflare's network so you can scrape, screenshot, crawl and extract page content without hosting browsers yourself.",
      es: "Ejecuta Chrome headless en la red de Cloudflare para scrapear, capturar, crawlear y extraer contenido sin hospedar navegadores propios.",
    },
    idealFor: {
      en: "Web scraping, screenshots, Markdown extraction and light browser automation",
      es: "Web scraping, capturas, extracción a Markdown y automatización ligera del navegador",
    },
    useCases: {
      en: [
        "Turn a public article into Markdown for an AI pipeline.",
        "Capture a screenshot or PDF of a JavaScript-rendered page.",
        "Crawl a small documentation site and extract structured JSON.",
      ],
      es: [
        "Convertir un artículo público a Markdown para un pipeline de IA.",
        "Capturar un screenshot o PDF de una página con JavaScript.",
        "Crawlear una documentación pequeña y extraer JSON estructurado.",
      ],
    },
    exampleTitle: {
      en: "Extract Markdown from a public page",
      es: "Extrae Markdown de una página pública",
    },
    exampleSteps: {
      en: [
        "Create a Cloudflare API token with Browser Rendering Edit permission.",
        "POST the target URL to the /markdown Quick Action endpoint.",
        "Watch X-Browser-Ms-Used and stay within the 10-minute daily free allowance.",
      ],
      es: [
        "Crea un API token de Cloudflare con permiso Browser Rendering Edit.",
        "Envía la URL a la Quick Action /markdown por POST.",
        "Vigila X-Browser-Ms-Used y no superes los 10 minutos diarios de la cuota gratis.",
      ],
    },
    caveat: {
      en: "Workers Free includes 10 minutes of browser time per day and 3 concurrent browsers. Crawl is limited to 5 jobs/day and 100 pages. Requests are identifiable as bots.",
      es: "Workers Free incluye 10 minutos de navegador al día y 3 navegadores simultáneos. El crawl se limita a 5 jobs/día y 100 páginas. Las peticiones se identifican como bots.",
    },
    longDescription: {
      en: [
        "Cloudflare Browser Run (formerly Browser Rendering) provides REST Quick Actions and Workers bindings for screenshots, HTML, PDF, Markdown, JSON extraction, links and crawls, plus Puppeteer, Playwright and CDP sessions.",
        "The Workers Free plan includes 10 minutes of browser time per day and 3 concurrent browsers. Crawl jobs are capped at 5 per day and 100 pages. Paid Workers plans include 10 hours per month, then $0.09 per extra browser hour.",
        "Use it for scraping and automation prototypes. Respect site terms, expect bot detection, and upgrade if you need more than a few minutes of headless Chrome per day.",
      ],
      es: [
        "Cloudflare Browser Run (antes Browser Rendering) ofrece Quick Actions REST y bindings de Workers para screenshots, HTML, PDF, Markdown, JSON, enlaces y crawls, además de sesiones Puppeteer, Playwright y CDP.",
        "El plan Workers Free incluye 10 minutos de navegador al día y 3 navegadores simultáneos. Los crawls se limitan a 5 al día y 100 páginas. El plan de pago incluye 10 horas/mes y luego 0,09 $ por hora extra.",
        "Sirve para prototipos de scraping y automatización. Respeta los términos del sitio, espera detección de bots y escala si necesitas más de unos minutos de Chrome headless al día.",
      ],
    },
  },
  "OpenGraph.to": {
    overview: {
      en: "It scrapes any public URL and returns structured Open Graph, Twitter Card and SEO metadata as JSON, plus a quality score and copy-paste meta tags.",
      es: "Analiza cualquier URL pública y devuelve metadatos Open Graph, Twitter Card y SEO en JSON, junto con una puntuación de calidad y meta tags listos para copiar.",
    },
    idealFor: {
      en: "Link previews, SEO audits, post-deploy checks and social sharing QA",
      es: "Previews de enlaces, auditorías SEO, checks tras un deploy y QA de compartidos sociales",
    },
    useCases: {
      en: [
        "Render rich link previews in a chat, CMS or notes app.",
        "Fail a CI job if the OG score drops below a threshold after deploy.",
        "Audit title, description and image tags across marketing pages.",
      ],
      es: [
        "Renderizar previews ricos de enlaces en un chat, CMS o app de notas.",
        "Fallar un job de CI si la puntuación OG baja de un umbral tras el deploy.",
        "Auditar title, description e imagen en páginas de marketing.",
      ],
    },
    exampleTitle: {
      en: "Audit OG tags after a deploy",
      es: "Audita tags OG tras un deploy",
    },
    exampleSteps: {
      en: [
        "Call GET /api/v1/og with your production URL (or POST the same payload as JSON).",
        "Read analysis.score and triage analysis.issues by severity.",
        "Apply suggestedTags or fix the listed issues, then re-check within the 10 req/hour limit.",
      ],
      es: [
        "Llama a GET /api/v1/og con la URL de producción (o envía el mismo payload por POST).",
        "Revisa analysis.score y prioriza analysis.issues por severidad.",
        "Aplica suggestedTags o corrige los problemas y vuelve a comprobar respetando el límite de 10 pet/hora.",
      ],
    },
    caveat: {
      en: "The free API allows only 10 requests per hour per IP, caches results for 5 minutes and is intended for public URLs. High volume needs your own scraper or another provider.",
      es: "La API gratis permite solo 10 peticiones por hora y por IP, cachea 5 minutos y está pensada para URLs públicas. Para mucho volumen hace falta un scraper propio u otro proveedor.",
    },
    longDescription: {
      en: [
        "OpenGraph.to exposes a free public endpoint at /api/v1/og that scrapes Open Graph, Twitter Card and SEO metadata from any publicly accessible URL—no API key or account required.",
        "A successful JSON response includes the normalized url, title, description, siteName, type, locale, favicon, canonical, image (url, width, height, alt), twitter card fields, analysis (score 0–100, summary and issues with severity and fixes) and suggestedTags as copy-paste HTML.",
        "Rate limits are strict: 10 requests per hour per IP, with X-RateLimit-* headers on every response and a 5-minute response cache. Use it for previews, audits and light automation rather than high-traffic production scraping.",
      ],
      es: [
        "OpenGraph.to ofrece un endpoint público gratis en /api/v1/og que extrae metadatos Open Graph, Twitter Card y SEO de cualquier URL accesible públicamente, sin API key ni cuenta.",
        "La respuesta JSON incluye la url normalizada, title, description, siteName, type, locale, favicon, canonical, image (url, width, height, alt), campos de Twitter Card, analysis (puntuación 0–100, resumen e issues con severidad y fixes) y suggestedTags como HTML listo para copiar.",
        "Los límites son estrictos: 10 peticiones por hora y por IP, con cabeceras X-RateLimit-* en cada respuesta y caché de 5 minutos. Sirve para previews, auditorías y automatización ligera, no para scraping de alto tráfico.",
      ],
    },
  },
}

export function buildResourceDetail(resource: Resource): ResourceDetail {
  const guide = resourceGuides[resource.name] ?? categoryGuides[resource.category]
  const topicsEn = resource.tags.slice(0, 3).join(", ")
  const topicsEs = resource.tags.slice(0, 3).join(", ")
  const custom = resourceGuides[resource.name]

  return {
    longDescription: custom?.longDescription ?? {
      en: [resource.description.en, `${resource.name} is especially relevant for ${topicsEn}. ${guide.overview.en}`, `Its current free offer is concrete enough to test a real workflow: ${resource.freeTier.en}`],
      es: [resource.description.es, `${resource.name} resulta especialmente útil para ${topicsEs}. ${guide.overview.es}`, `Su oferta gratuita actual permite probar un flujo real: ${resource.freeTier.es}`],
    },
    idealFor: guide.idealFor,
    useCases: guide.useCases,
    exampleTitle: guide.exampleTitle,
    exampleSteps: guide.exampleSteps,
    caveats: {
      en: [accessCaveats[resource.accessRequirement].en, guide.caveat.en],
      es: [accessCaveats[resource.accessRequirement].es, guide.caveat.es],
    },
  }
}
