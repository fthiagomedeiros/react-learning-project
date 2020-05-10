import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './header.css';

class Header extends Component {
    render() {
        return (
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/contacts'>Contacts</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </nav>
        );
    }
}

export default Header;
