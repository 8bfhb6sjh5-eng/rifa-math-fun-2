import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TOPICS } from '../data/curriculum.js';
import { Quiz } from '../components/Quiz.jsx';
import { Flashcards } from '../components/Flashcards.jsx';
import { GameHub } from '../components/Games.jsx';
import { TopicVisual } from '../components/TopicVisuals.jsx';

const TABS = [
  { id: 'learn', label: 'Learn', emoji: '📖' },
  { id: 'flashcards', label: 'Flashcards', emoji: '⚡' },
  { id: 'quiz', label: 'Quiz', emoji: '✏️' },
  { id: 'games', label: 'Games', emoji: '🎮' },
];

export function TopicPage({ recordQuizScore, recordFlashcardComplete, recordTopicVisit, recordGamePlayed }) {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState('learn');

  const topic = TOPICS.find(t => t.id === topicId);

  useEffect(() => {
    if (topic) recordTopicVisit(topicId);
  }, [topicId]);

  if (!topic) return (
    <div style={{ padding: 32, textAlign: 'center' }}>
      <p>Topic not found!</p>
      <button className="btn-primary" onClick={() => navigate('/')}>Go Home</button>
    </div>
  );

  const handleQuizComplete = (score, total, wrongQs) => {
    recordQuizScore(topicId, score, total, wrongQs.map(i => topic.quiz[i]?.q));
  };

  return (
    <div style={{ paddingBottom: 40 }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${topic.color}, ${topic.color}88)`,
        padding: '24px 20px 32px',
        borderRadius: '0 0 32px 32px',
        marginBottom: 0,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
        <button onClick={() => navigate('/')} style={{
          background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 12,
          padding: '8px 14px', color: 'white', fontWeight: 700, fontSize: '0.9rem',
          marginBottom: 16, cursor: 'pointer', fontFamily: 'Nunito',
        }}>
          ← Back
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ fontSize: '3.5rem', animation: 'float 3s ease-in-out infinite' }}>{topic.emoji}</div>
          <div>
            <h1 style={{ fontFamily: 'Baloo 2', fontSize: '1.7rem', color: 'white', lineHeight: 1.1 }}>{topic.title}</h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', marginTop: 4 }}>{topic.description}</p>
          </div>
        </div>
      </div>

      {/* Tab nav */}
      <div style={{
        display: 'flex', gap: 0,
        background: 'white',
        borderRadius: '0 0 20px 20px',
        padding: '0 12px',
        boxShadow: '0 4px 20px rgba(192,132,252,0.12)',
        marginBottom: 20,
        overflowX: 'auto',
      }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex: '0 0 auto', padding: '14px 16px',
            background: 'none', border: 'none', cursor: 'pointer',
            fontWeight: tab === t.id ? 800 : 600,
            color: tab === t.id ? topic.color : '#8B6BA8',
            borderBottom: tab === t.id ? `3px solid ${topic.color}` : '3px solid transparent',
            fontSize: '0.9rem', fontFamily: 'Nunito',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap',
          }}>
            {t.emoji} {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '0 16px' }}>
        {/* LEARN TAB */}
        {tab === 'learn' && (
          <div>
            {/* Key facts */}
            <div className="card" style={{ marginBottom: 16, background: `linear-gradient(135deg, ${topic.colorPale}, white)` }}>
              <h3 style={{ fontFamily: 'Baloo 2', fontSize: '1.2rem', color: '#3B1F5E', marginBottom: 14 }}>
                🌟 Key Facts
              </h3>
              <div style={{ display: 'grid', gap: 10 }}>
                {topic.keyFacts.map((fact, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    background: 'white', borderRadius: 12, padding: '12px 16px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  }}>
                    <span style={{
                      width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                      background: `linear-gradient(135deg, ${topic.color}, ${topic.color}88)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', fontWeight: 900, fontSize: '0.85rem',
                    }}>{i + 1}</span>
                    <span style={{ color: '#3B1F5E', fontWeight: 600, lineHeight: 1.5 }}>{fact}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtopics */}
            <div className="card" style={{ marginBottom: 16 }}>
              <h3 style={{ fontFamily: 'Baloo 2', fontSize: '1.1rem', color: '#3B1F5E', marginBottom: 12 }}>
                📋 What You'll Learn
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {topic.subtopics.map(s => (
                  <span key={s} style={{
                    background: topic.colorPale, color: topic.color,
                    borderRadius: 50, padding: '6px 14px',
                    fontWeight: 700, fontSize: '0.85rem',
                    border: `1.5px solid ${topic.color}44`,
                  }}>{s}</span>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div style={{ marginBottom: 16 }}>
              <TopicVisual topicId={topicId} />
            </div>

            {/* Start buttons */}
            <div style={{ display: 'grid', gap: 12 }}>
              <button className="btn-primary" onClick={() => setTab('flashcards')} style={{ width: '100%', justifyContent: 'center', background: `linear-gradient(135deg, ${topic.color}, ${topic.color}88)` }}>
                ⚡ Practice Flashcards
              </button>
              <button className="btn-secondary" onClick={() => setTab('quiz')} style={{ width: '100%', justifyContent: 'center' }}>
                ✏️ Take the Quiz
              </button>
              <button className="btn-secondary" onClick={() => setTab('games')} style={{ width: '100%', justifyContent: 'center' }}>
                🎮 Play Games
              </button>
            </div>
          </div>
        )}

        {/* FLASHCARDS TAB */}
        {tab === 'flashcards' && (
          <Flashcards topic={topic} onComplete={() => recordFlashcardComplete(topicId)} />
        )}

        {/* QUIZ TAB */}
        {tab === 'quiz' && (
          <Quiz topic={topic} onComplete={handleQuizComplete} />
        )}

        {/* GAMES TAB */}
        {tab === 'games' && (
          <GameHub topicId={topicId} onGamePlayed={recordGamePlayed} />
        )}
      </div>
    </div>
  );
}
