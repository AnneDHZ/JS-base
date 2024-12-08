
// selectionne tous les carrés
const tousLesCarres = document.querySelectorAll(".carre");

const carre5 = document.querySelector(".carre5");


tousLesCarres.forEach((unCarre) => {
    unCarre.addEventListener("click", () => {
        let bgColor = getComputedStyle(unCarre).backgroundColor;
  
        // assigne le texte property bgColor
        carre5.innerText = bgColor;
        // assigne la couleur du bgColor de l'autre carré
        carre5.style.backgroundColor =bgColor;
    });
})

