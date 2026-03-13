window.onload = function() {
    const plataforma = document.getElementById('plataforma');

    //evento que permite cambiar el objeto onchange    
    plataforma.onchange = function(e) {
        //destino del valor seleccionado por el usuario
        let valorPlataforma = e.target.value;

        // variable para almacenar la URL
        let url = '';

        // asignar URL a la opción seleccionada
        switch(valorPlataforma) {
            case '1':
                url = 'https://www.netflix.com';
                break;
            case '2':
                url = 'https://www.hbomax.com';
                break;
            case '3':
                url = 'https://www.primevideo.com';
                break;
            case '4':
                url = 'https://www.disneyplus.com';
                break;
            case '5':
                url = 'https://mubi.com';
                break;
            default:
                return;
        }
        
        // abrir la URL en una nueva pestaña
        window.open(url, '_blank');
        
        // mensaje de confirmación con Sweet Alert
        Swal.fire({
            icon: 'success',
            title: '¡Redirigiendo!',
            text: 'Serás redirigido a ' + this.options[this.selectedIndex].text,
            timer: 1500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end'
        });
    };

    const reiniciar = document.getElementById('reiniciar');
    
    reiniciar.addEventListener('click', function() {
        plataforma.value = '';
    });
};

