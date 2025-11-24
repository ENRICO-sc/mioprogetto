//presentazione del gioco 

function presentazione() {
	
	
	

    if (downKey) {
    	count++;	
	}

	if(count==1){
		freccia_mov = 300;
	}

    if(count==2){
		freccia_mov = 340;			
	}

	if (upKey) {
        count--;

	}
	if(count<=0){
		freccia_mov = 230;
	}
	
	
		
	context.fillStyle = "#FF0000";
	context.font = "30px Arial";
	context.fillText("START", 300, 250);
	context.fillText("SCORE", 300, 300);
	context.fillText("QUIT", 300, 350);
	context.drawImage(freccia, 0, 0, 100, 100, 250, freccia_mov, 30, 30);

}