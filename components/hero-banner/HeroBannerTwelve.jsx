import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroBannerTwelve = () => {
  return (
    <div className="hero-banner-twelve lg-container" id="home">
      <div className="container">
        <div className="row">
          <div className="col-xl-11 col-lg-12 col-md-10 m-auto text-center">
            <h1 className="hero-heading font-gordita" data-aos="fade-up">
              Transforming Hotels With{" "}
              <span style={{ color: "#FF006B" }}>Tailored</span>{" "}
              <span style={{ color: "#FEDC00" }}>AI</span> Solutions
            </h1>
            <p
              className="hero-sub-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Hotels typically save £5000 per month when automating their work
              with HotelGenie!.
            </p>
            <div data-aos="fade-up" data-aos-delay="200">
              <Link href="/signup" className="get-start-btn">
                Get Started For Free{" "}
                <i className="fa fa-angle-right ms-1" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="screen-holder" data-aos="fade-up">
          <iframe
            width="1240"
            height="698"
            src="https://www.youtube.com/embed/OgAzk9BkUMc?si=0wio57f2lCGmdh61"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <Image
            width="311"
            height="341"
            src="/images/shape/230.svg"
            alt="screen"
            className="shapes shape-one"
          />
          <Image
            width="170"
            height="170"
            src="/images/shape/231.svg"
            alt="screen"
            className="shapes shape-two"
          />
          {/* </div> <!-- /.screen-holder --> */}
        </div>
        <Image
          width="13"
          height="12"
          src="/images/shape/232.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <Image
          width="17"
          height="20"
          src="/images/shape/233.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <Image
          width="13"
          height="16"
          src="/images/shape/234.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <Image
          width="14"
          height="14"
          src="/images/shape/235.svg"
          alt="shape"
          className="shapes shape-six"
        />
        <Image
          width="36"
          height="30"
          src="/images/shape/236.svg"
          alt="shape"
          className="shapes shape-seven"
        />
        <Image
          width="13"
          height="12"
          src="/images/shape/232.svg"
          alt="shape"
          className="shapes shape-eight"
        />
      </div>
    </div>
    // /.hero-banner-twelve
  );
};

export default HeroBannerTwelve;
