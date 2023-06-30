import { useState } from "react";
import "./index.css";

const Filters = ({ categoryList, setCategoryList }) => {
  const [checkInputRum, setCheckInputRum] = useState(true);
  const [checkInputVodka, setCheckInputVodka] = useState(true);
  const [checkInputGin, setCheckInputGin] = useState(true);

  // const onHandleCheckInput = (e) =>
  //   setCheckInputs((prev) => [...prev, e.target.checked]);

  const onHandleCheckRum = () => setCheckInputRum((prev) => !prev);
  const onHandleCheckVodka = () => setCheckInputVodka((prev) => !prev);
  const onHandleCheckGin = () => setCheckInputGin((prev) => !prev);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setCategoryList([
      checkInputRum && "rum",
      checkInputVodka && "vodka",
      checkInputGin && "gin",
    ]);
  };

  return (
    <form className="Filters" onSubmit={onHandleSubmit}>
      <label htmlFor="rum">Rum</label>
      <input
        type="checkbox"
        name="rum"
        checked={checkInputRum}
        onChange={onHandleCheckRum}
      />

      <label htmlFor="vodka">Vodka</label>
      <input
        type="checkbox"
        name="vodka"
        checked={checkInputVodka}
        onChange={onHandleCheckVodka}
      />

      <label htmlFor="gin">Gin</label>
      <input
        type="checkbox"
        name="gin"
        checked={checkInputGin}
        onChange={onHandleCheckGin}
      />

      <input type="submit" value="Apply" />

      {/* {categoryList.map((category, i) => (
        <div className="Filters__checkbox" key={i}>
          <label htmlFor={category}>{category}</label>
          <input
            type="checkbox"
            name={category}
            checked={checkInputs[i]}
            onChange={onHandleCheckInput}
          />
        </div>
      ))} */}
    </form>
  );
};

export default Filters;
