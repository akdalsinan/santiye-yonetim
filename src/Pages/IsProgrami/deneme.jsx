import React, { useState } from 'react';
import { Calendar } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/tr'; // Türkçe dil desteği
import isBetween from 'dayjs/plugin/isBetween'; // isBetween plugin'ini import et

// Day.js'e isBetween plugin'ini ekleyin
dayjs.extend(isBetween);
dayjs.locale('tr'); // Day.js Türkçe'yi aktif et

const JobScheduleCalendar = () => {
  // Son 3 ayı alıyoruz
  const currentDate = dayjs(); // Bugünün tarihi
  const previousMonth = currentDate.subtract(1, 'month'); // Geçen ay
  const twoMonthsAgo = currentDate.subtract(2, 'month'); // İki ay önce

  // İşlerin tarih aralıklarını tanımlıyoruz
  const jobs = [
    {
      name: 'Sıva İşlemi',
      startDate: '2024-01-01',
      endDate: '2024-01-15',
      color: 'lightblue',
    },
    {
      name: 'Tuğla Örme',
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      color: 'lightgreen',
    },
    {
      name: 'Beton İşlemi',
      startDate: '2024-01-01',
      endDate: '2024-01-30',
      color: 'lightcoral',
    },
  ];

  // DateCellRender ile her tarihe işlemi ekliyoruz
  const dateCellRender = (date) => {
    const dateString = date.format('YYYY-MM-DD');
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
              backgroundColor: job.color,
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
      <div style={{ display: 'flex' }}>
        {/* İlk Ay */}
        <Calendar
          fullscreen={false}
          headerRender={({ value, type, onChange }) => (
            <div style={{ padding: 10 }}>
              <button onClick={() => onChange(value.subtract(1, 'month'))}>
                Önceki Ay
              </button>
              <span>{value.format('MMMM YYYY')}</span>
              <button onClick={() => onChange(value.add(1, 'month'))}>
                Sonraki Ay
              </button>
            </div>
          )}
          dateCellRender={dateCellRender}
          value={twoMonthsAgo} // İlk ay (2 ay önce)
        />

        {/* Orta Ay */}
        <Calendar
          fullscreen={false}
          headerRender={({ value, type, onChange }) => (
            <div style={{ padding: 10 }}>
              <button onClick={() => onChange(value.subtract(1, 'month'))}>
                Önceki Ay
              </button>
              <span>{value.format('MMMM YYYY')}</span>
              <button onClick={() => onChange(value.add(1, 'month'))}>
                Sonraki Ay
              </button>
            </div>
          )}
          dateCellRender={dateCellRender}
          value={previousMonth} // Orta ay (1 ay önce)
        />

        {/* Son Ay */}
        <Calendar
          fullscreen={false}
          headerRender={({ value, type, onChange }) => (
            <div style={{ padding: 10 }}>
              <button onClick={() => onChange(value.subtract(1, 'month'))}>
                Önceki Ay
              </button>
              <span>{value.format('MMMM YYYY')}</span>
              <button onClick={() => onChange(value.add(1, 'month'))}>
                Sonraki Ay
              </button>
            </div>
          )}
          dateCellRender={dateCellRender}
          value={currentDate} // Son ay (Bugün)
        />
      </div>
    </div>
  );
};

export default JobScheduleCalendar;
