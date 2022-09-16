import React from 'react';
// import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      {/*<!--====== HEADER PART START ======-->*/}

      <section className="header_area">
        {/* <Navbar /> */}
        {/*<!-- header navbar -->*/}
        <div id="home" className="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center">
          <div className="hero_shape shape_1">
            <img src="/images/shape/shape-1.svg" alt="shape" />
          </div>
          {/*<!-- hero shape -->*/}
          <div className="hero_shape shape_2">
            <img src="/images/shape/shape-2.svg" alt="shape" />
          </div>
          {/*<!-- hero shape -->*/}
          <div className="hero_shape shape_3">
            <img src="/images/shape/shape-3.svg" alt="shape" />
          </div>
          {/*<!-- hero shape -->*/}
          <div className="hero_shape shape_4">
            <img src="/images/shape/shape-4.svg" alt="shape" />
          </div>
          {/*<!-- hero shape -->*/}
          <div className="hero_shape shape_6">
            <img src="/images/shape/shape-1.svg" alt="shape" />
          </div>
          {/*<!-- hero shape -->*/}
          <div className="hero_shape shape_7">
            <img src="/images/shape/shape-4.svg" alt="shape" />
          </div>
          {/*<!-- hero shape -->*/}
          <div className="hero_shape shape_8">
            <img src="/images/shape/shape-3.svg" alt="shape" />
          </div>
          {/*<!-- hero shape -->*/}
          <div className="hero_shape shape_9">
            <img src="/images/shape/shape-2.svg" alt="shape" />
          </div>
          {/*<!-- hero shape -->*/}
          <div className="hero_shape shape_10">
            <img src="/images/shape/shape-4.svg" alt="shape" />
          </div>
          {/*<!-- hero shape -->*/}
          <div className="hero_shape shape_11">
            <img src="/images/shape/shape-1.svg" alt="shape" />
          </div>
          {/*<!-- hero shape -->*/}
          <div className="hero_shape shape_12">
            <img src="/images/shape/shape-2.svg" alt="shape" />
          </div>
          {/*<!-- hero shape -->*/}
          <div className="container">
            <div className="row">
              <div className="w-full lg:w-1/2">
                <div className="header_hero_content pt-150 lg:pt-0">
                  <h2 className="hero_title text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold">
                    Let&apos;s Build your <br />
                    <span id="changing-text" className="text-theme-color"></span>
                  </h2>
                  <p className="mt-8 lg:mr-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                  <div className="hero_btn mt-10">
                    <a className="main-btn" href="mailto:contact@codexcomputing.tk">
                      Let&apos;s talk
                    </a>
                  </div>
                </div>{' '}
                {/*<!-- header hero content -->*/}
              </div>
            </div>{' '}
            {/*<!-- row -->*/}
          </div>{' '}
          {/*<!-- container -->*/}
          <div className="header_shape hidden lg:block"></div>
          <div className="header_image flex items-center">
            <div className="image 2xl:pl-25">
              <img src="/images/header-image.svg" alt="Header Image" />
            </div>
          </div>{' '}
          {/*<!-- header image -->*/}
        </div>{' '}
        {/*<!-- header hero -->*/}
      </section>

      {/*<!--====== HEADER PART ENDS ======-->*/}
    </>
  );
};

export default Header;
