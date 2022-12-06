import {getPopover} from "../../../surveyUtils.js"
import {progressBarColor} from "../surveyBar.js"
import {name} from "../surveyNavn/surveyNavn.js"

export function initSurveyAlder() {
    getPopover()
    progressBarColor("alder")
    document.getElementById("btn-surveyAlderNext").onclick = getSurveyAge
    document.getElementById("printName").innerHTML=name;
}

export let age;
function getSurveyAge() {
  age = document.getElementById("custAge").value
  console.log(age);
}