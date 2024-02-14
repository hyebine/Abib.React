import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import '../../scss/quick.scss'

function Quick() {
  return (
    <div className='quickBtn'>

      <FaArrowUp className='icon d-flex' size={30} />
      <span>상단이동</span>

    </div>
  )
}

export default Quick