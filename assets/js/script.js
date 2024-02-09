// Funcion para cargar el contenido de los ejercicios HTML en el div con id "contenido" del index.html
function cargarContenido(url) {
    // Utiliza la Fetch API para cargar el contenido
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Cuando la carga es exitosa, actualiza el contenido
            document.getElementById('contenido').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
        });
}