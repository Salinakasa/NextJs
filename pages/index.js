import styles from "../styles/Home.module.css";
import Head from "next/head";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="keywords" content="Homepage" />
      </Head>
      
      <Slider/>
      <h1 className={styles.main_title}>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        officiis quaerat in temporibus hic iusto cupiditate nulla minus aut amet
        excepturi esse quidem, pariatur, deleniti adipisci earum ut explicabo
        vitae!
      </p>
    </>
  );
}
