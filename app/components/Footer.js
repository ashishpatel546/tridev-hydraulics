import React from "react";
import footerStyles from "./footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
};

const Footer = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3509.193199412924!2d77.28687107549278!3d28.4134266757851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI0JzQ4LjMiTiA3N8KwMTcnMjIuMCJF!5e0!3m2!1sen!2sin!4v1709098711988!5m2!1sen!2sin"
        width={100}
        height={350}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className={footerStyles.mapping}
      ></iframe>
      <footer className={footerStyles.footer}>
        <div></div>
        <div className={footerStyles.content}>
          <div className={footerStyles.top}>
            <div className={footerStyles["logo-details"]}>
              <span className={footerStyles.logo_name}>
                Let's Visit TRIDEV HYDRAULICS{" "}
              </span>
            </div>
            <div className={footerStyles[`media-icons`]}>
              <Link href="https://www.facebook.com/" target="_blank">
                <i>
                  {" "}
                  <FaFacebookF />{" "}
                </i>
              </Link>
              <Link href="https://twitter.com/" target="_blank">
                <i>
                  {" "}
                  <FaTwitter />{" "}
                </i>{" "}
              </Link>
              <Link href="https://instagram.com/" target="_blank">
                <i>
                  {" "}
                  <FaInstagram />{" "}
                </i>
              </Link>
              <Link href="https://linkedin.com/" target="_blank">
                <i>
                  {" "}
                  <FaLinkedinIn />{" "}
                </i>
              </Link>
              <Link href="https://youtube.com/" target="_blank">
                <i>
                  {" "}
                  <FaYoutube />{" "}
                </i>
              </Link>
            </div>
          </div>
          <div className={footerStyles["link-boxes"]}>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Company</li>
              <li className={footerStyles.link_name_list_item}>
                <Link href="/">Home</Link>
              </li>
              <li className={footerStyles.link_name_list_item}>
                <Link href="/about">About Us</Link>
              </li>
              <li className={footerStyles.link_name_list_item}>
                <Link href="/product">Products</Link>
              </li>
              <li className={footerStyles.link_name_list_item}>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className={footerStyles.link_name_list_item}>
                <Link href="/about">Careers</Link>
              </li>
            </ul>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Account</li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">My account</a>
              </li>
              <li>
                <a href="#">Prefrences</a>
              </li>
              <li>
                <a href="#">Purchase</a>
              </li>
            </ul>
            <ul className={`${footerStyles.box} ${footerStyles["input-box"]}`}>
              <li className={footerStyles.link_name}>Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className={footerStyles["bottom-details"]}>
          <div className={footerStyles.bottom_text}>
            <span className={footerStyles.copyright_text}>
              {" "}
              Copyright © 2023
              <Link href="/>"> Tridev Hydraulics.</Link> All rights reserved{" "}
            </span>
            <span className={footerStyles.policy_terms}>
              <Link href="/">Privacy policy</Link>
              <Link href="/">Terms & condition</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
