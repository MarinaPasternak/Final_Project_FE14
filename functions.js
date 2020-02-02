var lastNum=0;
var roomsArray = 
			[ 
	{"label":"Superior Room","bedroomNbath":"One bedroom, one bathroom","bonus":"Reading area with desk","view":"City or courtyard view","imgSRC":"img/Superior_Room.jpg","price":495,'countRooms':5},
    {"label":"Deluxe Room","bedroomNbath":"One bedroom, one bathroom","bonus":"Reading area with desk","view":"City or courtyard view","imgSRC":"img/Deluxe_Room.jpg","price":545,'countRooms':5},
    {"label":"Executive Room","bedroomNbath":"One bedroom, one bathroom","bonus":"Connecting room available","view":"City or courtyard view","imgSRC":"img/Executive_Room.jpg","price":605,'countRooms':6},
    {"label":"Executive Garden View Room","bedroomNbath":"One bedroom, one bathroom","bonus":"Connecting room available","view":"Partial Lake view, facing Brunswick ","imgSRC":"img/Executive_Garden.jpg","price":705,'countRooms':5},
    {"label":"Premium Lake View Room","bedroomNbath":"One bedroom, one bathroom","bonus":"Connecting room available","view":"Partial Lake view, facing Brunswick ","imgSRC":"img/Premium_Lake.jpg","price": 795,'countRooms':8},
    {"label":"Premium Lake View Room","bedroomNbath":"One bedroom, one bathroom","bonus":"Connecting room available","view":"Lake view and balcony","imgSRC":"img/Premium_Lake.jpg","price":945,'countRooms':5},
    {"label":"Junior Suite","bedroomNbath":"One bedroom","bonus":"Complimentary Wi-Fi","view":"Elegant contemporary style","imgSRC":"img/Junior_Suite.jpg","price":1045,'countRooms':7},
    {"label":"Ambassador Suite","bedroomNbath":"One bedroom","bonus":"Complimentary return transfers","view":"Bottle of champagne","imgSRC":"img/Premium_Lake_View_Suite.jpg","price":1545,'countRooms':7},
    {"label":"Lake View Junior Suite","bedroomNbath":"One bedroom","bonus":"Complimentary Wi-Fi","view":"Lake view and balcony","imgSRC":"img/Lake_View.jpg","price":2545,'countRooms':5},
    {"label":"Premium Lake View Suite","bedroomNbath":"One bedroom","bonus":"Additional room may be added","view":"Lake view and balcony","imgSRC":"img/Premium_Lake_View_Suite.jpg","price":3345,'countRooms':5},
    {"label":"Presidential Suite","bedroomNbath":"One bedroom","bonus":"Complimentary return transfers","view":"Bottle of champagne","imgSRC":"img/LRG_Presidential.jpg","price":2545,'countRooms':5},
    {"label":"Royal Armleder Suite","bedroomNbath":"One bedroom","bonus":"Complimentary return transfers","view":"Bottle of champagne","imgSRC":"img/Royal_Armleder.jpg","price":11215,'countRooms':1}
			];
var MyJson = 
			[ 
				{ "name":"Balroom","banqueting": 80,"boardroom":30,"cabaret":42,"classroom":50,"dinnerDancing":60,"reception":120,"theatre":90,"ushape":90,"ft2":"1,475","m2":137}, 
				{ "name":"Coppet","banqueting": 30,"boardroom":18,"cabaret":15,"classroom":20,"dinnerDancing":'-',"reception":50,"theatre":90,"ushape":50,"ft2":"646","m2":60}, 
				{ "name":"Chambésy","banqueting": 30,"boardroom":15,"cabaret":15,"classroom":20,"dinnerDancing":'-',"reception":50,"theatre":90,"ushape":50,"ft2":"678","m2":63}, 
				{ "name":"Paul Klee & Large Gallery","banqueting": 200,"boardroom":"-","cabaret":'-',"classroom":'-',"dinnerDancing":150,"reception":280,"theatre":90,"ushape":'-',"ft2":"2,842","m2":318}, 
				{ "name":"Coppet & Chambésy","banqueting": 70,"boardroom":33,"cabaret":30,"classroom":"45","dinnerDancing":70,"reception":100,"theatre":90,"ushape":84,"ft2":"1,324","m2":123}, 
				{ "name":"Paul Klee","banqueting": 100,"boardroom":30,"cabaret":56,"classroom":60,"dinnerDancing":80,"reception":140,"theatre":90,"ushape":115,"ft2":"1,561","m2":145}, 
				{ "name":"Paul Klee & Small Gallery","banqueting": 160,"boardroom":45,"cabaret":72,"classroom":80,"dinnerDancing":110,"reception":200,"theatre":90,"ushape":200,"ft2":"2,325","m2":210}, 
				{ "name":"Paul Klee & Large Gallery","banqueting": 200,"boardroom":"-","cabaret":'-',"classroom":'-',"dinnerDancing":150,"reception":280,"theatre":90,"ushape":'-',"ft2":"2,842","m2":318}
			];
