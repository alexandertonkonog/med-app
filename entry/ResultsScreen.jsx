// ResultsScreen — list + detail view
const { RUSSDENT_COLORS, RUSSDENT_GRADIENT, FF, RCard, ROutlineBtn, RSectionLabel, RScreenHeader, RBadge } = window;

const RESULTS = [
  { id: 1, type: 'ОПТГ (панорамный снимок)', date: '10 апреля 2025',  doctor: 'Павлова Е.А.',    cat: 'xray',       status: 'ready',
    desc: 'Корень 46 зуба — разрежение костной ткани ~2 мм. Рекомендую контрольную КТ через 3 месяца. Состояние остальных зубов удовлетворительное.' },
  { id: 2, type: 'КТ нижней челюсти',         date: '22 марта 2025',   doctor: 'Смирнов А.В.',    cat: 'xray',       status: 'ready',
    desc: 'В области 46 зуба гранулематозное образование до 5 мм. Рекомендовано динамическое наблюдение с контролем через 6 месяцев.' },
  { id: 3, type: 'Анализ флоры (ПЦР)',         date: '15 марта 2025',   doctor: 'Павлова Е.А.',    cat: 'analysis',   status: 'pending', desc: '' },
  { id: 4, type: 'Рентген 24 зуба',            date: '10 февраля 2025', doctor: 'Ковальчук Д.С.', cat: 'xray',       status: 'ready',
    desc: 'Норма. Признаков кариеса и периодонтита не выявлено. Рекомендована профилактика через 6 месяцев.' },
  { id: 5, type: 'Выписка · январь 2025',      date: '10 января 2025',  doctor: 'Павлова Е.А.',    cat: 'conclusion', status: 'ready',
    desc: 'Плановое лечение завершено. Рекомендована профессиональная гигиена 1 раз в 6 месяцев, замена зубной щётки каждые 3 месяца.' },
];

const CATS = [
  { id: 'all',        label: 'Все'         },
  { id: 'xray',       label: 'Снимки'      },
  { id: 'analysis',   label: 'Анализы'     },
  { id: 'conclusion', label: 'Заключения'  },
];

const DocIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M14 2H6C5.4 2 5 2.5 5 3V21C5 21.5 5.4 22 6 22H18C18.6 22 19 21.5 19 21V7L14 2Z"
      stroke="#9b82d4" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M14 2V7H19" stroke="#9b82d4" strokeWidth="1.5" strokeLinejoin="round"/>
    <line x1="9" y1="13" x2="15" y2="13" stroke="#9b82d4" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="9" y1="17" x2="12" y2="17" stroke="#9b82d4" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const catLabel = (cat) => ({ xray: 'Снимок', analysis: 'Анализ', conclusion: 'Заключение' }[cat] || cat);

