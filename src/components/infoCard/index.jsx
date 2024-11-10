import React from 'react';
import './style.scss';

const InfoCard = ({ data }) => {
  const carData = data.length > 0 ? data[0]?.car : [];
  return (
    <>
      <table className="car-info-table">
        <thead>
          <tr>
            <td>Plaka</td>
            <td>Marka</td>
            <td>Model</td>
            <td>Yılı</td>
            <td>Araç Türü</td>
            <td>Kullanım Türü</td>
            <td>Şasi No</td>
            <td>Motor No</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{carData.plateNo}</td>
            <td>{carData.brand}</td>
            <td>{carData.model}</td>
            <td>{carData.modelYear}</td>
            <td>{carData.carType}</td>
            <td>{carData.usageType}</td>
            <td>{carData.chassisNo}</td>
            <td>{carData.engineNo}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default InfoCard;
