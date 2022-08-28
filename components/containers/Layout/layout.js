import React from "react"
import PropTypes from "prop-types"

import Header from "../Header/header"
import Footer from "../Footer"
import StickyWhatsapp from "../../fields/StickyWhatsapp";

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
      <StickyWhatsapp />
      <div id="modal-root" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
