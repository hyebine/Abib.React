import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsPerson, BsSearch } from "react-icons/bs";
// import { serverapi } from '../../api/api'

import '../../scss/header.scss'


function Header() {


  const [toggle, setToggle] = useState(false);
  const [scrollHd, setScrollHd] = useState(false);
  // const [gnbdataarr, setgnbdata] = useState({}); // api 변수


  // 모바일 2단메뉴

  const SubMenu = (idx) => {
    const subUls = document.querySelectorAll(".sub_ul");

    subUls.forEach((ele, eidx) => {
      if (eidx === idx) {
        ele.classList.toggle("act");
      } else {
        ele.classList.remove("act")
      }

    })
  };



  const handleScroll = () => {
    setScrollHd(window.scrollY > 80);
  };


  // const apireseive = async () => {

  //   const gnbres = await serverapi('gnb');
  //   const minires = await serverapi('mini');

  //   setgnbdata((prevContent) => ({
  //     ...prevContent, // 이전의 값
  //     mini: [...minires.data],
  //     gnb: [...gnbres.data], // 새롭게 추가된 값
  //   }));



  // }


  useEffect(() => {

    //api 실행


    // apireseive();

    // 2단메뉴
    const submenuli = document.querySelectorAll(".submenuis");
    const gnb = document.querySelector(".navi .gnb")

    submenuli.forEach((ele) => {
      ele.addEventListener('mouseenter', () => {
        gnb.classList.add("showback")
      })
      ele.addEventListener('mouseleave', () => {
        gnb.classList.remove("showback")
      });
    });

    // 스크롤 이벤트
    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);







  return (
    <header
      className={`fixed-top ${scrollHd ? 'scroll' : ''}`}
      style={{ backgroundColor: toggle ? '#F8F8F8' : '' }}
    >

      <div className='adtop text-center py-1'>
        {/* <Link to={`/${gnbdataarr['mini'][0].href && gnbdataarr['mini'][0].href}`}>
          <span>{gnbdataarr['mini'][0].txt && gnbdataarr['mini'][0].txt}</span>
        </Link> */}
      </div>

      <div className={`hd container d-flex align-items-center justify-content-between `} >
        <h1 className='logo w-0 position-relative zup'><Link to="/" className='d-block'><img src="/img/logo.png" alt="로고이미지" className='d-block' /></Link></h1>

        <button className={`gnb_btn position-relative d-lg-none ${toggle && 'act'} order-3`} onClick={() => { setToggle(!toggle); }}>
          <i></i>
          <i></i>
          <i></i>
        </button>

        <div className='navi d-lg-flex ms-auto ms-lg-0 flex-lg-grow-1 justify-content-between'>

          <ul className={`gnb d-lg-flex flex-grow-1 justify-content-center ${toggle && 'act'} `}>
            {/* {
              gnbdataarr['gnb'] && gnbdataarr['gnb'].map((el, idx) => {
                return (
                  <li className={`menu_li position-relative 
                  ${el.sub.length > 0 ? 'submenuis' : ""}`} key={idx}
                    onClick={() => SubMenu(idx)}
                  >
                    <Link to={`/${el.href}`} className='menu_a'>
                      {el.nm}
                    </Link>
                    {
                      el.sub.length > 0 &&
                      <ul className={`sub_ul zup position-absolute `}>
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
                    }
                  </li>
                )

              })
            } */}
          </ul>

          <ul className='box d-flex w-0 align-items-center justify-content-end'>
            <li className='pe-3'>
              <Link to="/">
                <span className='d-none d-lg-block'>JOIN</span>
              </Link>
            </li>
            <li className='pe-3'>
              <Link to="/">
                <BsPerson size={24} className='d-block d-lg-none' />
                <span className='d-none d-lg-block'>LOGIN</span>
              </Link>
            </li>
            <li className='pe-3 pe-lg-0'>
              <Link to="/">
                <BsSearch size={24} className='d-block d-lg-none' />
                <span className='d-none d-lg-block'>SEARCH</span>
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </header >
  )
}

export default Header;
