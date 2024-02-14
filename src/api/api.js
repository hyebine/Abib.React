import { useState } from 'react';
import axios from 'axios';




export const Serverapi = async (tablenminfo, data = null) => {

  const [content, setContent] = useState({});

  const crudinfoarr = tablenminfo.split('/');
  const tablenm = crudinfoarr[0]; //테이블이름

  try {


    if (data) {
      //글쓰기, 회원가입, 폼전송
      const res = await axios.post(`/api/${tablenm}`, { headers: { "Content-Type": "application/json", }, body: data });

      console.log(res) // 확인메세지만 들어오면  랜더링걸어서 확인했다라는 메세지만 띄우면 됨

      return res;


    } else {
      //글보기, 목록
      const res = await axios.get(`/api/${tablenm}`);
      setContent((prevContent) => ({
        ...prevContent, // 이전의 값
        [tablenm]: [...res.data], // 새롭게 추가된 값
      })).then(
        () => {
          return content;
        }
      );

    }

  } catch (error) {
    console.error("서버요청에 대한 응답에러:", error);
  }


}