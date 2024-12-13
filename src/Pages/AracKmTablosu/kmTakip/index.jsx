import React, { useState } from 'react';
import { getallvehicles, getByVehicleIdKm } from '../../../services/aracKm';
import { mapToOptions } from '../../../components/helper';
import { Button, Popconfirm, Select, Table } from 'antd';
import { generatedModal } from '../../../components/functions';
import AracKmEkleForm from './aracKmEkleForm';

function Index() {
  const [vehicleOption, setVehicleOption] = useState([]);
  const [selectedPlaka, setSelectedPlaka] = useState('');
  const [tableData, setTableData] = useState('');

  // const getOptionVehicle = () => {
  // getallvehicles().then((response) => {
  //   const { isSuccess, resultMessage, resultSet } = response;
  //   if (isSuccess && resultSet !== undefined) {
  //     const data = mapToOptions(resultSet, 'id', 'plaka');
  //     setVehicleOption(data);
  //   }
  // });
  // };

  // useEffect(() => {
  //   getOptionVehicle();
  // }, []);

  const labelValueArray = [
    { label: 'Plaka 1', value: 1 },
    { label: 'Plaka 2', value: 2 },
    { label: 'Plaka 3', value: 3 },
  ];

  const onChangeSelect = (value) => {
    setSelectedPlaka(value);
    // getByVehicleIdKm(value).then((response) => {
    //   const { isSuccess, resultMessage, resultSet } = response;
    //   if (isSuccess && resultSet !== undefined) {
    //     setTableData(resultSet);
    //   }
    // });
  };
  const columns = [
    {
      title: 'Tarih',
      dataIndex: 'carDate',
      key: 'carDate',
      render: (text) => new Date(text).toLocaleDateString(), // Tarih formatlama
    },
    {
      title: 'Başlangıç KM',
      dataIndex: 'startingKm',
      key: 'startingKm',
    },
    {
      title: 'Bitiş KM',
      dataIndex: 'endingKm',
      key: 'endingKm',
    },
    {
      title: 'Vehicle ID',
      dataIndex: ['vehicle', 'id'], // Nesne içindeki id alanı
      key: 'vehicleId',
    },
    {
      title: 'İşlem',
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => showModal(record)}>
            Güncelle
          </Button>
          <Popconfirm
            title="Silmek İstediğinize Emin misiniz?"
            onConfirm={
              () => console.log('recsord.id', record.id)
              // vehicleDelete(record.id).then((response) => {
              //   const { isSuccess, resultSet } = response;
              //   if (isSuccess && resultSet !== undefined) {
              //     getData();
              //   }
              // })
            }
            okText="Evet"
            cancelText="Hayır"
          >
            <Button type="link" danger>
              Sil
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const dataSource = [
    {
      id: 1,
      carDate: '2024-12-10',
      startingKm: 100.5,
      endingKm: 150.0,
      vehicle: {
        id: 3,
      },
    },
    {
      id: 2,
      carDate: '2024-11-25',
      startingKm: 200.5,
      endingKm: 250.0,
      vehicle: {
        id: 4,
      },
    },
    {
      id: 3,
      carDate: '2024-12-01',
      startingKm: 300.0,
      endingKm: 350.0,
      vehicle: {
        id: 5,
      },
    },
  ];

  const showModal = (selectedRow) => {
    generatedModal({
      title:
        selectedRow !== undefined
          ? `${selectedRow.vehicle.id} nolu araç km Güncelle`
          : 'araç km Ekle ',
      content: <AracKmEkleForm selectedRow={selectedRow} />,
      width: '30%',
    });
  };

  return (
    <div>
      <Select
        onChange={onChangeSelect}
        placeholder="Select a plaka"
        options={labelValueArray}
      />
      {selectedPlaka !== '' && (
        <>
          <Button onClick={() => showModal()}> Km Ekle </Button>{' '}
          <Table
            //  dataSource={tableData}
            dataSource={dataSource}
            columns={columns}
          />
        </>
      )}
    </div>
  );
}

export default Index;
