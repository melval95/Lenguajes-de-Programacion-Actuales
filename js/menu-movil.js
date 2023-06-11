(function () {
    //Objeto con las propiedades de Menu movil
    var propMenuMovil = {
        burgerMenu : document.getElementById('burger_menu'),
        slideMenu : document.getElementById('slideMenu'),
        elemMenu : document.querySelectorAll('.menu-movil .slideMenu .menu ul li a'),
        menuActivo: false,
        overlay: document.getElementById('overlayMenu')
    }
    
    //Objeto con los metodos de Menu movil
    var metMenuMovil = {
        incio: function () {
            propMenuMovil.burgerMenu.addEventListener('click', metMenuMovil.toggleMenu);
            propMenuMovil.overlay.addEventListener('click', metMenuMovil.toggleMenu);
            for (let i = 0; i < propMenuMovil.elemMenu.length; i++) {
                propMenuMovil.elemMenu[i].addEventListener('click',metMenuMovil.toggleMenu);    
            }
        },
        
        toggleMenu: function () {
            if (!propMenuMovil.menuActivo) {
                propMenuMovil.menuActivo = true;
                propMenuMovil.slideMenu.className = propMenuMovil.slideMenu.className + ' active';
                propMenuMovil.overlay.style.display = 'block';            
            }else{
                propMenuMovil.menuActivo = false;
                propMenuMovil.slideMenu.className = propMenuMovil.slideMenu.className.replace(' active','');
                propMenuMovil.overlay.style.display = 'none';            
            }
        }
    }
    
    metMenuMovil.incio();
}())

