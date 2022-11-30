import {getPopover} from "../../../surveyUtils"
import { progressBarColor } from "../surveyBar.js"

export function initSurveyFrekvens() {
    getPopover()
    progressBarColor("frekvens")
    document.getElementById("btn-surveyFrekvens").onclick = getSurveyFrequence
}

export let frequence;
function getSurveyFrequence() {
    frequence = document.getElementById("custFrequence").value
    console.log(frequence);
}