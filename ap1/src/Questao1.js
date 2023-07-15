import React, { useEffect, useState } from "react";
const Questao01A = () => {
  const alunos = [
    { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.2 } },
    { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } }
  ];

  return (
    <>
      <Questao01B alunos={alunos} />
    </>
  );
};

export function Questao01B({ alunos }) {
  const [vetor, setVetor] = useState([]);
  useEffect(() => {
    alunos.map((alu) => {
      return setVetor((prev) => {
        return [
          ...prev,
          { nome: alu.nome, media: (alu.notas.ap1 + alu.notas.ap2) / 2 }
        ];
      });
    });
  }, []);

  return (
    <>
      {vetor.map((alu, key) => {
        return alu.media > 6 ? (
          <span key={key}>
            media: {alu.nome}
            <br />
          </span>
        ) : null;
      })}
    </>
  );
}

// O código acima consiste em dois componentes Questao01A e Questao01B, sendo que Questao01A apenas chama o componente Questao01B passando um array de objetos alunos como propriedade. O componente Questao01B recebe o array de objetos alunos como propriedade e, através do hook useState, inicializa o estado do componente com um vetor vazio chamado vetor. Em seguida, o hook useEffect é utilizado para calcular a média das notas de cada aluno no array alunos e armazená-las em um novo objeto com as propriedades nome e media. Isso é feito utilizando a função map para iterar sobre cada objeto alu do array alunos, e a função setVetor do hook useState para adicionar um novo objeto no estado vetor a cada iteração. Por fim, o componente Questao01B exibe apenas os alunos cuja média é maior que 6, utilizando a função map novamente para iterar sobre cada objeto alu do estado vetor, e uma estrutura condicional para exibir apenas aqueles que atendem à condição. A exibição é feita em forma de texto com a média e o nome do aluno.

export default Questao01;
