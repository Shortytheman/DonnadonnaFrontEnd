import { name } from "./pages/survey/surveyNavn/surveyNavn.js"
import { age } from "./pages/survey/surveyAlder/surveyAlder.js"
import { allergies } from "./pages/survey/surveyAllergier/surveyallergier.js"

export function getPersonalDetails(){
  let person = {
    pName: name,
    pAge: age,
    pAllergies: allergies
  }
  console.log(person)
}

export function getPopover(){
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
    }