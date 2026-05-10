import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TOPICS } from '../data/curriculum.js';

export function ProgressPage({ progress, getTopicMastery, clearProgress }) {
  const navigate = useNavigate();
  const weakAreas = progress.weakAreas || {};
  const quizScores = progress.quizScores || {};

  const topicsWithData = TOPICS.filter(t => quizScores[t.id]);

  return (
    <div style={{ padding: '24px 16px 40px' }}>
      <h1 style={{ fontFamily: 'Baloo 2', fontSize: '1.7rem', color: '#3B1F5E', marginBottom: 6 }}>
        📊 Rifa's Progress
      </h1>
      <p style={{ color: '#8B6BA8', marginBottom: 24 }}>See how far you've come! 🌟</p>

      {/* Overall stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
        {[
          { label: 'Total Stars', value: progress.totalStars || 0, emoji: '⭐', color: '#F59E0B' },
          { label: 'Topics Done', value: (progress.visitedTopics || []).length, emoji: '📚', color: '#10B981' },
          { label: 'Quizzes Taken', value: Object.values(quizScores).reduce((s, a) => s + a.length, 0), emoji: '✏️', color: '#6366F1' },
          { label: 'Games Played', value: progress.gamesPlayed || 0, emoji: '🎮', color: '#EC4899' },
        ].map(s => (
          <div key={s.label} className="card" style={{ textAlign: 'center', padding: 20 }}>
            <div style={{ fontSize: '1.8rem', marginBottom: 6 }}>{s.emoji}</div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: s.color, fontFamily: 'Baloo 2' }}>{s.value}</div>
            <div style={{ fontSize: '0.8rem', color: '#8B6BA8', fontWeight: 700 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Weak areas */}
      {Object.keys(weakAreas).length > 0 && (
        <div style={{ background: 'linear-gradient(135deg, #FFF7ED, #FFFBEB)', border: '2px solid #FDE68A', borderRadius: 20, padding: 20, marginBottom: 24 }}>
          <h2 style={{ fontFamily: 'Baloo 2', fontSize: '1.2rem', color: '#92400E', marginBottom: 12 }}>
            💡 Areas to Practise More
          </h2>
          {Object.entries(weakAreas).map(([topicId, questions]) => {
            const topic = TOPICS.find(t => t.id === topicId);
            if (!topic) return null;
            return (
              <div key={topicId} style={{ background: 'white', borderRadius: 14, padding: 14, marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontWeight: 800, color: '#3B1F5E' }}>{topic.emoji} {topic.title}</span>
                  <button onClick={() => navigate(`/topic/${topicId}`)} style={{
                    background: topic.color, color: 'white', border: 'none', borderRadius: 8,
                    padding: '4px 12px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'Nunito',
                  }}>Practise</button>
                </div>
                {(questions || []).slice(0, 3).map((q, i) => (
                  <p key={i} style={{ fontSize: '0.85rem', color: '#B45309', marginBottom: 2 }}>
                    ❓ {q}
                  </p>
                ))}
                {questions?.length > 3 && (
                  <p style={{ fontSize: '0.8rem', color: '#D97706' }}>+ {questions.length - 3} more questions</p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Topic-by-topic breakdown */}
      <h2 style={{ fontFamily: 'Baloo 2', fontSize: '1.2rem', color: '#3B1F5E', marginBottom: 14 }}>
        📈 Topic Scores
      </h2>
      {topicsWithData.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: 32 }}>
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>🌱</div>
          <p style={{ color: '#8B6BA8' }}>No quiz scores yet! Start learning to see your progress here.</p>
          <button className="btn-primary" onClick={() => navigate('/')} style={{ marginTop: 16 }}>Start Learning!</button>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 12 }}>
          {TOPICS.map(topic => {
            const scores = quizScores[topic.id] || [];
            if (scores.length === 0) return null;
            const mastery = getTopicMastery(topic.id);
            const best = Math.max(...scores.map(s => Math.round((s.score / s.total) * 100)));
            const attempts = scores.length;
            return (
              <div key={topic.id} className="card" style={{ padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: `linear-gradient(135deg, ${topic.color}, ${topic.color}88)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem',
                  }}>{topic.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, color: '#3B1F5E', marginBottom: 2 }}>{topic.title}</div>
                    <div style={{ fontSize: '0.8rem', color: '#8B6BA8' }}>{attempts} attempt{attempts !== 1 ? 's' : ''} · Best: {best}%</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: topic.color, fontFamily: 'Baloo 2' }}>{mastery}%</div>
                    <div style={{ fontSize: '0.75rem', color: '#8B6BA8' }}>Latest</div>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${mastery}%`, background: `linear-gradient(90deg, ${topic.color}, ${topic.color}88)` }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                  <span style={{ fontSize: '0.75rem', color: '#8B6BA8' }}>0%</span>
                  <span style={{ fontSize: '0.75rem', color: '#8B6BA8' }}>
                    {mastery >= 90 ? '🏆 Mastered!' : mastery >= 60 ? '🌟 Good' : '💪 Keep going!'}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#8B6BA8' }}>100%</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Reset button */}
      <div style={{ marginTop: 32, textAlign: 'center' }}>
        <button onClick={() => {
          if (confirm('Are you sure you want to reset all progress?')) clearProgress();
        }} style={{
          background: 'none', border: '2px solid #E9D5FF', borderRadius: 50,
          padding: '10px 24px', color: '#8B6BA8', fontSize: '0.85rem', fontWeight: 700,
          cursor: 'pointer', fontFamily: 'Nunito',
        }}>
          🔄 Reset All Progress
        </button>
      </div>
    </div>
  );
}
