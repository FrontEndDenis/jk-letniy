"use strict";

// $(document).ready(function () {
//   ymaps.ready(function () {
//     var myMap = new ymaps.Map('map', {
//       center: [43.60099676197864,39.71682577116392],
//       controls: [],
//       zoom: 14
//     }, {
//     }),
//         oneCollection = new ymaps.GeoObjectCollection({}, {preset: "pin4#icon"}),
//         twoCollection = new ymaps.GeoObjectCollection({}, {preset: "pin4#icon"}),
//         threeCollection = new ymaps.GeoObjectCollection({}, {preset: "pin4#icon"}),
//         fourCollection = new ymaps.GeoObjectCollection({}, {preset: "pin4#icon"}),
//         fiveCollection = new ymaps.GeoObjectCollection({}, {preset: "pin4#icon"}),

//     myPlacemarkMain = new ymaps.Placemark([43.60099676197864,39.71682577116392], {
//       hintContent: 'Сочи, Виноградная улица, 14',
//     },{
//       iconLayout: 'default#imageWithContent',
//       iconImageHref: 'static/images/general/pin/main-pin.svg',
//       iconImageSize: [182, 52],
//       iconImageOffset: [-175, -45],
//     }, "balloonPanelMaxMapArea", 0),
//     myPlacemarkMain_1 = new ymaps.Placemark([43.58496957457362,39.74633699999999], {
//       hintContent: 'ЖК Лофт Парк в Сочи ​Сочи, ул. Пятигорская, 88/11Б',
//     }, {
//       iconLayout: 'default#imageWithContent',
//       iconImageHref: 'static/images/general/pin/pin_1.svg',
//       iconImageSize: [140, 52],
//       iconImageOffset: [-70, -52],
//     }),
//     myPlacemarkMain_2 = new ymaps.Placemark([43.63477257455227,39.71097949999994], {
//       hintContent: 'ЖК Грин Лофт Парк Сочи, ул. Целинная 13 г',
//     }, {
//       iconLayout: 'default#imageWithContent',
//       iconImageHref: 'static/images/general/pin/pin_2.svg',
//       iconImageSize: [140, 52],
//       iconImageOffset: [-70, -52],
//     }),
//     myPlacemarkMain_3 = new ymaps.Placemark([43.62241357457033,39.71637849999999], {
//       hintContent: 'ЖК ГОЛД ЛОФТ ПАРК СОЧИ Сочи, ул. Санаторная 9',
//     }, {
//       iconLayout: 'default#imageWithContent',
//       iconImageHref: 'static/images/general/pin/pin_3.svg',
//       iconImageSize: [140, 52],
//       iconImageOffset: [-70, -52],
//     }),
//     myPlacemarkMain_4 = new ymaps.Placemark([43.47190707455639,39.89714649999996], {
//       hintContent: 'Океанариум',
//     }, {
//       iconLayout: 'default#imageWithContent',
//       iconImageHref: 'static/images/general/pin/pin_4.png',
//       iconImageSize: [60, 60],
//       iconImageOffset: [-30, -30],
//     }),
//     myPlacemarkMain_5 = new ymaps.Placemark([43.46833426040381,39.89597096693417], {
//       hintContent: 'Аквапарк',
//     }, {
//       iconLayout: 'default#imageWithContent',
//       iconImageHref: 'static/images/general/pin/pin_5.png',
//       iconImageSize: [60, 60],
//       iconImageOffset: [-30, -30],
//     }),
//     myPlacemark = new ymaps.Placemark([43.597329574555644,39.71563249999999], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             Мимино 
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">Виноградная, 4</span>
//           </div>
//         </div>`
//     }),
//     myPlacemark1 = new ymaps.Placemark([43.58697407455384,39.7481965], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             Имерити
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">​Виноградная, 10/2</span>
//           </div>
//         </div>`
//     }),
//     myPlacemark2 = new ymaps.Placemark([43.59841957455843,39.71625249999995], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             Rice Paradise
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">Молодогвардейская улица, 2к34
//             </span>
//           </div>
//         </div>`
//     }),
//     myPlacemark3 = new ymaps.Placemark([43.60395557457268,39.71918099999996], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             La Petite
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">​Виноградная, 20а
//             </span>
//           </div>
//         </div>`
//     }),

//     myPlacemark4 = new ymaps.Placemark([43.601635114535505,39.72326849999996], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             ТЦ Black Galaxy
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">​Гагарина, 16/1
//             </span>
//           </div>
//         </div>`
//     }),
//     myPlacemark5 = new ymaps.Placemark([43.60481107454993,39.72805649999996], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             ТЦ Коммунстрой
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">Чайковского, 45/1
//             </span>
//           </div>
//         </div>`
//     }),
//     myPlacemark6 = new ymaps.Placemark([43.611753848302435,39.704245195770255], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             Пляж Альбатрос
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">Политехническая, 78
//             </span>
//           </div>
//         </div>`
//     }),
//     myPlacemark7 = new ymaps.Placemark([43.58527290575093,39.72435049999996], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             Пляж Ривьера 
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">​Ривьерский переулок, 4/5
//             </span>
//           </div>
//         </div>`
//     }),

//     myPlacemark8 = new ymaps.Placemark([43.59674857455408,39.723295499999985], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             СОШ №7  
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">Чайковского, 7
//             </span>
//           </div>
//         </div>`
//     }),
//     myPlacemark9 = new ymaps.Placemark([43.60316607454567,39.726232499999945], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             СОШ №24  
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">Цветной бульвар, 40
//             </span>
//           </div>
//         </div>`
//     }),
//     myPlacemark10 = new ymaps.Placemark([43.60930807456156,39.712937499999995], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             Радуга частная школа  
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">​Рахманинова переулок, 41
//             </span>
//           </div>
//         </div>`
//     }),

