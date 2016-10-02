define(['map','creatList'],function(mymap,creatList) {
	return {
		createGetData:function(data){
			var index=0;//页面按钮的个数
			var Totalposition=[];//存储所有商家的地理位置坐标
			var shopDesc=[];//店铺名称
			var shopAddr=[];//店铺地址
			var shop_list=document.getElementsByClassName("shop_list")[0];
			var shop_list_btn=document.getElementsByClassName("shop_list_btn")[0];
			var btn1=document.getElementsByClassName("btn1");
			var btn=document.getElementsByClassName("btn");
			var shop_list=document.getElementsByClassName("shop_list")[0];
			var start;//点击每个按钮读取数据的起始位置
			var end;//点击每个按钮读取数据的结束位置
			var shopList;//创建显示商家信息的容器
			var totalData=[];//存放从服务器取回来的数据
		 	totalData=data;
		 	//一进入页面先创建第一页商品列表
		    start=0;
		    end=5;
		    createShopList();
		    creatList.createShopList_item(start,end,totalData,shopDesc,shopAddr,Totalposition);
		    index=parseInt(totalData.length/5);//页面按钮的个数	
			createBtn(index);
			addEvent(index);
			goUpPage(index);
			goDownPage(index);
		 	mymap.showMap(Totalposition,shopDesc,shopAddr);
		 	Totalposition=[];
		 	shopDesc=[];
		 	shopAddr=[];
            //创建商家列表容器
			function createShopList(){
			    shopList=document.createElement("div");
			    shopList.className="cnt_right_1";
			    shop_list.insertBefore(shopList,shop_list_btn);
			}
			//创建页面上的按钮
			 	function createBtn(index){
					var btn2=document.getElementsByClassName("btn1")[1];
					var shop_list_btn=document.getElementsByClassName("shop_list_btn")[0];
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
			function goUpPage(param){
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
								creatList.createShopList_item(start,end,totalData,shopDesc,shopAddr,Totalposition);
							}else{
								shop_list.removeChild(shopList);
								for(var i=0;i<btn.length;i++){
									btn[i].id="";
								}
								start=25;
								end=30;
								btn[5].id="currentBtn";
								createShopList();
								creatList.createShopList_item(start,end,totalData,shopDesc,shopAddr,Totalposition);
							}
						}
					}
				});
			}
			//页面上的下一页按钮点击事件
			function goDownPage(param){
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
								creatList.createShopList_item(start,end,totalData,shopDesc,shopAddr,Totalposition);
							}else{
								shop_list.removeChild(shopList);
								for(var j=0;j<6;j++){
									btn[j].id="";
								}
								btn[0].id="currentBtn";
								console.log(btn[0])
								start=0;
								end=5;
								createShopList();
								creatList.createShopList_item(start,end,totalData,shopDesc,shopAddr,Totalposition);
								break;
							}
						}
					}
				});
			}
			 //给页面上的按钮注册点击事件
			 function addEvent(param){
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
					creatList.createShopList_item(start,end,totalData,shopDesc,shopAddr,Totalposition);
			       });
			    })(i);
			  }
			}
		}
	}
});