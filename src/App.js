import { useEffect, useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Cabinet from "./pages/Cabinet/Cabinet";
import "./styles/App.css";

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [displayLocation, location]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}>
      <Switch location={displayLocation}>
        <Route path={"/signIn"} component={SignIn} />
        <Route path={"/signUp"} component={SignUp} />
        <Route path={"/cabinet"} component={Cabinet} />
        <Redirect to={"/signIn"} />
      </Switch>
    </div>
  );
}

export default App;
