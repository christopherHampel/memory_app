import "./scss/main.scss";

import { navigationService } from "./services/navigation-service";

const button = document.getElementById("btn");

button?.addEventListener("click", () => {
  console.log("Triggert");

  navigationService.navigateTo("/src/html/settings.html");
});

// init()

// function init(){
//     const fieldRef = document.getElementById('field');

//     if(fieldRef) {
//         fieldRef.addEventListener('click', e => {
//             const card = (e.target as HTMLElement ).closest(".card") as HTMLButtonElement;
//             if(card) {
//                 card.classList.toggle('is-flipped')
//             }
//         })
//     }
// }
