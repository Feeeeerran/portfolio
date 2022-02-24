

let sobreMiElements = document.querySelectorAll('#sobreMi div p')
// let formacion = document.querySelectorAll()

// Animaciones para el sobreMi ////////////////////////////////
document.addEventListener('scroll', ()=> {
    sobreMi(window.scrollY)
})

function sobreMi(value) {
    if (value > outerHeight*0.5 && value < outerHeight*1.15) {
        sobreMiElements[0].classList.remove('fadeOut')
        sobreMiElements[0].classList.add('fadeIn-Left')
    } else {
        sobreMiElements[0].classList.remove('fadeIn-Left')
        sobreMiElements[0].classList.add('fadeOut')
    }

    if (value > outerHeight*0.65 && value < outerHeight*1.3) {
        sobreMiElements[1].classList.remove('fadeOut')
        sobreMiElements[1].classList.add('fadeIn-Right')
    } else {
        sobreMiElements[1].classList.remove('fadeIn-Right')
        sobreMiElements[1].classList.add('fadeOut')
    }

    if (value > outerHeight*0.80 && value < outerHeight*1.45) {
        sobreMiElements[2].classList.remove('fadeOut')
        sobreMiElements[2].classList.add('fadeIn-Left')
    } else {
        sobreMiElements[2].classList.remove('fadeIn-Left')
        sobreMiElements[2].classList.add('fadeOut')
    }

    if (value > outerHeight*0.90 && value < outerHeight*1.55) {
        sobreMiElements[3].classList.remove('fadeOut')
        sobreMiElements[3].classList.add('fadeIn-Right')
    } else {
        sobreMiElements[3].classList.remove('fadeIn-Right')
        sobreMiElements[3].classList.add('fadeOut')
    }
    
}
///////////////////////////////////////////////////////////////



// Para el clipboard al mail
let mailTo = document.querySelector("#contacto .mail")
let tip = document.querySelector("#contacto .tip")
mailTo.addEventListener("click",(e)=> {
    e.preventDefault()
    navigator.clipboard.writeText("oheydudeman@gmail.com")

    tip.classList.add("animTip")
    setTimeout(()=> {
        tip.classList.remove("animTip")
    },3000)

})


