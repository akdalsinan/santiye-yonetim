import React, { useState } from 'react';
import { Layout } from 'antd';
import Menus from '../common/Menu';

export default function Sidebar({ menuItems }) {
  const [collapsedData, setCollapsedData] = useState(false);

  return (
    <>
      <Layout.Sider
        breakpoint="lg"
        className="sider"
        theme="light"
        onCollapse={(v) => setCollapsedData(v)}
      >
        {collapsedData ? (
          <h3 className="sider-logo-text">T</h3>
        ) : (
          <h3 className="sider-logo-text">Şantiye Yönetim</h3>
        )}

        <Menus menuItems={menuItems} />
      </Layout.Sider>
    </>
  );
}
