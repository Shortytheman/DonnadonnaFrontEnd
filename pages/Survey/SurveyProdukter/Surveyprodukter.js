import { getPopover } from "../../../surveyUtils.js";


export function initSurveyProdukter() {
  getPopover()
  document.getElementById("Produkter").onclick = virkerIkke
}


export function virkerIkke(evt) {
  const targetId = evt.target.id
  let num = 0;
  let plus;
  let minus;
  let result = 0;
  let a = 0;
  
  if (targetId.includes("minus")) {
    minus = document.getElementById(targetId)
    result = targetId.substring(5, 6)

    a = document.getElementById("num" + result).innerText
      if (a > 0) {
        a--;
        a = (a < 10) ? "0" + a : a;
        let element = document.getElementById("num" + result)
        element.innerText = a;
      }
    
  } 
  
  else if (targetId.includes("plus")) {
    plus = document.getElementById(targetId)
    result = targetId.substring(4, 5)

    a = document.getElementById("num" + result).innerText

      a++;
      a = (a < 10) ? "0" + a : a;
      let element = document.getElementById("num" + result)
      element.innerText = a;
    
  }
}