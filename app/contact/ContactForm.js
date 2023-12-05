'use client';

import React, { useState } from "react";
import styles from "./contact.module.css";
import { Mulish } from "next/font/google";
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const ContactForm = () => {
    const [user , setUser] = useState({
        userName: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    }

    const handleSubmit = () => {

    }

  return (
    <>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
          <label htmlFor="userName" className={styles.label}>Enter your name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Enter your name"
            className={mulish.className}
            value={user.userName}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className={styles.input_field}>
          <label htmlFor="email" className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className={mulish.className}
              value={user.email}
              onChange={(e) => handleChange(e)}
              required
              autoComplete="off"
            />
          </label>
        </div>

        <div className={styles.input_field}>
          <label htmlFor="phone" className={styles.label}>
            Phone Number
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phone"
              className={mulish.className}
              value={user.phone}
              onChange={(e) => handleChange(e)}
              required
              autoComplete="off"
            />
          </label>
        </div>

        <div className={styles.input_field}>
          <label htmlFor="message" className={styles.label}>
            Message
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Enter your Message"
              className={mulish.className}
              value={user.message}
              onChange={(e) => handleChange(e)}
              required
              autoComplete="off"
            />
          </label>
        </div>

        <div>
          {/* {status === "success" && (
            <p className={styles.success_msg}>Thank you for your message!</p>
          )}
          {status === "error" && (
            <p className={styles.error_msg}>
              There was an error submitting your message. Please try again.
            </p>
          )} */}

          <button type="submit" className={styles.send_message_btn}>
            Send Message    
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
