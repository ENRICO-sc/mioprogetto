// TOUCH
document.addEventListener("touchstart", touchHandler);
document.addEventListener("touchmove", touchHandler);
document.addEventListener("touches", touchHandler);


//funzioni touch
function touchHandler(e) {

	if (e.touches) {
		spriteX = e.touches[0].pageX;
		spriteY = e.touches[0].pageY;

	}
	if (spriteY == 100) {
		spriteY = 400;



	}

	if (spriteY >= 350) {
		spriteY = 410;


	}
	if (spriteY < 350) {
		spriteY = 100;
	} else {
		spriteY--;

	}

	if (spriteX > 650) {
		fotogramma = 1250;
		spriteX = 650;



	}
	if (spriteX < 0) {
		fotogramma = 0;
		spriteX = 0;

	}
	if (e.touches.length >= 1) {
		fotogramma = 1250;
		fine = 1;
		livello1();
	}


	if (fine == 0) {
		presentazione();
	} else {
		livello1();

	}




}

