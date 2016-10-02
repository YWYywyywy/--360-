var slide_list=document.getElementById("slide_list");
var ctrl=document.getElementsByClassName('ctrl');
var shop_list_btn=document.getElementsByClassName("shop_list_btn")[0];
var cate_li=document.getElementsByClassName("cate_li");
var hide_menu_inner=document.getElementsByClassName("hide_menu_inner")[0];
var hide=document.getElementsByClassName("hide");
var arow_left=document.getElementsByClassName("arow_left");
var flag=false;
//菜单鼠标经过事件
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
//鼠标经过轮播图上的点，切换图片
var j=-1200;
for(var i=0;i<ctrl.length;i++)
{
	ctrl[i].addEventListener("click",function(){
		slide_list.style.left=(i+1)*j;
		for(var i=0;i<ctrl.length;i++){
        	ctrl[i].style.background="#eee";
		}
		this.style.background="black";
	});
}
//创建一个script文件
function addScript(src,name){
	var script=document.createElement("script");
	script.setAttribute("type","text/javascript");
	script.src=src;
	script.setAttribute("dd-name",name);
	document.body.appendChild(script);
}
var shop_list=document.getElementsByClassName("shop_list")[0];
var start;//点击每个按钮读取数据的起始位置
var end;//点击每个按钮读取数据的结束位置
var shopList;//创建显示商家信息的容器
var totalData=[];//存放从服务器取回来的数据
function createShopList(){
    shopList=document.createElement("div");
    shopList.className="cnt_right_1";
    shop_list.insertBefore(shopList,shop_list_btn);
}
createShopList();
//一进入页面先从服务器获取5条商家信息
(function(i,j){
	function getData(){
		start=i;
		end=j;
		addScript("http://localhost:3000/data/pagecount/1?callback=createData"); 
     }
    getData();
})(0,5);
 var index=0;//页面按钮的个数
 var Totalposition=[];//存储所有商家的地理位置坐标
 var shopDesc=[];//店铺名称
 var shopAddr=[];//店铺地址
 //跨域取数据的回调函数
 function createData(data){
 	var obj=data.shop_data;
 	for(var i=0;i<obj.length;i++){
		totalData.push(obj[i]);
	}
	console.log(totalData);
    index=parseInt(obj.length/5);//页面按钮的个数
    createShopList_item();	
	createBtn(index);
	addEvent(index);
	goUpPage(index);
	goDownPage(index);
 	init();
 	Totalposition=[];
 }
