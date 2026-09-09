# Eurasia Full-Stack

Full-stack starter project with a Vite + React frontend, an Express API, and PostgreSQL for local development.

## Project structure

- `frontend/` — React application powered by Vite.
- `backend/` — Node.js API powered by Express.
- `docker-compose.yml` — local PostgreSQL service.

## Requirements

- Node.js 22+
- npm 10+
- Docker with Compose

## Run locally

Start PostgreSQL:

```bash
docker compose up -d db
```

Install backend dependencies and start the API:

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

In another terminal, install frontend dependencies and start Vite:

```bash
cd frontend
npm install
npm run dev
```

The frontend proxies `/api` requests to `http://localhost:3001`. The API exposes:

- `GET /api/health`
- `GET /api/health/db`

## Checks

```bash
cd frontend
npm run lint
npm run build
```
