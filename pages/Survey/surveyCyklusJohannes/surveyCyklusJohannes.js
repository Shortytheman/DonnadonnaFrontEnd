import { getPopover } from "../../../surveyUtils.js"
import { progressBarColor } from "../surveyBar.js"

export function initSurveyCyklusJohannes() {
  getPopover()
  progressBarColor("cyklus")
  document.getElementById("btn-datepickerNext").onclick = getDate
}

export let dateRange
function getDate(){
  dateRange = document.getElementById("datepicker").innerText
  console.log(dateRange)
}