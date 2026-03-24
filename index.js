const overlayBackground = document.querySelector('.overlay-background');
const overlayCloseButton = document.querySelector('.overlay_close_button');
const infoIcon = document.querySelector('.info_icon');
const authorLink = document.querySelector('.overlay_author_link');
const profileLink = document.querySelector('.profile_link');

if (overlayCloseButton && overlayBackground) {
	overlayCloseButton.addEventListener('click', () => {
		overlayBackground.style.display = 'none';
	});
}

if (infoIcon && overlayBackground) {
	infoIcon.addEventListener('click', () => {
		overlayBackground.style.display = 'flex';
	});
}

if (authorLink) {
	authorLink.addEventListener('click', () => {
		window.open('https://www.wesselwegerif.nl', '_blank');
	});
}

if (profileLink) {
	profileLink.addEventListener('click', () => {
		window.open('https://www.youtube.com/@WGRF', '_blank');
	});
}

document.querySelectorAll('[data-open-url]').forEach((videoCard) => {
	videoCard.addEventListener('click', () => {
		const url = videoCard.getAttribute('data-open-url');
		if (url) {
			window.open(url, '_blank');
		}
	});
});
