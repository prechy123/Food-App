import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import CategoriesPage from "./pages/CategoriesPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import AccountPage from "./pages/AccountPage";
import CategoryContentPage from "./pages/CategoryContentPage";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="categories/:cateName" element={<CategoryContentPage />} />
      </Routes>
    </AnimatePresence>
  );
}
