import React from 'react';
import { IOSDevice } from './IOSFrame';
import { RNavigation } from './Navigation';
import { RUSSDENT_COLORS } from './Shared';
import { HomeScreen }    from './screens/HomeScreen';
import { BookingScreen } from './screens/BookingScreen';
import { ResultsScreen } from './screens/ResultsScreen';
import { HistoryScreen } from './screens/HistoryScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import styles from './App.module.scss';

const MOBILE_QUERY = '(max-width: 600px)';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(
    () => window.matchMedia(MOBILE_QUERY).matches
  );
  React.useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isMobile;
};

const AppContent = ({ tab, setTab }) => (
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

export const App = () => {
  const [tab, setTab] = React.useState('home');
  const isMobile = useIsMobile();
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    if (isMobile) return;
    const update = () => {
      const sw = (window.innerWidth  - 32) / 402;
      const sh = (window.innerHeight - 32) / 874;
      setScale(Math.min(sw, sh, 1));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className={styles.mobileApp}>
        <AppContent tab={tab} setTab={setTab} />
      </div>
    );
  }

  return (
    <div className={styles.shell}>
      <div
        className={styles.scaler}
        style={{ transform: `translate(-50%, -50%) scale(${scale})` }}
      >
        <IOSDevice width={402} height={874}>
          <AppContent tab={tab} setTab={setTab} />
        </IOSDevice>
      </div>
    </div>
  );
};
