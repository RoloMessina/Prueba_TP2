
import express from 'express';
import router from './routes/routes.js';  // Asegúrate de incluir la extensión .js

const app = express();

// Middleware para parsear JSON y datos URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar las rutas
app.use('/', router);

app.listen(8080, () => {
    console.log('El servidor está corriendo en el puerto 8080');
});