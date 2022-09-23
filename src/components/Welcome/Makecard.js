import React from 'react';
import CardName from '../Card/CardName';

const Makecard = ({subtit, subbak, subfoot, onChangeInput}) => {
    subtit("보따리 만들기")
    subbak(true)
    subfoot(false)

    return (
        <div id='wrap28'>
            <CardName onChangeInput={onChangeInput} />
        </div>
    );
};

export default Makecard;