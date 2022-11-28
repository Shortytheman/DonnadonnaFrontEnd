import { getPopover } from "../../../surveyUtils.js";
import { progressBarColor } from "../surveyBar.js";

export function initSurveyAllergier() {
  getPopover()
  progressBarColor("allergier")
  document.getElementById("btn-surveyAllergierNext").onclick = getSurveyAllergies
}

export let allergies;
function getSurveyAllergies() {
  allergies = document.getElementById("custAllergies").value
  console.log(allergies);
}