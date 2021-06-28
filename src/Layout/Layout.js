import React, { Component } from 'react'
import NavBar from '../Components/Navbar/NavBar'
import Home from '../Components/Home/Home'
class Layout extends Component {
    render() {
        return (
            <div className="main-container">
               <NavBar/>
               <Home/>
            </div>
        )
    }
}
export default Layout;