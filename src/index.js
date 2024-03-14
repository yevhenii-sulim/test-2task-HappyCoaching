const buttonMenu = document.querySelector('.nav-button')
const navMenu = document.querySelector('.nav-menu')
const backdrop = document.querySelector('.backdrop')
const body = document.querySelector('body')
const wrapper = document.querySelector(".wrapper")
const scrollWidth = window.innerWidth - wrapper.offsetWidth

buttonMenu.addEventListener('click', toggleMenu)
backdrop.addEventListener('click', closeMenu)
body.addEventListener("keydown", closeMenuByKey)

function toggleMenu (){
	const buttonMenuTitle = document.querySelectorAll('.button-menu')
	for(const span of buttonMenuTitle){
		span.classList.toggle('hidden')
	}
	body.classList.toggle('overflow')
	navMenu.classList.toggle('hidden')
	backdrop.classList.toggle('hidden')
	if(!backdrop.classList.contains('hidden')){
    wrapper.style.paddingRight = `${scrollWidth}px`;
    buttonMenu.style.right = `${scrollWidth}px`
	} else {
		wrapper.style.paddingRight = 0 + 'px'
		buttonMenu.style.right = 0 + `%`
	}
}

function closeMenu (evt){
	if (evt.currentTarget === evt.target){
		if (!backdrop.classList.contains('hidden')){
			toggleMenu()
		}
	}
}

function closeMenuByKey (evt){
	if (evt.code === 'Escape'){
		if (!backdrop.classList.contains('hidden')){
			toggleMenu()
		}
	}
}