//     myPlacemark11 = new ymaps.Placemark([43.58527290575093,39.72435049999996], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             Сад Бабочек 
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">Егорова, 1/20
//             </span>
//           </div>
//         </div>`
//     }),
//     myPlacemark12 = new ymaps.Placemark([43.58588050633546,39.717164499999996], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             Комсомольский сквер
//           </div>
//         </div>`
//     }),
//     myPlacemark13 = new ymaps.Placemark([43.59960157326877,39.72576599999997], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             Цветной бульвар
//           </div>
//         </div>`
//     }),
//     myPlacemark14 = new ymaps.Placemark([43.59126108800372,39.715489], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             Парк Ривьера
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">​Егорова, 1/37
//             </span>
//           </div>
//         </div>`
//     }),

//     myPlacemark15 = new ymaps.Placemark([43.60317907454572,39.715326999999945], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             Городская больница №2
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">Туапсинская, 1​
//             </span>
//           </div>
//         </div>`
//     }),
//     myPlacemark16 = new ymaps.Placemark([43.601879574567306,39.722729500000014], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             Мед центр Армед
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">​Гагарина, 19а
//             </span>
//           </div>
//         </div>`
//     }),
//     myPlacemark17 = new ymaps.Placemark([43.6235885745734,39.714392999999966], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             Навигатор здоровья & Клевер
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">Санаторная улица, 14
//             </span>
//           </div>
//         </div>`
//     }),
//     myPlacemark18 = new ymaps.Placemark([43.604269074548505,39.71913599999996], {
//       balloonContentBody: `
//         <div class="map-content map-content--pomegranate">
//           <div class="map-title">
//             Мед центр Проклиник
//           </div>
//           <div class="map-foot">
//             <span class="map-metr">​Виноградная, 20
//             </span>
//           </div>
//         </div>`
//     });

//     myMap.events.add('click', function() {
//       if (myMap.balloon.isOpen()) {
//         myMap.balloon.close();
//       }
//     });

//     for (let i = 1; i <= 10; i++) {
//       ymaps.option.presetStorage.add(`pin${i}#icon`, {
//         iconLayout: 'default#imageWithContent',
//         iconImageHref: `static/images/general/pin/${i}.svg`,
//         iconImageSize: [14, 14],
//         iconImageOffset: [-7, -7],
//         hideIconOnBalloonOpen: false,
//         balloonOffset: [-29, 11],
//         balloonPanelMaxMapArea: 0,
//       });
//     }

//     myMap.behaviors.disable('scrollZoom');
//     myMap.geoObjects.add(myPlacemarkMain);

//     oneCollection.add(myPlacemark).add(myPlacemark1).add(myPlacemark2).add(myPlacemark3);
//     twoCollection.add(myPlacemark4).add(myPlacemark5).add(myPlacemark6).add(myPlacemark7);
//     threeCollection.add(myPlacemark8).add(myPlacemark9).add(myPlacemark10);
//     fourCollection.add(myPlacemark11).add(myPlacemark12).add(myPlacemark13).add(myPlacemark14);
//     fiveCollection.add(myPlacemark15).add(myPlacemark16).add(myPlacemark17).add(myPlacemark18);

//     $('.infrastructure-item').on('click', function() {
//       $('.infrastructure-item').removeClass('infrastructure-item_active');
//       $(this).addClass('infrastructure-item_active');
//       addPie(this.dataset.value);
//     });

//     $('.infrastructure-item').first().click();

//     function addPie(str) {
//       let obj = {one: 1, two: 1, three: 1, four: 1, five: 1};

//       if (str === 'all') {
//         obj = Object.keys(obj);
//         for (let i = 0; i < obj.length; i++) {
//           myMap.geoObjects.add(eval(`${obj[i]}Collection`));
//         }

//         return;
//       }

//       if (obj[str]) {
//         delete obj[str];
//         obj = Object.keys(obj);

//         for (let i = 0; i < obj.length; i++) {
//           myMap.geoObjects.remove(eval(`${obj[i]}Collection`));
//         }
//         myMap.geoObjects.add(eval(`${str}Collection`));
//       }
//     }
//   });
// });




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
		center: [43.494236, 39.899326],
		controls: ['zoomControl'],
		zoom: 15
	}),

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
		myMap.setZoom(11);
		myMap.setCenter([43.42700, 40.003486]);
	} else {
		myMap.setZoom(11);
		myMap.setCenter([43.36336579006969, 39.804613233398406]);
	}

	let items = document.querySelectorAll('.s-map__nav-item');

	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener('mouseup', function () {
			let id = this.getAttribute('href').slice(1);

			switch (id) {
				case 'places':
					// if (document.body.clientWidth >= 1200) {
					// 	myMap.setZoom(11);
					// 	myMap.setCenter([43.533957375851536, 39.68925678808594]);
					// } else {
					// 	myMap.setZoom(10);
					// 	myMap.setCenter([43.36336579006969, 39.804613233398406]);
					// }
					// myMap.geoObjects.add(multiRoute1)
					// myMap.geoObjects.remove(multiRoute2);
					break;
				case 'driveway':
					myMap.setZoom(11);
					if (document.body.clientWidth >= 1200) {
						myMap.setCenter([43.52000, 39.80900]);
					} else {
						myMap.setCenter([43.52000, 39.75000]);
					}
					myMap.geoObjects.add(multiRoute1);
					myMap.geoObjects.add(multiRoute2);
					break;
			}
		});
	}

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

	myMap.controls.events.add('fullscreenenter', function (evt) {
		myMap.behaviors.enable('scrollZoom');
	});

	myMap.controls.events.add('fullscreenexit', function (evt) {
		myMap.behaviors.disable('scrollZoom');
	});
});