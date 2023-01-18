require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {
	inquirerMenu,
	inquirerPausa,
	leerInput,
} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');

const main = async () => {
	let opt = '';
	const tareas = new Tareas();

	const tareasDB = leerDB();

	if (tareasDB) {
		//establecer tareas
		//TODO: cargar tareas
		// console.log(tareasDB);
		tareas.cargarTareas(tareasDB);
	}

	do {
		opt = await inquirerMenu();
		switch (opt) {
			case '1':
				//crear opción
				const desc = await leerInput('Descripción:');
				tareas.crearTarea(desc);
				break;
			case '2':
				tareas.listadoCompleto();
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

		guardarDB(tareas.listadoArr);
		await inquirerPausa();
	} while (opt !== '0');
};

main();
