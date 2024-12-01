import React from 'react';
import { Calendar } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';
import isBetween from 'dayjs/plugin/isBetween'; // isBetween plugin'ini import et

// Day.js'e isBetween plugin'ini ekleyin
dayjs.extend(isBetween);

const JobScheduleCalendar = () => {
  // İşlerin tarih aralıklarını tanımlıyoruz
  const jobs = [
    { name: 'Hafriyat Alımı', startDate: '2024-01-01', endDate: '2024-01-15' },
    { name: 'Kaba İnşaat', startDate: '2024-01-15', endDate: '2024-02-15' },
    { name: 'Duvar İmalatı', startDate: '2024-02-01', endDate: '2024-02-28' },
    // Diğer işler...
  ];

  // DateCellRender ile her tarihe işlemi ekliyoruz
  const dateCellRender = (date) => {
    const dateString = date.format('YYYY-MM-DD'); // Date'i string'e çevir
    const jobForThisDate = jobs.filter(
      (job) =>
        dayjs(dateString).isBetween(job.startDate, job.endDate, null, '[]') // İşin tarih aralığına bakıyoruz
    );
    return (
      <div>
        {jobForThisDate.map((job, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'lightblue',
              padding: '5px',
              borderRadius: '5px',
              margin: '3px 0',
            }}
          >
            {job.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>İş Programı Takvimi</h2>
      <Calendar
        fullscreen={false}
        dateCellRender={dateCellRender} // Hücreye iş ekliyoruz
      />
    </div>
  );
};

export default JobScheduleCalendar;
