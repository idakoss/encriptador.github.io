
var entrada = document.getElementById("entrada");
var notificacion = document.getElementById("notificacion");
var encriptar = document.getElementById("encriptar");
var desencriptar = document.getElementById("desencriptar");
var footer = document.getElementById("footer");
var resultado = document.getElementById("resultado");
var copiar = document.getElementById("copiar");
console.log(copiar);

var mensaje = document.createElement("div");
mensaje.innerHTML = "INSERTE UN TEXTO";
footer.appendChild(mensaje);

copiar.hidden = true;
entrada.addEventListener("input", function () {
    if (entrada.value == "") {
    } else {
        mensaje.remove();
        footer.style.background = "none";
        resultado.style.display = "inline-block";
        copiar.hidden = false;
    }
});

entrada.addEventListener("input", function () {
    var expresion = /^[a-zñ ]+$/;
    if (expresion.test(entrada.value)) {
        notificacion.innerHTML = "CORRECTO";
        notificacion.style.color = "green";
    } else {
        notificacion.innerHTML = "introdusca solo minusculas y sin acentos";
        notificacion.style.color = "red";
    }
});

encriptar.addEventListener("click", function () {
    var encriptado = entrada.value; 
    encriptado = encriptado.replace(/e/g, "enter"); 
    encriptado = encriptado.replace(/i/g, "imes"); 
    encriptado = encriptado.replace(/a/g, "ai");
    encriptado = encriptado.replace(/o/g, "ober");
    encriptado = encriptado.replace(/u/g, "ufat");
    resultado.innerHTML = encriptado;
});

desencriptar.addEventListener("click", function () {
    var desencriptado = entrada.value;
    desencriptado = desencriptado.replace(/enter/g, "e");
    desencriptado = desencriptado.replace(/imes/g, "i");
    desencriptado = desencriptado.replace(/ai/g, "a");
    desencriptado = desencriptado.replace(/ober/g, "o");
    desencriptado = desencriptado.replace(/ufat/g, "u");
    resultado.innerHTML = desencriptado;
});

copiar.addEventListener("click", function () {
    var mensajeencriptado = resultado.value;
    navigator.clipboard.writeText(mensajeencriptado);
});
