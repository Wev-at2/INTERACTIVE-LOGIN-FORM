alert("Try to enter username or password to see the deadpool reacting to your actions.");
$(document).ready(function(){
	$(":text").focus(function(){
		$(".handl").css({
			transform: 'rotate(0deg)',
			bottom: '180px',
			left:'40px',
			height:'45px',
			width:'35px'
		});
		$(".handr").css({
			transform: 'rotate(0deg)',
			bottom: '180px',
			left:'210px',
			height:'45px',
			width:'35px'
		});
		$(".eyeball1").css({
			top: '40px',
			left: '24px'
		});
		$(".eyeball2").css({
			top: '40px',
			left: '6px'
		});
		$(".dialog").css({
			display: 'none',
		});
	});
	$(":password").focus(function(){
		$(".eyeball1").css({
			top: '30px',
			left: '20px'
		});
		$(".eyeball2").css({
			top: '30px',
			left: '10px'
		});
		$(".handl").css({
			transform: 'rotate(-150deg)',
			bottom: '215px',
			left:'80px',
			height:'80px',
			width:'40px'
		});
		$(".handr").css({
			transform: 'rotate(150deg)',
			bottom: '215px',
			left:'160px',
			height:'80px',
			width:'40px'
		});
		$(".dialog").css({
			display: 'flex',
		});
	});
	$(":button").focus(function(){
		$(".eyeball1").css({
			top: '30px',
			left: '20px'
		});
		$(".eyeball2").css({
			top: '30px',
			left: '10px',
		});
		$(".handl").css({
			transform: 'rotate(0deg)',
			bottom: '180px',
			left:'40px',
			height:'45px',
			width:'35px',
		});
		$(".handr").css({
			transform: 'rotate(0deg)',
			bottom: '180px',
			left:'210px',
			height:'45px',
			width:'35px'
		});
		$(".dialog").css({
			display: 'none',
		});
	});
});