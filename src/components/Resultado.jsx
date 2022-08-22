import React from "react";
import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado } = useClima();
  const { name, main } = resultado;
  //grados Kelvin
  const kelvin = 273.15;

  return (
    <div className="contenedor clima">
      <h2>El clima de {name} es de: </h2>
      <p>
        {parseInt(main.temp - kelvin)} <span className="centigrados">&#x2103;</span>
      </p>
      <div className="temp_min_max">
        <p>
          Max: {parseInt(main.temp_min - kelvin)} <span className="centigrados">&#x2103;</span>
        </p>
        <p>
          Min: {parseInt(main.temp_max - kelvin)} <span className="centigrados">&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Resultado;
