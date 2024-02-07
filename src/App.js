// api
import { Route, Routes } from 'react-router-dom';

// component
import Header from './component/layout/Header';
import SwiperBanner from './component/swiper/Banner'
import Categorycom from './component/product/Category'

// data
import db from './data/db.json'
// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/Style.scss'


function App() {
  return (
    <div className="App">
      <Header datasrc={db.hd}></Header>
      <Routes>
        <Route path='/' element={
          <>
            <SwiperBanner swiperData={db.swiper.main}></SwiperBanner>
            <Categorycom categoryData={db.category} ></Categorycom>
          </>
        }></Route>
      </Routes>

    </div>
  );
}

export default App;
