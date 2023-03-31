import React from "react";

const Temperatura = (props) => {
  const { tempC, tempF, tempK } = props;

  function celsiusParaFahrenheit(celsius) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
  }

  const fahrenheitParaCelsius = (fahrenheit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius;
  };

  function kelvin(tempK) {
    const celsius = tempK - 273.15;
    const fahrenheit = (tempK - 273.15) * 1.8 + 32;
    const result = {
      celsius: celsius,
      fahrenheit: fahrenheit,
    };
    return result;
  }

  const resultadoKelvin = kelvin(tempK); // Extrai as temperaturas em Celsius e Fahrenheit do objeto JSON retornado pela função kelvin

  return (
    <>
      <p>A temperatura em Celsius é: {tempC}</p>
      <p>A temperatura em Fahrenheit: {celsiusParaFahrenheit(tempC)}</p>

      <p>A temperatura em Fahrenheit é: {tempF}</p>
      <p>A temperatura em Celsius é: {fahrenheitParaCelsius(tempF)}</p>

      <p>A temperatura em Kelvin é: {tempK}</p>
      <p>
        A temperatura em Celsius é: {resultadoKelvin.celsius.toFixed(2)} e em Fahrenheit é:{resultadoKelvin.fahrenheit.toFixed(2)}
      </p>
    </>
  );
};

export default Temperatura;
