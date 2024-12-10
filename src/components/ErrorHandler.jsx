import openNotification from './Notification';

const errorHandler = (error, code) => {
  if (code === null) {
    if (typeof error === 'string') {
      openNotification('error', error);
    }
  } else if (code === 'SC02') {
    openNotification('error', error);
    setTimeout(() => {
      openNotification('error', `4sn Sonra Çıkış Yapılacak`);
    }, 1000);
    setTimeout(() => {
      window.location = `${process.env.SOME_IMPORTANT_LOGOUT_REDIRECT_URI}/#/logout`;
    }, 4000);
  } else if (code === 'SC12') {
    openNotification('error', error);
    setTimeout(() => {
      openNotification('error', `4sn Sonra Çıkış Yapılacak`);
    }, 1000);
    setTimeout(() => {
      window.location = `${process.env.SOME_IMPORTANT_LOGOUT_REDIRECT_URI}/#/logout`;
    }, 4000);
  } else if (code === 'SC05') {
    openNotification('error', error);
    setTimeout(() => {
      openNotification('error', `4sn Sonra Çıkış Yapılacak`);
    }, 1000);
    setTimeout(() => {
      window.location = `${process.env.SOME_IMPORTANT_LOGOUT_REDIRECT_URI}/#/logout`;
    }, 4000);
  } else {
    openNotification('error', error);
  }
};
export default errorHandler;
