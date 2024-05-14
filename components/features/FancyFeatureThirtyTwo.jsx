import React from "react";
import Image from "next/image";
const featuresContent = [
  {
    bgColor: "#FFEBDB",
    icon: "169",
    title: "24/7 Support",
    descriptions:
      "Available anytime via live chat, phone, or web. We provide instant, round-the-clock solutions and support",
    link: "#",
    dealyAnimation: "",
  },
  {
    bgColor: "#D8FFF1",
    icon: "187",
    title: "Training & Onboarding",
    descriptions:
      "Partner with us for tailored training and continuous expert support, ensuring a smooth and effective integration of our tools.",
    link: "#",
    dealyAnimation: "100",
  },
  {
    bgColor: "#F7EDFF",
    icon: "166",
    title: "A Network of Partnerships",
    descriptions:
      "As part of our network, gain seamless access to an extensive ecosystem of booking platforms and tech solutions.",
    link: "#",
    dealyAnimation: "",
  },
  {
    bgColor: "#FFEBDB",
    icon: "177",
    title: "AI Solutions for Every Need",
    descriptions:
      "Our 100+ AI tools continuously evolve to meet industry demands, enhancing every aspect of hotel management effectively.",
    link: "#",
    dealyAnimation: "100",
  },
];

const FancyFeatureThirtyTwo = () => {
  return (
    <div className="row">
      {featuresContent.map((item, i) => (
        <div
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay={item.dealyAnimation}
          key={i}
        >
          <div className="block-style-thirtyTwo d-flex">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: item.bgColor }}
            >
              <Image
                width={24}
                height={24}
                style={{ objectFit: "contain" }}
                src={`/images/icon/${item.icon}.svg`}
                alt="icon"
              />
            </div>
            <div className="text">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
              <a href={item.link} className="theme-btn-ten">
                Learn more
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureThirtyTwo;
