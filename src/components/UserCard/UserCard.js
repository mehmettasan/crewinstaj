import React from 'react'
import styles from "./UserCard.module.css"

const UserCard = ({name,mail,city,profileimage}) => {
  return (
    <div className={styles.card_container}>
        <img className={styles.image} src={require("../../assets/images/"+profileimage)} />
        <p className={styles.name}>{name}</p>
        <p className={styles.mail}>{mail}</p>
        <p className={styles.city}>{city}</p>
    </div>
  )
}

export default UserCard