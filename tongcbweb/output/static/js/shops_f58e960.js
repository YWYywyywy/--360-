define(["jquery","handledata"],function(t,a){return{listShop:function(){t.ajax({type:"get",url:"http://localhost:3000/data/pagecount/1",dataType:"text",success:function(t){var t=JSON.parse(t);a.createGetData(t.shop_data)},error:function(){console.log("发生错误！")}})}}});