import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Stylesheet } from "./pages";
import { Navbar } from "./components/";
function App() {
  return (
    <>
      <div className="Container">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="FirstRefresher" element={<Stylesheet />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
