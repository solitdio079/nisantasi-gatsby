import * as React from "react"
//import {Link} from "gatsby"
//import logo from "./logo.png"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ObserverProvider from "./ObserverProvider"
const Layout = ({children}) => {
    return (
      <div data-theme="dark">
        <ObserverProvider>
        <Navbar/>
        {children}
        <Footer/>
        </ObserverProvider>
      </div>
    )
}

export default Layout