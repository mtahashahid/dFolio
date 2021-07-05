import React, { Component } from 'react'
import NavBar from '../Components/Navbar/NavBar'
import Home from '../Components/Home/Home'
import Skills from '../Components/Skills/Skills'
class Layout extends Component {
    render() {
        return (
            <div className="main-container">
               <NavBar/>
               <Home/>
               <Skills/>
            </div>
        )
    }
}
export default Layout;