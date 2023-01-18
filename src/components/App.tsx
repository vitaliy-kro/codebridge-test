import { lazy } from "react";
import { Routes, Route } from "react-router-dom/dist";

const HomePage = lazy(() => import("pages/MainPage"));
const DescriptionPage = lazy(() => import("pages/ReadMorePage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<DescriptionPage />} />
    </Routes>
  );
};
