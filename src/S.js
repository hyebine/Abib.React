
import React, { useEffect, useState} from 'react';
import { useForm } from "react-hook-form"

import './App.css';
import axios from 'axios';

function App() {
  const [content, setContent] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const axiosfun = async (conecttypeinfo, data = null) =>{
    // 하나의 비동기함수를 다용도로 사용하기 위해서는 가변인자선언
    // post 전송방식, get 전송방식 모두 허용하는 비동기함수
    const crudinfoarr = conecttypeinfo.split('/');
    const tablenm = crudinfoarr[0];

   
    console.log(tablenm, conecttypeinfo)
    try {
      if (data) {
        // POST request
        await axios.post(`/${conecttypeinfo}`, data);

      } else {
        // GET request data가 null 기본값이 실행
        const selecttable = await axios.get(`/${conecttypeinfo}`);
        setContent((prevContent) => ({
          ...prevContent, // 이전의 값
          [tablenm]: [...selecttable.data], // 새롭게 추가된 값
        }));
       
      }
    } catch (err) {
      console.log(err);
    }
  } 

  useEffect(()=>{

    axiosfun('projectarr/6'); // 글보기
    axiosfun('markerData'); //글 목록
    axiosfun('preinterview')  //글 목록

    

  },[])

  const onSubmit = async (tn, data) => {
    console.log(data)
    await axiosfun(`${tn}/mode/write`, data);
    axiosfun(tn) 
  }

 

 
  return (
    <div className="App">
      <h3>목록</h3>
      {
        content['preinterview'] && content['preinterview'].map((e)=>{
         
          return(
            <p>{e.firp}</p>
          )

        })
      }
      {
        content['markerData'] && content['markerData'].map((e)=>{
          return(
            <p>{e.posi}</p>
          )

        })
      }
      <h3>글보기</h3>
      {
        content['projectarr'] && content['projectarr'].map((e)=>{
          return(
            <p>{e.h3}</p>
          )

        })
      }
      <h3>글쓰기</h3>
     
    <form onSubmit={handleSubmit(onSubmit)} >
    
      <input defaultValue="test" {...register("firp")} />
      <input {...register("secp", { required: true })} />
     
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
    <h3>하드코딩 글쓰기</h3>
     
    <form  className='myForm' onSubmit={handleSubmit(onSubmit)} >
                <div className='myFormDiv w-md-3'>
                    <h5 className='text-center mb-5'>모발&두피 상태 체크 후 응모하면 그에 맞는 상품을 드려요!</h5>
                    <div>
                        <div className='mb-4'>
                            <label className='d-block mb-2' htmlFor="username">이름</label>
                            <input
                                type="text"
                                name='u_name'
                                id='username'
                                className='w-100'
                                placeholder='홍길동'                             
                                value={formData.u_name} 
                                onChange={handleChange} 
                            />
                            
                        </div>
                        <div className='mb-4'>
                            <label className='d-block mb-2' htmlFor="userphone">휴대전화번호</label>
                            <input
                                type="number"
                                name='u_phone'
                                id='userphone'
                                className='w-100'
                                placeholder='01012346789'
                                value={formData.u_phone} 
                                onChange={handleChange} 
                              
                               
                            />
                           
                        </div>
                        <div className='mb-4'>
                            <label className='d-block mb-2' htmlFor="useremail">이메일</label>
                            <input
                                type="text"
                                name='u_email'
                                id='useremail'
                                className='w-100'
                                placeholder='aaa@naver.com'
                                
                                value={formData.u_email}
                                onChange={handleChange} 
                            />
                          
                        </div>
                    </div>

                    <div className='d-flex justify-content-left align-items-center'>
                        <div className='d-flex justify-content-left align-items-center' style={{ marginRight: "20px" }}>
                            <input
                                type="checkbox"
                                name="information"
                                id="information"
                                // checked={Essential}
                                // onClick={() => {
                                //     setEssential(!Essential)
                                // }}
                            />
                            <label htmlFor="information">개인정보수집동의</label>
                        </div>
                        <div className='d-flex justify-content-left align-items-center'>
                            <input
                                type="checkbox"
                                name="marketing"
                                id="marketing"
                                value={formData.marketing}
                                onChange={handleChange} 
                            />
                            <label htmlFor="marketing">마케팅수신정보동의 </label>
                            <span className='choice'>(선택)</span>
                        </div>
                    </div>

                    <button
                        className='w-100 mt-4'
                        type="submit"                       
                    >신청하기</button>
                </div>
            </form>


    </div>
  );
}

export default App;