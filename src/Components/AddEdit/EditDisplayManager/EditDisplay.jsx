/* eslint-disable no-lone-blocks */
import {
  ModalForm,
  ProForm,
  ProFormSelect,
  ProFormText,
  ProFormUploadButton,
} from "@ant-design/pro-components";
import { updateDisplay } from "../../../Services/lead";
import { message } from "antd";

function EditDisplay({ onSuccess, openModal, data, onOpenChange }) {
  const handleUpdateDisplay = (values) => {
    updateDisplay(data?.id, values).then((res) => {
      if (res?.data?.success) {
        message.success("Cập nhật hiển thị thành công");
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
        title="Chỉnh sửa"
        initialValues={data}
        modalProps={{
          destroyOnClose: true,
        }}
        open={openModal}
        onFinish={async (values) => {
          handleUpdateDisplay(values);
        }}
        onOpenChange={onOpenChange}
      >
        <ProFormText name="title" label="Tiêu đề" placeholder="Tiêu đề" />
        <ProFormText name="description" label="Mô tả" placeholder="Mô tả" />

        <ProFormText
          name="location"
          label="Vị trí ảnh"
          placeholder="Vị trí ảnh"
        />
        <ProFormSelect
          name="type"
          label="Loại"
          placeholder="Loại"
          valueEnum={{
            0: "BANNER",
            1: "APTIS",
            2: "VSTEP",
            3: "IELTS",
            4: "PAGES",
            5: "HOME",
          }}
        />
        {/* <ProFormUploadButton title="Click to upload" label="Upload ảnh" /> */}
        <ProFormText name="image" />
      </ModalForm>
    </>
  );
}

export default EditDisplay;
