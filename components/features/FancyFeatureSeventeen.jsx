import React from "react";
import Image from "next/image";
const FeaturesContent = [
  {
    img: "94",
    title: "Booking.com AI",
    desc: `  An AI tool that responds to guest reviews on booking.com, Google and TripAdvisor instantly. This tool not only streamlines responses but also elevates your hotel's brand reputation. `,
  },
  {
    img: "95",
    title: "Outlook AI",
    desc: ` A highly intelligent email management tool that automatically responds to incoming emails from guests on behalf of the Hotel, ensuring timely and accurate communication.`,
  },
  {
    img: "96",
    title: "Customer Service AI",
    desc: ` Automating responses to guest inquiries, room service requests, and customer queries to optimise staff time and ensure prompt service.`,
  },
  {
    img: "97",
    title: "Predictive Maintenance AI",
    desc: ` Predicts the occurrence of breakdowns at your hotel. E.g, predicting a date an elevator will breakdown, in order to perform elevator maintenance beforehand.`,
  },
  {
    img: "98",
    title: "Booking Fraud Detector AI",
    desc: ` Automatically identifies potential fraud bookings by monitoring booking patterns and payment details, safeguarding against revenue loss.
      `,
  },
  {
    img: "99",
    title: "100+ Other AI tools",
    desc: `  Automatically identifies potential fraud bookings by monitoring booking patterns and payment details, safeguarding against revenue loss.`,
  },
];
const FancyFeatureSeventeen = () => {
  return (
    <>
      {FeaturesContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="block-meta">
            <div className="icon d-flex align-items-end">
              <Image
                width={50}
                height={50}
                src={`/images/icon/${val.img}.svg`}
                alt="icon"
              />
            </div>
            <h4>{val.title}</h4>
            <p>{val.desc}</p>
          </div>
        </div>
        // .block-meta
      ))}
    </>
  );
};

export default FancyFeatureSeventeen;
