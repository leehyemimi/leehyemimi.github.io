//$.noConflict();
var no1 = {}; //�������� ����� ���ӽ����̽� no1
var cont_h,cont,img_box,tMenu,wHeight,iHeight,iWidth,_top,$className, $classNum; // ���� ����
var elm;
var order;
var checkStatus = 0;

 /* lee */
 var temp = 0; // ���콺 ��ư ī��Ʈ ����
/* e: lee */

$(document).ready(function(){

	var layer_h = $(window).height();
	$(".business_layer").css("height",layer_h);
	$(".business_layer").css("top", layer_h * 2);
	
	//$ Easing
    $.easing['jswing'] = $.easing['swing'];
    $.extend($.easing, {
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b; if (t == d) return b + c; if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b; return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    });
    
    // scroll
	var scrollEvent = true;
    // �ʱ�ȭ
    init();
  
    // ��������� ����
    $(window).resize(function() {
    	
		var layer_h = $(window).height();
    	$(".business_layer").css("height",layer_h);
		$(".business_layer").css("top", layer_h * 2);

		//2014.12.29 (S)

		cont_w = $('.slide').width();
		cont = $('.inner'); //�������� ������
		cont_box = $('.touchSlider'); //�������� ������
		tMenu = $('#tmenu'); //�������� �޴�
		//wHeight = $(window).height(); //ȭ�� ����
		iHeight = ($(window).height() / 2); //ȭ���� �����߾�����
		iWidth = ($('.slide').width() / 2); //ȭ���� �����߾�����
		cont.css({left: iWidth}); // �������� ������ ��ǥ

		//2014.12.29 (E)
    	
    	$('#header').removeClass('relative').addClass('fixed');
		$('#utilMenu').removeClass('fixed').addClass('absolute');
		$('#header').animate({ top:0,left:0 },0);
		$('#utilMenu').animate({ top:30,right:35 },0);

		/* 2014.12.29 (S)

		if (wHeight > 768){
	    	cont.css({top:iHeight}); // �������� ������ ��ǥ
	    	cont_box.css({top:iHeight}); // �������� ������ ��ǥ
    	} else if(wHeight < 768) {
    		cont.css({top:384}); // �������� ������ ��ǥ
    		cont_box.css({top:384}); // �������� ������ ��ǥ
    	}

		2014.12.29(E) */		

		//scrollEvent = true; // ��ũ�ѿ� ���� �޴� ����
    });
    
    // �����̵�
    cont_h = $(window).height();
    

    
	$('#tmenu a').click(function(e){
		/* lee */
		imsi1 = $(this).attr('class');
		imsi2 = $(this).attr('class').slice(1,2);
		temp = imsi2
		//if(temp == "9 bottom1"){
			//temp = "9"
		//}
		login_line_h = $(".login_line").height();


		$('#tmenu a').removeClass("on")
		$(this).addClass("on")

		/* e: lee */
		
		checkStatus = 1;
		scrollEvent = false; // ��ũ�ѿ� ���� �޴� ���� ����
		_top = $($(this).attr('href')).position().top;
		
		var el = $(this);

		/* lee */
		if( temp == 0 ){
		_top  = _top;
		}else{
		_top = _top+login_line_h;
		}
		/* e: lee */



		$('html, body').stop().animate({scrollTop: _top },400,'jswing', function() {
			el.parent().removeClass().addClass('navi-' + $className);
			scrollEvent = true; // ��ũ�ѿ� ���� �޴� ���� ����
			checkStatus = 0;
		});

		$className = $(this).attr('class');
		order = $(this).attr('class').slice(1);


    	//$("#touchSlider" + order + "_paging").children().remove();
    	
        e.preventDefault();
	});
    
	// ��� �ΰ�, �޴� ��濡 ���� color�� ����
	var scrollTop = function (sTop) {
		if (sTop > 2900) {
			//$("#header li").removeClass( 'white-text' );
		} else {
			//$("#header li").addClass( 'white-text' );
		} if (sTop < 895) {
			//$("#header li").removeClass( 'white-text' );
		}
	};
	
	// ��ũ�� ��
	$(window).scroll(function() {
		
		var sTop = $(this).scrollTop();
		sTop = parseInt(sTop);
		scrollTop(sTop);
		
		$('#header').removeClass('relative').addClass('');
		$('#tmenu').removeClass('absolute').addClass('fixed');
		$('#utilMenu').removeClass('absolute').addClass('fixed');
    	$('#tmenu').animate({ top:22,left:21 },0);
		$('#utilMenu').animate({ top:30,right:35 },0);

		if (!scrollEvent) {
			return;
			
		}

		
		var sheight = $(window).scrollTop();



		/* lee */
		/*if (sheight >= 0 && sheight <= 1091) {
			$('#tmenu').removeClass();
		}else if (sheight >= 1092 && sheight <= 1986) {
			$('#tmenu').removeClass().addClass('navi-n1');
		}else if (sheight >= 1987 && sheight <= 2881) {
			$('#tmenu').removeClass().addClass('navi-n2');
		}else if(sheight >= 2882 && sheight <= 3776){
			$('#tmenu').removeClass().addClass('navi-n3');
		}else if(sheight >= 3777){
			$('#tmenu').removeClass().addClass('navi-n4');
		}*/
		/* e: lee */

	});
	
	var stats = true;

	 /* ũ�� ��ũ�� �Լ� 141226 */

	$(window).bind('mousewheel', function(event) {

		if( checkStatus != 0 ) {
	        return false;
			
	    }


		/* if ( event.originalEvent.wheelDelta > 0 ) {
			temp--;
			
		} else {
			temp++;

		}
		
		if( temp > 9) {
			temp = 9;
		}
		
		if( temp < 0) {
			temp = 0;
		} */

		/* lee */
		if ( event.originalEvent.wheelDelta > 0 ) {

			if( temp > 0) {
				temp--;
			}else{

			}

		} else {
			if( temp < 9) {
				temp++;
			}
			
		}	
		/* e: lee */


	
		$('#tmenu .' + 'n'+temp ).click();
		return false;
		
	});
});

