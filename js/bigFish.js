//得到橙色身体的图片
var orangeBobyArry=[];
for(var i=0;i<8;i++){
	var item=new Image();
	item.src="img/bigSwim"+i+".png";
	orangeBobyArry[i]=item;
};
//得到蓝色身体的图片
var blueBobyArry=[];
for(var i=0;i<8;i++){
	var item=new Image();
	item.src="img/bigSwimBlue"+i+".png";
	blueBobyArry[i]=item;
};
//尾巴
var bigTailArry=[];
for(var i=0;i<8;i++){
	var item=new Image();
	item.src="img/bigTail"+i+".png";
	bigTailArry[i]=item;
};
//眼睛
var bigEyeArry=[];
for(var i=0;i<2;i++){
	var item=new Image();
	item.src="img/bigEye"+i+".png";
	bigEyeArry[i]=item;
};

function BigFish(){
	this.bodyArry=orangeBobyArry;
	this.bodyIndex=0;
	
	this.bigFishX=bigFishCanvas.width/2;
	this.bigFishY=bigFishCanvas.height/2;
	
	this.bigEyeIndex=0;//记录眼睛状态的索引值
	this.bigEyeTime=30;//眼睛改变状态的时间
	this.bigEyeGoTime=0;//走的时间
	
	this.bigTailIndex=0;//记录尾巴状态的索引值
	this.bigTailTime=1;//尾巴改变状态的时间
	this.bigTailGoTime=0;//走的时间
	
	
	this.draw=function(mx,my){
		//先保存一下画板
		bigFishContext.save();
		//求现在点鱼鼠标点的夹角
		var angle=Math.atan2(my-this.bigFishY,mx-this.bigFishX)+Math.PI;//角度旋转
		//呈现出移动的过程
		this.bigFishX=lerpDistance(mx,this.bigFishX,0.8);
		this.bigFishY=lerpDistance(my,this.bigFishY,0.8);
		
		//绘制鱼的身体		
		bigFishContext.translate(this.bigFishX,this.bigFishY);
		bigFishContext.rotate(angle);
		
		//求眼睛的index
		if(this.bigEyeGoTime<this.bigEyeTime){
			this.bigEyeGoTime++;
		}else{
			if(this.bigEyeIndex==0){		//睁眼睛----到--闭眼睛
				this.bigEyeTime=2;
				this.bigEyeIndex=1;
			}else{
				this.bigEyeTime=30;
				this.bigEyeIndex=0;
			}
			this.bigEyeGoTime=0;
		}
		
		//求尾巴的index
		if(this.bigTailGoTime<this.bigTailTime){
			this.bigTailGoTime++;
		}else{
			if(this.bigTailIndex<bigTailArry.length-1){
				this.bigTailIndex++;				
			}else{
				this.bigTailIndex=0;
			}
			this.bigTailGoTime=0
		}
		
		
		bigFishContext.drawImage(this.bodyArry[this.bodyIndex],-this.bodyArry[this.bodyIndex].width/2,-this.bodyArry[this.bodyIndex].height/2);		
		//鱼的尾巴
		bigFishContext.drawImage(bigTailArry[this.bigTailIndex],-bigTailArry[this.bigTailIndex].width/2+30,-bigTailArry[this.bigTailIndex].height/2);		
		//鱼的眼睛
		bigFishContext.drawImage(bigEyeArry[this.bigEyeIndex],-bigEyeArry[this.bigEyeIndex].width/2,-bigEyeArry[this.bigEyeIndex].height/2);
		bigFishContext.restore();
	}
	this.changeBody=function(fruitType){
		this.bodyArry=fruitType=="blue"?blueBobyArry:orangeBobyArry;
		//bodyindex的改变
		if(this.bodyIndex<this.bodyArry.length-1){
			this.bodyIndex++;
		}else{
			this.bodyIndex=this.bodyArry.length-1;
		}
	}
}
