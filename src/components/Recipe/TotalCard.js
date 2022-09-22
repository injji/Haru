import React from 'react';
import "./TotalCard.css";

const TotalCard = ({ArrcName, PayNumber2}) => {
    
    // const fontColor = {
    //     ArrcName.cardBG === "#DAEE4E" && "fontB"
    // }
    

    return (
        <div id='totalcard'>
            <div className={ArrcName.cardBG === "#DAEE4E" ? "cardframe fontB" : "cardframe"} style={{ background:ArrcName.cardBG }}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/chip.png`} alt="카드칩"/>
                <div>
                    <p>{ArrcName.CName}</p>
                    <h3>{PayNumber2}</h3>
                    <span>75%</span>
                    <div className='todaybar'>
                        <div className='todayprocess' style={{}}></div>
                        <div className='totalprocess'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalCard;