import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <h1 className={styles.title}>Better design for your digital products.</h1>
      <p className={styles.desc}>Turning your Idea into Reality.We bring together the teams from the global tech industry.</p>
      <Link href='/portfolio'>
      <button className={styles.button}>See Our Works</button></Link>
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt="hero" className={styles.img}/>

   
      </div>
     
    </div>
  );
}
