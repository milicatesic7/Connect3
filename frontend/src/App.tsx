import { Routes, Route } from "react-router-dom";

import PhoneFrame from "./components/layout/PhoneFrame";

import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
  return (
    <PhoneFrame>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </PhoneFrame>
  );
}

export default App;
