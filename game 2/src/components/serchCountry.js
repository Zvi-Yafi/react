import React, { useState } from "react";
import Test from "./test";

const SerchCountry = () => {
  const [country, setCountry] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  return (
    <div>
      serchCountry:
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCountry((countries) => [...countries, inputValue]);
          setInputValue("");
        }}
      >
        serch
      </button>
      <div>{country.map((item, idx)=> <Test key={idx} nameCountrys={item} />)}</div>
    </div>
  );
};

export default SerchCountry;
