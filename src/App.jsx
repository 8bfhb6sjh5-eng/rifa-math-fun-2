import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard.jsx';
import { TopicPage } from './pages/TopicPage.jsx';
import { ProgressPage } from './pages/ProgressPage.jsx';
import { useProgress } from './hooks/useProgress.js';

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const tabs = [
    { path: '/', label: 'Home', emoji: '🏠' },
    { path: '/progress', label: 'Progress', emoji: '📊' },
  ];

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      background: 'white', borderTop: '2px solid #F3E8FF',
      display: 'flex', padding: '8px 0 max(8px, env(safe-area-inset-bottom))',
      boxShadow: '0 -4px 20px rgba(192,132,252,0.15)',
      zIndex: 100,
    }}>
      {tabs.map(tab => {
        const active = path === tab.path;
        return (
          <button key={tab.path} onClick={() => navigate(tab.path)} style={{
            flex: 1, background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            padding: '6px 12px',
          }}>
            <span style={{ fontSize: '1.5rem', transform: active ? 'scale(1.15)' : 'scale(1)', transition: 'transform 0.2s' }}>
              {tab.emoji}
            </span>
            <span style={{
              fontSize: '0.7rem', fontWeight: 700,
              color: active ? '#FF6B9D' : '#8B6BA8',
              fontFamily: 'Nunito',
            }}>{tab.label}</span>
            {active && <div style={{ width: 20, height: 3, borderRadius: 3, background: 'linear-gradient(90deg, #FF6B9D, #C084FC)' }} />}
          </button>
        );
      })}
    </div>
  );
}

function AppInner() {
  const {
    progress,
    recordQuizScore,
    recordFlashcardComplete,
    recordTopicVisit,
    recordGamePlayed,
    getTopicMastery,
    clearProgress,
  } = useProgress();

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', minHeight: '100vh', paddingBottom: 80 }}>
      <Routes>
        <Route path="/" element={<Dashboard progress={progress} getTopicMastery={getTopicMastery} />} />
        <Route path="/topic/:topicId" element={
          <TopicPage
            recordQuizScore={recordQuizScore}
            recordFlashcardComplete={recordFlashcardComplete}
            recordTopicVisit={recordTopicVisit}
            recordGamePlayed={recordGamePlayed}
          />
        } />
        <Route path="/progress" element={
          <ProgressPage progress={progress} getTopicMastery={getTopicMastery} clearProgress={clearProgress} />
        } />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
