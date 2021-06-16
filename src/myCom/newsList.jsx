import react from "react";
import axios from "axios";
import "./newList.css";

export class NewsList extends react.Component {
    state = {
        newsData: [], //新闻数据
        time: ""
    };

    intoNewsInfo(url) {
        window.open(url);
    }

    createList() {
        return this.state.newsData.map((item, index) => {
            return (
                <li onClick={this.intoNewsInfo.bind(this, item.path)} key={index} className="li-item" alt="newCover">
                    <img src={item.image}/>
                    <span>{item.title}</span>
                    <div className="time-box">{item.passtime}</div>
                </li>
            );
        })
    }

    createTime() {
        setInterval(() => {
            this.setState((preState) => ({
                time: new Date().toLocaleTimeString()
            }))
        }, 1000)
    }

    render() {
        //页面渲染函数
        return (
            <div className="main-out-box">
                <div>{this.state.time}</div>
                <ul className="main-ul">
                    {this.createList()}
                </ul>
            </div>
        );
    }

    //组件挂载完毕钩子 请求数据
    async componentDidMount() {
        const {data: res} = await axios.post(
            "https://api.apiopen.top/getWangYiNews"
        );
        this.setState((preState) => {
            return (preState.newsData = res.result);
        });
        this.createTime();
    }
}
