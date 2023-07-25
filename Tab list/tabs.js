function display(arr)
{
    const ol = document.createElement("ol");

    arr.map((tab, index)=>{

        let li = document.createElement("li");
        li.setAttribute("id", "tab"+index.toString());

        let anchor = document.createElement("a");
        anchor.setAttribute('class', "tab-link")
        anchor.setAttribute('href', tab.url);
        anchor.innerText = tab.title;

        anchor.addEventListener("click", function(event){
            
            let tag = event.target;
            chrome.tabs.query({url:tag.href}, function(tabs){

                if (tabs && tabs.length > 0)
                    chrome.tabs.update(tabs[0].id, {active : true})

            })
            //window.open(tag.href, "_blank")
        })

        li.appendChild(anchor);
        ol.appendChild(li);
    })
    document.getElementById("tab-list").appendChild(ol);
}


function getTabList()
{
    //to list the tabs in the current window
    chrome.tabs.query({currentWindow : true})
        .then(function(result){
            console.log(result);
            display(result);
        });

}

document.addEventListener("DOMContentLoaded", getTabList);
