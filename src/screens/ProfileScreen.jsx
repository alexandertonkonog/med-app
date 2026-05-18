import React from 'react';
import { RUSSDENT_COLORS, RUSSDENT_GRADIENT, FF, RSectionLabel, ROutlineBtn } from '../Shared';

const InfoRow = ({ label, value, accent, editable, last }) => (
  <div style={{
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '12px 16px',
    borderBottom: last ? 'none' : `1px solid ${RUSSDENT_COLORS.border}`,
  }}>
    <span style={{ fontSize: 13, color: RUSSDENT_COLORS.textSecondary, fontFamily: FF }}>{label}</span>
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <span style={{ fontSize: 13, fontWeight: 500, color: accent ? '#d94f4f' : RUSSDENT_COLORS.textPrimary, fontFamily: FF }}>{value}</span>
      {editable && (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
          <path d="M17.5 2.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L17.5 2.5z"
            stroke={RUSSDENT_COLORS.textSecondary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  </div>
);

const SCard = ({ title, children }) => (
  <div>
    <RSectionLabel>{title}</RSectionLabel>
    <div style={{
      background: RUSSDENT_COLORS.card, borderRadius: 14,
      border: `1px solid ${RUSSDENT_COLORS.border}`, overflow: 'hidden',
      boxShadow: `0 2px 12px ${RUSSDENT_COLORS.shadow}`,
    }}>
      {children}
    </div>
  </div>
);

export const ProfileScreen = () => (
  <div style={{ height: '100%', overflowY: 'auto', background: RUSSDENT_COLORS.bg, fontFamily: FF }}>
    <div style={{ padding: 'var(--screen-top-pad, 68px) 20px 14px' }}>
      <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: RUSSDENT_COLORS.textPrimary }}>Профиль</h2>
    </div>

    <div style={{
      margin: '0 20px 20px', background: RUSSDENT_GRADIENT,
      borderRadius: 20, padding: '20px',
      display: 'flex', gap: 16, alignItems: 'center',
    }}>
      <div style={{
        width: 64, height: 64, borderRadius: 32, flexShrink: 0,
        background: 'rgba(255,255,255,0.25)',
        border: '2px solid rgba(255,255,255,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ fontSize: 22, fontWeight: 700, color: '#fff', fontFamily: FF }}>АС</span>
      </div>
      <div>
        <p style={{ margin: '0 0 4px', fontSize: 19, fontWeight: 700, color: '#fff', fontFamily: FF }}>Анна Соколова</p>
        <p style={{ margin: '0 0 3px', fontSize: 13, color: 'rgba(255,255,255,0.85)', fontFamily: FF }}>12.05.1985 · 40 лет</p>
        <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.7)', fontFamily: FF }}>Карта № DS-4521</p>
      </div>
    </div>

    <div style={{ padding: '0 20px 110px', display: 'flex', flexDirection: 'column', gap: 20 }}>

      <div style={{
        background: 'rgba(217,79,79,0.07)', border: '1px solid rgba(217,79,79,0.22)',
        borderRadius: 14, padding: '12px 16px',
        display: 'flex', gap: 12, alignItems: 'center',
      }}>
        <span style={{ fontSize: 22, flexShrink: 0 }}>⚠️</span>
        <div>
          <p style={{ margin: '0 0 2px', fontSize: 11, fontWeight: 600, color: '#d94f4f', textTransform: 'uppercase', letterSpacing: '0.07em', fontFamily: FF }}>
            Аллергии
          </p>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#b03030', fontFamily: FF }}>
            Лидокаин, Пенициллин
          </p>
        </div>
      </div>

      <SCard title="Личные данные">
        <InfoRow label="Имя"             value="Анна Соколова" editable />
        <InfoRow label="Дата рождения"   value="12.05.1985" />
        <InfoRow label="Возраст"         value="40 лет" />
        <InfoRow label="Номер карты"     value="DS-4521" />
        <InfoRow label="Страховой полис" value="ОМС-778834" last />
      </SCard>

      <SCard title="Контакты">
        <InfoRow label="Телефон" value="+7 (916) 234-56-78" editable />
        <InfoRow label="Email"   value="sokolova@mail.ru"   editable last />
      </SCard>

      <SCard title="Доверенные лица">
        <div style={{ padding: '12px 16px', borderBottom: `1px solid ${RUSSDENT_COLORS.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
          <div>
            <p style={{ margin: '0 0 2px', fontSize: 14, fontWeight: 500, color: RUSSDENT_COLORS.textPrimary, fontFamily: FF }}>Соколов И.П.</p>
            <p style={{ margin: 0, fontSize: 12, color: RUSSDENT_COLORS.textSecondary, fontFamily: FF }}>Супруг · Полное управление</p>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke={RUSSDENT_COLORS.textSecondary} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9b82d4', fontSize: 14, fontWeight: 500, fontFamily: FF, padding: '12px 16px', display: 'block', textAlign: 'left' }}>
          + Добавить доверенное лицо
        </button>
      </SCard>

      <SCard title="Уведомления">
        <InfoRow label="Push-уведомления"     value="Включены"   editable />
        <InfoRow label="Напоминание о визите" value="За 24 часа" editable last />
      </SCard>

      <button style={{
        padding: '14px 0', background: 'none',
        border: `1px solid ${RUSSDENT_COLORS.border}`,
        borderRadius: 14, color: '#d94f4f',
        fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: FF,
      }}>
        Выйти из аккаунта
      </button>

    </div>
  </div>
);
