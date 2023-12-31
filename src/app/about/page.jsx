import React from 'react'
import styles from './page.module.css'
import Image from "next/image";
import Link from 'next/link'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'fill={true} alt='' className={styles.img}/>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experience</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are We?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati praesentium suscipit vel nobis voluptatum minus minima recusandae officia veritatis illum?<br />
          <br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati praesentium suscipit vel nobis voluptatum minus minima recusandae officia veritatis illum?</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati praesentium suscipit vel nobis voluptatum minus minima recusandae officia veritatis illum?
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati praesentium suscipit vel nobis voluptatum minus minima recusandae officia veritatis illum?</p>
          <Link href='/contact'  >
          <button className={styles.button} >Contact</button></Link>
         
        </div>
        
      </div>
    </div>
  )
}

export default About