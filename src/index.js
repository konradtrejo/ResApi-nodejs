import express from 'express';
const app = express();

app.set('port', process.env.Port || 3000);
app.listen(app.get('port'));
console.log("escuchando en  el puerto ", app.get('port'));
