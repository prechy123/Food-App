import { BrowserRouter as Router } from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";
import AnimatedRoutes from "./AnimatedRoutes";

//pages
// import HomePage from "./pages/HomePage";
// import SearchPage from "./pages/SearchPage";
// import CategoriesPage from "./pages/CategoriesPage";
// import ContactPage from "./pages/ContactPage";
// import ProductPage from "./pages/ProductPage";
// import AccountPage from "./pages/AccountPage";
// import CategoryContentPage from "./pages/CategoryContentPage";

function App() {
  return (
    <Router>
      <HeaderLayout />
      <AnimatedRoutes />
    </Router>
  );
}
export default App;
