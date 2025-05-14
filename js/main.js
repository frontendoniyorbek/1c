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
