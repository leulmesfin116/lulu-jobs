import Home from "./Home.tsx";
import Auth from "./Auth.tsx";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
