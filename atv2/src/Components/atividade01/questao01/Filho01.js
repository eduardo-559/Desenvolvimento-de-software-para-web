import React from "react";

const Imc = (peso, altura) => {
  const imc = peso / (altura * altura);
  if (imc < 18) {
    return "Abaixo do peso";
  } else if (imc > 25) {
    return "Acima do peso";
  } else return "peso ideal";
};

const Filho = ({ peso, altura }) => {
  return <h3>{Imc(peso, altura)}</h3>;
};

export default Filho;
