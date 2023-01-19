require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {
	inquirerMenu,
	inquirerPausa,
	leerInput,
	listadoTareasBorrar,
	confirmar,
	mostrarListadoChecklist,
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
				//listar todas las tareas
				tareas.listadoCompleto();
				break;
			case '3':
				//listar tareas completadas
				tareas.listarPendientesCompletadas(true);
				break;
			case '4':
				//listar tareas pendientes
				tareas.listarPendientesCompletadas(false);
				break;
			case '5':
				//completado | pendiente
				const ids = await mostrarListadoChecklist(tareas.listadoArr);

				tareas.toggleCompletadas(ids);

				break;
			case '6':
				//borrar tareas
				const id = await listadoTareasBorrar(tareas.listadoArr);

				if (id !== '0') {
					const ok = await confirmar('Está seguro que desea borrarlo');

					if (ok) {
						tareas.borrarTarea(id);
						console.log('Tarea borrada');
					}
				}

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
