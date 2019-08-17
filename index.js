{
	window.$$ = window.Zepto = Zepto;
	$(window).ready(function() {
		var w = window.innerWidth;
		var h = window.innerHeight;
		$(".btn").width(w);
		$('#magazine').turn({
							width:w,
							height:h,
							display: 'single',
							acceleration: true,
							gradients: !$.isTouch,
							elevation:3000,
							when: {
								turned: function(e, page) {}
							}
					});
		var currentPage = $("#magazine").turn("page");
		$("#currentPage").html(currentPage);
	});
	//上一页
	function prevent(){
		 var pageCount = $("#magazine").turn("pages");//总页数
		 var currentPage = $("#magazine").turn("page")-1;//当前页
		 if (currentPage >= 1) {
		  $("#magazine").turn('page', currentPage);
		  $("#currentPage").html(currentPage);
		 } else {
		 	
		 	if(currentPage==0){
		 		$("#currentPage").html(1);
		 	}else{
		 		$("#currentPage").html(currentPage);
		 	}
		 	alert("第一页");
		 	return;
		 }
	}
	//下一页
	function next() {
		 var pageCount = $("#magazine").turn("pages");//总页数
		 var currentPage = $("#magazine").turn("page")+1;//当前页
		 if (currentPage <= pageCount) {
		  $("#magazine").turn('page', currentPage);
		   $("#currentPage").html(currentPage);
		 } else {
		 	if(currentPage==23){
		 		$("#currentPage").html(22);
		 	}else{
		 		$("#currentPage").html(currentPage);
		 	}
		 	alert("最后一页");
		 	return;
		 }
	}
	//点击上一页
	$("#pre").bind("touchend", function () {
	 	prevent();
	 });
	 
	//点击下一页
	
	 $("#next").bind("touchend", function () {
	   next()
	 });
 //返回到首页
   $("#index").bind("touchend", function () {
   $("#magazine").turn('page', 1); //跳转页数
   $("#currentPage").html(1);
   alert("这里是首页");
   });
//滑动翻页
 $$("#magazine").on("swipeleft",function(){
		next();
})
 $$("#magazine").on("swiperight",function(){
		prevent();
})		
}
