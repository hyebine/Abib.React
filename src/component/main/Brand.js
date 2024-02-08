import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/brand.scss'

function Brand(props) {

  return (
    <div className='story'>
      <div>
        <div className='bg'
          style={{
            backgroundImage: `url(${props.brandData[0].bg})`
          }} >
          <div className='d-flex justify-content-center text-center align-items-center h-100'>
            <div className='content'>
              <h3>{props.brandData[0].title}</h3>
              <p className='en'>{props.brandData[0].txt}</p>
              <p className='text'>
                {
                  props.brandData[0].content.split('|').map((e, i) =>
                    <React.Fragment key={i}>
                      {e} <br />
                    </React.Fragment>
                  )
                }
              </p>
              <Link to={`/${props.brandData[0].href}`}>READ MORE</Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Brand
