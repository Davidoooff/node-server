const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function listarTareas() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    const estado = task.completada ? 'Completada' : 'Pendiente';
    console.log(`${index + 1}. [${estado}] ${task.descripcion}`);
  });
}

function agregarTarea(descripcion) {
  tasks.push({ descripcion, completada: false });
  console.log('Tarea agregada.');
}

function eliminarTarea(indicador) {
  const index = parseInt(indicador) - 1;
  if (!isNaN(index) && index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada.');
  } else {
    console.log('Indicador de tarea inválido.');
  }
}

function completarTarea(indicador) {
  const index = parseInt(indicador) - 1;
  if (!isNaN(index) && index >= 0 && index < tasks.length) {
    tasks[index].completada = true;
    console.log('Tarea completada.');
  } else {
    console.log('Indicador de tarea inválido.');
  }
}

function mostrarMenu() {
  console.log('\nMenú:');
  console.log('1. Listar tareas');
  console.log('2. Agregar tarea');
  console.log('3. Eliminar tarea');
  console.log('4. Completar tarea');
  console.log('5. Salir');

  rl.question('Elija una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        listarTareas();
        break;
      case '2':
        rl.question('Ingrese la descripción de la tarea: ', (descripcion) => {
          agregarTarea(descripcion);
          mostrarMenu();
        });
        break;
      case '3':
        rl.question('Ingrese el indicador de la tarea a eliminar: ', (indicador) => {
          eliminarTarea(indicador);
          mostrarMenu();
        });
        break;
      case '4':
        rl.question('Ingrese el indicador de la tarea a completar: ', (indicador) => {
          completarTarea(indicador);
          mostrarMenu();
        });
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción inválida. Por favor, elija una opción válida.');
        mostrarMenu();
        break;
    }
  });
}

console.log('Bienvenido a la Lista de Tareas\n');
mostrarMenu();
