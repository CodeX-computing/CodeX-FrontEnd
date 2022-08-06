import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CodeX computing - Build the future</title>
        <meta name="description" content="We build modern scalable web apps," />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
      </main>
    </div>
  );
}
