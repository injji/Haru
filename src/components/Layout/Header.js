import React from 'react';
import {useNavigate} from 'react-router-dom';
import "./Header.css";

const Header = ({title, bak, headBG}) => {
    const navigate = useNavigate();

    return (
        <header className={headBG && "bgf5" }>
            <button onClick={() => navigate(-1)}>
                {
                    bak ? <img src="/assets/img/right_date.svg" alt="back" /> : null
                }
            </button>
            <h5>{title}</h5>
        </header>
    );
};

export default Header;