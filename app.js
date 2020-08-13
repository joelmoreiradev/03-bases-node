const argv = require('./config/yargs').argv;
const colors = require('colors');



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')


// imprimir el valor del parametro base del argv.
console.log(argv.base);

// el _ hace referencia al arreglo, y el 0 a la posición 0 de ese arreglo.
let comando = argv._[0];

switch(comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log('================================='.green);
                console.log(`Archivo creado: ${archivo}`.yellow)
                console.log('================================='.green);
            }
                )
            .catch(e => console.log(e));
    break;
    
    default:
        console.log('comando no reconocido'.rainbow);
}


// variable que recibe la tercera posición de lo que contenga argv
// let parametro = argv[2];

// // la base va a ser lo que envíe por consola pero en un arreglo de 2 parámetros separados por el signo "="
// // y con el [1] indico que me interesa el segundo elemento de ese arreglo (0, 1)
// let base = parametro.split('=')[1];

// imprimo la base
// console.log(base); // esto va a ser el número indicado por consola


