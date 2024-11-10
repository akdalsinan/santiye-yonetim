import {
  BellOutlined,
  MoonFilled,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Flex, Input, Layout } from 'antd';
import React from 'react';

const items = [
  {
    label: <a href="#">Üyelik Bilgilerim</a>,
    key: '0',
  },
  {
    label: <a href="#">Destek Al</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'Çıkış Yap',
    key: '3',
  },
];

export const Header = () => {
  return (
    <>
      <Layout.Header className="head">
        <Flex justify="end" align="center" horizontal="true">
          {/* <h2 className="head-title">Teklif Content</h2> */}
          <Flex
            className="head-flex"
            justify="flex-end"
            align="center"
            horizontal="true"
            gap="small"
          >
            <Input
              className="head-flex-search"
              type="text"
              placeholder="Hızlı Arama"
              variant="borderless"
              prefix={<SearchOutlined className="head-flex-search icon" />}
            />
            <Button
              className="head-flex-button"
              type="text"
              shape="circle"
              icon={<BellOutlined />}
            ></Button>
            <Button
              className="head-flex-button"
              type="text"
              shape="circle"
              icon={<MoonFilled />}
            ></Button>
            <Dropdown
              placement="bottomRight"
              menu={{
                items,
              }}
              overlayStyle={{ marginTop: 10 }}
              trigger={['click']}
            >
              <Button shape="circle" className="head-flex-dropdown-button">
                {/* <Avatar size={32} src="/assets/img/foto-120.png" /> */}
                <Avatar size={32} icon={<UserOutlined />} />
              </Button>
            </Dropdown>
          </Flex>
        </Flex>
      </Layout.Header>
    </>
  );
};
