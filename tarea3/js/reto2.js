// Generar número de factura aleatorio
function generarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const formatoMoneda = new Intl.NumberFormat('es-CR', {
    style: 'currency',
    currency: 'CRC',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

function facturar () {
    // Obtener los valores de los imputs
    let nombreClienteInput = document.getElementById('nombreCliente').value.trim();
    let productoInput = document.getElementById('producto').value.trim();
    let cantidadInput = parseInt(document.getElementById('cantidad').value);
    let precioInput = parseFloat(document.getElementById('precio').value);

    // Calcular el subtotal, IVA, servicio y total
    let subtotal = cantidadInput * precioInput;
    let iva = subtotal * 0.13;
    let servicio = subtotal * 0.05;
    let total = subtotal + iva + servicio;

    // Validación de campos
    if (nombreClienteInput === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campo vacío',
            text: 'Por favor, ingrese el nombre del cliente',
            confirmButtonColor: '#e15e6e',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    if (productoInput === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campo vacío',
            text: 'Por favor, ingrese el nombre del producto',
            confirmButtonColor: '#e15e6e',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    if (isNaN(cantidadInput) || cantidadInput <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Cantidad inválida',
            text: 'Por favor, ingrese una cantidad válida mayor a 0',
            confirmButtonColor: '#e15e6e',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    if (isNaN(precioInput) || precioInput <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Precio inválido',
            text: 'Por favor, ingrese un precio válido mayor a 0',
            confirmButtonColor: '#e15e6e',
            confirmButtonText: 'Entendido'
        });
        return;
    }

    // Mostrar la sección de factura
    document.getElementById('resultadoFactura').style.display = 'block';

    // Mostrar los resultados en la factura    
    document.getElementById('resultadoNumeroFactura').textContent = generarAleatorio(1, 100);
    document.getElementById('resultadoFecha').textContent = new Date().toLocaleDateString('es-CR');
    document.getElementById('resultadoNombre').textContent = nombreClienteInput;
    document.getElementById('resultadoProducto').textContent = productoInput;
    document.getElementById('resultadoCantidad').textContent = cantidadInput;
    document.getElementById('resultadoPrecio').textContent = formatoMoneda.format(precioInput);
    document.getElementById('resultadoSubtotal').textContent = formatoMoneda.format(subtotal);
    document.getElementById('resultadoIVA').textContent = formatoMoneda.format(iva);
    document.getElementById('resultadoServicio').textContent = formatoMoneda.format(servicio);
    document.getElementById('resultadoTotal').textContent = formatoMoneda.format(total);

    Swal.fire({
        icon: 'success',
        title: '¡Factura generada!',
        text: 'La factura se ha creado correctamente',
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
    });
}

function limpiarCampos() {
    document.getElementById('nombreCliente').value = '';
    document.getElementById('producto').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('precio').value = '';

    // Ocultar la sección de resultados
    document.getElementById('resultadoFactura').style.display = 'none';
}
