const navlinks = document.querySelector('#navLinks');
const navToggleBtn = document.querySelector('#navToggleBtn');

navToggleBtn.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});