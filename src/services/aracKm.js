import axios from 'axios';

import { getBearerToken, servicesControls } from '../components/helper.jsx';

const apiUrl = process.env.SOME_IMPORTANT_API_URL;
const controller = '/carkm/';

// http://localhost:8082/api/inventory/addmaterial

export const addVehicle = (CreateData) =>
  axios({
    method: 'POST',
    url: `${apiUrl + controller}vehicle/add`,
    data: { ...CreateData },
    // headers: {
    //   Authorization: getBearerToken(),
    // },
  })
    .then((response) => servicesControls(response))
    .catch((err) => servicesControls(err.message, true));

export const updateVehicle = (updateData, id) =>
  axios({
    method: 'PUT',
    url: `${apiUrl + controller}vehicleupdate/${id}`,
    data: { ...updateData },
    // headers: {
    //   Authorization: getBearerToken(),
    // },
  })
    .then((response) => servicesControls(response))
    .catch((err) => servicesControls(err.message, true));

export const getallvehicles = () =>
  axios({
    method: 'GET',
    url: `${apiUrl + controller}getallvehicles`,
    // headers: {
    //   Authorization: getBearerToken(),
    // },
  })
    .then((response) => servicesControls(response))
    .catch((err) => servicesControls(err.message, true));

export const vehicleDelete = (vehicleId) =>
  axios({
    method: 'DEL',
    url: `${apiUrl + controller}vehicledelete/${vehicleId}`,
    // headers: {
    //   Authorization: getBearerToken(),
    // },
  })
    .then((response) => servicesControls(response))
    .catch((err) => servicesControls(err.message, true));

export const getByVehicleIdKm = (vehicleId) =>
  axios({
    method: 'GET',
    url: `${apiUrl + controller}/vehicle/${vehicleId}`,
    // headers: {
    //   Authorization: getBearerToken(),
    // },
  })
    .then((response) => servicesControls(response))
    .catch((err) => servicesControls(err.message, true));

export const addVehicleKm = (CreateData) =>
  axios({
    method: 'POST',
    url: `${apiUrl + controller}vehicle/addkm`,
    data: { ...CreateData },
    // headers: {
    //   Authorization: getBearerToken(),
    // },
  })
    .then((response) => servicesControls(response))
    .catch((err) => servicesControls(err.message, true));

export const updateVehicleKm = (updateData, id) =>
  axios({
    method: 'PUT',
    url: `${apiUrl + controller}updatekm/${id}`,
    data: { ...updateData },
    // headers: {
    //   Authorization: getBearerToken(),
    // },
  })
    .then((response) => servicesControls(response))
    .catch((err) => servicesControls(err.message, true));
