import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import '../../scss/footer.scss'



function Footer() {
  return (
    <div className='ft'>
      <div className="wrapper d-flex container justify-content-between align-items-center py-2">
        <div className='content'>
          <div className='logo py-3'>
            <Link to="/"><img src="/img/f_logo.png" alt="하단로고" /></Link>
          </div>
          <ul className='icons d-flex justify-content-between'>
            <li><a href="https://www.instagram.com/abib.official/" alt="인스타그램"><FaInstagram /></a></li>
            <li><a href="https://www.facebook.com/abib.cosmetics/" alt="페이스북"><FaFacebook /></a></li>
            <li><a href="https://www.youtube.com/@abib6165" alt="유튜브"><FaYoutube /></a></li>
          </ul>
        </div>

        <div className='ftConsult content d-none d-lg-block'>
          <h3>제품 상담</h3>
          <p>070-4131-5906</p>
          <p>abib@fourco.co.kr</p>
        </div>

        <div className='ftCompany content d-none d-lg-block'>
          <h3>회사 정보</h3>
          <ul className='ftInfo'>
            <li><span>대표자.</span> 김민우</li>
            <li><span>통신판매업신고.</span> 2017-서울송파-0651</li>
            <li><span>사업등록번호.</span> 232-88-00610 [사업자정보확인]</li>
            <li><span>주소.</span> (주)포컴퍼니서울시 송파구 백제고분로9길 14, 301(잠실동)</li>
          </ul>
        </div>

        <div className='ftLink content d-none d-lg-block'>
          <h3>고객 서비스</h3>
          <ul>
            <li><Link to="/">문의</Link></li>
            <li><Link to="/">자주 묻는 질문</Link></li>
            <li><Link to="/">고객 센터</Link></li>
            <li><Link to="/">매장 정보</Link></li>
            <li><Link to="/">이용약관</Link></li>
            <li><Link to="/"><span>개인정보처리방침</span></Link></li>
          </ul>
        </div>
      </div>

      <div className='ftCopy text-center py-3'>
        The digital platform for <b>ABIB</b> CO.Manual for Freedom, Research and Creativity
      </div>
    </div>
  )
}

export default Footer
