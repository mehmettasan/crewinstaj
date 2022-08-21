import React from 'react'
import styles from "./Menu.module.css"
import {ReactComponent as HomeIcon} from "../../assets/icons/home-2.svg"
import {ReactComponent as UsersIcon} from "../../assets/icons/profile-2user.svg"
import {ReactComponent as PostsIcon} from "../../assets/icons/message-text.svg"
import MenuItems from './MenuItems/MenuItems';

const Menu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <img className={styles.image} src={require("../../assets/images/logo.png")} />
            </div>
            <MenuItems name="Dashboard" linkto="/" Icon={HomeIcon}></MenuItems>
            <MenuItems name="Users" linkto="/users" Icon={UsersIcon}></MenuItems>
            <MenuItems name="Posts" linkto="/posts" Icon={PostsIcon}></MenuItems>
        </div>
    )
}

export default Menu