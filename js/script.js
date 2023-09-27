const burger = document.querySelector('.burger');
const burger_menu = document.querySelector('.burger-menu');
const burger_menu_close = document.querySelector('.burger-menu .fa-solid');
burger.addEventListener('click', () => {
	burger_menu.classList.remove('none');
});
burger_menu_close.addEventListener('click', () => {
	burger_menu.classList.add('none');
})