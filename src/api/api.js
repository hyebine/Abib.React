import axios from 'axios';

export const serverapi = async (tablenminfo, data = null) => {

  const crudinfoarr = tablenminfo.split('/');
  const tablenm = crudinfoarr[0]; //테이블이름
  const pk = crudinfoarr[1] ? crudinfoarr[1] : null; // pk번호
  const crud = crudinfoarr[2] ? crudinfoarr[2] : null; //상태

  // 요청주소 /api/테이블이름/insert와 select제외한 curd 변수넣기
  /* 실행식은 아래와 같음
     1. 폼전송 post serverapi(테이블이름, 폼데이터)
     2. 글목록 get  serverapi(테이블이름)  
     3. 글보기 get  serverapi(테이블이름/id)   
     4. 글수정 post serverapi(테이블이름/id/m, 폼데이터) 
     5. 글삭제 post serverapi(테이블이름/id/d) 
  */
  try {

    if (data) {
      //글삽입 폼전송과 글 수정 모두 data가 있음 

      const response = await axios.post(`/api/${crudinfoarr}`, {
        headers: { "Content-Type": "multipart/form-data" },
        body: data
      });


      console.log("리액트 api 전달받음", response); // chat!! here this is full data
      return response;
      // check ok




    }

    else {
      //글보기, 목록
      if (crud === "d") {
        //글삭제  테이블이름/id/crud
        return await axios.post(`/api/${crudinfoarr}`,
          { headers: { "Content-Type": "application/json", } });
      } else {
        //글보기와 글목록
        return await axios.get(`/api/${crudinfoarr}`);
      }



    }

  } catch (error) {
    console.error("서버요청에 대한 응답에러:", error);
  }

}

