var lastNum=0;
var roomsArray = 
			[ 
	{"label":"Superior Room","bedroomNbath":"One bedroom, one bathroom","bonus":"Reading area with desk","view":"City or courtyard view","imgSRC":"img/Superior_Room.jpg"},
    {"label":"Deluxe Room","bedroomNbath":"One bedroom, one bathroom","bonus":"Reading area with desk","view":"City or courtyard view","imgSRC":"img/Deluxe_Room.jpg"},
    {"label":"Executive Room","bedroomNbath":"One bedroom, one bathroom","bonus":"Connecting room available","view":"City or courtyard view","imgSRC":"img/Executive_Room.jpg"},
    {"label":"Executive Garden View Room","bedroomNbath":"One bedroom, one bathroom","bonus":"Connecting room available","view":"Partial Lake view, facing Brunswick ","imgSRC":"img/Executive_Garden.jpg"},
    {"label":"Premium Lake View Room","bedroomNbath":"One bedroom, one bathroom","bonus":"Connecting room available","view":"Partial Lake view, facing Brunswick ","imgSRC":"img/Premium_Lake.jpg"},
    {"label":"Premium Lake View Room","bedroomNbath":"One bedroom, one bathroom","bonus":"Connecting room available","view":"Lake view and balcony","imgSRC":"img/Premium_Lake.jpg"},
    {"label":"Junior Suite","bedroomNbath":"One bedroom","bonus":"Complimentary Wi-Fi","view":"Elegant contemporary style","imgSRC":"img/Junior_Suite.jpg"},
    {"label":"Ambassador Suite","bedroomNbath":"One bedroom","bonus":"Complimentary return transfers","view":"Bottle of champagne","imgSRC":"img/Premium_Lake_View_Suite.jpg"},
    {"label":"Lake View Junior Suite","bedroomNbath":"One bedroom","bonus":"Complimentary Wi-Fi","view":"Lake view and balcony","imgSRC":"img/Lake_View.jpg"},
    {"label":"Premium Lake View Suite","bedroomNbath":"One bedroom","bonus":"Additional room may be added","view":"Lake view and balcony","imgSRC":"img/Premium_Lake_View_Suite.jpg"},
    {"label":"Presidential Suite","bedroomNbath":"One bedroom","bonus":"Complimentary return transfers","view":"Bottle of champagne","imgSRC":"img/LRG_Presidential.jpg"},
    {"label":"Royal Armleder Suite","bedroomNbath":"One bedroom","bonus":"Complimentary return transfers","view":"Bottle of champagne","imgSRC":"img/Royal_Armleder.jpg"}
			];

function pagination(el)
	{
		let idShowBlock;
		if(el==0)
		{
			idShowBlock=parseInt(localStorage.lastItem);
		}
		else
		{
			idShowBlock=parseInt(el.id);
		}
		document.getElementById(idShowBlock).style.backgroundColor = 'rgba(240, 36, 36, 0.849)';
		let figArray = Array.from(document.querySelectorAll(".rooms figure"));
		let len=figArray.length;
		let startFig=idShowBlock;
		let itemsPerPage = 5;
		if(idShowBlock==1)
		{
			startFig=0;
		}
		for(let i=0; i<len; i++)
		{
			if(i>=itemsPerPage*idShowBlock||i<itemsPerPage*(startFig-1))
			{
				figArray[i].style.display='none';
			}
			else
			{
				figArray[i].style.display= "";
			}
		}
		localStorage.setItem('lastItem', idShowBlock);
		
	}
	
	
function paginationBar()
	{
		let rooms = document.getElementById("rooms");
		let itemsPerPage = 5;
		let div=document.getElementById("paginBar");
		let pagnButton =null;
		div.className='pagination_bar';
		let count =11;
		let numButtons = Math.ceil(count/itemsPerPage);
		let addTxT = ''
		for(let i =1;i<=numButtons;i++)
		{
			pagnButton = document.createElement('button');
			pagnButton.append(i);
			pagnButton.className = 'btnPagin';
			pagnButton.id=i;
			addTxT +="<button onclick='pagination(this)' class='btnPagin' id="+i+">"+i+"</button>"	
		}	
		div.innerHTML = addTxT;
		
	}

function webUrlChange()
	{ 
		let divId = window.location.hash.toString();
		
		let match = Array.from(document.querySelectorAll("main div"));
		let len = document.querySelectorAll("main div").length;
		let showDiv =  document.querySelectorAll(divId+" div");
		let showDivLen = document.querySelectorAll(divId+" div").length;
		for(let i=0; i<len; i++)
		{
			match[i].style.display='none';
		}
		let showBlock=document.getElementById(divId.slice(1)).style.display= "";
		for(let i=0; i<showDivLen; i++)
		{
			showDiv[i].style.display= "";
		}
		
	}


