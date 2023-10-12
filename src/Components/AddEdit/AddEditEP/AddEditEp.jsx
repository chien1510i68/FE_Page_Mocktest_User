/* eslint-disable no-lone-blocks */
import {
  ModalForm,
  ProForm,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  ProFormUploadButton,
} from "@ant-design/pro-components";
import React, { useRef, useState } from "react";
import Editor from "../../CKEditor/Editor";
import { createService, updateService } from "../../../Services/lead";
import { message } from "antd";

function AddEditEp({ onSuccess, openModal, data, onOpenChange }) {
  const [content, setContent] = useState("");
  const formRef = useRef(null);

  const handleCreateEP = (values) => {
    createService(values).then((res) => {
      if (res?.data?.success === true) {
        message.success("Tạo chương trình thành công");
        onSuccess();
      }
      // else if (res?.data?.error?.statusCode === 2) {
      //   {
      //     res?.data?.error?.errorDetailList.map((e) =>
      //       message.error(e.message)
      //     );
      //   }
      // }
    });
  };
  const handleUpdateEP = (values) => {
    updateService(data?.id, values).then((res) => {
      if (res?.data?.success === true) {
        message.success("Cập nhật tin tức thành công");
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
        title={
          data?.id
            ? "Chỉnh sửa thông tin chương trình học"
            : "Thêm khóa học mới"
        }
        initialValues={data}
        modalProps={{
          destroyOnClose: true,
        }}
        open={openModal}
        onFinish={(values) => {
          if (data?.id) {
            handleUpdateEP(values);
          } else {
            handleCreateEP(values);
          }
        }}
        onOpenChange={onOpenChange}
        formRef={formRef}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="name"
            label="Tên chương trình"
            placeholder="Tên chương trình"
            rules={[
              { require: true, message: "Tên chương trình không để trống" },
            ]}
          />
          <ProFormText
            width="md"
            name="description"
            label="Mô tả"
            placeholder="Mô tả "
          />
          <ProFormSelect
            width="md"
            name="detailDescription"
            label="Mô tả chi tiết "
            placeholder="Mô tả chi tiết "
            mode="tags"
          />
          <ProFormSelect
            width="md"
            name="curriculum"
            label="Chương trình giảng dạy "
            placeholder="Chương trình giảng dạy "
            mode="tags"
          />
          <ProFormText
            width="md"
            name="studyGoals"
            label="Mục tiêu  "
            placeholder=" Mục tiêu"
          />
          <ProFormText
            width="md"
            name="schedule"
            label="Lịch học  "
            placeholder=" Lịch học"
            rules={[{ require: true, message: "Lịch học không để trống" }]}
          />
          <ProFormText
            width="md"
            name="numberTeachingSessions"
            label="Số buổi học "
            placeholder="Số buổi học"
          />
          <ProFormSelect
            width="md"
            name="learnOnlineOrOffline"
            label="Hình thức học"
            options={[
              { label: "Học online", value: "ONLINE" },
              { label: "Học offline", value: "OFFLINE" },
              { label: "Cả 2", value: "ONLINE_AND_OFFLINE" },
            ]}
            placeholder="Hình thức học"
          />
          <ProFormText
            width="md"
            name="learningForm"
            label="Hình thức học"
            placeholder="Hình thức học"
          />
          <ProFormDigit
            width="md"
            name="coursePrice"
            label="Chi phí"
            placeholder="Chi phí"
          />
          <ProFormText
            width="md"
            name="requestStudents"
            label="Yêu cầu học viên"
            placeholder="Yêu cầu học viên"
          />
          <ProFormSelect
            width="md"
            name="typeOfService"
            options={[
              { label: "Chương trình học", value: "EDUCATION_PROGRAM" },
              { label: "Khóa học", value: "COURSE" },
              { label: " Không có dịch vụ nào", value: "NO_SERVICE" },
            ]}
            label="Loại dịch vụ"
            placeholder="Loại dịch vụ"
          />
          <ProFormUploadButton
            name="image"
            label="Upload Ảnh"
            title="Click to upload"
          />
          <ProForm.Item
            width="md"
            name="content"
            label="Nội dung của tin tức"
            placeholder="Nội dung của tin tức"
          >
            <Editor
              initialValues={content}
              onChange={(event, editor) => {
                formRef?.current?.setFieldsValue({
                  content: editor.getData(),
                });
              }}
            />
          </ProForm.Item>
        </ProForm.Group>
      </ModalForm>
    </>
  );
}

export default AddEditEp;
