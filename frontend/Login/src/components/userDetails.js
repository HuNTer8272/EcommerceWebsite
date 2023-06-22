import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHome from "./adminHome";
import UserHome from "./userHome";

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:5000/userData", {
        token: window.localStorage.getItem("token"),
      })
      .then((response) => {
        console.log(response.data, "userData");
        const data = response.data.data;

        if (data.userType === "Admin") {
          setAdmin(true);
        }

        setUserData(data);

        if (data === "token expired") {
          alert("Token expired. Please log in again.");
          window.localStorage.clear();
          window.location.href = "./sign-in";
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return admin ? <AdminHome /> : <UserHome userData={userData} />;
}
