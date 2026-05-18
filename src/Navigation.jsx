import React from 'react';
import { RUSSDENT_COLORS, FF } from './Shared';

const NAV_TABS = [
  { id: 'home',    label: 'Главная'    },
  { id: 'booking', label: 'Запись'     },
  { id: 'results', label: 'Результаты' },
  { id: 'history', label: 'История'    },
  { id: 'profile', label: 'Профиль'    },
];

const NavIcon = ({ id, active }) => {
  const c  = active ? '#9b82d4' : '#9292a0';
  const sw = 1.75;
  const fa = active ? 'rgba(155,130,212,0.13)' : 'none';

  if (id === 'home') return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z"
        stroke={c} strokeWidth={sw} strokeLinejoin="round" fill={fa}/>
    </svg>
  );
  if (id === 'booking') return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="2.5"
        stroke={c} strokeWidth={sw} fill={fa}/>
      <line x1="3" y1="9" x2="21" y2="9" stroke={c} strokeWidth={sw}/>
      <line x1="8"  y1="2" x2="8"  y2="5.5" stroke={c} strokeWidth={sw} strokeLinecap="round"/>
      <line x1="16" y1="2" x2="16" y2="5.5" stroke={c} strokeWidth={sw} strokeLinecap="round"/>
      <circle cx="8"  cy="14" r="1.2" fill={c}/>
      <circle cx="12" cy="14" r="1.2" fill={c}/>
      <circle cx="16" cy="14" r="1.2" fill={c}/>
    </svg>
  );
  if (id === 'results') return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <path d="M14 2H6C5.4 2 5 2.5 5 3V21C5 21.5 5.4 22 6 22H18C18.6 22 19 21.5 19 21V7L14 2Z"
        stroke={c} strokeWidth={sw} strokeLinejoin="round" fill={fa}/>
      <path d="M14 2V7H19" stroke={c} strokeWidth={sw} strokeLinejoin="round"/>
      <line x1="9" y1="13" x2="15" y2="13" stroke={c} strokeWidth={sw} strokeLinecap="round"/>
      <line x1="9" y1="17" x2="12" y2="17" stroke={c} strokeWidth={sw} strokeLinecap="round"/>
    </svg>
  );
  if (id === 'history') return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth={sw} fill={fa}/>
      <path d="M12 7V12L15.5 14.5" stroke={c} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  if (id === 'profile') return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={c} strokeWidth={sw} fill={fa}/>
      <path d="M4 20C4 16.7 7.6 14 12 14C16.4 14 20 16.7 20 20"
        stroke={c} strokeWidth={sw} strokeLinecap="round"/>
    </svg>
  );
  return null;
};

export const RNavigation = ({ activeTab, setActiveTab }) => (
  <nav style={{
    display: 'flex',
    background: 'rgba(249,249,251,0.97)',
    borderTop: `1px solid ${RUSSDENT_COLORS.border}`,
    paddingBottom: 30,
    boxShadow: '0 -4px 24px rgba(194,182,200,0.3)',
    position: 'relative',
    zIndex: 20,
    flexShrink: 0,
  }}>
    {NAV_TABS.map(({ id, label }) => (
      <button
        key={id}
        onClick={() => setActiveTab(id)}
        style={{
          flex: 1,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 3,
          padding: '10px 0 5px',
          border: 'none', background: 'none',
          cursor: 'pointer',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <NavIcon id={id} active={activeTab === id} />
        <span style={{
          fontSize: 9.5,
          fontFamily: FF,
          fontWeight: activeTab === id ? 600 : 400,
          color: activeTab === id ? '#9b82d4' : '#9292a0',
          lineHeight: 1,
        }}>{label}</span>
      </button>
    ))}
  </nav>
);
