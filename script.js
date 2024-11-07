function loadGame(gameUrl) {
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = `<iframe src="${gameUrl}" frameborder="0" width="100%" height="100%"></iframe>`;
}

