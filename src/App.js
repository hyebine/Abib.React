import Header from './component/layout/Header'


// data
import db from './data/db.json'
// css
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header datasrc={db.hd}></Header>
    </div>
  );
}

export default App;
