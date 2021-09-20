

new Swiper('.image-slider', {
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	autoHeigth: true,

	// slidesPerView: 4,

	slidesPerGroup: 1,

	initialSlide: 2,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},

		1081: {
			slidesPerView: 3,
		},

		1455: {
			slidesPerView: 4,
		},

	},

	centeredSlides: true,

	loop: true,
});


//============Burger===========//


const iconMenu = document.querySelector('.header__burger');

if (iconMenu) {
	const menuBody = document.querySelector('.header__menu-burger');
	iconMenu.addEventListener('click', function (e) {
		menuBody.classList.toggle('_active');
	})
}