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
    <div className='divFeriados'>
      {feriadoProximo ? (
        <div>
          <p>El próximo feriado es el <span>{feriadoProximo.motivo} </span> el <span>{feriadoProximo.fecha.toLocaleDateString()} </span></p>
          <p>Quedan <span>{calcularDiasRestantes(feriadoProximo.fecha)} </span> días para el próximo feriado.</p>
        </div>
      ) : (
        <p>No hay feriados próximos.</p>
      )}
    </div>
  );
};

const calcularDiasRestantes = (fechaFeriado) => {
  const fechaActual = new Date();
  const diferenciaEnMilisegundos = fechaFeriado.getTime() - fechaActual.getTime();
  return Math.ceil(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
};

export default FeriadosComponent;

