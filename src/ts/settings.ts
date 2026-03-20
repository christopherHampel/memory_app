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
  const settings = getSelectedSettings();
  const settingsJSON = JSON.stringify(settings);
  // Hier kannst du das JSON speichern oder an dein Spiel weitergeben
  console.log(settings);
  // z.B. localStorage.setItem('gameSettings', settingsJSON);
  // window.location.href = '/path/to/game.html';
});