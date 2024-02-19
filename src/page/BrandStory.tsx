import React, { useEffect } from 'react'
import '../scss/brandstory.scss'
import { BsArrowDown } from "react-icons/bs";
import AOS from 'aos';
import "aos/dist/aos.css";

function BrandStory() {



  useEffect(() => {
    AOS.init();
  }, [])



  return (

    <div>
      <div className={`hdBg d-flex align-items-center justify-content-center text-center`} style={{ backgroundImage: `url(/img/brandbg.jpg)` }}>
        <div className='text '>
          <p data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000">
            Meet with the first moon.<br />
            Renew yourself as you meet Abib.
          </p>
          <span data-aos="fade-up" data-aos-duration="1500">
            <BsArrowDown size={25} />
          </span>
        </div>
      </div>

      <div className='contnet'>
        <div className='title text-center'>
          <h3 data-aos="fade-up"
            data-aos-duration="2500">
            첫번째 달을 만나다.<br />
            아비브를 만나는 순간 시작되는 새로운 당신.
          </h3>
          <p data-aos="fade-up"
            data-aos-duration="2000">
            '첫번째 달'이라는 뜻의 아비브는, 미의 순환과정의 출발점에서 가장 완벽하고<br />
            순수한 제품을 완성 시키고자 합니다.<br />
            피부 본연의 무결점 상태로 돌아가도록 도와주는 것이 우리 연구진의 목표입니다.
          </p>
        </div>

        <div className='coverBg' style={{ backgroundImage: `url(/img/bg.jpg)` }} data-aos="fade-up" data-aos-duration="1000"></div>

        <div className='brandInfo01' style={{ backgroundImage: `url(/img/bg2.jpg)` }} data-aos="fade-left" data-aos-duration="1000">
          <div className='container'>
            <div className='brandOnly col-7'>
              <h3>‘The only way to the perfection is endless experiments.’</h3>
              <span className='line01'></span>
              <div className='brandTxt d-flex flex-column flex-wrap align-content-end'>
                <h4>'완벽으로 향하는 유일한 길은 끊임없는 실험이다'</h4>
                <ul>
                  <li>1. 피부 본연의 자생력을 향상 시킨다.</li>
                  <li>2. 피부 유해 물질을 분별하여 차단하고 제거한다.</li>
                  <li>3. 피부 노화 속도를 늦춘다.</li>
                  <li>4. 각질세포의 분화유도를 통해 외부 자극에 대한 방어력을 증가시킨다.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='brandInfo02' style={{ backgroundImage: `url(/img/bg3.jpg)` }} data-aos="fade-right" data-aos-duration="1000">
          <div className='container'>
            <div className='brandOnly col-7 ms-auto'>
              <h3>Abib’s packaging always put priority to the product’s stability.</h3>
              <span className='line02'></span>
              <div className='brandTxt d-flex flex-column flex-wrap align-content-start'>
                <h4>아비브의 패키징은 제품의 안정성을 최우선으로 고려합니다.</h4>
                <ul>
                  <li>1. 제형의 화학적 반응에 대한 충분한 실험을 거쳐 용기 소재를 선택합니다.</li>
                  <li>
                    2. 다양한 테스트를 통해 외부 환경(공기,이물질 등)으로 부터 가장 이상적으로<br />
                    제형을 보호할 수 있는 용기의 형태를 결정합니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='abibBg d-flex flex-column justify-content-center align-items-center' style={{ backgroundImage: `url(/img/bg4.jpg)` }} >
          <div className='content' data-aos="fade-up" data-aos-duration="1000">
            <p>
              "완벽함이란 더 이상 더할 것이 없을 때가 아니라 더 이상 버릴 것이 없을 때 완성된다."
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BrandStory
