import React from 'react'
import { MainH3, MainP } from '../styled/common'
import { Link } from 'react-router-dom'

function MembershipP() {
  return (
    <div className='membership'>
      <div className='hdbg' style={{
        backgroundImage: `url()`
      }}></div>

      <div className='title'>
        <MainH3>멤버십</MainH3>
        <MainP>멤버십 등급 및 쿠폰은 1개월 단위(매월 1일) 업데이트 됩니다.</MainP>
      </div>

      <div className='wrapper'>
        <div className='container'>
          <div className='cttBox'>
            <div className='content'>
              <img src="" alt="쿠폰" />
              <p>생일쿠폰</p>
              <span><strong>5,000</strong>원 쿠폰</span>
            </div>
            <div className='content'>
              <img src="" alt="쿠폰" />
              <p>카카오톡 플러스 친구</p>
              <span><strong>5,000</strong>원 쿠폰</span>
            </div>
            <div className='content'>
              <img src="" alt="쿠폰" />
              <p>리뷰적립금</p>
              <span>텍스트 <strong>500</strong>포인트</span>
              <span>포토 <strong>1,000</strong>포인트</span>
            </div>

          </div>
        </div>

        <div className='btn d-flex justify-content-center'>
          <Link to="/" className='btnA d-block'>READ MORE</Link>
        </div>
      </div>
    </div>
  )
}

export default MembershipP
