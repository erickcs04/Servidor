const express = require('express');
const path = require('path');
const app = express();
const PORT = 3009;

// Servir archivos estáticos (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'formulario.html'));
});

app.get('/informacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'informacion.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
