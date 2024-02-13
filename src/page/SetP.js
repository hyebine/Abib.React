import React from 'react'
import { MainH3 } from '../styled/common'
import { Link } from 'react-router-dom'
import '../scss/set.scss'

function SetP(props) {
  return (
    <div className='set'>

      <div className='hdbg' style={{
        backgroundImage: `url(/img/setbg.jpg)`
      }}>
      </div>
      <div className='mt-5'>
        <MainH3>세트</MainH3>
      </div>

      <div className='wrapper'>
        <div className='container'>
          <ul className='row mx-0'>
            {
              props.setData.map((e, i) => (
                <li className='setLi col-6 col-lg-4 justify-content-between' key={i}>

                  <Link to={`/${e.href}`} className='bg d-block' style={{ backgroundImage: `url(${e.bg})` }}></Link>

                  <p>{e.nm}</p>
                  <p>{e.en}</p>
                  <span className='d-block'>{e.txt}</span>

                  <p className='btn p-0'>
                    <Link to={`/${e.href}`}  className='d-block'>READ MORE</Link>
                  </p>

                </li>
              ))
            }
          </ul>
        </div>
      </div>

    </div>
  )
}

export default SetP
