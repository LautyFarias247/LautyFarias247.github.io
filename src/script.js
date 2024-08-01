const menuButton = document.getElementById('menu-button');
const menuMobile = document.getElementById('menu-mobile');
let isMenuOpen = false;

menuButton.addEventListener('click', () => {
    // ABRE
    if (!isMenuOpen) {
        isMenuOpen = true;
        menuMobile.classList.toggle('expanded');
    }
    // Cierra
    else {
        isMenuOpen = false;
        menuMobile.classList.toggle('expanded');
    }
    menuButton.querySelectorAll('i').forEach((i) => i.classList.toggle('hidden'));
});
