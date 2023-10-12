import {
  CloseOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  FilterOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Input, Modal, Popover, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { PageContainer } from "@ant-design/pro-components";
import { useNavigate } from "react-router-dom";
import FilterUser from "../../../FormFilter/FilterUser";
import { utils, writeFileXLSX } from "xlsx";
import {
  delAllUser,
  deleteUser,
  filterCustomer,
  getListUser,
} from "../../../../Services/lead";
import AddEditUser from "../../../AddEdit/AddEditUser/AddEditUser";
import DetailUser from "../../../Details/DetailUser/DetailUser";

function TableCustomer(props) {
  const [loading, setLoading] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const [searchData, setSearchData] = useState();
  const [openDrawer, setOpenDrawer] = useState();
  const [clicked, setClicked] = useState(false);
  const [openModal, setOpenModal] = useState();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { confirm } = Modal;

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const showhowConfirm = () => {
    confirm({
      title: "Xoá người dùng ",
      content:
        "Việc này sẽ xóa người dùng được chọn. Bạn có chắc chắn muốn xóa?",
      onOk: handleDeleteAll,
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const hide = () => {
    setClicked(false);
  };

  const handleClick = (open) => {
    setClicked(open);
  };

  const handleGetCustomer = () => {
    getListUser().then((res) => {
      setData(res.data?.data?.items);
    });
  };

  const dataCustomer = data.filter(
    (customer) => customer?.role?.roleId === "CUSTOMER"
  );

  const renameColumn = dataCustomer.map((item) => ({
    "Tên khách hàng": item.name,
    "Tên đăng nhập": item.username,
    "Số điện thoại": item.phone,
    Email: item.email,
    "Địa chỉ": item.address,
    "Ngày tạo": item.createdDate,
    "Ngày cập nhật": item.updateDate,
  }));

  const hanldeExportFile = () => {
    const ws = utils.json_to_sheet(renameColumn);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Khách hàng");
    writeFileXLSX(wb, "Danh sách khách hàng.xlsx");
  };

  // Hàm xóa từng người dùng
  const handleDelete = (userId) => {
    deleteUser(userId).then((res) => {
      if (res.status === 200) {
        handleGetCustomer();
      }
    });
  };

  // Khi select sẽ hiện thị chọn bao nhiêu
  const hasSelected = selectedRowKeys.length > 0;
  const handleDeleteAll = () => {
    delAllUser(selectedRowKeys)
      .then((res) => {
        if (res?.data?.success === true) {
          handleGetCustomer();
          setSelectedRowKeys([]);
        }
      })
      .catch((error) => {
        console.error("Lỗi xóa người dùng", error);
      });
  };

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  const handleSearchCustomer = (values) => {
    filterCustomer({
      username: values,
      name: values,
    }).then((res) => {
      if (res.status === 200) {
        setData(res?.data?.data?.items);
      }
    });
  };

  // Hàm lọc
  const handleFilter = (values) => {
    console.log("values:: ", values);
    filterCustomer(values).then((res) => {
      console.log("res", res);
      if (res?.status === 200) {
        setData(res?.data?.data?.items);
      }
    });
  };

  useEffect(() => {
    handleGetCustomer();
    setLoading(false);
  }, []);

  const columns = [
    {
      title: "Tên người dùng ",
      dataIndex: "name",
    },
    {
      title: "Tên đăng nhập",
      dataIndex: "username",
    },

    {
      title: "Số điện thoại",
      dataIndex: "phone",
    },

    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Vai trò",
      dataIndex: ["role", "name"],
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
            className="delete"
            icon={<DeleteOutlined />}
            onClick={() => {
              handleDelete(record.userId);
            }}
          ></Button>
          <Button
            className="detail"
            icon={<SolutionOutlined />}
            onClick={() => {
              console.log("drawer");
              setOpenDrawer(true);
              navigate(`/adminpage/customer/detailcustomer/${record.userId}`);
            }}
          ></Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <PageContainer
        title="Tất cả khách hàng"
        extra={[
          <Space>
            <Input.Search
              placeholder="Nhập tên người dùng"
              onChange={handleSearch}
              value={searchData}
              onSearch={(values) => {
                handleSearchCustomer(values);
              }}
            />
            <Popover
              content={
                <FilterUser
                  onSearch={(values) => {
                    handleFilter(values);
                  }}
                  hide={hide}
                />
              }
              trigger="click"
              open={clicked}
              onOpenChange={handleClick}
            >
              <Button className="border-1677ff text-1677ff">
                <FilterOutlined />
                Lọc
              </Button>
            </Popover>
            <Button
              icon={<DownloadOutlined />}
              onClick={hanldeExportFile}
              className="border-1677ff text-1677ff"
            >
              Export Excel
            </Button>
          </Space>,
        ]}
      >
        <AddEditUser
          onSuccess={() => {
            handleGetCustomer();
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
          title="Thông tin chi tiết khách hàng"
          width={550}
          open={openDrawer}
          onClose={() => {
            setOpenDrawer(false);
          }}
        >
          <DetailUser />
        </Drawer>

        <Table
          rowKey={"userId"}
          columns={columns}
          dataSource={dataCustomer}
          size="middle"
          rowSelection={rowSelection}
          pagination={{
            pageSize: 8,
          }}
          scroll={{
            y: 413,
          }}
          x
          loading={loading}
        />
        <div
          className="absolute bottom-6"
          style={{ display: hasSelected ? "block" : "none" }}
        >
          <>Đã chọn {selectedRowKeys.length}</>
          <Button
            className="bg-white ml-2.5 py-1 px-2.5"
            onClick={() => {
              showhowConfirm();
            }}
            disabled={selectedRowKeys.length === 0}
          >
            <CloseOutlined />
            Xoá
          </Button>
        </div>
      </PageContainer>
    </div>
  );
}

export default TableCustomer;
