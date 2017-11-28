import React,{Component} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return (
            <header>
                <strong className="c1 fs28 ff1 dpi">
                    线上自助诊断平台
                </strong>
                <span className="c1 fs18 dpi">
                    药店端
                </span>
            </header>
        )
    }
}

export default Header;