// Shared design tokens & base components — Руссдент
const RUSSDENT_COLORS = {
  bg: '#eaeaf2',
  card: '#efedf1',
  textPrimary: '#2b2b2f',
  textSecondary: '#6b6b74',
  textTertiary: '#5c565d',
  accent: '#9b82d4',
  border: '#cec8d8',
  shadow: 'rgba(194, 182, 200, 0.35)',
  white: '#ffffff',
  error: '#d94f4f',
  success: '#3fa871',
};

const RUSSDENT_GRADIENT = 'linear-gradient(135deg, #d8a1e2 0%, #8d97da 100%)';
const FF = "'Golos Text', system-ui, sans-serif";

const RCard = ({ children, style, onClick }) => (
  <div onClick={onClick} style={{
    background: RUSSDENT_COLORS.card,
    borderRadius: 16,
    border: `1px solid ${RUSSDENT_COLORS.border}`,
    boxShadow: `0 2px 14px ${RUSSDENT_COLORS.shadow}`,
    overflow: 'hidden',
    ...style,
  }}>
    {children}
  </div>
);

const RGradCard = ({ children, style }) => (
  <div style={{
    background: RUSSDENT_GRADIENT,
    borderRadius: 18,
    overflow: 'hidden',
    ...style,
  }}>
    {children}
  </div>
);

const RBtn = ({ children, onClick, style, disabled }) => (
  <button onClick={onClick} disabled={disabled} style={{
    background: disabled ? RUSSDENT_COLORS.border : RUSSDENT_GRADIENT,
    color: disabled ? RUSSDENT_COLORS.textSecondary : '#fff',
    border: 'none',
    borderRadius: 14,
    padding: '14px 0',
    fontSize: 15,
    fontWeight: 600,
    fontFamily: FF,
    cursor: disabled ? 'default' : 'pointer',
    width: '100%',
    transition: 'opacity 0.15s',
    ...style,
  }}>
    {children}
  </button>
);

const ROutlineBtn = ({ children, onClick, style }) => (
  <button onClick={onClick} style={{
    background: 'rgba(155,130,212,0.07)',
    color: RUSSDENT_COLORS.accent,
    border: `1px solid rgba(155,130,212,0.3)`,
    borderRadius: 12,
    padding: '10px 0',
    fontSize: 13,
    fontWeight: 500,
    fontFamily: FF,
    cursor: 'pointer',
    width: '100%',
    ...style,
  }}>
    {children}
  </button>
);

const RSectionLabel = ({ children, style }) => (
  <p style={{
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.09em',
    textTransform: 'uppercase',
    color: RUSSDENT_COLORS.textSecondary,
    fontFamily: FF,
    margin: '0 0 8px',
    ...style,
  }}>
    {children}
  </p>
);

const RScreenHeader = ({ title, onBack, right }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    gap: 8,
    borderBottom: `1px solid ${RUSSDENT_COLORS.border}`,
    background: RUSSDENT_COLORS.bg,
    minHeight: 48,
  }}>
    {onBack && (
      <button onClick={onBack} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        padding: '4px 6px 4px 2px', display: 'flex', alignItems: 'center',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M12 5l-7 7 7 7" stroke={RUSSDENT_COLORS.accent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    )}
    <h2 style={{
      margin: 0, flex: 1,
      fontSize: 17, fontWeight: 600,
      color: RUSSDENT_COLORS.textPrimary,
      fontFamily: FF,
    }}>{title}</h2>
    {right}
  </div>
);

const RAvatar = ({ name, size = 44, style }) => {
  const parts = (name || '').trim().split(/\s+/);
  const initials = parts.length >= 2
    ? (parts[0][0] + parts[1][0]).toUpperCase()
    : (name || '??').slice(0, 2).toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: size / 2,
      background: RUSSDENT_GRADIENT,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
      ...style,
    }}>
      <span style={{
        color: '#fff',
        fontSize: size * 0.34,
        fontWeight: 700,
        fontFamily: FF,
        letterSpacing: '0.01em',
      }}>{initials}</span>
    </div>
  );
};

const RBadge = ({ status }) => {
  const map = {
    ready:   { label: 'Готово',    color: '#3fa871', bg: 'rgba(63,168,113,0.12)' },
    pending: { label: 'Ожидается', color: '#c97c28', bg: 'rgba(201,124,40,0.12)' },
    error:   { label: 'Ошибка',    color: '#d94f4f', bg: 'rgba(217,79,79,0.12)'  },
  };
  const cfg = map[status] || map.pending;
  return (
    <span style={{
      fontSize: 11, fontWeight: 600,
      color: cfg.color, background: cfg.bg,
      borderRadius: 20, padding: '3px 9px',
      fontFamily: FF, whiteSpace: 'nowrap',
    }}>{cfg.label}</span>
  );
};

Object.assign(window, {
  RUSSDENT_COLORS, RUSSDENT_GRADIENT, FF,
  RCard, RGradCard, RBtn, ROutlineBtn,
  RSectionLabel, RScreenHeader, RAvatar, RBadge,
});