function createDivOfEvents()
	{
		let divEvents = document.createElement('div');
		divEvents.className = 'events';
		let divOccasion = document.createElement('div');
		divEvents.className = 'occasion';
		divEvents.after(divOccasion);
		document.main.append(divEvents);
	}
	

function createTable() { 
		let txt=''
		let MyJson = 
			[ 
				{ "name":"Вallroom","banqueting": 80,"boardroom":30,"cabaret":42,"classroom":50,"dinnerDancing":60,"reception":120,"theatre":90,"ushape":90,"ft2":"1,475","m2":137}, 
				{ "name":"Chambésy","banqueting": 30,"boardroom":15,"cabaret":15,"classroom":20,"dinnerDancing":'-',"reception":50,"theatre":90,"ushape":50,"ft2":"678","m2":63}, 
				{ "name":"Coppet","banqueting": 30,"boardroom":18,"cabaret":15,"classroom":20,"dinnerDancing":'-',"reception":50,"theatre":90,"ushape":50,"ft2":"646","m2":60}, 
				{ "name":"Coppet & Chambésy","banqueting": 70,"boardroom":33,"cabaret":30,"classroom":"45","dinnerDancing":70,"reception":100,"theatre":90,"ushape":84,"ft2":"1,324","m2":123}, 
				{ "name":"Paul Klee","banqueting": 100,"boardroom":30,"cabaret":56,"classroom":60,"dinnerDancing":80,"reception":140,"theatre":90,"ushape":115,"ft2":"1,561","m2":145}, 
				{ "name":"Paul Klee & Small Gallery","banqueting": 160,"boardroom":45,"cabaret":72,"classroom":80,"dinnerDancing":110,"reception":200,"theatre":90,"ushape":200,"ft2":"2,325","m2":210}, 
				{ "name":"Paul Klee & Large Gallery","banqueting": 200,"boardroom":"-","cabaret":'-',"classroom":'-',"dinnerDancing":150,"reception":280,"theatre":90,"ushape":'-',"ft2":"2,842","m2":318}, 
			];
		
		
			txt = txt +"<table>"
			txt +="<tr>"+"<th>SALON/STYLE</th>"+"<th>BANQUETING</th>"+"<th>BOARDROOM</th>"+"<th>CABARET</th>"
			+"<th>CLASSROOM</th>"+"<th>DINNER/DANCING</th>"+"<th>RECEPTION</th>"+"<th>THEATRE</th>"
			+"<th>U-SHAPE</th>"+"<th>FT2</th>"+"<th>m2</th>"+"</tr>";
			for (x in MyJson) {

				txt += "<tr>"+"<td>" + MyJson[x].name + "</td>"+"<td>"+MyJson[x].banqueting+"</td>"+"<td>"+MyJson[x].boardroom+"</td>"+"<td>"+MyJson[x].cabaret+"</td>"
				+"<td>"+MyJson[x].classroom+"</td>"+"<td>"+MyJson[x].dinnerDancing+"</td>"+"<td>"+MyJson[x].reception+"</td>"+"<td>"+MyJson[x].theatre+"</td>"
				+"<td>"+MyJson[x].ushape+"</td>"+"<td>"+MyJson[x].ft2+"</td>"+"<td>"+MyJson[x].m2+"</td>"+"</tr>";
			}
			txt += "</table>"        
			document.getElementById("tablePrice").innerHTML = txt;
	}

