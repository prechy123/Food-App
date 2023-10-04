import { motion } from "framer-motion";

const mealsVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};
function MealCom({ meal }) {
  const url = "/product/" + meal.idMeal;
  return (
    <motion.a
      href={url}
      variants={mealsVariants}
      initial="initial"
      animate="animate"
    >
      <div className="search-component">
        <div className="search-img-d">
          <div className="search-img">
            <img src={meal.strMealThumb} alt={meal.strMeal} width={1000}/>
          </div>
          <h2>{meal.strMeal}</h2>
        </div>
      </div>
    </motion.a>
  );
}
export default MealCom;
