import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
function Footer() {
  return (
    <div className={styles.container}>
      <div>@2023 Bashir. All rights reserved.</div>
      <div>
        <Image src="" alt="misoft"/>
      </div>
    </div>
  )
}

export default Footer
