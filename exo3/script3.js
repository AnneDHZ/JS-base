const tousLesCarres = document.querySelectorAll(".carre");

tousLesCarres.forEach((unCarre) => {
    unCarre.addEventListener("click", function() {
        unCarre.classList.toggle("carre-clicked")
    })


    // si on veut juste changer sur un click
    //     unCarre.style.backgroundColor = "red"; 
    //     unCarre.style.transition = "1s"; 
    //     unCarre.style.transform = "scale(0.9)"+ "rotate(360deg)";
    // })
  

    unCarre.addEventListener("mouseover", function(){
        unCarre.style.cursor = "pointer";

    });
})
