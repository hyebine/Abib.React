// api
import { Route, Routes } from 'react-router-dom';

// component
import Header from './component/layout/Header';
import SwiperBanner from './component/swiper/Banner'
import Categorycom from './component/product/Category'
import Best from './component/product/BestProduct'
import Brand from './component/main/Brand'
import Sns from './component/main/Instagram'
import Apply from './component/main/Form'
import Footer from './component/layout/Footer'

// data
import db from './data/db.json'
// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss'


function App() {
  return (
    <div className="App">
      <Header datasrc={db.hd}></Header>
      <Routes>
        <Route path='/' element={
          <>
            <SwiperBanner swiperData={db.swiper.main}></SwiperBanner>
            <Categorycom categoryData={db.category} ></Categorycom>
            <Best bestData={db.products}></Best>
            <Brand brandData={db.brandstory}></Brand>
            <Sns></Sns>
            <Apply></Apply>
            <Footer></Footer>
          </>
        }></Route>
      </Routes>

    </div>
  );
}

export default App;
