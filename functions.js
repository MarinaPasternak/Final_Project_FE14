var slides = document.getElementsByClassName("slid");
var currentSlide = 0;

function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}

function goToSlide(n)
{
	slides[currentSlide].className = "slid";
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = "slid showing";
}




	function pagination(el)
	{
		let idShowBlock;
		if(el==undefined)
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
		let div=document.createElement('div');
		rooms.append(div);
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
	window.onhashchange = webUrlChange;
	document.addEventListener("DOMContentLoaded",webUrlChange);
	
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
				{ "name":"Вallroom","banqueting": "80","boardroom":"30","cabaret":"42","classroom":"50","dinnerDancing":"60","reception":"120","theatre":"90","ushape":"90","ft2":"1,475","m2":"137"}, 
				{ "name":"Chambésy","banqueting": "30","boardroom":"15","cabaret":"15","classroom":"20","dinnerDancing":"-","reception":"50","theatre":"90","ushape":"50","ft2":"678","m2":"63"}, 
				{ "name":"Coppet","banqueting": "30","boardroom":"18","cabaret":"15","classroom":"20","dinnerDancing":"-","reception":"50","theatre":"90","ushape":"50","ft2":"646","m2":"60"}, 
				{ "name":"Coppet & Chambésy","banqueting": "70","boardroom":"33","cabaret":"30","classroom":"45","dinnerDancing":"70","reception":"100","theatre":"90","ushape":"84","ft2":"1,324","m2":"123"}, 
				{ "name":"Paul Klee","banqueting": "100","boardroom":"30","cabaret":"56","classroom":"60","dinnerDancing":"80","reception":"140","theatre":"90","ushape":"115","ft2":"1,561","m2":"145"}, 
				{ "name":"Paul Klee & Small Gallery","banqueting": "160","boardroom":"45","cabaret":"72","classroom":"80","dinnerDancing":"110","reception":"200","theatre":"90","ushape":"200","ft2":"2,325","m2":"210"}, 
				{ "name":"Paul Klee & Large Gallery","banqueting": "200","boardroom":"-","cabaret":"-","classroom":"-","dinnerDancing":"150","reception":"280","theatre":"90","ushape":"-","ft2":"2,842","m2":"318"}, 
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

	function goToForm() 
	{ 
		let item = document.getElementById('reserv');
		item.scrollIntoView(true);
	}

	paginationBar();
	pagination(undefined);

	
	