function filter()
{
	let figurs=''
	let div=document.getElementById('roomsView');
	let filter1=document.getElementById('bedBath').value;
	let filter2=document.getElementById('View').value;
	let filter3=document.getElementById('Benefits').value;
	let filterData=[];
	if(filter1!=0)
	{
		filterData=roomsArray.map(function(element) {
			if(element.bedroomNbath==filter1)
			{
				return element;
			}
		  });
	}
	if(filter2!=0)
	{
		filterData=filterData.map(function(element) {
			if(element!=undefined){
				if(element.view==filter2)
				{
					return element;
				}
			}
		  });
	}
	if(filter3!=0)
	{
		filterData=filterData.map(function(element) {
			if(element!=undefined){
				if(element.bonus==filter3)
				{
					return element;
				}
			}
		  });
	}
	console.log(filterData);
	console.log(filter1);
	for (x in filterData) 
	{
		if(filterData[x]!=undefined){
			figurs += "<figure> <img src='"+filterData[x].imgSRC+"'/><figcaption><h3>"
			+filterData[x].label+"</h3><ul><li>"+filterData[x].bedroomNbath+"</li><li>"
			+filterData[x].bonus+"</li><li>"+filterData[x].view+"</li></ul></figcaption></figure>"
		}
		
		
	}
		   
	div.innerHTML = figurs;
	document.getElementById("paginBar").innerHTML=null;
}
function createfig() { 
		let figurs=''
		let div=document.getElementById('roomsView');
	for (x in roomsArray) {
			figurs += "<figure> <img src='"+roomsArray[x].imgSRC+"'/><figcaption><h3>"+roomsArray[x].label+"</h3><ul><li>"+roomsArray[x].bedroomNbath+"</li><li>"+roomsArray[x].bonus+"</li><li>"+roomsArray[x].view+"</li></ul></figcaption></figure>"
	}
			       
		div.innerHTML = figurs;
		let divBar=document.getElementById("paginBar");
		if(divBar.value==null)
		{
			paginationBar();
		}
		pagination(0);
	}

function goToForm() 
	{ 
		let item = document.getElementById('reserv');
		item.scrollIntoView(true);
	}

(function () {
		var setting = {"height":540,"width":792,"zoom":17,"queryString":"Le Richemond, Rue Adhémar-Fabri, Женева, Швейцария","place_id":"ChIJf1A9c9V6jEcRC2XxGk5qiXs","satellite":false,"centerCoord":[46.20892371656499,6.148628449999989],"cid":"0x7b896a4e1af1650b","lang":"ru","cityUrl":"/switzerland/geneva","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"151711"};
		var d = document;
		var s = d.createElement('script');
		s.src = 'https://1map.com/js/script-for-user.js?embed_id=151711';
		s.async = true;
		s.onload = function (e) {
		  window.OneMap.initMap(setting)
		};
		var to = d.getElementsByTagName('script')[0];
		to.parentNode.insertBefore(s, to);
	  })();


function Show()
{
	let numOfshowing =3;
	var len = document.querySelectorAll("#slider figure").length;
	let slides = Array.from(document.querySelectorAll("#slider figure"));
	let i;
	for(i=0; i<len; i++)
		{
			slides[i].style.display='none';
		}
	for(i=0; i<3; i++)
	{
			slides[i].style.display='';
	}
	lastNum=3;
	document.getElementById('back').style.display='none';
}


function Slider(diraction)
{
	let numOfshowing =3;
	var len = document.querySelectorAll("#slider figure").length;
	let slides = Array.from(document.querySelectorAll("#slider figure"));
	let i;
	for(i=0; i<len; i++)
	{
		slides[i].style.display= "none";
	}
	if(diraction==1)
	{
		
		(function()
		{
			for(i=lastNum;i<lastNum+numOfshowing;i++)
			{
				if(slides[i]!=undefined)
				{
					slides[i].style.display= "";
					console.log(i);
				}
				else
				{
					break;
				}
			}
			
		
		})(i);
		lastNum=i;
		console.log("i")
		console.log(i)
		if(i==len)
		{
			document.getElementById('forward').style.display='none';
			document.getElementById('back').style.display='';
		}
		else
		{
			document.getElementById('forward').style.display='';
			document.getElementById('back').style.display='';
		}
	}
	else
	{
		console.log('');
		for(i=0; i<len; i++)
		{
			slides[i].style.display='none';
		}
		(function(){
		if(lastNum>3)
		{
				for(i=lastNum-numOfshowing-1;i>=lastNum-numOfshowing-3;i--)
				{
					if(slides[i]!=undefined&&i>=0)
					{
							slides[i].style.display= "";
							console.log(i);
						
					}
				}
				
				
		}
		else
		{
			for(i=lastNum-1;i>=lastNum-numOfshowing;i--)
				{
					if(slides[i]!=undefined&&i>=0)
					{
							slides[i].style.display= "";
							console.log(i);
						
					}
				}
		}
	
	})(i);
		console.log("lastNum")
		lastNum=i+1;
		console.log(lastNum)
		if(lastNum<=0)
		{
			document.getElementById('forward').style.display='';
			document.getElementById('back').style.display='none';
			lastNum=3;
		}
		else
		{
			document.getElementById('back').style.display='';
			document.getElementById('forward').style.display='';
			
		}
	}

}

	Show();
	createfig();
	pagination(0);
	window.onhashchange = webUrlChange;
	document.addEventListener("DOMContentLoaded",webUrlChange);

	
	