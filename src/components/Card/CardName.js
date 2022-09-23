import React, { useEffect, useState } from 'react';
import "./CardName.css"

const CardName = () => {
    // 기본 정보 넣어둠
    const CinputBase = {
        CName: '',
        CPay : '',
        cardBG: '#373EF0'
    }

    // 로컬에 있는 데이터 확인, 없으면 기본 정보대로 표시되게
    const saved = window.localStorage.getItem("CARD");
    const [Cinput, setCInput] = useState(
        saved ? JSON.parse(saved) : CinputBase 
    );

    // input 간편하게 정리
    const { CName, CPay, cardBG } = Cinput;

    const onChangeInput = (e) => {
        const {name, value} = e.target // destructuring
        setCInput({
            ...Cinput,
            [name]:value,
        })
    }

 


    // 첨부파일에 넣은 이미지를 배경화 하기
    const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
    reader.onload = () => {
        setCInput({
            ...Cinput,
            cardBG : 'url(' + reader.result + ') center'
        });
    resolve();
    };
    });
    };
    
    // 전송하기
    const onSubmit = (e) => {
        e.preventDefault()
        setCInput({...Cinput, 
            CName,
            CPay,
            cardBG 
        })
        console.log('form submitted ✅');
        window.location.href="/"
    }
    
    // 카드정보 저장하기
    useEffect(() => {
        localStorage.setItem("CARD", JSON.stringify(Cinput))
    }, [Cinput])



    return (
        <form onSubmit={onSubmit}>
            <div className='cardframe' style={{ background:cardBG }}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/chip.png`} alt="카드칩"/>
            </div>

            <ul className='changebutton'>
                <li style={{backgroundColor:"#DAEE4E"}} 
                    onClick={() => setCInput({
                    ...Cinput, 
                    cardBG : "#DAEE4E"})}>
                </li>

                <li style={{backgroundColor:"#373EF0"}} 
                    onClick={() => setCInput({
                    ...Cinput, 
                    cardBG : "#373EF0"})}>    
                </li>

                <li style={{backgroundColor:"#5937DE"}} 
                    onClick={() => setCInput({
                    ...Cinput, 
                    cardBG : "#5937DE"})}>
                </li>

                <li style={{backgroundColor:"#333333"}} 
                    onClick={() => setCInput({
                    ...Cinput, 
                    cardBG : "#333333"})}>
                </li>

                <li style={{backgroundColor:"#888888"}}>
                    <label for="imgupload"><img src={`${process.env.PUBLIC_URL}/assets/img/imgplus.svg`}  alt="plus" /> </label>
                    <input type="file" onChange={(e) => {
                    encodeFileToBase64(e.target.files[0]);
                    }} id="imgupload" />
                </li>
            </ul>

            <div className='cardname'>
                <div>   
                    <p>보따리 별칭</p>
                    <input type="text" value={CName} placeholder='보따리의 이름을 정해주세요.' onChange={onChangeInput} name="CName" />
                </div>

                <div>   
                    <p>금액 설정</p>
                    <input type="text" value={CPay} placeholder='기간동안 목표 금액을 적어주세요.' onChange={onChangeInput} name="CPay" />
                </div>
            </div>

            <button className='cardbutton'  type="submit">
                만들기
            </button>
        </form>
    );
};

export default CardName;