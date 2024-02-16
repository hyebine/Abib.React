import React from 'react'
import { MainH3, MainP } from '../styled/common'
import { Link } from 'react-router-dom'
import '../scss/review.scss'

function ReviewP() {
  return (
    <div className='review'>
      <div className='hdbg' style={{
        backgroundImage: `url(/img/review.jpg)`
      }}></div>

      <div className='title'>
        <MainH3>리뷰</MainH3>
        <MainP>아비브의 제품을 사용하신 고객들의 특별한 후기들을 확인해 보세요.</MainP>
      </div>

      <div className='wrapper'>
        <span className='line d-block'></span>
        <div className='container'>
          <ul className='d-flex justify-content-between flex-nowrap text-center'>
            <li>
              <p>베스트리뷰</p>
              <span>베스트 리뷰 선정 시 <strpng>10,000</strpng>P 적립</span>
            </li>
            <li>
              <p>포토리뷰</p>
              <span>제품사진과 텍스트 50자 이상의 리뷰 <strpng>1,000</strpng>P 적립</span>
            </li>
            <li>
              <p>일반리뷰</p>
              <span>텍스트 20자 이상의 리뷰 <strpng>500</strpng>P 적립</span>
            </li>
          </ul>
        </div>
        <span className='line d-block'></span>


        <p className='btn d-flex justify-content-center'>
          <Link to="/" className='d-block'>READ MORE</Link>
        </p>
      </div>
    </div>
  )
}

export default ReviewP
