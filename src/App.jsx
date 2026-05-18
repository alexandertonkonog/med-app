import React from 'react';
import { IOSDevice } from './IOSFrame';
import { RNavigation } from './Navigation';
import { RUSSDENT_COLORS, FF } from './Shared';
import { HomeScreen }    from './screens/HomeScreen';
import { BookingScreen } from './screens/BookingScreen';
import { ResultsScreen } from './screens/ResultsScreen';
import { HistoryScreen } from './screens/HistoryScreen';
import { ProfileScreen } from './screens/ProfileScreen';

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

export const App = () => {
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
        position: 'absolute'
      }}>
        <IOSDevice width={402} height={874}>
          <AppContent />
        </IOSDevice>
      </div>
    </div>
  );
};
