const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Endpoint base de prueba para las membresías
app.get('/api/status', (req, res) => {
    res.json({ message: 'API de Gestión de Membresías en línea' });
});

app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});
