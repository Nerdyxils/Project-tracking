const mobileNav = document.getElementById('mobile-nav-item');
var mobileIcon = document.getElementById('mobile-icon');
const body = document.getElementById('mobile-nav');

function showNav() {
    if (mobileNav.style.display === 'none') {

        mobileNav.style.display = 'block';
        mobileIcon.src = mobileIcon.src.replace('images/icon-hamburger.svg', 'images/icon-close.svg');
    } else {
        mobileNav.style.display = 'none';
        mobileIcon.src = mobileIcon.src.replace('images/icon-close.svg', 'images/icon-hamburger.svg');
    }
}

body.addEventListener('click', showNav);

