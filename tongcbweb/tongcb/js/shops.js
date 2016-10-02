define(['jquery','handledata'],function($,handledata){
	return  {
		listShop:function(){
			$.ajax({
				type:'get',
				url:"http://localhost:3000/data/pagecount/1",
				dataType:'text',//服务器端返回的数据是text格式
				success:function(data){
					var data=JSON.parse(data);
					handledata.createGetData(data.shop_data);
				},
				error:function(e){
					console.log("发生错误！");
				}
			})
		}
	}
})