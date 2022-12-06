import { sanitizeStringWithTableRows } from "../../../utils.js"
import { progressBarColor } from "../surveyBar.js"
import { getAbonnementer } from "../surveyProdukter/surveyProdukter.js"
import { dateRange } from "../surveyCyklusJohannes/surveyCyklusJohannes.js"
import { frequence } from "../surveyFrekvens/surveyFrekvens.js"

export function initDitAbonnement(){
    progressBarColor("abonnement")

    document.getElementById("dato").innerText = "d. " + dateRange.substring(0,6) + "."
    document.getElementById("måned").innerText = frequence

    let abonnementer = ""

for (let i = 0; i < getAbonnementer().length; i++){
        document.getElementById(i).innerText = getAbonnementer()[i]
    }
}


