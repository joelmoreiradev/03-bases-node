
// opts es abreviación de opciones para reutilizar en los comandos.
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}



// código optimizado
const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
            .command('crear', 'Crea la tabla de multiplicar y la guarda en un archivo', opts)
            .help()
            .argv;


module.exports = {
    argv
}