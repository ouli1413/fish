var bgImg=new Image();
bgImg.src="img/background.jpg";//图片预加载
function Background(){
	//需要往背景画板中绘画
	this.draw=function(){
		bgContext.drawImage(bgImg,0,0,600,600);
	}
	
	 
}
