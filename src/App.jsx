import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer
        saludo={"Bievenidos"}
        proximamente={"LANDING PAGE EN CONSTRUCCION"}
      />
    </>
  );
}

export default App;
