const inquirer = require('inquirer');
require('colors');

const preguntas = [
	{
		type: 'list',
		name: 'opcion',
		message: '¿Qué desea hacer',
		choices: [
			{ value: '1', name: `${'1.'.red} Crear tarea` },
			{ value: '2', name: `${'2.'.red} Listar tareas` },
			{ value: '3', name: `${'3.'.red} Listar tareas completadas` },
			{ value: '4', name: `${'4.'.red} Listar tareas pendientes` },
			{ value: '5', name: `${'5.'.red} Completar tarea(s)` },
			{ value: '6', name: `${'6.'.red} Borrar tarea` },
			{ value: '0', name: `${'0.'.red} Salir` },
		],
	},
];

const inquirerMenu = async () => {
	console.clear();
	console.log('================================'.green);
	console.log('      Seleccione su opción      '.white);
	console.log('================================\n'.green);

	const { opcion } = await inquirer.prompt(preguntas);
	return opcion;
};

const leerInput = async (message) => {
	const question = [
		{
			type: 'input',
			name: 'desc',
			message,
			validate(value) {
				if (value.length === 0) {
					return 'Por favor ingrese un valor';
				}
				return true;
			},
		},
	];

	const { desc } = await inquirer.prompt(question);
	return desc;
};

const inquirerPausa = async () => {
	const question = [
		{
			type: 'input',
			name: 'pausa',
			message: `Presione ${'ENTER'.green} para continuar`,
		},
	];
	console.log(`\n`);
	const { pausa } = await inquirer.prompt(question);
	return pausa;
};

module.exports = { inquirerMenu, leerInput, inquirerPausa };
