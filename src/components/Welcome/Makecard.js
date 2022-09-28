import React from 'react';
import CardName from '../Card/CardName';

const Makecard = ({subtit, subbak, subfoot, setHeadBG, CinputBase, onChangeInput}) => {
    subtit("보따리 만들기")
    subbak(true)
    subfoot(false)
    setHeadBG(false)

    return (
        <div id='wrap28'>
            <CardName onChangeInput={onChangeInput} CinputBase={CinputBase} />
        </div>
    );
};

export default Makecard;