var SPAnCategory=
[
	{"spaLabel":"Phyto-aromatic facials","imgSRC":"img/s1.jpg","category":
	[
		{"label":"Phyto-Aromatic Hydrating Facial","discription":"<p>60 minutes</p><p>Designed with dehydrated skin in mind, this facial is extremely gentle, leaving the skin fresh and petal-soft.</p>"},
		{"label":"Phyto-Aromatic Purifying Facial","discription":"<p>60 minutes</p><p>Designed for combination, oily and problem skins, this targeted facial cleanses and purifies the skin while maintaining its water balance. The pores are tightened, the skin purified and the complexion evened out. The face restores its freshness and glow.</p>"},
		{"label":"Phyto-Aromatic Radiance Facial","discription":"<p>60 minutes</p><p>Perfect for restoring skin’s natural glow, this reviving facial helps to hide signs of fatigue and stress to leave skin looking radiant and luminous.</p>"},
		{"label":"Phyto-Aromatic Skin Perfecting Facial","discription":"<p>A truly unique experience with immediate results. This facial smooths expression lines and purifies the skin, revealing its radiance and freshness. A skin perfecting treatment targeting all causes responsible for dilated pores, revealing flawless-looking skin, even close-up.</p>"},
		{"label":"Phyto-Aromatic Comfort Extreme Facial","discription":"<p>60 minutes</p><p>Rich and soothing, this facial has been designed to treat dry skin types.</p><p>Nourishing and with extreme richness, this treatment helps the skin regain its elasticity to leave it feeling soft and hydrated.</p>"}
	]
},
	{"spaLabel":"Phyto-aromatic body treatments","imgSRC":"img/s2.jpg","category":
	[
		{"label":"Intensive Hydrating Energizing Phyto-Aromatic Body Treatment","discription":"<p>Combined with the benefits of essential oils, this intensive treatment brings softness and wellbeing to the body. Energy is rebalanced and the body is revitalised.</p>"},
		{"label":"Slimming and Firming Energizing Phyto-Aromatic Body Treatment","discription":"<p>60/90 minutes</p><p>Using the advanced technology and expertise of Sisley’s slimming products, this treatment offers the perfect combination of rhythmical modelling and the effectiveness of anti-cellulite techniques to leave the body feeling smooth and toned.</p>"},
		{"label":"Phyto-Aromatic Exfoliating Body Treatment","discription":"<p>30 minutes</p><p>This treatment combines aromatherapy and the effectiveness of an all-over reinvigorating body scrub, for skin that is soft and smooth to the touch. It is recommended before any body treatment.</p>"},
		{"label":"Phyto-Aromatic Back Treatment","discription":"<p>45 minutes</p><p>Due to a specific massage focusing on the spinal area, this treatment provides true relaxation and releases tension from the body. After the treatment, the skin is left purified, soft and hydrated.</p>"}
		
	]
},//fihish here
	{"spaLabel":"Massages","imgSRC":"img/s3.jpg","category":
	[
		{"label":"Intensive Hydrating Energizing Phyto-Aromatic Body Treatment","discription":"<p>Combined with the benefits of essential oils, this intensive treatment brings softness and wellbeing to the body. Energy is rebalanced and the body is revitalised.</p>"},
		{"label":"Slimming and Firming Energizing Phyto-Aromatic Body Treatment","discription":"<p>60/90 minutes</p><p>Using the advanced technology and expertise of Sisley’s slimming products, this treatment offers the perfect combination of rhythmical modelling and the effectiveness of anti-cellulite techniques to leave the body feeling smooth and toned.</p>"},
		{"label":"Phyto-Aromatic Exfoliating Body Treatment","discription":"<p>30 minutes</p><p>This treatment combines aromatherapy and the effectiveness of an all-over reinvigorating body scrub, for skin that is soft and smooth to the touch. It is recommended before any body treatment.</p>"},
		{"label":"Phyto-Aromatic Back Treatment","discription":"<p>45 minutes</p><p>Due to a specific massage focusing on the spinal area, this treatment provides true relaxation and releases tension from the body. After the treatment, the skin is left purified, soft and hydrated.</p>"}
		
	]
},
	{"spaLabel":"Experiences","imgSRC":"img/s4.jpg","category":
	[
		{"label":"Intensive Hydrating Energizing Phyto-Aromatic Body Treatment","discription":"<p>Combined with the benefits of essential oils, this intensive treatment brings softness and wellbeing to the body. Energy is rebalanced and the body is revitalised.</p>"},
		{"label":"Slimming and Firming Energizing Phyto-Aromatic Body Treatment","discription":"<p>60/90 minutes</p><p>Using the advanced technology and expertise of Sisley’s slimming products, this treatment offers the perfect combination of rhythmical modelling and the effectiveness of anti-cellulite techniques to leave the body feeling smooth and toned.</p>"},
		{"label":"Phyto-Aromatic Exfoliating Body Treatment","discription":"<p>30 minutes</p><p>This treatment combines aromatherapy and the effectiveness of an all-over reinvigorating body scrub, for skin that is soft and smooth to the touch. It is recommended before any body treatment.</p>"},
		{"label":"Phyto-Aromatic Back Treatment","discription":"<p>45 minutes</p><p>Due to a specific massage focusing on the spinal area, this treatment provides true relaxation and releases tension from the body. After the treatment, the skin is left purified, soft and hydrated.</p>"}
		
	]
},
	{"spaLabel":"Aesthetic services","imgSRC":"img/s5.jpg","category":
	[
		{"label":"Intensive Hydrating Energizing Phyto-Aromatic Body Treatment","discription":"<p>Combined with the benefits of essential oils, this intensive treatment brings softness and wellbeing to the body. Energy is rebalanced and the body is revitalised.</p>"},
		{"label":"Slimming and Firming Energizing Phyto-Aromatic Body Treatment","discription":"<p>60/90 minutes</p><p>Using the advanced technology and expertise of Sisley’s slimming products, this treatment offers the perfect combination of rhythmical modelling and the effectiveness of anti-cellulite techniques to leave the body feeling smooth and toned.</p>"},
		{"label":"Phyto-Aromatic Exfoliating Body Treatment","discription":"<p>30 minutes</p><p>This treatment combines aromatherapy and the effectiveness of an all-over reinvigorating body scrub, for skin that is soft and smooth to the touch. It is recommended before any body treatment.</p>"},
		{"label":"Phyto-Aromatic Back Treatment","discription":"<p>45 minutes</p><p>Due to a specific massage focusing on the spinal area, this treatment provides true relaxation and releases tension from the body. After the treatment, the skin is left purified, soft and hydrated.</p>"}
		
	]
},
	{"spaLabel":"Packages Sisley","imgSRC":"img/s6.jpg","category":
	[
		{"label":"Intensive Hydrating Energizing Phyto-Aromatic Body Treatment","discription":"<p>Combined with the benefits of essential oils, this intensive treatment brings softness and wellbeing to the body. Energy is rebalanced and the body is revitalised.</p>"},
		{"label":"Slimming and Firming Energizing Phyto-Aromatic Body Treatment","discription":"<p>60/90 minutes</p><p>Using the advanced technology and expertise of Sisley’s slimming products, this treatment offers the perfect combination of rhythmical modelling and the effectiveness of anti-cellulite techniques to leave the body feeling smooth and toned.</p>"},
		{"label":"Phyto-Aromatic Exfoliating Body Treatment","discription":"<p>30 minutes</p><p>This treatment combines aromatherapy and the effectiveness of an all-over reinvigorating body scrub, for skin that is soft and smooth to the touch. It is recommended before any body treatment.</p>"},
		{"label":"Phyto-Aromatic Back Treatment","discription":"<p>45 minutes</p><p>Due to a specific massage focusing on the spinal area, this treatment provides true relaxation and releases tension from the body. After the treatment, the skin is left purified, soft and hydrated.</p>"}
		
	]
},
	{"spaLabel":"Highlights","imgSRC":"img/s7.jpg","category":
	[
		{"label":"Intensive Hydrating Energizing Phyto-Aromatic Body Treatment","discription":"<p>Combined with the benefits of essential oils, this intensive treatment brings softness and wellbeing to the body. Energy is rebalanced and the body is revitalised.</p>"},
		{"label":"Slimming and Firming Energizing Phyto-Aromatic Body Treatment","discription":"<p>60/90 minutes</p><p>Using the advanced technology and expertise of Sisley’s slimming products, this treatment offers the perfect combination of rhythmical modelling and the effectiveness of anti-cellulite techniques to leave the body feeling smooth and toned.</p>"},
		{"label":"Phyto-Aromatic Exfoliating Body Treatment","discription":"<p>30 minutes</p><p>This treatment combines aromatherapy and the effectiveness of an all-over reinvigorating body scrub, for skin that is soft and smooth to the touch. It is recommended before any body treatment.</p>"},
		{"label":"Phyto-Aromatic Back Treatment","discription":"<p>45 minutes</p><p>Due to a specific massage focusing on the spinal area, this treatment provides true relaxation and releases tension from the body. After the treatment, the skin is left purified, soft and hydrated.</p>"}
		
	]
}
];	
 
