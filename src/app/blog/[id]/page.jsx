import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: "no-store", });
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
             src="https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt=""
             width={40}
             height={40}
             className={styles.avatar}
            />
            <span className={styles.username}>Bashir Ahmed</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
        <Image
             src="https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt=""
            fill={true}
             className={styles.image}
            />
        </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
          Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going 
          <br/>
          <br/>
          through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
          This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
          "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>

        </div>
    </div>
  )
}

export default BlogPost
