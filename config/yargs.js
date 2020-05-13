const config = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprimir tabla', config)
    .command('crear', 'crear archivo', config).help().argv;

module.exports = {
    argv
}