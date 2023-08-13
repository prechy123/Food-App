import { useState } from "react";
import SearchBar from "../components/SearchBar";

function FoodForm({ setFood }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFood(name);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <SearchBar
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      name={name}
    />
  );
}

export default FoodForm;
