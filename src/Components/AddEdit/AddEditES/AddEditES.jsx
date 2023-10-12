/* eslint-disable no-lone-blocks */
import {
  ModalForm,
  ProForm,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import React from "react";
import { createES, updateES } from "../../../Services/lead";
import { message } from "antd";
function AddEditES({ onSuccess, openModal, data, onOpenChange }) {
  const handleCreatES = (values) => {
    createES(values).then((res) => {
      if (res?.data?.success === true) {
        message.success("Tạo lịch thi thành công");
        onSuccess();
      }
      // else if (res?.data?.error?.statusCode === 2) {
      //   {
      //     res?.data?.error?.errorDetailList.map((e) => {
      //       message.error(e.message);
      //     });
      //   }
      // }
    });
  };
  const handleUpdateES = (values) => {
    updateES(data.id, values).then((res) => {
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
        title={data?.id ? "Chỉnh sửa thông tin lịch thi" : "Thêm lịch thi mới"}
        initialValues={data}
        modalProps={{
          destroyOnClose: true,
        }}
        open={openModal}
        onFinish={(values) => {
          if (data?.id) {
            handleUpdateES(values);
          } else {
            handleCreatES(values);
          }
        }}
        onOpenChange={onOpenChange}
      >
        <ProForm.Group>
          <ProFormSelect
            width="md"
            name="areaId"
            label="Mã khu vực"
            placeholder="Mã khu vực"
            valueEnum={{
              0: "BAC",
              1: "TRUNG",
              2: "NAM",
            }}
          />
          <ProFormText
            width="md"
            name="nameArea"
            label="Tên khu vực"
            placeholder="Tên khu vực"
          />
          <ProFormText
            width="md"
            name="nameExamSchool"
            label="Tên trường tổ chức thi"
            placeholder="Tên trường tổ chức thi"
          />
          <ProFormText
            width="md"
            name="schoolId"
            label="Mã trường học"
            placeholder="Mã trường học"
          />
          <ProFormText
            width="md"
            name="examTime"
            label="Thời gian thi"
            placeholder="Thời gian thi"
          />
          <ProFormText
            width="md"
            name="registrationTerm"
            label="Hạn đăng ký"
            placeholder="Hạn đăng ký"
          />
          <ProFormText
            width="md"
            name="examMethod"
            label="Hình thức thi"
            placeholder="Hình thức thi"
          />
          <ProFormText
            width="md"
            name="examinationObject"
            label="Đối tượng dự thi"
            placeholder="Đối tượng dự thi"
          />
          <ProFormSelect
            mode="tags"
            width="md"
            name="examinationFee"
            label="Lệ phí dự thi"
            placeholder="Lệ phí dự thi"
          />
          <ProFormSelect
            mode="tags"
            width="md"
            name="examRegistrationRecords"
            label="Hồ sơ đăng ký"
            placeholder="Hồ sơ đăng ký"
          />
          <ProFormText
            width="md"
            name="certificationTime"
            label="Thời gian nhận chứng chỉ"
            placeholder="Thời gian nhận chứng chỉ"
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
}

export default AddEditES;
