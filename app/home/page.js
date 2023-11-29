import Link from "next/link";
import styles from "./home.module.css";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";

const Main = () => {
  return (
    <>
      <Header />
      <Navigation />

      <div className={styles.body_section}>
        <div className={styles.body_information_container}>
          <div className={styles.information_left}>
            <div className={styles.information_card}>
              <div className={styles.content_header}>
                Welcome to Tridev Hydraulics
              </div>
              <div className={styles.content_body}>
                Tridev Hydraulics Pvt. Limited, a pioneering force in hydraulic
                technology, specializes in crafting top-tier solutions for
                diverse industries. Established in 1990, our commitment to
                excellence is unwavering. From Hydraulic Cylinders to
                cutting-edge Hydraulic Systems, Aircraft Hydraulic Service
                Trolleys, and innovative Car Parking Solutions, we redefine
                industry standards. Our manufacturing facilities, strategically
                located in IMT Manesar (Gurgaon) and Bangalore, symbolize
                precision and advanced technology. At Tridev Hydraulics, we
                pride ourselves on delivering quality, innovation, and
                reliability, ensuring that our clients benefit from
                state-of-the-art hydraulic solutions tailored to meet the
                demands of modern industries
              </div>
            </div>
            <div className={styles.information_card}>
              <div className={styles.content_header}>
                Quality and Certification
              </div>
              <div className={styles.content_body}>
                Being an ISO 9001:2015 certified organization we always remain
                conscious towards maintaining high standards of quality in
                overall business operation. In this regard, the organisation has
                employed a team of quality analysts.
              </div>
            </div>
            <div className={styles.information_card}>
              <div className={styles.content_header}>Manufacturing Plant</div>
              <div className={styles.content_body}>
                Tridev Hydraulics Pvt. Limited operates a cutting-edge
                Manufacturing Plant strategically located in IMT Manesar
                (Gurgaon) and Bangalore. Established in 1990, our plant
                epitomizes precision and advanced hydraulic technology.
                Specializing in Hydraulic Cylinders, advanced Hydraulic Systems,
                Aircraft Hydraulic Service Trolleys, and innovative Car Parking
                Solutions, we set new industry benchmarks. Our ISO 9001:2015
                certification reflects our unwavering commitment to high-quality
                standards. The plant, staffed with skilled professionals, is
                equipped with modern facilities. Quality analysts ensure that
                each product meets our standards of excellence. Tridev
                Hydraulics is dedicated to delivering top-notch hydraulic
                solutions, aligning with the dynamic needs of modern industries.
                Our Manufacturing Plant stands as a testament to our continual
                pursuit of excellence in hydraulic technology.
              </div>
            </div>
          </div>
          <div className={styles.information_right}>
            <div>
              <div className={styles.info_right_first}>first</div>
              <div className={styles.info_right_second}>second</div>
            </div>
            <div>
              <div className={styles.info_right_third}>bottom</div>
            </div>
          </div>
        </div>
        <div className={styles.body_image_container}>
          <div>
            <Image
              className={styles.body_image_item}
              height={400}
              width={400}
              src="/1.jpg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Main;
