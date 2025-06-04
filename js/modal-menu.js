(() => {
    const menuRefs = {
        mobileMenu: document.querySelector('.js-mobile-menu'),
        openMenuBtn: document.querySelector('.js-burger-btn'),
        closeMenuBtn: document.querySelector('.js-btn-close'),
        menuLinks: document.querySelectorAll('.mobile-menu-link'),
    }

    menuRefs.openMenuBtn.addEventListener("click", toggleModal);
    menuRefs.closeMenuBtn.addEventListener("click", toggleModal);
    menuRefs.menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuRefs.mobileMenu.classList.remove('is-open');
            document.body.style.overflow = '';
        });
      });
  
    function toggleModal() {
        menuRefs.mobileMenu.classList.toggle("is-open");
    }
    
})();



