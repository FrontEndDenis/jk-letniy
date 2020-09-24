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
				navText: ['<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.559514 5.4696L5.30281 0.726447C5.60454 0.424569 6.09375 0.424569 6.39533 0.726447C6.69694 1.02806 6.69694 1.51724 6.39533 1.81882L2.19825 6.01578L6.39521 10.2126C6.69682 10.5143 6.69682 11.0035 6.39521 11.3051C6.0936 11.6068 5.60442 11.6068 5.30269 11.3051L0.559392 6.56185C0.408587 6.41097 0.333271 6.21344 0.333271 6.01581C0.333271 5.81808 0.408734 5.6204 0.559514 5.4696Z"/></svg>', '<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.44048 6.5304L1.69718 11.2736C1.39545 11.5754 0.906245 11.5754 0.604661 11.2736C0.303052 10.9719 0.303052 10.4828 0.604661 10.1812L4.80175 5.98422L0.604785 1.7874C0.303176 1.48567 0.303176 0.996535 0.604785 0.694926C0.906394 0.393195 1.39557 0.393195 1.6973 0.694926L6.4406 5.43815C6.5914 5.58903 6.66672 5.78656 6.66672 5.98419C6.66672 6.18192 6.59126 6.3796 6.44048 6.5304Z"/></svg>'],
				
			}
		}
	});
	$('.s-layouts__slider').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 1500,
		dots: false,
		navText: ['<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.559514 5.4696L5.30281 0.726447C5.60454 0.424569 6.09375 0.424569 6.39533 0.726447C6.69694 1.02806 6.69694 1.51724 6.39533 1.81882L2.19825 6.01578L6.39521 10.2126C6.69682 10.5143 6.69682 11.0035 6.39521 11.3051C6.0936 11.6068 5.60442 11.6068 5.30269 11.3051L0.559392 6.56185C0.408587 6.41097 0.333271 6.21344 0.333271 6.01581C0.333271 5.81808 0.408734 5.6204 0.559514 5.4696Z"/></svg>', '<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.44048 6.5304L1.69718 11.2736C1.39545 11.5754 0.906245 11.5754 0.604661 11.2736C0.303052 10.9719 0.303052 10.4828 0.604661 10.1812L4.80175 5.98422L0.604785 1.7874C0.303176 1.48567 0.303176 0.996535 0.604785 0.694926C0.906394 0.393195 1.39557 0.393195 1.6973 0.694926L6.4406 5.43815C6.5914 5.58903 6.66672 5.78656 6.66672 5.98419C6.66672 6.18192 6.59126 6.3796 6.44048 6.5304Z"/></svg>'],
		responsive: {
			0: {
				items: 1,
			}
		}
	});
	// Открытие мобильного меню
	$('.mobile-menu__overlay, .hamburger, .mobile-menu__body a').click(function () {
		activeMenu();
	});

	function activeMenu() {
		$('.hamburger').toggleClass('open');
		$('.mobile-menu').fadeToggle();
		$('.mobile-menu').toggleClass('active');
		$('body').toggleClass('scroll');
	}
	// Маска телефона
	$('input[type="tel"]').mask('0 (000) 000-00-00'), {autoclear: false};

	// input анимация
	$('.form-group input').focus(function () {
		$(this).parents('.form-group label').addClass('active');
	});
	$('.form-group input').blur(function () {
		var inputValue = $(this).val();
		if (inputValue == "") {
			$(this).parents('.form-group label').removeClass('filled');
			$(this).parents('.form-group label').removeClass('active');
		} else {
			$(this).parents('.form-group label').addClass('filled');
		}
	});

	//Валидация
	(function() {
		var $forms = $('.needs-validation');

		$forms.submit(function(event) {
			$(this).addClass('was-validated');
			event.preventDefault();
			event.stopPropagation();

			if ($(this)[0].checkValidity() === false) {

			} else {
				ajax($(this));
				$(this).find('[type=submit]').prop('disabled', true);
			}
		});
	})();

	function ajax(form) {
		$.ajax({
			type: "POST",
			url: "form.php",
			data: form.serialize()
		})
			.done(function () {
				$(".modal").modal("hide");
				setTimeout(() => $('#modal3').modal('show'), 300);
				if (form.attr('id') === 'form-feedback') {
					yaCounter67549219.reachGoal('otpravka_detali'); gtag('event', 'detali', { 'event_category': 'otpravform_detali', 'event_action': 'click' }); gtag('event', 'page_view', { 'page_path': '/otpavka-detali-form' });
				}
				if (form.attr('id') === 'form-footer') {
					yaCounter67549219.reachGoal('otpravka_voprosy'); gtag('event', 'voprosy', { 'event_category': 'otpravform_voprosy', 'event_action': 'click' }); gtag('event', 'page_view', { 'page_path': '/otpavka-voprosy-form' });
				}
				if (form.attr('id') === 'form-modal-plan') {
					yaCounter67549219.reachGoal('otpravka_stoimost'); gtag('event', 'zapros', { 'event_category': 'otpravit_stoimost', 'event_action': 'click' }); gtag('event', 'page_view', { 'page_path': '/otpavka-stoimost-form' });
				}
				if (form.attr('id') === 'form-modal-feedback') {
					yaCounter67549219.reachGoal('otpravka_zayavka'); gtag('event', 'zayavka', { 'event_category': 'otpravit_zayavka', 'event_action': 'click' }); gtag('event', 'page_view', { 'page_path': '/otpavka-zayavka-form' });
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
});

function scrollHeader() {
	const header = document.querySelector('.header');
	let scrollTop = 0;
	
	document.addEventListener('scroll', () => {
		if (scrollY > 0) {
			if (scrollTop > scrollY) {
				header.classList.remove('scroll-dwn');
			} else {
				header.classList.add('scroll-dwn');
			}
			scrollTop = scrollY;
			header.classList.add('scroll');
		} else {
			header.classList.remove('scroll');
		}
	});
}
scrollHeader();

// Аккардион
function accardionAnimation() {
	let acc = document.querySelectorAll('.accordion');

	acc.forEach(item => {
		item.addEventListener('click', function() {
			this.classList.toggle("active");
			let panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
			  	panel.style.maxHeight = null;
			} else {
			  	panel.style.maxHeight = panel.scrollHeight + "px";
			} 
		});
	})
}
accardionAnimation();

function scrollAnimation() {
	const anchors = document.querySelectorAll('a[href*="#"]');

	anchors.forEach(item => {
		item.addEventListener('click', function (e) {
			e.preventDefault()
			const blockID = item.getAttribute('href').substr(1)
			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	});
}
scrollAnimation();

function layoutsInfo() {
	let obj = [{
		title: '1-комнатная квартира',
		area: '35.3 м²',
		livingArea: '26.6 м²',
		roomArea: '21.1 м²',
		kitchenArea: '5.5 м²',
		wcArea: '4.4 м²',
		ceilingHeight: '3 м',
		img: 'static/images/content/plan-1.png',
		id: 0
	}, {
		title: 'Студия',
		area: '31.5 м²',
		livingArea: '26.6 м²',
		roomArea: '21.1 м²',
		wcArea: '3.8 м²',
		ceilingHeight: '3 м',
		img: 'static/images/content/plan-2.png',
		id: 1
	}, {
		title: 'Студия',
		area: '28.4 м²',
		livingArea: '18 м²',
		roomArea: '18 м²',
		wcArea: '3.8 м²',
		ceilingHeight: '3 м',
		img: 'static/images/content/plan-3.png',
		id: 2
	}, {
		title: 'Студия',
		area: '28.4 м²',
		livingArea: '18 м²',
		roomArea: '18 м²',
		wcArea: '3.8 м²',
		ceilingHeight: '3 м',
		img: 'static/images/content/plan-4.png',
		id: 3
	}, {
		title: 'Студия',
		area: '31.5 м²',
		livingArea: '21.1 м²',
		roomArea: '21.1 м²',
		wcArea: '3.8 м²',
		ceilingHeight: '3 м',
		img: 'static/images/content/plan-5.png',
		id: 4
	}, {
		title: '1-комнатная квартира',
		area: '35.3 м²',
		livingArea: '26.6 м²',
		roomArea: '21.1 м²',
		kitchenArea: '5.5 м²',
		wcArea: '4.4 м²',
		ceilingHeight: '3 м',
		img: 'static/images/content/plan-6.png',
		id: 5
	}, {
		title: '1-комнатная квартира',
		area: '35.3 м²',
		livingArea: '26.6 м²',
		roomArea: '21.1 м²',
		kitchenArea: '5.5 м²',
		wcArea: '4.4 м²',
		ceilingHeight: '3 м',
		img: 'static/images/content/plan-7.png',
		id: 6
	}, {
		title: 'Студия',
		area: '23.9 м²',
		livingArea: '15.2 м²',
		roomArea: '15.2 м²',
		wcArea: '3.6 м²',
		ceilingHeight: '3 м',
		img: 'static/images/content/plan-8.png',
		id: 7
	}, {
		title: 'Студия',
		area: '23.9 м²',
		livingArea: '15.2 м²',
		roomArea: '15.2 м²',
		wcArea: '3.6 м²',
		ceilingHeight: '3 м',
		img: 'static/images/content/plan-9.png',
		id: 8
	}, {
		title: 'Студия',
		area: '23.9 м²',
		livingArea: '15.2 м²',
		roomArea: '15.2 м²',
		wcArea: '3.6 м²',
		ceilingHeight: '3 м',
		img: 'static/images/content/plan-10.png',
		id: 9
	}, {
		title: 'Студия',
		area: '23.9 м²',
		livingArea: '15.2 м²',
		roomArea: '15.2 м²',
		wcArea: '3.6 м²',
		ceilingHeight: '3 м',
		img: 'static/images/content/plan-11.png',
		id: 10
	}, {
		title: '1-комнатная квартира',
		area: '35.3 м²',
		livingArea: '26.6 м²',
		roomArea: '21.1 м²',
		kitchenArea: '5.5 м²',
		wcArea: '4.4 м²',
		ceilingHeight: '3 м',
		img: 'static/images/content/plan-12.png',
		id: 11
	}];

	const plan = document.querySelectorAll('.plan');

	plan.forEach(item => {
		item.addEventListener('click', () => {
			planModal(item);
		});
	});

	function planModal(el) {
		let dataId = el.getAttribute('id-plan'),
			title = obj[dataId].title,
			area = obj[dataId].area,
			livingArea = obj[dataId].livingArea,
			roomArea = obj[dataId].roomArea,
			kitchenArea = obj[dataId].kitchenArea,
			wcArea = obj[dataId].wcArea,
			ceilingHeight = obj[dataId].ceilingHeight,
			img = obj[dataId].img;

		const modal = document.querySelector('#modal');

		document.querySelector('#title').textContent = title;
		document.querySelector('#area').textContent = area;
		document.querySelector('#living-area').textContent = livingArea;
		document.querySelector('#room').innerHTML = 'Площадь комнаты:' + '<span>' + roomArea + '</span>';
		if(kitchenArea === undefined) {
			document.querySelector('#kitchen').style.display = 'none';
		} else {
			document.querySelector('#kitchen').style.display = 'block';
			document.querySelector('#kitchen').innerHTML = 'Площадь кухни:' + '<span>' + kitchenArea + '</span>';
		}
		document.querySelector('#wc').innerHTML = 'Площадь санузлов:' + '<span>' + wcArea + '</span>';
		document.querySelector('#ceiling').innerHTML = 'Высота потолков:' + '<span>' + ceilingHeight + '</span>';
		document.querySelector('#img').setAttribute('src', img);
		openModal(modal);
	}
}

function openModal(el) {
	$(el).modal();
}
layoutsInfo();