import React from "react";

export const PlacaMae = ({ nome, preco }) => {
  return `nome da placa de vídeo: ${nome} e preço da placa ${preco}`;
};

export const PlacaDeVideo = ({ nome, preco }) => {
  return `nome da placa de vídeo: ${nome} e preço da placa ${preco}`;
};

export const Memoria = ({ nome, preco }) => {
  return `nome da placa de vídeo: ${nome} e preço da placa ${preco}`;
};

const PC = () => {
  return (
    <>
      <br />
      <PlacaMae nome={"placaMae02"} preco={"R$ 2000.00"} />
      <br />
      <PlacaDeVideo nome={"placaDeVideo02"} preco={"R$ 1500.00"} />
      <br />
      <Memoria nome={"memoria02"} preco={"R$ 100.00"} />
    </>
  );
};

export default PC;
