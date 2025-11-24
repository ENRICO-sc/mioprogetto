//Creo gli eventi ed associo una funzione se il tasto è premuto o rilasciato.
function mainloop() {


	redraw();

    document.addEventListener('keydown', keyDown, false);
    document.addEventListener('keyup', keyUp, false);
    
    //SEZIONE DEDICATA ALLE FUNZIONI / ROUTINES
    //----------- Controllo Tastiera ---------------------
    function keyDown(e) {
        if (e.keyCode == 39) rightKey = true;
        else if (e.keyCode == 37) leftKey = true;
        if (e.keyCode == 38) upKey = true;
        else if (e.keyCode == 40) downKey = true;
        else if (e.keyCode == 13) enter = true;
    }
    function keyUp(e) {
        if (e.keyCode == 39) rightKey = false;
        else if (e.keyCode == 37) leftKey = false;
        if (e.keyCode == 38) upKey = false;
        else if (e.keyCode == 40) downKey = false;
        else if (e.keyCode == 13) enter = false;
    }
    
    
    //Controllo se i tasti vengono premuti
    if (rightKey) {
        // moltiplico la velocità per il delta del tempo (TimeBased);
        spriteX += xvel * delta
        fotogramma = 1250;
        if (spriteX >= 650) {
    
            spriteX = 650;
        }
    
    }
    
    if (leftKey) {
        spriteX -= xvel * delta;
    
        if (spriteX <= 0) {
    
            spriteX = 0;
        }
    }
    
    
    spriteY = spriteY + 100 * delta;
    if (spriteY > 420) {
        spriteY = 420;
    
    }
    
    if (upKey) {
    
    
        spriteY = spriteY - 200 * delta;
    
    
    
        if (spriteY < 200) {
            spriteY = 420;
        }
    
    
    
    
    }
    
    
    
    if (downKey) {
        mov = mov + 30 * delta;
    
    }
    
    
    
    if (upKey) {
        mov = mov - 30;
    
    }
    
    if (mov < 230) {
        mov = 260;
    
    }
    if (mov > 350) {
        mov = 350;
    
    }
    


    
    
    if (leftKey) {
        if (mov == 230) {
            fine = 1;
        }
    
    }
    
    if (enter) {
        if (freccia_mov == 230) {
            fine = 1;
        }
    
    }
    
    
    if (fine == 0) {
        presentazione();
    } else {
    
        livello1();
    
    }
    
    if (spriteY == 200) {
    
        fotogramma = 340;
        spriteY = 420;
    
    
    
    
    }
    
    
    
    
    }
    




setInterval('drawTimeBased()', 100);






function loop() {
	tempo = 10;
	if (score > 500) {

		tempo = 8;
	}
	if (score > 1000) {

		tempo = 7;
	}
	if (score > 1500) {
		tempo = 5;
	}
	if (score > 1700) {
		tempo = 3;
	}
	var ciclo = setInterval(mainloop, tempo, touchHandler);
}


loop();









