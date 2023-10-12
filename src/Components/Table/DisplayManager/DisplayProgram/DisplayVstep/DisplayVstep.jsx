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

function DisplayVstep(props) {
  const state = useContext(AuthContext);
  const [currentData, setCurrentData] = useState({});
  const [openModal, setOpenModal] = useState();
  const [openDrawer, setOpenDrawer] = useState();

  const navigate = useNavigate();

  const dataVstep = state?.state?.listVstep;

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
                `/adminpage/displayVstep/detaildisplayVstep/${record.id}`
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
        title="VSTEP"
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
          dataSource={dataVstep}
          pagination={{ pageSize: 5 }}
          scroll={{
            y: 390,
          }}
        />
      </PageContainer>
    </div>
  );
}

export default DisplayVstep;
