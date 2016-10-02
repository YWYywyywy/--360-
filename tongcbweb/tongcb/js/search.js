define(function(){
	 return {
	 	search:function(){
	 		//关键字搜索补全
	 		//创建一个script文件
	 		var addr_ipt=document.getElementsByClassName("addr_ipt")[0];
			function addScript(src,name){
				var script=document.createElement("script");
				script.setAttribute("type","text/javascript");
				script.src=src;
				script.setAttribute("dd-name",name);
				document.body.appendChild(script);
			}
			//关键字搜索补全
	var addr_ipt=document.getElementsByClassName("addr_ipt")[0];
	function suggestHandle(){
		var name="search";
		var body=document.getElementsByTagName('body')[0];
		var script=document.getElementsByTagName('script');
		for(var i=0;i<script.length;i++){
			if(script[i].getAttribute("dd-name")=="search"){
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
			if(index<=6){
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
			}
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
		
	},500)
	var myp=document.getElementsByClassName("myp");
	addr_ipt.addEventListener("focusin",function(){
		suggestHandle();
	});
	addr_ipt.addEventListener("keyup",function(){
		suggestHandle();
	});
	 }
	}
});