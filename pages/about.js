import Head from 'next/head';
import Styles from '../styles/about.module.css';

export default function About() {
  return (
    <div className={Styles.container}>
      <Head>
        <title>About us, CodeX computing - Build the future</title>
        <meta name="description" content="We build modern scalable web apps," />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={Styles.main}>
        <h1>Hello to about page</h1>
      </main>
    </div>
  );
}