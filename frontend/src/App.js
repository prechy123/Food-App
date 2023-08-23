import {
  createBrowserRouter,
  Route,
  createRoutesFromChildren,
  RouterProvider,
} from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";

//pages
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import CategoriesPage from "./pages/CategoriesPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import AccountPage from "./pages/AccountPage";
import CategoryContentPage from "./pages/CategoryContentPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="categories/:cateName" element={<CategoryContentPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
export default App;
