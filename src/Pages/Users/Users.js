import React from 'react'
import styles from "./Users.module.css";
import UserCard from '../../components/UserCard/UserCard';
import userData from "../../usersData.json";

const Users = () => {
  return (
    <div className={styles.container}>
        <div className={styles.user_context}>
            <span className={styles.title}>Users</span>
            <div className={styles.user_items}>
                {
                    userData.map((item,index)=>{
                        return <div key={index}><UserCard name={item.name} mail={item.mail} city={item.city} profileimage={item.image} /></div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Users