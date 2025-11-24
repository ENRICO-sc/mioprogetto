//punteggio 
function PaginaPunteggio() {

	var xmlHttpReq;

	if (window.XMLHttpRequest) {

		xmlHttpReq = new XMLHttpRequest();

	} else {

		xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");

	}

	xmlHttpReq.open("GET", "PUNTEGGIO.xml", false);

	xmlHttpReq.send();

	var xmlDocument = xmlHttpReq.responseXML;
	var i;
	for (i = 0; i < xmlDocument.length; i++) {
		Mostra += "context.fillStyle = '#FF0000';context.font = '30px Arial';"
		Mostra += "context.fillText('Name'+ xmlDocument.documentElement.childNodes(i).childNodes(0).text +,100,100);"
		Mostra += "context.fillText('Score'+ xmlDocument.documentElement.childNodes(i).childNodes(1).text +,100,100);"

	}
	Stampa.innerHTML = Mostra;

}
