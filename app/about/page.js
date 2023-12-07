import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import styles from "./about.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content_container}>
        <div className={styles.content_image_container}>
          <Image
            alt="Your Alt Text"
            src="/1.jpg"
            className={styles.content_image}
            layout="responsive"
            height={300}
            width={600}
          />
        </div>
        <div className={styles.about_content_section}>
          <div className={styles.main_content}>
            <span className={styles.main_heading}>Tridev Company</span>
            <div className={styles.main_sub_heading}>
              <p className={styles.spilt_content}>
                Tridev Hydraulics Pvt. Limited, a pioneering force in hydraulic
                technology, specializes in crafting top-tier solutions for
                diverse industries. Established in 1990, our commitment to
                excellence is unwavering. From Hydraulic Cylinders to
                cutting-edge Hydraulic Systems, Aircraft Hydraulic Service
                Trolleys, and innovative Car Parking Solutions, we redefine
                industry standards.
              </p>
            </div>

            <div className={styles.body_content}>
              <div className={styles.body_content_image}>
                <Image
                  className={styles.body_content_image}
                  src="/2.jpg"
                  height={80}
                  width={130}
                  layout="responsive"
                />
                <Image
                  className={styles.body_content_image}
                  src="/3.jpg"
                  height={60}
                  width={100}
                  layout="responsive"
                />
                <Image
                  className={styles.body_content_image}
                  src="/4.jpg"
                  height={60}
                  width={100}
                  layout="responsive"
                />
              </div>

              <div className={styles.body_content_info}>
                <p className={styles.body_sub_heading}>
                  Tridev Hydraulics stands as a beacon of excellence in the
                  realm of hydraulic systems, showcasing a commitment to
                  precision engineering and innovative solutions. With a
                  steadfast dedication to quality, Tridev Hydraulics has emerged
                  as a trusted name in the industry, providing cutting-edge
                  hydraulic equipment tailored to meet diverse industrial needs.
                  </p>
                  <p className={styles.body_sub_heading}>Our range of products encompasses state-of-the-art hydraulic
                  components and systems designed to optimize performance and
                  efficiency. Tridev Hydraulics places paramount importance on
                  reliability, ensuring that each product meets stringent
                  quality standards. As a customer-centric organization, we
                  prioritize understanding and addressing the unique
                  requirements of our clients, delivering solutions that surpass
                  expectations.</p>
                  
                  <p className={styles.body_sub_heading}>Committed to upholding the highest industry
                  standards, Tridev Hydraulics proudly adheres to ISO 9001:2015
                  for quality management systems and ISO 14001:2015 for
                  environmental management. These ISO certifications underscore
                  our unwavering dedication to delivering hydraulic solutions
                  that not only meet but exceed international benchmarks.
                  </p>
                  <p className={styles.body_sub_heading}>Experience the difference with Tridev Hydraulics, where
                  precision meets power, and reliability meets innovation. Join
                  us on the forefront of hydraulic technology, where our
                  expertise transforms challenges into opportunities, propelling
                  industries toward seamless and efficient operations.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.aside_content}>
            <div class={styles.card}>
              <h2 class={styles.card_heading}>About US</h2>
              <ul>
                <li className={styles.card_item}>Company</li>
                <li className={styles.card_item}>Management</li>
                <li className={styles.card_item}>History</li>
                <li className={styles.card_item}>Next Plans</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
