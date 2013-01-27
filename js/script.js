$(function(){
	$.ajaxSetup({ 
		cache: false 
	}); 
	$('#h').load('http://bobing.xmnn.cn/api/my.php');
	//tab
		$('.tab .h li').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index=$('.tab .h li').index(this);
		$('.tab .b').eq(index).addClass('active').siblings('.b').removeClass('active');
	})
})
//左右滚动
function Slider(s){
	s.index=0;
	s.num=s.m.find('dl').length;
	s.next=s.m.find('.next');
	s.prev=s.m.find('.prev');
	s.ul=s.m.find('.img');
	s.ul.width(s.width*s.num);
	s.next.click(function(){
		slider_next();
		return false;
	})
	s.prev.click(function(){
		slider_prev();
		return false;
	})
	function slider(){
		s.ul.animate({left:-s.width*s.index},500);
	}
	function slider_next(){
		s.index++;
		if(s.index>s.num-s.show_num){
			s.index=0;	
		}
		slider();	
	}
	function slider_prev(){
		s.index--;
		if(s.index<0){
			s.index=s.num-s.show_num;	
		}
		slider();
	}
}
//上下滚动
function Slider1(s){
	s.index=0;
	s.num=s.m.find("dl").length;
	s.m.find(".next").click(function(){
		slider_next();
		return false;
	})
	s.m.find(".prev").click(function(){
		slider_prev();
		return false;
	})
	function slider(){
		s.m.find(".img").animate({top:-s.height*s.index},500);
	}
	function slider_next(){
		s.index++;
		if(s.index>s.num-s.show_num){
			s.index=0;	
		}
		slider();	
	}
	function slider_prev(){
		s.index--;
		if(s.index<0){
			s.index=s.num-s.show_num;	
		}
		slider();
	}
}
