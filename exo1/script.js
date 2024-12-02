const carre = document.querySelector(".carre");

carre.addEventListener("click", () => {
    let style = getComputedStyle(carre);
    console.log(style)
    alert(
        "Classe : " + carre.className + '\n' +
        "Largeur : " + style.width + '\n' +
        "Hauteur : " + style.height + '\n' +
        "Fond : " + style.backgroundColor + '\n' +
        "Couleur : " + style.color + '\n' +
        "Display : " + style.display + '\n' +
        "Display : " + style.alignItems + '\n' +
        "Display : " + style.justifyContent + '\n' +
        "Police : " + style.fontFamily + "( " +  style.fontSize  + " )"
    );
})
