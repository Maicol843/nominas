document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Credenciales de usuario
    var validUsername = "admin";
    var validPassword = "admin123";

    if (username === validUsername && password === validPassword) {
        // Redirigir a otra página si las credenciales son correctas
        window.location.href = "adminDashboard.html";  // Reemplaza con la URL de destino
    } else {
        // Mostrar mensaje de alerta si las credenciales son incorrectas
        document.getElementById('alert').style.display = 'block';
    }
});
