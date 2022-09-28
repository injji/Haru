import React, { useEffect, useState } from 'react';

const Todayuse = ({ result, allpay, ingCard}) => {

    /**
     * 오늘 사용하는 돈. 숫자 콤마 변환
     */
    const Tenpay = Math.round((ingCard / (result + 1)) / 10) * 10 //오늘 사용하는 숫자 10단위로 잘라내기
    const todayPay = Tenpay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    let allTen = Tenpay + allpay
    const todayIngPay = allTen.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    const todayPer = Math.round((allTen / Tenpay * 100) / 1) * 1
    
    const widthPer = () => {
        let wp
        if(todayPer < 0) {
            wp = 0
        } else {
            wp = todayPer
        } return wp
    }
    
    const widthP = {
        width: widthPer() + '%'
    }

    console.log(ingCard)
 
    return (
        <div id='todaypay'>
            <h1>{todayIngPay}</h1>
            <div className='todaybar'>
                <div className='todayprocess' style={widthP}></div>
                <div className='totalprocess'></div>
            </div>
            <span>하루 {todayPay}원 중 {todayPer}%을 사용할 수 있습니다.</span>
        </div>
    );
};

export default Todayuse;