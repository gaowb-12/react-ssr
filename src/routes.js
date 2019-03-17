import React from "react";
import { Route } from "react-router-dom";
import Home from"./containers/Home"
import Login from"./containers/Login"

export default [
    {
        path:"/",
        component:Home,
        exact:true,
        loadData:Home.loadData,
        key:"home"
    },
    {
        path:"/login",
        component:Home,
        exact:true,
        key:"login"
    }
]
// export default (
//     <div>
//         <Route path="/login" exact component={Login}></Route>
//         <Route path="/" exact component={Home}></Route>
//     </div>
// )