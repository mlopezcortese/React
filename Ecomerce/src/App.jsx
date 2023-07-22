import "./App.css";
import Navbar from "./componets/Navbar";
import ItemListContainer from "./componets/ItemListContainer";


function App() {
  return (
  <main className="main">
    <Navbar />
    <ItemListContainer greetings="Holaaaaaa" />
  </main>
  )
}

export default App;
