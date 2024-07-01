// Escuchar el evento submit del formulario
document.getElementById('employeeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener datos del formulario
    const legajo = document.getElementById('legajo').value;
    const apellido = document.getElementById('apellido').value;
    const nombre = document.getElementById('nombre').value;
    const dni = document.getElementById('dni').value;
    const edad = document.getElementById('edad').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const zona = document.getElementById('zona').value;
    const nivel = document.getElementById('nivel').value;
    const imagenInput = document.getElementById('imagen');

    // Leer la imagen como Data URL
    const reader = new FileReader();
    reader.onload = function (event) {
        const imagen = event.target.result;

        // Crear un objeto de empleado
        const empleado = { legajo, apellido, nombre, dni, edad, telefono, email, zona, nivel, imagen };

        // Obtener empleados del localStorage
        let empleados = JSON.parse(localStorage.getItem('empleados')) || [];

        // Agregar el nuevo empleado
        empleados.push(empleado);

        // Guardar los empleados en el localStorage
        localStorage.setItem('empleados', JSON.stringify(empleados));

        // Resetear el formulario
        document.getElementById('employeeForm').reset();
    };
    reader.readAsDataURL(imagenInput.files[0]);

    // Resetear el formulario
    document.getElementById('employeeForm').reset();
});
