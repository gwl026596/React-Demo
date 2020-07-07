import React from "react"
import { Route } from "react-router-dom"

import App from "./component/App"
import signup from "./component/signup/signup"
import Login from "./component/signup/Login"
export default (
            <div  className="container">
                <Route exact path="/" component={App}></Route>
                <Route path="/signup" component={signup}></Route>
                <Route path="/login" component={Login}></Route>
            </div>

        )
    