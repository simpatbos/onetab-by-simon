document.getElementById("tabsButton").addEventListener("click", getTabs)

async function getTabs(){
	const tabs = await chrome.tabs.query({})

	for (let tab in tabs) {
		let element = document.createElement("h1")
		if (tabs[tab].windowId == (await chrome.windows.getLastFocused()).id) {
			let element = document.createElement("li")
			element.appendChild(document.createTextNode(tabs[tab].title))
		
			document.getElementById("tabsList").appendChild(element)
		} else {
			
		}
	}

}

//{"active":false,"audible":false,"autoDiscardable":true,"discarded":false,"favIconUrl":"https://www.bing.com/sa/simg/favicon-trans-bg-blue-mg.ico","groupId":-1,"height":915,"highlighted":false,"id":1568354060,"incognito":false,"index":1,"mutedInfo":{"muted":false},"pinned":false,"selected":false,"status":"complete","title":"lightweight code editors - Search","url":"https://www.bing.com/search?q=lightweight+code+editors&cvid=b08d77938e164135ac9eda0f79e0466f&aqs=edge..69i57j0l8.86261j0j1&pglt=297&FORM=ANSPA1&PC=U531","width":1920,"windowId":1568354059}


	