var breadcrumbsLinks=['#Info'];

function breadcrumbs()
{
	let breadcrumbsDIV = document.getElementById('breadcrumbs');
	breadcrumbsDIV.style.display='';
	let breadcrumbsHTML='';
	for(let i=0;i<breadcrumbsLinks.length;i++)
	{
		breadcrumbsHTML+='<a href='+breadcrumbsLinks[i]+'>'+'/'+document.querySelector(breadcrumbsLinks[i]+" h1").innerHTML+'/'+'</a>';
	console.log(document.querySelector(breadcrumbsLinks[i]+" h1"));
}
	breadcrumbsDIV.innerHTML=breadcrumbsHTML;
	
}

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
		let curState = window.location.hash.toString();
		if(breadcrumbsLinks.indexOf(curState)==-1)
		{
			breadcrumbsLinks.push(curState);
		}
		else
		{
			breadcrumbsLinks=breadcrumbsLinks.slice(0,breadcrumbsLinks.indexOf(curState)+1)
		}
		breadcrumbs();
		console.log(breadcrumbsLinks);
		
	}


function createSPA()
	{
		let divSPA = document.getElementById('fillContent');
		let SPAcontent='';
		let idOfForm ="reservSPA";
		for (x in SPAnCategory) {
			SPAcontent += "<figure><h3>"+SPAnCategory[x].spaLabel+"</h3> <img src='"+SPAnCategory[x].imgSRC+"'/><figcaption><button class='centerButton' onclick='createCategory("+x+")'><a href='#CategorySPA'>Learn more</a></button></figcaption></figure>"
		}
		divSPA.innerHTML=SPAcontent;
		localStorage.setItem('lastSPACAt',0);
	}
	
