"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSeven() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      img: "img_79",
      desc: ` Hotel Genie's AI solutions have revolutionized our guest interactions. Their predictive maintenance tool is a game-changer for our operations. Highly recommend!`,
      reviewerName: "Elena Rossi",
      country: " Switzerland",
      bgColor: "#FF47E2",
    },
    {
      img: "img_78",
      desc: ` Thanks to Hotel Genie, our response times have improved drastically. Their 24/7 support is outstanding and always available when we need it which is truly indispensable!`,
      reviewerName: "Max Schneider",
      country: " USA",
      bgColor: "#00E5F3",
    },
    {
      img: "img_79",
      desc: ` The comprehensive training provided by Hotel Genie ensured a seamless integration of their tools. Our staff feels confident and our efficiency has skyrocketed. Excellent service!`,
      reviewerName: "Sofia Ivanova",
      country: " Portugal",
      bgColor: "#FFCF24",
    },
    {
      img: "img_80",
      desc: ` The capabilities are tremendously. Their network of partnerships provides invaluable resources that have enhanced our guest services significantly.`,
      reviewerName: "Julien Dubois",
      country: " France",
      bgColor: "#8F6BF6",
    },
  ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div className="item" key={i}>
          <div className="feedback-wrapper">
            <span className="ribbon" style={{ background: val.bgColor }}></span>
            <p>{val.desc}</p>
            <div className="d-flex align-items-center">
              <Image
                width={43}
                height={43}
                src={`/images/media/${val.img}.png`}
                alt="icon"
                className="avatar"
              />
              <h6 className="name">
                {val.reviewerName},<span>{val.country}</span>
              </h6>
            </div>
          </div>
          {/* End .feedback-wrapper */}
        </div>
      ))}
    </Slider>
  );
}
