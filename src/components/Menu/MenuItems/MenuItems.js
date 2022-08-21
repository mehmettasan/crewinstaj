import React from 'react'
import styles from "./MenuItems.module.css"
import { NavLink } from 'react-router-dom'

const MenuItems = ({ children, name, linkto, Icon }) => {
    return (
        <NavLink to={linkto} className={({ isActive }) => isActive ? styles.container_active : styles.container}>
            <div style={styles.icon_container}>
                <Icon width="24px" height="24px" color="#134E70"/>
            </div>
            <span className={styles.title}>{name}</span>
        </NavLink>
    )
}

export default MenuItems