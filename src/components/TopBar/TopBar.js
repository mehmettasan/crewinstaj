import React from 'react'
import styles from "./TopBar.module.css"
import {ReactComponent as NotificationIcon} from "../../assets/icons/notification.svg"
import {ReactComponent as SmsIcon} from "../../assets/icons/sms.svg"

const TopBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.icons} >
        <a href='#'><SmsIcon width="24px" height="24px" /></a>
        <a href='#'><NotificationIcon width="24px" height="24px"/></a>
        </div>
        <div className={styles.profile_container}>
        </div>
    </div>
  )
}

export default TopBar