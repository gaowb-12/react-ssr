import express from "express"
import React from "react"//引入解析jsx
import { renderToString } from "react-dom/server"//服务端渲染dom
import Home from"./containers/Home"

const app=express();
const content =renderToString(<Home/>)
app.get("/",function(req,res){
    res.send(
        `
        <html>
            <head>
                <title>hello</title>
            </head>
            <body>
                ${content}
            </body>
        </html>
        `
    )
})
const server= app.listen(1024)