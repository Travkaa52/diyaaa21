// --- КОД ИЗ app.6552151f.js (бандл приложения) ---
(function(A){function t(t){for(var i,M,x=t[0],y=t[1],a=t[2],l=0,n=[];l<x.length;l++)M=x[l],Object.prototype.hasOwnProperty.call(o,M)&&o[M]&&n.push(o[M][0]),o[M]=0;for(i in y)Object.prototype.hasOwnProperty.call(y,i)&&(A[i]=y[i]);c&&c(t);while(n.length)n.shift()();return s.push.apply(s,a||[]),e()}function e(){for(var A,t=0;t<s.length;t++){for(var e=s[t],i=!0,M=1;M<e.length;M++){var y=e[M];0!==o[y]&&(i=!1)}i&&(s.splice(t--,1),A=x(x.s=e[0]))}return A}var i={},o={app:0},s=[];function M(A){return x.p+"js/"+({}[A]||A)+"."+{"chunk-2d0dea77":"9e176534"}[A]+".js"}function x(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return A[t].call(e.exports,e,e.exports,x),e.l=!0,e.exports}x.e=function(A){var t=[],e=o[A];if(0!==e){if(e)t.push(e[2]);else{var i=new Promise(function(t,i){e=o[A]=[t,i]});t.push(e[2]);var M=x.p+"js/"+({}[A]||A)+"."+{"chunk-2d0dea77":"9e176534"}[A]+".js",y=document.createElement("script");y.charset="utf-8",y.timeout=120,x.nc&&y.setAttribute("nonce",x.nc),y.src=M;var a;y.onerror=y.onload=function(t){y.onerror=y.onload=null,clearTimeout(a);var e=o[A];if(0!==e){if(e){var i=t&&("load"===t.type?"":"fail:"+t.type),M=i?new Error("Loading chunk "+A+" failed. ("+i+")"):t;M.type=i,M.request=M,e[1](M)}o[A]=void 0}};document.head.appendChild(y),a=setTimeout(y.onerror,12e4)}}return Promise.all(t)},x.m=A,x.c=i,x.d=function(A,t,e){x.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:e})},x.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},x.t=function(A,t){if(1&t&&(A=x(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(x.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var i in A)x.d(e,i,function(t){return A[t]}.bind(null,i));return e},x.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return x.d(t,"a",t),t},x.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},x.p="/",x.oe=function(A){throw console.error(A),A};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var v=0;v<l.length;v++)t(l[v]);var c=n;e()})({19:function(A,t,e){A.exports=e(32)},32:function(A,t,e){"use strict";e.r(t);var i=e(0),M=e.n(i),x=e(14),y=e(3),a=e(16),l=e(5),n=e(6),v=e(2),c=e(7),r=e(8),u=e(17),d=e(18);new M.a({router:x.a,store:y.a,render:function(A){return A(a.a)}}).$mount("#app")}});

// --- КОД ИЗ main.js (пользовательский скрипт) ---

// Helper: безопасно получить первый элемент по классу (возвращает null, если не найдено)
function getFirstByClass(name){
  var el = document.getElementsByClassName(name);
  return (el && el.length) ? el[0] : null;
}

scrollLock.disablePageScroll();

var date = new Date();
var month = date.getMonth();
var arr = [
   'лютого',
   'березня',
   'квітня',
   'травня',
   'червня',
   'липня',
   'серпня',
   'вересня',
   'жовтня',
	 'листопада',
	 'грудня',
	 'січня',
];

$('.rf_title').text('Данi оновлено ' + date.getDate() + ' ' + arr[month-1] + ' ' + date.getFullYear() +' о ' + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' + '' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()));

$('html').css('background', 'linear-gradient(90deg, #aabce8, #cfc6e5, #e2c6e6)');

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

$(['access/icons/docac.svg', 'access/icons/posin.svg', 'access/icons/posac.svg', 'access/icons/docin.svg', 'access/icons/notin.svg', 'access/icons/notac.svg', 'access/icons/menuin.svg', 'access/icons/menuac.svg', 'access/icons/arrow.svg', 'access/icons/copy.svg']).preload();

// Подготовка к работе с паспортными данными и анимацией
var docLoaded = false;
var playing = false;
var nlgi = document.getElementsByClassName('passport');

// Переключение состояния загрузки документа
$('.passport').on('click', function () {

	if (!docLoaded) {
		$('.passport > .content > .unloaded').css('opacity', '0');
		$('.passport > .content > .loaded').css('opacity', '0');
		setTimeout(function () {
			$('.passport > .content > .unloaded').css('display', 'none');
			$('.passport > .content > .loaded').css('display', 'block');
			$('.passport > .content > .loaded').css('opacity', '1');
		}, 500);
	}

	if (playing)
		return;

	$('.nlgi > .content').css('filter', 'brightness(0.8)');
	setTimeout(function () {
		$('.nlgi > .content').css('filter', 'brightness(1)');
	}, 200);

	playing = true;
	anime({
		targets: nlgi,
		rotateY: {
			value: '+=180',
			delay: 0
		},
		easing: 'linear',
		duration: 100,
		complete: function (anim) {
			playing = false;
		}
	});


});

// Проверка на запуск в режиме веб-приложения (PWA) для мобильных устройств
var isWorking = true;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  isInWebAppiOS = (window.navigator.standalone === true);
  isInWebAppChrome = (window.matchMedia('(display-mode: standalone)').matches);
  if (navigator.userAgent.match(/Android/)) {
	  getFirstByClass("okimg").style.backgroundImage = "url(access/icons/ok2.png)"
  }
  if(isInWebAppiOS == false && isInWebAppChrome == false){
	 isWorking = false;
  	$('body').html('<div class="nonono">Нажмите по трем точкам в браузере и добавьте эту страницу на главный экран<br></div>');
  	$('body').addClass('nononopage');
  }
  
} else {
  isWorking = false;
  $('body').html('<div class="nonono">К сожалению, это приложение должно быть добавлено на главный экран в браузере мобильного устройства, чтобы оно работало корректно<br></div>');
  $('body').addClass('nononopage');
}

