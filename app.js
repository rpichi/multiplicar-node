const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let base = argv.base;
let limite = argv.limite;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(`listar ${base}`)
        listarTabla(base, limite).then(result => console.log(result.blue)).catch(err => console.log(err.gray));
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.blue))
            .catch(e => console.log(e.gray));
        break;
    default:
        console.log('comando no reconocido'.red);
        break;
}