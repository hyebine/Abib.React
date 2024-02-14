import React from 'react'
import { MainH3 } from '../styled/common'
import { Link } from 'react-router-dom'
import '../scss/event.scss'

function EventP() {
  return (
    <div className='event'>
      <div>
        <MainH3>이벤트</MainH3>
        <p className='subtxt text-center mt-3'>아비브에서 진행되는 특별한 이벤트에 관련된 새로운 소식을 확인해 보세요.</p>
      </div>

      <div className='wrapper'>
        <div className='container'>
          <ul>
            <li>
              <Link to={`/`}>
                <img src="" alt="이벤트이미지" className='img-fluid' />
              </Link>
              <p>제목</p>
              <span>날짜</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EventP
