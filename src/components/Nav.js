import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export default function Nav() {
    return (
        <NavBar>
            <TheLink to="/">Home</TheLink>
            <TheLink to="/add">Add An Item</TheLink>
        </NavBar>
    )
}

const NavBar = styled.nav``;
const TheLink = styled(NavLink)``;
