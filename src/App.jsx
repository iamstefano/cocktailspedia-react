import { useState } from "react";
import "./App.css";
import ProductSection from "./components/productSection";

function App() {
  const [productSection, setProductSection] = useState("");

  return (
    <>
      <h1>Cocktailspedia</h1>

      <ProductSection
        productSection={productSection}
        setProductSection={setProductSection}
      />
    </>
  );
}

export default App;
