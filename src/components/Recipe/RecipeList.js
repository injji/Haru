import React, { useEffect, useState } from 'react';
import RecipeItem from './RecipeItem';
import "./RecipeList.css";

const RecipeList = ({result, betweenDay}) => {

    // const recipestate = [
    //     {
    //         "id": 0,
    //         "date": "2022.09.21" ,
    //         "list": [
    //             {
    //                 "num":1,
    //                 "use" : "plus"
    //                 "listTit": "공차 타로버블티",
    //                 "won": 5000  
    //             }
    //         ]
    //     }
    // ]
    
    // 날짜 목록으로 데이터 기본값 만들기
    let recipestate  = betweenDay.map((itm, idx) => {
        let tmp = {};
        tmp['id'] = idx;
        tmp['date'] = itm;
        tmp['list'] = [];
        let listObj = {};
        listObj['num'] = '';
        listObj['revenue'] = '';
        listObj['listTit'] = '';
        listObj['won'] = '';
        tmp['list'][0] = listObj;
        return tmp;
    });
    
    

    // 데이터 초기화 시키기
    const [Data, setData] = useState(recipestate);

    // 디데이를 구하기 위한 방법 데이터의 'id' 값 맞추기
    const [dnum, setDnum] = useState(betweenDay.length - result)

    // useEffect(() => {
    //     localStorage.setItem('DATA', JSON.stringify(Data));
    // }, [Data])

    const [forminputs, setFormInputs] = useState({
        revenue: '',
        listTit: '',
        won: ''
    });
    
    const {revenue, listTit, won} = forminputs

    const onChangeInput = (e) => {
        const {value, name} = e.target;
        setFormInputs({
            ...forminputs,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const Datalist = {
            list: [
                {
                    num: 1,
                    revenue,
                    listTit,
                    won
                }
            ]
        }

        setData(
            Data.map((data) => {
                return data.id === dnum ? [...Data.list, Datalist] : Data
            })
        )
    };


    const [openModal, setOpenModal] = useState(true);

    const [listRecipe, setListRecipe] = useState(recipestate);

    

    console.log(Data)
    return (
        <div id='recipelist'>
            <div className="daylist">
                <button type="button" onClick={() => setDnum(dnum - 1)}  
                disabled={dnum !== 0 ? false : true} >
                    {
                        dnum !== 0 ? <img src={`${process.env.PUBLIC_URL}/assets/img/blue_left.svg`} alt="next"/> : <img src={`${process.env.PUBLIC_URL}/assets/img/gray_left.svg`} alt="prev"/>
                    }
                </button>
                <h3>
                    D-
                    { // D-0 이면 , D-Day로 표시되게 함
                        betweenDay.length - dnum === 0 ? "Day" : betweenDay.length - dnum
                    }
                </h3>
                <button type="button" onClick={() => setDnum(dnum + 1)}  
                disabled={dnum !== betweenDay.length ? false : true} >
                    {
                        dnum !== betweenDay.length ? <img src={`${process.env.PUBLIC_URL}/assets/img/blue_right.svg`} alt="next"/> : <img src={`${process.env.PUBLIC_URL}/assets/img/gray_right.svg`} alt="prev"/>
                    }
                </button>
            </div>

            <div className='pluma'>
                <div className='pluma_tit'>
                    <p>{recipestate[dnum].date}</p>
                    <button type='button' onClick={() => setOpenModal(true)}>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/addlist.svg`} alt="addlist"/>
                    </button>
                </div>

                <ul>
                    <RecipeItem />
                </ul>
            </div>
            

            <div className={openModal ? 'modalopen modal' : 'modal' }>
                <div className='modalwrap'>
                    <form onSubmit={handleSubmit}>
                        <p>내역 추가하기</p>
                        <ul>
                            <li>
                                <label>
                                    <input type="radio" value="수입" name='revenue'  onChange={onChangeInput} />수입 
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input type="radio" value="지출" name='revenue'  onChange={onChangeInput} />지출 
                                </label>
                            </li>
                        </ul>
                        
                        
                        <label className='botLine'>
                            <input type="text" placeholder="사용 내역을 적어주세요.(필수 아님)" value={listTit} name="listTit" onChange={onChangeInput} />
                        </label>
                    
                    
                    
                        <label className='botLine'>
                            <input type="number" placeholder="금액을 적어주세요.(필수)" value={won} name="won" onChange={onChangeInput} required />
                            <p>원</p>
                        </label>
                       

                        <div className='modalbutton'>
                            <button type='button' onClick={() => setOpenModal(false)}>취소</button>
                            <button type='submit'>등록</button>
                        </div>
                    </form>
                </div>
                <div className='darkbg'></div>
            </div>
        </div>
    );
};

export default RecipeList;