// Функции для логина и управления QR/штрих-кодами
var pinCode = '';
var accessCode = '5555';
var circle = 0;

$('.key').on('click', function () {
	
	if (pinCode.length >= 4)
		return;
		
	var dot = getFirstByClass('dot:nth-child('+(pinCode.length+1)+')');
	dot.classList.add('act');
	
	pinCode += $(this).text();
	
	if (pinCode.length == 4) {
		if (pinCode == accessCode) {
			$('.loginpage').css('display', 'none');
		} else {
			
			$('.cricles').css('animation-name', 'shake-horizontal');
			$('.cricles').css('animation-duration', '0.5s');
			
			for (var i = 1; i < 5; i++) {
				var dot = getFirstByClass('dot:nth-child('+i+')');
				dot.classList.remove('act');
			}
			
			pinCode = '';
			
			setTimeout(function(){
				$('.cricles').css('animation-name', 'none');
			}, 500);
			
		}
	}
});

$('.eblo').on('click', function () {
	
	if (pinCode.length == 0)
		return;
		
	var dot = getFirstByClass('dot:nth-child('+(pinCode.length)+')');
	dot.classList.remove('act');
	
	pinCode = pinCode.substring(0, pinCode.length - 1);
});

$('.qrbuttons > div').on('click', function () {
	$('.qrbuttons > div').removeClass('act');
	$(this).addClass('act');
	
	$('.sh > .qr_body > .qr_title.o').css('display', 'none');
	$('.sh > .qr_body > .qr_title.t').css('display', 'none');
	$('.qrcode').css('display', 'none');
	$('.shcode').css('display', 'none');
	
	if ($(this).hasClass('pqricon') || $(this).hasClass('nqricon') || $(this).hasClass('vqricon') || $(this).hasClass('cqricon')) {
		$('.sh > .qr_body > .qr_title.o').css('display', 'block');
		$('.qrcode').css('display', 'block');
	} else {
		$('.sh > .qr_body > .qr_title.t').css('display', 'block');
		$('.shcode').css('display', 'block');
	}
});

// Управление отображением разделов
var isVisible = true;
var lastPage = null;

var show = function(page, header, background) {
	if (isVisible) {
		lastPage = $('.current');
		lastPage.css('left', '100%');
		lastPage.removeClass('current');
	}
	
	$(page).css('left', '0');
	$(page).addClass('current');
	$('.header').css('background', header);
	$('body').css('background', background);
	
	isVisible = true;
};

$('.doc').on('click', function () {
	$('.ft_icons > div').removeClass('act');
	$(this).addClass('act');
	show('.mainpage', '#C9D8E7', '#DEE8F1');
});

$('.pos').on('click', function () {
	$('.ft_icons > div').removeClass('act');
	$(this).addClass('act');
	show('.poslugi', '#C9D8E7', '#DEE8F1');
});

$('.pov').on('click', function () {
	$('.ft_icons > div').removeClass('act');
	$(this).addClass('act');
	show('.notifications', '#C9D8E7', '#DEE8F1');
});

$('.men').on('click', function () {
	$('.ft_icons > div').removeClass('act');
	$(this).addClass('act');
	show('.menulid', '#C8D8E7', '#E9EFF5');
});

$('.arrow').on('click', function () {
	if (lastPage == null) {
		$('.doc').trigger('click');
	} else {
		lastPage.css('left', '0');
		lastPage.addClass('current');
		$('.current:last').css('left', '100%');
		$('.current:last').removeClass('current');
		lastPage = null;
		$('.doc').trigger('click');
	}
});
