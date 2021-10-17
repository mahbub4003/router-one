import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { BrowserRouter, Switch } from "../node_modules/react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Nave from "./components/Nave";
import Test from "./components/Test";
import PrivateRoute from "./PrivateRoute";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nave />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <PrivateRoute exact path="/posts/:postID" component={Test} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
