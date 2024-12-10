import { Button, Modal, Space, Table } from 'antd';
import React, { useState, useEffect } from 'react';
import EnvanterEkleModal from './envanterEkleModal';
import { generatedModal } from '../../../components/functions';

function EnvanterDetay({ selectedMalzeme }) {
  useEffect(() => {
    console.log('selectedMalzeme', selectedMalzeme);

    //selectedMalzeme İD DEĞERİNE GÖRE ENVANTER DETAY GELECEK
    // useEffect(() => {}, [selectedMalzeme]);
  }, [selectedMalzeme]);

  const columns = [
    {
      title: 'Geliş Tarihi',
      dataIndex: 'gelisTarihi',
      key: 'gelisTarihi',
    },
    {
      title: 'Malzemenin Adı',
      dataIndex: 'malzemeAdi',
      key: 'malzemeAdi',
    },
    {
      title: 'Birim Değeri (KG)',
      dataIndex: 'birimDegeri',
      key: 'birimDegeri',
    },
    {
      title: 'Gelen Miktar',
      dataIndex: 'gelenMiktar',
      key: 'gelenMiktar',
    },
    {
      title: 'Toplam Miktar',
      dataIndex: 'toplamMiktar',
      key: 'toplamMiktar',
    },
    {
      title: 'Birimi',
      dataIndex: 'birimi',
      key: 'birimi',
    },
    {
      title: 'İrsaliye',
      dataIndex: 'irsaliye',
      key: 'irsaliye',
    },
    {
      title: 'Not',
      dataIndex: 'not',
      key: 'not',
    },
    {
      title: 'Aksiyon',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => showModal(record)}>
            Güncelle
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record)}>
            Sil
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      gelisTarihi: '2 10 2024',
      malzemeAdi: 'HAZIR SIVA',
      birimDegeri: 25,
      gelenMiktar: 1080,
      toplamMiktar: 27000,
      birimi: 'KG',
      irsaliye: 'PDF & JPG',
      not: '2 PALET MALZEME DEFOLU GELDİ',
    },
    {
      key: '2',
      gelisTarihi: '2 10 2024',
      malzemeAdi: 'HAZIR SIVA',
      birimDegeri: 25,
      gelenMiktar: 1080,
      toplamMiktar: 27000,
      birimi: 'KG',
      irsaliye: 'PDF & JPG',
      not: '',
    },
    {
      key: '3',
      gelisTarihi: '5 10 2024',
      malzemeAdi: 'HAZIR SIVA',
      birimDegeri: 25,
      gelenMiktar: 2160,
      toplamMiktar: 54000,
      birimi: 'KG',
      irsaliye: 'PDF & JPG',
      not: '',
    },
  ];

  const handleDelete = (record) => {
    console.log('record', record);
  };

  const showModal = (selectedRow) => {
    generatedModal({
      title:
        selectedRow !== undefined ? 'Önemli Olay Güncelle' : 'Önemli Olay Ekle',
      content: <EnvanterEkleModal selectedRow={selectedRow} />,
      width: '50%',
    });
  };

  return (
    <>
      <Button onClick={() => showModal()}> Envanter Ekle </Button>{' '}
      {/* <Modal open={modalOpen} onCancel={() => onCancelModal()}>
        {' '}
        <EnvanterEkleModal selectedRow={selectedRow} />{' '}
      </Modal> */}
      <Table columns={columns} dataSource={data} />
    </>
  );
}

export default EnvanterDetay;
