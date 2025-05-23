document.addEventListener('DOMContentLoaded', function () {
	new Splide('.splide', {
		type: 'loop',
		perPage: 3,
		perMove: 1,
		autoplay: false,
		interval: 3000, // 3 seconds
		pauseOnHover: true,
		breakpoints: {
			1024: {
				perPage: 2,
			},
			640: {
				perPage: 1,
			},
		},
	}).mount();
});

// DOM
const menuOpen = document.querySelector('.menu__open');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.menu__close');
menuOpen.addEventListener('click', () => {
	console.log('Salom');
	mobileMenu.classList.add('active');
	document.body.style.overflow = 'hidden';
});

mobileClose.addEventListener('click', () => {
	mobileMenu.classList.remove('active');
	document.body.style.overflow = '';
});

window.addEventListener('resize', () => {
	if (window.innerWidth > 768) {
		mobileMenu.classList.remove('active');
		document.body.style.overflow = '';
	}
});

// // Close the menu when screen is resized to larger than mobile view
// window.addEventListener('resize', () => {
// 	if (window.innerWidth > 820) {
// 		mobileMenu.classList.remove('active');
// 		document.body.style.overflow = ''; // Scrollni qayta yoqish
// 	}
// });
