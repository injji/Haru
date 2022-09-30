import React, { useEffect, useState } from "react";
import GlobalStyle from "./css/globalStyles";
import "./css/font.css";
import Nicname from "./components/Welcome/Nicname";
import Plan from "./components/Welcome/Plan";
import Makecard from "./components/Welcome/Makecard";
import NotFound from "./components/NotFound";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Recipe from "./components/Recipe/Recipe";
import { isMobile, MobileView } from "react-device-detect";
import MobilePage from "./MobilePage";

const App = () => {
  // 서브 타이틀
  const [title, setTitle] = useState("");
  const [bak, setBak] = useState(false);
  const [foot, setFoot] = useState(false);
  const [headBG, setHeadBG] = useState(false);
  const [headyes, setHeadyes] = useState(true);

  // 사용자 닉네임
  const storageDataName = localStorage.getItem("NAME");
  const [userName, setUserName] = useState(
    storageDataName ? String(storageDataName) : ""
  );

  useEffect(() => {
    localStorage.setItem("NAME", String(userName));
  }, [userName]);

  // 시작 날짜
  const localeStartDate = localStorage.getItem("StartPlan");
  const [localeStart, setLocaleStart] = useState(
    localeStartDate ? String(localeStartDate) : ""
  );

  const localeStartIN = (wonn) => {
    setLocaleStart(wonn);
  };

  useEffect(() => {
    localStorage.setItem("StartPlan", String(localeStart));
  }, [localeStart]);

  // 끝나는 날짜
  const localeEndDate = localStorage.getItem("EndPlan");
  const [localeEnd, setLocaleEnd] = useState(
    localeEndDate ? String(localeEndDate) : ""
  );
  const localeEndIN = (wonn) => {
    setLocaleEnd(wonn);
  };
  useEffect(() => {
    localStorage.setItem("EndPlan", String(localeEnd));
  }, [localeEnd]);

  const onChangeInput = (e) => {
    setUserName(e.target.value);
  };

  // console.log(Data)
  return (
    <>
      <GlobalStyle />
      {isMobile ? (
        <MobilePage />
      ) : (
        <Routes>
          <Route
            path="/welcome/1"
            element={
              <Nicname userName={userName} onChangeInput={onChangeInput} />
            }
          ></Route>
          <Route
            path="/welcome/2"
            element={
              <Plan localeStartIN={localeStartIN} localeEndIN={localeEndIN} />
            }
          ></Route>

          <Route
            element={
              <Layout
                title={title}
                bak={bak}
                foot={foot}
                headBG={headBG}
                headyes={headyes}
              />
            }
          >
            <Route
              path="/welcome/3"
              element={
                <Makecard
                  subtit={setTitle}
                  subbak={setBak}
                  subfoot={setFoot}
                  setHeadBG={setHeadBG}
                />
              }
            ></Route>
            <Route
              path="/"
              element={
                <Recipe
                  subtit={setTitle}
                  subfoot={setFoot}
                  setHeadBG={setHeadBG}
                  onChangeInput={onChangeInput}
                  userName={userName}
                  localeStartDate={localeStartDate}
                  localeEndDate={localeEndDate}
                />
              }
            ></Route>
          </Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      )}
    </>
  );
};

export default App;
