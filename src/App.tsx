import { useState } from "react";

import Header from "./components/Header";
import styles from "./App.module.css";
import Input from "./components/Input";
import Button from "./components/Button";

type CardProps = {
  info: string;
  check: boolean;
};

function App() {
  const [info, setInfo] = useState<string>("");
  const [listCards, setListCards] = useState<Array<CardProps>>([]);

  function handleNewCard() {
    event?.preventDefault();

    setListCards([...listCards, { check: false, info }]);
    setInfo("");
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleNewCard} className={styles.headerContainer}>
        <Input
          type="text"
          name="info"
          placeholder="Adicione uma nova  tarefa"
          value={info}
          onChange={(event) => {
            setInfo(event?.target.value);
          }}
          required
        />
        <Button type="submit" icon>
          Criar
        </Button>
      </form>

      <div>{listCards.map((item) => item.info)}</div>
    </div>
  );
}

export default App;
