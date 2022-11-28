import {getPopover} from "../../../surveyUtils.js"
import {progressBarColor} from "../surveyBar.js"


export function initSurveyAlder() {
    getPopover()
    progressBarColor("alder")
    document.getElementById("btn-surveyAlderNext").onclick = getSurveyAge
}

export let age;
function getSurveyAge() {
  age = document.getElementById("custAge").value
  console.log(age);
}