//创建页面上的按钮
 	function createBtn(index){
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
function goDownPage(param){
	btn1[0].addEventListener("click",function(e){
		console.log("1");
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
					console.log(btn[0])
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
		createShopList_item(); 
       });
    })(i);
  }
}
//动态创建每个商家信息
 	function createShopList_item(){
 		var shopList=document.getElementsByClassName("cnt_right_1")[0];
 	  	for(var j=start;j<end;j++){
	 		var everPosition=[];//存储每个商家的坐标
	 		shopDesc.push(totalData[j].shop_desc);
	 		shopAddr.push(totalData[j].addr);
	 		everPosition.push(parseFloat(totalData[j].map_longitude));
	 		everPosition.push(parseFloat(totalData[j].map_latitude));
	 		Totalposition.push(everPosition);
	 		var shoplist=document.createElement("div");
	 		shoplist.className="list_item";
	 		shopList.appendChild(shoplist);
	 		var pic=document.createElement("div");
	 		pic.className="pic";
	 		shoplist.appendChild(pic);
	 		var a=document.createElement("a");
	 		pic.appendChild(a);
	 		var img=document.createElement("img");
	 		img.src=totalData[j].shop_ico;
	 		a.appendChild(img);
	 		var cont=document.createElement("div");
	 		cont.className="cont";
	 		shoplist.appendChild(cont);
	 		var h3=document.createElement("h3");
	 		cont.appendChild(h3);
	 		var a1=document.createElement("a");
	 		a1.innerHTML=totalData[j].shop_name;
	 		h3.appendChild(a1);
	 		var shop_grade=document.createElement("div");
	 		shop_grade.className="shop_grade";
	 		h3.appendChild(shop_grade);
	 		var span=document.createElement("span");
	 		span.innerHTML="店铺等级:";
	 		shop_grade.appendChild(span);
	 		var a2=document.createElement("a");
	 		shop_grade.appendChild(a2);
	 		for(var k=0;k<parseInt(totalData[j].sorce);k++){
			    var span1=document.createElement("span");
			 	span1.className="icon";
			 	a2.appendChild(span1);
	 		}
	 		var desc=document.createElement("div");
	 		desc.className="desc";
	 		desc.innerHTML="主营:"+totalData[j].shop_desc;
	 		cont.appendChild(desc);
	 		var addr=document.createElement("div");
	 		addr.className="addr";
	 		addr.innerHTML="地址:"+totalData[j].addr;
	 		cont.appendChild(addr);
	 		var shop_score=document.createElement("div");
	 		shop_score.className="shop_score";
	 		cont.appendChild(shop_score);
	 		var shop_pf=document.createElement("div");
	 		shop_pf.className="shop_pf";
	 		shop_pf.innerHTML="先行赔付";
	 		shop_score.appendChild(shop_pf);
	 		var span2=document.createElement("span");
	 		span2.className="pf";
	 		shop_pf.appendChild(span2);
	 		var shop_rz=document.createElement("div");
	 		shop_rz.className="shop_rz";
	 		shop_rz.innerHTML="同城帮认证";
	 		shop_score.appendChild(shop_rz);
	 		var span3=document.createElement("span");
	 		span3.className="rz";
	 		shop_rz.appendChild(span3);
	 		var shop_rq=document.createElement("div");
	 		shop_rq.className="shop_rq";
	 		shop_score.appendChild(shop_rq);
	 		var span4=document.createElement("span");
	 		span4.innerHTML="人气:";
	 		shop_rq.appendChild(span4);
	 		var span5=document.createElement("span");
	 		span5.innerHTML=totalData[j].shop_visit+"次浏览";
	 		span4.appendChild(span5);
	        var a3=document.createElement("a");
	        a3.className="enter";
	        a3.innerHTML="进入店铺";
	        cont.appendChild(a3);
 		}
 	}  

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
function init(){
	    //创建地图
        var map = new AMap.Map('bd_top',{
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
	            position:Totalposition[j],
	    	    });
	    	    marker.setMap(map);
	    	    //创建地图位置信息窗口
	    		var infoWindow=new AMap.InfoWindow({
		    	content:"<h3>"+"深圳联想笔记售后"+"</h3>"+"<div>主营："+shopDesc[j]+"</div>"+"<div>地址："+shopAddr[j]+"</div>"+"<a>"+"进入店铺<<"+"</a>",
		    	position:Totalposition[j],
		    	offset:new AMap.Pixel(10,-30),
		    	size:new AMap.Size(0,100),
			    });
			    AMap.event.addListener(marker, 'click', function(){
		            infoWindow.open(map,this.getPosition());
		            console.log(this.getPosition());
		        });
	    	})(i);
	    }
	}
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
	//关键字搜索补全
	var addr_ipt=document.getElementsByClassName("addr_ipt")[0];
	function suggestHandle(){
		var name="search";
		var body=document.getElementsByTagName('body')[0];
		var script=document.getElementsByTagName('script');
		for(var i=0;i<script.length;i++)
		{
			console.log(script[i].getAttribute("dd-name"));
			if(script[i].getAttribute("dd-name")=="search")
			{
				body.removeChild(script[i]);
			}
		}
		var str=addr_ipt.value;
		var str1="http://suggest.bang.360.cn/suggest?word=";
		var str2="&category=7&encodein=utf-8&encodeout=utf-8&format=json&callback=window.suggest&t=0.3514809920297852?callback=handleData";
		var src=str1+str+str2;
		addScript(src,name);
		window.suggest=function(data){
	    search_notic.style.display="block";
		data.result.forEach(function(elem,index){
			var search_notic=document.getElementById("search_notic");
			var myp=document.createElement("div");
			myp.className="myp";
			myp.color="#185";
			search_notic.appendChild(myp);
			myp.innerHTML=elem.word;
			myp.addEventListener("click",function(e) {
				var e=e.target||e.srcElement;
				addr_ipt.value=e.innerHTML;
			});
		});
	   }
	}
	setInterval(function(){
		if(addr_ipt.value==""){
            for(var i=0;i<myp.length;i++){
            	search_notic.removeChild(myp[i]);
            }
            search_notic.style.display="none";
		}
		
	},300)
	var myp=document.getElementsByClassName("myp");
	addr_ipt.addEventListener("focusin",function(){
		suggestHandle();
	});
	addr_ipt.addEventListener("keyup",function(){
		suggestHandle();
	});