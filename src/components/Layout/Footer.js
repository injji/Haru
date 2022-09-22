import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    const [openModal, setOpenModal] = useState(false);
    let navigate = useNavigate();
    const resetData = () => {
        navigate("/welcome/2");
    }    

    return (
        <>

        <footer>
            <button type='button' onClick={() => setOpenModal(true)}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/reset.svg`} alt="reset"/>
            </button>

            <Link to="/">
            <button type='button'>
                <img src={`${process.env.PUBLIC_URL}/assets/img/home.svg`} alt="home"/>
            </button>
            </Link>

            <button type='button'>
                <img src={`${process.env.PUBLIC_URL}/assets/img/setting.svg`} alt="setting"/>
            </button>
        </footer>

        <div className={openModal ? 'modalopen modal' : 'modal' }>
            <div className='modalwrap'>
                <p>재시작하기</p>
                <p class="resetp">모든 보따리, 날짜들을 지우고 <br />
                다시 시작하시겠습니까?</p>

                <div className='modalbutton'>
                    <button type='button' onClick={() => setOpenModal(false)}>취소</button>
                    <button type='submit' onClick={resetData} >등록</button>
                </div>
            </div>
            <div className='darkbg'></div>
        </div>
        
        </>
    );
};

export default Footer;