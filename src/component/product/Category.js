import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Title } from '../../styled/common'

import { serverapi } from '../../api/api'


import '../../scss/category.scss'

function Categorycom(props) {

  const [gnbdataarr, setgnbdata] = useState({}); // api 변수
  
  const apireseive = async (tn) => {
    try {
  
    const reqres = await serverapi(tn);
  

    setgnbdata((prevContent) => ({
      ...prevContent, // 이전의 값
      [tn] : [...reqres.data],
      
    }));
  
    console.log(gnbdataarr)
  
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    apireseive('category'); 
  }, [])
  
  useEffect(()=>{
    console.log(gnbdataarr)  
    //랜더링되는 함수 넣지않기
  
  }, [gnbdataarr])

  

  return (

    <div className='category'>
      <Title>CATEGORY</Title>

      <ul className='d-md-flex'>
        {
          gnbdataarr['category'] && gnbdataarr['category'].map((e, i) => (
            <li className='category_li flex-md-grow-1 position-relative' key={i}>
              <Link to={`/${e.href}`} className='h-100 d-block' style={{
                backgroundImage: `url(${e.bg})`
              }}></Link>
              <strong className='position-absolute'>{e.nm}</strong>
            </li>

          ))
        }

      </ul>
    </div>
  )
}

export default Categorycom