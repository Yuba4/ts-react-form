import React, { useState } from "react";
import "./App.css";

import { List } from "./components/List";

type Istate = {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
};

const App = () => {
  const [people, setPeople] = useState<Istate["people"]>([
    { name: "山田太郎", age: 24, url: "yahoo.com", note: "彼はイケメン" },
  ]);

  return (
    <div className="App">
      <List people={people} />
    </div>
  );
};

export default App;
