import React from 'react';
import { ConfigProvider, Layout } from 'antd';
/* config antdesign dayjs settings*/
import TR from 'antd/es/locale/tr_TR';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';
dayjs.locale('tr');
/* Auth Routes */
import { Outlet } from 'react-router';

/* layout sections */
import Sidebar from './global/Sidebar';
import Footer from './global/Footer';

const { Content } = Layout;

/* index styles */
import './styles/index.scss';
import { Header } from './global/Header';
function MainLayout({ menuItems }) {
  return (
    <ConfigProvider locale={TR}>
      <Layout className="main-layout">
        <Sidebar menuItems={menuItems} />
        <Layout>
          <Header />
          <Content className="content">
            <Outlet />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
export default MainLayout;
