import axios from 'axios';

import { getBearerToken, servicesControls } from '../components/helper.jsx';

const apiUrl = process.env.SOME_IMPORTANT_API_URL;
const controller = '/inventory/';

// http://localhost:8082/api/inventory/addmaterial

export const addmaterial = (CreateData) =>
  axios({
    method: 'POST',
    url: `${apiUrl + controller}addmaterial`,
    data: { ...CreateData },
    // headers: {
    //   Authorization: getBearerToken(),
    // },
  })
    .then((response) => servicesControls(response))
    .catch((err) => servicesControls(err.message, true));

export const updatematerial = (updateData, id) =>
  axios({
    method: 'PUT',
    url: `${apiUrl + controller}updatematerial/${id}`,
    data: { ...updateData },
    // headers: {
    //   Authorization: getBearerToken(),
    // },
  })
    .then((response) => servicesControls(response))
    .catch((err) => servicesControls(err.message, true));

export const getallinv = () =>
  axios({
    method: 'GET',
    url: `${apiUrl + controller}getallinv`,
    // headers: {
    //   Authorization: getBearerToken(),
    // },
  })
    .then((response) => servicesControls(response))
    .catch((err) => servicesControls(err.message, true));

export const deleteOnlemeBilgiNotuProfil = (bilgiNotuId) =>
  axios({
    method: 'POST',
    url: `${apiUrl + controller}deleteOnlemeBilgiNotuProfil/${bilgiNotuId}`,
    // headers: {
    //   Authorization: getBearerToken(),
    // },
  })
    .then((response) => servicesControls(response))
    .catch((err) => servicesControls(err.message, true));
