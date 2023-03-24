import { Route, Routes } from "react-router-dom";
import { Feed } from "./pages/Feed";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/user/:userId" element={<Users />} />
    </Routes>
  );
}
