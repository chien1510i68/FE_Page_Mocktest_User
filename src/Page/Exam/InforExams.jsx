import { Button, Collapse, Input, Space, Table, Tag } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CollapseExam from "../MockTest/CollapseExam";





function InforExams(props) {
  const navigate = useNavigate();
 
  const handleSearchExam = (e) => {
    console.log(e.target.value);
  };
 
  return (
    <div className="px-[5%] bg-white">
      <h2
        className="cursor-pointer ml-5  hover:text-teal-600 font-medium"
        onClick={() => navigate("/adminpage/mocktest")}
      >
        Quay lại{" "}
      </h2>
      <div className="grid grid-cols-2 gap-12 mt-10 mb-20">
      
        <Button
          className="uppercase col-span-1 font-medium text-white bg-teal-400 mr-[1%]"
          onClick={() => navigate("/adminpage/contest")}
        >
          Tạo bài thi mới{" "}
        </Button>
        <Input
          placeholder="Nhập vào tên bài thi "
          onChange={(e) => handleSearchExam(e)}
        />
      </div>
      <CollapseExam/>
     
    </div>
  );
}

export default InforExams;
