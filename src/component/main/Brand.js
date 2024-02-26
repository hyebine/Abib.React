import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import { serverapi } from '../../api/api'



import '../../scss/brand.scss'

function Brand() {

  const [brandData, setBrandData] = useState({}); // api 변수
  
  const apireseive = async (tn) => {
    try {
  
    const reqres = await serverapi(tn);
  
  
    setBrandData((prevContent) => ({
      ...prevContent, // 이전의 값
      [tn] : [...reqres.data],
      
    }));
  
    // console.log(brandData)
  
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    apireseive('brandMain'); 
  }, [])
  
  useEffect(()=>{
    // console.log(brandData)  
    //랜더링되는 함수 넣지않기
  
  }, [brandData])

  return (
    <div className='story'>
      <div>
        <div className='bg'
          style={{
            backgroundImage: `url(${brandData['brandMain'] && brandData['brandMain'][0].bg})`
          }} >
          <div className='d-flex justify-content-center text-center align-items-center h-100'>
            <div className='content'>
              <h3>{ brandData['brandMain'] && brandData['brandMain'][0].title}</h3>
              <p className='en'>{brandData['brandMain'] && brandData['brandMain'][0].txt}</p>
              <p className='text'>
                {
                  brandData['brandMain'] && brandData['brandMain'][0].content.split('|').map((e, i) =>
                    <React.Fragment key={i}>
                      {e} <br />
                    </React.Fragment>
                  )
                }
              </p>
              <Link to={`/${brandData['brandMain'] && brandData['brandMain'][0].href}`}>READ MORE</Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Brand