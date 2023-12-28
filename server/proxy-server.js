// const express = require('express');
// const axios = require('axios');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());

// app.get('/api/next-feriado', async (req, res) => {
//   try {
//     const response = await axios.get('https://nolaborables.com.ar/api/v1/next/:provincia');
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error al obtener el próximo feriado', error);
//     res.status(500).json({ error: 'Error al obtener el próximo feriado' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Servidor de proxy escuchando en el puerto ${PORT}`);
// });
