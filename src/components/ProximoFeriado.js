import React, { useEffect, useState } from 'react';
import feriadosData from './feriados.json';
//el json lo estoy sacando de aca https://github.com/mrti259/feriados-argentina/tree/master
const FeriadosComponent = () => {
  const [feriadoProximo, setFeriadoProximo] = useState(null);

  useEffect(() => {
    // Obtén la fecha de referencia (puedes ajustar esto según tus necesidades)
    const fechaDeReferencia = new Date();

    // Convierte las fechas en objetos Date
    const feriadosConFechas = feriadosData.map((feriado) => ({
      ...feriado,
      fecha: new Date(feriado.fecha),
    }));

    // Ordena los feriados por fecha en orden ascendente
    const feriadosOrdenados = feriadosConFechas.sort((a, b) => a.fecha - b.fecha);

    // Encuentra el feriado más próximo a la fecha de referencia
    const feriadoProximo = feriadosOrdenados.find((feriado) => feriado.fecha > fechaDeReferencia);

    setFeriadoProximo(feriadoProximo);
  }, []);

  return (
    <div className="divFeriados"
    
    title="Cotización del Dólar Blue">
      {feriadoProximo ? (
        <p>El próximo feriado es el {feriadoProximo.motivo} el {feriadoProximo.fecha.toLocaleDateString()}</p>
      ) : (
        <p>No hay feriados próximos.</p>
      )}
    </div>
  );
};

export default FeriadosComponent;