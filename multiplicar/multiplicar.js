let fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`'${base}' no es un número`);
        }
        if (!Number(limite)) {
            reject(`'${limite}' no es un número`);
        }
        if (base > limite) {
            reject(`la base ${base} no puede ser mayor que limite ${limit}`)
        }
        let info = "";
        for (let i = 1; i <= limite; i++) {
            info += (`${base}x${i} = ${i*base}\n`);
        }

        fs.writeFile(`tabla-${base}.txt`, info, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`)
        });
    });
}

let listarTabla = (base, limit) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`'${base}' no es un número`);
        }
        if (!Number(limit)) {
            reject(`'${limit}' no es un número`);
        }
        if (base > limit) {
            reject(`la base ${base} no puede ser mayor que limite ${limit}`)
        }

        for (let i = 1; i <= limit; i++) {
            console.log(`${base} x ${i} = ${i*base} `.blue);
        }
        resolve('ok');
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}