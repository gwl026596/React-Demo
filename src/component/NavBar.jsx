import React from "react"
import  "./NavBarStyle.css"
import {Link} from "react-router-dom"

export default class NavBar extends React.Component{

    render(){
        return(
            <div>
                <ul className="NavBarStyle">
                <Link to="/signup"><li>注册</li></Link>
                <Link to="/login"><li>登录</li></Link>
                <Link to="/"><li>注册登录功能</li></Link>

                </ul>
            </div>
        )
    }
}