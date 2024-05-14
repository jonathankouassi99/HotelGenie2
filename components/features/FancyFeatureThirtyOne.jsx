import React from "react";
import Image from "next/image";
const featuresContent = [
  {
    icon: "163",
    title: "Easy To Use",
    desc: `Intuitive interface, instant setup, easy for guests and staff to use.`,
    delayAnimation: "",
  },
  {
    icon: "164",
    title: "Answer All Queries",
    desc: `Handles room service, booking changes, local information, and more.`,
    delayAnimation: "100",
  },
  {
    icon: "165",
    title: "Clean & Unique",
    desc: `Sets hotels apart with innovative, 24/7 personalised guest service.`,
    delayAnimation: "200",
  },
];

const FancyFeatureThirtyOne = () => {
  return (
    <div className="row justify-content-between">
      {featuresContent.map((item, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimation}
          key={i}
        >
          <div className="block-style-thirtyOne mt-40">
            <div className="icon d-flex align-items-end">
              <Image
                width={32}
                height={32}
                style={{ objectFit: "contain" }}
                src={`/images/icon/${item.icon}.svg`}
                alt="icon"
              />
            </div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
          {/* <!-- /.block-style-thirtyOne --> */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureThirtyOne;
