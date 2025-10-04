const navbarToggle = document.querySelector('.navbar-toggle')
const mainContent = document.querySelector('body')
const navbarMenu = document.querySelector('.navbar-menu')


navbarToggle.addEventListener('click', (e) => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    e.stopPropagation();
    navbarMenu.classList.contains('active');

});

mainContent.addEventListener('click', () => {
    if(navbarMenu.classList.contains('active')){
    navbarMenu.classList.remove('active');
    navbarToggle.classList.remove('active')
    }
})