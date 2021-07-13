import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import Login from "./components/Login";

function App() {
 

  return (
    <div className="App">
      <NavBar></NavBar>
      <Login></Login>
    </div>
  );
}

export default App;
