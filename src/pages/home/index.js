import Checkbox from "components/categoriesChackbox";
import Card from "components/card";
import { checkboxFakeData } from "helpers/constants";
import React, { useState } from "react";

export default function Home() {
  const [state, setState] = useState([]);
  return (
    <div>
      <Checkbox data={checkboxFakeData} state={state} setState={setState} />
      <Card />
    </div>
  );
}
