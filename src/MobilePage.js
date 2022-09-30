import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const MobilePage = () => {

  return (
    <div className="oneview mobile">
      {/* <img src={mobilePreparingImg} alt="mobile icon" /> */}
      <h3 className="title">PC버전으로 접속해주세요</h3>
      <p className="description">
        아쉽게도 아직 모바일은 지원하지 않아요😥 <br />
        조금씩 수정하는 중이니 지금은 PC환경에서 다씀을 이용해주세요!
      </p>
      <CopyToClipboard text="http://dassm.today/" onCopy={()=>alert("링크가 복사되었습니다!")}>
        <button
        type="button"
        className="link-copy-button"
        >
            링크 복사하기
        </button>
      </CopyToClipboard>
    
    </div>
  );
};

export default MobilePage;
