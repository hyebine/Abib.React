import React, { useEffect, useState } from 'react'
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import MainStyle from '../../scss/Banner.module.scss';


import { serverapi } from '../../api/api'


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';




function Banner() {

const [contentData, setContentData] = useState({}); // api 변수 
const apireseive = async (tn) => {
  try {

  const reqres = await serverapi(tn);


  setContentData((prevContent) => ({
    ...prevContent, // 이전의 값
    [tn] : [...reqres.data],
    
  }));

  } catch (error) {
    console.log(error);
  }
}


useEffect(()=>{
  apireseive('main'); 
}, [])

useEffect(()=>{
  // console.log(contentData)  
  //랜더링되는 함수 넣지않기

}, [contentData])
  return (


    <div className={`chbswiper ${MainStyle.banner}`} >

      <Swiper
        className='position-relative'
        modules={[EffectFade, Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        effect={'fade'}
        pagination={{
          clickable: true,
          el: ".pagination"
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}

      >
        {
           contentData['main'] && contentData['main'].map((el, i) =>
          (
            <SwiperSlide className={MainStyle.bannerSlide} key={el.id}>
              <div
                className={`${MainStyle.bgcontent} banner_${i}`} style={{
                  backgroundImage: `url(${el.bg})`

                }}>
                <div className={`${MainStyle.content}
                chb_ctt position-absolute container mx-auto text-center text-lg-start pt-5 pt-lg-0 `}>
                  <h3 className='mt-5 mt-lg-0'>
                    {el.title}
                  </h3>
                  <p>
                    {el.txt.split('|').map((e, index) =>
                      <React.Fragment key={index}>
                        {e}<br />
                      </React.Fragment>
                    )}
                  </p>
                  <p>{el.day}</p>
                  <Link to={`/${el.href}`}>
                    READ MORE
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>


      <div className={`${MainStyle.btn} container buttonright`}>
        <div className="pagination"></div>
      </div>

    </div>



  )
}

export default Banner;