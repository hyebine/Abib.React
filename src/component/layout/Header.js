import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../scss/header.scss'


function Header(props) {

  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <div>
        <Link to={`/${props.datasrc.mini[0].href}`}>
          <span>{props.datasrc.mini[0].txt}</span>
        </Link>
      </div>
      <h1><Link to="/"></Link></h1>
      <button className={`gnb_btn ${toggle && 'act'}`} onClick={() => { setToggle(!toggle) }}>
        <i></i>
        <i></i>
        <i></i>
      </button>
      <div>

        <ul>
          {
            props.datasrc.navi.gnb.map((el, idx) => {
              return (
                <li key={idx}>
                  <Link to={`/${el.href}`}>
                  </Link>{el.nm}
                  <ul>
                    {
                      el.sub.map((eel, iidx) => {
                        return (
                          <li key={iidx}>
                            <Link to={`${eel.href}`}>{eel.nm}</Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </li>
              )

            })
          }
        </ul>

        <ul>
          <li><Link to="/"></Link></li>
          <li><Link to="/"></Link></li>
          <li><Link to="/"></Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
