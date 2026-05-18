import React from 'react';
import {
  RUSSDENT_COLORS, RUSSDENT_GRADIENT, FF,
  RCard, RBtn, RSectionLabel, RAvatar,
} from '../Shared';

const DOCTORS = [
  { id: 1, name: 'Павлова Е.А.',    spec: 'Стоматолог-терапевт', exp: '12 лет', slots: 12 },
  { id: 2, name: 'Смирнов А.В.',    spec: 'Хирург-имплантолог',  exp: '8 лет',  slots: 4  },
  { id: 3, name: 'Ковальчук Д.С.', spec: 'Ортодонт',             exp: '15 лет', slots: 2  },
];

const WEEK = [
  { day: 'Пн', date: 12 }, { day: 'Вт', date: 13 }, { day: 'Ср', date: 14 },
  { day: 'Чт', date: 15 }, { day: 'Пт', date: 16 }, { day: 'Сб', date: 17 },
];

const ALL_TIMES = [
  '09:00','09:30','10:00','10:30','11:00','11:30',
  '12:00','13:30','14:00','14:30','15:00','15:30',
  '16:00','17:00','17:30','18:00',
];
const UNAVAIL = new Set(['10:30','13:30','15:30']);

const slotWord = (n) => n === 1 ? 'слот' : n < 5 ? 'слота' : 'слотов';

const BookingConfirm = ({ doctor, dayIdx, time, onReset }) => {
  const { day, date } = WEEK[dayIdx];
  return (
    <div style={{
      height: '100%', overflowY: 'auto',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: RUSSDENT_COLORS.bg, padding: '80px 28px 120px',
      fontFamily: FF, textAlign: 'center',
    }}>
      <div style={{
        width: 80, height: 80, borderRadius: 40, background: RUSSDENT_GRADIENT,
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24,
        boxShadow: '0 8px 32px rgba(141,151,218,0.42)',
      }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <path d="M4 12.5L9.5 18L20 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h2 style={{ margin: '0 0 8px', fontSize: 26, fontWeight: 700, color: RUSSDENT_COLORS.textPrimary }}>Вы записаны!</h2>
      <p style={{ margin: '0 0 28px', fontSize: 14, color: RUSSDENT_COLORS.textSecondary }}>Запись успешно подтверждена</p>

      <RCard style={{ width: '100%', padding: 0, marginBottom: 24 }}>
        {[
          ['Врач',          doctor.name],
          ['Специализация', doctor.spec],
          ['Дата',          `${day}, ${date} мая 2025`],
          ['Время',         time],
          ['Кабинет',       '204'],
        ].map(([k, v], i, arr) => (
          <div key={k} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '12px 16px',
            borderBottom: i < arr.length - 1 ? `1px solid ${RUSSDENT_COLORS.border}` : 'none',
          }}>
            <span style={{ fontSize: 13, color: RUSSDENT_COLORS.textSecondary, fontFamily: FF }}>{k}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: RUSSDENT_COLORS.textPrimary, fontFamily: FF }}>{v}</span>
          </div>
        ))}
      </RCard>

      <RBtn style={{ marginBottom: 14 }}>Добавить в календарь</RBtn>
      <button onClick={onReset} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9b82d4', fontSize: 14, fontWeight: 500, fontFamily: FF }}>
        Записаться ещё раз
      </button>
    </div>
  );
};

