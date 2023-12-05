import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import styles from "./career.module.css";

const CompanyOverview = () => (
  <section className={styles.section}>
    <h2 className={styles.section_name}>Company Overview</h2>
    <div className={styles.content_container}>
      <p className={`${styles.section_item_list} ${styles.overview_content}`}>
        Tridev Hydraulics Pvt. Limited, established in 1990, stands as a
        trailblazer in hydraulic technology. With a steadfast commitment to
        excellence, we specialize in crafting top-tier solutions for a wide
        range of industries. Our expertise extends from Hydraulic Cylinders to
        cutting-edge Hydraulic Systems, Aircraft Hydraulic Service Trolleys, and
        innovative Car Parking Solutions. At Tridev Hydraulics, we redefine
        industry standards, leveraging precision and advanced technology at our
        manufacturing facilities strategically located in IMT Manesar (Gurgaon)
        and Bangalore. We take pride in delivering quality, innovation, and
        reliability, ensuring that our clients benefit from state-of-the-art
        hydraulic solutions tailored to meet the demands of modern industries.
      </p>
    </div>
  </section>
);

const CompanyBenefits = () => (
  <section className={styles.section}>
    <h2 className={styles.section_name}>Company Benefits</h2>
    <div className={styles.content_container}>
      <p className={styles.section_item_list}>
        At Tridev Hydraulics, we recognize that our employees are our greatest
        assets. As part of our commitment to their well-being, we offer a
        comprehensive range of benefits, including:
      </p>
      <span className={styles.section_item_list}>
        <Image
          className={styles.check_icon}
          src="/check_04.png"
          height={12}
          width={12}
        />
        Professional development opportunities
      </span>
      <span className={styles.section_item_list}>
        <Image
          className={styles.check_icon}
          src="/check_04.png"
          height={12}
          width={12}
        />
        Collaborative and inclusive work environment
      </span>
      <span className={styles.section_item_list}>
        <Image
          className={styles.check_icon}
          src="/check_04.png"
          height={12}
          width={12}
        />
        Employee recognition programs
      </span>
      <span className={styles.section_item_list}>
        <Image
          className={styles.check_icon}
          src="/check_04.png"
          height={12}
          width={12}
        />
        Health insurance coverage
      </span>
    </div>
  </section>
);

const CultureAndWorkEnvironment = () => (
  <section className={styles.section}>
    <h2 className={styles.section_name}>Culture and Work Environment</h2>
    <div className={styles.content_container}>
      <p className={styles.section_item_list}>
        Our workplace culture at Tridev Hydraulics is built on the principles of
        collaboration, innovation, and mutual respect. We foster an environment
        where creativity thrives, and each team member is encouraged to
        contribute ideas and solutions. Regular team-building activities,
        events, and a focus on work-life balance contribute to a positive and
        vibrant work atmosphere. We believe in diversity and inclusion,
        recognizing the unique strengths each individual brings to our dynamic
        team.
      </p>
      <span className={styles.section_item_list}>
        <Image
          className={styles.check_icon}
          src="/check_04.png"
          height={12}
          width={12}
        />
        Collaboration and Innovation
      </span>
      <span className={styles.section_item_list}>
        <Image
          className={styles.check_icon}
          src="/check_04.png"
          height={12}
          width={12}
        />
        Team-building and Events
      </span>
      <span className={styles.section_item_list}>
        <Image
          className={styles.check_icon}
          src="/check_04.png"
          height={12}
          width={12}
        />
        Diversity and Inclusion
      </span>
    </div>
  </section>
);

const CompanyValuesAndMission = () => (
  <section className={styles.section}>
    <h2 className={styles.section_name}>Company Values and Mission</h2>
    <div className={styles.content_container}>
      <p className={styles.section_item_list}>
        Tridev Hydraulics is guided by a set of core values that define our
        identity and drive our mission. Our values include:
      </p>

      <span className={styles.section_item_list}>
        <Image
          className={styles.check_icon}
          src="/check_04.png"
          height={12}
          width={12}
        />
        Excellence: Striving for the highest standards in everything we do.
      </span>
      <span className={styles.section_item_list}>
        <Image
          className={styles.check_icon}
          src="/check_04.png"
          height={12}
          width={12}
        />
        Innovation: Embracing creativity and forward-thinking solutions.
      </span>
      <span className={styles.section_item_list}>
        <Image
          className={styles.check_icon}
          src="/check_04.png"
          height={12}
          width={12}
        />
        Reliability: Building trust through consistent and dependable
        performance.
      </span>
      <span className={styles.section_item_list}>
        <Image
          className={styles.check_icon}
          src="/check_04.png"
          height={12}
          width={12}
        />
        Customer Focus: Understanding and exceeding the needs of our clients.
      </span>
      <span className={styles.section_item_list}>
        <Image
          className={styles.check_icon}
          src="/check_04.png"
          height={12}
          width={12}
        />
        Integrity: Conducting business with honesty and ethical practices.
      </span>

      <p className={styles.section_item_list}>
        Our mission is to continue being a pioneering force in hydraulic
        technology, providing cutting-edge solutions that redefine industry
        standards and empower our clients' success.
      </p>
    </div>
  </section>
);

const CareerDevelopmentOpportunities = () => (
  <section className={styles.section}>
    <h2 className={styles.section_name}>Career Development Opportunities</h2>
    <div className={styles.content_container}>
      <p className={styles.section_item_list}>
        At Tridev Hydraulics, we believe in investing in the growth and
        development of our employees. Our commitment to career development is
        reflected in:
      </p>

      <span className={styles.section_item_list}>
        <Image
          className={styles.check_icon}
          src="/check_04.png"
          height={12}
          width={12}
        />
        Ongoing training programs
      </span>
      <span className={styles.section_item_list}>Mentorship initiatives</span>
      <span className={styles.section_item_list}>
        <Image
          className={styles.check_icon}
          src="/check_04.png"
          height={12}
          width={12}
        />
        Opportunities for advancement
      </span>
      <span className={styles.section_item_list}>
        <Image
          className={styles.check_icon}
          src="/check_04.png"
          height={12}
          width={12}
        />
        Access to the latest technologies and industry trends
      </span>

      <p className={styles.section_item_list}>
        We encourage our team members to explore their full potential, providing
        the resources and support needed to shape a rewarding and successful
        career path within the company.
      </p>
    </div>
  </section>
);

const Career = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      <div className={styles.carrer_info_container}>
        <CompanyOverview />
        <CompanyBenefits />
        <CultureAndWorkEnvironment />
        <CompanyValuesAndMission />
        <CareerDevelopmentOpportunities />
      </div>

      <Footer />
    </div>
  );
};

export default Career;
