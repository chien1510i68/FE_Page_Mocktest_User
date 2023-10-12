import React, { useState } from "react";
import {
  ProForm,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormText,
} from "@ant-design/pro-components";
import { Button, Form, Input, DatePicker } from "antd";
import { filterUser } from "../../Services/lead";
import moment from "moment";
import TextArea from "antd/es/input/TextArea";
const { RangePicker } = DatePicker;

function FilterUser({ onSearch, hide }) {
  const handleFilterUser = (values) => {
    console.log("values ", values);
    onSearch(values);
    hide();
  };

  return (
    <>
      {/* <h1 className="mt-0 font-semibold text-3xl mb-2 ">Lọc</h1> */}

      <ProForm
        submitter={false}
        onFinish={handleFilterUser}
        onReset={(e) => {
          console.log(e);
        }}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="name"
            label="Tên người dùng"
            placeholder="Tên người dùng"
          />
          <ProFormText
            width="md"
            name="username"
            label="Username"
            placeholder="Username"
          />
        </ProForm.Group>
        <h2>Lọc theo ngày tạo - cập nhật: </h2>
        <ProForm.Group>
          <ProFormDatePicker
            label="Ngày bắt đầu"
            width="md"
            name="dateFrom"
            fieldProps={{
              format: "DD/MM/YYYY",
              transform: (value) => moment(value).format("DD/MM/YYYY"),
              onChange: () => {},
            }}
          />
          <ProFormDatePicker
            label="Ngày kết thúc"
            width="md"
            name="dateTo"
            fieldProps={{
              format: "DD/MM/YYYY",
              transform: (value) => moment(value).format("DD/MM/YYYY"),
              onChange: () => {},
            }}
          />
        </ProForm.Group>
        <p>Lọc theo ngày sinh: </p>
        <ProForm.Group>
          <ProFormDatePicker
            width="md"
            name="dobFrom"
            label="Ngày bắt đầu"
            placeholder="Ngày bắt đầu"
            fieldProps={{
              format: "DD/MM/YYYY",
              transform: (value) => moment(value).format("DD/MM/YYYY"),
            }}
          />
          <ProFormDatePicker
            width="md"
            name="dobTo"
            label="Ngày kết thúc"
            placeholder="Ngày kết thúc"
            fieldProps={{
              format: "DD/MM/YYYY",
              transform: (value) => moment(value).format("DD/MM/YYYY"),
            }}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width="md"
            name="phone"
            label="Số điện thoại "
            placeholder="Số điện thoại "
          />
          <ProFormText
            width="md"
            name="email"
            label="E-mail "
            placeholder="E-mail "
          />
        </ProForm.Group>
        <ProFormText
          width="md"
          name="address"
          label="Địa chỉ "
          placeholder="Địa chỉ "
        />
        <Form.Item>
          <Button
            // className="bg-white text-black ml-1.5"
            style={{ border: "1px solid #d9d9d9" }}
            type="primary"
            htmlType="submit"
          >
            Lọc
          </Button>{" "}
          <Button
            style={{
              border: "1px solid #d9d9d9",
              backgroundColor: "#fff",
              color: "black",
            }}
            type="primary"
            onClick={hide}
          >
            Hủy
          </Button>{" "}
        </Form.Item>
      </ProForm>
    </>
  );
}

export default FilterUser;
