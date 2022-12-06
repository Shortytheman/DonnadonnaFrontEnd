import {getPopover} from "../../../surveyUtils.js"
import { progressBarColor } from "../surveyBar.js"

export function initSurveyFrekvens() {
    getPopover()
    progressBarColor("frekvens")
    document.getElementById("overordnet").onclick = getSurveyId
}

export let frequence;

function getSurveyId(evt){
    if (evt.target.id.includes("hver")){
    frequence = evt.target.id
}
console.log(frequence);
}


