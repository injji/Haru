import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import Moment from "moment";
import "./Welcome.css";

const Plan = ({localeStartIN, localeEndIN}) => {
    // 날짜 형식 변환하기
    const startD = localStorage.getItem("StartPlan")
    const startDay = Moment(startD).format("YYYY.MM.DD")

    const endD = localStorage.getItem("EndPlan")
    const endDay = Moment(endD).format("YYYY.MM.DD")

    // 로컬의 plan 값 체크해서 기본값 나타내기
    const [PlanD, setPlanD] = useState([])
    useEffect(() => {
        let PD = window.localStorage.getItem("PLAN");
        if(PD.length !== 0){
            setPlanD(window.localStorage.getItem("PLAN"))
        }
    })
    // const PlanD = window.localStorage.getItem("PLAN");
    const today = new Date();
    let nextDay = today.setDate(today.getDate() + 1);
    let ND = new Date(nextDay)
    const nextDate = Moment(ND).format("YYYY.MM.DD")
    
    const PlanDay = () => {
        if(PlanD.length !== 0){
            return [new Date(startDay), new Date(endDay)]
        } else {
            return [new Date(), new Date(nextDate)]
        }
    }
   
    const [dateRange, setDateRange] = useState(PlanDay());
    const [startDate, endDate] = dateRange;

    useEffect(() => {
    localStorage.setItem('PLAN', String(dateRange));
    }, [ dateRange ]);

    useEffect(() => {
        localeStartIN(startDate)
        localeEndIN(endDate)
    }, [dateRange])
    

    // 요일 반환
    const getDayName = (date) => {
        return date.toLocaleDateString('ko-KR', {
        weekday: 'long',
        }).substr(0, 1);
    }

    // 날짜 비교시 년 월 일까지만 비교하게끔
    const createDate = (date) => {
        return new Date(new Date(date.getFullYear()
        , date.getMonth()
        , date.getDate()
        , 0
        , 0
        , 0));
    }

    
    return (
        <div className="oneview">
        <div className='welcome'>
            <h3>
                보따리의 <br />
                날짜를 설정하세요. 
            </h3>

            <label>
                <DatePicker 
                dateFormat="yyyy.MM.dd"
                locale={ko}
                selectsRange={true}
                shouldCloseOnSelect={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                }}
                withPortal 
               // 토요일, 일요일 색깔 바꾸기 위함
                dayClassName={date =>
                    getDayName(createDate(date)) === '토' ? "saturday"
                :
                    getDayName(createDate(date)) === '일' ? "sunday" : undefined
                }
                renderCustomHeader={({
                    date,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                    decreaseMonth,
                    increaseMonth,
                }) => (
                    <div
                    style={{
                    margin: 10,
                    display: "flex",
                    justifyContent: "center",
                    }}
                    >
                    <div
                    className="btn_month btn_month-prev"
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    >
                    <img src="/assets/img/right_date.svg" alt="dateright"/>
                    </div>
                    <div className="month-day">
                    {getYear(date)}.{[getMonth(date)+1]}
                    </div>
            
                    <div
                    className="btn_month btn_month-next"
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    >
                        
                    <img src="/assets/img/left_date.svg"  alt="dateleft"/>
                    </div>
                    </div>
                )}
                />
            </label>

            <div className="pnbutton">
                {/* <button onClick={() => onChangeHipage(hipage - 1)}>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/left_ar.svg`} /> 이전
                </button>
                <button onClick={() => onChangeHipage(hipage + 1)}>
                    다음 <img src={`${process.env.PUBLIC_URL}/assets/img/right_ar.svg`} />
                </button> */}
                <button>
                    <Link to="/welcome/1" >
                    <img src="/assets/img/left_ar.svg"  alt="이전" /> 이전
                    </Link>
                </button>
                <button>
                    <Link to="/welcome/3" >
                    다음 <img src="/assets/img/right_ar.svg" alt="다음" />
                    </Link>
                </button>
            </div>
        </div>
        </div>
    );
};

export default Plan;