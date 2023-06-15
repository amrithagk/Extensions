function handleMessage(message)
{
    //message is a JavaScript object returned from the code in content_script.js

    let options = {
        method:"POST", 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(message)
    };
    
    fetch("http://127.0.0.1:5000/api/summarizer", options)
        .then(response=>response.json())
        .then((data)=>{
            /*
            above, response is a promise object returned containing the response from the server
            data is the Json object of the response data.
            */
           document.getElementById("summary").innerText = data["summary"];
        });
}

chrome.runtime.onMessage.addListener(handleMessage);