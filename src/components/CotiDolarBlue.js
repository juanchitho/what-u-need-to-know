import React from 'react';
import '../App.css';

const CotiDolarBlue = () => {
  return (
    <div>
      <iframe
        className="divCotiDolar"
        src="https://dolarhoy.com/i/cotizaciones/dolar-blue"
        frameBorder="0"
        title="Cotización del Dólar Blue"
      ></iframe>
    </div>
  );
};

export default CotiDolarBlue;