import React from 'react';
import '../App.css';

const CotiDolarOfi = () => {
  return (
    <div>
      <iframe
        className="divCotiDolar"
        src="https://dolarhoy.com/i/cotizaciones/dolar-bancos-y-casas-de-cambio"
        frameBorder="0"
        title="Cotización del Dólar Blue"
      ></iframe>
    </div>
  );
};

export default CotiDolarOfi;