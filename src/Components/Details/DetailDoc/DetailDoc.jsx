import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getInforDocument } from "../../../Services/lead";
import { Descriptions, Image } from "antd";
function DetailDoc(props) {
  const location = useLocation();
  const [dataDoc, setDataDoc] = useState();
  const docInfor = location.pathname.split("/");
  const idPath = docInfor[docInfor.length - 1];

  const handleGetInforDoc = async (idPath) => {
    getInforDocument(idPath).then((res) => {
      if (res?.status === 200) {
        setDataDoc(res?.data?.data);
      }
    });
  };

  useEffect(() => {
    handleGetInforDoc(idPath);
  }, [idPath]);

  return (
    <>
      <Descriptions layout="vertical">
        <Descriptions.Item label="Id">{dataDoc?.id}</Descriptions.Item>
        <Descriptions.Item label="Tên tài liệu" span={2}>
          {dataDoc?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Ảnh tài liệu" span={4}>
          <Image src={dataDoc?.image} />
        </Descriptions.Item>
        <Descriptions.Item label="File tài liệu" span={4}>
          {dataDoc?.file}
        </Descriptions.Item>

        <Descriptions.Item label="Trạng thái tài liệu" span={2}>
          {dataDoc?.status}
        </Descriptions.Item>
        <Descriptions.Item label="Ngày tạo" span={2}>
          {dataDoc?.createdDate}
        </Descriptions.Item>
        <Descriptions.Item label="Ngày cập nhật" span={4}>
          {dataDoc?.updateDate}
        </Descriptions.Item>
        <Descriptions.Item label="Nội tài liệu" span={2}>
          {dataDoc?.content}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
}

export default DetailDoc;
