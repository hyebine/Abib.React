import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Title } from '../../styled/common'

import { serverapi } from '../../api/api'


import '../../scss/category.scss'

function Categorycom() {

  const [commonData, setCommonData] = useState({}); // api 변수
  
  const apireseive = async (tn) => {
    try {
  
    const reqres = await serverapi(tn);
  

    setCommonData((prevContent) => ({
      ...prevContent, // 이전의 값
      [tn] : [...reqres.data],
      
    }));
  
    // console.log(commonData)
  
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    apireseive('category'); 
  }, [])
  
  useEffect(()=>{
    // console.log(commonData)  
    //랜더링되는 함수 넣지않기
  
  }, [commonData])

  

  return (

    <div className='category'>
      <Title>CATEGORY</Title>

      <ul className='d-md-flex'>
        {
          commonData['category'] && commonData['category'].map((e, i) => (
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