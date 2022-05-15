import React, { useState } from 'react'
import StyledNav, { DesktopMenu, HamburgerButton, MobileMenu } from "./styled/Nav.styled"
import { Link } from 'react-router-dom'

const Nav = () => {
    const [navOpen, setNav] = useState(false)

    return (
        <StyledNav>
            <HamburgerButton className="fas fa-bars" onClick={() => { setNav(c => !c) }} />
            <MobileMenu open={navOpen}>
                <Links setNav={setNav} />
            </MobileMenu>
            <DesktopMenu>
                <Links setNav={null} />
            </DesktopMenu>
        </StyledNav>
    )
}

export default Nav;

const Links = ({ setNav }) => {
    return <>
        <Link to="/" onClick={() => { if (setNav) setNav(false) }}><h1>React Planner</h1></Link>
        <Link to="/" onClick={() => { if (setNav) setNav(false) }}><p>Dashboard</p></Link>
        <Link to="/account" onClick={() => { if (setNav) setNav(false) }}><p>Account</p></Link>
    </>
}