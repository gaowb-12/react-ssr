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
    console.log(store.getState)
    return `<html>
                <head>
                    <title>hello</title>
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script>
                        // 数据注水（在服务端直接把数据传给客户端）
                        window.context={
                            state:${JSON.stringify(store.getState())}
                        }
                    </script>
                    <script src="/index.js"></script>
                </body>
            </html>`
}