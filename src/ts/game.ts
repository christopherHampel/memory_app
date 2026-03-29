import { log } from 'node:console';
import '../scss/pages/_game.scss';

const settingsJSON = localStorage.getItem('gameSettings');

if (settingsJSON) {
  const settings = JSON.parse(settingsJSON);
  if (settings.gameTheme) {
    document.body.classList.add(`theme--${settings.gameTheme}`);
  }
  console.log(settingsJSON);
}

// createBoard();

// function createBoard() {
//     const gameField = document.getElementById('game-field');
//     if (!gameField) return;

//     for (let i = 0; i < 16; i++) {
//         const box = document.createElement('div');
//         box.classList.add('game-box');
//         box.dataset.index = i.toString();
//         // Optional: Inhalt oder EventListener hinzufügen
//         gameField.appendChild(box);
//     }
// }