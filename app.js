require('colors');
const { inquirerMenu, inquirerPausa } = require('./helpers/inquirer');
// const { mostrarMenu, pausa } = require('./helpers/mensajes.js');
console.clear();

const main = async () => {
	// console.log('Hola mundo');
	let opt = '';
	do {
		opt = await inquirerMenu();
		console.log({ opt });
		// if (opt !== '0') {
		await inquirerPausa();
		// }
	} while (opt !== '0');
};

main();
