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
  const [toggle, setToggle] = useState(false); //모바일 메뉴 토글
  const [scrollHd, setScrollHd] = useState(false); //스크롤
  const [gnbData, setGnbData] = useState({}); // api 받은 메뉴 데이터


  // 모바일 2단메뉴 토글
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




  // api 받은 메뉴 데이터
  const apireseive = async (tn) => {
    try {

      const reqres = await serverapi(tn);


      setGnbData((prevContent) => ({
        ...prevContent, // 이전의 값
        [tn]: [...reqres.data],

      }));

      // console.log(gnbData)

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {

    //메뉴 데이터 받아오기
    apireseive('gnb');
    apireseive('mini');



    // 스크롤 이벤트 핸들러 등록 및 정리
    const handleScroll = () => {
      setScrollHd(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);


  //메뉴 데이터가 업데이트 될때마다 실행
  useEffect(() => {

    //랜더링되는 함수 넣지않기

    //이벤트 핸들러
    const submenuli = document.querySelectorAll(".submenuis");
    const gnb = document.querySelector("header")

    submenuli.forEach((ele) => {
      ele.addEventListener('mouseenter', () => {
        gnb.classList.add("showback")

      })
      ele.addEventListener('mouseleave', () => {
        gnb.classList.remove("showback")

      });
    });

  }, [gnbData])



  return (
    <header
      className={`fixed-top ${scrollHd ? 'scroll' : ''}`}
      style={{ backgroundColor: toggle ? '#F8F8F8' : '' }}
    >
      {/* 상단광고 */}
      <div className='adtop text-center py-1'>
        {gnbData['mini'] && gnbData['mini'][0] && (

          <Link to={`/${gnbData['mini'][0].href}`}>
            <span>{gnbData['mini'][0].txt}</span>
          </Link>

        )}
      </div>

      {/* 로고 및 메뉴 */}
      <div className={`hd container d-flex align-items-center justify-content-between `} >
        <h1 className='logo w-0 position-relative zup'><Link to="/" className='d-block'><img src="/img/logo.png" alt="로고이미지" className='d-block' /></Link></h1>

        {/* 모바일 메뉴 버튼 */}
        <button className={`gnb_btn position-relative d-lg-none ${toggle ? 'act' : ""} order-3`} onClick={() => { setToggle(!toggle); }}>
          <i></i>
          <i></i>
          <i></i>
        </button>

        {/* 네비게이션 메뉴 */}
        <div className='navi d-lg-flex ms-auto ms-lg-0 flex-lg-grow-1 justify-content-between'>

          <ul className={`gnb d-lg-flex flex-grow-1 justify-content-center ${toggle ? 'act' : ""}`}>
            {
              gnbData['gnb'] && gnbData['gnb'].map((el, idx) => {
                return (
                  el.parent_id === null &&
                  <li className={`menu_li position-relative ${gnbData['gnb'].filter((list) => list.parent_id === el.id).length > 0 ? 'submenuis' : ""}`} key={idx} onClick={() => SubMenu(idx)}>
                    <Link to={`/${el.href}`} className='menu_a'>
                      {el.nm}
                    </Link>
                    {
                      gnbData['gnb'].filter((list) => list.parent_id === el.id).length > 0 &&
                      <ul className={`sub_ul zup position-absolute`}>
                        {
                          gnbData['gnb'].filter((list) => list.parent_id === el.id).map((eel, iidx) => {
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

          {/* 화원가입/로그인/검색 버튼 */}
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