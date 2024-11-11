async function PostEmail(user_name, user_email, message) {
    const emailData={
        user_name, 
        user_email,
        message
    }
    try {
        // Realiza una solicitud POST a la URL especificada
        const response = await fetch('http://127.0.0.1:8000/api/contact/', {
            method: 'POST', // Especifica que se está utilizando el método POST
            headers: {
                'Content-Type': 'application/json' // Indica que los datos se envían en formato JSON. en este apartado tambien se pueden enviar tokens
            },
            body: JSON.stringify(emailData) // Convierte el objeto newUser a JSON para enviarlo en el cuer
        });

        // Espera la respuesta en formato JSON
        const data = await response.json();
        // Retorna los datos obtenidos de la respuesta del servidor
        return data; /// siempre hay que ponerlo 
    } catch (error) {
        // Captura y muestra cualquier error que ocurra durante la solicitud
        console.error(error);
    }
}
export default PostEmail;