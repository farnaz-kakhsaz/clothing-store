import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

function Hats(props) {
  console.log(props);
  return <h1>Hats</h1>;
}
// function Topics(props) {
//   console.log(1, props);
//   return (
//     <>
//       <h1>Topics {props.match.params.id}</h1>
//       <Link to="/topics/33">Topic 33</Link>
//       <Link to="/">Topic 33</Link>
//       <Link to={`${props.match.url}//15`}>15</Link>
//       <button onClick={() => props.history.push("/topics/38")}>
//         Topics 38
//       </button>
//       <button onClick={() => props.history.goBack()}>back</button>
//       <button onClick={() => props.history.goForward()}>Forward</button>
//     </>
//   );
// }

function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop/hats">
          <Hats />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
