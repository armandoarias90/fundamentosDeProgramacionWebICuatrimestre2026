// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Objeto con las descripciones de los instrumentos
    const descripciones = {
        "Bajo Eléctrico": "Instrumento de cuerda pulsada similar a la guitarra eléctrica pero con cuerdas más gruesas y un sonido más grave. Es fundamental en la sección rítmica de bandas de rock, funk y jazz, proporcionando la línea de bajo que conecta la armonía con el ritmo.",
        
        "Guitarra Eléctrica": "Instrumento que transforma las vibraciones de las cuerdas en señales eléctricas mediante pastillas electromagnéticas. Revolucionó la música popular del siglo XX, siendo el alma del rock and roll. Modelos icónicos incluyen la Fender Stratocaster y Gibson Les Paul.",
        
        "Teclado Electrónico": "Instrumento musical electrónico que genera sonidos mediante síntesis o reproducción de samples. Puede imitar otros instrumentos (piano, órgano, cuerdas) o crear sonidos completamente nuevos. Es versátil y portátil, usado en prácticamente todos los géneros modernos.",
        
        "Piano": "Instrumento de cuerda percutida inventado por Bartolomeo Cristofori alrededor del año 1700. Su mecanismo de martillos que golpean cuerdas permite controlar la dinámica del sonido. Es fundamental en la música clásica, jazz y pop. Tiene 88 teclas y un rango de más de 7 octavas.",
        
        "Batería Acústica": "Conjunto de tambores, platillos y otros instrumentos de percusión dispuestos para ser tocados por un solo músico. Los componentes típicos incluyen bombo, caja, toms, hi-hat y platillos de choque. Proporciona el ritmo y la base de la música contemporánea."
    };

    // Obtener todas las áreas del mapa
    const areas = document.querySelectorAll('map[name="image-map"] area');
    
    // Crear un contenedor para mostrar la descripción (si no existe)
    let descripcionContainer = document.getElementById('descripcionInstrumento');
    
    if (!descripcionContainer) {
        // Crear el contenedor si no existe
        const section = document.querySelector('.seccion1 .contenedor');
        descripcionContainer = document.createElement('div');
        descripcionContainer.id = 'descripcionInstrumento';
        descripcionContainer.className = 'alert alert-info mt-4 text-start';
        descripcionContainer.style.display = 'none';
        descripcionContainer.setAttribute('role', 'alert');
        
        // Agregar título y contenido
        descripcionContainer.innerHTML = `
            <h4 class="alert-heading" id="instrumentoTitulo"></h4>
            <p id="instrumentoDescripcion"></p>
            <hr>
            <p class="mb-0">Haga clic en otro instrumento para ver su información.</p>
        `;
        
        // Insertar después de la imagen
        const imagenContainer = document.querySelector('.logo2');
        imagenContainer.parentNode.insertBefore(descripcionContainer, imagenContainer.nextSibling);
    }

    // Referencias a los elementos del contenedor
    const instrumentoTitulo = document.getElementById('instrumentoTitulo');
    const instrumentoDescripcion = document.getElementById('instrumentoDescripcion');

    // Función para mostrar descripción
    function mostrarDescripcion(instrumento) {
        if (descripciones[instrumento]) {
            instrumentoTitulo.textContent = instrumento;
            instrumentoDescripcion.textContent = descripciones[instrumento];
            descripcionContainer.style.display = 'block';
            
            // SweetAlert como alternativa
            // Swal.fire({
            //     icon: 'info',
            //     title: instrumento,
            //     text: descripciones[instrumento],
            //     confirmButtonColor: '#e15e6e'
            // });
        }
    }

    // Agregar evento click a cada área
    areas.forEach(area => {
        area.addEventListener('click', function(event) {
            // Prevenir que se abra el enlace
            event.preventDefault();
            
            // Obtener el título del instrumento
            const instrumento = this.getAttribute('title');
            
            // Mostrar la descripción
            mostrarDescripcion(instrumento);
        });
        
        // Opcional: Cambiar el cursor al pasar sobre áreas clickeables
        area.addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
        });
    });
});