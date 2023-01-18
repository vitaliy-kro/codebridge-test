import { lazy } from "react";
import { Routes, Route } from "react-router-dom/dist";
import ReadMorePage from "pages/ReadMorePage";

const HomePage = lazy(() => import("pages/MainPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<ReadMorePage />} />
    </Routes>
  );
};
