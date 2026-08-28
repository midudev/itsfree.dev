import type { Locale } from "./resources"

export interface CodeExample {
  title: Record<Locale, string>
  description: Record<Locale, string>
  filename: string
  lang: "bash" | "javascript" | "tsx" | "yaml"
  code: string
}

const examples: Record<string, CodeExample> = {
  supabase: {
    title: { en: "Read rows with the Supabase client", es: "Lee registros con el cliente de Supabase" },
    description: { en: "Create a client with public browser credentials and query a table.", es: "Crea un cliente con credenciales públicas del navegador y consulta una tabla." },
    filename: "supabase.ts",
    lang: "javascript",
    code: `import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
)

const { data, error } = await supabase
  .from("projects")
  .select("id, name, created_at")
  .order("created_at", { ascending: false })

if (error) throw error
console.log(data)`,
  },
  turso: {
    title: { en: "Query Turso from TypeScript", es: "Consulta Turso desde TypeScript" },
    description: { en: "Connect with libSQL and use parameterized statements.", es: "Conecta con libSQL y usa consultas parametrizadas." },
    filename: "database.ts",
    lang: "javascript",
    code: `import { createClient } from "@libsql/client"

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
})

const result = await db.execute({
  sql: "SELECT * FROM users WHERE email = ?",
  args: ["ada@example.com"],
})

console.log(result.rows)`,
  },
  upstash: {
    title: { en: "Use serverless Redis", es: "Usa Redis serverless" },
    description: { en: "Store a short-lived value through Upstash's HTTP-based client.", es: "Guarda un valor temporal mediante el cliente HTTP de Upstash." },
    filename: "cache.ts",
    lang: "javascript",
    code: `import { Redis } from "@upstash/redis"

const redis = Redis.fromEnv()

await redis.set("session:42", { userId: "ada" }, { ex: 3600 })
const session = await redis.get<{ userId: string }>("session:42")

console.log(session?.userId)`,
  },
  "mongodb-atlas": {
    title: { en: "Insert a document in MongoDB Atlas", es: "Inserta un documento en MongoDB Atlas" },
    description: { en: "Reuse one MongoClient and write to a collection.", es: "Reutiliza un MongoClient y escribe en una colección." },
    filename: "mongodb.ts",
    lang: "javascript",
    code: `import { MongoClient } from "mongodb"

const client = new MongoClient(process.env.MONGODB_URI!)
const projects = client.db("app").collection("projects")

const result = await projects.insertOne({
  name: "itsfree.dev",
  createdAt: new Date(),
})

console.log(result.insertedId)`,
  },
  openrouter: {
    title: { en: "Call a free model through OpenRouter", es: "Llama a un modelo gratis con OpenRouter" },
    description: { en: "Use its OpenAI-compatible chat completions endpoint.", es: "Usa su endpoint de chat completions compatible con OpenAI." },
    filename: "request.sh",
    lang: "bash",
    code: `curl https://openrouter.ai/api/v1/chat/completions \\
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "openrouter/free",
    "messages": [{ "role": "user", "content": "Explain this API" }]
  }'`,
  },
  "nvidia-nim": {
    title: { en: "Run an NVIDIA NIM model", es: "Ejecuta un modelo con NVIDIA NIM" },
    description: { en: "Send a chat request to NVIDIA's OpenAI-compatible endpoint.", es: "Envía una petición de chat al endpoint de NVIDIA compatible con OpenAI." },
    filename: "request.sh",
    lang: "bash",
    code: `curl https://integrate.api.nvidia.com/v1/chat/completions \\
  -H "Authorization: Bearer $NVIDIA_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "deepseek-ai/deepseek-v3.1",
    "messages": [{ "role": "user", "content": "Write a TypeScript helper" }]
  }'`,
  },
  groq: {
    title: { en: "Generate text with Groq", es: "Genera texto con Groq" },
    description: { en: "Use the official SDK with a hosted open model.", es: "Usa el SDK oficial con un modelo abierto alojado." },
    filename: "groq.ts",
    lang: "javascript",
    code: `import Groq from "groq-sdk"

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })
const completion = await groq.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: [{ role: "user", content: "Summarize this pull request" }],
})

console.log(completion.choices[0].message.content)`,
  },
  cerebras: {
    title: { en: "Use Cerebras with the OpenAI SDK", es: "Usa Cerebras con el SDK de OpenAI" },
    description: { en: "Point the OpenAI client at Cerebras' compatible API.", es: "Apunta el cliente de OpenAI a la API compatible de Cerebras." },
    filename: "cerebras.ts",
    lang: "javascript",
    code: `import OpenAI from "openai"

const client = new OpenAI({
  apiKey: process.env.CEREBRAS_API_KEY,
  baseURL: "https://api.cerebras.ai/v1",
})

const response = await client.chat.completions.create({
  model: "llama-3.3-70b",
  messages: [{ role: "user", content: "Give me three API test cases" }],
})

console.log(response.choices[0].message.content)`,
  },
  "cloudflare-workers-ai": {
    title: { en: "Run a model inside a Worker", es: "Ejecuta un modelo dentro de un Worker" },
    description: { en: "Call the AI binding directly from a Cloudflare Worker.", es: "Llama al binding de IA directamente desde un Cloudflare Worker." },
    filename: "worker.ts",
    lang: "javascript",
    code: `export default {
  async fetch(_request, env) {
    const result = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
      prompt: "Explain edge inference in one paragraph",
    })

    return Response.json(result)
  },
}`,
  },
  resend: {
    title: { en: "Send a transactional email", es: "Envía un email transaccional" },
    description: { en: "Send a message from a verified domain with the Resend SDK.", es: "Envía un mensaje desde un dominio verificado con el SDK de Resend." },
    filename: "email.ts",
    lang: "javascript",
    code: `import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const { data, error } = await resend.emails.send({
  from: "Acme <hello@example.com>",
  to: ["ada@example.com"],
  subject: "Welcome!",
  html: "<strong>Your account is ready.</strong>",
})

if (error) throw error
console.log(data.id)`,
  },
  sentry: {
    title: { en: "Capture an application error", es: "Captura un error de la aplicación" },
    description: { en: "Add useful context before reporting an exception.", es: "Añade contexto útil antes de reportar una excepción." },
    filename: "errors.ts",
    lang: "javascript",
    code: `import * as Sentry from "@sentry/browser"

Sentry.init({ dsn: import.meta.env.PUBLIC_SENTRY_DSN })

try {
  await checkout()
} catch (error) {
  Sentry.captureException(error, {
    tags: { flow: "checkout" },
  })
}`,
  },
  posthog: {
    title: { en: "Track a product event", es: "Registra un evento de producto" },
    description: { en: "Capture a small, decision-oriented event with properties.", es: "Captura un evento pequeño y orientado a decisiones con sus propiedades." },
    filename: "analytics.ts",
    lang: "javascript",
    code: `import posthog from "posthog-js"

posthog.init(import.meta.env.PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.PUBLIC_POSTHOG_HOST,
})

posthog.capture("project_created", {
  source: "onboarding",
  template: "astro",
})`,
  },
  "ahrefs-web-analytics": {
    title: { en: "Install the Ahrefs tracking snippet", es: "Instala el snippet de tracking de Ahrefs" },
    description: { en: "Load the cookie-free analytics script after verifying site ownership.", es: "Carga el script de analítica sin cookies tras verificar la propiedad del sitio." },
    filename: "analytics.ts",
    lang: "javascript",
    code: `// Add in <head> (or inject once on the client).
// Get data-key from your Ahrefs Web Analytics project settings.
const script = document.createElement("script")
script.src = "https://analytics.ahrefs.com/analytics.js"
script.dataset.key = import.meta.env.PUBLIC_AHREFS_ANALYTICS_KEY
script.async = true
document.head.appendChild(script)`,
  },
  "cloudflare-web-analytics": {
    title: { en: "Add Cloudflare Web Analytics", es: "Añade Cloudflare Web Analytics" },
    description: { en: "Drop in the beacon script; no cookies and no personal data collection.", es: "Incluye el script beacon; sin cookies ni recogida de datos personales." },
    filename: "analytics.ts",
    lang: "javascript",
    code: `// Token from dash.cloudflare.com → Analytics & logs → Web Analytics
const script = document.createElement("script")
script.defer = true
script.src = "https://static.cloudflareinsights.com/beacon.min.js"
script.dataset.cfBeacon = JSON.stringify({
  token: import.meta.env.PUBLIC_CF_WEB_ANALYTICS_TOKEN,
})
document.head.appendChild(script)`,
  },
  "github-actions": {
    title: { en: "Check every pull request", es: "Comprueba cada pull request" },
    description: { en: "Install, test and build with a minimal GitHub Actions workflow.", es: "Instala, prueba y compila con un workflow mínimo de GitHub Actions." },
    filename: ".github/workflows/ci.yml",
    lang: "yaml",
    code: `name: CI
on: [pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm test
      - run: pnpm build`,
  },
  dummyjson: {
    title: { en: "Fetch sample products", es: "Obtén productos de ejemplo" },
    description: { en: "Call DummyJSON without an API key and paginate the catalog.", es: "Llama a DummyJSON sin API key y pagina el catálogo." },
    filename: "products.ts",
    lang: "javascript",
    code: `const response = await fetch(
  "https://dummyjson.com/products?limit=5&skip=0",
)

if (!response.ok) throw new Error("Could not load products")

const { products, total } = await response.json()
console.log(total, products.map((product) => product.title))`,
  },
  jsonplaceholder: {
    title: { en: "Fetch predictable test data", es: "Obtén datos de prueba predecibles" },
    description: { en: "Prototype a UI without credentials or a backend.", es: "Prototipa una interfaz sin credenciales ni backend." },
    filename: "posts.ts",
    lang: "javascript",
    code: `const response = await fetch(
  "https://jsonplaceholder.typicode.com/posts?_limit=5",
)

if (!response.ok) throw new Error("Could not load posts")

const posts = await response.json()
console.log(posts)`,
  },
  "cloudflare-browser-run": {
    title: { en: "Extract a page as Markdown", es: "Extrae una página como Markdown" },
    description: { en: "Use Browser Run Quick Actions to render JavaScript and return Markdown.", es: "Usa Quick Actions de Browser Run para renderizar JavaScript y devolver Markdown." },
    filename: "scrape.ts",
    lang: "javascript",
    code: `const accountId = process.env.CLOUDFLARE_ACCOUNT_ID!
const token = process.env.CLOUDFLARE_API_TOKEN!

const response = await fetch(
  \`https://api.cloudflare.com/client/v4/accounts/\${accountId}/browser-rendering/markdown\`,
  {
    method: "POST",
    headers: {
      Authorization: \`Bearer \${token}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: "https://example.com" }),
  },
)

if (!response.ok) throw new Error("Could not render page")

const result = await response.json()
console.log(result.result)
console.log(response.headers.get("X-Browser-Ms-Used"))`,
  },
  nhost: {
    title: { en: "Query GraphQL from the browser", es: "Consulta GraphQL desde el navegador" },
    description: { en: "Call the Hasura endpoint with the public anon role.", es: "Llama al endpoint de Hasura con el rol público anon." },
    filename: "nhost.ts",
    lang: "javascript",
    code: `const endpoint = import.meta.env.PUBLIC_NHOST_GRAPHQL_URL
const response = await fetch(endpoint, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: \`query ListUsers {
      users(limit: 5) { id displayName }
    }\`,
  }),
})

if (!response.ok) throw new Error("GraphQL request failed")

const { data, errors } = await response.json()
if (errors) throw new Error(errors[0].message)
console.log(data.users)`,
  },
  "open-meteo": {
    title: { en: "Get the current weather", es: "Consulta el tiempo actual" },
    description: { en: "Call the free Forecast API without an API key or account.", es: "Llama a la API Forecast gratis sin API key ni cuenta." },
    filename: "weather.ts",
    lang: "javascript",
    code: `const params = new URLSearchParams({
  latitude: "40.42",
  longitude: "-3.70",
  current: "temperature_2m,weather_code,wind_speed_10m",
  hourly: "temperature_2m,precipitation_probability",
  timezone: "auto",
})

const response = await fetch(
  \`https://api.open-meteo.com/v1/forecast?\${params}\`,
)

if (!response.ok) throw new Error("Could not load weather")

const weather = await response.json()
console.log(weather.current.temperature_2m)`,
  },
  "opengraph-to": {
    title: { en: "Inspect Open Graph tags", es: "Inspecciona tags Open Graph" },
    description: { en: "Fetch OG metadata, a quality score and suggested meta tags without an API key.", es: "Obtén metadatos OG, una puntuación de calidad y meta tags sugeridos sin API key." },
    filename: "og.ts",
    lang: "javascript",
    code: `const target = "https://github.com"
const response = await fetch(
  \`https://www.opengraph.to/api/v1/og?url=\${encodeURIComponent(target)}\`,
)

if (response.status === 429) {
  throw new Error("Rate limit: max 10 requests/hour per IP")
}
if (!response.ok) throw new Error("Could not inspect URL")

const og = await response.json()

console.log(og.title)
console.log(og.description)
console.log(og.image?.url)
console.log(og.twitter?.card)
console.log(og.analysis.score)
console.log(og.analysis.issues)
console.log(og.suggestedTags)
console.log(response.headers.get("X-RateLimit-Remaining"))`,
  },
  tldraw: {
    title: { en: "Embed a tldraw canvas", es: "Integra un canvas de tldraw" },
    description: { en: "Render the React canvas and include its base styles.", es: "Renderiza el canvas de React e incluye sus estilos base." },
    filename: "Canvas.tsx",
    lang: "tsx",
    code: `import { Tldraw } from "tldraw"
import "tldraw/tldraw.css"

export function Canvas() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw persistenceKey="my-project" />
    </div>
  )
}`,
  },
}

export const getCodeExample = (slug: string) => examples[slug]
