import React from "react";
import Image from "next/image";
const featuresContent = [
  {
    icon: "149",
    title: "It's A Must",
    desc: `Enhances guest experience, quickens response time, and boosts staff productivity.`,
    delayAnimation: "",
  },
  {
    icon: "150",
    title: "Simple To Use",
    desc: `Intuitive interface, quick setup, and easy integration with Outlook and other existing systems.`,
    delayAnimation: "100",
  },
  {
    icon: "151",
    title: "Save Time & Effort",
    desc: `Reduces manual email handling, streamlines communication, increases operational efficiency.`,
    delayAnimation: "200",
  },
];

const FancyFeatureTewentyEight = () => {
  return (
    <div className="row justify-content-between">
      {featuresContent.map((val, i) => (
        <div
          className="col-xl-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div className="block-style-twentyEight text-center mt-40">
            <div className="icon d-flex justify-content-center align-items-end">
              <Image
                width={36}
                height={36}
                style={{ objectFit: "contain" }}
                src={`/images/icon/${val.icon}.svg`}
                alt="icon"
              />
            </div>
            <h4>{val.title}</h4>
            <p>{val.desc}</p>
          </div>
          {/* /.block-style-twentyEight */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureTewentyEight;
