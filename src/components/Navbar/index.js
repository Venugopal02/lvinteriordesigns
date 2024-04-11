import { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.css'
import { IoMdMenu } from "react-icons/io";
import { HiOutlineXMark } from "react-icons/hi2";

class Navbar extends Component {

    state = {
        showMenuIcon: true,
        showXmarkIcon: false
    }

    onClickMenuBtn = () => {
        this.setState(prevState => ({showMenuIcon: !prevState.showMenuIcon, showXmarkIcon: !prevState.showXmarkIcon}))
    }
    onClickXmarkBtn = () => {
        this.setState(prevState => ({showXmarkIcon: !prevState.showXmarkIcon, showMenuIcon: !prevState.showMenuIcon}))
    }

    render() {
        const {showMenuIcon} = this.state
    return(
    <nav className='nav-bar-container'>
        <Link to="/"><img className='website-logo' src="./Images/website_logo.png" alt='logo'/></Link>
        {showMenuIcon ? <button className='menu-icon-btn' onClick={this.onClickMenuBtn} ><IoMdMenu /></button>
         : <button className='xmark-icon-btn' onClick={this.onClickXmarkBtn}><HiOutlineXMark /></button>}

        <ul className="navbar-texts-container">
            <li className="list-item-navbar">
                <Link to="/"  className="text-in-navbar">Home</Link>
            </li>
            <li className="list-item-navbar">
                <Link to="/Gallery" className="text-in-navbar">Gallery</Link>
            </li>
        </ul>
    </nav>
    )}}

export default Navbar