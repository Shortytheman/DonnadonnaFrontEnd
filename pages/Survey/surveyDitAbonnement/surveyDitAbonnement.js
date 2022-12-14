import { sanitizeStringWithTableRows } from "../../../utils.js"
import { progressBarColor } from "../surveyBar.js"
import { getAbonnementer } from "../SurveyProdukter/Surveyprodukter.js"
import { dateRange } from "../surveyCyklus/surveyCyklus.js"
import { frequence } from "../surveyFrekvens/surveyFrekvens.js"
import { postPersonalDetails } from "../../../surveyUtils.js"

export function initDitAbonnement() {
    progressBarColor("abonnement")

    document.getElementById("dato").innerText = "d. " + dateRange.substring(0,6) + "."
    document.getElementById("måned").innerText = frequence
    document.getElementById("bestilPleje").onclick = postPersonalDetails

    for (let i = 0; i < getAbonnementer().length; i++) {
        document.getElementById(i).innerText = getAbonnementer()[i]
    }
}


