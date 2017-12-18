
function Begin(){
	this.first=false;
	this.draw=function(){
//      beginContext.drawImage(beginImg,0,0,600,600);   
		beginContext.save();
		beginContext.beginPath();
		var str="开始游戏";
		beginContext.font="bold 30px 仿宋";
		beginContext.fillStyle="white";
		beginContext.fillText(str,beginCanvas.width/2-100,beginCanvas.height/2+130);		
		beginContext.closePath();
		beginContext.restore();
//		
		beginContext.beginPath();
		beginContext.fillStyle="rgba(0,0,0,0.5)";
//		beginContext.strokeStyle="black";
		beginContext.strokeRect(beginCanvas.width/2-110,beginCanvas.height/2+95,150,50);//绘制矩形
		beginContext.fillRect(beginCanvas.width/2-110,beginCanvas.height/2+95,150,50);
		beginContext.closePath();
		beginContext.stroke();
		beginContext.restore();
		
		//给画布添加点击事件
	
			beginCanvas.onclick=function(e){
				this.first=true;
				data.view=true;
				var x=e.pageX;
				var y=e.pageY;
				if(x>=beginCanvas.width/2-110&&x<=beginCanvas.width/2-110+150&&y>=beginCanvas.height/2+95&&y<=beginCanvas.height/2+95+50){
					beginContext.clearRect(0,0,beginCanvas.width,beginCanvas.height);
				}
			}
		
		
		
	}
}
