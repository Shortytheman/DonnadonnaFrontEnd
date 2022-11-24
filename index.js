import "./navigo.js"

import { setActiveLink, adjustForMissingHash, renderTemplate, loadHtml } from "./utils.js"

//Popover functionality in Bootstrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

import {initSurvey} from "./pages/Survey/survey.js"

window.addEventListener("load", async () => {

    const templateSurveyNavn = await loadHtml("./pages/Survey/surveyNavn/surveyNavn.html")
    const templateSurveyAlder = await loadHtml("./pages/Survey/surveyAlder/surveyAlder.html")

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
            },
            "/survey-alder": () => {
                renderTemplate(templateSurveyAlder, "content")
                //indsæt js for surveyalder
            }
        })
        .notFound(() => {
            renderTemplate(templateSurveyAlder, "content")
        })
        .resolve()
});

window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
    alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber
      + ' Column: ' + column + ' StackTrace: ' + errorObj);
  }
