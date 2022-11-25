import { getPopover } from "../../../surveyUtils.js"
import {progressBarColor} from "../surveyBar.js"

let initialized = false
export function initSurveyNavn() {
  if (!initialized) {
    document.getElementById("surveyNameNext").onclick = getSurveyName
    getPopover()
    initialized = true
  }
  progressBarColor("navn")
}
function getSurveyName() {
  let name = document.getElementById("custName").value
  console.log(name);
}