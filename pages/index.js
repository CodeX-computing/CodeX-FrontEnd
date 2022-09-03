import React from 'react';
import Head from 'next/head';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Blog from '../components/Blog';
import Team from '../components/Team';
import Pracing from '../components/Pracing';
import Work from '../components/Work';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import About from '../components/About';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import style from '../assets/css/Navbar.module.css';

const Home = () => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <title>CodeX computing - Build the future</title>
        <meta name="description" content="We build modern scalable web apps," />
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* if browser is IE, desplay this message */}
      {/* <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p> */}

      {/* <div className={style.under}>
        <p>
          The website under construction,
          <br /> please come back later
        </p>
      </div> */}
      <Navbar />
      <Header />
      <Preloader />
      <About />
      <WhyUs />
      <Services />
      {/* <Work /> */}
      {/* <Pracing /> */}
      {/* <Team /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer />

      {/*<!--====== BACK TOP TOP PART START ======-->*/}

      <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up"></i>
      </a>

      {/*<!--====== BACK TOP TOP PART ENDS ======-->*/}
    </div>
  );
};

export default Home;
