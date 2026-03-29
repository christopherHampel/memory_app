import '../scss/pages/_settings.scss';
import {GameSettings} from '../ts/types/GameSettings';

function getSelectedSettings(): GameSettings {
  const gameTheme = (document.querySelector('input[name="gameTheme"]:checked') as HTMLInputElement)?.value as GameSettings['gameTheme'];
  const playerColor = (document.querySelector('input[name="playerColor"]:checked') as HTMLInputElement)?.value as GameSettings['playerColor'];
  const boardSize = Number((document.querySelector('input[name="boardSize"]:checked') as HTMLInputElement)?.value) as GameSettings['boardSize'];

  return { 
    'gameTheme': gameTheme, 
    'playerColor': playerColor, 
    'boardSize': boardSize 
};
}

document.querySelector('.primary_btn')?.addEventListener('click', () => {
  const gameTheme = (document.querySelector('input[name="gameTheme"]:checked') as HTMLInputElement)?.value;
  const playerColor = (document.querySelector('input[name="playerColor"]:checked') as HTMLInputElement)?.value;
  const boardSize = (document.querySelector('input[name="boardSize"]:checked') as HTMLInputElement)?.value;

  const settings = {
    gameTheme,
    playerColor,
    boardSize
  };

  localStorage.setItem('gameSettings', JSON.stringify(settings));
  window.location.href = '../html/game.html';
});