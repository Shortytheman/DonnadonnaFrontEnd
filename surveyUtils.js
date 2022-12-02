import { name } from "./pages/survey/surveyNavn/surveyNavn.js"
import { age } from "./pages/survey/surveyAlder/surveyAlder.js"
import { allergies } from "./pages/survey/surveyAllergier/surveyAllergier.js"
import { email } from "./pages/survey/surveyEmail/surveyEmail.js"

const customerURL = "https://donnadonna.azurewebsites.net/api/customers/"


export function getPersonalDetails(){
  let person = {
    customerName: name,
    customerAge: age,
    customerEmail: email,
    customerAllergies: allergies
  }
  console.log(person)
}

export function getPopover(){
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
    }