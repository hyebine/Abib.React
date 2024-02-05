
// api
import { Route, Routes } from 'react-router-dom';

// component
import Header from './component/layout/Header';
import SwiperBanner from './component/swiper/Banner'
// data
import db from './data/db.json'
// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss'


function App() {
  return (
    <div className="App">
      <Header datasrc={db.hd} ></Header>
      <Routes>
        <Route path='/' element={<SwiperBanner></SwiperBanner>}></Route>
      </Routes>
    </div>
  );
}

export default App;
