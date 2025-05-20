const games = [
    {
        id: 1,
        title: "Game 1",
        description: "An exciting board game",
        image: "../assets/images/game1.jpg",
        category: "Strategy"
    },
    // Add more games here
];

function renderGames() {
    const container = document.getElementById('games-container');
    const gamesHTML = games.map(game => `
        <div class="game-card" data-id="${game.id}">
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <span class="category">${game.category}</span>
            <button class="btn-details">Learn More</button>
        </div>
    `).join('');
    
    container.innerHTML = gamesHTML;
}

document.addEventListener('DOMContentLoaded', renderGames);
