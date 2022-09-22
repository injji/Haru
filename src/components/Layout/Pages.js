import React from 'react';
import Makecard from '../Welcome/Makecard';
import Nicname from '../Welcome/Nicname';
import Plan from '../Welcome/Plan';

export const Pages = [
    {id:1, path:'/welcome/1', title:'Nicname', comp:<Nicname />},
    {id:2, path:'/welcome/2', title:'Plan', comp:<Plan />},
    {id:3, path:'/welcome/3', title:'보따리 만들기', comp:<Makecard />},
]

