import axios from "axios"
import { CHANGE_LIST } from "./contants";
const changeList=(list)=>{
    return {
        type:CHANGE_LIST,
        list
    }
}
export const getHomeList=()=>{
    return (dispath)=>{
        return axios.get("https://www.easy-mock.com/mock/5c4ea1bb3ee6a53c67d8235d/mall")
        .then(res=>{
            const list =res.data.data.category
            dispath(changeList(list))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}