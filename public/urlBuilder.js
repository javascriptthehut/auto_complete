function buildURL(word){

	/////1.BUILDING MY URL ACCORDING TO THE API//////
	var query = {
		from: 'eng',
		dest: 'es',
		format: 'json',
		phrase: word,
		pretty: 'true'
	};

	var baseUrl = 'https://glosbe.com';
	var path = '/gapi/translate';
	var queryString = Object.keys(query).map(function(key){
		return key + '=' + query[key];
	}).join('&');   //creates the key value pairs into a string;
	
	var APIurl = baseUrl + path + '?' + queryString;
	return APIurl

}

function getDef(word){
	var APIurl = buildURL(word);
	makeCall(APIurl);
}
/////SENDING A GET REQUEST//////
function makeCall(APIurl){

	var xhr = new XMLHttpRequest();

	////3.CALLBACK FUNCTION THAT WAITS TO GET THE ANSWER AND THEN WORKING WITH IT
	////i.e - parsing it, making it into an object/////
	xhr.addEventListener('load', function() {
		if (xhr.status === 200)
			var response = JSON.parse(xhr.response);
		// document.getElementById('results-summary').innerHTML = xhr.response;

		//spanish translation of the word
		var spanishWord = response.tuc[0].phrase.text;
		document.getElementById('word').innerHTML = decodeURI(spanishWord);

		//iterate over meanings array (if meaning[i].language === "es") then return meanings[i].text!
		//spanish meanings
		var findSpanishMeaning = response.tuc
			.map(function(el) {return el.meanings;}) // extract meanings
			.reduce(function(a , b) {return a.concat(b);}) // flatter
			.filter(function(el) {return el;}) // filter undefined objects
			.filter(function(el) {return el.language === 'es';})
			.map(function (el) {return el.text;});
		document.getElementById('definition').innerHTML = decodeURI(findSpanishMeaning[0]);

		//English meanings
		var findEnglishMeaning = response.tuc
			.map(function(el) {return el.meanings;}) // extract meanings
			.reduce(function(a , b) {return a.concat(b);}) // flatter
			.filter(function(el) {return el;}) // filter undefined objects
			.filter(function(el) {return el.language === 'en';})
			.map(function (el) {return el.text;});
		document.getElementById('englishDef').innerHTML = decodeURI(findEnglishMeaning[0]);

	});

	xhr.open('GET', APIurl);
	xhr.send();
}
