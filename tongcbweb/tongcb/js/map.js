define(function(){
	return {
		showMap:function(position,shopDesc,shopAddr){
			var myPosition=position;
			console.log(myPosition);
			//创建页面上的地图
			var mapModer=document.getElementsByClassName("mapModer")[0];
			var map=document.getElementsByClassName("map")[0];
			var moder=document.getElementsByClassName("moder")[0];
			//给地图模式注册点击事件
			mapModer.addEventListener("click",function(){
				map.style.display="block";
				moder.style.display="block";
			});
			//地图上的关闭按钮
			var close=document.getElementById("close");
			close.addEventListener("click",function(){
				map.style.display="none";
				moder.style.display="none";
			});
			//地图的显示区域
			var bd_top=document.getElementsByClassName("bd_top");
			/*function init(position){*/
				    //创建地图
			        var map1 = new AMap.Map('bd_top',{
			              resizeEnable: true,
			              zoom:11,
			              center: [116.397428, 39.90923]
			        });
				    for(var i=0;i<5;i++)
				    {
				    	(function(j){
				    		//创建地图位置图标
				    		var marker = new AMap.Marker({
				            icon :'image/map.jpg',
				            position:myPosition[j],
				    	    });
				    	    marker.setMap(map1);
				    	    //创建地图位置信息窗口
				    		var infoWindow=new AMap.InfoWindow({
					    	content:"<h3>"+"深圳联想笔记售后"+"</h3>"+"<div>主营："+shopDesc[j]+"</div>"+"<div>地址："+shopAddr[j]+"</div>"+"<a>"+"进入店铺<<"+"</a>",
					    	position:myPosition[j],
					    	offset:new AMap.Pixel(10,-30),
					    	size:new AMap.Size(0,100),
						    });
						    AMap.event.addListener(marker, 'click', function(){
					            infoWindow.open(map1,this.getPosition());
					            console.log(this.getPosition());
					        });
				    	})(i);
				    }
				/*}*/
		}
	}
})