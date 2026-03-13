window.onload = function() {
    document.getElementById("ingredientes").onchange = function(e) {
        // destino del valor seleccionado combo1
        tipo = e.target.value;

        if (tipo == "Pepperoni") {
            var imagen = "imagenes/pepperoni.jpg";
        } else if (tipo == "Jamon") {
            var imagen = "imagenes/jamon.jpg";
        } else if (tipo == "Hawaiana") {
            var imagen = "imagenes/hawaiana.jpg";
        } else if (tipo == "Margarita") {
            var imagen = "imagenes/margarita.jpg";
        } else if (tipo == "Suprema") {
            var imagen = "imagenes/suprema.jpg";
        }
        // agrega la imagen de la pizza
        document.getElementById("imagen").src = imagen;
    }
    // combo llamado version ID
    document.getElementById("size").onchange = function(es) {
        tamano = es.target.value;
    }
}

function calcular() {
    // validacion de los 2 combos
    if (document.getElementById("ingredientes").value == "Seleccione el tipo de pizza que desea:") {
        swal.fire({
            icon: "info",
            title: "Atención",
            text: "Seleccionar el tipo de pizza que desea.",
        });
    }
    if (document.getElementById("size").value == "Seleccione el tamaño de la pizza:") {
        swal.fire({
            icon: "info",
            title: "Atención",
            text: "Seleccione el tamaño de la pizza.",
        });
    }

    // ciclo switch
    var montoFinal = 0;
    switch (tipo) {
        case "Pepperoni":
            if (tamano == "Pequeña")
                montoFinal = 4500;
            else if (tamano == "Mediana")
                montoFinal = 6000;
            else montoFinal = 8500;
            break;
        case "Jamon":
            if (tamano == "Pequeña")
                montoFinal = 4500;
            else if (tamano == "Mediana")
                montoFinal = 6000;
            else montoFinal = 8500;
            break;
        case "Hawaiana":
            if (tamano == "Pequeña")
                montoFinal = 5000;
            else if (tamano == "Mediana")
                montoFinal = 6500;
            else montoFinal = 9000;
            break;
        case "Margarita":
            if (tamano == "Pequeña")
                montoFinal = 4500;
            else if (tamano == "Mediana")
                montoFinal = 6000;
            else montoFinal = 8500;
            break;
        case "Suprema":
            if (tamano == "Pequeña")
                montoFinal = 5500;
            else if (tamano == "Mediana")
                montoFinal = 7000;
            else montoFinal = 9500;
            break;
        default:
            break;
    }

    // variable que almacena la ruta de las imagenes en formato JPG
    let imagenDireccion = "imagenes/" + tipo.toLowerCase() + ".jpg";

    swal.fire({
        // la variable imageUrl permite cargar la imagen de la pizza dentro del desplegable
        // tipo es el target ingredientes y tamano es el target del size de la pizza
        imageUrl: imagenDireccion,
        html: "<p> Tu pizza elegida es " +
            tipo + " " + tamano +
            "<br><br> <strong>Monto Final:</strong></p> " +
            "¢" +
            // variable que trae el dato de su monto final
            montoFinal,
        // ancho y altura de la imagen de la pizza
        imageWidth: 400,
        imageHeight: 400,
        // accesibilidad de la imagen
        imageAlt: "Pizza " + tipo,
    });
    
};