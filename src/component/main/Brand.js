import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import { serverapi } from '../../api/api'



import '../../scss/brand.scss'

function Brand() {

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
    apireseive('brandMain'); 
  }, [])
  
  useEffect(()=>{
    // console.log(commonData)  
    //랜더링되는 함수 넣지않기
  
  }, [commonData])

  return (
    <div className='story'>
      <div>
        <div className='bg'
          style={{
            backgroundImage: `url(${commonData['brandMain'] && commonData['brandMain'][0].bg})`
          }} >
          <div className='d-flex justify-content-center text-center align-items-center h-100'>
            <div className='content'>
              <h3>{ commonData['brandMain'] && commonData['brandMain'][0].title}</h3>
              <p className='en'>{commonData['brandMain'] && commonData['brandMain'][0].txt}</p>
              <p className='text'>
                {
                  commonData['brandMain'] && commonData['brandMain'][0].content.split('|').map((e, i) =>
                    <React.Fragment key={i}>
                      {e} <br />
                    </React.Fragment>
                  )
                }
              </p>
              <Link to={`/${commonData['brandMain'] && commonData['brandMain'][0].href}`}>READ MORE</Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Brand