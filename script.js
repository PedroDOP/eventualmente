const openNav = document.querySelector('#on-button')
const closeNav = document.querySelector('#off-button')
const Navbar = document.querySelector('#navbar')

openNav.addEventListener('click', function(){
    Navbar.classList.add('active')
})

closeNav.addEventListener('click', function(){
    Navbar.classList.remove('active')
})