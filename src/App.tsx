import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { UserProps } from "./utils/interfaces";
import "./components/general/Snow/Snow.scss";
import { Personal } from "./pages/Personal/Personal";

function App() {
  const [user, setUser] = useState<UserProps | null>(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="auguri/:id" element={<Personal user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
