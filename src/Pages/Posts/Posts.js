import React from 'react'
import styles from "./Posts.module.css"
import PostCard from '../../components/PostCard/PostCard'
import postData from "../../postData.json"

const Posts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post_context}>
        <span className={styles.title}>Posts</span>
        {
          postData.map((item,index)=>{
            return <div key={index}><PostCard title={item.title} description={item.description} /> </div>
          })
        }
        
      </div>
    </div>
  )
}

export default Posts