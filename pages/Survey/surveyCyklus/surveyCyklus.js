import { getPopover } from "../../../surveyUtils.js"
import {progressBarColor} from "../surveyBar.js"

let initialized = false
export function initSurveyCyklus() {
  if (!initialized) {
    getPopover()
    initialized = true
  }
  progressBarColor("navn")
}