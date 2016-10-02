define(function(){
	return {
		goTop:function(){
			//回顶部
		 var back_top_btn=document.getElementById("back_top_btn");
			window.onscroll = function(){
				if(document.body.scrollTop > 200){
					back_top_btn.style.display = "block";
				}else{
					back_top_btn.style.display = "none";
				}
			}
			back_top_btn.onclick = function(){
				var top = document.body.scrollTop;
				var speed = top / 60;
				var id = setInterval(function(){
					if(document.body.scrollTop <= 0 ){
						clearInterval(id);
						document.body.scrollTop = 0;
					}else{
						document.body.scrollTop = document.body.scrollTop - speed;
					}
				},1);
			}
				}
	}
});