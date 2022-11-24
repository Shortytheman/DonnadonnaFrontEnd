    
    
    
    


    document.getElementById("surveyNameNext").onclick = getSurveyName

    //const custEmail = document.getElementById('custEmail').value
    //const custAllergies = document.getElementById('custAllergies').value




  async function getSurveyName(){
    var name = document.getElementById("surveyNameNext").value
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