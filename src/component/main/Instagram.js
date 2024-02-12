import React from 'react'
import '../../scss/instagram.scss'
import { GoHeartFill } from "react-icons/go";

function Instagram() {
  return (
    <div className='instagram container d-flex justify-content-center justify-content-lg-between align-items-center'>

      <div className='d-lg-flex justify-content-between w-100'>

        <div className='snsImg col-lg-8 d-flex align-items-center'>
          <div className='col-md-5 pe-0 position-relative'>
            <span className='position-relative'>
              <img src="/img/IMG0.jpg" alt="사진" className='d-block img-fluid' />
              <GoHeartFill className="icon position-absolute" />
              </span>
            <span className='position-relative'>
              <img src="/img/IMG1.jpg" alt="사진" className='d-block img-fluid' />
              <GoHeartFill className='icon position-absolute' />
              </span>
          </div>

          <div className='col-md-6 ps-1 position-relative'>
            <span className='position-relative'>
              <img src="/img/IMG2.jpg" alt="사진" className='img-fluid' />
              <GoHeartFill className='icon position-absolute' />
              </span>
          </div>
        </div>

        <div className='col-lg-4 d-flex justify-content-center flex-column'>
          <div className='content'>
            <h3>INSTAGRAM</h3>
            <p>
              아비브 디자인 연구소는 주관을 배제함으로써<br />
              사물의 고유한 특성을 제시하고자 했던<br />
              미니멀리스트의 정신을 존중합니다.
            </p>
            <a href='https://www.instagram.com/abib.official/'>VISIT INSTAGRAM</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Instagram
