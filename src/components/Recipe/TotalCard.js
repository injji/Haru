import React from 'react';
import "./TotalCard.css";

const TotalCard = ({ArrcName, PayNumber1, challenge, ingCardIN}) => {
    const challengeMoney = Number(PayNumber1) + challenge
    const commaMoney = challengeMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    const CmoneyPer = Math.round((challengeMoney / PayNumber1 * 100) / 1) * 1
    const perAllwidth = {
        width: CmoneyPer + "%"

    }
    ingCardIN(challengeMoney)


    return (
        <div id='totalcard'>
            <div className={ArrcName.cardBG === "#DAEE4E" ? "cardframe fontB" : "cardframe"} style={{ background:ArrcName.cardBG }}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/chip.png`} alt="카드칩"/>
                <div>
                    <p>{ArrcName.CName}</p>
                    <h3>{commaMoney}</h3>
                    <span>{CmoneyPer}%</span>
                    <div className='todaybar'>
                        <div className={ArrcName.cardBG === "#DAEE4E" ? "totalprocess yellowCardper" : "totalprocess"} style={perAllwidth}></div>
                        <div className={ArrcName.cardBG === "#DAEE4E" ? "totalprocess yellowCard" : "totalprocess"}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalCard;