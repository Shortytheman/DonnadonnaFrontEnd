import "./navigo.js"

import { setActiveLink, adjustForMissingHash, renderTemplate, loadHtml } from "./utils.js"

//Popover functionality in Bootstrap


import {initSurvey, getPopover} from "./pages/survey/survey.js"
import {progressBarColor} from "./pages/survey/surveyBar.js"


window.addEventListener("load", async () => {

    const templateError = await loadHtml("./pages/error.html")
    const templateSurveyNavn = await loadHtml("./pages/survey/surveyNavn/surveyNavn.html")
    const templateSurveyAlder = await loadHtml("./pages/survey/surveyAlder/surveyAlder.html")
    const templateAllergier= await loadHtml("./pages/survey/surveyallergier/surveyallergier.html")
    const templateAllergiInfo= await loadHtml("./pages/survey/surveyallergier/surveyallergiInfo.html")
    const templateProdukter = await loadHtml("./pages/survey/SurveyProdukter/Surveyprodukter.html")

    adjustForMissingHash()

    const router = new Navigo("/", { hash: true});
    window.router = router
    router
        .hooks({
            before(done, match) {
                setActiveLink("menu", match.url)
                done()
            }
        })
        .on({
            "/": () => {document.getElementById("content").innerHTML = `
                <h2>donnadonna</h2>
                <p>donnadonna homepage</p>`; 
                document.getElementById("surveybar").style.display = "none"},
            "/survey": () => {
                document.getElementById("surveybar").style.display = "block"
                renderTemplate(templateSurveyNavn, "content")
                initSurvey()
                progressBarColor("navn")
                getPopover()
            },
            "/survey-alder": () => {
                document.getElementById("surveybar").style.display = "block"
                renderTemplate(templateSurveyAlder, "content")
                progressBarColor("alder")
                //indsæt js for surveyalder
            },
            "/survey-allergier": () => {
                document.getElementById("surveybar").style.display = "block"
                renderTemplate(templateAllergier, "content")
                progressBarColor("allergier")
            },
            "/survey-allergiInfo": () => {
                document.getElementById("surveybar").style.display = "block"
                renderTemplate(templateAllergiInfo, "content")
                progressBarColor("allergiinfo")
            },
            "/survey-produkter": () => {
                document.getElementById("surveybar").style.display = "block"
                renderTemplate(templateProdukter, "content")
                progressBarColor("produkter")
            },
        })
        .notFound(() => {
            renderTemplate(templateError, "content")
            document.getElementById("surveybar").style.display = "none"
        })
        .resolve()  
});

window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
    alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber
      + ' Column: ' + column + ' StackTrace: ' + errorObj);
  }
