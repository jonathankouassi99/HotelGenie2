import React from "react";

import HeaderLandingWebsiteBuilder from "../../../components/header/landing/HeaderLandingWebsiteBuilder";
import HeroBannerTwelve from "../../../components/hero-banner/HeroBannerTwelve";
import CounterSix from "../../../components/counter/CounterSix";
import FooterSeven from "../../../components/footer/FooterSeven";
import CopyRightThree from "../../../components/footer/CopyRightThree";
import FancyFeatureSeventeen from "../../../components/features/FancyFeatureSeventeen";
import FancyTextBlock29 from "../../../components/fancy-text-block/FancyTextBlock29";
import TestimonialSeven from "../../../components/testimonial/TestimonialSeven";
import CallToActionSeven from "../../../components/call-to-action/CallToActionSeven";
import FancyFeatureThirtyTwo from "../../../components/features/FancyFeatureThirtyTwo";
import Pricing from "../../../components/pricing/pricing-two/Pricing";
import Image from "next/image";
import dynamic from "next/dynamic";
const Scrollspy = dynamic(() => import("@/components/scrollpy/Scrollphy"), {
  ssr: false,
});
export const metadata = {
  title: "Website Builder Landing || Deski-Saas & Software Nextjs Template",
  description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
};

const WebsiteBuilderLanding = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      {/* End Page SEO Content */}

      <HeaderLandingWebsiteBuilder />
      {/* End Header for website builder landing */}

      {/* 	=============================================
        Theme Hero Banner
        ==============================================  */}
      <Scrollspy>
        <HeroBannerTwelve />
        <div className="upper-title title-style-thirteen text-center mt-10 md-mb-90">
          Trusted by Many...
        </div>
        <div class="tech-slideshow">
          <div class="mover-1"></div>
        </div>
        {/* =============================================
        Counter Style Three
        ==============================================  */}
        <div className="counter-style-three lg-container mt-50">
          <div className="container">
            <div className="bottom-border">
              <CounterSix />
            </div>
          </div>
        </div>
        {/* <!-- /.counter-style-three --> */}

        {/* =====================================================
            Fancy Feature Seventeen
        ===================================================== */}
        <div
          className="fancy-feature-seventeen lg-container pt-150 md-pt-90"
          id="feature"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <div className="title-style-thirteen text-center mb-130 md-mb-90">
                  <div className="upper-title">Features</div>
                  <h2>
                    {" "}
                    <div>100+ AI features saving you</div>
                    <span>
                      time and money
                      <Image
                        width="391"
                        height="36"
                        src="/images/shape/line-shape-14.svg"
                        alt="line shape"
                      />
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}

          <div className="container">
            <div className="bottom-border pb-50">
              <div className="row">
                <FancyFeatureSeventeen />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.fancy-feature-seventeen --> */}

        {/* =============================================
            Fancy Feature Twenty Nine
        ==============================================  */}
        <div
          className="fancy-feature-twentyNine lg-container pt-150 mt-20 md-pt-70"
          id="p-tour"
        >
          <FancyTextBlock29 />
        </div>

        {/* =============================================
            Fancy Feature Thirty
        ==============================================  */}
        <div className="fancy-feature-thirty mt-180 md-mt-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-9 m-auto">
                <div className="title-style-thirteen text-center mb-80 md-mb-60">
                  <div className="upper-title">A BIT ABOUT US</div>
                  <h2>
                    {" "}
                    <span>Why choose </span>
                    <span>
                      {"Hotel Genie "}
                      <Image
                        width="391"
                        height="36"
                        src="/images/shape/line-shape-14.svg"
                        alt="line shape"
                      />
                    </span>
                    ?
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <FancyFeatureThirtyTwo />
            </div>
            <Image
              width="150"
              height="168"
              src="/images/shape/237.svg"
              alt="shape"
              className="shapes shape-one"
            />
            <Image
              width="150"
              height="150"
              src="/images/shape/238.svg"
              alt="shape"
              className="shapes shape-two"
            />
          </div>
          {/* <!-- /.wrapper --> */}
        </div>
        {/* <!-- /.fancy-feature-thirty --> */}

        {/* =====================================================
            Client Feedback Slider Six
        ===================================================== */}
        <div
          className="client-feedback-slider-six pt-200 md-pt-120"
          id="feedback"
        >
          <div className="inner-container">
            <div className="title-style-thirteen text-center mb-50 md-mb-20">
              <div className="upper-title">TESTimonials</div>
              <h2>
                <span>
                  Hotels love us
                  <Image
                    width="391"
                    height="36"
                    src="/images/shape/line-shape-14.svg"
                    alt="line shape"
                  />
                </span>
                <span> & we love them</span>
              </h2>
            </div>
          </div>
          {/* <!-- /.inner-container --> */}
        </div>
        {/* <!-- /.client-feedback-slider-six --> */}
        <section>
          <div className="pricing-section-one mb-150 md-mb-80" id="price">
            <div className="fancy-hero-one">
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 col-lg-11 m-auto">
                    <h2 className="font-rubik">
                      Choose a package that matches your budget
                    </h2>
                  </div>
                  <div className="col-12 m-auto">
                    <p className="font-rubik">
                      Try a plan for 30 days · No credit card required
                    </p>
                  </div>
                </div>
              </div>
              <div className="bubble-one"></div>
              <div className="bubble-two"></div>
              <div className="bubble-three"></div>
              <div className="bubble-four"></div>
              <div className="bubble-five"></div>
              <div className="bubble-six"></div>
            </div>
            {/* /.fancy-hero-one */}
            <div className="pricing-table-area">
              <Image
                width={280}
                height={281}
                src="/images/shape/62.svg"
                alt="shape"
                className="shapes shape-one"
              />
              <Image
                width="205"
                height="281"
                src="/images/shape/63.svg"
                alt="shape"
                className="shapes shape-two"
              />
              <div className="container">
                <div className="tab-content">
                  <Pricing />
                </div>
              </div>
              {/* End .container */}
            </div>
          </div>
        </section>
        <CallToActionSeven />
        {/* End call to acion seven */}

        {/* =====================================================
        Footer Style Seven
        ===================================================== */}
      </Scrollspy>
      <footer className="theme-footer-seven mt-120 md-mt-100">
        <div className="lg-container">
          <div className="container inner-btn-black">
            <FooterSeven />
          </div>

          <div className="container">
            <div className="bottom-footer">
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
  );
};

export default WebsiteBuilderLanding;
