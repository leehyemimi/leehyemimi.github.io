//setup an interval so we can throttle the `scroll` event handler since there will be tons of `scroll` events fired

var timer = setInterval(function () {
	scrollOK = true;
}, 50);//run this every tenth of a second

var scrollOK = true;//setup flag to check if it's OK to run the event handler
var scrollFinish = 0;
var requsetSet = true; 
var i = 1;
var h = $(window).height;

function scroll(event) {//check if it's OK to run code
	if (scrollOK) {//set flag so the interval has to reset it to run this event handler again
		scrollOK = false;// ����  ��ũ�� ���̰� ������ ���̺��� Ŭ ��� = ��ũ���� ���� ����.
		
		
		if($(this).scrollTop() > scrollFinish) {//now load more list-items because the user is within 100px of the bottom of the page
			if(requsetSet) {

				console.log(i);
				
				event.preventDefault();
				$('html,body').stop.animate({scrollTop:h * i}, 500,function(){

				});
				
			// ��ũ�� ������ ���� ���� ó�� �ڵ� �����ϸ� �ȴ�. hidden ó���� �ϴ��� animate �� ����� �������� �Ѵٴ���
			}// ����  ��ũ�� ���̰� ������ ���̺��� ���� ��� = ��ũ���� �ø� ����.
			

		} else if($(this).scrollTop() < scrollFinish) {
			//i--;

			if(requsetSet) {
			//event.preventDefault();
			//$('html,body').animate({scrollTop:$('#slide-' + i ).offset().top}, 500);
			// ��ũ�� �÷��� ���� ���� ó�� �ڵ� �����ϸ� �ȴ�. hidden ó���� �ϴ��� animate �� ����� �������� �Ѵٴ���
			
			}
		}

		// ���� ��ũ�� ���̸� ���� ������ ���� ������ scrollFinish ������ ����.
		scrollFinish = $(this).scrollTop();
	}
}

$(document).ready(function() {
	$(window).bind('scroll', scroll);
});
