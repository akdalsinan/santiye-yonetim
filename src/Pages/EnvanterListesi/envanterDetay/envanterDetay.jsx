import { Button, Modal, Space, Table } from 'antd';
import React, { useState } from 'react';
import EnvanterEkleModal from './envanterEkleModal';

function EnvanterDetay({ selectedMalzeme }) {
  console.log('selectedMalzeme', selectedMalzeme);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(false);

  //selectedMalzeme İD DEĞERİNE GÖRE ENVANTER DATAY GELECEK
  // useEffect(() => {}, [selectedMalzeme]);

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
          <Button type="link" onClick={() => openModal(record)}>
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

  const openModal = (record) => {
    setModalOpen(true);
    setSelectedRow(record);
  };

  return (
    <>
      <Button onClick={() => openModal()}> Not Ekle </Button>{' '}
      <Modal open={modalOpen} onCancel={() => onCancelModal()}>
        {' '}
        <EnvanterEkleModal selectedRow={selectedRow} />{' '}
      </Modal>
      <Table columns={columns} dataSource={data} />
    </>
  );
}

export default EnvanterDetay;
