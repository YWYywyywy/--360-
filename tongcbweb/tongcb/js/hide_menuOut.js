define(function(){
	
	return {
		hideMenuOut:function(){
			//菜单鼠标经过事件
			var slide_list=document.getElementById("slide_list");
			var cate_li=document.getElementsByClassName("cate_li");
			var hide_menu_inner=document.getElementsByClassName("hide_menu_inner")[0];
			var hide=document.getElementsByClassName("hide");
			var arow_left=document.getElementsByClassName("arow_left");
			var flag=false;
			for(var i=0;i<cate_li.length;i++)
			{   
				(function(j){
			            cate_li[j].addEventListener("mouseover",function(e){
			            for(var k=0;k<hide.length;k++){
			            	hide[k].style.display="none";
			            	arow_left[k].style.display="none";
			            }
			            e.preventDefault();
						hide[j].style.display="block";
						arow_left[j].style.display="block";
					    });
					    hide[j].addEventListener("mouseover",function(e){
					    	flag=true;
					    	e.preventDefault();
					    	hide[j].style.display="block";
					    	arow_left[j].style.display="block";
					    });
					    cate_li[j].addEventListener("mouseout",function(e){
					    	e.preventDefault();
					    	if(!flag){
			                   	hide[j].style.display="none";
						 		arow_left[j].style.display="none";
					    	}
					   });
					    hide[j].addEventListener("mouseout",function(e){
					    	e.preventDefault();
					    	hide[j].style.display="none";
					    	arow_left[j].style.display="none";
					    });
			    }(i));
			}
		}
	}
});