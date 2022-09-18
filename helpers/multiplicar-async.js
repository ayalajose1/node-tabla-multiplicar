const fs = require('fs');
const colors = require('colors')
const crearArchivo = async( base, listar, hasta) => {

	try {
	  let salida = '';
	  for (i = 1; i <= hasta; i++) {
	    salida += `${ base } ${'X'.blue} ${ i } = ${ base * i }\n`;
	  }
	  if(listar) {
	    console.log('====================='.green);//para dar color verde
	    console.log(' Tabla del', base );
	    console.log('====================='.blue);
	    console.log(salida)	
	  }
	  fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
		 return `tabla-${ base }.txt`;	
	} 
	catch (err) {
	  throw err;
	}      
} 

module.exports = {
  crearArchivo
}