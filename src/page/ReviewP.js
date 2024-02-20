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
        <div className='line'></div>
        <div className='container'>
          <div className='cttBox d-flex justify-content-between text-center py-3'>
            <div className='content'>
              <p>베스트리뷰</p>
              <span>베스트 리뷰 선정 시 <strong>10,000</strong>P 적립</span>
            </div>
            <div className='content'>
              <p>포토리뷰</p>
              <span>제품사진과 텍스트 50자 이상의 리뷰 <strong>1,000</strong>P 적립</span>
            </div>
            <div className='content'>
              <p>일반리뷰</p>
              <span>텍스트 20자 이상의 리뷰 <strong>500</strong>P 적립</span>
            </div>
          </div>
        </div>
        <div className='line'></div>

        <div className='d-flex justify-content-center'>
          <div className='btn row mx-0'>
            <Link to="/" className='btnA d-block'>READ MORE</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewP
