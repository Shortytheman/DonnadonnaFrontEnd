import { name } from "./pages/survey/surveyNavn/surveyNavn.js"
import { age } from "./pages/survey/surveyAlder/surveyAlder.js"
import { allergies } from "./pages/survey/surveyAllergier/surveyAllergier.js"
import { email } from "./pages/survey/surveyEmail/surveyEmail.js"
import { frequence } from "./pages/survey/surveyFrekvens/surveyFrekvens.js"
import { abonnement } from "./pages/survey/surveyProdukter/surveyProdukter.js"
import { handleHttpErrors } from "./utils.js"

const customerURL = "https://donnadonna.azurewebsites.net/api/customers/"
const subscriptionURL = "https://donnadonna.azurewebsites.net/api/subscriptions/"

let customer;

export async function postPersonalDetails() {
  customer = {
    customerName: name,
    customerAge: age,
    customerEmail: email,
    customerAllergies: allergies,
    customerFreqeunce: frequence,
    customerAbonnement: abonnement
  }

  const options = {}
  options.method = "POST"
  options.headers = { "Content-type": "application/json" }
  options.body = JSON.stringify(customer)
  const addedCustomer = await fetch(customerURL, options).then(handleHttpErrors)
}

let subscription;

export async function postSubscription() {
  subscription = {
    tamponLight: abonnement[0],
    tamponRegular: abonnement[1],
    tamponMax: abonnement[2],
    sanitaryTowelLight: abonnement[3],
    sanitaryTowelRegular: abonnement[4],
    sanitaryTowelMax: abonnement[5],
    sanitaryTowelNight: abonnement[6],
    pantyLinersThin: abonnement[7],
    pantyLinersRegular: abonnement[8],
    pantyLinersGstring: abonnement[9]
  }

  const options = {}
  options.method = "POST"
  options.headers = { "Content-type": "application/json" }
  options.body = JSON.stringify(subscription)
  const addedCustomer = await fetch(subscriptionURL, options).then(handleHttpErrors)
}



export function getPopover() {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
}