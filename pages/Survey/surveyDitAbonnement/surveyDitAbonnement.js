import { abonnement } from "../SurveyProdukter/Surveyprodukter.js"
import { sanitizeStringWithTableRows } from "../../../utils.js"



export function initDitAbonnement(){
let abonnementer = ""

for (let i = 0; i < abonnement.length; i++){
        abonnementer += ("<tr>" + 
        abonnement[i]
        + "</tr>")
    }
    
console.log(abonnement);
console.log(abonnementer);
document.getElementById("ditAbonnement").innerHTML = abonnementer
}
