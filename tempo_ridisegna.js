//Ridisegna lo schermo ogni n milliscondi definiti in setInterval
function redraw() {

	context.clearRect(0, 0, screenWidth, screenHeight);

	context.drawImage(sfondo, -spriteX, 0 , 2000, 600);

}

//funzione di tempo ottiene la variabile delta per la velocita  
function drawTimeBased() {
	var now = new Date().getTime();
	delta = (now - lastFrameTime) / 1000;
	lastFrameTime = now;
}