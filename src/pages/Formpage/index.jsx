// import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const FormPage = () => {
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <form className="form">
      <label name="test1">테스트1</label>
      <input
        type="text"
        name="test1"
        className="input"
        value={data.test1 || ""}
        onChange={handleInputChange}
      />

      <label name="test2">테스트2</label>
      <input
        type="text"
        name="test2"
        className="input"
        value={data.test2 || ""}
        onChange={handleInputChange}
      />

      <Button asChild>
        <input type="submit" value="제출" />
      </Button>
    </form>
  );
};

export default FormPage;
