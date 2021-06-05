import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FirstImg from "../../styles/images/image-1.png";
import SecondImg from "../../styles/images/image-2.png";
import { saveUser } from "../../store/users";
import { useState } from "react";

function SignUp({ users, saveUser }) {
  const [getUserData, setGetUserData] = useState(null);

  function getValues(event) {
    setGetUserData({
      id: users.length + 1,
      firstName: event.target.form[0].value,
      lastName: event.target.form[1].value,
      phone: event.target.form[2].value,
      password: event.target.form[3].value,
    });
  }

  function submitData() {
    saveUser(getUserData);
  }

  return (
    <div className={"wrapper"}>
      <div className="inner">
        <img src={FirstImg} className={"image-1"} alt="" />

        <form onChange={getValues} action="">
          <h3>Ro'yhatdan o'tish</h3>
          <div className="form-holder">
            <span className="lnr lnr-user"></span>
            <input type="text" className="form-control" placeholder="Ism" />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-user"></span>
            <input type="text" className="form-control" placeholder="Familiya" />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-phone-handset"></span>
            <input type="tel" className="form-control" placeholder="Phone Number" />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-lock"></span>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button onClick={submitData} type={"submit"} className={"kirish"} disabled={!getUserData && true}>
            <span>Jo'natish</span>
          </button>
          <Link to={"/signIn"}>
            <button className={"reg"}>
              <span>Avval ro'yhatdan o'tganmisiz?</span>
            </button>
          </Link>
        </form>

        <img src={SecondImg} className={"image-2"} alt="" />
      </div>
    </div>
  );
}

export default connect(({ users }) => ({ users }), { saveUser })(SignUp);
