document.addEventListener('DOMContentLoaded', function() {
    
    const formulario = document.querySelector('form');
    const inputTarea = document.getElementById('tarea');
    const lista = document.getElementById('lista');
    const contadorSpan = document.getElementById('contador');

    function actualizarContador() {
        contadorSpan.textContent = lista.children.length;
    }

    function eliminarTarea(elementoLi) {
        elementoLi.remove(); 
        actualizarContador(); 
    }

    function agregarTarea(evento) {
        evento.preventDefault();

        const texto = inputTarea.value.trim();

        if (texto === '') {
            alert('Por favor, escribe una tarea válida.');
            return;
        }

        const li = document.createElement('li');

        li.innerHTML = `
            <span>${texto}</span>
            <button class="btn-eliminar">Eliminar</button>
        `;

        const botonEliminar = li.querySelector('.btn-eliminar');
        
        botonEliminar.addEventListener('click', function() {
            eliminarTarea(li);
        });

        lista.appendChild(li);

        inputTarea.value = '';

        actualizarContador();
    }

    formulario.addEventListener('submit', agregarTarea);

});