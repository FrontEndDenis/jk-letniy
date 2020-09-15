"use strict";

ymaps.ready(function () {
	let isMobile = {
		Android: function () { return navigator.userAgent.match(/Android/i); },
		BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
		iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
		Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
		Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	let myMap = new ymaps.Map("map", {
		center: [43.490516, 39.897000],
		controls: ['zoomControl'],
		zoom: 14
	}),
		// Инициализация коллекций
		oneCollection = new ymaps.GeoObjectCollection({}, {
			iconLayout: 'default#imageWithContent',
			iconImageHref: `static/images/general/mark-c.svg`,
			iconImageSize: [35, 48],
			iconImageOffset: [-17, -48],
			hideIconOnBalloonOpen: false,
			balloonOffset: [0, -35],
			balloonPanelMaxMapArea: 0,
		}),
		twoCollection = new ymaps.GeoObjectCollection({}, {
			iconLayout: 'default#imageWithContent',
			iconImageHref: `static/images/general/mark-h.svg`,
			iconImageSize: [35, 48],
			iconImageOffset: [-17, -48],
			hideIconOnBalloonOpen: false,
			balloonOffset: [0, -35],
			balloonPanelMaxMapArea: 0,
		}),
		threeCollection = new ymaps.GeoObjectCollection({}, {
			iconLayout: 'default#imageWithContent',
			iconImageHref: `static/images/general/mark-r.svg`,
			iconImageSize: [35, 48],
			iconImageOffset: [-17, -48],
			hideIconOnBalloonOpen: false,
			balloonOffset: [0, -35],
			balloonPanelMaxMapArea: 0,
		}),
		fourCollection = new ymaps.GeoObjectCollection({}, {
			iconLayout: 'default#imageWithContent',
			iconImageHref: `static/images/general/mark-l.svg`,
			iconImageSize: [35, 48],
			iconImageOffset: [-17, -48],
			hideIconOnBalloonOpen: false,
			balloonOffset: [0, -35],
			balloonPanelMaxMapArea: 0,
		}),
		myPlacemarkMain = new ymaps.Placemark([43.49508257454138, 39.908042499999944], {
			hintContent: 'г. Сочи, Хостинский район, Кудепста, ул. Искры, 85',
		  }, {
			iconLayout: 'default#imageWithContent',
			iconImageHref: 'static/images/general/mark.svg',
			iconImageSize: [208, 59],
			iconImageOffset: [-30, -59],
		  }, "balloonPanelMaxMapArea", 0),
		// Инициализация меток с балунами
		myPlacemark = new ymaps.Placemark([43.494690074565305 ,39.88861249999993], {
			balloonContentBody: `
				<div class="map-baloon">
					<div class="map-baloon__title">Chill Out</div>
					<div class="map-baloon__address">Сухумское шоссе, 51/3</div>
				</div>`
		}),
		myPlacemark2 = new ymaps.Placemark([43.48350557456138, 39.88968999999996], {
			balloonContentBody: `
				<div class="map-baloon">
					<div class="map-baloon__title">Престиж</div>
					<div class="map-baloon__address"><span">Просвещения, 163</div>
				</div>`
		}),
		myPlacemark3 = new ymaps.Placemark([43.472777574533715, 39.89606849999993], {
			balloonContentBody: `
				<div class="map-baloon">
					<div class="map-baloon__title">Грейс Арли</div>
					<div class="map-baloon__address">Ленина, 219д</div>
				</div>`
		}),
		myPlacemark4 = new ymaps.Placemark([43.494369574539526 ,39.89882599999998], {
			balloonContentBody: `
				<div class="map-baloon">
					<div class="map-baloon__title">5+</div>
					<div class="map-baloon__address">ул.Искры, 50</div>
				</div>`
		}),
		myPlacemark5 = new ymaps.Placemark([43.494761574540576, 39.89529549999992], {
			balloonContentBody: `
				<div class="map-baloon">
					<div class="map-baloon__title">Центр Эстетической медицины</div>
					<div class="map-baloon__address">Искры, 32</div>
				</div>`
		}),
		myPlacemark6 = new ymaps.Placemark([43.52209207453622, 39.873017499999946], {
			balloonContentBody: `
				<div class="map-baloon">
					<div class="map-baloon__title">Городская больница №3</div>
					<div class="map-baloon__address">Самшитовая, 4</div>
				</div>`
		}),
		myPlacemark7 = new ymaps.Placemark([43.48012357455259, 39.89282549999995], {
			balloonContentBody: `
				<div class="map-baloon">
					<div class="map-baloon__title">Мед центр Знание</div>
					<div class="map-baloon__address">Просвещения, 139</div>
				</div>`
		}),
		myPlacemark8 = new ymaps.Placemark([43.47758557454608, 39.8934095], {
			balloonContentBody: `
				<div class="map-baloon">
					<div class="map-baloon__title">Игровая комната Детский мир</div>
					<div class="map-baloon__address">Просвещения, 156в</div>
				</div>`
		}),
		myPlacemark9 = new ymaps.Placemark([43.49108607455597, 39.887201999999995], {
			balloonContentBody: `
				<div class="map-baloon">
					<div class="map-baloon__title">Пляж Бургас</div>
					<div class="map-baloon__address">Эпроновская, 1 к5</div>
				</div>`
		}),
		myPlacemark10 = new ymaps.Placemark([43.50069307453092, 39.88024899999998], {
			balloonContentBody: `
				<div class="map-baloon">
					<div class="map-baloon__title">Пляж Кудепста</div>
					<div class="map-baloon__address">Сухумское шоссе, 21/23</div>
				</div>`
		}),
		myPlacemark11 = new ymaps.Placemark([43.50523971667588, 39.91771991012567], {
			balloonContentBody: `
				<div class="map-baloon">
					<div class="map-baloon__title">Дом Лесника</div>
					<div class="map-baloon__address">Заречная улица, 45</div>
				</div>`
		}),
		myPlacemark12 = new ymaps.Placemark([43.495716574542975, 39.895088999999906], {
			balloonContentBody: `
				<div class="map-baloon">
					<div class="map-baloon__title">СОШ №18</div>
					<div class="map-baloon__address">Апшеронская, 1</div>
				</div>`
		}),
		myPlacemark13 = new ymaps.Placemark([43.49221807455886, 39.89712850000002], {
			balloonContentBody: `
				<div class="map-baloon">
					<div class="map-baloon__title">Дет сад №140</div>
					<div class="map-baloon__address">Искры, 50/6</div>
				</div>`
		}),
		myPlacemark14 = new ymaps.Placemark([43.49599757454375, 39.8935259999999], {
			balloonContentBody: `
				<div class="map-baloon">
					<div class="map-baloon__title">Дет сад №9</div>
					<div class="map-baloon__address">Ростовская, 10</div>
				</div>`
		}),
		// Инициализация проложения путей
		multiRoute1 = new ymaps.multiRouter.MultiRoute({
			referencePoints: [
				[43.49508257454138, 39.908042499999944],
				[43.448298074545264, 39.94144199999999]
			],
			params: {
				routingMode: 'masstransit',
				results: 1
			}
		},
			{
				wayPointStartIconLayout: "default#image",
				wayPointStartIconImageHref: "../../static/images/general/mark.svg",
				wayPointStartIconImageSize: [208, 59],
				wayPointStartIconImageOffset: [-30, -59],
				wayPointFinishIconLayout: "default#image",
				wayPointFinishIconImageHref: "../../static/images/general/airport.svg",
				wayPointFinishIconImageSize: [65, 81],
				wayPointFinishIconImageOffset: [-32, -81],
				routeStrokeColor: '#7B818C',
				routeActiveStrokeColor: '#FFD400',
			}),
		multiRoute2 = new ymaps.multiRouter.MultiRoute({
			referencePoints: [
				[43.49508257454138, 39.908042499999944],
				[43.59154507456565, 39.72805649999996]
			],
			params: {
				routingMode: 'masstransit',
				results: 1
			}
		},
			{
				wayPointStartIconLayout: "default#image",
				wayPointStartIconImageHref: "../../static/images/general/mark.svg",
				wayPointStartIconImageSize: [208, 59],
				wayPointStartIconImageOffset: [-30, -59],
				wayPointFinishIconLayout: "default#image",
				wayPointFinishIconImageHref: "../../static/images/general/train.svg",
				wayPointFinishIconImageSize: [65, 81],
				wayPointFinishIconImageOffset: [-32, -81],
				routeStrokeColor: '#7B818C',
				routeActiveStrokeColor: '#FFD400',
			});

	resizeZoomControl();
	window.addEventListener('resize', resizeZoomControl);

	function resizeZoomControl() {
		if (document.documentElement.clientWidth < 576) {
			myMap.controls.get('zoomControl').options.set('size', 'small');
		} else {
			myMap.controls.get('zoomControl').options.set('size', 'large');
		}
	}


	
	if (document.body.clientWidth >= 1200) {
		myMap.setZoom(14);
		myMap.setCenter([43.490516, 39.897000]);
	} else {
		myMap.setZoom(12);
		myMap.setCenter([43.490516, 39.920000]);
	}

	let items = document.querySelectorAll('.s-map__nav-item');

	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener('mouseup', function () {
			let id = this.getAttribute('href').slice(1);

			switch (id) {
				case 'places':
					myMap.setCenter([43.490516, 39.897000]);
					myMap.setZoom(14);
					myMap.geoObjects.remove(multiRoute1);
					myMap.geoObjects.remove(multiRoute2);
					oneCollection.add(myPlacemark).add(myPlacemark2).add(myPlacemark3);
					twoCollection.add(myPlacemark4).add(myPlacemark5).add(myPlacemark6).add(myPlacemark7);
					threeCollection.add(myPlacemark8).add(myPlacemark9).add(myPlacemark10).add(myPlacemark11);
					fourCollection.add(myPlacemark12).add(myPlacemark13).add(myPlacemark14);
					break;
				case 'driveway':
					myMap.setZoom(11);
					myMap.setCenter([43.52000, 39.75000]);
					myMap.geoObjects.add(multiRoute1);
					myMap.geoObjects.add(multiRoute2);
					oneCollection.remove(myPlacemark).remove(myPlacemark2).remove(myPlacemark3);
					twoCollection.remove(myPlacemark4).remove(myPlacemark5).remove(myPlacemark6).remove(myPlacemark7);
					threeCollection.remove(myPlacemark8).remove(myPlacemark9).remove(myPlacemark10).remove(myPlacemark11);
					fourCollection.remove(myPlacemark12).remove(myPlacemark13).remove(myPlacemark14);
					break;
			}
		});
	}

	// ctrl + скролл
	if (isMobile.any()) {
		myMap.behaviors.disable('drag');
	}

	myMap.behaviors.disable('scrollZoom');

	let overlay = document.querySelector('#map-ctrl'),
		ctrl = false;

	myMap.events.add('wheel', function (evt) {
		if (ctrl) return;

		overlay.style.visibility = "visible";
		overlay.style.opacity = "1";
		setTimeout(function () {
			overlay.style.opacity = "0";
			setTimeout(function () {
				overlay.style.visibility = "hidden";
			}, 1000);
		}, 1000);
	});

	myMap.behaviors.disable('scrollZoom');

	document.addEventListener('keydown', function (evt) {
		if (evt.key === 'Control') {
			myMap.behaviors.enable('scrollZoom');

			overlay.style.display = "none";
			ctrl = true;
		}
	});

	document.addEventListener('keyup', function () {
		myMap.behaviors.disable('scrollZoom');

		overlay.style.display = "flex";
		ctrl = false;
	});

	// myMap.controls.events.add('fullscreenenter', function (evt) {
	// 	myMap.behaviors.enable('scrollZoom');
	// });

	// myMap.controls.events.add('fullscreenexit', function (evt) {
	// 	myMap.behaviors.disable('scrollZoom');
	// });

	// Открытие балуна
	myMap.events.add('click', function() {
		if (myMap.balloon.isOpen()) {
			myMap.balloon.close();
		}
	});

	// Коллекция меток
	myMap.geoObjects.add(myPlacemarkMain);
	oneCollection.add(myPlacemark).add(myPlacemark2).add(myPlacemark3);
	twoCollection.add(myPlacemark4).add(myPlacemark5).add(myPlacemark6).add(myPlacemark7);
	threeCollection.add(myPlacemark8).add(myPlacemark9).add(myPlacemark10).add(myPlacemark11);
	fourCollection.add(myPlacemark12).add(myPlacemark13).add(myPlacemark14);

	$('.s-map__places-map button').on('click', function() {
		$('.s-map__places-map button').removeClass('active');
		$(this).addClass('active');
		addPie(this.dataset.value);
	});

	$('.s-map__places-map button').first().click();

	function addPie(str) {
		let obj = {one: 1, two: 1, three: 1, four: 1};

		if (str === 'all') {
		obj = Object.keys(obj);
			for (let i = 0; i < obj.length; i++) {
				myMap.geoObjects.add(eval(`${obj[i]}Collection`));
			}
			return;
		}

		if (obj[str]) {
			delete obj[str];
			obj = Object.keys(obj);

			for (let i = 0; i < obj.length; i++) {
				myMap.geoObjects.remove(eval(`${obj[i]}Collection`));
			}
			myMap.geoObjects.add(eval(`${str}Collection`));
		}
	}
});