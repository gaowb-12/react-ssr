import React from "react"//引入解析jsx
import { renderToString } from "react-dom/server"//服务端渲染dom
import { StaticRouter,Route } from "react-router-dom";

import { Provider } from "react-redux";

export const render=(store,routes,req)=>{
    const content =renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                {routes.map(route=>(
                    <Route {...route}/> 
                ))}
            </StaticRouter>
        </Provider>
    ))
    return `<html>
                <head>
                    <title>hello</title>
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script src="/index.js"></script>
                </body>
            </html>`
}