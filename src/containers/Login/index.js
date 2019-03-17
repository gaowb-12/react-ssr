import React from"react"
import Header from "../../components/header";

const Login=()=>{
    return (
        <div>
            <Header/>
            <p>login</p>
            <button onClick={()=>{console.log("login")}}></button>
        </div>
    )
}
export default Login