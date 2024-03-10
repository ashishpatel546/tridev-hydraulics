"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./product.module.css";
import data from "@/app/productData/equipmentData.json";
import Image from "next/image";
import { Button, Col, Input, Modal, Row, message, Upload } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notify from "../utils/toastNotify";
import { InboxOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addAdminLoggedIn,
  addAdminToken,
} from "../features/adminAction/adminActionSlice";

const { Dragger } = Upload;

const { TextArea } = Input;

const Product = () => {
  const adminData = useSelector((state) => state.adminReducer.admin);
  const dispatch = useDispatch();
  const [isEditModal, setIsEditModal] = useState(false);
  const [edidData, setEditData] = useState({});
  const [file, setFile] = useState();
  const [fileImageData, setFileImageData] = useState();
  const [fileList, setFileList] = useState();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const fetchData = async () => {
          const response = await fetch("/api/verifyToken", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.status === 200) {
            const data = await response.json();
            let msg = data.message;
            if (msg === "Token verification successfull") {
              dispatch(addAdminLoggedIn({ isAdminLoggedIn: true }));
              dispatch(addAdminToken({ token: token }));
            }
          } else {
            const errorData = await response.json();
            Notify(errorData.message, "warn");
          }
        };

        fetchData();
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }, []);

  const handleChange = (e) => {
    setFileImageData(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const handleDataUpdate = async () => {
    const formData = new FormData();
    formData.append("id", edidData.id);
    formData.append("name", edidData.name);
    formData.append("additionalInfo", edidData.additionalInfo);
    formData.append("file", fileList);
    const updatedProductData = {
      id: edidData.id,
      name: edidData.name,
      // img: edidData.img,
      additionalInfo: edidData.additionalInfo,
    };
    if (!updatedProductData.name || !updatedProductData.additionalInfo) {
      Notify("Please enter valid values", "warn");
      return;
    }

    try {
      const response = await fetch("/api/updateProduct", {
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data",
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminData.jwtToken}`,
        },
        // body: JSON.stringify(updatedProductData)
        body: JSON.stringify(updatedProductData),
      });

      const data = await response.json();

      if (response.status === 200) {
        Notify("Data updated sucessfully", "success");
      } else if (response.status === 401) {
        Notify("Please login again", "warn");
      } else {
        Notify(data.message, "warn");
      }

      setIsEditModal(false);
    } catch (error) {
      console.error("Error:", error);
      Notify("Failed to updated data", "error");
      setIsEditModal(false);
    }
  };

  const handleProductDataChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleAddNewProduct = (e) => {
    e.preventDefault();
    setIsEditModal(true);
  };

  const handleEditClick = (e, item) => {
    e.preventDefault();
    setEditData(item);
    setFile(`/${item.id}.jpg`);
    setIsEditModal(true);
  };
  const handleImageCancel = (e) => {
    e.preventDefault();
    setFile();
    setFileImageData();
  };

  const handleCancel = () => {
    setEditData({});
    setFile();
    setFileImageData();
    setIsEditModal(false);
  };
  const handleOk = () => {
    handleDataUpdate();
  };

  const uploadProps = {
    name: "file",
    multiple: false,
    // listType: "picture",
    maxCount: 1,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    listType: "picture-card",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        setFileList(info.file);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const onPreview = async (file) => {
    setPreviewOpen(true);
    let src = file.url;
    let name = file.name;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    setPreviewTitle(name);
    setPreviewImage(src);
  };
  const hadlePreviewCancel = () => {
    setPreviewOpen(false);
  };

  return (
    <div className={styles.container}>
      <Header />
      <ToastContainer />
      {false && (
        <div className={styles.add_new_product}>
          <Button
            type="primary"
            size="default"
            onClick={(e) => handleAddNewProduct(e)}
          >
            Add new product
          </Button>
        </div>
      )}
      <div className={styles.product_container}>
        {data ? (
          data.map((item) => (
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
                <div className={styles.product__title}>
                  <span>{item.name}</span>
                  {adminData.isAdminLoggedIn && (
                    <Button
                      type="primary"
                      size="default"
                      className={styles.product_edit_btn}
                      onClick={(e) => handleEditClick(e, item)}
                    >
                      Edit
                    </Button>
                  )}
                </div>
                <hr className={styles.hr} />
                <p className={styles.product__content}>{item.additionalInfo}</p>
              </div>
            </div>
          ))
        ) : (
          <div>No Content</div>
        )}
      </div>

      <Modal
        title={<h2>Product</h2>}
        open={isEditModal}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
      >
        <Row gutter={24} className={styles.modal_row}>
          <Col span={6}>
            <label className={styles.product_add_label}>Product Name :</label>
          </Col>
          <Col span={18}>
            <Input
              placeholder="Enter product name"
              name="name"
              value={edidData.name}
              maxLength={40}
              showCount
              onChange={(e) => handleProductDataChange(e)}
              required
            />
          </Col>
        </Row>
        <Row gutter={24} className={styles.modal_row}>
          <Col span={6}>
            <label className={styles.product_add_label}>
              Product Description :
            </label>
          </Col>
          <Col span={18}>
            <TextArea
              rows={4}
              placeholder="Enter product name"
              name="additionalInfo"
              value={edidData.additionalInfo}
              showCount
              label="Product Name"
              onChange={(e) => handleProductDataChange(e)}
              maxLength={300}
              aria-required
            />
          </Col>
        </Row>
        {/* <Row gutter={24} className={styles.modal_row}>
          <Col span={6}>
            <label className={styles.product_add_label}>Upload image :</label>
          </Col>
          <Col span={18}>
            <Dragger {...uploadProps} onPreview={onPreview}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
          </Col>
        </Row> */}

        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={hadlePreviewCancel}
        >
          <img
            src={previewImage}
            className={styles.modal_preview_img}
            alt="preview"
          />
        </Modal>
      </Modal>

      <Footer />
    </div>
  );
};
export default Product;
