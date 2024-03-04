import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.body_container}>
        <h1 className={styles.container_h1}> Contact Us</h1>

        <div className={styles.section}>
          <div className={styles.grid}>
            <div className={styles.grid_card}>
              <i className={styles.grid_card_i}>
                <MdEmail size={32} color="red" />
              </i>
              <h2 className={styles.grid_card_h2}>Email</h2>
              <p className={styles.grid_card_p}>Monday to Friday Expected </p>
              <p className={styles.last_para}>response time: 72 hours </p>
              <Link href="/" className={styles.grid_card_link}>
                {" "}
                Send Email to:{" "}
                <span className={styles.grid_card_span}>
                  tridevhydraulics2022@gmail.com
                </span>
              </Link>
            </div>

            <div className={styles.grid_card}>
              <i className={styles.grid_card_i}>
                {" "}
                <MdVoiceChat size={32} color="red" />{" "}
              </i>
              <h2 className={styles.grid_card_h2}>Live Chat</h2>
              <p className={styles.grid_card_p}>Weekdays: 9 AM — 6 PM ET</p>
              <p className={styles.last_para}>Weekends: 10 AM — 5 PM ET </p>
              <Link href="/" className={styles.grid_card_link}>
                {" "}
                Chat Now <span className={styles.grid_card_span}>-&gt;</span>
              </Link>
            </div>

            <div className={styles.grid_card}>
              <i className={styles.grid_card_i}>
                {" "}
                <MdForum size={32} color="red" />{" "}
              </i>
              <h2 className={styles.grid_card_h2}>Address</h2>
              <p className={styles.grid_card_p}>Monday to Friday Expected</p>
              <p className={styles.grid_card_p_1}>
                TRIDEV HYDRAULICS PVT. LTD. <br />
                F-618, SGM NAGAR, NEAR SHARMA CHOWK
              </p>
              <p className={styles.grid_card_p_1}>FARIDABAD-121001</p>
              <p className={styles.grid_card_p_1}>GSTIN: 06AAJCT7839G1ZX</p>
              <p className={styles.grid_card_p_1}>State: 06-Haryana</p>
            </div>
          </div>

          <section className={styles.contact_section}>
            <h2>
              We'd love to hear{" "}
              <span className={styles.contact_section_span}> From You </span>
            </h2>

            <ContactForm />
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
