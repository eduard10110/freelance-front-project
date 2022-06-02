import Checkbox from "components/categoriesChackbox";
import Footer from "containers/footer";
import Header from "containers/header";
import { checkboxFakeData } from "helpers/constants";
import React, { useState } from "react";

export default function Home() {
  const [state, setState] = useState([]);
  return (
    <div>
      <Checkbox data={checkboxFakeData} state={state} setState={setState} />
      <Header />
      <Footer />
    </div>
  );
}
