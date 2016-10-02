define(function(){
	return {
		//动态创建每个商家信息
		createShopList_item:function(start,end,totalData,shopDesc,shopAddr,Totalposition){
			 		var shopList=document.getElementsByClassName("cnt_right_1")[0];
			 	  	for(var j=start;j<end;j++){
				 		var everPosition=[];//存储每个商家的坐标
				 		shopAddr.push(totalData[j].addr);
				 		shopDesc.push(totalData[j].shop_desc);
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
				 		for(var k=0;k<5;k++){
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
	}
})