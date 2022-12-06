import { getPopover } from "../../../surveyUtils.js";
import { progressBarColor } from "../surveyBar.js";


export function initSurveyProdukter() {
  getPopover()
  document.getElementById("Produkter").onclick = produktValg
  document.getElementById("fortsæt").onclick = hentAbonnement
  progressBarColor("produkter")
}


export function produktValg(evt) {
  const targetId = evt.target.id
  let plus;
  let minus;
  let result = 0;
  let a;

  if (targetId.includes("minus")) {
    minus = document.getElementById(targetId)
    if (targetId === "minus10") {
      result = targetId.substring(5, 7)
    } else {
      result = targetId.substring(5, 6)
    }

    a = document.getElementById("num" + result).innerText
    if (a > 0) {
      a--;
      let element = document.getElementById("num" + result)
      element.innerText = a;
    }
  }

  else if (targetId.includes("plus")) {

    plus = document.getElementById(targetId)
    if (targetId === "plus10") {
      result = targetId.substring(4, 6)
    } else {
      result = targetId.substring(4, 5)
    }
    a = document.getElementById("num" + result).innerText
    a++;
    let element = document.getElementById("num" + result)
    element.innerText = a;
  }

  let intNumber;


  console.log(a);
  if (targetId.includes("plus")) {
    if (result < 4 & result > 0) {
      intNumber = parseInt(document.getElementById("tamponer").innerText);
      let results = (intNumber + 1)
      document.getElementById("tamponer").innerText = results
    } if (result < 8 & result > 3) {
      intNumber = parseInt(document.getElementById("bind").innerText);
      let results = (intNumber + 1)
      document.getElementById("bind").innerText = results
    } if (result < 11 & result > 7) {
      intNumber = parseInt(document.getElementById("trusseindlæg").innerText);
      let results = (intNumber + 1)
      document.getElementById("trusseindlæg").innerText = results
    }
  } else if (targetId.includes("minus")) {
    if (result < 4 & result > 0 & (parseInt(document.getElementById("tamponer").innerText) > 0)) {
      intNumber = parseInt(document.getElementById("tamponer").innerText);
      let results = (intNumber - 1)
      document.getElementById("tamponer").innerText = results
    } if (result < 8 & result > 3 & (parseInt(document.getElementById("bind").innerText) > 0)) {
      intNumber = parseInt(document.getElementById("bind").innerText);
      let results = (intNumber - 1)
      document.getElementById("bind").innerText = results
    } if (result < 11 & result > 7 & (parseInt(document.getElementById("trusseindlæg").innerText) > 0)) {
      intNumber = parseInt(document.getElementById("trusseindlæg").innerText);
      let results = (intNumber - 1)
      document.getElementById("trusseindlæg").innerText = results
    }
  }
}


export let abonnement = []
function hentAbonnement(){
  
  //abonnement = []
  
  //Fylder listen op med antal af produkter fra 0 til 9 som numrene er lavet i HTML (0 = tampon, let. 1 = tampon, regulært osv.)
  for (let i = 1; i < 11; i++){
    abonnement.push(document.getElementById("num" + i).innerText)
  }
  console.log(abonnement);
}
/*
export function getAbonnement(){
  return abonnement;
}*/