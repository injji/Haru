import React from 'react';

const Todayuse = ({ result, ArrcName}) => {

    /**
     * 오늘 사용하는 돈. 숫자 콤마 변환
     */
    const Tpay = ArrcName.CPay / result //오늘 사용하는 숫자
    const Tenpay = Math.round(Tpay / 10) * 10 //10단위로 잘라내기
    const todayPay = Tenpay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    return (
        <div id='todaypay'>
            <h1>{todayPay}</h1>
            <div className='todaybar'>
                <div className='todayprocess' style={{  }}>{}</div>
                <div className='totalprocess'></div>
            </div>
            <span>하루 {todayPay}원 중 75%의 보따리를 사용했습니다.</span>
        </div>
    );
};

export default Todayuse;