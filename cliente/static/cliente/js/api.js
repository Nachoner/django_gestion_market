$(document).ready(function() {
    $.getJSON('https://mindicador.cl/api', function(data) {
        const indicadoresDiv = $('#indicadores');

        // Seleccionar solo el valor del dólar y la UF
        const dolar = data.dolar;
        const uf = data.uf;

        const indicadoresHtml = `
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">${dolar.nombre} (${dolar.codigo})</h5>
                    <p class="card-text">Valor: ${dolar.valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>                   
                </div>
            </div>
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">${uf.nombre} (${uf.codigo})</h5>
                    <p class="card-text">Valor: ${uf.valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>                 
                </div>
            </div>
        `;

        indicadoresDiv.html(indicadoresHtml);
    }).fail(function(jqxhr, textStatus, error) {
        const indicadoresDiv = $('#indicadores');
        const errorHtml = `
            <div class="alert alert-danger" role="alert">
                No se pudo traer la información de la API. Por favor, inténtelo de nuevo más tarde.
            </div>
        `;
        indicadoresDiv.html(errorHtml);
    });
});