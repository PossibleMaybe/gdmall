/**
 * Created by Administrator on 2017/10/12.
 */
import React,{Component} from 'react';
import './Body.css';
class Body extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        alert('bodyTest');
    }
    render(){
        return(
            <div className="body">

            </div>
        )
    }
}

export default Body;