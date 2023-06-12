function sendText(message)
{
    //send the text to the extension as a message
    console.log(message);
    chrome.runtime.sendMessage({text: message});
}

function getText()
{
    //extract the text from the webpage
    const text = document.body.innerText;
    console.log("text = \n",text);

    sendText(text);
}

getText()