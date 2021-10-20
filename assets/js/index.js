function preloader() {
	var preloader = document.getElementById('preloader');
	preloader.style.visibility = 'hidden';
	preloader.style.opacity = '0';
	preloader.style.transition = '0.5s';
}

function createCircle() {
	const animationBox = document.getElementById('animationBox');
	const colors = ['#FFB003', '#FD8502', '#FF7000', '#FE4902'];

	for (var i = 0; i < 20; i++) {
		// Create 10 SPAN elements for confetti
		var span = document.createElement('span');
		span.classList.add('circleAnimi');
		animationBox.appendChild(span);
	}

	var circleAnimi = document.querySelectorAll('.circleAnimi');

	for (var i = 0; i < circleAnimi.length; i++) {
		var size = Math.random() * 10;

		circleAnimi[i].style.width = 15 + size + 'px';
		circleAnimi[i].style.height = 15 + size + 'px';
		circleAnimi[i].style.borderRadius = '100%';
		circleAnimi[i].style.top = Math.random() * innerHeight + 'px';
		circleAnimi[i].style.left = Math.random() * innerWidth + 'px';

		const borderColor = colors[Math.floor(Math.random() * colors.length)];
		circleAnimi[i].style.border = '1px solid ' + borderColor;
	}
}
createCircle();

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById('navbar-nav-js').style.transform = 'scale(0.9)';
		document.getElementById('navbar').style.background = 'rgba(0,0,0,0.5)';
		document.getElementById('navbar').style.backdropFilter = 'blur(5px)';
	} else {
		document.getElementById('navbar-nav-js').style.transform = 'scale(1)';
		document.getElementById('navbar').style.background = 'transparent';
		document.getElementById('navbar').style.backdropFilter = 'blur(0px)';
	}
}

document
	.getElementById('navbar-toggler')
	.addEventListener('click', function () {
		var collapsed = this.classList;
		var iconTop = document.querySelector('.navbar-toggler-icon.top');
		var iconCenter = document.querySelector('.navbar-toggler-icon.center');
		var iconBottom = document.querySelector('.navbar-toggler-icon.bottom');

		if (collapsed.contains('closed')) {
			iconCenter.style.transform = 'scale(0)';
			iconTop.style.transform = 'translate(4px, 5px) rotate(45deg)';
			iconBottom.style.transform = 'translate(4px, -9px) rotate(-45deg)';
			this.classList.remove('closed');
		} else {
			iconCenter.style.transform = 'scale(1)';
			iconTop.style.transform = 'rotate(0deg)';
			iconBottom.style.transform = 'rotate(0deg)';
			this.classList.add('closed');
		}
	});