function createCategory(x)
	{
		let divCategory = document.getElementById('Category');
		let SelectCategory = document.getElementById('Ttreatments');
		let SPAcontent='';
		let selectOptios='';
		console.log(x);
		SPAcontent+="<h1>"+SPAnCategory[x].spaLabel+"</h1>"
		for (y in SPAnCategory[x]['category']) {
			console.log(y);
			SPAcontent += "<div class='occasion'><h3>"+SPAnCategory[x]['category'][y]['label']+"</h3>"+SPAnCategory[x]['category'][y]['discription']+"</div>";
			selectOptios+="<option>"+SPAnCategory[x]['category'][y]['label']+"</option>"
		}
		SPAcontent+="<button class='centerButton'><a href='#SPA'>SPA</a></button>"
		divCategory.innerHTML=SPAcontent;
		localStorage.setItem('lastSPACAt', x);
		SelectCategory.innerHTML=selectOptios;
		document.getElementById('Ctreatments').innerHTML="<option>"+SPAnCategory[x].spaLabel+"</option>"
	}
	
	

function createTable() { 
		let txt=''
		let tableDiv = document.getElementById("tableDiv");
			txt = txt +"<table>"
			txt +="<tr>"+"<th>SALON/STYLE</th>"+"<th>BANQUETING</th>"+"<th>BOARDROOM</th>"+"<th>CABARET</th>"
			+"<th>CLASSROOM</th>"+"<th>DINNER/DANCING</th>"+"<th>RECEPTION</th>"+"<th>THEATRE</th>"
			+"<th>U-SHAPE</th>"+"<th>FT2</th>"+"<th>m2</th>"+"</tr>";
			for (x in MyJson) {

				txt += "<tr>"+"<td>" + MyJson[x].label + "</td>"+"<td>"+MyJson[x].banqueting+"</td>"+"<td>"+MyJson[x].boardroom+"</td>"+"<td>"+MyJson[x].cabaret+"</td>"
				+"<td>"+MyJson[x].classroom+"</td>"+"<td>"+MyJson[x].dinnerDancing+"</td>"+"<td>"+MyJson[x].reception+"</td>"+"<td>"+MyJson[x].theatre+"</td>"
				+"<td>"+MyJson[x].ushape+"</td>"+"<td>"+MyJson[x].ft2+"</td>"+"<td>"+MyJson[x].m2+"</td>"+"</tr>";
			}
			txt += "</table>"        
			tableDiv.innerHTML = txt;
			document.getElementById("createTable").style.display='none'
	}
