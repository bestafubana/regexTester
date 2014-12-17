/* Coded by Natanael Silva - just for fun
*	https://github.com/bestafubana
*/

	var reg;
	var list = new Array();

(function(analyzeId, addId, patternId, wordId, wordsId, removerId, regDisplayId){
	var wordHTML = "<span class=\"word\">*</span>"
	
	function setRegex(pattern, caseSensitive){
		var modifier = "";
		
		if(!caseSensitive){
			modifier += "i";
		}
		
		reg = new RegExp(pattern, modifier);
		document.getElementById(regDisplayId).innerHTML = pattern;

		testInput();
	}

	function testInput(){
		for(i=0; i < list.length; i++){
			
			if(reg.test(list[i])){
				paint(1, i);
			}else{
				paint(0, i);
			}
		}
	}
	
	function paint(color, index){
		var colorClass = "red";
		if(color){
			colorClass = "green";
		}
		
		document.getElementById(wordsId).children[i].className = colorClass;
	}

	function addElement(element){
		list.push(element);
		document.getElementById(wordsId).innerHTML += wordHTML.replace("\*", element);

		if(!reg){

			var tmpPattern = document.getElementById(patternId).value;
			if(!tmpPattern){
				tmpPattern = "."; //any pattern
			}
			setRegex(tmpPattern);
		}

		testInput();
		
		//list.sort();
		//populateOutput();
	}

	function removeElement(elementId) {
		list[elementId] = "";
		list.sort();
		list.shift();
		document.getElementById(wordsId).removeChild(document.getElementById(wordsId).children[0]);
	}
	
	function removeAllElements(){
		list = new Array();
		document.getElementById(wordsId).innerHTML = "";
	}
	
	function populateOutput(){
		document.getElementById(wordsId).innerHTML = "";

		for(i=0; i < list.length; i++){
			document.getElementById(wordsId).innerHTML += wordHTML.replace("\*", list[i]);
		}
	}
	
	document.getElementById(analyzeId).addEventListener("click", function(){
																	setRegex(document.getElementById(patternId).value, false, true);
																	}, false);
	document.getElementById(addId).addEventListener("click", function(){
																addElement(document.getElementById(wordId).value);
															}, false);
															
	document.getElementById(removerId).addEventListener("click", function(){
																removeAllElements();
															}, false);														
	
})("analyzer", "adder","pattern", "word", "output", "remover", "regDisplay");