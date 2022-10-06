//validacion de formulario
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    //validar que ingrese nombre
    var name = document.getElementById('nombre').value;
    if(name.length == 0) {
      alert('Por favor ingrese su nombre');
      return;
    }

    //validar que ingrese mail con formato correcto con expresiones regulares
    regexEmail= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    var email = document.getElementById('email').value;
    if (email.length < 6) {
      alert('Ingrese un email válido');
      
    } else if(regexEmail.test(email)){
        console.log("La dirección de email " + email + " es correcta.");
    } else{
        alert("Ingrese un email válido");
        return;
    }
    
    //validar que ingrese telefono con formato correcto con expresiones regulares
    //valida primero que phoneNum sea un numero
    // Toma como opcionales:
    //   el prefijo internacional (54)
    //   el prefijo internacional para celulares (9)
    //   el prefijo de acceso a interurbanas (0)
    //   el prefijo local para celulares (15)
    // Es obligatorio:
    //   el código de área (11, 2xx, 2xxx, 3xx, 3xxx, 6xx y 8xx)
    //   (no toma como válido un número local sin código de área como 4444-0000)

    let regexPhone=/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
    var phoneNum = document.getElementById('celular').value;
    if(isNaN(phoneNum)) {
      alert("Ingrese un número válido");    
    } else if(regexPhone.test(phoneNum)){
      console.log(`el numero + ${phoneNum}+ es un número valido`);
    }else {
      alert("Ingrese un número válido");
      return;

    }
    
    this.submit();
  }

