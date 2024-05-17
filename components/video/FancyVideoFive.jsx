"use client";

import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FancyVideoFive = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />

      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 order-lg-last">
          <div className="text-wrapper pt-0">
            <div className="title-style-two mb-35 md-mb-20">
              <h2>
                <span>
                  How it works.{" "}
                  <Image
                    width="448"
                    height="48"
                    src="/images/shape/line-shape-5.svg"
                    alt="icon"
                  />
                </span>
              </h2>
            </div>
            {/* <!-- /.title-style-two --> */}
            <ul className="list-item-one">
              <li>
                <strong>Email Reception</strong>
              </li>
              <li>
                Outlook AI monitors your hotel's email inbox for incoming
                messages.
              </li>
              <li style={{ marginBottom: "20px" }}></li>
              <li>
                <strong>Draft Generation</strong>
              </li>
              <li>
                Upon receiving an email, the AI instantly generates a draft
                response. The draft is tailored to match your hotel's tone and
                style.
              </li>
              <li style={{ marginBottom: "20px" }}></li>
              <li>
                <strong>Review and Send</strong>
              </li>
              <li>
                Your staff can review and customise the draft as needed before
                sending. Alternatively, set it to fully automate and send
                responses without manual intervention.
              </li>
              <li style={{ marginBottom: "20px" }}></li>
            </ul>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 order-lg-first">
          <div className="video-box">
            <Image
              width={490}
              height={470}
              style={{ height: "fit-content" }}
              src="/images/media/computeroutlook.png"
              alt="image"
            />
          </div>
          {/* <!-- /.video-box --> */}
        </div>
      </div>
    </>
  );
};

export default FancyVideoFive;
