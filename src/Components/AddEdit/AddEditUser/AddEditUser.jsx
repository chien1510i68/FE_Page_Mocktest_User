/* eslint-disable no-lone-blocks */
import {
  ModalForm,
  ProForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
} from "@ant-design/pro-components";
import React, { useEffect, useState } from "react";
import {
  createUser,
  getAllRole,
  getListService,
  updateUser,
} from "../../../Services/lead";
import { message } from "antd";
import "../modal.css";
import moment from "moment";

function AddEditUser({ onSuccess, openModal, data, onOpenChange }) {
  const [dataRole, setDataRole] = useState([]);
  const [dataService, setDataService] = useState([]);
  const [switchValue, setSwitchValue] = useState(false);

  const handleGetRole = () => {
    getAllRole().then((res) => {
      const role = res?.data?.data?.items;
      const options = role.map((e) => {
        return {
          label: e.name,
          value: e.roleId,
        };
      });
      setDataRole(options);
    });
  };

  const handleGetService = () => {
    getListService().then((res) => {
      const service = res?.data?.data.items;
      const options = service.map((e) => {
        return {
          label: e.name,
          value: e.id,
        };
      });
      setDataService(options);
    });
  };

  // Hàm tạo người dùng
  const handleCreatUser = (values) => {
    createUser(values).then((res) => {
      if (res?.data?.success === true) {
        message.success("Tạo người dùng thành công");
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

  // Hàm cập nhật người dùng
  const handleUpdateUser = (values) => {
    updateUser(data.userId, values).then((res) => {
      if (res?.data?.success === true) {
        message.success("Cập nhật người dùng thành công");
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

  useEffect(() => {
    handleGetRole();
    handleGetService();
  }, []);

  return (
    <>
      <ModalForm
        title={
          data?.userId
            ? "Chỉnh sửa thông tin người dùng"
            : "Thêm người dùng mới"
        }
        initialValues={data}
        modalProps={{
          destroyOnClose: true,
        }}
        open={openModal}
        onFinish={async (values) => {
          if (data?.userId) {
            handleUpdateUser(values);
          } else {
            handleCreatUser(values);
          }
        }}
        onOpenChange={onOpenChange}
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
          <ProFormText
            width="md"
            name="password"
            label="Mật khẩu"
            placeholder="Mật khẩu"
          />
          <ProFormDatePicker
            width="md"
            name="dateOfBirth"
            label="Ngày sinh"
            placeholder="Ngày sinh"
            fieldProps={{
              format: "DD/MM/YYYY",
              transform: (value) => moment(value).format("DD/MM/YYYY"),
            }}
          />
          <ProFormText
            width="md"
            name="phone"
            label="Số điện thoại"
            placeholder="Số điện thoại"
          />
          <ProFormText
            width="md"
            name="email"
            label="E-mail"
            placeholder="E-mail"
          />
          <ProFormText
            width="md"
            name="address"
            label="Địa chỉ"
            placeholder="Địa chỉ"
          />
          <ProFormText
            width="md"
            name="avatar"
            label="Avatar"
            placeholder="Avatar"
          />
          <ProFormSelect
            width="md"
            name="roleId"
            initialValue={data?.userId ? data?.role?.name : ""}
            options={dataRole}
            label="Mã vai trò"
            placeholder="Mã vai trò"
          />
          <ProFormSelect
            width="md"
            name="services"
            // initialValue={data?.userId ? dataService : ""}
            mode="multiple"
            options={dataService}
            label="Dịch vụ"
            placeholder="Dịch vụ "
          />
          <ProFormSwitch
            name="isVerified"
            label="Xác thực Email"
            fieldProps={{
              onChange: (checked) => {
                setSwitchValue(checked);
              },
            }}
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
}

export default AddEditUser;
