import React from 'react';
import { Card } from 'antd';
import './style.scss';

// Türkçe Karşılıkları
const translationMap = {
  fullName: 'Adı Soyadı',
  userNo: 'Kullanıcı No',
  identityNumber: 'Kimlik No',
  birthDate: 'Doğum Tarihi',
  phoneNumber: 'Telefon Numarası',
  eMail: 'E-mail',
  occupation: 'Meslek',
  adress: 'Adres',
};

const InfoPerson = ({ data }) => {
  const userData = data.length > 0 ? data[0].user : [];
  console.log('userData', userData);

  return (
    <Card className="user-data-card" title="Kullanıcı Bilgileri">
      <table className="user-data-table">
        <tbody>
          {Object.entries(userData).map(([key, value], index) => (
            <tr key={index}>
              <th key={index}>{translationMap[key] || key}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default InfoPerson;
