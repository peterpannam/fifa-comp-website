// ============================================================
//  FIFA AUCTION TRACKER — CONFIG
//  Edit this file after your auction to set real teams.
//  Then push both files to GitHub Pages or Netlify.
// ============================================================

const CONFIG = {

  // 1. Your 6 players and their 8 teams (2 per tier).
  //    Team names must match exactly what ESPN returns —
  //    run the site once and check the browser console for the
  //    full team name list if anything doesn't match.
  PLAYERS: [
    {
      name: "Andy",
      color: "#4ade80",
      teams: [
        { name: "Brazil",       tier: 1 },
        { name: "Belgium",     tier: 1 },
        { name: "Japan",      tier: 2 },
        { name: "Türkiye",      tier: 2 },
        { name: "Tunisia",       tier: 3 },
        { name: "Algeria",     tier: 3 },
        { name: "Haiti",        tier: 4 },
        { name: "Uzbekistan",       tier: 4 },
      ]
    },
    {
      name: "Cramb",
      color: "#c084fc",
      teams: [
        { name: "Argentina",     tier: 1 },
        { name: "Morocco",      tier: 1 },
        { name: "Uruguay",    tier: 2 },
        { name: "Senegal",         tier: 2 },
        { name: "Panama",     tier: 3 },
        { name: "Egypt",      tier: 3 },
        { name: "South Africa",        tier: 4 },
        { name: "Bosnia-Herzegovina",   tier: 4 },
      ]
    },
    {
      name: "Darcy",
      color: "#fbbf24",
      teams: [
        { name: "Germany",      tier: 1 },
        { name: "England",  tier: 1 },
        { name: "Australia",          tier: 2 },
        { name: "Iran",  tier: 2 },
        { name: "Sweden",     tier: 3 },
        { name: "Norway",      tier: 3 },
        { name: "Curaçao",         tier: 4 },
        { name: "Cape Verde",  tier: 4 },
      ]
    },
    {
      name: "Lance",
      color: "#fb923c",
      teams: [
        { name: "Colombia",              tier: 1 },
        { name: "Netherlands",              tier: 1 },
        { name: "Switzerland",          tier: 2 },
        { name: "South Korea",              tier: 2 },
        { name: "Czechia",              tier: 3 },
        { name: "Paraguay",               tier: 3 },
        { name: "New Zealand", tier: 4 },
        { name: "Iraq",              tier: 4 },
      ]
    },    
    {
      name: "Nathan",
      color: "#60a5fa",
      teams: [
        { name: "France",       tier: 1 },
        { name: "Croatia",    tier: 1 },
        { name: "Ecuador",      tier: 2 },
        { name: "Mexico",       tier: 2 },
        { name: "Ivory Coast",  tier: 3 },
        { name: "Canada",       tier: 3 },
        { name: "Jordan", tier: 4 },
        { name: "Qatar", tier: 4 },
      ]
    },                
    {
      name: "Peter",
      color: "#f87171",
      teams: [
        { name: "Spain",    tier: 1 },
        { name: "Portugal",  tier: 1 },
        { name: "United States",    tier: 2 },
        { name: "Austria",  tier: 2 },
        { name: "Congo DR",   tier: 3 },
        { name: "Scotland",    tier: 3 },
        { name: "Ghana",    tier: 4 },
        { name: "Saudi Arabia", tier: 4 },
      ]
    }

  ],

  // 2. Scoring — change only if your group's rules differ
  STAGE_POINTS: {
    "Group Stage":    0,   // eliminated in groups
    "Round of 32":   5,
    "Round of 16":   10,
    "Quarter-finals": 15,
    "Semi-finals":   20,
    "2nd Place":     25,
    "Winner":        30,
  },

  // 3. Underdog bonus — tier difference → [win points, draw points]
  //    Draws only count in the group stage
  UNDERDOG_BONUS: {
    1: { win: 2, draw: 1 },
    2: { win: 4, draw: 2 },
    3: { win: 6, draw: 3 },
  },

};
