window.onload=function(){for(var e=document.getElementById("btn_ul"),n=document.getElementById("show_ul"),t=e.getElementsByTagName("li"),l=0;l<t.length;l++)t[l].index=l,t[l].onclick=function(){for(var e=0;e<t.length;e++)t[e].className=" ";this.className="btn_hover",n.style.left=-900*this.index+"px"}};