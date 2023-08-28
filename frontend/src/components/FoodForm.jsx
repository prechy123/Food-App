import { useState } from "react";
import { motion } from "framer-motion";

function FoodForm({ setFood, searchVariants }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFood(name);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <motion.form onSubmit={handleSubmit} variants={searchVariants}>
      <div className="inputs">
        <div className="input-text">
          <input
            type="text"
            name="foodName"
            value={name}
            onChange={handleChange}
            className="search-bar"
            required
          />
          <span>Enter food</span>
        </div>
        <div className="submit">
          <input type="submit" value="Search" className="submit" />
        </div>
      </div>
    </motion.form>
  );
}

export default FoodForm;
