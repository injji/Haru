import React, { useState, useRef, useEffect } from "react";
import RecipeItems from "./RecipeItems";
import "./RecipeList.css";

const RecipeList = ({ result, betweenDay, allin, challin }) => {
  // 날짜 목록으로 데이터 기본값 만들기
  let recipestate = betweenDay.map((itm, idx) => {
    let tmp = {};
    tmp["id"] = idx;
    tmp["date"] = itm;
    tmp["list"] = [];
    return tmp;
  });

  // 데이터 초기화 시키기
  const localData = localStorage.getItem('Recipe');
  {
    localData === null && localStorage.setItem("Recipe", JSON.stringify(recipestate));
  }
  const [Data, setData] = useState(
    localData ? JSON.parse(localData) : recipestate
);


  // 디데이를 구하기 위한 방법 데이터의 'id' 값 맞추기
  const [dnum, setDnum] = useState(betweenDay.length - result);
// console.log(betweenDay)
  const [forminputs, setFormInputs] = useState({
    revenue: "",
    listTit: "",
    won: "",
  });

  // 모달 팝업 열기, 닫기
  const [openModal, setOpenModal] = useState(false);

  const { revenue, listTit, won } = forminputs;

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setFormInputs({
      ...forminputs,
      [name]: value,
    });
  };

  //   Data.list 의 num 시작 번호
  const nextId = useRef(0);

  //   내역 추가하기 팝업의 등록 버튼을 클릭시 수행 작업
  const handleSubmit = (e) => {
    e.preventDefault();
    const Datalist = {
      num: nextId.current,
      revenue,
      listTit,
      won,
    };
    nextId.current += 1;
    setData(Data.map((item) => (item.id === dnum ? { ...item, list: [...item.list, Datalist] } : item)))

    setOpenModal(false);

    setFormInputs({
      revenue: "",
      listTit: "",
      won: "",
    });
  };

  /**
   * 데이터 변경 될 때마다 localStorage에 저장
   */
  useEffect(() => {
    localStorage.setItem("Recipe", JSON.stringify(Data));
  }, [Data]);


  /**
   * list 값으로 추출해서 새로운 객체 만들기
   */
let paynn = Data.map((item) => (item.id === dnum && item.list.map((payy) => (payy.revenue === "수입" ? "" + payy.won : "-" + payy.won))))

/**
 * 객체를 숫자형으로 변환
 */
const payItems = paynn[dnum].map( i => Number(i))

/**
 * 소비한 값들 모두 합치기
 */
const payhab = () => {
    let hab = 0
    payItems.map( arr => hab += arr)
    return hab
}
// Recipe로 데이터 보내기
allin(payhab)


const challengeAll = Data.map((item) => (item.list.map((payy) => (payy.revenue === "수입" ? "" + payy.won : "-" + payy.won))))
const challengeNum = challengeAll.map(i => i.map(j => Number(j)))
const challengehab = () => {
    let hab = 0
    challengeNum.map( i => i.map( j => hab += j))
    return hab
}
challin(challengehab)

console.log(betweenDay)
  return (
    <div id="recipelist">
      <div className="daylist">
        <button
          type="button"
          onClick={() => setDnum(dnum - 1)}
          disabled={(dnum) !== 0 ? false : true}
        >
          {dnum !== 0 ? (
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/blue_left.svg`}
              alt="next"
            />
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gray_left.svg`}
              alt="prev"
            />
          )}
        </button>
        <h3>
          D-
          {
            // D-0 이면 , D-Day로 표시되게 함
            (betweenDay.length) - (dnum + 1) === 0 ? "Day" : betweenDay.length - (dnum + 1)
          }
        </h3>
        <button
          type="button"
          onClick={() => setDnum(dnum + 1)}
          disabled={dnum !== (betweenDay.length - 1) ? false : true}
        >
          {dnum !== (betweenDay.length - 1) ? (
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/blue_right.svg`}
              alt="next"
            />
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gray_right.svg`}
              alt="prev"
            />
          )}
        </button>
      </div>

      <div className="pluma">
        <div className="pluma_tit">
          <p>{recipestate[dnum].date}</p>
          <button type="button" onClick={() => setOpenModal(true)}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/addlist.svg`}
              alt="addlist"
            />
          </button>
        </div>

        <ul className="recipeul">
        {
            Data.map((itemlist) => (itemlist.id === dnum && itemlist.list.map( (Relist) => (<RecipeItems Relist={Relist} key={Relist.num} />))
        ))}
        </ul>
      </div>

      <div className={openModal ? "modalopen modal" : "modal"}>
        <div className="modalwrap">
          <form onSubmit={handleSubmit}>
            <p>내역 추가하기</p>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    value="수입"
                    name="revenue"
                    onChange={onChangeInput}
                    required
                  />
                  수입
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    value="지출"
                    name="revenue"
                    onChange={onChangeInput}
                    required
                  />
                  지출
                </label>
              </li>
            </ul>

            <label className="botLine">
              <input
                type="text"
                placeholder="사용 내역을 적어주세요.(필수 아님)"
                value={listTit}
                name="listTit"
                onChange={onChangeInput}
              />
            </label>

            <label className="botLine">
              <input
                type="number"
                placeholder="금액을 적어주세요.(필수)"
                value={won}
                name="won"
                onChange={onChangeInput}
                required
              />
              <p>원</p>
            </label>

            <div className="modalbutton">
              <button type="button" onClick={() => setOpenModal(false)}>
                취소
              </button>
              <button type="submit">등록</button>
            </div>
          </form>
        </div>
        <div className="darkbg"></div>
      </div>
    </div>
  );
};

export default RecipeList;
