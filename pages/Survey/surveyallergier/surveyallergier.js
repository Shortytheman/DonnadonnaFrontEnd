import { getPopover } from "../../../surveyUtils.js";
import { progressBarColor } from "../surveyBar.js";

export function initSurveyAllergier() {
  getPopover()
  progressBarColor("allergier")
  document.getElementById("myCheck").onclick = removebox
  document.getElementById("btn-surveyAllergierNext").onclick = getSurveyAllergies
}

function removebox() {
  if (document.getElementById('myCheck').checked) {
      document.getElementById('custAllergies').style.display = 'none';
  } else {
      document.getElementById('custAllergies').style.display = 'block';
  }
}

export let allergies;
function getSurveyAllergies() {
  allergies = document.getElementById("custAllergies").value
  console.log(allergies);
}