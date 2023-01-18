const Tarea = require('./tarea');

class Tareas {
	_listado = {};

	get listadoArr() {
		const listado = [];
		Object.keys(this._listado).forEach((key) => {
			const tarea = this._listado[key];
			listado.push(tarea);
		});
		return listado;
	}

	constructor() {
		this._listado = {};
	}

	crearTarea(desc = '') {
		const tarea = new Tarea(desc);
		this._listado[tarea.id] = tarea;
	}

	cargarTareas(tareas = []) {
		tareas.forEach((tarea) => {
			this._listado[tarea.id] = tarea;
		});
	}

	listadoCompleto() {
		this.listadoArr.forEach((tarea, i) => {
			const indice = `${i + 1}`.green;
			const { desc, completadoEn } = tarea;
			const completado = completadoEn !== null ? 'Completada' : 'Pendiente';
			console.log(`${indice}${'.'.green} ${desc} :: ${completado}`);
		});
	}
}

module.exports = Tareas;
