"use client";

import React from "react";
import styles from "./carousel.module.css";
import Image from "next/image";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


const AutoplaySlider = withAutoplay(AwesomeSlider);

const CarousleComponent = () => {

  return (
    <AutoplaySlider
      className={styles.carouselContainer}
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={3000}
      bullets={true}
      animation="foldOutAnimation"
    >
        <div className={styles.container_item}>
            <div className={styles.item_section}>
                <Image height={300} width={600} src='/21.jpg' className={styles.item_image} />
                <div className={styles.item_content_box}>
                    Content
                </div>
            </div>
        </div>
        <div className={styles.container_item}>
            <div className={styles.item_section}>
                <Image height={300} width={600} src='/42.jpg' className={styles.item_image} />
                <div className={styles.item_content_box}>
                    Content
                </div>
            </div>
        </div>
        <div className={styles.container_item}>
            <div className={styles.item_section}>
                <Image height={300} width={600} src='/6.jpg' className={styles.item_image} />
                <div className={styles.item_content_box}>
                    Content
                </div>
            </div>
        </div>
        <div className={styles.container_item}>
            <div className={styles.item_section}>
                <Image height={300} width={600} src='/23.jpg' className={styles.item_image} />
                <div className={styles.item_content_box}>
                    Content
                </div>
            </div>
        </div>
    </AutoplaySlider>
  );
};

export default CarousleComponent;
