$(document).ready(function() {
    // Método para validar solo letras
    $.validator.addMethod("lettersOnly", function(value, element) {
        return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    }, "Por favor ingrese solo letras.");

    // Método para validar el formato del número de teléfono
    $.validator.addMethod("phoneNumber", function(value, element) {
        return this.optional(element) || /^[0-9]+$/.test(value);
    }, "Por favor ingrese solo números.");

    // Validación del formulario
    $("#registerForm").validate({
        rules: {
            firstName: {
                required: true,
                lettersOnly: true
            },
            lastName: {
                required: true,
                lettersOnly: true
            },
            phoneNumber: {
                required: true,
                phoneNumber: true
            },
            email: {
                required: true,
                email: true
            },
            age: {
                required: true,
                number: true,
                min: 18
            }
        },
        messages: {
            firstName: {
                required: "Por favor ingrese su nombre",
                lettersOnly: "El nombre debe contener solo letras"
            },
            lastName: {
                required: "Por favor ingrese su apellido",
                lettersOnly: "El apellido debe contener solo letras"
            },
            phoneNumber: {
                required: "Por favor ingrese su número de teléfono",
                phoneNumber: "El número de teléfono debe contener solo números"
            },
            email: {
                required: "Por favor ingrese su correo electrónico",
                email: "Por favor ingrese un correo electrónico válido"
            },
            age: {
                required: "Por favor ingrese su edad",
                number: "Por favor ingrese un número válido",
                min: "Debe tener al menos 18 años"
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});