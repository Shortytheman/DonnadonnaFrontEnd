import { getPopover } from "../../../surveyUtils.js"
import { progressBarColor } from "../surveyBar.js"

let initialized = false
export function initSurveyNavn() {
  if (!initialized) {
    document.getElementById("btn-surveyNameNext").onclick = getSurveyName
    getPopover()
    initialized = true
  }
  progressBarColor("navn")
}

export let name;
function getSurveyName() {
  name = document.getElementById("custName").value
  console.log(name);
}