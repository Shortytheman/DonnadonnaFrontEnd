import "./navigo.js"

import { setActiveLink, adjustForMissingHash, renderTemplate, loadHtml } from "./utils.js"
//import { getPersonalDetails } from "./surveyUtils.js"

import { initSurveyNavn } from "./pages/Survey/surveyNavn/surveyNavn.js"
import { initSurveyAlder } from "./pages/Survey/surveyAlder/surveyAlder.js"
import { initSurveyAllergier } from "./pages/Survey/surveyallergier/surveyallergier.js"
import { initSurveyAllgergiInfo } from "./pages/Survey/surveyallergier/surveyallergiInfo.js"
import { initSurveyProdukter } from "./pages/Survey/SurveyProdukter/Surveyprodukter.js"
import { initSurveyEmail } from "./pages/Survey/surveyEmail/surveyEmail.js"
import { initSurveyCyklus} from "./pages/Survey/surveyCyklus/surveyCyklus.js"
import { initSurveyFrekvens } from "./pages/Survey/surveyFrekvens/surveyFrekvens.js"
import { initDitAbonnement } from "./pages/Survey/surveyDitAbonnement/surveyDitAbonnement.js"



window.addEventListener("load", async () => {

    const templateForside = await loadHtml("./pages/forside/forside.html")
    const templateError = await loadHtml("./pages/error.html")
    const templateSurveyNavn = await loadHtml("./pages/Survey/surveyNavn/surveyNavn.html")
    const templateSurveyAlder = await loadHtml("./pages/Survey/surveyAlder/surveyAlder.html")
    const templateAllergier= await loadHtml("./pages/Survey/surveyallergier/surveyallergier.html")
    const templateAllergiInfo= await loadHtml("./pages/Survey/surveyallergier/surveyallergiInfo.html")
    const templateProdukter = await loadHtml("./pages/Survey/surveyProdukter/surveyProdukter.html")
    const templateEmail = await loadHtml("./pages/Survey/surveyEmail/surveyEmail.html")
    const templateFrekvens = await loadHtml("./pages/Survey/surveyFrekvens/surveyFrekvens.html")

    const templateDitAbonnement = await loadHtml("./pages/Survey/surveyDitAbonnement/SurveyditAbonnement.html")
    

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
            
            "/": () => {
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
