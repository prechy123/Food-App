import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="foodName"
          value={name}
          onChange={handleChange}
          className="search-bar"
          placeholder="Enter Food..."
        />
        <input type="submit" value="Search" className="submit" />
      </div>
    </form>
  );
}

export default FoodForm;
