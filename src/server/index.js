import express from "express"
import { render } from "./utils"
import { matchRoutes } from "react-router-config";
import getStore from "../store";
import routes from"../routes"

const app=express();
app.use(express.static("public"))


app.get("*",function(req,res){
    const store=getStore()
    // 根据路由的路径，来往store里加数据
    const matchedRoutes=matchRoutes(routes,req.path);
    const promises=[];

    matchedRoutes.forEach((item)=>{
        if(item.route.loadData){
            // promises里面的每一项都是Promise实例
            promises.push(item.route.loadData(store))
        }
    })
    Promise.all(promises).then(()=>{
        res.send(render(store,routes,req))
    })    
})
const server= app.listen(1024)