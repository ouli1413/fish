function Ane(){
	this.count=30;//海藻数量
	this.aneY=aneCanvas.height;//纵坐标
	this.lineW=20;//宽度
	this.aneArry=[];//用来记录海藻的坐标
	this.angle=0;//角度
	
	//模拟果实制作       刚出生的时候
	this.born=function(){
		aneContext.lineWidth=this.lineW;
		aneContext.globalAlpha=Math.random()*0.4+0.4;//海藻透明度
		for(var i=0;i<this.count;i++){
			var _x=(Math.random()*(20-15+1)+15)*i;//海藻x坐标
			aneContext.beginPath();
			aneContext.moveTo(_x,this.aneY);//起点
			var _y1=(Math.random()*(300-150+1)+150);//终点纵坐标
			aneContext.strokeStyle="#3b154e";//颜色
			//用对象先存储
			var obj={
				topX:_x,
				topY:_y1,
				swimg:Math.random()*40+40    //摆动弧度的大小
			}
			this.aneArry.push(obj);	
		}
	}
	
	//绘制
	this.draw=function(){
		this.angle+=2;//摆动快慢
		var _angle=Math.sin(this.angle/180*Math.PI);
		for(var i=0;i<this.count;i++){
			var _obj=this.aneArry[i];
			var _x=_obj["topX"];//海藻x坐标
			var swimg=_obj["swimg"]*_angle;//得到振幅      //摆动弧度的大小
			aneContext.beginPath();
			aneContext.moveTo(_x,this.aneY);//起点
			var _y1=_obj["topY"];//终点纵坐标
			aneContext.strokeStyle="#3b154e";//颜色
//			aneContext.lineTo(_x,_y1);
			var middleX=_x;
			var middleY=_y1+200;
			aneContext.quadraticCurveTo(middleX,middleY,_x-swimg,_y1);//绘制曲线   （中间坐标，顶点坐标)
			aneContext.lineCap="round";  //头部弧度
			aneContext.stroke();
			aneContext.closePath();
			
		}
	}
}
