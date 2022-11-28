import "./navigo.js"

import { setActiveLink, adjustForMissingHash, renderTemplate, loadHtml } from "./utils.js"

import { initSurveyNavn } from "./pages/survey/surveyNavn/surveyNavn.js"
import { initSurveyAlder } from "./pages/survey/surveyAlder/surveyAlder.js"
import { initSurveyAllergier } from "./pages/survey/surveyAllergier/surveyallergier.js"
import { initSurveyAllgergiInfo } from "./pages/survey/surveyAllergier/surveyAllergiInfo.js"
import { initSurveyProdukter } from "./pages/survey/surveyProdukter/Surveyprodukter.js"
import { initSurveyCyklus } from "./pages/survey/surveyCyklus/surveyCyklus.js"


window.addEventListener("load", async () => {

    const templateError = await loadHtml("./pages/error.html")
    const templateSurveyNavn = await loadHtml("./pages/survey/surveyNavn/surveyNavn.html")
    const templateSurveyAlder = await loadHtml("./pages/survey/surveyAlder/surveyAlder.html")
    const templateAllergier= await loadHtml("./pages/survey/surveyAllergier/surveyAllergier.html")
    const templateAllergiInfo= await loadHtml("./pages/survey/surveyAllergier/surveyAllergiInfo.html")
    const templateProdukter = await loadHtml("./pages/survey/surveyProdukter/surveyProdukter.html")
    const templateCyklus = await loadHtml("./pages/survey/surveyCyklus/surveyCyklus.html")
    

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
                initSurveyNavn()
            },
            "/survey-alder": () => {
                document.getElementById("surveybar").style.display = "block"
                renderTemplate(templateSurveyAlder, "content")
                initSurveyAlder()
            },
            "/survey-allergier": () => {
                document.getElementById("surveybar").style.display = "block"
                renderTemplate(templateAllergier, "content")
                initSurveyAllergier()
            },
            "/survey-allergiInfo": () => {
                document.getElementById("surveybar").style.display = "block"
                renderTemplate(templateAllergiInfo, "content")
                initSurveyAllgergiInfo()
            },
            "/survey-produkter": () => {
                document.getElementById("surveybar").style.display = "block"
                renderTemplate(templateProdukter, "content")
                initSurveyProdukter()
            },
            "/survey-cyklus": () => {
                document.getElementById("surveybar").style.display = "block"
                renderTemplate(templateCyklus, "content")
                initSurveyCyklus()
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
