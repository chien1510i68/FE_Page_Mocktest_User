import React, { useContext, useState } from "react";
import AuthContext from "../../../../../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Drawer, Space, Table } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-components";
import EditDisplay from "../../../../AddEdit/EditDisplayManager/EditDisplay";
import DetailDisplay from "../../../../Details/DetailDisplay/DetailDisplay";

function AcademicEnglish(props) {
  const state = useContext(AuthContext);
  const [currentData, setCurrentData] = useState({});
  const [openModal, setOpenModal] = useState();
  const [openDrawer, setOpenDrawer] = useState();

  const navigate = useNavigate();

  const dataAcademicEnglish = state?.state?.listAcademicEnglish;

  const columns = [
    {
      title: "Tiêu đề ",
      dataIndex: "title",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (imageURL) => (
        <img
          src={imageURL}
          alt={imageURL}
          style={{ width: "90px", height: "90px" }}
        />
      ),
    },

    {
      title: "Vị trí ảnh",
      dataIndex: "location",
    },
    {
      title: "Loại",
      dataIndex: "type",
    },

    {
      title: "Action",
      key: "action",
      render: (e, record, idx) => (
        <Space>
          <Button
            className="update"
            icon={<EditOutlined />}
            onClick={() => {
              setCurrentData(record);
              setOpenModal(true);
            }}
          ></Button>
          <Button
            className="detail"
            icon={<SolutionOutlined />}
            onClick={() => {
              setOpenDrawer(true);
              navigate(
                `/adminpage/displayAcademicEnglish/detaildisplayAcademicEnglish/${record.id}`
              );
            }}
          ></Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <PageContainer
        title="Anh ngữ học thuật"
        extra={[
          <Space>
            <Button
              onClick={() => {
                navigate("/adminpage/displayprogram");
              }}
            >
              Quay lại
            </Button>
          </Space>,
        ]}
      >
        <EditDisplay
          onSuccess={() => {
            // dataAcademicEnglish
            setOpenModal(false);
          }}
          openModal={openModal}
          onOpenChange={(open) => {
            if (!open) {
              setOpenModal(false);
              setCurrentData({});
            }
          }}
          data={currentData}
        />
        <Drawer
          title="Thông tin chi tiết "
          width={500}
          open={openDrawer}
          onClose={() => {
            setOpenDrawer(false);
          }}
        >
          <DetailDisplay />
        </Drawer>
        <Table
          columns={columns}
          dataSource={dataAcademicEnglish}
          pagination={{ pageSize: 5 }}
          scroll={{
            y: 390,
          }}
        />
      </PageContainer>
    </div>
  );
}

export default AcademicEnglish;
