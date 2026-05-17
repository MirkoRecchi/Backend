const variable = 21;
const variable2 = 23;

fetch()
.then(resultado => resultado = variable+variable2)
.finally(console.log("Este es el final del fetch"))
.catch(console.log("No hay errores por el momento"));