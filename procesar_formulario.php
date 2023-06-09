<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Obtener los datos del formulario
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  // Validar los datos (opcional)

  // Procesar los datos (por ejemplo, enviar un correo electrónico)
  $to = "agustin.scutari@it-tel.com.ar";
  $subject = "Nuevo mensaje de contacto";
  $body = "Nombre: " . $name . "\n";
  $body .= "Correo electrónico: " . $email . "\n";
  $body .= "Asunto: " . $subject . "\n";
  $body .= "Mensaje: " . $message . "\n";

  if (mail($to, $subject, $body)) {
    echo "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.";
  } else {
    echo "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
  }
}
?>
