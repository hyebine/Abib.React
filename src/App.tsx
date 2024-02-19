// api
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';


// component
import Header from './component/layout/Header'
import SwiperBanner from './component/swiper/Banner'
import Categorycom from './component/product/Category'
import Best from './component/product/BestProduct'
import Brand from './component/main/Brand'
import Sns from './component/main/Instagram'
import Apply from './component/main/Form'
import Footer from './component/layout/Footer'
import Quick from './component/layout/Quick'

// page
import BrandStory from './page/BrandStory'
import EventP from './page/EventP'
import CategoryP from './page/CategoryP'
import ReviewP from './page/ReviewP'
import MembershipP from './page/MembershipP'

// data
import db from './data/db.json'

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss'






const App: React.FC = () => {



  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path='/' element={
          <>
            <SwiperBanner swiperData={db.swiper.main}></SwiperBanner>
            <Categorycom categoryData={db.category} ></Categorycom>
            <Best bestData={db.products.best}></Best>
            <Brand brandData={db.brand.brandMain}></Brand>
            <Sns></Sns>
            <Apply></Apply>
            <Quick></Quick>
          </>
        }>
        </Route>

        {/* BRAND */}
        <Route path='/brand' element={<BrandStory />}></Route>

        {/* PRODUCT */}
        <Route path='/product/:cateid' element={<CategoryP />}></Route>

        {/* gnb page */}
        <Route path='/event' element={<EventP eventData={db.events} />}></Route>
        <Route path='/review' element={<ReviewP />}></Route>
        <Route path='/membership' element={<MembershipP />}></Route>

      </Routes >
      <Footer></Footer>

    </div>
  );
}

export default App;
