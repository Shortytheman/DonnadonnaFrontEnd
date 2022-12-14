import { name } from "./pages/Survey/surveyNavn/surveyNavn.js"
import { age } from "./pages/Survey/surveyAlder/surveyAlder.js"
import { allergies } from "./pages/Survey/surveyallergier/surveyallergier.js"
import { email } from "./pages/Survey/surveyEmail/surveyEmail.js"
import { frequence } from "./pages/Survey/surveyFrekvens/surveyFrekvens.js"
import { getAbonnementer } from "./pages/Survey/SurveyProdukter/Surveyprodukter.js"
import { handleHttpErrors } from "./utils.js"
import { dateRange } from "./pages/Survey/surveyCyklus/surveyCyklus.js"

const customerURL = "http://localhost:8080/api/customers"
//const customerURL = "https://donnadonna.azurewebsites.net/api/customers/"
const subscriptionURL = "https://donnadonna.azurewebsites.net/api/subscriptions/"


export async function postPersonalDetails() {

const abonnement = getAbonnementer()


  let subscription = { 
    tamponLight: abonnement[0],
    tamponRegular: abonnement[1],
    tamponMax: abonnement[2],
    sanitaryTowelLight: abonnement[3],
    sanitaryTowelRegular: abonnement[4],
    sanitaryTowelMax: abonnement[5],
    sanitaryTowelNight: abonnement[6],
    pantyLinersThin: abonnement[7],
    pantyLinersRegular: abonnement[8],
    pantyLinersGstring: abonnement[9],
    deliveryInterval: frequence,
    firstDeliveryDate: dateRange 
} 

  

  let customer = {
    customerName: name,
    customerAge: age,
    customerEmail: email,
    customerAllergies: allergies,
    subscription: subscription
  }

  

  const options = {}
  options.method = "POST"
  options.headers = { "Content-type": "application/json" }
  options.body = JSON.stringify(customer)
  const addedCustomer = await fetch(customerURL, options).then(handleHttpErrors).catch(err => console.log(err))
}


/*let subscription;

function getSubscription() {
  return subscription = {
    tamponLight: abonnement[0],
    tamponRegular: abonnement[1],
    tamponMax: abonnement[2],
    sanitaryTowelLight: abonnement[3],
    sanitaryTowelRegular: abonnement[4],
    sanitaryTowelMax: abonnement[5],
    sanitaryTowelNight: abonnement[6],
    pantyLinersThin: abonnement[7],
    pantyLinersRegular: abonnement[8],
    pantyLinersGstring: abonnement[9],
    deliveryInterval: frequence,
    firstDeliveryDate: dateRange
  }
  
}

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
    pantyLinersGstring: abonnement[9],
    deliveryInterval: frequence,
    firstDeliveryDate: dateRange
  }

  const options = {}
  options.method = "POST"
  options.headers = { "Content-type": "application/json" }
  options.body = JSON.stringify(subscription)
  const addedCustomer = await fetch(subscriptionURL, options).then(handleHttpErrors)
}
*/

export function getPopover() {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
}




