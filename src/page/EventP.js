import React, { useEffect, useState } from 'react'
import { MainH3 } from '../styled/common'
import { Link } from 'react-router-dom'

import { serverapi } from '../api/api'

import '../scss/event.scss'

function EventP() {

  const [gnbdataarr, setgnbdata] = useState({}); // api 변수

  const apireseive = async (tn) => {
    try {

      const reqres = await serverapi(tn);


      setgnbdata((prevContent) => ({
        ...prevContent, // 이전의 값
        [tn]: [...reqres.data],

      }));

      console.log(gnbdataarr)

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    apireseive('events');
  }, [])

  useEffect(() => {
    console.log(gnbdataarr)
    //랜더링되는 함수 넣지않기

  }, [gnbdataarr])





  return (
    <div className='event'>
      <div>
        <MainH3>이벤트</MainH3>
        <p className='subtxt text-center mt-3'>아비브에서 진행되는 특별한 이벤트에 관련된 새로운 소식을 확인해 보세요.</p>
      </div>

      <div className='wrapper'>
        <div className='container'>
          <ul className='row mx-0'>
            {gnbdataarr['events'] && gnbdataarr['events'].map((e, i) => (
              <li className='eventLi col-12 col-lg-6 justify-content-between' key={`event${i}`}>
                <Link className='bg d-block' to={`/${e.href}`}
                  style={{
                    backgroundImage: `url(${e.bg})`
                  }}>
                </Link>
                <p className='title text-center'>{e.title}</p>
              </li>
            ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EventP
