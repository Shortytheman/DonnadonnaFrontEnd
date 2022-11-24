import "./navigo.js"

import { setActiveLink, adjustForMissingHash, renderTemplate, loadHtml } from "./utils.js"

//Popover functionality in Bootstrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

window.addEventListener("load", async () => {

    const templateSurveyBar = await loadHtml("./pages/Survey/surveyBar/surveyBar.html")
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
                document.getElementById("surveybar").innerHTML = ""},
            "/survey": () => {
                renderTemplate(templateSurveyBar, "surveybar")
                renderTemplate(templateSurveyNavn, "content")
                //indsæt js for survey
            },
            "/survey-alder": () => {
                renderTemplate(templateSurveyBar, "surveybar")
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
