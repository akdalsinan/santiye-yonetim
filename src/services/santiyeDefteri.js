import axios from 'axios';

import { getBearerToken, servicesControls } from '../components/helper.jsx';

const apiUrl = process.env.SOME_IMPORTANT_API_URL;
const controller = '/notebook/';

// http://localhost:8082/api/inventory/addmaterial

export const addNote = (CreateData) =>
  axios({
    method: 'POST',
    url: `${apiUrl + controller}add`,
    data: { ...CreateData },
    // headers: {
    //   Authorization: getBearerToken(),
    // },
  })
    .then((response) => servicesControls(response))
    .catch((err) => servicesControls(err.message, true));

export const updateNote = (updateData, id) =>
  axios({
    method: 'PUT',
    url: `${apiUrl + controller}update/${id}`,
    data: { ...updateData },
    // headers: {
    //   Authorization: getBearerToken(),
    // },
  })
    .then((response) => servicesControls(response))
    .catch((err) => servicesControls(err.message, true));

export const getallNotes = () =>
  axios({
    method: 'GET',
    url: `${apiUrl + controller}getall`,
    // headers: {
    //   Authorization: getBearerToken(),
    // },
  })
    .then((response) => servicesControls(response))
    .catch((err) => servicesControls(err.message, true));
