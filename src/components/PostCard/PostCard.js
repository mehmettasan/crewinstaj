import React from 'react'
import styles from "./PostCard.module.css"
import { ReactComponent as MoreIcon } from '../../assets/icons/more.svg'

const PostCard = ({title,description}) => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <span className={styles.title}>{title}</span>
            <div className={styles.more_menu_container}>
                <MoreIcon />
                <div className={styles.more_menu}>
                    <a href='#' className={styles.more_menu_item}>Edit</a>
                    <a href='#' className={styles.more_menu_item}>Delete</a>
                </div>
            </div>
        </div>
        <div className={styles.body}>
            <p className={styles.description}>{description}</p>
        </div>
    </div>
  )
}

export default PostCard