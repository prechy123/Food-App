import { BrowserRouter as Router } from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";
import AnimatedRoutes from "./AnimatedRoutes";


function App() {
  return (
    <Router>
      <HeaderLayout />
      <AnimatedRoutes />
    </Router>
  );
}
export default App;
