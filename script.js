// script.js
document.addEventListener('DOMContentLoaded', () => {
    const startGameButton = document.getElementById('start-game');
    const playersContainer = document.getElementById('players');
    const logContainer = document.getElementById('log');

    startGameButton.addEventListener('click', startGame);

    function startGame() {
        log('Game started!');
        setupPlayers(2);  // For simplicity, starting with 2 players
    }

    function setupPlayers(count) {
        playersContainer.innerHTML = '';
        for (let i = 1; i <= count; i++) {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('player');
            playerDiv.innerHTML = `
                <h2>Player ${i}</h2>
                <div>Coins: <span class="coins">2</span></div>
                <div>Influence: <span class="influence">2</span></div>
                <button class="income-btn">Income</button>
                <button class="coup-btn">Coup</button>
            `;
            playersContainer.appendChild(playerDiv);
        }
    }

    function log(message) {
        const entry = document.createElement('div');
        entry.classList.add('log-entry');
        entry.textContent = message;
        logContainer.appendChild(entry);
    }
});