// ── Detail view ───────────────────────────────────────────────────────────────
const ResultDetail = ({ result, onBack }) => (
  <div style={{ height: '100%', overflowY: 'auto', background: RUSSDENT_COLORS.bg, fontFamily: FF }}>
    <div style={{ paddingTop: 62 }}>
      <RScreenHeader title={result.type} onBack={onBack} />
    </div>

    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 14, paddingBottom: 110 }}>
      {/* Image placeholder */}
      <div style={{
        borderRadius: 16, height: 180, position: 'relative', overflow: 'hidden',
        border: `2px dashed ${RUSSDENT_COLORS.border}`, background: '#e6e6ef',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 7px,rgba(200,200,220,0.22) 7px,rgba(200,200,220,0.22) 14px)',
        }} />
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" style={{ position: 'relative', zIndex: 1 }}>
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="#9b82d4" strokeWidth="1.5"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="#9b82d4"/>
          <path d="M21 15L16 10L11 15L8 12L3 17" stroke="#9b82d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p style={{ position: 'relative', zIndex: 1, margin: '8px 0 0', fontSize: 11, color: RUSSDENT_COLORS.textSecondary, fontFamily: 'monospace' }}>
          рентгеновский снимок / DICOM
        </p>
      </div>

      {/* Meta */}
      <RCard style={{ padding: 0 }}>
        {[['Дата', result.date], ['Врач', result.doctor], ['Тип', catLabel(result.cat)]].map(([k, v], i, arr) => (
          <div key={k} style={{
            display: 'flex', justifyContent: 'space-between', padding: '12px 16px',
            borderBottom: i < arr.length - 1 ? `1px solid ${RUSSDENT_COLORS.border}` : 'none',
          }}>
            <span style={{ fontSize: 13, color: RUSSDENT_COLORS.textSecondary, fontFamily: FF }}>{k}</span>
            <span style={{ fontSize: 13, fontWeight: 500, color: RUSSDENT_COLORS.textPrimary, fontFamily: FF }}>{v}</span>
          </div>
        ))}
      </RCard>

      {/* Doctor's note */}
      {result.desc ? (
        <RCard style={{ padding: 16 }}>
          <p style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 600, color: RUSSDENT_COLORS.textSecondary, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: FF }}>
            Заключение врача
          </p>
          <p style={{ margin: 0, fontSize: 14, color: RUSSDENT_COLORS.textPrimary, lineHeight: 1.55, fontFamily: FF }}>{result.desc}</p>
        </RCard>
      ) : (
        <div style={{ background: 'rgba(201,124,40,0.08)', border: '1px solid rgba(201,124,40,0.2)', borderRadius: 14, padding: '12px 16px', display: 'flex', gap: 10, alignItems: 'center' }}>
          <span style={{ fontSize: 18 }}>⏳</span>
          <p style={{ margin: 0, fontSize: 13, color: '#c97c28', fontFamily: FF }}>Результат ещё не готов — ожидайте уведомление</p>
        </div>
      )}

      {/* Actions */}
      <div style={{ display: 'flex', gap: 10 }}>
        <ROutlineBtn style={{ flex: 1 }}>Скачать JPEG</ROutlineBtn>
        <ROutlineBtn style={{ flex: 1 }}>Скачать DICOM</ROutlineBtn>
      </div>
      <ROutlineBtn style={{ color: RUSSDENT_COLORS.textPrimary, borderColor: RUSSDENT_COLORS.border, background: 'transparent' }}>
        Отправить врачу
      </ROutlineBtn>
    </div>
  </div>
);

// ── List view ─────────────────────────────────────────────────────────────────
const ResultsScreen = () => {
  const [cat,    setCat]    = React.useState('all');
  const [detail, setDetail] = React.useState(null);

  if (detail) return <ResultDetail result={detail} onBack={() => setDetail(null)} />;

  const filtered = RESULTS.filter(r => cat === 'all' || r.cat === cat);

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: RUSSDENT_COLORS.bg, fontFamily: FF }}>
      <div style={{ padding: '68px 20px 12px' }}>
        <h2 style={{ margin: '0 0 14px', fontSize: 20, fontWeight: 700, color: RUSSDENT_COLORS.textPrimary }}>Результаты</h2>
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 2 }}>
          {CATS.map(c => (
            <button key={c.id} onClick={() => setCat(c.id)} style={{
              padding: '7px 16px', borderRadius: 20, fontFamily: FF,
              fontSize: 13, fontWeight: cat === c.id ? 600 : 400,
              background: cat === c.id ? '#9b82d4' : RUSSDENT_COLORS.card,
              color: cat === c.id ? '#fff' : RUSSDENT_COLORS.textSecondary,
              border: cat === c.id ? 'none' : `1px solid ${RUSSDENT_COLORS.border}`,
              cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
              transition: 'background 0.15s',
            }}>{c.label}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: '12px 20px 110px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {filtered.map(r => (
          <div key={r.id} onClick={() => setDetail(r)} style={{
            background: RUSSDENT_COLORS.card, borderRadius: 14,
            border: `1px solid ${RUSSDENT_COLORS.border}`,
            padding: 14, cursor: 'pointer',
            display: 'flex', gap: 12, alignItems: 'center',
            boxShadow: `0 2px 12px ${RUSSDENT_COLORS.shadow}`,
          }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(155,130,212,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <DocIcon />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: RUSSDENT_COLORS.textPrimary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: FF }}>{r.type}</p>
              <p style={{ margin: '3px 0 0', fontSize: 12, color: RUSSDENT_COLORS.textSecondary, fontFamily: FF }}>{r.date} · {r.doctor}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 }}>
              <RBadge status={r.status} />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke={RUSSDENT_COLORS.textSecondary} strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { ResultsScreen });
