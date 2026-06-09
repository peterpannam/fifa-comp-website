# FIFA World Cup 2026 — Auction Tracker

A two-file site that pulls live World Cup data from API-Football and
scores your auction game automatically.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The tracker site — never needs editing |
| `config.js`  | Your API key + all 6 players and their teams |

---

## Setup (5 steps)

### 1. Get your API key
Sign up free at https://dashboard.api-football.com  
Copy your key from the dashboard.

### 2. Edit config.js
Open `config.js` and:
- Replace `YOUR_API_KEY_HERE` with your key
- Replace the placeholder player names with real names
- Replace the placeholder teams with each player's actual 8 teams
  (2 per tier, in the right tier slot)

**Team name matching**  
Team names must match what API-Football returns exactly.  
After deploying, open your browser console (F12 → Console) — any
unmatched team names will appear as warnings.  
Common differences:
- `Ivory Coast` may appear as `Côte d'Ivoire`
- `Turkiye` may appear as `Turkey`
- `USA` may appear as `United States`
- `Czechia` may appear as `Czech Republic`

To check: open the browser console after the first load and look for
`[WARN] No API match for team: ...` messages.

### 3. Deploy to GitHub Pages
1. Create a new GitHub repo (can be private or public)
2. Upload both `index.html` and `config.js`
3. Go to Settings → Pages → Source: Deploy from branch → main → / (root)
4. Your site will be live at `https://yourusername.github.io/reponame`

### 4. Deploy to Netlify (alternative)
1. Go to https://netlify.com → Add new site → Deploy manually
2. Drag and drop the folder containing both files
3. Done — Netlify gives you a shareable URL instantly

### 5. Share the link with your 6 players

---

## How scoring works

**Stage points** — based on the furthest round each team reaches:

| Stage | Points |
|-------|--------|
| Group exit | 0 |
| Round of 32 | 5 |
| Round of 16 | 10 |
| Quarter-final | 15 |
| Semi-final | 20 |
| Runner-up | 25 |
| Winner | 30 |

**Underdog bonus** — earned per match when your lower-tier team
plays against a higher-tier team in your game:

| Tier gap | Win | Draw (groups only) |
|----------|-----|-------------------|
| 1 tier | +2 | +1 |
| 2 tiers | +4 | +2 |
| 3 tiers | +6 | +3 |

The tracker only calculates underdog bonuses for matches between
teams that are owned by players in your game.

---

## API usage

The free API-Football plan allows 100 requests/day.  
The site makes 2 requests on load (standings + fixtures) and
auto-refreshes every 5 minutes.  
On a match day with 6+ active users, you may approach the limit —
if so, increase the auto-refresh interval in `index.html`:

```js
setInterval(loadData, 5 * 60 * 1000); // change 5 to 15 for 15-min refresh
```

---

## Troubleshooting

**"API key not configured"** — You haven't replaced the placeholder in config.js  
**"Error 401"** — API key is wrong or not yet active (can take a few minutes after signup)  
**"Error 429"** — Hit the 100 req/day free limit; wait until midnight UTC  
**Teams showing 0 pts** — Team name mismatch; check the browser console
