const fs = require('fs');
const color = require('colors');

const crearArchivo = async (base = 5, hasta, listar) => {
    try {
        listar && console.log(`
========================
    TABLA DEL ${base}
========================
        `);

        let salida = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
        }

        listar && console.log(salida.rainbow);

        await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearArchivo
}