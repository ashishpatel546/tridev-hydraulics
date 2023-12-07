import Link from "next/link";
import styles from "./home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import CarousleComponent from "../components/Carsoule";

const Main = () => {
  return (
    <>
      <Header />
      {/* <CarousleComponent /> */}

      <div className={styles.new_conatiner}>
        <div className={styles.skewed}>
          <div className={styles.text}>
            <small className={styles.text_small}>Welcome to</small>
            <h1 className={styles.text_h1}>Tridev Hydraulics Pvt. Limited</h1>
            <p className={styles.text_p}>
              Elevate your industrial experience with Tridev Hydraulics, a
              trailblazer in hydraulic technology. Since our establishment in
              1990, we've been dedicated to delivering unparalleled solutions
              for various industries. From cutting-edge Hydraulic Cylinders to
              innovative Hydraulic Systems, Aircraft Hydraulic Service Trolleys,
              and state-of-the-art Car Parking Solutions, we consistently
              redefine industry standards.
            </p>
            <Link className={styles.text_link} href="/product">
              Discover more &rarr;
            </Link>
          </div>
          <div className={styles.image_container}>
            <div>
              <Image
                height={300}
                width={400}
                src="/jcb_01.jpg"
                className={styles.image_tag}
                alt="Tridev Hydraulics Equipment"
              />
            </div>
          </div>
        </div>

        <div className={styles.skewed_left}>
          <div className={styles.image_container}>
            <div>
              <Image
                height={300}
                width={400}
                src="/jcb_03.jpg"
                className={styles.image_tag}
                alt="Tridev Hydraulics Manufacturing Facility"
              />
            </div>
          </div>
          <div className={styles.text}>
            <small className={styles.text_small}>
              Welcome to Tridev Hydraulics
            </small>
            <h1 className={styles.text_h1}>Innovation in Motion</h1>
            <p className={styles.text_p}>
              At Tridev Hydraulics, our commitment to excellence drives every
              aspect of our operations. Strategically located in IMT Manesar
              (Gurgaon) and Bangalore, our manufacturing facilities exemplify
              precision and advanced technology.
            </p>
            <p className={styles.text_p}>
              We take pride in offering top-tier hydraulic solutions tailored to
              meet the dynamic demands of modern industries. Our dedication to
              innovation and client satisfaction sets us apart. Explore the
              possibilities with Tridev Hydraulics today.
            </p>
            <Link className={styles.text_link} href="/contact">
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.body_section}>
        <div className={styles.body_information_container}>
          <div className={styles.information_left}>
            <div className={styles.information_card}>
              <div className={styles.content_header}>Do you know</div>
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
        </div>
        <div className={styles.body_image_container}>
          <div>
            <Image
              className={styles.body_image_item}
              height={400}
              width={400}
              src="/2.jpg"
            />
            <Image
              className={styles.body_image_item}
              height={400}
              width={400}
              src="/22.jpg"
            />
          </div>
        </div>
      </div>

      <section className={`${styles.about_section} ${styles.layout_padding}`}>
          <div className={styles.about_row}>
            <div className={styles.about_col}>
              <div className={styles.about_detail_box}>
                <div className={styles.heading_container}>
                  <h2 className={styles.heading_container_h2}>About Us</h2>
                </div>
                <p className={styles.about_detail_p}>
                  Tridev Hydraulics Pvt. Limited is more than just a hydraulic
                  technology company; we are pioneers committed to excellence.
                  Our journey, established in 1990, has been about redefining
                  industry standards. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </p>
                <Link className={styles.about_detail_box_link} href="/about">
                  Discover Our Story &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.about_image_container}>
              <div className={styles.img_box}>
                <Image
                  height={400}
                  width={400}
                  className={styles.img_box_img}
                  src="/about-img.png"
                  alt="About Us Image"
                />
              </div>
            </div>
          </div>
      </section>

      <Footer />
    </>
  );
};

export default Main;
