
const fs = require("fs");


fs.promises.readFile("archivo.txt","utf-8")
.then(data => console.log(data))
.finally(()=> console.log("Este es el mensaje luego de ejecutar lo anterior"));
