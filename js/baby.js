//得到橙色身体的图片
var smallBobyArry=[];
for(var i=0;i<20;i++){
	var item=new Image();
	item.src="img/babyFade"+i+".png";
	smallBobyArry[i]=item;
};

//尾巴
var smallTailArry=[];
for(var i=0;i<8;i++){
	var item=new Image();
	item.src="img/babyTail"+i+".png";
	smallTailArry[i]=item;
};
//眼睛
var smallEyeArry=[];
for(var i=0;i<2;i++){
	var item=new Image();
	item.src="img/babyEye"+i+".png";
	smallEyeArry[i]=item;
};

function SmallFish(){
	this.smallFishX=smallFishCanvas.width/2;
	this.smallFishY=smallFishCanvas.height/2;
	
	this.smallBodyIndex=0;//记录身体眼睛状态的索引值
	this.smallBodyTime=10;//身体改变状态的时间
	this.smallBodyGoTime=0;//走的时间
	
	this.smallEyeIndex=0;//记录眼睛状态的索引值
	this.smallEyeTime=30;//眼睛改变状态的时间
	this.smallbigEyeGoTime=0;//走的时间
	
	this.smallTailIndex=0;//记录尾巴状态的索引值
	this.smallTailTime=1;//尾巴改变状态的时间
	this.smallTailGoTime=0;//走的时间	
	
	this.draw=function(mx,my){
		//先保存一下画板
		smallFishContext.save();
		//求现在点鱼鼠标点的夹角
		var angle=Math.atan2(my-this.smallFishY,mx-this.smallFishX)+Math.PI;//角度旋转
		//呈现出移动的过程
		this.smallFishX=lerpDistance(mx,this.smallFishX,0.8);
		this.smallFishY=lerpDistance(my,this.smallFishY,0.8);
		
		//绘制鱼的身体		
		smallFishContext.translate(this.smallFishX+15,this.smallFishY+25);
		smallFishContext.rotate(angle);
		
		//眼睛的动画
		if(this.smallEyeGoTime<this.smallEyeTime){
			this.smallEyeGoTime++;
		}else{
			if(this.smallEyeIndex==0){		//睁眼睛----到--闭眼睛
				this.smallEyeTime=2;
				this.smallEyeIndex=1;
			}else{
				this.smallEyeTime=30;
				this.smallEyeIndex=0;
			}
			this.smallEyeGoTime=0;
		}
		
		//尾巴的动画
		if(this.smallTailGoTime<this.smallTailTime){
			this.smallTailGoTime++;
		}else{
			if(this.smallTailIndex<smallTailArry.length-1){
				this.smallTailIndex++;				
			}else{
				this.smallTailIndex=0;
			}
			this.smallTailGoTime=0
		}
		
		//身体的动画
		if(this.smallBodyGoTime<this.smallBodyTime){
			this.smallBodyGoTime++;
		}else{
			if(this.smallBodyIndex<smallBobyArry.length-1){
				this.smallBodyIndex++;				
			}else{
				data.gameOver=true;
			}
			this.smallBodyGoTime=0
		}	
		
		smallFishContext.drawImage(smallBobyArry[this.smallBodyIndex],-smallBobyArry[this.smallBodyIndex].width/2,-smallBobyArry[this.smallBodyIndex].height/2);		
		//鱼的尾巴
		smallFishContext.drawImage(smallTailArry[this.smallTailIndex],-smallTailArry[this.smallTailIndex].width/2+25,-smallTailArry[this.smallTailIndex].height/2);		
		//鱼的眼睛
		smallFishContext.drawImage(smallEyeArry[this.smallEyeIndex],-smallEyeArry[this.smallEyeIndex].width/2,-smallEyeArry[this.smallEyeIndex].height/2);
		smallFishContext.restore();
	}
}
