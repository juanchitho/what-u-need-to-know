import React from 'react';
import '../App.css';

const CotiDolarCryp = () => {
  return (
    <div>
      <iframe
        className="divCotiDolar"
        src="https://dolarhoy.com/i/cotizaciones/bitcoin-usd"
        frameBorder="0"
        title="Cotización del Dólar Crpyto"
      ></iframe>
    </div>
  );
};

export default CotiDolarCryp;