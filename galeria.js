(function () {
    //Objeto con las propiedades de galeria
    var propGaleria = {
        botonVerMas : document.getElementById('verMas'),
        listaImagenes: document.getElementsByClassName('slide'),
        cuerpoDom : document.getElementsByTagName('body')[0],
        imagen: null,
        imagenSrc: null,
        galeriaContenedor: null,
        modal: null,
        cerrarModal : null,
    }

    //Objeto con los Metodos de galeria
    var metGaleria = {
        inicio: function () {
            propGaleria.botonVerMas.addEventListener('click', metGaleria.mostrarGaleria);
        },

        mostrarGaleria: function (e) {
            e.preventDefault();
            propGaleria.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id','galeriaContenedor');
            propGaleria.galeriaContenedor = document.getElementById('galeriaContenedor');
            propGaleria.galeriaContenedor.style.width = '100%';
            propGaleria.galeriaContenedor.style.height = '100%';
            propGaleria.galeriaContenedor.style.position = 'fixed';
            propGaleria.galeriaContenedor.style.zIndex = '1000';
            propGaleria.galeriaContenedor.style.background = 'rgba(0,0,0,0.8)';
            propGaleria.galeriaContenedor.style.top = '0';
            propGaleria.galeriaContenedor.style.left = '0';
            propGaleria.galeriaContenedor.appendChild(document.createElement('DIV')).setAttribute('id','modal');
            propGaleria.modal = document.getElementById('modal');
            
            //Obtiene el url de las imagenes y las inserta en el DIV modal
            for (var i = 0; i < propGaleria.listaImagenes.length; i++) {
                propGaleria.imagenSrc = window.getComputedStyle(propGaleria.listaImagenes[i], null).backgroundImage.slice(5, -2);
                propGaleria.modal.appendChild(document.createElement('IMG')).setAttribute('src',propGaleria.imagenSrc);
                propGaleria.modal.getElementsByTagName('img')[i].setAttribute('class','imagen-modal');   
            }
            propGaleria.modal.innerHTML += '<i id = "cerrar_modal" class="fa-solid fa-xmark"></i>';

            propGaleria.modal.style.opacity = 0;
            setTimeout(function () {
                propGaleria.modal.style.opacity = 1;                
            }, 70)

            //asigna el icono cerrar
            propGaleria.cerrarModal = document.getElementById('cerrar_modal');
            propGaleria.cerrarModal.addEventListener('click', metGaleria.cerrarModal);
        },

        //elminina el DIV creado en body
        cerrarModal: function(){
            propGaleria.cuerpoDom.removeChild(propGaleria.galeriaContenedor);
        }
    }
    metGaleria.inicio();
}())
