window.onload=function(){
	init();
};
var beginCanvas;//首页
var beginContext;
var bgCanvas;//背景
var bgContext;
var aneCanvas;//海藻
var aneContext;
var fruitCanvas;//果实
var fruitContext;
var bigFishCanvas;//大鱼
var bigFishContext;
var smallFishCanvas;//小鱼
var smallFishContext;
var waveCanvas;//泡泡
var waveContext;
var dataCanvas;//文字数据
var dataContext;

//实例化其他物体的对象
var bg;
var ane;
var fruit;
var bigFish;
var smallFish;
var wave;
var data;
var begin;

var mouseX=0;
var mouseY=0;


function init(){
	beginCanvas=document.getElementById("begin");
	beginContext=beginCanvas.getContext("2d");  
	bgCanvas=document.getElementById("bg");
	bgContext=bgCanvas.getContext("2d");
	aneCanvas=document.getElementById("ane");
	aneContext=aneCanvas.getContext("2d");
	fruitCanvas=document.getElementById("fruit");
	fruitContext=fruitCanvas.getContext("2d");
	bigFishCanvas=document.getElementById("bigFish");
	bigFishContext=bigFishCanvas.getContext("2d");
	smallFishCanvas=document.getElementById("smallFish");
	smallFishContext=smallFishCanvas.getContext("2d");
	waveCanvas=document.getElementById("wave");
	waveContext=waveCanvas.getContext("2d");
	dataCanvas=document.getElementById("data");
	dataContext=dataCanvas.getContext("2d");
	
	//开始游戏
	begin=new Begin();
	begin.draw();
	//背景
	bg=new Background();
	bg.draw();
	//海藻
	ane=new Ane();
	ane.born();	
	
	//果实
	fruit=new Fruit();
	fruit.born();
	
	//泡泡
	wave=new Wave();
	wave.init();
	
	//大鱼
	bigFish=new BigFish();
	bigFish.draw(bigFishCanvas.width/2,bigFishCanvas.height/2);
	mouseX=bigFishCanvas.width/2;
	mouseY=bigFishCanvas.height/2;
	 
	//小鱼
	smallFish=new SmallFish();
	smallFish.draw(smallFishCanvas.width/2,smallFishCanvas.height/2);
	_mouseX=smallFishCanvas.width/2;
	_mouseY=smallFishCanvas.height/2;
	
	//文字 数据
	data=new ViewData();


	//制作动画
	requestAnimationFrame(animator);
	
	//鼠标移动事件
	window.onmousemove=function(e){
		if(data.view){		
			mouseX=e.pageX;
			mouseY=e.pageY;
			_mouseX=bigFish.bigFishX;
			_mouseY=bigFish.bigFishY;
		}
	}
	
	//音乐的播放
		var bgMusic=new Audio();
		bgMusic.src="sound/piano bgm.mp3";
		bgMusic.play();
		bgMusic.loop=true;//循环播放
	//	bgMusic.volume=0.3;//音量
	
	


}

function animator(){	
	//制作果实的动画
	fruitContext.clearRect(0,0,fruitCanvas.width,fruitCanvas.height);
	fruit.draw();
	fruit.listener();
	
//	//海澡
	aneContext.clearRect(0,0,aneCanvas.width,aneCanvas.height);
	ane.draw();
	
	//大鱼
	bigFishContext.clearRect(-100,-100,bigFishCanvas.width+100,bigFishCanvas.height+100);
	bigFish.draw(mouseX,mouseY);
	
	//小鱼
	smallFishContext.clearRect(-100,-100,smallFishCanvas.width+100,smallFishCanvas.height+100);
	smallFish.draw(_mouseX,_mouseY);
	
	//泡泡
	waveContext.clearRect(0,0,waveCanvas.width,waveCanvas.height);
	wave.draw();
	
	//文字数字
	dataContext.clearRect(0,0,dataCanvas.width,dataCanvas.height);
	data.draw();
	
	//调用鱼与果实碰撞 的方法
	checkFishFruitCollider();

		
	requestAnimationFrame(animator);

}
 