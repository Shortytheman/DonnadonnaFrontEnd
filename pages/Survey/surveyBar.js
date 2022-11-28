
// prøv at smide display none her ind i stedet for css, hvis det ikke virker
// document.getElementById("progressBarColor").style.display = "block";

export async function progressBarColor(side) {
    if (side === "navn") {
        changeBackgroundColor(6)
        changeDisplay("none", "info")
    } else if (side === "alder") {
        changeBackgroundColor(5)
        changeDisplay("none", "info")
    } else if (side === "allergier"){
        changeBackgroundColor(4)
        changeDisplay("none", "info")
    } else if (side === "allergiinfo"){
        changeBackgroundColor(4)
        changeDisplay("block", "info")
    } else if (side === "produkter") {
        changeBackgroundColor(3)
        changeDisplay("block", "info")
    } else if (side === "cyklus") {
        changeBackgroundColor(2)
        changeDisplay("block", "info")
    } else if (side === "frekvens") {
        changeBackgroundColor(1)
        changeDisplay("block", "info")
    } else if (side === "svar") {
        changeBackgroundColor(0)
        changeDisplay("block", "info")
    }
} 

function changeBackgroundColor(number) {
    var count = 0;

    for (var i = 0; i < 7; i++) {
        if (number > i) {
            count++;
        }
    }

    if (count === 0) {
        changeColor("black", "alder")
        changeColor("black", "allergier")
        changeColor("black", "produkter")
        changeColor("black", "cyklus")
        changeColor("black", "frekvens")
        changeColor("black", "svar")
    } else if (count === 1) {
        changeColor("black", "alder")
        changeColor("black", "allergier")
        changeColor("black", "produkter")
        changeColor("black", "cyklus")
        changeColor("black", "frekvens")
        changeColor("white", "svar")
    } else if (count === 2) {
        changeColor("black", "alder")
        changeColor("black", "allergier")
        changeColor("black", "produkter")
        changeColor("black", "cyklus")
        changeColor("white", "frekvens")
        changeColor("white", "svar")
    } else if (count === 3) {
        changeColor("black", "alder")
        changeColor("black", "allergier")
        changeColor("black", "produkter")
        changeColor("white", "cyklus")
        changeColor("white", "frekvens")
        changeColor("white", "svar")
    } else if (count === 4) {
        changeColor("black", "alder")
        changeColor("black", "allergier")
        changeColor("white", "produkter")
        changeColor("white", "cyklus")
        changeColor("white", "frekvens")
        changeColor("white", "svar")
    } else if (count === 5)  {
        changeColor("black", "alder")
        changeColor("white", "allergier")
        changeColor("white", "produkter")
        changeColor("white", "cyklus")
        changeColor("white", "frekvens")
        changeColor("white", "svar")
    } else if (count === 6) {
        changeColor("white", "alder")
        changeColor("white", "allergier")
        changeColor("white", "produkter")
        changeColor("white", "cyklus")
        changeColor("white", "frekvens")
        changeColor("white", "svar")
    }
}

function getCurrentURL () {
    return window.location.href
  }

 function changeColor(color, elementId) {
     document.getElementById(elementId).style.backgroundColor = color
}

function changeDisplay(display, elementId) {
    document.getElementById(elementId).style.display = display
}