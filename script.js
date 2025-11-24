var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
//var coinImage = new Image();
var screenWidth = 100;
var screenHeight = 100;
var p = 700;
var lastFrameTime = 0;
var tempo;
var spriteX = 0;
var spriteY = 420;
var rightKey = false;
var leftKey = false;
var upKey = false;
var downKey = false;
var enter = false;
var xvel = 100;
var yvel = 100;
var fotogramma = 0;
var sfondo = new Image();
var verme = new Image();
var freccia = new Image();
var gallo = new Image();
var ape = new Image();
var bagarozzo = new Image();
var mov = 300;
var fine = 0;
var score = 0;
var stampa;
var b;
var touch;
var movx;
var apex = 400;
var apey;
var apey = 400;
var freccia_mov = 230 ;
var count = 0 ;
var volte = 0 ;

//immagini richiamate delle funzioni
gallo.src = 'immagini/gallo.png';
sfondo.src = 'immagini/sfondo.png';
verme.src = 'immagini/verme.png';
freccia.src = "immagini/freccia.png";
ape.src = "immagini/ape.png";
bagarozzo.src = "immagini/bagarozzo.png";






//funzione per controllare se un numero è pari o dispari 
function IsNotUneven(numero) {
	if (isNaN(numero) == false) {
		return (numero % 2 == 1 ? true : false);
	}
	else {
		return null;
	}
}


 