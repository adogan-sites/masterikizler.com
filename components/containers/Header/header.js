import PropTypes from "prop-types"
import React from "react"
import Head from "next/head"
import NavBar from "../../regions/NavBar"

const Header = () => (
  <header>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
      <title>M. I.</title>
    </Head>
    <NavBar/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
