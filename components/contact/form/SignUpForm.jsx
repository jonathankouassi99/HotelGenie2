"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const SignUpForm = () => {
  // for password show hide
  const formRef = useRef();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // for Re password show hide
  const [rePasswordShown, setRePasswordShown] = useState(false);
  const toggleRePasswordVisiblity = () => {
    setRePasswordShown(rePasswordShown ? false : true);
  };
  const [succes, setSucces] = useState(false);
  const [error, setError] = useState(false);
  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must be only digits")
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number must not exceed 15 digits"),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Accept Terms and Conditions is required"
    ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    emailjs
      .sendForm("service_4xbso33", "template_f3qex6j", formRef.current, {
        publicKey: "Ll2ptpX5_kg-tFepJ",
      })
      .then(
        (result) => {
          setSucces(true);
          formRef.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  }

  return (
    <>
      <form
        className="user-data-form"
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                name="name"
                {...register("name")}
                className={`${errors.name ? "is-invalid" : ""}`}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name?.message}</div>
              )}
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                name="phone"
                {...register("phone")}
                className={`${errors.phone ? "is-invalid" : ""}`}
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone?.message}</div>
              )}
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>Hotel Name</label>
              <input
                type="text"
                placeholder="Enter Hotel Name"
                name="hotelName"
                {...register("hotelName")}
                className={`${errors.hotelName ? "is-invalid" : ""}`}
              />
              {errors.hotelName && (
                <div className="invalid-feedback">
                  {errors.hotelName?.message}
                </div>
              )}
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                {...register("email")}
                className={`${errors.email ? "is-invalid" : ""}`}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email?.message}</div>
              )}
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>Password</label>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                {...register("password")}
                className={`${errors.password ? "is-invalid" : ""}`}
              />
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              )}
              <span
                className="placeholder_icon"
                onClick={togglePasswordVisiblity}
              >
                <Image
                  width="24"
                  height="16"
                  src="/images/icon/view.svg"
                  alt="Toggle visibility"
                />
              </span>
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label>Re-type Password</label>
              <input
                type={rePasswordShown ? "text" : "password"}
                placeholder="Enter Password Again"
                name="confirmPassword"
                {...register("confirmPassword")}
                className={`${errors.confirmPassword ? "is-invalid" : ""}`}
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">
                  {errors.confirmPassword?.message}
                </div>
              )}
              <span
                className="placeholder_icon"
                onClick={toggleRePasswordVisiblity}
              >
                <Image
                  width="24"
                  height="16"
                  src="/images/icon/view.svg"
                  alt="Toggle visibility"
                />
              </span>
            </div>
          </div>

          <div className="col-12">
            <div className="agreement-checkbox d-flex justify-content-between align-items-center">
              <div className="position-relative">
                <input
                  type="checkbox"
                  {...register("acceptTerms")}
                  id="acceptTerms"
                  className={`${errors.acceptTerms ? "is-invalid" : ""}`}
                />
                <label htmlFor="acceptTerms">
                  By clicking "SIGN UP" I agree to the Terms and Conditions and
                  Privacy Policy.
                </label>
                {errors.acceptTerms && (
                  <div className="invalid-feedback">
                    {errors.acceptTerms?.message}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="theme-btn-one mt-30 mb-50">
              {!error && !succes && "Signup"}
              {error && "Error send email"}
              {succes && "Email Send"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
