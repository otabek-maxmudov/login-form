import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { getUser } from "../../store/users";
import FirstImg from "../../styles/images/image-1.png";
import SecondImg from "../../styles/images/image-2.png";

function SignIn({ users, getUser }) {
  const [checkUser, setCheckUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getUser();
  }, [getUser]);

  let history = useHistory();

  function getValues(event) {
    setCheckUser({
      phone: event.target.form[0].value,
      password: event.target.form[1].value,
    });
  }

  function handleSubmit() {
    users.forEach((item) => (item.phone === checkUser.phone ? history.push("/cabinet") : setErrorMessage("Bunday foydalanuvchi mavjud emas yoki parol xato")));
  }
  return (
    <div className={"wrapper"}>
      <div className="inner">
        <img src={FirstImg} className={"image-1"} alt="" />

        <form onChange={getValues}>
          <h3>Tizimga kirish</h3>
          <div className="form-holder">
            <span className="lnr lnr-phone-handset"></span>
            <input type="tel" className="form-control" placeholder="Telefon raqam" required />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-lock"></span>
            <input type="password" className="form-control" placeholder="Parol" required />
          </div>
          <h4 style={{ color: "red" }}>{errorMessage}</h4>
          <Button onClick={handleSubmit} className={"kirish"} disabled={!checkUser && true}>
            <span>Kirish</span>
          </Button>
          <Link to={"/signUp"}>
            <button className={"reg"}>
              <span>Ro'yhatdan o'tish</span>
            </button>
          </Link>
        </form>
        <img src={SecondImg} className={"image-2"} alt="" />
      </div>
    </div>
  );
}

export default connect(({ users }) => ({ users }), { getUser })(SignIn);
