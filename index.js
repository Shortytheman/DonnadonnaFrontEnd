import "./navigo.js"

import { setActiveLink, adjustForMissingHash, renderTemplate, loadHtml } from "./utils.js"
//import { getPersonalDetails } from "./surveyUtils.js"

import { initSurveyNavn } from "./pages/survey/surveyNavn/surveyNavn.js"
import { initSurveyAlder } from "./pages/survey/surveyAlder/surveyAlder.js"
import { initSurveyAllergier } from "./pages/survey/surveyAllergier/surveyAllergier.js"
import { initSurveyAllgergiInfo } from "./pages/survey/surveyAllergier/surveyAllergiInfo.js"
import { initSurveyProdukter } from "./pages/survey/surveyProdukter/surveyProdukter.js"
import { initSurveyEmail } from "./pages/survey/surveyEmail/surveyEmail.js"
import { initSurveyCyklus} from "./pages/survey/surveyCyklus/surveyCyklus.js"
import { initSurveyFrekvens } from "./pages/survey/surveyFrekvens/surveyFrekvens.js"
import { initDitAbonnement } from "./pages/survey/surveyDitAbonnement/surveyDitAbonnement.js"


window.addEventListener("load", async () => {

    const templateError = await loadHtml("./pages/error.html")
    const templateSurveyNavn = await loadHtml("./pages/survey/surveyNavn/surveyNavn.html")
    const templateSurveyAlder = await loadHtml("./pages/survey/surveyAlder/surveyAlder.html")
    const templateAllergier= await loadHtml("./pages/survey/surveyAllergier/surveyAllergier.html")
    const templateAllergiInfo= await loadHtml("./pages/survey/surveyAllergier/surveyAllergiInfo.html")
    const templateProdukter = await loadHtml("./pages/survey/surveyProdukter/surveyProdukter.html")
    const templateEmail = await loadHtml("./pages/survey/surveyEmail/surveyEmail.html")
    const templateFrekvens = await loadHtml("./pages/survey/surveyFrekvens/surveyFrekvens.html")

    const templateDitAbonnement = await loadHtml("./pages/survey/surveyDitAbonnement/SurveyditAbonnement.html")
    

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
                <p>donnadonna homepage</p>` 
                document.getElementById("surveybar").style.display = "none"
                document.getElementById("div-datepicker").style.display = "none"
            },
            "/survey": () => {
                document.getElementById("surveybar").style.display = "block"
                document.getElementById("div-datepicker").style.display = "none"
                renderTemplate(templateSurveyNavn, "content")
                initSurveyNavn()
            },
            "/survey-alder": () => {
                document.getElementById("surveybar").style.display = "block"
                document.getElementById("div-datepicker").style.display = "none"
                renderTemplate(templateSurveyAlder, "content")
                initSurveyAlder()
            },
            "/survey-allergier": () => {
                document.getElementById("surveybar").style.display = "block"
                document.getElementById("div-datepicker").style.display = "none"
                renderTemplate(templateAllergier, "content")
                initSurveyAllergier()
            },
            "/survey-allergiInfo": () => {
                document.getElementById("surveybar").style.display = "block"
                document.getElementById("div-datepicker").style.display = "none"
                renderTemplate(templateAllergiInfo, "content")
                initSurveyAllgergiInfo()
                //getPersonalDetails()
            },
            "/survey-produkter": () => {
                document.getElementById("surveybar").style.display = "block"
                document.getElementById("div-datepicker").style.display = "none"
                renderTemplate(templateProdukter, "content")
                initSurveyProdukter()
            },
            "/survey-cyklus": () => {
                document.getElementById("content").innerHTML = ""
                document.getElementById("surveybar").style.display = "block";
                document.getElementById("div-datepicker").style.display = "block";

                initSurveyCyklus()
            },
            "/survey-email": () => {
                document.getElementById("surveybar").style.display = "block";
                document.getElementById("div-datepicker").style.display = "none";
                renderTemplate(templateEmail, "content");
                initSurveyEmail()
            },
            "/survey-frekvens": () => {
                document.getElementById("surveybar").style.display = "block"
                document.getElementById("div-datepicker").style.display = "none";
                renderTemplate(templateFrekvens, "content")
                initSurveyFrekvens()
            }
            ,
            "/survey-ditAbonnement": () => {
                document.getElementById("surveybar").style.display = "block"
                document.getElementById("div-datepicker").style.display = "none";
                renderTemplate(templateDitAbonnement, "content")
                initDitAbonnement()
            }
        })
        .notFound(() => {
            renderTemplate(templateError, "content")
            document.getElementById("surveybar").style.display = "none"
            document.getElementById("div-datepicker").style.display = "none"
        })
        .resolve()  
});

window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
    alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber
      + ' Column: ' + column + ' StackTrace: ' + errorObj);
  }
