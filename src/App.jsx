import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import DetailContainer from "./components/DetailContainer/DetailContainer";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<DetailContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
