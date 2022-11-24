
// prøv at smide display none her ind i stedet for css, hvis det ikke virker
// document.getElementById("progressBarColor").style.display = "block";

export async function progressBarColor(side) {
    


    // Skift til korrekt URL
    if (side === "navn") {
        changeBackgroundColor(6)
    } else if (side === "alder") {
        changeBackgroundColor(5)
    } else if (side === "allergier"){
        changeBackgroundColor(4)
        changeDisplay("block", "info")
    } else if (side === "produkter") {
        changeBackgroundColor(3)
    } else if (side === "cyklus") {
        changeBackgroundColor(2)
    } else if (side === "frekvens") {
        changeBackgroundColor(1)
    } else if (side === "svar") {
        changeBackgroundColor(0)
    }
} 

function changeBackgroundColor(number) {
    var count = 5;

    //for (var i = 0; i < 7; i++) {
    //    if (number > i) {
    //        count++;
    //    }
    //}

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
        changeColor("rgb(255, 102, 102)", "alder")
        changeColor("rgb(255, 102, 102)", "allergier")
        changeColor("rgb(255, 102, 102)", "produkter")
        changeColor("rgb(255, 102, 102)", "cyklus")
        changeColor("rgb(255, 102, 102)", "frekvens")
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