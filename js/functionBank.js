// JavaScript Document
	
function getRandomInt(min, max) {
  return Math.round(Math.floor(Math.random() * (max - min))) + min;
}

function zeroToOne() {

	window.open("index.html#page1", target="_self");

}

function oneToTwo() {
	
	window.open("index.html#page2", target="_self");
}

function sceneOne(){

$(document).ready(function() {

rand1 = getRandomInt(1, 80); 
	
	if (rand1 <= 20) {
				
		window.open("index.html#page3", target="_self");	
	}
		
	else if (rand1 <= 40) {
		
		window.open("index.html#page4", target="_self");
	}
		
    else if (rand1 <= 60) {
		
		window.open("index.html#page5", target="_self");
	}
		
    else {
		
		window.open("index.html#page6", target="_self");
	}
	
	
});
	
}

function sceneTwo()  {
	
	$(document).ready(function() {
		
    rand2 = getRandomInt(1, 80);
	
	if (rand2 <= 20) {
		
		window.open("index.html#page7", target="_self");
	}
	
	else if (rand2 <= 40) {
		
		window.open("index.html#page8", target="_self");
	}
	
	else if (rand2 <= 60) {
		
		window.open("index.html#page9", target="_self");
	}
	
	else  {
		
		window.open("index.html#page10", target="_self");
	}
  });
}


function three() {
	
	$(document).ready(function() {

	rand3 = getRandomInt(1, 80);
	
	if (rand3 <= 20) {
				
		window.open("index.html#page12", target="_self");	
	}
		
	else if (rand3 <= 40) {
		
		window.open("index.html#page13", target="_self");
	}
		
    else if (rand3 <= 60) {
		
		window.open("index.html#page14", target="_self");
	}
		
    else {
		
		window.open("index.html#page15", target="_self");
	}
	});
}


	


function eleven()  {
		
	$(document).ready(function() {
	
	window.open("index.html#page11", target="_self");
  });
}

function closeEight() {
	
	window.open("index.html#page11", target="_self");
}

function closeNine()  {
	
	window.open("index.html#page11", target="_self");	
}

function closeTen()  {
	
	window.open("index.html#page11", target="_self");	
}

function sixteen() {
	
	window.open("index.html#page16", target="_self");
}

function startOver() {

	window.open("index.html#page0", target="_self");
}

function quit() 
{	

	$(document).ready(function() {
	
    var newWindow = window.open('', '_self', ''); //open the current window
    window.close();
		});
	}

