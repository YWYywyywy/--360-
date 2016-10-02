define(function(){
	return {
		lun_bo:function(){
			var slide_list=document.getElementById("slide_list");
			var ctrl=document.getElementsByClassName('ctrl');
			var cate_li=document.getElementsByClassName("cate_li");
			var hide_menu_inner=document.getElementsByClassName("hide_menu_inner")[0];
			var hide=document.getElementsByClassName("hide");
			var arow_left=document.getElementsByClassName("arow_left");
			var flag=false;
			//轮播图的播放
			var i=0;
			var timer=setInterval(function(){
				i-=1200;
				ctrl[0].style.background="black";
				if(i> - 6000){
				    slide_list.style.left=i+"px";
					if(i==(- 1200)){
						ctrl[1].style.background="black";
						for(var k=0;k<ctrl.length;k++){
							if(k!=1){
								ctrl[k].style.background="#eee";
							}
						}
					}else if(i==(- 2400)){
						ctrl[2].style.background="black";
						for(var k=0;k<ctrl.length;k++){
							if(k!=2){
								ctrl[k].style.background="#eee";
							}
						}
					}else if(i==(- 3600)){
						ctrl[3].style.background="black";
						for(var k=0;k<ctrl.length;k++){
							if(k!=3){
								ctrl[k].style.background="#eee";
							}
						}
					}else if(i==(- 4800)){
						ctrl[4].style.background="black";
						for(var k=0;k<ctrl.length;k++){
							if(k!=4){
								ctrl[k].style.background="#eee";
							}
						}
					}
				}else{
					i=0;
					slide_list.style.left=i+"px";
					ctrl[0].style.background="black";
					for(var k=1;k<ctrl.length;k++){
							ctrl[k].style.background="#eee";
						}
				}
			},3000);
		}
	}
	   
});