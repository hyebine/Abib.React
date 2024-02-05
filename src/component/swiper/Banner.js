import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainStyle from '../../scss/Banner.module.scss';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Banner({ className }) {

  return (
    <>
      <div className={`${MainStyle.banner} ${className}`} >

        <Swiper
          className='position-relative h-100'
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".pagination"
          }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}

        >
          {
            [
              {
                "id": "1",
                "title": "선착순 구매 인증 이벤트",
                "txt": "매주 구매 인증을 해주시는 고객님들께 | 선착순 50분께 ‘어성초 토너’를 증정",
                "day": "2024.01.01 ~ 01.26",
                "bg": "/img/banner1.jpg",
                "href": "#"
              },
              {
                "id": "2",
                "title": "포토리뷰 이벤트",
                "txt": "프로모션 기간 동안 구매시, | 1월 미니멀 기프트를 증정",
                "day": "2024.01.01 ~ 01.26",
                "bg": "/img/banner2.jpg",
                "href": "#"
              },
              {
                "id": "3",
                "title": "이벤트 30% OFF",
                "txt": "탄력 & 영양케어 제품 최대 30% 할인 이벤트",
                "day": "2024.01.01 ~ 01.26",
                "bg": "/img/banner3.jpg",
                "href": "#"
              },
              {
                "id": "4",
                "title": "Promotion Gift",
                "txt": "프로모션 기간 동안 구매시, | 1월 미니멀 기프트를 증정",
                "day": "2024.01.01 ~ 01.26",
                "bg": "/img/banner4.jpg",
                "href": "#"
              }
            ].map((el, idx) => {
              return (
                <SwiperSlide className={MainStyle.bannerSlide} key={idx}>
                  <div className={MainStyle.bgcontent} style={{
                    backgroundImage: `url(${el.bg}) `

                  }}>
                    <div className={`${MainStyle.content} position-absolute container mx-auto text-center text-lg-start pt-5 pt-lg-0 `}>
                      <h2 className='mt-5 mt-lg-0'>{el.title}

                      </h2>

                      <p>{el.txt}</p>
                      <a href="#none" className='d-md-inline-block border-white border py-2 px-5 text-white'>
                        READ MORE
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
          <div className={`${MainStyle.btn} position-absolute container d-flex`}>
            <div className="pagination"></div>

          </div>

        </Swiper>

      </div>

    </>
  )
}

export default Banner;