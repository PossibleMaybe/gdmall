import React,{Component} from 'react';
import './Video.css';

class Video extends Component {
    constructor(props){
        super(props);
        this.state = {
            url:''
        }
        this.beginVideo = this.beginVideo.bind(this);
    }
    beginVideo(){
        this.setState({
            url:'https://webrtc.onecc.me/app/?conference=370110089&pin=1234&name=te1&join=1'
        })
    }
    render(){
        return (
            <div className="video">
                <button onClick={this.beginVideo}>开始视频</button>
                <iframe src={this.state.url} frameBorder="0"></iframe>

            </div>
        )
    }


}

export default Video;