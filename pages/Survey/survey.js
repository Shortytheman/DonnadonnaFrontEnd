/*let initialized = false
    export function initSurvey(){
        if (!initialized){
            document.getElementById("surveyNameNext").onclick = getSurveyName
            initialized = true
        }
    }
  function getSurveyName(){
    let name = document.getElementById("custName").value
    console.log(name);
  }

*/

/*async function surveyResults(){

    const custName = document.getElementById('custName').value
    const custEmail = document.getElementById('custEmail').value
    const custAge = document.getElementById('custAge').value
    const custAllergies = document.getElementById('custAllergies').value

    const customerDetails = {
        customerName: custName,
        customerEmail: custEmail,
        custAge: custAge,
        custAllergies: custAllergies
    }

    const options = {}
        options.method = "POST"
        options.headers = { "Content-type": "application/json" }
        options.body = JSON.stringify(customerDetails)
        const addedCustomer = await fetch(customerURL, options).then(handleHttpErrors)
    
  }
  */