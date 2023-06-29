import { useState, useEffect } from "react";
import { GET } from "../../utils/HTTP";
import ProductItem from "../productItem";
import "./index.css";

const SearchBar = ({ name, setProductSection }) => {
  const [listData, setListData] = useState([]);
  const [inputCocktail, setInputCocktail] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInputCocktail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
        inputCocktail
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.drinks) {
          setListData(data.drinks);
          setError("");
        } else {
          setListData([]);
          setError("Cocktail not founded");
        }
      });
  };

  return (
    <div className="SearchList">
      <h2>{name}</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputCocktail}
          onChange={handleInputChange}
          placeholder="Cerca cocktail"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="SearchList__items">
        {listData.map((drink) => (
          <ProductItem
            data={drink}
            setProductSection={setProductSection}
            key={drink.idDrink}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
