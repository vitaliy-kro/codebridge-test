import { lazy } from "react";
import { Routes, Route } from "react-router-dom/dist";
import MainPage from "pages/MainPage";
import ReadMorePage from "pages/ReadMorePage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<ReadMorePage />} />
    </Routes>
  );
};
