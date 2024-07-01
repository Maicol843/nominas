$(document).ready(function () {
    const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    const table = $('#employeeTable').DataTable();

    empleados.forEach((empleado, index) => {
        table.row.add([
            index + 1,
            empleado.legajo,
            empleado.apellido,
            empleado.nombre,
            empleado.dni,
            empleado.edad,
            empleado.telefono,
            empleado.email,
            empleado.zona,
            empleado.nivel,
            `<img src="${empleado.imagen}" alt="${empleado.nombre}" width="50" height="50">`,
            `<button class="btn btn-danger btn-delete m-1" data-index="${index}"><i class="fa-regular fa-trash-can"></i></button>
            <button class="btn btn-danger btn-load m-1" data-index="${index}"><i class="fa-solid fa-address-card"></i></button>
            <button class="btn btn-danger btn-generate m-1" data-index="${index}"><i class="fa-solid fa-qrcode"></i></button>`
        ]).draw();
    });

    // Función para mostrar la tarjeta del empleado
    function mostrarTarjetaEmpleado(empleado) {
        $('#employeeCard').show();
        $('#cardImage').attr('src', empleado.imagen).attr('alt', empleado.nombre);
        $('#cardName').text(`${empleado.nombre} ${empleado.apellido}`);
        $('#cardLegajo').text(`Legajo: ${empleado.legajo}`);
        $('#cardDni').text(`DNI: ${empleado.dni}`);
        $('#cardEdad').text(`Edad: ${empleado.edad}`);
        $('#cardTelefono').text(`Teléfono: ${empleado.telefono}`);
        $('#cardEmail').text(`Email: ${empleado.email}`);
        $('#cardZona').text(`Zona: ${empleado.zona}`);
        $('#cardNivel').text(`Nivel: ${empleado.nivel}`);
    }

    // Cargar empleado
    $('#employeeTable').on('click', '.btn-load', function () {
        const index = $(this).data('index');
        const empleado = empleados[index];
        mostrarTarjetaEmpleado(empleado);
    });

    // Eliminar empleado
    $('#employeeTable').on('click', '.btn-delete', function () {
        const index = $(this).data('index');
        const empleado = empleados[index];
        empleados.splice(index, 1);
        localStorage.setItem('empleados', JSON.stringify(empleados));
        table.row($(this).parents('tr')).remove().draw();

        // Si la tarjeta mostrada corresponde al empleado eliminado, ocultar la tarjeta
        if ($('#cardLegajo').text() === `Legajo: ${empleado.legajo}`) {
            $('#employeeCard').hide();
        }
    });

    // Generar acción
    $('#employeeTable').on('click', '.btn-generate', function () {
        const index = $(this).data('index');
        const empleado = empleados[index];

        // Guardar los datos del empleado en el localStorage
        localStorage.setItem('empleados', JSON.stringify(empleado));

        // Mostrar la sección del código QR
        $('#qrCodeSection').show();

        // Generar el código QR con un enlace a detalle.html que contenga los datos del empleado
        const qr = new QRious({
            element: document.getElementById('qrCanvas'),
            value: `https://maicol843.github.io/nominasVentas.github.io/detalle.html`,
            size: 200 // Tamaño del código QR (200x200)
        });
    });
});



