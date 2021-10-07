// import requirements
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Admin from "./components/pages/Admin";
import Manager from "./components/pages/Manager";
import Normal from "./components/pages/Normal";

// app function
function App() {
  return (
    // user browser router, switch adn route
    // to direct user to correct component
    // when the url changes
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/admin" component={Admin}></Route>
        <Route exact path="/manager" component={Manager}></Route>
        <Route exact path="/normal" component={Normal}></Route>
      </Switch>
    </BrowserRouter>
  );
}

// export default element
export default App;
