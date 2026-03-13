window.onload = function() {
    //evento que permite cambiar el objeto onchange    
    document.getElementById("videojuego").onchange = function(e) {
        //destino del valor seleccionado por el usuario
        let videojuego = e.target.value;

        console.log("Valor seleccionado:", videojuego);
        console.log("Ruta de imagen generada:", "imagenes/" + videojuego + ".jpg");

        //expresiones que guardan las imagenes de los juegos y la informacion de cada uno...
        let imagen = "<img src='imagenes/" + videojuego + ".jpg' class='img-fluid imagenJuego' alt='Portada del juego'id='imagenJuego'/>";

        let titulo = ["Resident Evil 1",
            "Resident Evil 2",
            "Silent Hill 1",
            "Silent Hill 2",
            "Dead Space",
            "The Evil Within",
            "Amnesia: The Dark Descent"
        ];

        let parrafo = ["El pilar del survival horror. Atrapado en una mansión, la escasez de munición y los ángulos de cámara fijos crean una tensión insoportable. Es un clásico sobre gestión de recursos y exploración.",
            "Perfecciona la fórmula del primero. Ambientado en una Raccoon City infestada, ofrece una atmósfera apocalíptica y un ritmo frenético, destacando la sensación de persecución constante.",
            "Terror psicológico puro. A diferencia de Resident Evil, utiliza la niebla y el diseño sonoro para perturbar al jugador, centrándose en una atmósfera de pesadilla más que en la acción directa.",
            "Una obra maestra narrativa. Explora temas maduros como la culpa y el duelo a través de un simbolismo profundo, siendo más una experiencia psicológica perturbadora que un juego de sustos tradicionales.",
            "Acción y terror espacial intenso. La necesidad de desmembrar enemigos en un entorno industrial claustrofóbico lo convierte en una experiencia visceral y aterradora.",
            "Terror visceral dirigido por Shinji Mikami (creador de Resident Evil). Destaca por escenarios cambiantes, surrealistas y una sensación de vulnerabilidad extrema ante amenazas brutales. ",
            "Revolucionó el género al eliminar el combate. El jugador está indefenso, confiando solo en el sigilo y la gestión de la cordura para sobrevivir, lo que genera un miedo psicológico intenso."
        ];

        if (videojuego >= 1 && videojuego <= 7) {
            let indice = parseInt(videojuego) - 1;

            //salida de las imagenes y los textos informativos...
            document.getElementById("tituloJuego").innerHTML = titulo[indice];
            document.getElementById("parrafoJuego").innerHTML = parrafo[indice];
            document.getElementById("imagenJuego").innerHTML = imagen;
        }

        document.querySelector(".informacionJuego").style.display = "flex";
    };

    //boton reiniciar
    document.getElementById("reiniciar").onclick = function() {
    
        //limpia la imagen
        document.getElementById("imagenJuego").innerHTML = "<img src='' class='img-fluid' alt='' />";

        //limpia los textos informativos de los juegos...
        document.getElementById("tituloJuego").innerHTML = "";
        document.getElementById("parrafoJuego").innerHTML = "";

        //dejar el select con el texto por defecto...
        document.getElementById("videojuego").value = "";

        //ocultar la informacion
        document.querySelector(".informacionJuego").style.display = "none";
    };
};

