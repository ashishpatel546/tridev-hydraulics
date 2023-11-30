import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import styles from "./product.module.css";
import data from "@/app/productData/equipmentData.json";
import Image from "next/image";

const Product = () => {

  return (
    <div className={styles.container}>
      <Header />
      <Navigation />

      <div className={styles.product_container}>

        {data ? data.map(item => (
            <div className={styles.product}>
                <div className={styles.product_image_box}>
                    <Image
                    className={styles.product__image}
                    height={220}
                    width={300}
                    alt=""
                    src={`/${item.id}.jpg`}
                    />
                </div>
                <div className={styles.card_content}>
                    <h1 className={styles.product__title}>{item.name}</h1>
                    <hr className={styles.hr} />
                    <p className={styles.product__content}>
                    {item.additionalInfo}
                    </p>
                </div>
              </div>
            )
        ) : (
            <div>No Content</div>
        )}
      </div>

      <Footer />
    </div>
  );
};
export default Product;
