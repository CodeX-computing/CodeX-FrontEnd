import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer_area bg-black relative z-10">
      <div className="back shape absolute left-0 top-0 opacity-5 h-full overflow-hidden w-1/3">
        <img src="/images/footer-shape-left.png" alt="" />
      </div>
      <div className="back shape absolute right-0 top-0 opacity-5 h-full overflow-hidden w-1/3">
        <img src="/images/footer-shape-right.png" alt="" />
      </div>
      <div className="container">
        <div className="footer_widget pt-18 pb-120">
          <div className="row justify-center">
            <div className="w-full md:w-1/2 lg:w-3/12">
              <div className="footer_about mt-13 mx-3">
                <div className="footer_logo">
                  <a href="#">
                    <img src="/images/logo.png" alt="" />
                  </a>
                </div>
                <div className="footer_content mt-8">
                  <p className="text-white">
                    CodeX Computing is a company that provides end-to-end software solutions to small and independent businesses, based in Morocco. <br />
                    <br />
                    These solutions are designed to help our clients succeed in their respective markets.
                    <br />
                    CodeX Computing has a team of professionals with years of experience in the field, who work together to provide a wide range of services for both the public and private sectors.
                  </p>
                </div>
              </div>{' '}
              {/*<!-- footer about -->*/}
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12">
              <div className="footer_link_wrapper flex flex-wrap mx-3">
                <div className="footer_link w-1/2 md:pl-13 mt-13">
                  <h2 className="footer_title text-xl font-semibold text-white">Quick Links</h2>
                  <ul className="link pt-4">
                    <li>
                      <a href="#" className="text-white mt-4 hover:text-theme-color">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white mt-4 hover:text-theme-color">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white mt-4 hover:text-theme-color">
                        About
                      </a>
                    </li>
                  </ul>
                </div>{' '}
                {/*<!-- footer link -->*/}
                <div className="footer_link w-1/2 md:pl-13 mt-13">
                  <h2 className="footer_title text-xl font-semibold text-white">Resources</h2>
                  <ul className="link pt-4">
                    <li>
                      <a href="#" className="text-white mt-4 hover:text-theme-color">
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white mt-4 hover:text-theme-color">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white mt-4 hover:text-theme-color">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>{' '}
                {/*<!-- footer link -->*/}
              </div>{' '}
              {/*<!-- footer link wrapper -->*/}
            </div>
          </div>{' '}
          {/*<!-- row -->*/}
        </div>{' '}
        {/*<!-- footer widget -->*/}
        <div className="footer_copyright pt-3 pb-6 border-t-2 border-solid border-white border-opacity-10 sm:flex justify-between">
          <div className="footer_social pt-4 mx-3 text-center">
            <ul className="social flex justify-center sm:justify-start">
              <li className="mr-3">
                <a href="https://twitter.com/Codex_Computing">
                  <i className="lni lni-twitter-filled"></i>
                </a>
              </li>
              <li className="mr-3">
                <a href="https://instagram.com/ismailcourr">
                  <i className="lni lni-instagram-original"></i>
                </a>
              </li>
              <li className="mr-3">
                <a href="https://www.linkedin.com/company/codex-computing">
                  <i className="lni lni-linkedin-original"></i>
                </a>
              </li>
            </ul>
          </div>{' '}
          {/*<!-- footer social -->*/}
          <div className="footer_copyright_content pt-4 text-center">
            <p className="text-white">
              <a href="https://codexcomputing.tk" target="_blank" rel="noreferrer">
                CodeX Computing &copy; 2021. All Rights Reserved.
              </a>
            </p>
          </div>{' '}
          {/*<!-- footer copyright content -->*/}
        </div>{' '}
        {/*<!-- footer copyright -->*/}
      </div>{' '}
      {/*<!-- container -->*/}
    </footer>
  );
};

export default Footer;
