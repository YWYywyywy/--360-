define(['createShopList','']function(){
	return {
         //创建页面上的按钮
		createBtn:function(index){
				var btn2=document.getElementsByClassName("btn1")[1];
				for(var i=0;i<index;i++){
				    var btn=document.createElement("a");
				    btn.className="btn";
				    btn.id="";
				    btn.innerHTML=i+1;
				    btn.setAttribute("href","###");
				    shop_list_btn.insertBefore(btn,btn2);
				}
				var btn=document.getElementsByClassName("btn")[0];
				btn.id="currentBtn";
			}
		//页面上上一页按钮的点击事件
		var btn1=document.getElementsByClassName("btn1");
		var btn=document.getElementsByClassName("btn");
		var shop_list=document.getElementsByClassName("shop_list")[0];
		goUpPage:function(param){
			btn1[1].addEventListener("click",function(){
				console.log("1");
				for(var i=0;i<param;i++){
					if(btn[i].id=="currentBtn"){
						if(i!=0){
							shop_list.removeChild(shopList);
							for(var k=0;k<btn.length;k++){
								btn[i].id="";
							}
		                    start=(i-1)*5;
		                    btn[i-1].id="currentBtn";
							end=(i)*5;
							createShopList();
							createShopList_item();
						}else{
							shop_list.removeChild(shopList);
							for(var i=0;i<btn.length;i++){
								btn[i].id="";
							}
							start=25;
							end=30;
							btn[5].id="currentBtn";
							createShopList();
							createShopList_item();
						}
					}
				}
			});
		}
		//页面上的下一页按钮点击事件
		goDownPage:function(param){
			btn1[0].addEventListener("click",function(e){
				for(var i=param-1;i>=0;i--){
					if(btn[i].id=="currentBtn"){
						if(i!=5){
							shop_list.removeChild(shopList);
							for(var k=0;k<6;k++){
								btn[k].id="";
							}
							btn[i+1].id="currentBtn";
							start=(i+1)*5;
							end=(i+2)*5;
							createShopList();
							createShopList_item();
						}else{
							shop_list.removeChild(shopList);
							for(var j=0;j<6;j++){
								btn[j].id="";
							}
							btn[0].id="currentBtn";
							start=0;
							end=5;
							createShopList();
							createShopList_item();
							break;
						}
					}
				}
			});
		}
		 //给页面上的按钮注册点击事件
		addEvent:function(param){
		 	var btn=document.getElementsByClassName("btn");
		 	for(var i=0;i<param;i++){
		    (function(j){
		       btn[j].addEventListener("click",function(e){
				shop_list.removeChild(shopList);
				for(var i=0;i<btn.length;i++){
					btn[i].id="";
				}
				this.id="currentBtn";
				start=j*5;
				end=(j+1)*5;
				createShopList();
				createShopList_item(); 
		       });
		    })(i);
		  }
		}
	}
});