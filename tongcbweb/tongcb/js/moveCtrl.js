define(function() {
	return {
		move_Ctrl:function(){
			//鼠标经过轮播图上的点，切换图片
			var k=-1200;
			var slide_list=document.getElementById("slide_list");
			var ctrl=document.getElementsByClassName('ctrl');
			for(var i=0;i<5;i++)
			{
				(function(j){
					ctrl[j].addEventListener("click",function(){
					slide_list.style.left=(j+1)*(k)+"px";
					console.log(slide_list.style.left);
					for(var g=0;g<ctrl.length;g++){
			        	ctrl[g].style.background="#eee";
					}
					this.style.background="black";
					});
				})(i);
			}
		}
	}
});