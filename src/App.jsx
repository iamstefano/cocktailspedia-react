import { useState } from "react";
import "./App.css";
import ProductSection from "./components/productSection";
import ProductList from "./components/productList";

function App() {
  const [productSection, setProductSection] = useState("");

  return (
    <div className="App">
      <h1>Cocktailspedia</h1>

      {productSection ? (
        <ProductSection
          productSection={productSection}
          setProductSection={setProductSection}
        />
      ) : (
        <>
          <ProductList name="rum" setProductSection={setProductSection} />
          <ProductList name="vodka" setProductSection={setProductSection} />
          <ProductList name="gin" setProductSection={setProductSection} />
        </>
      )}
    </div>
  );
}

export default App;
