import React from "react";
import Image from "next/image";
const PricingContent = [
  {
    packName: "TRIAL",
    price: "0",
    packageFor: "If you are looking to get started.",
    icon: "38",
    billCycle: "Billed per Hotel",
    preFeatures: [
      "Access to a limited set of basic AI tools",
      "Support during the trial period",
      "Access to introductory tutorials",
      "No commitment required, easy cancellation",
    ],
  },
  {
    packName: "Limited AI Access",
    price: "250",
    packageFor: "Suitable for smaller boutique Hotels",
    icon: "40",
    billCycle: "Billed per Hotel",
    preFeatures: [
      "Access to 10 essential AI tools",
      "1 user for each tool",
      "Email support during business hours",
      "Option to upgrade to the Unlimited AI Features tier at any time",
    ],
  },
  {
    packName: "Unlimited AI Access",
    price: "299",
    packageFor: "Suitable for larger Hotel chains",
    icon: "41",
    billCycle: "Billed per Hotel",
    preFeatures: [
      "Access to 100+ essential AI tools",
      "Unlitimited users for each tool",
      "24/7 Email support",
      "Regular updates with new features",
      "Customise and tailor AI solutions",
    ],
  },
];

const PricingMonthly = () => {
  return (
    <div className="row justify-content-center">
      {PricingContent.map((val, i) => (
        <div className="col-lg-4 col-md-6" key={i}>
          <div className="pr-table-wrapper">
            <div className="pack-name">{val.packName}</div>
            <div className="price font-rubik">
              £{val.price}.<sup>00</sup>
            </div>
            <div className="pack-rec font-rubik">{val.packageFor}</div>
            <Image
              width={97}
              height={105}
              style={{ objectFit: "contain" }}
              src={`/images/icon/${val.icon}.svg`}
              alt="icon"
              className="icon"
            />
            <div className="bill-cycle">Billed per agent</div>
            <ul className="pr-feature">
              {val.preFeatures.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
            <a href="/signup" className="theme-btn-four">
              Choose Plan
            </a>
            <div className="trial-text font-rubik">
              Get your 30 day free trial
            </div>
          </div>
          {/*  /.pr-table-wrapper */}
        </div>
      ))}
    </div>
  );
};

export default PricingMonthly;
