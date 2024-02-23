import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import '../../scss/abibForm.scss'
import { serverapi } from '../../api/api'


function Form() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [gnbdataarr, setgnbdata] = useState(false);


    // post
    const onSubmit = async (data, e) => {

        const FormPost = await serverapi("apply", data)
        console.log(FormPost)

        setgnbdata(!gnbdataarr)


        e.target.reset();  //작성한 글 신청하고 사라지기
    }


    return (
        <>
            {
                gnbdataarr ? <div className='d-flex justify-content-center bg-light p-5'>
                  🤍🖤  빠른답변 해드리겠습니다 감사합니다. 🤍🖤
                  
                </div> :


                    <div className='apply d-flex'>
                        <div className='wrapper container text-center'>
                            <div>
                                <h2>상담예약</h2>
                                <p>고객님의 기본정보를 입력해 주시면 
                                    <strong>Abib</strong>가 연락드리겠습니다.
                                </p>
                                <div className='col-lg-6 col-md-10 mx-auto'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='content d-flex justify-content-between align-items-center mt-5 position-relative'>
                                            <label htmlFor="name">이름</label>
                                            <input type='text' placeholder='이름을 입력하세요.' {...register("name", { required: true })} />
                                            {errors.name && <span className='position-absolute'>이름을 입력하세요.</span>}
                                        </div>

                                        <div className='content d-flex justify-content-between align-items-center position-relative' >
                                            <label htmlFor="phone">연락처</label>
                                            <input type='number' placeholder='연락처를 입력하세요.' {...register("phone", { required: true })} />
                                            {errors.phone && <span className='position-absolute'>연락처를 입력하세요.</span>}
                                        </div>

                                        <div className='content d-flex justify-content-between align-items-center position-relative'>
                                            <label htmlFor="question">문의사항</label>
                                            <textarea type='question' placeholder='내용을 입력해주세요.' {...register("question", { required: true })} />
                                            {errors.question && <span className='position-absolute'>내용을 입력하세요.</span>}
                                        </div>

                                        <div className='agree position-relative'>
                                            <label>
                                                <input type="checkbox" required /> 개인정보 수집 및 활용동의
                                            </label>
                                            {errors.agreement && <span className='position-absolute'>동의가 필요합니다.</span>}
                                        </div>

                                        <button type="submit">상담 예약하기</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
}
        </>

    )
}

export default Form