export const BookingScreen = () => {
  const [step,     setStep]     = React.useState(1);
  const [doctorId, setDoctorId] = React.useState(null);
  const [dayIdx,   setDayIdx]   = React.useState(null);
  const [time,     setTime]     = React.useState(null);
  const [done,     setDone]     = React.useState(false);

  const reset = () => { setDone(false); setStep(1); setDoctorId(null); setDayIdx(null); setTime(null); };

  if (done) {
    return <BookingConfirm
      doctor={DOCTORS.find(d => d.id === doctorId)}
      dayIdx={dayIdx} time={time} onReset={reset} />;
  }

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: RUSSDENT_COLORS.bg, fontFamily: FF }}>
      <div style={{ padding: '68px 20px 14px', borderBottom: `1px solid ${RUSSDENT_COLORS.border}` }}>
        <h2 style={{ margin: '0 0 12px', fontSize: 20, fontWeight: 700, color: RUSSDENT_COLORS.textPrimary }}>
          Запись к врачу
        </h2>
        <div style={{ display: 'flex', gap: 6 }}>
          {[1, 2].map(s => (
            <div key={s} style={{
              flex: 1, height: 4, borderRadius: 2,
              background: step >= s ? RUSSDENT_GRADIENT : RUSSDENT_COLORS.border,
              transition: 'background 0.3s',
            }} />
          ))}
        </div>
      </div>

      <div style={{ padding: '20px 20px 110px', display: 'flex', flexDirection: 'column', gap: 14 }}>

        {step === 1 && <>
          <RSectionLabel>Выберите врача</RSectionLabel>
          {DOCTORS.map(doc => (
            <div
              key={doc.id}
              onClick={() => { setDoctorId(doc.id); setStep(2); }}
              style={{
                background: RUSSDENT_COLORS.card, borderRadius: 16,
                border: doctorId === doc.id ? '2px solid #9b82d4' : `1px solid ${RUSSDENT_COLORS.border}`,
                padding: '14px 16px', cursor: 'pointer',
                display: 'flex', gap: 14, alignItems: 'center',
                boxShadow: `0 2px 14px ${RUSSDENT_COLORS.shadow}`,
                transition: 'border-color 0.15s',
              }}
            >
              <RAvatar name={doc.name} size={50} />
              <div style={{ flex: 1 }}>
                <p style={{ margin: '0 0 3px', fontSize: 15, fontWeight: 600, color: RUSSDENT_COLORS.textPrimary }}>{doc.name}</p>
                <p style={{ margin: '0 0 4px', fontSize: 12, color: RUSSDENT_COLORS.textSecondary }}>{doc.spec} · Стаж {doc.exp}</p>
                <p style={{ margin: 0, fontSize: 12, color: '#9b82d4', fontWeight: 500 }}>
                  {doc.slots} {slotWord(doc.slots)} на этой неделе
                </p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke={RUSSDENT_COLORS.textSecondary} strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          ))}
        </>}

        {step === 2 && <>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button onClick={() => setStep(1)} style={{
              background: 'rgba(155,130,212,0.1)', border: 'none', borderRadius: 8,
              padding: '6px 12px', cursor: 'pointer',
              color: '#9b82d4', fontSize: 13, fontWeight: 500, fontFamily: FF,
            }}>← Назад</button>
            <span style={{ fontSize: 13, color: RUSSDENT_COLORS.textSecondary }}>
              {DOCTORS.find(d => d.id === doctorId)?.name}
            </span>
          </div>

          <RSectionLabel>Выберите дату</RSectionLabel>
          <div style={{ display: 'flex', gap: 7 }}>
            {WEEK.map((w, i) => (
              <button key={i} onClick={() => setDayIdx(i)} style={{
                flex: 1, height: 62, borderRadius: 14, fontFamily: FF,
                background: dayIdx === i ? '#9b82d4' : RUSSDENT_COLORS.card,
                border: dayIdx === i ? 'none' : `1px solid ${RUSSDENT_COLORS.border}`,
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3,
                transition: 'background 0.15s',
              }}>
                <span style={{ fontSize: 9.5, color: dayIdx === i ? 'rgba(255,255,255,0.8)' : RUSSDENT_COLORS.textSecondary }}>{w.day}</span>
                <span style={{ fontSize: 17, fontWeight: 700, color: dayIdx === i ? '#fff' : RUSSDENT_COLORS.textPrimary }}>{w.date}</span>
              </button>
            ))}
          </div>

          <RSectionLabel style={{ marginTop: 4 }}>Выберите время</RSectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
            {ALL_TIMES.map(t => {
              const unavail = UNAVAIL.has(t);
              const sel = time === t;
              return (
                <button key={t} onClick={() => !unavail && setTime(t)} style={{
                  padding: '10px 0', borderRadius: 10, fontFamily: FF,
                  fontSize: 13, fontWeight: 500,
                  background: sel ? '#9b82d4' : unavail ? 'transparent' : RUSSDENT_COLORS.card,
                  color: sel ? '#fff' : unavail ? RUSSDENT_COLORS.border : RUSSDENT_COLORS.textPrimary,
                  border: sel ? 'none' : unavail ? `1px dashed ${RUSSDENT_COLORS.border}` : `1px solid ${RUSSDENT_COLORS.border}`,
                  cursor: unavail ? 'default' : 'pointer',
                  textDecoration: unavail ? 'line-through' : 'none',
                  opacity: unavail ? 0.55 : 1,
                  transition: 'background 0.15s',
                }}>{t}</button>
              );
            })}
          </div>

          <RBtn disabled={dayIdx === null || !time} onClick={() => setDone(true)} style={{ marginTop: 8 }}>
            Записаться к врачу
          </RBtn>
        </>}

      </div>
    </div>
  );
};
