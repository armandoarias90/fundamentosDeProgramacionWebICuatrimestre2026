document.addEventListener('DOMContentLoaded', function() {
    
    // Array para almacenar los libros (en memoria)
    let libros = [];
    
    // Referencias a elementos del DOM
    const formLibro = document.getElementById('formLibro');
    const tablaLibrosResultados = document.getElementById('tablaLibrosResultados');
    const filtroAutor = document.getElementById('filtroAutor');
    
    // Función para actualizar el combo de autores
    function actualizarComboAutores() {
        // Obtener autores únicos
        const autores = [...new Set(libros.map(libro => libro.autor))].sort();
        
        // Limpiar combo (mantener la primera opción "Todos")
        filtroAutor.innerHTML = '<option value="todos">Todos los autores</option>';
        
        // Agregar autores al combo
        autores.forEach(autor => {
            const option = document.createElement('option');
            option.value = autor;
            option.textContent = autor;
            filtroAutor.appendChild(option);
        });
    }
    
    // Función para mostrar los libros en la tabla
    function mostrarLibros(filtro = 'todos') {
        // Filtrar libros si es necesario
        let librosAMostrar = libros;
        if (filtro !== 'todos') {
            librosAMostrar = libros.filter(libro => libro.autor === filtro);
        }
        
        // Limpiar tabla
        tablaLibrosResultados.innerHTML = '';
        
        // Mostrar mensaje si no hay libros
        if (librosAMostrar.length === 0) {
            tablaLibrosResultados.innerHTML = '<tr><td colspan="5" class="text-center">No hay libros registrados</td></tr>';
        } else {
            // Recorrer libros y crear filas
            librosAMostrar.forEach(libro => {
                const fila = document.createElement('tr');
                
                // Determinar el emoji según el estado
                let emoji = '';
                if (libro.estado === 'Leído') emoji = 'Leído';
                else if (libro.estado === 'Leyendo') emoji = 'Leyendo';
                else if (libro.estado === 'Por leer') emoji = 'Por leer';
                
                fila.innerHTML = `
                    <td><strong>${libro.titulo}</strong></td>
                    <td>${libro.autor}</td>
                    <td>${libro.publicacion}</td>
                    <td>${libro.paginas}</td>
                    <td>${libro.estado}</td>
                `;
                
                tablaLibrosResultados.appendChild(fila);
            });
        }
    }
    
    // Función para agregar un libro
    function agregarLibro(event) {
        event.preventDefault();
        
        // Obtener valores del formulario
        const titulo = document.getElementById('titulo').value.trim();
        const autor = document.getElementById('autor').value.trim();
        const publicacion = parseInt(document.getElementById('publicacion').value);
        const paginas = parseInt(document.getElementById('paginas').value);
        const estado = document.getElementById('estado').value;
        
        // Validaciones básicas
        if (!titulo || !autor || !publicacion || !paginas || !estado) {
            Swal.fire({
                icon: 'error',
                title: 'Campos incompletos',
                text: 'Por favor, completa todos los campos',
                confirmButtonColor: '#e15e6e'
            });
            return;
        }
        
        // Crear objeto libro
        const nuevoLibro = {
            titulo,
            autor,
            publicacion,
            paginas,
            estado
        };
        
        // Agregar al array
        libros.push(nuevoLibro);
        
        // Actualizar combo de autores
        actualizarComboAutores();
        
        // Mostrar libros (aplicando filtro actual)
        mostrarLibros(filtroAutor.value);
        
        // Resetear formulario
        formLibro.reset();
        
        // Mensaje de éxito
        Swal.fire({
            icon: 'success',
            title: '¡Libro registrado!',
            text: `"${titulo}" ha sido agregado al catálogo`,
            timer: 2000,
            showConfirmButton: false,
            toast: true,
            position: 'top-end'
        });
    }
    
    // Evento para el filtro
    filtroAutor.addEventListener('change', function() {
        mostrarLibros(this.value);
    });
    
    // Evento para el formulario
    formLibro.addEventListener('submit', agregarLibro);
    
    // Precargar algunos libros de ejemplo
    function precargarEjemplos() {
        const ejemplos = [
            { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', publicacion: 1967, paginas: 471, estado: 'Leído' },
            { titulo: '1984', autor: 'George Orwell', publicacion: 1949, paginas: 326, estado: 'Leído' },
            { titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', publicacion: 1943, paginas: 96, estado: 'Leído' },
            { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', publicacion: 1605, paginas: 1345, estado: 'Por leer' },
            { titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', publicacion: 2001, paginas: 576, estado: 'Leyendo' },
            { titulo: 'Cementerio de Mascotas', autor: 'Stephen King', publicacion: 1983, paginas: 488, estado: 'Por Leer' },
            { titulo: 'El Resplandor', autor: 'Stephen King', publicacion: 1977, paginas: 656, estado: 'Leído' }
        ];
        
        libros = [...ejemplos];
        actualizarComboAutores();
        mostrarLibros('todos');
    }
    
    // Precargar ejemplos
    precargarEjemplos();
});