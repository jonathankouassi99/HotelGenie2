import React from "react";

import HeaderTwo from "../../../components/header/HeaderTwo";
import FancyVideoFive from "../../../components/video/FancyVideoFive";
import CounterThree from "../../../components/counter/CounterThree";
import FooterTwo from "../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../components/footer/CopyRightTwo";
import FeatureSixV2 from "../../../components/features/FeatureSixV2";
import CallToActionThree from "../../../components/call-to-action/CallToActionThree";
import FancyFeatureThirtyThree from "../../../components/features/FancyFeatureThirtyThree";
import Image from "next/image";
export const metadata = {
  title: "Service Version 1 || Deski-Saas & Software Nextjs Template",
  description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
};
const ServiceV1 = () => {
  return (
    <div className="main-page-wrapper p0">
      {/* End Page SEO Content */}

      <HeaderTwo />
      {/* End Header */}

      {/* 	=============================================
            Fancy Hero Three
        ============================================== */}
      <div className="fancy-hero-three">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="shapes shape-five"></div>
        <div className="shapes shape-six"></div>
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-10 m-auto">
                <h1 className="heading">Outlook AI</h1>
                <p className="sub-heading">
                  Outlook AI is an advanced email management tool designed to
                  enhance your hotel's communication efficiency. It automates
                  responses to incoming emails from guests, ensuring timely and
                  accurate communication while freeing up your staff to focus on
                  providing excellent in-person service.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper  */}
      </div>
      {/* /.fancy-hero-three */}

      {/*   =============================================
        Fancy Text block Eleven
    ==============================================  */}

      {/* /.fancy-text-block-eleven */}

      {/* =============================================
            Fancy Feature Six
        ============================================== */}
      <div className="fancy-feature-six mt-140 md-mt-70">
        <div className="bg-wrapper">
          <div className="shapes shape-one"></div>
          <div className="shapes shape-two"></div>
          <div className="shapes shape-three"></div>
          <div className="shapes shape-four"></div>
          <div className="shapes shape-five"></div>
          <Image
            width={235}
            height={235}
            src="/images/shape/51.svg"
            alt="shape"
            className="shapes shape-six"
          />
          <div className="container">
            <div className="title-style-two text-center mb-85 md-mb-40">
              <h2>
                <span>
                  Key Features
                  <Image
                    width={375}
                    height={44}
                    src="/images/shape/line-shape-2.svg"
                    alt="shape"
                  />
                </span>
              </h2>
              <div className="sub-text mt-15">
                Streamline email management with Outlook AI. Automate responses,
                enhance guest communication, and boost staff productivity
                effortlessly.
              </div>
            </div>
            {/* End .title */}
            <FeatureSixV2 />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-six */}

      {/* =====================================================
            Fancy Text block Twelve
        ===================================================== */}
      <div className="fancy-text-block-twelve mt-170 md-mt-100">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="text-wrapper">
                <div className="title-style-three">
                  <h6>Why Outlook AI?</h6>
                  <h2 style={{ marginBottom: "20px" }}>
                    <span>
                      <span>The Benefits of</span>
                      <Image
                        width="530"
                        height="54"
                        src="/images/shape/line-shape-6.svg"
                        alt="image"
                      />
                    </span>
                    <span> Outlook AI.</span>
                  </h2>
                </div>
                <ul className="list-item-one">
                  <li>
                    <strong>Enhanced Efficiency</strong>
                  </li>
                  <li>
                    Significantly reduces the time staff spend on email
                    management.
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    Allows staff to focus on more complex tasks and in-person
                    guest services.
                  </li>
                  <li>
                    <strong>Improved Guest Satisfaction</strong>
                  </li>
                  <li>
                    Provides timely and accurate responses to guest inquiries.
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    Enhances the overall guest experience with prompt
                    communication.
                  </li>
                  <li>
                    <strong>Seamless Integration</strong>
                  </li>
                  <li>Easily integrates with your existing email systems.</li>
                  <li style={{ marginBottom: "20px" }}>
                    No need for extensive retraining or system overhauls.
                  </li>
                </ul>
              </div>
              {/* <!-- /.text-wrapper --> */}
            </div>
            {/* End .col-6 */}

            <div
              className="col-lg-5 ms-auto"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="img-gallery">
                <Image
                  width={402}
                  height={430}
                  style={{ height: "fit-content" }}
                  src="/images/media/outlook3.png"
                  alt="image"
                />
                <Image
                  width={121}
                  height={145}
                  src="/images/shape/53.svg"
                  alt="shape"
                  className="shapes shape-one"
                />
                <Image
                  width={144}
                  height={144}
                  src="/images/shape/52.svg"
                  alt="shape"
                  className="shapes shape-two"
                />
              </div>
              {/* <!-- /.img-gallery --> */}
            </div>
            {/* End col-lg-5 */}
          </div>
        </div>
      </div>

      <div className="fancy-text-block-eleven mt-200 md-mt-100">
        <div className="container">
          <FancyVideoFive />

          <div className="mt-70">
            <div className="container">
              <div className="title-style-two mb-35 md-mb-20">
                <h2>
                  <span>Getting Started. </span>
                </h2>
              </div>
              <FancyFeatureThirtyThree />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-text-block-twelve --> */}
      <div className="fancy-text-block-twelve mt-170 md-mt-100">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="text-wrapper">
                <div className="title-style-three">
                  <h6>Why Outlook AI?</h6>
                  <h2 style={{ marginBottom: "20px" }}>
                    <span>
                      <span>Testimonial</span>
                      <Image
                        width="530"
                        height="54"
                        src="/images/shape/line-shape-6.svg"
                        alt="image"
                      />
                    </span>
                    <span> </span>
                  </h2>
                </div>
                <ul className="list-item-one">
                  <li>
                    <strong></strong>
                  </li>
                  <li>
                    "Outlook AI has revolutionised our email management. Our
                    response times have improved drastically, and our staff can
                    now focus more on guest experience. The AI-generated
                    responses are remarkably accurate and personalised. It feels
                    like a human is responding." – Guest Relations Officer
                  </li>
                </ul>
              </div>
              {/* <!-- /.text-wrapper --> */}
            </div>
            {/* End .col-6 */}

            <div
              className="col-lg-5 ms-auto"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="img-gallery">
                <Image
                  width={402}
                  height={430}
                  style={{ height: "fit-content" }}
                  src="/images/media/computeroutlook3.png"
                  alt="image"
                />
                <Image
                  width={121}
                  height={145}
                  src="/images/shape/53.svg"
                  alt="shape"
                  className="shapes shape-one"
                />
                <Image
                  width={144}
                  height={144}
                  src="/images/shape/52.svg"
                  alt="shape"
                  className="shapes shape-two"
                />
              </div>
              {/* <!-- /.img-gallery --> */}
            </div>
            {/* End col-lg-5 */}
          </div>
        </div>
      </div>

      {/* =====================================================
            Counter With Icon One
        ===================================================== */}

      {/* /.counter-with-icon-one */}

      {/* =====================================================
        Fancy Short Banner Three
        ===================================================== */}
      <div className="fancy-short-banner-three mt-200 md-mt-150">
        <div className="container">
          <div className="bg-wrapper">
            <CallToActionThree />
          </div>
          {/* /.bg-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-short-banner-four */}

      {/* =====================================================
            Footer Style Two
        ===================================================== */}
      <footer className="theme-footer-two pt-150 md-pt-80">
        <div className="top-footer">
          <div className="container">
            <FooterTwo />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRightTwo />
          </div>
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default ServiceV1;
