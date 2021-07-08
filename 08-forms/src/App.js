import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App ui container">
      <Router>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
