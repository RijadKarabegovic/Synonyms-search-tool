# Synonyms Search Tool

A modern React app for searching and managing synonym relationships. Results combine your Firestore dictionary, a static WordNet dataset, and live Datamuse suggestions.

## Features

- **Multi-source search** — community (Firestore), static dictionary (~12k words), and online (Datamuse)
- Add new words and link them into synonym clusters in Firestore
- Recent search history (stored locally)
- Copy synonyms to clipboard
- Light / dark theme toggle
- Keyboard shortcuts: `/` to focus search, `Esc` to clear
- Accessible forms, labels, and live result announcements

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Firebase Firestore
- Vitest + Testing Library

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Firebase

Copy the example env file and add your Firebase project credentials:

```bash
cp .env.example .env
```

Required variables:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_DATABASE_URL`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

Firestore documents are stored in the `words` collection with this shape:

```json
{
  "word": "happy",
  "synonyms": ["joyful", "cheerful"]
}
```

### 3. Run the app

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run generate-dictionary` | Regenerate `public/data/synonyms.json` from WordNet data |

## Data Sources

| Source | Type | Description |
|---|---|---|
| Firestore `words` | Community | Words you add via the app; highest priority in results |
| `public/data/synonyms.json` | Static (~488 KB) | WordNet-derived dictionary (12k+ headwords), lazy-loaded on first search |
| [Datamuse API](https://www.datamuse.com/api/) | Online | Live synonym suggestions; no API key required until 2027 |

Results are merged and deduplicated, with each synonym tagged by source in the UI.

## Deploying to Vercel

1. Connect the repo; `vercel.json` sets the output directory to `dist`.
2. In **Project → Settings → Environment Variables**, add every `VITE_FIREBASE_*` variable from `.env.example` (use the same values as your local `.env`).
3. Enable them for **Production** (and Preview if you use preview deploys).
4. **Redeploy** after adding or changing variables. Vite inlines env vars at **build time**, so a redeploy is required.

Without Firebase env vars, the app still runs **search** (static + Datamuse). **Add** mode and community results need Firebase configured.

## Security Notes

- Never commit `.env` files with real credentials.
- Restrict Firestore write access in production (e.g. authenticated users or admin-only add mode).
- Firebase API keys are public in client apps; security depends on Firestore rules.

## Project Structure

```
src/
  components/     UI components
  config/         Firebase initialization
  hooks/          React hooks
  services/       Firestore synonym logic
  utils/          Parsing and normalization helpers
  types/          Shared TypeScript types
```
