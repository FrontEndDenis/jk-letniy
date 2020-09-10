$(document).ready(function () {
	svg4everybody({});
	// Слайдер
	$('.about-complex__slider').owlCarousel({
		loop: true,
		nav: true,
		margin: 32,
		smartSpeed: 1500,
		dots: false,
		navText: ['<svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.898901 13.1739L12.7571 1.31606C13.5115 0.561366 14.7345 0.561367 15.4884 1.31606C16.2425 2.07008 16.2425 3.29303 15.4884 4.047L4.99573 14.5394L15.4881 25.0314C16.2422 25.7858 16.2422 27.0086 15.4881 27.7626C14.7341 28.517 13.5112 28.517 12.7568 27.7626L0.898594 15.9046C0.521584 15.5274 0.333292 15.0335 0.333292 14.5395C0.333292 14.0451 0.521951 13.5509 0.898901 13.1739Z"/></svg>', '<svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1011 15.8261L4.24286 27.6839C3.48853 28.4386 2.26552 28.4386 1.51156 27.6839C0.757535 26.9299 0.757535 25.707 1.51156 24.953L12.0043 14.4606L1.51187 3.96856C0.757844 3.21423 0.757844 1.9914 1.51187 1.23738C2.26589 0.483049 3.48884 0.483049 4.24317 1.23738L16.1014 13.0954C16.4784 13.4726 16.6667 13.9665 16.6667 14.4605C16.6667 14.9549 16.4781 15.4491 16.1011 15.8261Z"/></svg>'],
		responsive: {
			1680: {
				items: 4,
			},
			1024: {
				items: 3,
			},
			768: {
				items: 2,
			},
			0: {
				items: 1,
				dots: true,
			}
		}
	});
});


function isDevice() {
	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	}
	if (isMobile.any()) {
		console.log('Мобилка');
		return true;
	} else {
		console.log('Пк');
		return false;
	}
}

function animationPhone() {
	const t = document.querySelectorAll('.form-group label');
	t.forEach(e => {
		if (isDevice()) {
			e.addEventListener('onclick', () => addClass(e));
		} else {
			e.addEventListener('mouseover', () => addClass(e));
			e.addEventListener('mouseout', () => removeClass(e));
		}
		e.addEventListener('onblur', () => addClass(e));
	});
	const addClass = n => {
		n.classList.add('active')
	}
	const removeClass = n => {
		n.classList.remove('active')
	}
}

animationPhone();

function scrollHeader() {
	document.addEventListener('wheel', () => {
		let lY = 0;
		let scrollTop = scrollY;
		const h = document.querySelector('.header');
		if(scrollTop > 0){
			// h.classList.add('scroll-dwn');
			h.classList.add('scroll');
			// if (lY > scrollY) {
			// 	h.classList.add('scroll');
			// } else {
			// 	h.classList.remove('scroll');
			// }
		} else{
			h.classList.remove('scroll');
			// h.classList.remove('scroll-dwn');
		}
		lY = scrollY;
	});
}

scrollHeader();










function ajax(form) {
	$.ajax({
		type: "POST",
		url: "form.php",
		data: form.serialize()
	})
		.done(function () {
			$(".modal").modal("hide");

			setTimeout(() => $('#modal-application').modal('show'), 100);

			if (form.attr('id') === 'form-callback') {
				yaCounter66345070.reachGoal('otpravka_zvonok'); gtag('event', 'zvonok', { 'event_category': 'otpravit_zvonok', 'event_action': 'click' }); gtag('event', 'page_view', { 'page_path': '/otpavka-zvonok-form' });
			}
			if (form.attr('id') === 'form-price') {
				yaCounter66345070.reachGoal('otpravka_stoimost'); gtag('event', 'zapros', { 'event_category': 'otpravit_stoimost', 'event_action': 'click' }); gtag('event', 'page_view', { 'page_path': '/otpavka-stoimost-form' });
			}
			if (form.attr('id') === 'form-plan') {
				yaCounter66345070.reachGoal('planirovka _otpravka'); gtag('event', 'planirovka', { 'event_category': 'otpravit_planirovka', 'event_action': 'click' }); gtag('event', 'page_view', { 'page_path': '/otpavka-planirovka-form' });
			}
			if (form.attr('id') === 'form-consultation') {
				yaCounter66345070.reachGoal('otpravka_voprosy'); gtag('event', 'voprosy', { 'event_category': 'otpravform_voprosy', 'event_action': 'click' }); gtag('event', 'page_view', { 'page_path': '/otpavka-voprosy-form' });
			}

			form.trigger("reset");
		})
		.fail(function (jqXHR, textStatus) {
			console.error(textStatus);
		})
		.always(function () {
			setTimeout(function () {
				form.find('[type=submit]').prop('disabled', false);
			}, 600);
		});
}