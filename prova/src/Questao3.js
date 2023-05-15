import React, { useState, useEffect } from "react";

const Questao03 = () => {
  const [capitalMaiorPopulacao, setCapitalMaiorPopulacao] = useState("");
  const [capitalMenorPopulacao, setCapitalMenorPopulacao] = useState("");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/region/europe?fields=name,capital,population"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Erro na requisição");
        }
      })
      .then((data) => {
        let indiceMaiorPopulacao = 0;
        let indiceMenorPopulacao = 0;
        let maiorPopulacao = data[0].population;
        let menorPopulacao = data[0].population;

        for (let i = 1; i < data.length; i++) {
          if (data[i].population > maiorPopulacao) {
            indiceMaiorPopulacao = i;
            maiorPopulacao = data[i].population;
          }
          if (data[i].population < menorPopulacao) {
            indiceMenorPopulacao = i;
            menorPopulacao = data[i].population;
          }
        }

        setCapitalMaiorPopulacao(data[indiceMaiorPopulacao].capital);
        setCapitalMenorPopulacao(data[indiceMenorPopulacao].capital);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3>Capitais dos países com maior e menor população da Europa:</h3>
      <p>Capital com maior população: {capitalMaiorPopulacao}</p>
      <p>Capital com menor população: {capitalMenorPopulacao}</p>
    </div>
  );
};

//O componente Questao03 utiliza o hook useEffect para fazer uma requisição à API "https://restcountries.com/v3.1/region/europe?fields=name,capital,population" assim que é montado. Ao receber a resposta da API, a função callback do último then percorre todo o vetor data de objetos para encontrar os índices da capital com maior e menor população, armazenando-os nas variáveis indiceMaiorPopulacao e indiceMenorPopulacao, respectivamente. Em seguida, o componente utiliza as funções de estado setCapitalMaiorPopulacao e setCapitalMenorPopulacao para atualizar as variáveis de estado capitalMaiorPopulacao e capitalMenorPopulacao com as capitais correspondentes, acessando o vetor data pelos índices encontrados. Essas variáveis de estado são então renderizadas em tela com as tags <p>. Caso ocorra algum erro na requisição, o componente imprime o erro no console do navegador utilizando a função console.log().

export default Questao03;
