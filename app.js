require('colors');
const { guardarDB } = require('./helpers/guardarArchivo');
const {
	inquirerMenu,
	inquirerPausa,
	leerInput,
} = require('./helpers/inquirer');
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
// const { mostrarMenu, pausa } = require('./helpers/mensajes.js');
// console.clear();

const main = async () => {
	// console.log('Hola mundo');
	let opt = '';
	const tareas = new Tareas();
	do {
		opt = await inquirerMenu();
		// console.log({ opt });
		switch (opt) {
			case '1':
				//crear opción
				const desc = await leerInput('Descripción:');
				tareas.crearTarea(desc);
				break;
			case '2':
				console.log(tareas._listado);
				console.log(tareas.listadoArr);
				break;
			case '3':
				break;
			case '4':
				break;
			case '5':
				break;
			case '6':
				break;
			case '0':
				break;
			default:
				break;
		}

		// guardarDB(tareas.listadoArr);
		await inquirerPausa();
	} while (opt !== '0');
};

main();
