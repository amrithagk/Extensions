function handleMessage(message)
{
    let options = {
        method:"POST", 
        headers:{"Content-Type":"application/json"},
        body:message};
    
    fetch("localhost:5000/api/summarizer", options)
        .then((summary)=>{
            console.log(summary)
            document.getElementById("summary").innerText += summary;
        });
}

chrome.runtime.onMessage.addListener(handleMessage);