//加载果实图片
var blueFruit=new Image();
blueFruit.src="img/blue.png";
blueFruit.type="blue";//图片颜色

var orangeFruit=new Image();
orangeFruit.src="img/fruit.png";
orangeFruit.type="orange";  

function Fruit(){
	this.count=20;//果实数量
	this.fruitArry=[];
	this.activeCount=20;//最先激活有30个果实   
	
	//海藻刚形成的时候
	this.born=function(){
		for(var i=0;i<this.count;i++){
			//得到要绘制果实的图片
			var fruitImg=Math.random()>0.5?blueFruit:orangeFruit;
			//得到海藻的数量
			var index=Math.floor(ane.count*Math.random());
			var itemAne=ane.aneArry[index];
			//对象
			var obj={
				fruitImg:fruitImg,
				index:index,
				speed:Math.random()*0.3+0.5,
				active:true,
				fruitW:5,
				fruitY:itemAne["topY"],
				fruitX:itemAne.topX-5
			} 
			//放到数组中
			this.fruitArry.push(obj);
		}
	}	
	
	//绘制
	this.draw=function(){
		for(var i=0;i<this.fruitArry.length;i++){
			var obj=this.fruitArry[i];
			if(obj["active"]){
				var speed=obj["speed"];
				var fruitW=obj["fruitW"];
				var fruitY=obj["fruitY"];
				//得到要绘制果实的图片
				var fruitImg=obj["fruitImg"];
				//得到海藻的数量
				var index=obj["index"];
				var itemAne=ane.aneArry[index];
				//先长大再上升
				if(fruitW<15){
					fruitW+=speed;
					obj["fruitW"]=fruitW;
				}else{
					//让当前果实的y-speed
					fruitY-=speed;
					obj["fruitY"]=fruitY;
					//判断当前果实的y是否到达顶部
					if(fruitY<10){
						obj["active"]=false;
						this.activeCount--;
					}				
				}				
				//开始绘制
				fruitContext.drawImage(fruitImg,itemAne.topX-5,fruitY,fruitW,fruitW);
				this.fruitArry[i]=obj;
			}
		}				
	}	
	//侦听
	this.listener=function(){
		if(this.activeCount<10){
			for(var i=0;i<this.fruitArry.length;i++){
				if(this.fruitArry[i]["active"]==false){
					//得到要绘制果实的图片
					var fruitImg=Math.random()>0.5?blueFruit:orangeFruit;
					//得到海藻的数量
					var index=Math.floor(ane.count*Math.random());
					var itemAne=ane.aneArry[index];
					//对象
					var obj={
						fruitImg:fruitImg,
						index:index,
						speed:Math.random()*0.3+0.5,
						active:true,
						fruitW:5,
						fruitY:itemAne["topY"],
						fruitX:itemAne.topX-5
					} 
					this.fruitArry[i]=obj;
					this.activeCount++;
					break;
				}
			}
		}
	}
	//果实死掉
	this.dead=function(index){
		this.fruitArry[index].active=false;
		this.activeCount--;
	}
}
