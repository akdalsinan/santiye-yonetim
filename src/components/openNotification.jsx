import { notification } from 'antd';

const openNotification = (type, description) => {
  if (type) {
    notification[type]({
      message: description,
      placement: 'topRight',
      showProgress: true,
    });
  }
};
export default openNotification;
