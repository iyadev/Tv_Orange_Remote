const port = "8080"
const url2 = "&key=";
const url3 = "&mode=" ; 
	
	// Reset ip address
	function RemoveBoxIp()
	{
		var r = confirm("Oublier l'adresse Ip ?");
		if (r == true)
			localStorage['tvBoxIp'] ="" ; 
	}
	
	// Définir l'adresse IP
	function GetBoxIp()
	{
		if (!localStorage['tvBoxIp'])
			{
				var result = prompt("Adresse Ip de la box tv :","");
				if (result != "")
				{
					localStorage['tvBoxIp'] = result;
				} 
			}
		return localStorage['tvBoxIp'] ;  
	}
	
	// Générer l'url
	function GenerateUrl()
	{
		var ip = GetBoxIp();
		if(ip != "")
			return "http://" + ip + ":" + port + "/remoteControl/cmd?operation="; 
		else
			return "";
	}
	
	// Send Key to the tv box
	function sendKey(key)
	{
		var url = GenerateUrl();
		if(url != "")
		{
			var req = new XMLHttpRequest();
			req.open('GET', url + "01" + url2 + key + url3 + "0", true);
			console.log(url + "01" + url2 + key + url3 + "0");
			req.onreadystatechange = function (aEvt) {
			  if (req.readyState == 4) {
				 if(req.status == 200)
				  console.log(req.responseText);
				 else
				  console.log("Erreur\n");
			  }
			};
			req.send(null);
		}
		else
		{
			console.log("Ip not defined !");
		}
	}
	
	// Define action for all button
	function setClick()
	{
		// Power
		document.getElementById("btnPower").onclick = function() { sendKey("116") };
		
		// Menu
		document.getElementById("btnMenu").onclick = function() { sendKey("139"); };
		
		// Retour
		document.getElementById("btnBack").onclick = function() { sendKey("158"); };
		
		// Nav
		document.getElementById("btnUp").onclick = function() { sendKey("103"); };
		document.getElementById("btnDown").onclick = function() { sendKey("108"); };
		document.getElementById("btnLeft").onclick = function() { sendKey("105"); };
		document.getElementById("btnRight").onclick = function() { sendKey("116"); };
		document.getElementById("btnOk").onclick = function() { sendKey("352"); };
	
		// Channel number
		document.getElementById("btn1").onclick = function() { sendKey("513"); };
		document.getElementById("btn2").onclick = function() { sendKey("514"); };
		document.getElementById("btn3").onclick = function() { sendKey("515"); };
		document.getElementById("btn4").onclick = function() { sendKey("516"); };
		document.getElementById("btn5").onclick = function() { sendKey("517"); };
		document.getElementById("btn6").onclick = function() { sendKey("518"); };
		document.getElementById("btn7").onclick = function() { sendKey("519"); };
		document.getElementById("btn8").onclick = function() { sendKey("520"); };
		document.getElementById("btn9").onclick = function() { sendKey("521"); };
		document.getElementById("btn0").onclick = function() { sendKey("512"); };
	
		// Change
		document.getElementById("btnChMore").onclick = function() { sendKey("402"); };
		document.getElementById("btnChLess").onclick = function() { sendKey("403"); };
		document.getElementById("btnVolMore").onclick = function() { sendKey("115"); };
		document.getElementById("btnVolLess").onclick = function() { sendKey("114"); };
		
		//
		document.getElementById("btnSetting").onclick = function() { RemoveBoxIp(); };
	}
	
	window.onload = 
	function()
	{
		setClick();
	};
	
	
