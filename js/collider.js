function checkFishFruitCollider(){
	//游戏结束  后面事件不发生
	if(data.gameOver) return;
//	if(data.view==false) return;
	//遍历所有果实 ，得到每一个果实的坐标  ，在得到大鱼的坐标 ，判断两者之间的距离
	for(var i=0;i<fruit.fruitArry.length;i++){
		//海藻的坐标
		var itemFruit=fruit.fruitArry[i];
		var _fX=itemFruit.fruitX;
		var _fY=itemFruit.fruitY;
		
		if(data.view){
			
	
		if(calLength2(_fX,_fY,bigFish.bigFishX,bigFish.bigFishY)<900){			
			//吃掉果实
			fruit.dead(i);
			
			//调用大鱼类的changeBody的函数
			bigFish.changeBody(itemFruit.fruitImg.type);
			
			//生成一个泡泡
			wave.changeActive(_fX,_fY);
			
			//加分数		
			data.changeScore();		
				
			//播放音乐
			var bullet=new Audio();
			bullet.src="sound/bullet.mp3";
			bullet.play();
			
		}
		}
	}
	
	//检验大鱼和小鱼之间的距离
	if(calLength2(bigFish.bigFishX,bigFish.bigFishY,smallFish.smallFishX,smallFish.smallFishY)<400){			
		//大鱼身体的index=0
		
		bigFish.bodyIndex=0;
		
		//小鱼的index++			
		if(smallFish.smallBodyIndex>0){
			smallFish.smallBodyIndex--;	
			
		}				
	}
}
 