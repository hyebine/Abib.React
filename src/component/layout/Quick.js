import React, { useState, useEffect } from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import '../../scss/quick.scss';


function Quick() {

  const [showBtn, setShowBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  };

  useEffect(() => {

    const handleScroll = () => {
      setShowBtn(window.scrollY > 80);
    };


    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)

    }
  }, []);



  return (
    <>
      {showBtn &&
        <button className='quickBtn' onClick={scrollToTop} >
          <IoIosArrowRoundUp className='icon' />
          <span>상단이동</span>
        </button>
      }
    </>
  );

}

export default Quick;
