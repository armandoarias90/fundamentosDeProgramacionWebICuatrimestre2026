function colonesADolares() {
    let tipoCambio = document.getElementById('tipoCambio');
    let colones = document.getElementById('colones');
    let resultadoDolares = document.getElementById('resultadoDolares');

    let tipoCambioInput = parseFloat(tipoCambio.value);
    let colonesInput = parseFloat(colones.value);

    if (tipoCambioInput < 0 || colonesInput < 0) {

        resultadoDolares.textContent = "Por favor, ingrese valores positivos.";

    } else if (!isNaN(tipoCambioInput) && !isNaN(colonesInput)) {

        const dolares = colonesInput / tipoCambioInput;
        const formatoMoneda = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        resultadoDolares.textContent = formatoMoneda.format(dolares);

    } else {
        resultadoDolares.textContent = "Por favor, ingrese valores válidos.";
    }
}

function limpiarCamposDolares() {
    document.getElementById('tipoCambio').value = '';
    document.getElementById('colones').value = '';
    document.getElementById('resultadoDolares').textContent = '';
}

function dolaresAColones() {
    let tipoCambio = document.getElementById('tipoCambio2');
    let dolares = document.getElementById('dolares');
    let resultadoColones = document.getElementById('resultadoColones');

    let tipoCambioInput = parseFloat(tipoCambio.value);
    let dolaresInput = parseFloat(dolares.value);

    if (tipoCambioInput < 0 || dolaresInput < 0) {

        resultadoColones.textContent = "Por favor, ingrese valores positivos.";

    } else if (!isNaN(tipoCambioInput) && !isNaN(dolaresInput)) {

        const colones = dolaresInput * tipoCambioInput;
        const formatoMoneda = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'CRC',
        });
        resultadoColones.textContent = formatoMoneda.format(colones);

    } else {
        resultadoColones.textContent = "Por favor, ingrese valores válidos.";
    }
}

function limpiarCamposColones() {
    document.getElementById('tipoCambio2').value = '';
    document.getElementById('dolares').value = '';
    document.getElementById('resultadoColones').textContent = '';
}