function scrollTo(el) {
	var target_id='#' + el;
	$('body, html').css('scrollTop', $(target_id).offset().top);
	$('body, html').animate({ scrollTop: $(target_id).offset().top }, 1000); 
	window.scrollTo(0, $(target_id).offset().top);


}


// �ʱ�ȭ
function init (){
	//wHeight = $(window).height();
	cont = $('.inner');
	cont_box = $('.touchSlider');
	tMenu = $('#tmenu');
	iWidth = ($('.cont').width() / 2);
	cont.css({left: iWidth, top:iHeight}).show();

	/* 2014.12.29 (S)
	if (wHeight > 768){
    	cont.css({top:iHeight}); // �������� ������ ��ǥ
	} else if(wHeight < 768) {
		cont.css({top:384}); // �������� ������ ��ǥ
	}
	2014.12.29 (E)*/
}


 /* �ͽ� ��ũ�� �Լ� 141226 */
//var tempNum = 0;
function wheel(event){
    var delta = 0;
    
    if( checkStatus != 0 ) {
        return false;
    }
    
    if (!event) event = window.event;    
    if (event.wheelDelta) {
        delta = event.wheelDelta/120; 
        if (window.opera) delta = -delta;
    } else if (event.detail) {
        delta = -event.detail/3;
    }

	/*
    if ( delta > 0 ) {
    	tempNum--;
    } else {
    	tempNum++;
    }
        
    if( tempNum > 9) {
    	tempNum = 9;
    }
        
    if( tempNum < 0) {
    	tempNum = 0;
    }*/


	/* lee */
		if ( delta > 0 ) {
		
			if( temp > 0) {
				temp--;
			}else{

			}

		} else {
			if( temp < 9) {
				temp++;
			}
			
		}	
	/* e: lee */

    /* $('#tmenu .' + 'n'+tempNum ).click(); */

	/* lee */
	$('#tmenu .' + 'n'+temp ).click();
	/* e: lee */
		


    return false;
}
 
/* Initialization code. */
if (window.addEventListener) {
    window.addEventListener('DOMMouseScroll', wheel, false);
} else {
    window.onmousewheel = document.onmousewheel = wheel;
}


//���콺 �¿���
	$(document).ready(function () {
		$('.img-hover').hover(
			function () {
				var img = $(this).attr('src').replace('_off', '_on');
				$(this).attr('src', img);
			},
			function () {
				var img = $(this).attr('src').replace('_on', '_off');
				$(this).attr('src', img);
			}
		);
	});