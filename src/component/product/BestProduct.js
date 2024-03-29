import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Title } from '../../styled/common'


import { serverapi } from '../../api/api'


import '../../scss/best.scss'

function BestProduct() {
  const [bestData, setBestData] = useState({}); // api 변수
  
  const apireseive = async (tn) => {
    try {
  
    const reqres = await serverapi(tn);
  
  
    setBestData((prevContent) => ({
      ...prevContent, // 이전의 값
      [tn] : [...reqres.data],
      
    }));
  
    // console.log(bestData)
  
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    apireseive('best'); 
  }, [])
  
  useEffect(()=>{
    // console.log(bestData)  
    //랜더링되는 함수 넣지않기
  
  }, [bestData])

  return (
    <div className='best'>
      <Title>BEST PRODUCTS</Title>
      <h3 className='text-center'>제품이 내포하는 가장 고요한 순수성에 충실한 아비브의 베스트 제품들을 확인해 보세요.</h3>
      <ul className='product container d-md-flex px-4'>
        {
          bestData['best'] && bestData['best'].map((e, i) => (
            <li className='product_li align-items-center justify-content-lg-between justify-content-center text-center' key={i}>
              <Link to={`/${e.href}`}
                className='change_bg d-block'
                style={{
                  backgroundImage: `url(${e.bg})`
                }}>
                <span className='d-block h-100'
                  style={{
                    backgroundImage: `url(${e.bg2})`
                  }}>
                </span>
              </Link>
              <p className='mt-4'>{e.title}</p>
              <span>{e.txt}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default BestProduct