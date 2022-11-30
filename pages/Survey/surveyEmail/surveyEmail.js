import {getPopover} from "../../../surveyUtils.js"
import {progressBarColor} from "../surveyBar.js"


export function initSurveyEmail() {
    getPopover()
    progressBarColor("email")
    document.getElementById("btn-surveyEmailNext").onclick = getSurveyEmail
}

export let email;
function getSurveyEmail() {
  email = document.getElementById("custEmail").value
  console.log(email);
}