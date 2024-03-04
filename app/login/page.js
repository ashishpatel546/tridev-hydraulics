"use client";

import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notify from "../utils/toastNotify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  addAdminLoggedIn,
  addAdminToken,
} from "../features/adminAction/adminActionSlice";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const { username, password } = loginData;
    if (!username || !password) {
      Notify("Please enter email and password", "warn");
      return;
    }

    const payload = {
      name: username,
      password,
    };

    try {
      const response = await fetch("/api/adminLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.status === 200) {
        dispatch(addAdminLoggedIn({ isAdminLoggedIn: true }));
        dispatch(addAdminToken({ token: data.token }));
        Notify(data.message, "success");
        sessionStorage.setItem("token", data.token);
        router.push("/");
      } else {
        Notify(data.message, "warn");
      }
    } catch (error) {
      Notify("Failed to updated data", "error");
      setIsEditModal(false);
    }
  };

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

          console.log("res", response);

          if (response.status === 200) {
            const data = await response.json();
            let decoded = data.data.payload;
            let msg = data.message;
            if (msg === "Token verification successfull") {
              dispatch(addAdminLoggedIn({ isAdminLoggedIn: true }));
              dispatch(addAdminToken({ token: token }));
              router.push("/");
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

  return (
    <div className={styles.login_page}>
      <div className={styles.square}>
        <div className={styles.login}>
          <h2>Login</h2>
          <div className={styles.inputBx}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={loginData.username}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className={styles.inputBx}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className={styles.inputBx}>
            <input
              type="submit"
              value="Sign in"
              onClick={() => handleLogin()}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
