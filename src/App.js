import CrudApi from "./Components/CrudApi";
import CrudApp from "./Components/CrudApp";
import SongSearch from "./Components/SongSearch";

function App() {
  return (
    <>
      <h2>Ejercicios con React</h2>
      <hr />
      <SongSearch/>
      <hr />
      <CrudApi/>
      <hr/>
      <CrudApp/>
    </>
  );
}

export default App;
