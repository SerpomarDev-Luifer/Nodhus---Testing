const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


const apiUrl = `https://esenttiapp-production.up.railway.app/api/uploadordenbyqr/${id}`;


async function llenarFormulario() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.length > 0) {
            const orden = data[0];

            document.getElementById('fecha_solicitud').value = orden.fecha_solicitud;
            document.getElementById('id_sitio_inspeccion').value = orden.sitio_inspeccion;
            document.getElementById('id_sitio_inspeccion1').value = orden.sitio_inspeccion1;
            document.getElementById('id_sitio_inspeccion2').value = orden.sitio_inspeccion2;
            document.getElementById('contenedor').value = orden.contenedor;
            document.getElementById('peso').value = orden.peso;
            document.getElementById('funcionario_transporte').value = orden.funcionario;
            document.getElementById('precinto').value = orden.precinto;
            document.getElementById('vencimiento_cutoff').value = orden.vencimiento;
            document.getElementById('hora_soli').value = orden.hora;
            document.getElementById('observaciones').value = orden.observacion;

            document.getElementById('id_placa').value = orden.placa;
            document.getElementById('id_cliente').value = orden.cliente;
            document.getElementById('id_conductor').value = orden.conductor;
            document.getElementById('modalidad').value = orden.modalidad;
            document.getElementById('id_tipo_operacion').value = orden.tipo_operacion;
            document.getElementById('id_naviera').value = orden.linea_maritima;
            document.getElementById('id_tipo_contenedor').value = orden.tipo_contenedor;
        } else {
            console.error('No se encontraron datos para este ID');
        }
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
    }
}

llenarFormulario();