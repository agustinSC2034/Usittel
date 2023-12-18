<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtener el número de cliente enviado desde el frontend
    $numeroCliente = htmlspecialchars($_POST["numeroCliente"]);

    // Verificar si el número de cliente está presente
    if (empty($numeroCliente)) {
        http_response_code(400); // Bad request
        echo json_encode(array("message" => "Número de cliente no proporcionado."));
        exit();
    }

    // Email al que se enviará el aviso
    $destinatario = "aguustinn18@gmail.com";
    $asunto = "Mensaje automático - Consulta de área de cobertura";
    $cuerpo = "El número de cliente: " . $numeroCliente . " consultó el área de cobertura hoy.";

    // Enviar el correo electrónico
    if (mail($destinatario, $asunto, $cuerpo)) {
        http_response_code(200); // OK
        echo json_encode(array("message" => "Correo enviado exitosamente."));
    } else {
        http_response_code(500); // Internal server error
        echo json_encode(array("message" => "Error al enviar el correo."));
    }
} else {
    http_response_code(405); // Method not allowed
    echo json_encode(array("message" => "Método no permitido."));
}
?>
