// ============================================================
//  FIFA AUCTION TRACKER — CONFIG
//  Edit this file after your auction to set real teams.
//  Then push both files to GitHub Pages or Netlify.
// ============================================================

const CONFIG = {

  // 1. Paste your API-Football key here (from dashboard.api-football.com)
  API_KEY: "YOUR_API_KEY_HERE",

  // 2. Your 6 players and their 8 teams (2 per tier).
  //    Team names must match exactly what API-Football returns —
  //    run the site once and check the browser console for the
  //    full team name list if anything doesn't match.
  PLAYERS: [
    {
      name: "Peter",
      color: "#f87171",
      teams: [
        // Tier 1 (2 teams)
        { name: "Spain",    tier: 1 },
        { name: "Portugal",  tier: 1 },
        // Tier 2 (2 teams)
        { name: "USA",    tier: 2 },
        { name: "Austria",  tier: 2 },
        // Tier 3 (2 teams)
        { name: "DR Congo",   tier: 3 },
        { name: "Scotland",    tier: 3 },
        // Tier 4 (2 teams)
        { name: "Ghana",    tier: 4 },
        { name: "Saudi Arabia", tier: 4 },
      ]
    },
    {
      name: "Nathan",
      color: "#60a5fa",
      teams: [
        { name: "France",       tier: 1 },
        { name: "Argentina",    tier: 1 },
        { name: "Senegal",      tier: 2 },
        { name: "Mexico",       tier: 2 },
        { name: "Ivory Coast",  tier: 3 },
        { name: "Canada",       tier: 3 },
        { name: "South Africa", tier: 4 },
        { name: "Saudi Arabia", tier: 4 },
      ]
    },
    {
      name: "Andy",
      color: "#4ade80",
      teams: [
        { name: "Brazil",       tier: 1 },
        { name: "Portugal",     tier: 1 },
        { name: "Ecuador",      tier: 2 },
        { name: "Turkiye",      tier: 2 },
        { name: "Sweden",       tier: 3 },
        { name: "Scotland",     tier: 3 },
        { name: "Qatar",        tier: 4 },
        { name: "Jordan",       tier: 4 },
      ]
    },
    {
      name: "Darcy",
      color: "#fbbf24",
      teams: [
        { name: "Germany",      tier: 1 },
        { name: "Netherlands",  tier: 1 },
        { name: "USA",          tier: 2 },
        { name: "South Korea",  tier: 2 },
        { name: "Paraguay",     tier: 3 },
        { name: "Tunisia",      tier: 3 },
        { name: "Iraq",         tier: 4 },
        { name: "New Zealand",  tier: 4 },
      ]
    },
    {
      name: "Cramb",
      color: "#c084fc",
      teams: [
        { name: "Colombia",     tier: 1 },
        { name: "Morocco",      tier: 1 },
        { name: "Australia",    tier: 2 },
        { name: "Iran",         tier: 2 },
        { name: "DR Congo",     tier: 3 },
        { name: "Algeria",      tier: 3 },
        { name: "Haiti",        tier: 4 },
        { name: "Uzbekistan",   tier: 4 },
      ]
    },
    {
      name: "Lance",
      color: "#fb923c",
      teams: [
        { name: "Belgium",              tier: 1 },
        { name: "Croatia",              tier: 1 },
        { name: "Switzerland",          tier: 2 },
        { name: "Austria",              tier: 2 },
        { name: "Czechia",              tier: 3 },
        { name: "Panama",               tier: 3 },
        { name: "Bosnia & Herzegovina", tier: 4 },
        { name: "Curacao",              tier: 4 },
      ]
    },
  ],

  // 3. Scoring — change only if your group's rules differ
  STAGE_POINTS: {
    "Group Stage":    0,   // eliminated in groups
    "Round of 32":   5,
    "Round of 16":   10,
    "Quarter-finals": 15,
    "Semi-finals":   20,
    "2nd Place":     25,
    "Winner":        30,
  },

  // 4. Underdog bonus — tier difference → [win points, draw points]
  //    Draws only count in the group stage
  UNDERDOG_BONUS: {
    1: { win: 2, draw: 1 },
    2: { win: 4, draw: 2 },
    3: { win: 6, draw: 3 },
  },

};
