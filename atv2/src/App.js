import PC from "./Components/atividade01/MeuPc02";
import Pai from "./Components/atividade01/questao01/Pai01";
import Wolrd from "./Components/atividade01/World";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Pai />
      <br />
      <hr />
      <PC />
      <br />
      <hr />
      <Wolrd />
    </div>
  );
}
