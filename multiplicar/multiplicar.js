const fs = require('fs');
const colors = require('colors');


// listar la tabla desde app.js
let listarTabla = (base, limite = 10) => {

    console.log('======================='.green);
    console.log(`===== Tabla del ${base} =====`.red);
    console.log('======================='.green);
    for(let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

    

}


// Función crear archivo, que recibe la base enviada desde app.js
crearArchivo = ( base, limite = 10) => {

    return new Promise( (resolve, reject) => {
        
        // si base no es un número.
        if( !Number(base) ) {
            reject(`El valor ${base} no es un número válido.`);

            // return para que no ejecute todo el código de abajo.
            return;
        }

        let data = '';


        for(let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }


       fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
       
        if (err) 
            reject(err);

        else 
            resolve(`tabla-${base}-al-${limite}.txt`.red)
       });

    });

}

// exportar la función de forma global para poder importarla en cualquier lado.
module.exports = {
    crearArchivo,
    listarTabla
}