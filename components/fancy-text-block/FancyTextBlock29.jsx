import React from "react";
import FancyFeatureTewentyEight from "../features/FancyFeatureTewentyEight";
import FancyFeatureThirtyOne from "../features/FancyFeatureThirtyOne";
import Image from "next/image";
const featureList = [
  {
    icon: "157",
    title: "Recieve Review",
    description: ` The Booking.com AI will notify you when you have recieved a new review on Booking.com, Google or Tripadvisor.`,
  },
  {
    icon: "158",
    title: "Read Review & Respond",
    description: `The AI tool responds automatically to new reviews in the same manner as a memebers of staff at your Hotel.`,
  },
  {
    icon: "159",
    title: "The Extra Mile",
    description: `Automatically generates an the appropriate email for customers who have left a review. `,
  },
];

const FancyTextBlock29 = () => {
  return (
    <div className="container">
      <div className="block-style-thirty bottom-border pb-80 mb-170 md-pb-40 md-mb-90">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="text-block md-pb-60">
              <div className="feature">Booking.com AI</div>
              <div className="title-style-nine mb-60 md-mb-40">
                <h2>Responding To Reviews Made Easy.</h2>
              </div>

              <ul className="feature-list-one">
                {featureList.map((list, i) => (
                  <li key={i}>
                    <Image
                      width={35}
                      height={35}
                      style={{ objectFit: "contain" }}
                      src={`/images/icon/${list.icon}.svg`}
                      alt="icon"
                      className="icon"
                    />
                    <strong>{list.title}</strong>
                    <span>{list.description}</span>
                  </li>
                ))}
              </ul>
              {/* End .feature-list-one */}

              <a href="#" className="theme-btn-thirteen mt-20">
                Learn More
              </a>
            </div>
            {/* <!-- /.text-block --> */}
          </div>
          <div className="col-xl-7 col-lg-6">
            <img
              width="845"
              height="910"
              style={{ height: "fit-content" }}
              src="/images/assets/reviewai222.gif"
              alt="Chat Hotel animation"
              className="img-responsive"
            />
          </div>
        </div>
      </div>
      {/* <!-- /.block-style-thirty --> */}

      <div className="block-style-thirty">
        <div className="row">
          <div className="col-xl-5 col-lg-6 order-lg-last">
            <div className="text-block md-pb-60">
              <div className="feature">OUTLOOK AI</div>
              <div className="title-style-nine mb-45 md-mb-30">
                <h2> AI Email Service</h2>
              </div>
              <p>
                Effortlessly automate responses to guest inquiries and enhance
                your hotel's communication efficiency, staff productivity, and
                overall guest satisfaction.
              </p>
              <ul className="feature-list-two">
                <li>
                  Generates draft responses <span>instantly,</span> ready for
                  review and customization.
                </li>
                <li>
                  Tailored responses fit your hotel's <span>tone</span> and
                  guest communication style.
                </li>
                <li>
                  AI adapts to feedback, improving responses continuously for
                  optimal engagement.
                </li>
              </ul>
              <a href="/outlookai" className="theme-btn-thirteen mt-30">
                Learn More
              </a>
            </div>
            {/* <!-- /.text-block --> */}
          </div>
          <div className="col-xl-7 col-lg-6">
            <img
              width="860"
              height="778"
              style={{ height: "fit-content" }}
              src="/images/assets/emailai2.gif"
              alt="Chat Hotel animation"
              className="img-responsive"
            />
          </div>
        </div>
      </div>
      {/* <!-- /.block-style-thirty --> */}

      <div className="mt-80 pb-100 md-pb-80 bottom-border">
        <FancyFeatureTewentyEight />
      </div>

      <div className="block-style-thirty mt-150 md-mt-90">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="text-block md-pb-60">
              <div className="feature">Customer Service AI</div>
              <div className="title-style-nine mb-45">
                <h2>Automate Your Customer Service With AI.</h2>
              </div>
              <p className="pb-30">
                Enhance guest experience with our WhatsApp chatbot, automating
                responses from room service to FAQs, optimising staff efficiency
                and ensuring swift, seamless service.
              </p>
              <a href="#" className="theme-btn-thirteen">
                Learn More
              </a>
            </div>
            {/* <!-- /.text-block --> */}
          </div>
          <div className="col-xl-7 col-lg-6">
            <img
              width="700"
              height="683"
              style={{ height: "fit-content" }}
              src="/images/assets/chathotel2.gif"
              alt="Chat Hotel animation"
              className="img-responsive"
            />
          </div>
        </div>
      </div>
      {/* <!-- /.block-style-thirty --> */}

      <div className="mt-30">
        <FancyFeatureThirtyOne />
      </div>
    </div>
  );
};

export default FancyTextBlock29;
