function hamburgerMenu() {
    const menuBtn = document.querySelector('#menu-btn');
    const navMenu = document.querySelector('#navbar');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll('.nav-link').forEach(li => {
        li.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

};

export default hamburgerMenu;