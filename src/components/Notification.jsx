import { notification } from 'antd';
const openNotification = (type, description) => {
  notification[type]({
    message: description,
    placement: 'bottomRight',
    bottom: '25px',
  });
};
export default openNotification;
