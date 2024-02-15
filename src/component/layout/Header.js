import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsPerson, BsSearch } from "react-icons/bs";
//비동기요청 모듈
  /* 실행식은 아래와 같음
     1. 폼전송 post serverapi(테이블이름, 폼데이터)
     2. 글목록 get serverapi(테이블이름)  
     3. 글보기 get serverapi(테이블이름/id)   
     4. 글수정 post serverapi(테이블이름/id/m, 폼데이터) 
     5. 글삭제 post serverapi(테이블이름/id/d) 
  */
import { serverapi } from '../../api/api'

import '../../scss/header.scss'

function Header() {
  const [toggle, setToggle] = useState(false);
  const [scrollHd, setScrollHd] = useState(false);
  const [gnbdataarr, setgnbdata] = useState({}); // api 변수


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


  useEffect(() => {

    apireseive('gnb');
    apireseive('mini');
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

  useEffect(()=>{
  console.log(gnbdataarr)  
  //랜더링되는 함수 넣지않기

  }, [gnbdataarr])



  return (
    <header
      className={`fixed-top ${scrollHd ? 'scroll' : ''}`}
      style={{ backgroundColor: toggle ? '#F8F8F8' : '' }}
    >

      <div className='adtop text-center py-1'>
      {gnbdataarr['mini'] && gnbdataarr['mini'][0] && (

                <Link to={`/${gnbdataarr['mini'][0].href}`}>
                    <span>{gnbdataarr['mini'][0].txt}</span>
                </Link>

        )}
      </div>

      <div className={`hd container d-flex align-items-center justify-content-between `} >
        <h1 className='logo w-0 position-relative zup'><Link to="/" className='d-block'><img src="/img/logo.png" alt="로고이미지" className='d-block' /></Link></h1>

        <button className={`gnb_btn position-relative d-lg-none ${toggle && 'act'} order-3`} onClick={() => { setToggle(!toggle); }}>
          <i></i>
          <i></i>
          <i></i>
        </button>

        <div className='navi d-lg-flex ms-auto ms-lg-0 flex-lg-grow-1 justify-content-between'>

        <ul className={`gnb d-lg-flex flex-grow-1 justify-content-center ${toggle && 'act'}`}>
  {
    gnbdataarr['gnb'] && gnbdataarr['gnb'].map((el, idx) => {
      return (
        el.parent_id === null &&
        <li className={`menu_li position-relative ${gnbdataarr['gnb'].filter((list)=> list.parent_id === el.id ).length > 0 ? 'submenuis' : ""}`} key={idx} onClick={() => SubMenu(idx)}>
          <Link to={`/${el.href}`} className='menu_a'>
            {el.nm}
          </Link>
          {
           gnbdataarr['gnb'].filter((list)=> list.parent_id === el.id ).length > 0 &&
            <ul className={`sub_ul zup position-absolute`}>
              {
                gnbdataarr['gnb'].filter((list)=> list.parent_id === el.id ).map((eel, iidx) => { // This line needs correction
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
  }
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