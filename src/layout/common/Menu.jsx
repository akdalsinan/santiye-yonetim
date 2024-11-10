import { Menu } from 'antd';
import React from 'react';

import {
  AppstoreOutlined,
  AreaChartOutlined,
  CarOutlined,
  DesktopOutlined,
  ForwardOutlined,
  FundOutlined,
  HomeOutlined,
  InboxOutlined,
  InfoCircleOutlined,
  QuestionCircleFilled,
  RadarChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function Menus({ menuItems }) {
  // Menu İcon List
  const iconMapping = {
    AppstoreOutlined: <AppstoreOutlined />,
    homeOutlined: <HomeOutlined />,
    userOutlined: <UserOutlined />,
    questionCircleFilled: <QuestionCircleFilled />,
    ForwardOutlined: <ForwardOutlined />,
    CarOutlined: <CarOutlined />,
    AreaChartOutlined: <AreaChartOutlined />,
    RadarChartOutlined: <RadarChartOutlined />,
    InboxOutlined: <InboxOutlined />,
    InfoCircleOutlined: <InfoCircleOutlined />,
    DesktopOutlined: <DesktopOutlined />,
    FundOutlined: <FundOutlined />,
  };

  // Dynamic Generate Menu
  const generateMenuItems = (menuItems) => {
    return menuItems.map((item) => {
      if (item.children && item.children.length > 0) {
        return {
          key: item.path,
          icon: iconMapping[item.icon],
          label: item.name,
          children: generateMenuItems(item.children), // SubMenu
        };
      }

      return {
        key: item.path,
        icon: iconMapping[item.icon],
        label: <Link to={item.path}>{item.name}</Link>,
      };
    });
  };

  return (
    <Menu
      theme="light"
      mode="inline"
      className="Menu"
      inlineIndent={20}
      items={generateMenuItems(menuItems)}
    />
  );
}
