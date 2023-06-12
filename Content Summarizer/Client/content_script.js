function getText()
{
    //extract the text from the webpage
    const text = document.body.innerText;
    console.log("text = \n",text);

    //send the text to the extension as a message
    chrome.runtime.sendMessage({text: text});
}

getText()