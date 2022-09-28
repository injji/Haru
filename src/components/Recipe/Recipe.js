import React, { useEffect, useState } from 'react';
import Moment from "moment";
import "./Recipe.css"
import Todayuse from './Todayuse';
import TotalCard from './TotalCard';
import RecipeList from './RecipeList';
import styled from 'styled-components';
import Nicname from '../Welcome/Nicname';



const Recipe = ({subtit, subfoot, setHeadBG, ArrcName, userName, onChangeInput, localeStartDate, localeEndDate}) => {

    // CARD 값 가져오기
    subtit("오늘의 " + ArrcName.CName )
    subfoot(true)
    setHeadBG(true)

    // 숫자 콤마 변환
    const PayNumber1 = ArrcName.CPay
    const PayNumber2 = PayNumber1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    const Percent = (PayNumber1 - 3000) / PayNumber1 * 100
    // const PercentTwo = Percent.toFixed(0)

    // 디데이 구하는 식
    const EDay = Moment(localeEndDate).format("YYYY-MM-DD")
    var Dday = new Date(EDay);    // D-day()를 셋팅한다.
    var now = new Date();                    // 현재(오늘) 날짜를 받아온다.
    var gap = now.getTime() - Dday.getTime();    // 현재 날짜에서 D-day의 차이를 구한다.
    var result = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;    // gap을 일(밀리초 * 초 * 분 * 시간)로 나눈다. 이 때 -1 을 곱해야 날짜차이가 맞게 나온다.
    
    // 시작과 끝 날짜 사이에 날짜들 배열로 구하기
    function getDates() {
        const dateArray = [];
        const SDay = Moment(localeStartDate).format("YYYY-MM-DD")
        let startDate = new Date(SDay);
        let endDate = new Date(localeEndDate);
        let ddd = endDate.setDate(endDate.getDate() + 1)
      
        while(startDate <= ddd) {
            dateArray.push(Moment(startDate).format("YYYY.MM.DD"));//포맷변경하는곳
            startDate.setDate(startDate.getDate() + 1);
        }
        return dateArray;
    }
    const betweenDay = getDates()

console.log()
    /**
     * 금액의 합계
     */
    const [allpay, setAllpay] = useState("");
    
    const allin = (wonn) => {
        setAllpay(wonn);
    }

    const [challenge, setChallenge] = useState("");
    const challin = (wonn) => {
        setChallenge(wonn)
    }

    const [ingCard, setIngCard] = useState("");
    const ingCardIN = (wonn) => {
        setIngCard(wonn)
    }

    // 사용자 닉네임
    const storageDataName = localStorage.getItem("NAME");

    useEffect(() => {
        localStorage.setItem("NAME", String(userName));
    }, [userName]);

    const [welName, setWelName] = useState(true)
    useEffect(() => {
        if(storageDataName){
            setWelName(false)
        }
    },[])

    console.log(betweenDay)
    
    return (
        <>
            {
                welName && <div className='noName'><Nicname userName={userName} onChangeInput={onChangeInput} setWelName={setWelName} /></div>
            }
            <Todayuse 
            result={result} 
            ArrcName={ArrcName}
            allpay={allpay}
            ingCard={ingCard} 
            />

            <TotalCard
            ArrcName={ArrcName}
            PayNumber1={PayNumber1}
            challenge={challenge}
            ingCardIN={ingCardIN}
            />

            <RecipeList 
            result={result}
            betweenDay={betweenDay}
            allin={allin}
            challin={challin}
            />            
       
        </>
    );
};

export default Recipe;
