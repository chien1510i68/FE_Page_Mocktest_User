import { Layout } from "antd";
import React from "react";
import HeaderEtest from "../../Layouts/Header/Header";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";
const { Header, Content, Sider } = Layout;

function PageETest(props) {
  return (
    <Layout className="h-[]">
      <Sider width={250}>
        <Sidebar className="leading-[200px] bg-slate-500 h-auto" />
      </Sider>
      <Layout>
        <Header className="bg-1677FF1A">
          <HeaderEtest />
        </Header>
        <Content className="bg-1677FF1A">
          <Outlet />
        </Content>
        {/* <Footer className="bg-1677FF1A "></Footer> */}
      </Layout>
    </Layout>
  );
}

export default PageETest;
