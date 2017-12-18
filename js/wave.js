function Wave(){
	this.waveCount=10;
	this.waveArry=[];
	
	//初始化
	this.init=function(){
		for(var i=0;i<this.waveCount;i++){
			var obj={
				active:false,
				x:0,
				y:0,
				r:10
			}
			this.waveArry.push(obj);
		}
	}
	
	//绘制
	this.draw=function(){
		waveContext.save();
		waveContext.lineWidth=2;
		for(var i=0;i<this.waveCount;i++){
			var obj=this.waveArry[i];
			if(obj.active){
				//绘制  
				var _r=obj["r"];
				var _x=obj["x"];
				var _y=obj["y"];
				
				var _alpha=5/_r;
				if(_r<40){
					_r+=2;
					obj["r"]=_r;
				}else{
					obj.active=false;
					continue;
				}
			
				
				waveContext.beginPath();
				waveContext.arc(_x,_y,_r,0,2*Math.PI);
				waveContext.closePath();
				waveContext.strokeStyle="rgba(255,255,255,"+_alpha+")";
				waveContext.stroke();
				this.waveArry[i]=obj;
			}
		}
	}
	
	//
	this.changeActive=function(_fruitX,_fruitY){
		//需要从数组中找到一个active=false的变成true
		for(var i=0;i<this.waveCount;i++){
			var obj=this.waveArry[i];
			if(obj.active==false){
				obj.active=true;
				obj.x=_fruitX;
				obj.y=_fruitY;
				obj.r=10;
				this.waveArry[i]=obj;
				break;
			}
		}
	}
}
