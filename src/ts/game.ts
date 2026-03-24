import '../scss/pages/_game.scss';

createBoard();

function createBoard() {
    const gameField = document.getElementById('game-field');
    if (!gameField) return;

    for (let i = 0; i < 16; i++) {
        const box = document.createElement('div');
        box.classList.add('game-box');
        box.dataset.index = i.toString();
        // Optional: Inhalt oder EventListener hinzufügen
        gameField.appendChild(box);
    }
}