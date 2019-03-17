import React,{Component} from"react"
import Header from "../../components/header";
import {connect} from "react-redux";
import { getHomeList } from "./store/actions";
class Home extends Component{
    componentDidMount(){
        this.props.getHomeList()
    }
    render(){
        return (
            <div>
                <Header/>
                {
                    this.props.list.map(item=>(
                        <div key={item.mallCategoryId}>{item.mallCategoryName}</div>
                    ))
                }
            </div>
        )
    }
}
Home.loadData=(store)=>{
    // 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
    return store.dispatch(getHomeList())
}
const mapStateToProps = state=>({
    list:state.home.newsList
})
const mapDispatchToProps = dispatch=>{
    return {
        getHomeList(){
            dispatch(getHomeList())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)