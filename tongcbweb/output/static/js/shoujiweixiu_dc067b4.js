window.onload=function(){for(var e=document.getElementsByClassName("error_li"),t=document.getElementsByClassName("error_detail_li"),n=0;n<e.length;n++)e[n].index=n,e[n].onmouseover=function(){t[this.index].style.display="block"},e[n].onmouseout=function(){t[this.index].style.display="none"};var o=document.getElementById("nav_pre"),l=document.getElementById("nav_next"),i=document.getElementById("post_nav_ul");o.onclick=function(){0!==i.offsetLeft&&(i.style.left="0px")},l.onclick=function(){0==i.offsetLeft&&(i.style.left="-940px")};var s=document.getElementById("header"),n=1;setInterval(function(){n++,n>3&&(n=1),s.style.background="url('images/shoujiweixiu/header-"+n+".jpg') no-repeat center"},3e3)};