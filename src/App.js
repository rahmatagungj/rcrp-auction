import './App.scss';
import Header from "./Components/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Auction from './Components/Auction';
import firebase from "./Firebase";
import {useState, useEffect} from "react"
function App() {
  const [lastBid, setLastBid] = useState(0);
  const [loading, setLoading] = useState(true);
  const db = firebase.database().ref("BID");

  useEffect(() => {
    db.on("value", (snapshot) => {
      const data = snapshot.val();
      setLastBid(data.last);
      setLoading(false);
    });
    return () => {
      setLoading(true);
    };
  }, [db]);
  
  const setBid = (val) => {
    db.update({ last: val });
  }
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="container-content">
        <div className="content">
        <Switch>
          
          <Route path="/" exact>
            {loading ? "Memuat Data ... " : (
            <Link to="/lelang" className="pick">Lihat Lelang Terbaru</Link>
            )}
          </Route>
          <Route path="/lelang" exact>
            <Auction lastBid={lastBid} setBid={setBid} loading={loading}/>
          </Route>
          
          </Switch>
      </div>
     </div>
    </div>
    </Router>
  );
}

export default App;
