 //primo livello
function livello1() {




	//movimento bruco
	p--;
	//fotogramma gallo
	if (spriteX > 700) {
		fotogramma = 0;
	}
	if (spriteX < 0) {
		fotogramma = 340;
	}
	if (spriteX > 700) {
		fotogramma = 1200;
	}
	if (p == 0) {
		p = 700;
	}



	//collisione bruco gallo
	var collision = p ;
	var collision = p;


	//fotogramma del bruco
	if ( spriteX == collision ) {
		volte++ ;
		score = score + 100;
		movx = 0;
	}
	if(volte == 1){
		movx = 520;
	}
	if(volte == 2){
		movx = 1000;
	}
	if(volte == 3){
		movx = 1450;
	}
	if(volte > 3){
		movx = 0;
		volte = 0;
	}


	if (score < 100) {
		if (p >= 700) {
			movx = 520;
		}
		if (p <= 600) {
			movx = 0;
		}
		if (p <= 550) {
			movx = 520;
		}

		if (p <= 500) {
			movx = 520;
		}
		if (p <= 300) {
			movx = 0;
		}
		if (p <= 200) {
			movx = 520;
		}

	} else {

		movx = 1500;


	}

	if (apex < 0) {
		apex = 700;
	}

	apex--;

	context.drawImage(bagarozzo,250 , 0, 600, 900, p+200, 340, 150, 250);
	context.drawImage(verme, movx, 0, 480, 950, p, 340, 150, 250);

	context.drawImage(gallo, fotogramma, 0, 335, 950, spriteX, spriteY, 150, 250);
	context.drawImage(ape, 100, 0, 1030, 950, p+100, apey, 120, 120);




	context.fillStyle = "#FF0000";
	context.font = "30px Arial";
	context.fillText('score  ' + score, 100, 100);

}
