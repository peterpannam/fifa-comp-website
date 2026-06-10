# FIFA World Cup 2026 — Auction Tracker

A static two-file site that pulls live World Cup data from ESPN and scores your auction game automatically. Deploys to GitHub Pages via GitHub Actions.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The tracker — all logic, rendering, and API calls |
| `config.js` | Your 6 players, their teams, and scoring rules |
| `.github/workflows/deploy.yml` | Deploys to GitHub Pages on every push to `main` |

---

## Setup

### 1. Edit config.js

Replace the placeholder player names, colours, and teams with your real auction results:

```js
{
  name: "Alice",
  color: "#f87171",
  teams: [
    { name: "Spain",   tier: 1 },
    { name: "England", tier: 1 },
    // ...
  ]
}
```

Each player needs exactly 8 teams — 2 per tier (T1–T4).

**Team name matching**
Team names must match what ESPN returns. After the first load, open the browser console (F12) — any unmatched names will show as warnings. Common differences to watch for:
- `Ivory Coast` → `Côte d'Ivoire`
- `Turkiye` → `Turkey`
- `USA` → `United States`

### 2. Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** and select **GitHub Actions**
3. The workflow runs automatically on every push to `main`
4. Your site is live at `https://<username>.github.io/<repo-name>/`

No API key or secrets needed — the site uses ESPN's public API.

---

## How scoring works

**Stage points** — based on the furthest round each team reaches (not accumulated):

| Stage | Points |
|-------|--------|
| Group exit | 0 |
| Round of 32 | 5 |
| Round of 16 | 10 |
| Quarter-finals | 15 |
| Semi-finals | 20 |
| Runner-up | 25 |
| Winner | 30 |

**Underdog bonus** — earned per match result when a lower-tier team in your game faces a higher-tier team also in your game:

| Tier gap | Win | Draw (groups only) |
|----------|-----|--------------------|
| 1 tier | +2 | +1 |
| 2 tiers | +4 | +2 |
| 3 tiers | +6 | +3 |

Underdog bonuses accumulate across the tournament. Stage points are set once at the team's deepest round.

---

## Data source

Live data comes from ESPN's public soccer API — no key required, no rate limits in practice. The site fetches standings and all match results, then recalculates scores client-side.

Auto-refresh runs every hour. The manual Refresh button triggers an immediate fetch.

---

## Troubleshooting

**Teams showing 0 pts** — Team name mismatch; check the browser console for warnings  
**Blank leaderboard** — ESPN API may be temporarily down; try the Refresh button  
**Scores not updating** — Wait for the hourly refresh or hit Refresh manually  
**Knockout stages not reflected** — ESPN round labels may differ; check the console and update `normaliseRound()` in `index.html` if needed
