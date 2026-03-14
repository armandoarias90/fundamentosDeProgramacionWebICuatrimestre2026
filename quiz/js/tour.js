//variables controladoras 
var panorama, viewer, container, infospot;

//obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#container_principal');

//cargar la foto 360
panorama = new PANOLENS.ImagePanorama('img/imagen360.jpg');

//El valor 50 es el radio del infospot. El infospot es un marcador interactivo que aparece en la escena y puede mostrar información o contenido adicional cuando el usuario interactúa con él (por ejemplo, al hacer clic o pasar el ratón por encima).
//El radio del infospot determina el área de interacción con el usuario. 
// Crea y agrega el primer infospot


// Infospot 1: Imágenes y texto
var infospot1 = new PANOLENS.Infospot(50, 'img/water.png');
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot1.position.set(500 ,178 , -140);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot1.addHoverText('Manson Bay Park ¡Disfrutá de un baño en Manson Bay Park, en el lago Chelan! Baños, césped y sombra, zona de baño vigilada por socorristas.', -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 300px; text-align: center;"><h2>Manson Bay Park</h2><img src="img/mansonBay1.jpg" alt="Manson Bay Park" style="width: 275px; height: 275px; justify-content: center"><br>¡Disfrutá de un baño en Manson Bay Park, en el lago Chelan! Baños, césped y sombra, zona de baño vigilada por socorristas.</div>';
panorama.add(infospot1);



// Infospot 2: Imágenes y texto
var infospot2 = new PANOLENS.Infospot(50, 'img/park.png');
infospot2.position.set(-188 ,13 , -500);
infospot2.addHoverText('Singleton Park ¡El área de juegos infantiles, los campos de béisbol y las canchas de pickleball/baloncesto están abiertos al público! Este parque de uso diurno ofrece vistas panorámicas de las montañas circundantes. Disfruta de un partido en los campos o diviértete en el amplio área de juegos infantiles. No hay acceso al lago.', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 400px; text-align: center;"><h2>Singleton Park</h2><img src="img/parqueSingleton.jpg" alt="Parque Singleton" style="width: 275px; height: 275px; justify-content: center;"> <br> ¡El área de juegos infantiles, los campos de béisbol y las canchas de pickleball/baloncesto están abiertos al público! Este parque de uso diurno ofrece vistas panorámicas de las montañas circundantes. Disfrutá de un partido en los campos o divertite en el amplia área de juegos infantiles. No hay acceso al lago.</div>';
panorama.add(infospot2);



// Infospot 3: Video
var infospot3 = new PANOLENS.Infospot(50, 'img/playIcon.png');
infospot3.position.set(500 ,-49 , -283);
infospot3.addHoverText('Una cosa es ver el pueblo de Manson a nivel del suelo; ¡verlo desde arriba es una experiencia totalmente diferente! Surcamos los cielos con Lake Chelan Helicopters para disfrutar de una nueva perspectiva del valle del lago Chelan y ¡disfrutamos muchísimo de las vistas!', -60);
//insertar el reproductor de video de YouTube en el Infospot
//agregar el parametro para pantalla completa allowfullscreen
infospot3.element.innerHTML = `
    <div class="" style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 100%; text-align: center;">
        <p>Una cosa es ver el pueblo de Manson a nivel del suelo; ¡verlo desde arriba es una experiencia totalmente diferente! Surcamos los cielos con Lake Chelan Helicopters para disfrutar de una nueva perspectiva del valle del lago Chelan y ¡disfrutamos muchísimo de las vistas!</p>
        <iframe width="385px" height="385px" src="https://www.youtube.com/embed/YrcxY0wxUfU?si=Zgx8kmGwwRxTCGhn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>       
    </div>`;
panorama.add(infospot3);


// Infospot 4: Video
var infospot4 = new PANOLENS.Infospot(50, 'img/playIcon2.png');
infospot4.position.set(-500 ,-18 , 297);
infospot4.addHoverText('Una cosa es ver el pueblo de Manson a nivel del suelo; ¡verlo desde arriba es una experiencia totalmente diferente! Surcamos los cielos con Lake Chelan Helicopters para disfrutar de una nueva perspectiva del valle del lago Chelan y ¡disfrutamos muchísimo de las vistas!', -60);
infospot4.element.innerHTML = `
    <div class="" style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 100%; text-align: center;">
        <h2>Manson Bay en Lake Chelan</h2>
        <p>No te pierdas Manson, en la costa norte del lago Chelan. Es un pueblito que vale la pena explorar. Aquí te contamos algunas cosas que hacen de Manson un lugar increíble.</p>
        <iframe width="385px" height="385px" src="https://www.youtube.com/embed/oCBvN6pJ7bU?si=YFY9fZjIFoXpjbeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>`;
panorama.add(infospot4);



// Infospot 5: Audio
var infospot5 = new PANOLENS.Infospot(50, 'img/audio.png');
infospot5.position.set(-500 ,-43 , -356);
infospot5.addHoverText('Un audio MP3 multimedial...', -60);
infospot5.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="assets/audio1.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot5);



// Infospot 6: Audio
var infospot6 = new PANOLENS.Infospot(50, 'img/audio2.png');
infospot6.position.set(6 ,6 , -500);
infospot6.addHoverText('Un audio MP3 multimedial...', -60);
infospot6.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="assets/audio2.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot6);



// Infospot 7: PDF
var infospot7 = new PANOLENS.Infospot(100, 'img/pdf.png');
infospot7.position.set(14 ,19 , 500);
infospot7.addHoverText('Descargar guía turística en PDF', -60);

// Crear el contenido del infospot para PDF
infospot7.element.innerHTML = `
    <div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 300px;">
        <h3>Guía Turística Manson</h3>
        <p>Descarga nuestra guía completa con información detallada sobre Manson y el lago Chelan.</p>
    </div>
`;

// Agregar un evento de clic para abrir el PDF
infospot7.addEventListener('click', function() {
    // Abrir el PDF en una nueva pestaña
    window.open("assets/mansonBay.pdf", "_blank");
});

panorama.add(infospot7);



// Infospot 8: Sweet Alert
var infospot8 = new PANOLENS.Infospot(50, 'img/alert.png');
infospot8.position.set(500 ,-35 , 85);
infospot8.addHoverText('Información importante', -60);
infospot8.addEventListener('click', function() {
    mostrarAlertaInformacion();
});
panorama.add(infospot8);


// Función para mostrar Sweet Alert
function mostrarAlertaInformacion() {
    Swal.fire({
        title: '🏞️ Información del Tour Virtual',
        html: `
            <div style="text-align: left;">
                <h4>Bienvenido a Manson, Lake Chelan</h4>
                <p><strong>Horarios recomendados:</strong></p>
                <ul>
                    <li>Manson Bay Park: 8:00 AM - 8:00 PM</li>
                    <li>Singleton Park: 6:00 AM - 10:00 PM</li>
                    <li>Actividades acuáticas: 9:00 AM - 6:00 PM</li>
                </ul>
                <p><strong>Recomendaciones:</strong></p>
                <ul>
                    <li>Llevar protector solar</li>
                    <li>Respetar las áreas señalizadas</li>
                    <li>Mantener limpio el entorno</li>
                </ul>
                <p><strong>Contacto de emergencia:</strong><br>
                Tel: (555) 123-4567</p>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#3085d6',
        width: '600px'
    });
}



// Infospot 9: Texto
var infospot9 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot9.position.set(191 ,44 , -500);
infospot9.addHoverText('', -60);
infospot9.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 300px; text-align: center;"><h2>Cordillera de las Cascadas</h2><p>Específicamente la sección de las montañas Chelan, que se extienden a lo largo de las orillas del lago. El extremo norte del lago se encuentra con la cordillera en un entorno más agreste de picos de granito remotos, mientras que el extremo sur está rodeado por colinas cubiertas de artemisa.</p><p>Picos importantes dentro de la cordillera incluyen el Pico Cardinal (el más alto) y el Pico Esmeralda, entre otros. </p></div>';
panorama.add(infospot9);

// Infospot 10: Imagen
var infospot10 = new PANOLENS.Infospot(50, 'img/image.png');
infospot10.position.set(500 ,10 , 426);
infospot10.addHoverText('Bienvenidos a Manson', -60);
infospot10.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 300px;"><img src="img/mansonBay2.jpg" alt="Parque Singleton" style="width: 275px; height: 275px; justify-content: center"></div>';
panorama.add(infospot10);


// Agrega la panorámica al visor
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);