import { ConfigProvider, Modal } from 'antd';
import React from 'react';
// import { Provider } from 'react-redux';
import TR from 'antd/es/locale/tr_TR';

export const generatedModal = ({ title, content, width, maskClosable }) => {
  const Component = content;
  const modal = Modal.info();
  modal.update({
    title,
    content: (
      <ConfigProvider
        locale={TR}
        // theme={{
        //   algorithm: theme.compactAlgorithm,
        // }}
      >
        <Component.type {...Component.props} modal={modal} />
      </ConfigProvider>
    ),
    icon: <div />,
    width,
    className: 'generatedModal',
    footer: '',
    closable: true,
    centered: true,
    maskClosable: true,
    modal,
    onCancel: () => modal.destroy(),
  });
};
