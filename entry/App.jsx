// App.jsx — root with IOSDevice shell + routing
const {
  RUSSDENT_COLORS, FF,
  RNavigation,
  HomeScreen, BookingScreen, ResultsScreen, HistoryScreen, ProfileScreen,
} = window;

const AppContent = () => {
  const [tab, setTab] = React.useState('home');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: RUSSDENT_COLORS.bg }}>
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        {tab === 'home'    && <HomeScreen    onTab={setTab} />}
        {tab === 'booking' && <BookingScreen />}
        {tab === 'results' && <ResultsScreen />}
        {tab === 'history' && <HistoryScreen />}
        {tab === 'profile' && <ProfileScreen />}
      </div>
      <RNavigation activeTab={tab} setActiveTab={setTab} />
    </div>
  );
};

const AppShell = () => {
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    const update = () => {
      const sw = (window.innerWidth  - 32) / 402;
      const sh = (window.innerHeight - 32) / 874;
      setScale(Math.min(sw, sh, 1));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'radial-gradient(ellipse at 50% 35%, #241a3c 0%, #0c0a18 65%)',
      padding: 16,
      fontFamily: FF,
    }}>
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        lineHeight: 'normal',
      }}>
        <IOSDevice width={402} height={874}>
          <AppContent />
        </IOSDevice>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AppShell />);
