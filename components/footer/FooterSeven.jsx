"use client";

import React from "react";
import Link from "next/link";
import FormFooterSignup from "../form/FormFooterSignup";
import Image from "next/image";
const FooterSeven = () => {
  return (
    <div className="row ">
      <div
        className="col-xl-3 col-lg-2 mb-40"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="logo">
          <a href="/website-builder">
            <Image
              width="137"
              height="34"
              src="/images/logo/hg02.png"
              alt="brand"
            />
          </a>
        </div>
      </div>
      {/* End .col */}

      <div
        className="col-lg-2 col-md-6 mb-40"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <h5 className="title">Links</h5>
        <ul className="footer-list">
          <li>
            <Link href="/website-builder">Home</Link>
          </li>
          <li>
            <Link href="#price">Pricing</Link>
          </li>
          <li>
            <Link href="">About us</Link>
          </li>
          <li>
            <Link href="">Careers</Link>
          </li>
          <li>
            <Link href="">Features</Link>
          </li>
          <li>
            <Link href="">Blog</Link>
          </li>
        </ul>
      </div>

      <div
        className="col-lg-3 col-md-6 mb-40"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="150"
      >
        <h5 className="title">Legal</h5>
        <ul className="footer-list">
          <li>
            <Link href="/terms-conditions">Terms of use</Link>
          </li>
          <li>
            <Link href="/terms-conditions">Terms & conditions</Link>
          </li>
          <li>
            <Link href="/terms-conditions">Privacy policy</Link>
          </li>
          <li>
            <Link href="/terms-conditions">Cookie policy</Link>
          </li>
        </ul>
      </div>
      <div
        className="col-xl-4 col-lg-5 mb-40"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <div className="newsletter">
          <h5 className="title">Newsletter</h5>
          <p>
            Join over <span>100</span> people getting our emails
          </p>

          <FormFooterSignup />

          <div className="info">
            We only send interesting and relevant emails.
          </div>
        </div>
        {/* /.newsletter */}
      </div>
    </div>
  );
};

export default FooterSeven;
