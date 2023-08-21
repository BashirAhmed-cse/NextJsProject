import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'
function About() {
  return (
    <div className={styles.container}>
       <div className={styles.imgContainer}>
         <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              fill={true}
              alt=""
              className={styles.img}
         />
         <div className={styles.imgText}>
           <h1 className={styles.imgTitle}>Digital Storytellers</h1>
           <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
         </div>
       </div>
       <div className={styles.textContainer}>
         <div className={styles.item}>
          <h1 className={styles.title}>Who Are we?</h1>
          <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not 
            <br/>
            <br/>
            only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus 
            PageMaker including versions of Lorem Ipsum</p>
         </div>
         <div className={styles.item}>
         <h1 className={styles.title}>What We Do?</h1>
         <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not 
            <br/>
            <br/>
            only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus 
            PageMaker including versions of Lorem Ipsum</p>
            <Button url="/contact" text="Contact"/>
         </div>
         </div>
       </div>
  )
}

export default About
