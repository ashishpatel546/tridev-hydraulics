import Link from "next/link";
import styles from "./home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const Main = () => {
  return (
    <>
      <Header />
      <div className={styles.new_conatiner}>
        <div className={styles.skewed}>
          <div className={styles.text}>
            <small className={styles.text_small}>Welcome to</small>
            <h1 className={styles.text_h1}>Tridev Hydraulics Pvt. Limited</h1>
            <p className={styles.text_p}>
              Discover Tridev Hydraulics Pvt. Ltd., your trusted partner for
              premium hydraulic solutions. With a relentless pursuit of
              excellence, we manufacture high-quality parts for hydraulic
              machines, including Hydra cranes, forklifts, truck-mounted cranes,
              and tractor attachments. Our precision-engineered products ensure
              unparalleled performance and reliability, setting new industry
              benchmarks. From front loaders to excavators, experience superior
              quality and service with Tridev Hydraulics. Elevate your hydraulic
              machinery experience today!
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
                src="/ai-generated-8553973_1920.jpg"
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
                src="/machine-1631451_1920.jpg"
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
              (Gurgaon), our manufacturing facilities exemplify precision and
              advanced technology.
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
                diverse industries. At Tridev Hydraulics, innovation is at the
                heart of everything we do. From Hydra cranes to forklifts,
                truck-mounted cranes to tractor attachments, we cater to your
                every need with cutting-edge solutions. Our extensive product
                range includes front loaders, backhoe loaders, sky lift cranes,
                hook loaders, and more. Experience the difference with Tridev
                Hydraulics. Our commitment to quality, performance, and customer
                satisfaction sets us apart. Explore our website to discover our
                comprehensive range of products and services. Join us in
                revolutionizing the hydraulic machinery industry. Unlock the
                power of precision with Tridev Hydraulics today!
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
                (Gurgaon). Established in 2022, our plant epitomizes precision
                and advanced hydraulic technology. Specializing in Hydraulic
                Cylinders, advanced Hydraulic Systems, Aircraft Hydraulic
                Service Trolleys, we set new industry benchmarks. Our ISO
                9001:2015 certification reflects our unwavering commitment to
                high-quality standards. The plant, staffed with skilled
                professionals, is equipped with modern facilities. Quality
                analysts ensure that each product meets our standards of
                excellence. Tridev Hydraulics is dedicated to delivering
                top-notch hydraulic solutions, aligning with the dynamic needs
                of modern industries. Our Manufacturing Plant stands as a
                testament to our continual pursuit of excellence in hydraulic
                technology.
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
                technology company; we are pioneers committed to excellence. Our
                journey, established in 2022, has been about redefining industry
                standards. we continually redefine industry standards, setting
                new benchmarks for hydraulic performance and efficiency. Trust
                Tridev Hydraulics for cutting-edge solutions that power your
                success.
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
