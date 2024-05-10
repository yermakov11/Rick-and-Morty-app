import { BrowserRouter, Route, Routes } from "react-router-dom";
import Episodes from "./pages/Episodes";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Episodes />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
