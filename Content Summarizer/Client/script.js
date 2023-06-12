function handleMessage(message)
{
    console.log("handle message", message);
    let options = {
        method:"POST", 
        headers:{"Content-Type":"application/json"},
        body:message};
    
    fetch("http://127.0.0.1:5000/api/summarizer", options)
        .then((summary)=>{
            console.log("summary", summary)
            document.getElementById("summary").innerText += summary;
        });
}

chrome.runtime.onMessage.addListener(handleMessage);