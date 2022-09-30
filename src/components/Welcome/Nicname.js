import React from "react";
import { Link } from "react-router-dom";

const Nicname = ({ userName, onChangeInput }) => {
  // const [userName, setUserName] = useState(
  //   storageDataName ? String(storageDataName) : ""
  // );

  // useEffect(() => {
  //   localStorage.setItem("NAME", String(userName));
  // }, [userName]);

  return (
    <div className="oneview">
      <div className="welcome">
        <h3>
          보따리의 주인의
          <br />
          이름은 무엇입니까?
        </h3>

        <label>
          <input type="text" value={userName} onChange={onChangeInput} />
        </label>

        <div className="pnbutton">
          <button>
            <Link to="/welcome/2">
              다음 <img src="/assets/img/right_ar.svg" alt="다음" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nicname;
