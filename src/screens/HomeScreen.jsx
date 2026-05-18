import React from 'react';
import {
  RUSSDENT_COLORS, RUSSDENT_GRADIENT, FF,
  RCard, RGradCard, RBtn, RSectionLabel, RBadge,
} from '../Shared';

const TreatStep = ({ num, label, status, date }) => {
  const done = status === 'done';
  const next = status === 'next';
  return (
    <div style={{
      display: 'flex', gap: 10, alignItems: 'flex-start',
      padding: '9px 0',
      borderBottom: `1px solid ${RUSSDENT_COLORS.border}`,
    }}>
      <div style={{
        width: 22, height: 22, borderRadius: 11, flexShrink: 0, marginTop: 1,
        background: done ? RUSSDENT_GRADIENT : next ? 'rgba(155,130,212,0.15)' : 'transparent',
        border: done ? 'none' : next ? '1.5px solid #9b82d4' : `1.5px solid ${RUSSDENT_COLORS.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {done
          ? <svg width="11" height="11" viewBox="0 0 12 12"><path d="M2 6.5L5 9.5L10 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          : <span style={{ fontSize: 10, fontWeight: 600, color: next ? '#9b82d4' : RUSSDENT_COLORS.textSecondary, fontFamily: FF }}>{num}</span>
        }
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontSize: 13, fontFamily: FF, fontWeight: next ? 500 : 400, color: done ? RUSSDENT_COLORS.textSecondary : RUSSDENT_COLORS.textPrimary }}>{label}</p>
        {date && <p style={{ margin: '2px 0 0', fontSize: 11, color: '#9b82d4', fontFamily: FF }}>{date}</p>}
      </div>
      {done && <span style={{ color: '#3fa871', fontSize: 13, flexShrink: 0 }}>✓</span>}
    </div>
  );
};

const ResultRow = ({ name, date, status, last }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 12,
    padding: '11px 0',
    borderBottom: last ? 'none' : `1px solid ${RUSSDENT_COLORS.border}`,
    cursor: 'pointer',
  }}>
    <div style={{
      width: 38, height: 38, borderRadius: 10, flexShrink: 0,
      background: 'rgba(155,130,212,0.1)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6C5.4 2 5 2.5 5 3V21C5 21.5 5.4 22 6 22H18C18.6 22 19 21.5 19 21V7L14 2Z" stroke="#9b82d4" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 2V7H19" stroke="#9b82d4" strokeWidth="1.5"/>
        <line x1="9" y1="13" x2="15" y2="13" stroke="#9b82d4" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9" y1="17" x2="12" y2="17" stroke="#9b82d4" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: RUSSDENT_COLORS.textPrimary, fontFamily: FF, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</p>
      <p style={{ margin: '2px 0 0', fontSize: 11, color: RUSSDENT_COLORS.textSecondary, fontFamily: FF }}>{date}</p>
    </div>
    <RBadge status={status} />
  </div>
);

export const HomeScreen = ({ onTab }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: RUSSDENT_COLORS.bg, fontFamily: FF }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '68px 20px 14px', background: RUSSDENT_COLORS.bg }}>
        <div>
          <p style={{ margin: 0, fontSize: 12, color: RUSSDENT_COLORS.textSecondary, letterSpacing: '0.04em' }}>Клиника</p>
          <h1 style={{
            margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: '0.06em',
            background: RUSSDENT_GRADIENT,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>РУССДЕНТ</h1>
        </div>
        <button style={{
          width: 40, height: 40, borderRadius: 12,
          background: RUSSDENT_COLORS.card, border: `1px solid ${RUSSDENT_COLORS.border}`,
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `0 2px 8px ${RUSSDENT_COLORS.shadow}`,
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9" stroke="#9b82d4" strokeWidth="1.8" strokeLinejoin="round"/>
            <path d="M13.73 21a2 2 0 01-3.46 0" stroke="#9b82d4" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div style={{ padding: '0 20px 18px' }}>
        <h2 style={{ margin: '0 0 4px', fontSize: 24, fontWeight: 700, color: RUSSDENT_COLORS.textPrimary }}>Добрый день, Анна</h2>
        <p style={{ margin: 0, fontSize: 14, color: RUSSDENT_COLORS.textSecondary }}>Понедельник, 12 мая 2025</p>
      </div>

      <div style={{ padding: '0 20px 110px', display: 'flex', flexDirection: 'column', gap: 14 }}>

        <RGradCard style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
            <p style={{ margin: 0, fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
              Ближайший визит
            </p>
            <span style={{ background: 'rgba(255,255,255,0.22)', color: '#fff', borderRadius: 20, padding: '3px 11px', fontSize: 12, fontWeight: 500 }}>
              Ср, 14 мая
            </span>
          </div>
          <p style={{ margin: '0 0 14px', fontSize: 36, fontWeight: 700, color: '#fff', lineHeight: 1 }}>11:30</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 38, height: 38, borderRadius: 19, background: 'rgba(255,255,255,0.25)', border: '1.5px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', fontFamily: FF }}>ЕП</span>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: '#fff' }}>Павлова Е.А.</p>
              <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>Терапевт · Кабинет 204</p>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: '10px 14px', marginBottom: 16 }}>
            <p style={{ margin: '0 0 4px', fontSize: 14, fontWeight: 500, color: '#fff' }}>Лечение канала 4.6 зуба</p>
            <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.82)' }}>⚠️ Принять Нимесил за 1 ч до визита</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {['Перенести', 'Отменить'].map(l => (
              <button key={l} style={{ flex: 1, padding: '10px 0', background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 12, color: '#fff', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: FF }}>{l}</button>
            ))}
          </div>
        </RGradCard>

        <RCard style={{ padding: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <RSectionLabel style={{ margin: 0 }}>План лечения</RSectionLabel>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#9b82d4', fontFamily: FF }}>65%</span>
          </div>
          <div style={{ height: 6, background: RUSSDENT_COLORS.border, borderRadius: 3, marginBottom: 14, overflow: 'hidden' }}>
            <div style={{ width: '65%', height: '100%', background: RUSSDENT_GRADIENT, borderRadius: 3 }} />
          </div>
          <div style={{ display: 'flex', marginBottom: 14 }}>
            {[
              { label: 'Итого',    val: '45 200 ₽', color: RUSSDENT_COLORS.textPrimary },
              { label: 'Оплачено', val: '28 300 ₽', color: '#3fa871'                  },
              { label: 'Долг',     val: '16 900 ₽', color: '#d94f4f'                  },
            ].map(({ label, val, color }, i) => (
              <div key={label} style={{ flex: 1, borderRight: i < 2 ? `1px solid ${RUSSDENT_COLORS.border}` : 'none', paddingRight: i < 2 ? 10 : 0, paddingLeft: i > 0 ? 10 : 0 }}>
                <p style={{ margin: 0, fontSize: 10, color: RUSSDENT_COLORS.textSecondary, fontFamily: FF }}>{label}</p>
                <p style={{ margin: '3px 0 0', fontSize: 15, fontWeight: 700, color, fontFamily: FF }}>{val}</p>
              </div>
            ))}
          </div>
          {expanded && (
            <div style={{ marginBottom: 12 }}>
              <TreatStep num={1} label="Диагностика ОПТГ"         status="done" />
              <TreatStep num={2} label="Лечение кариеса 2.3 зуба" status="done" />
              <TreatStep num={3} label="Установка коронки 4.6"    status="next" date="Запланировано на 20 мая" />
              <TreatStep num={4} label="Профессиональная гигиена"  status="todo" />
            </div>
          )}
          <button onClick={() => setExpanded(!expanded)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9b82d4', fontSize: 13, fontWeight: 500, fontFamily: FF, padding: '0 0 12px', display: 'block' }}>
            {expanded ? '▲ Свернуть план' : '▼ Показать этапы лечения'}
          </button>
          <RBtn>Пополнить депозит</RBtn>
        </RCard>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <RSectionLabel style={{ margin: 0 }}>Свежие результаты</RSectionLabel>
            <button onClick={() => onTab('results')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: '#9b82d4', fontFamily: FF, fontWeight: 500 }}>Все →</button>
          </div>
          <RCard style={{ padding: '4px 16px' }}>
            <ResultRow name="ОПТГ (панорамный снимок)" date="10 апр 2025" status="ready"   />
            <ResultRow name="КТ нижней челюсти"         date="22 мар 2025" status="ready"   />
            <ResultRow name="Анализ флоры (ПЦР)"         date="15 мар 2025" status="pending" last />
          </RCard>
        </div>

      </div>
    </div>
  );
};
