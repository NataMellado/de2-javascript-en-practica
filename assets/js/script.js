// Funcion para cargar el html de cada ejercicio dentro del index.html
function cargarContenido(url) {

    // Utiliza la Fetch API para cargar el contenido
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('La respuesta de la red no está ok');
            }
            return response.text();
        })
        .then(data => {

            // Cuando la carga es exitosa, actualiza el contenido
            document.getElementById('contenido').innerHTML = data;







            // ------------ Ejercicio 1 ------------
            // Obtener el formulario del DOM
            const formulario = document.getElementById("formulario");
            if (formulario) {
            
                // Agregar un evento submit al formulario
                formulario.addEventListener("submit", function(event) {
                    event.preventDefault();

                    // Expresión para validar que el valor sea alfabético
                    const validacionAlfabeticos = /^[A-Za-z]+$/;
                    
                    // Obtener elementos del formulario
                    const inputs = document.querySelectorAll('#formulario input, #mensaje');
                    const resultado = document.querySelector('.resultado');
                    const error = document.querySelectorAll('.error');

                    // Limpiar mensajes de error y éxito al inicio
                    resultado.innerText = '';
                    error.forEach(error => {
                        error.innerText = '';
                    });
                    
                    // Itera sobre cada input
                    let hayError = false;
                    inputs.forEach((input,index) => {

                        // Si el input está vacío o no es alfabético, muestra un mensaje de error
                        if (!validacionAlfabeticos.test(input.value)) {
                            error[index].innerText = `El ${input.id} es requerido y debe ser alfabético.`;
                            hayError = true;
                        } else {
                            error[index].innerText = '';
                        }
                    });

                    // Si no hay errores, muestra un mensaje de éxito
                    if (!hayError) {
                        resultado.innerText = 'Formulario enviado con éxito';
                    }
                });
            }







            // ------------- Ejercicio 2 --------------
                
            // Obtener los elementos botones y caja del DOM
            const paletaBotones = document.querySelectorAll('.paleta button');
            const caja = document.querySelector('#caja');
            if (paletaBotones && caja) {

                // Itera sobre cada botón
                paletaBotones.forEach((boton, index) => {
                    // Al hacer click en un botón, cambia el color de la caja   
                    boton.addEventListener('click', function() {
                        const color = boton.style.backgroundColor;
                        caja.style.backgroundColor = color;
                    });
                });
            }







        // ------------- Ejercicio 3 --------------   
        // Obtener los elementos del DOM
        const resultado = document.querySelector('.resultado');
        const sumaBoton = document.getElementById('btn-sumar');
        const restaBoton = document.getElementById('btn-restar');
        const valor1Input = document.getElementById('valor1');
        const valor2Input = document.getElementById('valor2');

        if (resultado) {
            sumaBoton.addEventListener('click', function() {
                if (verificarNumero()) {
                    const suma = Number(valor1Input.value) + Number(valor2Input.value);
                    resultado.innerText = suma;
                }
            });

            restaBoton.addEventListener('click', function() {
                if (verificarNumero()) {
                    const resta = Number(valor1Input.value) - Number(valor2Input.value);
                    if (resta < 0) {
                        resultado.innerText = '0';
                        return;
                    }
                    else {
                        resultado.innerText = resta;
                    }

                }
            });

            // Función para verificar que los valores sean números
            function verificarNumero(value) {
                if (isNaN(valor1Input.value) || isNaN(valor2Input.value)) {
                    resultado.innerText = 'Numero no válido';
                    return false;
                }
                return true;
            }
            
        }





        })   

        .catch(error => {
            console.error('Error fetching content:', error);
        });
}