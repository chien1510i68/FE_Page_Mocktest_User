/* eslint-disable no-lone-blocks */
import {
  ModalForm,
  ProForm,
  ProFormSelect,
  ProFormText,
  ProFormUploadButton,
} from "@ant-design/pro-components";
import React from "react";
import { createDocument, updateDocument } from "../../../Services/lead";
import { message } from "antd";

function AddEditDocument({ onSuccess, openModal, data, onOpenChange }) {
  const handleCreatDocument = (values) => {
    createDocument(values).then((res) => {
      if (res?.data?.success === true) {
        message.success("Tạo Tài liệu thành công");
        onSuccess();
      } else if (res?.data?.error?.statusCode === 2) {
        {
          res?.data?.error?.errorDetailList.map((e) => {
            message.error(e.message);
          });
        }
      }
    });
  };

  const handleUpdateDocument = (values) => {
    updateDocument(data.id, values).then((res) => {
      if (res?.data?.success === true) {
        message.success("Cập nhật thành công");
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
        title={data?.id ? "Chỉnh sửa thông tin tài liệu" : "Thêm tài liệu mới"}
        initialValues={data}
        modalProps={{
          destroyOnClose: true,
        }}
        open={openModal}
        onFinish={async (values) => {
          if (data?.id) {
            handleUpdateDocument(values);
          } else {
            handleCreatDocument(values);
          }
        }}
        onOpenChange={onOpenChange}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="name"
            label="Tên tài liệu"
            placeholder="Tên tài liệu"
          />
          <ProFormText
            width="md"
            name="content"
            label="Nội dung"
            placeholder="Nội dung"
          />
          <ProFormSelect
            width="md"
            name="status"
            valueEnum={{
              0: "FREE",
              1: "NO_FREE",
            }}
            label="Trạng thái"
            placeholder="Trạng thái"
          />
          <ProFormUploadButton
            width="md"
            name="file"
            label="Upload file"
            title="Click to upload file"
          />
          <ProFormUploadButton
            width="md"
            name="image"
            label="Upload ảnh"
            title="Click to upload ảnh"
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
}

export default AddEditDocument;
