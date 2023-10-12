import {
  DeleteOutlined,
  EditOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Space, Table } from "antd";
import React, { useContext, useState } from "react";
import AuthContext from "../../../../../AuthContext/AuthContext";
import { PageContainer } from "@ant-design/pro-components";
import { useNavigate } from "react-router-dom";
import EditDisplay from "../../../../AddEdit/EditDisplayManager/EditDisplay";
import DetailDisplay from "../../../../Details/DetailDisplay/DetailDisplay";

function DisplayBanner(props) {
  const state = useContext(AuthContext);
  const [currentData, setCurrentData] = useState({});
  const [openModal, setOpenModal] = useState();
  const [openDrawer, setOpenDrawer] = useState();

  const navigate = useNavigate();

  const dataBanner = state?.state?.listBanner;

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
                `/adminpage/displayBanner/detaildisplayBanner/${record.id}`
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
        title="Banner"
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
            // handleGetBanner();
            setOpenModal(false);
            // return dataBanner, setOpenModal(false);
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
          dataSource={dataBanner}
          pagination={{ pageSize: 5 }}
          scroll={{
            y: 390,
          }}
        />
      </PageContainer>
    </div>
  );
}

export default DisplayBanner;
