import { Route, Routes } from "react-router-dom";
import { Feed } from "./pages/Feed";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}
