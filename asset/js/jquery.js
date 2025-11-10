// $(document).ready(function() {
//   // 1️⃣ Activar el plugin DataTables sobre la tabla
//   let tabla = $('#tablaUsuarios').DataTable({
//     language: {
//       url: "//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json"
//     }
//   });

//   // 2️⃣ Capturar el envío del formulario
//   $('#formUsuario').on('submit', function(e) {
//     e.preventDefault(); // evita recargar la página

//     // Obtener datos del formulario
//     let nombre = $('#nombre').val();
//     let edad = $('#edad').val();

//     // 3️⃣ Usar jQuery para agregar una nueva fila al DataTable
//     tabla.row.add([nombre, edad]).draw();

//     // Limpiar campos
//     $('#nombre').val('');
//     $('#edad').val('');
//   });
// });

// Forma corta de document.ready
$(() => {

  // Inicializar DataTable y configurar lenguaje español
  const tabla = $('#tablaUsuarios').DataTable({
    language: {
      url: '//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json'
    }
  });

  // Manejar envío del formulario
  $('#formUsuario').on('submit', (e) => {
    e.preventDefault(); // evita recargar la página

    const nombre = $('#nombre').val().trim();
    const edad = $('#edad').val().trim();

    // Validar que los campos no estén vacíos
    if (!nombre || !edad) return;

    // Agregar fila al DataTable
    tabla.row.add([nombre, edad]).draw();

    // Limpiar formulario con jQuery encadenado
    $('#nombre, #edad').val('');
  });
});

// un comentario nuevo 
// otro comentario nuevo