import './App.scss';
import Header from "./Components/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Auction from './Components/Auction';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="container-content">
        <div className="content">
        <Switch>
          <Route path="/" exact>
            <Link to="/lelang" className="pick">Lihat Lelang Terbaru</Link>
          </Route>
          <Route path="/lelang" exact>
            <Auction/>
          </Route>
          </Switch>
      </div>
     </div>
    </div>
    </Router>
  );
}

export default App;
