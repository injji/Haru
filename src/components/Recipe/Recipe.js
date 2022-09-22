import React, { useEffect, useState } from 'react';
import Moment from "moment";
import "./Recipe.css"
import Todayuse from './Todayuse';
import TotalCard from './TotalCard';
import RecipeList from './RecipeList';

const Recipe = ({subtit, subfoot, localeStartDate, localeEndDate}) => {
    // CARD 값 가져오기
    const CardName = localStorage.getItem("CARD") 
    const ArrcName = JSON.parse(CardName)
    subtit("오늘의 " + ArrcName.CName )
    subfoot(true)

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


    // const [sobi, setSobi] = useState("")
    // useEffect(() => {

    // })

    // 시작과 끝 날짜 사이에 날짜들 배열로 구하기
    function getDates() {
        const dateArray = [];
        const SDay = Moment(localeStartDate).format("YYYY-MM-DD")
        let startDate = new Date(SDay);
        let endDate = new Date(localeEndDate);
      
        while(startDate <= endDate) {
            dateArray.push(Moment(startDate).format("YYYY.MM.DD"));//포맷변경하는곳
            startDate.setDate(startDate.getDate() + 1);
        }
        return dateArray;
    }
    const betweenDay = getDates()


    return (
        <>
            <Todayuse 
            result={result} 
            ArrcName={ArrcName} />

            <TotalCard
            ArrcName={ArrcName}
            PayNumber2={PayNumber2}
            />

            <RecipeList 
            result={result}
            betweenDay={betweenDay}
            />            
       
        </>
    );
};

export default Recipe;