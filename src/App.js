import React, { useEffect, useState } from "react";
import GlobalStyle from "./css/globalStyles";
import Moment from "moment";
import "./css/font.css";
import Nicname from "./components/Welcome/Nicname";
import Plan from "./components/Welcome/Plan";
import Makecard from "./components/Welcome/Makecard";
import NotFound from './components/NotFound';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Recipe from "./components/Recipe/Recipe";

const App = () => {
  // // 초기화면 페이지 나타내기
  // const storageDataPage = localStorage.getItem('PAGE');
  // const [ hipage, setHipage ] = useState(storageDataPage ? Number(storageDataPage) : 0 );

  // useEffect(() => {
  //   localStorage.setItem('PAGE', Number(hipage));
  // }, [ hipage ]);

  // 서브 타이틀
  const [title, setTitle] = useState("");
  const [bak, setBak] = useState(false);
  const [foot, setFoot] = useState(false);

  // 사용자 닉네임
  const storageDataName = localStorage.getItem('NAME');
  const [userName, setUserName] = useState(storageDataName ? String(storageDataName) : "" );

  useEffect(() => {
    localStorage.setItem('NAME', String(userName));
  }, [ userName ]);

  // 시작 날짜
  const localeStartDate = localStorage.getItem('StartPlan');
  const [localeStart, setLocaleStart] = useState(localeStartDate ? String(localeStartDate) : "" );

  useEffect(() => {
    localStorage.setItem('StartPlan', String(localeStart));
  }, [ localeStart ]);

  // 끝나는 날짜
  const localeEndDate = localStorage.getItem('EndPlan');
  const [localeEnd, setLocaleEnd] = useState(localeEndDate ? String(localeEndDate) : "" );

  useEffect(() => {
    localStorage.setItem('EndPlan', String(localeEnd));
  }, [ localeEnd ]);

  const onChangeInput = (e) => {
    setUserName(e.target.value);
  };

 
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/welcome/1" element={<Nicname  
            userName={userName}
            onChangeInput={onChangeInput} 
        />}></Route>
        <Route path="/welcome/2" element={<Plan 
          setLocaleStart={setLocaleStart}
          setLocaleEnd={setLocaleEnd}
        />}></Route>

        <Route element={<Layout title={title} bak={bak} foot={foot} />}>
          <Route path="/welcome/3" element={<Makecard  
              subtit={setTitle}
              subbak={setBak} 
          />}></Route>
          <Route path="/" element={<Recipe  
            subtit={setTitle}
            subfoot={setFoot}  
            localeStartDate={localeStartDate}
            localeEndDate={localeEndDate}
          />}></Route> 
        </Route>

          <Route path="*" element={<NotFound 
          />}></Route>
      </Routes>
    </>
  );
};

export default App;
