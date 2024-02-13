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
      <div>
        <MainH3>세트</MainH3>
      </div>

      <div className='wrapper'>
        <div className='container '>
          <ul className='d-flex'>
            {
              props.setData.map((e, i) => (
                <li key={i}>

                  <Link to={`/${e.href}`} style={{ backgroundImage: `url(${e.bg})` }}></Link>
                  <p>{e.nm}</p>
                  <p>{e.en}</p>
                  <span>{e.txt}</span>
                  <p><Link to={`/`}>READ MORE</Link></p>

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
