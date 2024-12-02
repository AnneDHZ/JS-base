
const icones = document.querySelectorAll(".icone");

const container = document.querySelector(".container");

icones.forEach((icone) => {
    icone.addEventListener("click", function(){
        
        icone.classList.toggle("active")
        // icone.classList.add('active')

        if(icone.classList.contains("active")) {
            icone.classList.add("i-clicked")
            const backgroundColor = getComputedStyle(icone).backgroundColor;
            container.style.backgroundColor = backgroundColor;
        } else {
            icone.classList.remove("active")
            icone.classList.remove("i-clicked")
            container.style.backgroundColor = "#b4b1b1"
        }
    })
})

  
