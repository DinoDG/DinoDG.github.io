//Detectar si estamos navegando desde un dispositivo móvil
function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
    
}

//mostrar boton o qr segun dispositivo
if (isMobile()) {
    console.log("Mobile device detected");
    movil.style.display = "block";
    codigoQR.style.display = "none";
} else {
    console.log("Desktop device detected");
    movil.style.display = "none";
    codigoQR.style.display = "block";
}




 // Define la información que deseas codificar en el código QR
 var informacionParaQR = "https://drive.google.com/file/d/1wn-KEgf_r_8tAnsa-gkGdBsyGcuuRweN/view?usp=drive_link";

 // Crea un nuevo elemento de imagen
 var imgQR = document.createElement("img");

 // Configura los atributos de la imagen, incluida la URL del código QR
 imgQR.src = "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=" + encodeURIComponent(informacionParaQR);
 imgQR.alt = "Código QR";

 // Agrega la imagen al elemento con id "codigoQR"
 document.getElementById("codigoQR").appendChild(imgQR);