function TableAvaibleRooms() { 
		let txt=''
		let tableDiv = document.getElementById("AvaibleRooms");
			txt = txt +"<table>"
			txt +="<tr>"+"<th>Style</th>"+"<th>Price</th>"+"<th>All rooms</th>"+"<th>Avaible</th></tr>";
			for (x in roomsArray) {
				
				txt += "<tr>"+"<td>" + roomsArray[x].label + "</td>"+"<td>"+roomsArray[x].price+"</td>"+"<td>"+roomsArray[x].countRooms+"</td>"+"<td>"+roomsArray[x].countRooms+"</td>"+"</tr>";
			}
			txt += "</table>"        
			tableDiv.innerHTML = txt;
			document.getElementById("createTable").style.display='none'
	}
	TableAvaibleRooms();
function sortTable()
	{
		let typeForString=document.getElementById('typeForString').value;
		let categorySort=document.getElementById('categorySort').value;
		let typeForNums=document.getElementById('typeForNums').value;
		if(typeForString!=0)
		{
			MyJson.sort(function(obj1, obj2) {
				if(typeForString=='A-Z')
				{
					if (obj1.name < obj2.name) return -1;
					if (obj1.name > obj2.name) return 1;
					return 0;
				}
				if(typeForString=='Z-A')
				{
					if (obj1.name > obj2.name) return -1;
					if (obj1.name < obj2.name) return 1;
					return 0;
				}
		  });
		}
		console.log(categorySort);
	
		  if(categorySort!=0 && typeForNums!=0)
		{
			MyJson.sort(function(obj1, obj2) {
				if(typeForNums=='1-9')
				{
					if (obj1[categorySort] < obj2[categorySort]) return -1;
					if (obj1[categorySort] > obj2[categorySort]) return 1;
					return 0;
				}
				if(typeForNums=='9-1')
				{
					if (obj1[categorySort] > obj2[categorySort]) return -1;
					if (obj1[categorySort] < obj2[categorySort]) return 1;
					return 0;
				}
		  });	
			
		}
		createTable();
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

function goToForm(idForm) 
	{ 
		
		idForm.scrollIntoView(true);
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
	createSPA();
	pagination(0);
	createCategory(localStorage.lastSPACAt);
	window.onhashchange = webUrlChange;
	document.addEventListener("DOMContentLoaded",webUrlChange);