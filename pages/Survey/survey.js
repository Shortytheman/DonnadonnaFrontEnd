

let initialized = false
    var name = ""
    export function initSurvey(){
        if (!initialized){
            document.getElementById("surveyNameNext").onclick = getSurveyName
            initialized = true
        }
    }

    //const custEmail = document.getElementById('custEmail').value
    //const custAllergies = document.getElementById('custAllergies').value




  function getSurveyName(){
    var name = document.getElementById("custName").value
    console.log(name);
  }









/*async function surveyResults(){

    const custName = document.getElementById('custName').value
    const custEmail = document.getElementById('custEmail').value
    const custAge = document.getElementById('custAge').value
    const custAllergies = document.getElementById('custAllergies').value

    const customerDetails = {
        customerName: custName,
        customerEmail: custEmail,
        phoneNumber: custPhone,
        companyName: compName,
        cvrNumber: compCVR
    }

    const options = {}
        options.method = "POST"
        options.headers = { "Content-type": "application/json" }
        options.body = JSON.stringify(customerDetails)
        const addedCustomer = await fetch(customerURL, options).then(handleHttpErrors)
    
  }
  */