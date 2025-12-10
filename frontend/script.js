const sportFilter = document.getElementById("sportFilter");
const gamesTableBody = document.getElementById("gamesTableBody");

// Mock data for Snapshot 2 (no backend required yet)
const allGames = [
  {
    id: 1,
    sport: "NBA",
    home: "Lakers",
    away: "Clippers",
    date: "2025-01-10",
    time: "19:00"
  },
  {
    id: 2,
    sport: "NFL",
    home: "Rams",
    away: "49ers",
    date: "2025-01-12",
    time: "13:25"
  },
  {
    id: 3,
    sport: "MLB",
    home: "Dodgers",
    away: "Giants",
    date: "2025-04-03",
    time: "19:10"
  },
  {
    id: 4,
    sport: "NBA",
    home: "Celtics",
    away: "Bulls",
    date: "2025-01-11",
    time: "18:30"
  }
  {
    id: 5,
    sport: "SOCCER",
    home: "Chivas",
    away: "America",
    date: "2025-01-11",
    time: "01:30"
  }
];

function renderGames() {
  const selectedSport = sportFilter.value;
  gamesTableBody.innerHTML = "";

  const filtered = selectedSport === "all"
    ? allGames
    : allGames.filter(game => game.sport === selectedSport);

  filtered.forEach(game => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${game.sport}</td>
      <td>${game.home}</td>
      <td>${game.away}</td>
      <td>${game.date}</td>
      <td>${game.time}</td>
    `;
    gamesTableBody.appendChild(tr);
  });
}

sportFilter.addEventListener("change", renderGames);

// Show games when the page first loads
renderGames();
