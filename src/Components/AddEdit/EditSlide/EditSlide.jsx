/* eslint-disable no-lone-blocks */
import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormUploadButton,
} from "@ant-design/pro-components";
import { Button, Form, Input, Upload, message, notification } from "antd";
import React, { useRef, useState } from "react";
import {
  createNews,
  updateNews,
  updateSlide,
  uploadFile,
} from "../../../Services/lead";
import Editor from "../../CKEditor/Editor";
import { UploadOutlined } from "@ant-design/icons";

function EditSlide({ onSuccess, openModal, data, onOpenChange }) {
  // Hàm cập nhật khách hàng
  const handleUpdateSlide = (values) => {
    updateSlide(data?.id, values).then((res) => {
      if (res?.data?.success === true) {
        message.success("Cập nhật Slide thành công");
        onSuccess();
      } else if (res?.data?.error?.statusCode === 2) {
        {
          res?.data?.error?.errorDetailList.map((e) =>
            message.error(e.message)
          );
        }
      }
    });
  };

  return (
    <>
      <ModalForm
        title="Chỉnh sửa Slide"
        initialValues={data}
        modalProps={{
          destroyOnClose: true,
        }}
        open={openModal}
        onFinish={async (values) => {
          handleUpdateSlide(values);
        }}
        onOpenChange={onOpenChange}
      >
        <ProForm.Group>
          {/* <ProFormUploadButton
            name="image"
            label="Upload Ảnh"
            // title="Click to upload"
            // action="https://acd2-118-70-132-104.ngrok-free.app/file/upload"
          /> */}
          <ProFormUploadButton label="Upload Ảnh" title="Click to upload" />
          <ProFormText
            width="md"
            name="location"
            label="Vị trí ảnh"
            placeholder="Vị trí ảnh"
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
}

export default EditSlide;
