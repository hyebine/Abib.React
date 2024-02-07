import React from 'react'
import { Link } from 'react-router-dom'
import { Title } from '../../styled/common'
import '../../scss/Category.scss'

function Categorycom(props) {

  return (

    <div className='category'>
      <Title>CATEGORY</Title>

      <ul className='d-md-flex'>
        {
          props.categoryData.map((e, i) => (
            <li className='category_li flex-md-grow-1 position-relative' key={i}>
              <Link to={`/${e.href}`} className='h-100 d-block' style={{
                backgroundImage: `url(${e.bg})`
              }}></Link>
              <strong className='position-absolute'>{e.nm}</strong>
              <span></span>
            </li>

          ))
        }

      </ul>
    </div>
  )
}

export default Categorycom
