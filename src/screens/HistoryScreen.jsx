import React from 'react';
import { RUSSDENT_COLORS, FF, RSectionLabel, ROutlineBtn } from '../Shared';

const VISITS = [
  {
    id: 1, year: 2025,
    date: '15 марта 2025', time: '14:00',
    doctor: 'Павлова Е.А.', spec: 'Терапевт',
    diag: 'K04.7 — Периапикальный абсцесс без свища',
    procedures: ['Анестезия (Убистезин 1.7 мл)', 'Мехобработка каналов 46 зуба', 'Временная пломба'],
    cost: 4500, paid: true,
  },
  {
    id: 2, year: 2025,
    date: '10 февр. 2025', time: '11:00',
    doctor: 'Павлова Е.А.', spec: 'Терапевт',
    diag: 'K02.1 — Кариес дентина 23 зуба',
    procedures: ['Анестезия (Убистезин 1.7 мл)', 'Препарирование кариозной полости', 'Пломбирование Filtek Ultimate'],
    cost: 3800, paid: true,
  },
  {
    id: 3, year: 2024,
    date: '5 дек. 2024', time: '15:30',
    doctor: 'Ковальчук Д.С.', spec: 'Ортодонт',
    diag: 'Консультация по ортодонтическому лечению',
    procedures: ['Осмотр', 'Снятие диагностических слепков', 'Составление плана лечения'],
    cost: 2500, paid: true,
  },
  {
    id: 4, year: 2024,
    date: '12 окт. 2024', time: '10:00',
    doctor: 'Смирнов А.В.', spec: 'Хирург',
    diag: 'K08.1 — Удаление зуба мудрости 38',
    procedures: ['Анестезия артикаином 1.8 мл', 'Атравматическое удаление зуба', 'Наложение шва Викрил 4-0'],
    cost: 5200, paid: true,
  },
];

const VisitCard = ({ visit }) => {
  const [open, setOpen] = React.useState(false);
  const parts = visit.date.split(' ');
  const day   = parts[0];
  const rest  = parts.slice(1).join(' ');

  return (
    <div style={{
      background: RUSSDENT_COLORS.card, borderRadius: 14,
      border: `1px solid ${RUSSDENT_COLORS.border}`, overflow: 'hidden',
      boxShadow: `0 2px 12px ${RUSSDENT_COLORS.shadow}`,
    }}>
      <div onClick={() => setOpen(!open)} style={{ padding: 14, cursor: 'pointer', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12, flexShrink: 0,
          background: 'rgba(155,130,212,0.1)',
          border: `1px solid rgba(155,130,212,0.18)`,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: 17, fontWeight: 700, color: '#9b82d4', fontFamily: FF, lineHeight: 1 }}>{day}</span>
          <span style={{ fontSize: 8.5, color: RUSSDENT_COLORS.textSecondary, fontFamily: FF, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: 2 }}>{rest}</span>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
            <div style={{ minWidth: 0 }}>
              <p style={{ margin: '0 0 2px', fontSize: 14, fontWeight: 600, color: RUSSDENT_COLORS.textPrimary, fontFamily: FF }}>{visit.doctor}</p>
              <p style={{ margin: '0 0 5px', fontSize: 12, color: RUSSDENT_COLORS.textSecondary, fontFamily: FF }}>{visit.spec} · {visit.time}</p>
            </div>
            <span style={{ fontSize: 14, fontWeight: 700, color: visit.paid ? '#3fa871' : '#d94f4f', fontFamily: FF, flexShrink: 0, whiteSpace: 'nowrap' }}>
              {visit.cost.toLocaleString('ru')} ₽
            </span>
          </div>
          <p style={{ margin: 0, fontSize: 12, color: RUSSDENT_COLORS.textSecondary, fontFamily: FF, lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {visit.diag}
          </p>
        </div>

        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0, marginTop: 4 }}>
          <path d="M9 18l6-6-6-6" stroke={RUSSDENT_COLORS.textSecondary} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {open && (
        <div style={{ borderTop: `1px solid ${RUSSDENT_COLORS.border}`, padding: 14, background: 'rgba(255,255,255,0.32)' }}>
          <p style={{ margin: '0 0 4px', fontSize: 12, color: RUSSDENT_COLORS.textSecondary, fontFamily: FF }}>
            <strong style={{ color: RUSSDENT_COLORS.textPrimary }}>Диагноз:</strong> {visit.diag}
          </p>
          <p style={{ margin: '10px 0 7px', fontSize: 11, fontWeight: 600, color: RUSSDENT_COLORS.textSecondary, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: FF }}>
            Проведено
          </p>
          {visit.procedures.map((p, i) => (
            <p key={i} style={{ margin: '0 0 5px', fontSize: 13, color: RUSSDENT_COLORS.textPrimary, fontFamily: FF, display: 'flex', gap: 7, alignItems: 'flex-start' }}>
              <span style={{ color: '#9b82d4', flexShrink: 0, fontWeight: 700 }}>·</span>{p}
            </p>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            <ROutlineBtn style={{ flex: 1, fontSize: 12 }}>Скачать чек</ROutlineBtn>
            <ROutlineBtn style={{ flex: 1, fontSize: 12 }}>Повторить запись</ROutlineBtn>
          </div>
        </div>
      )}
    </div>
  );
};

export const HistoryScreen = () => {
  const years = [...new Set(VISITS.map(v => v.year))];
  return (
    <div style={{ height: '100%', overflowY: 'auto', background: RUSSDENT_COLORS.bg, fontFamily: FF }}>
      <div style={{ padding: 'var(--screen-top-pad, 68px) 20px 14px', borderBottom: `1px solid ${RUSSDENT_COLORS.border}` }}>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: RUSSDENT_COLORS.textPrimary }}>История приёмов</h2>
      </div>
      <div style={{ padding: '20px 20px 110px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        {years.map(year => (
          <div key={year}>
            <RSectionLabel style={{ marginBottom: 12 }}>{year}</RSectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {VISITS.filter(v => v.year === year).map(v => <VisitCard key={v.id} visit={v} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
