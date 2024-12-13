import React from 'react';

import errorHandler from './ErrorHandler';

import openNotification from './Notification';

// export const getBearerToken = () => {
//   return `${sessionStorage.getItem(`${appName}_access_token`)}`;
// };

export const servicesControls = (response, error, post) => {
  if (error === true) {
    errorHandler(response);

    return { isSuccess: false };
  } else {
    const { isSuccess, resultMessage, resultMes, errorCode } = response.data;

    if (isSuccess === true) {
      if (post === true) {
        openNotification('success', resultMessage[0]);
      }

      return response.data;
    } else {
      if (resultMessage != undefined) {
        errorHandler(resultMessage[0], errorCode);
      } else {
        errorHandler(resultMes, errorCode);
      }

      return [];
    }
  }
};

//gelen datayı value label olacak şekilde format edildi
export const mapToOptions = (array, valueKey, labelKey) => {
  return array.map((item, index) => ({
    value: item[valueKey],
    label: item[labelKey],
    key: index,
  }));
};

// fonksiyonu birden fazla kullandığımız için helper yaptım
export const handleMultiSelectChange = (
  values,
  setSelected,
  options,
  selected
) => {
  if (values.includes('all')) {
    if (selected.length === options.length) {
      // Tümünü kaldır
      setSelected([]);
    } else {
      // Tümünü seç
      setSelected(options.map((option) => option.value));
    }
  } else {
    // Bireysel seçim
    setSelected(values);
  }
};
