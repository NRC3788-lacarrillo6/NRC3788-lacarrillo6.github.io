function validar() {
   
    let email = document.getElementById('email').value;
    let emailRegex = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    
    let telefono = document.getElementById('telefono').value;
    if (telefono.length !== 10 || isNaN(telefono)) {
        alert("Por favor, ingrese un número de teléfono válido de 10 dígitos.");
        return false;
    }

    
    return true;
}

function enviarFormulario(button) {
    
    if (!validar()) return;
    
    button.disabled = true;
    button.value = "Enviando datos ……....";

    button.form.submit();
}
