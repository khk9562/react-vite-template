// import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Header from "@/components/layouts/Header/Header";
import axios from "axios";

const FormPage = () => {
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const getData = (e) => {
    e.preventDefault();
    axios
      .post("url", data, {
        "Content-type": "application/json",
        Accept: "application/json",
      })
      .then(function (res) {
        // 성공 핸들링
        console.log(res.data);
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log("getData 실행 data:", data);
        console.log(error);
      })
      .then(function () {
        // 항상 실행되는 영역
      });
  };

  return (
    <>
      <Header title="폼" />
      <form className="form" onSubmit={getData}>
        <label name="test1">테스트1</label>
        <input
          type="text"
          name="test1"
          className="input"
          autoComplete="off"
          value={data.test1 || ""}
          onChange={handleInputChange}
        />

        <label name="test2">테스트2</label>
        <input
          type="text"
          name="test2"
          className="input"
          autoComplete="off"
          value={data.test2 || ""}
          onChange={handleInputChange}
        />

        <Button asChild>
          <input type="submit" value="제출" />
        </Button>
      </form>
    </>
  );
};

export default FormPage;
