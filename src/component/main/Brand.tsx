import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import { serverapi } from '../../api/api'



import '../../scss/brand.scss'

function Brand(props) {

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
    apireseive('brandMain'); 
  }, [])
  
  useEffect(()=>{
    console.log(gnbdataarr)  
    //랜더링되는 함수 넣지않기
  
  }, [gnbdataarr])

  return (
    <div className='story'>
      <div>
        <div className='bg'
          style={{
            backgroundImage: `url(${gnbdataarr['brandMain'] && gnbdataarr['brandMain'][0].bg})`
          }} >
          <div className='d-flex justify-content-center text-center align-items-center h-100'>
            <div className='content'>
              <h3>{ gnbdataarr['brandMain'] && gnbdataarr['brandMain'][0].title}</h3>
              <p className='en'>{gnbdataarr['brandMain'] && gnbdataarr['brandMain'][0].txt}</p>
              <p className='text'>
                {
                  gnbdataarr['brandMain'] && gnbdataarr['brandMain'][0].content.split('|').map((e, i) =>
                    <React.Fragment key={i}>
                      {e} <br />
                    </React.Fragment>
                  )
                }
              </p>
              <Link to={`/${gnbdataarr['brandMain'] && gnbdataarr['brandMain'][0].href}`}>READ MORE</Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Brand