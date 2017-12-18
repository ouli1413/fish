function ViewData(){
	this.score=0;
	this.gameOver=false;
	this.view=false;
	this.draw=function(){
		dataContext.save();
		if(this.view){
			dataContext.beginPath();
			var str="SCORE :  "+this.score+"  分";
			dataContext.font="bold 30px 微软雅黑";
			dataContext.fillStyle="white";
			dataContext.fillText(str,dataCanvas.width/2-150,dataCanvas.height/2+200);
			dataContext.closePath();
			dataContext.restore();
		}	
			if(this.gameOver){
				dataContext.beginPath();
				var str="GAME OVER!";
				dataContext.font="bold 50px 微软雅黑";
				dataContext.fillStyle="red";
				dataContext.fillText(str,dataCanvas.width/2-150,dataCanvas.height/2-60);
				dataContext.closePath();
	//			begin.first=true;
		
		 	}
		
		
		
	}
	
	//
	this.changeScore=function(){
		if(this.view){
			this.score++;
		}
		
	}
}
