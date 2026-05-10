import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOPICS } from '../data/curriculum.js';

const CHARACTERS = [
  { mood: 'happy', emoji: '🌟', msg: "Let's learn maths today, Rifa!" },
  { mood: 'excited', emoji: '✨', msg: 'You\'re doing amazing, Rifa! Keep going!' },
  { mood: 'proud', emoji: '💫', msg: 'Every star earned makes you smarter!' },
  { mood: 'encouraging', emoji: '🦋', msg: 'Maths is magical when you believe in yourself!' },
];

export function Dashboard({ progress, getTopicMastery }) {
  const navigate = useNavigate();
  const [charIdx] = useState(Math.floor(Math.random() * CHARACTERS.length));
  const char = CHARACTERS[charIdx];

  const totalStars = progress.totalStars || 0;
  const visitedCount = (progress.visitedTopics || []).length;
  const weakTopics = Object.keys(progress.weakAreas || {});

  const starLevel = totalStars < 10 ? 'Maths Seedling 🌱' :
    totalStars < 30 ? 'Maths Sprout 🌸' :
    totalStars < 60 ? 'Maths Blossom 🌺' : 'Maths Superstar 🌟';

  return (
    <div style={{ padding: '0 0 40px' }}>
      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B9D 0%, #C084FC 50%, #93C5FD 100%)',
        borderRadius: '0 0 40px 40px',
        padding: '32px 24px 40px',
        marginBottom: 28,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }} />
        <div style={{ position: 'absolute', bottom: -30, left: -10, width: 90, height: 90, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, position: 'relative' }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'rgba(255,255,255,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2.5rem',
            animation: 'float 3s ease-in-out infinite',
          }}>{char.emoji}</div>
          <div>
            <h1 style={{ fontFamily: 'Baloo 2', fontSize: '1.8rem', color: 'white', lineHeight: 1.1 }}>
              Hi Rifa! 👋
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', marginTop: 4 }}>
              {char.msg}
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {[
            { label: 'Stars Earned', value: totalStars, emoji: '⭐' },
            { label: 'Topics Explored', value: `${visitedCount}/${TOPICS.length}`, emoji: '🗺️' },
            { label: 'My Level', value: starLevel.split(' ')[0], emoji: starLevel.split(' ')[1] || '🌟' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 16, padding: '12px 8px', textAlign: 'center', backdropFilter: 'blur(8px)' }}>
              <div style={{ fontSize: '1.3rem' }}>{s.emoji}</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'white', fontFamily: 'Baloo 2' }}>{s.value}</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)', fontWeight: 700 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '0 16px' }}>
        {/* Weak areas alert */}
        {weakTopics.length > 0 && (
          <div style={{ background: 'linear-gradient(135deg, #FFF7ED, #FFFBEB)', border: '2px solid #FDE68A', borderRadius: 20, padding: 20, marginBottom: 24 }}>
            <h3 style={{ fontFamily: 'Baloo 2', color: '#92400E', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
              💡 Keep Practising!
            </h3>
            <p style={{ color: '#B45309', fontSize: '0.9rem', marginBottom: 12 }}>
              Rifa, you can get even better at these topics:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {weakTopics.map(id => {
                const topic = TOPICS.find(t => t.id === id);
                return topic ? (
                  <button key={id} onClick={() => navigate(`/topic/${id}`)} style={{
                    background: 'white', border: '2px solid #FDE68A', borderRadius: 50,
                    padding: '6px 14px', fontWeight: 700, color: '#92400E', cursor: 'pointer',
                    fontSize: '0.9rem', fontFamily: 'Nunito',
                  }}>
                    {topic.emoji} {topic.title}
                  </button>
                ) : null;
              })}
            </div>
          </div>
        )}

        {/* Topics grid */}
        <h2 style={{ fontFamily: 'Baloo 2', fontSize: '1.4rem', color: '#3B1F5E', marginBottom: 16 }}>
          📚 Choose a Topic
        </h2>
        <div style={{ display: 'grid', gap: 14 }}>
          {TOPICS.map(topic => {
            const mastery = getTopicMastery(topic.id);
            const visited = (progress.visitedTopics || []).includes(topic.id);
            const isWeak = weakTopics.includes(topic.id);

            return (
              <button key={topic.id} onClick={() => navigate(`/topic/${topic.id}`)} style={{
                background: 'white', border: `2.5px solid ${isWeak ? '#FDE68A' : topic.color + '33'}`,
                borderRadius: 22, padding: '18px 20px', cursor: 'pointer',
                textAlign: 'left', transition: 'all 0.3s ease',
                boxShadow: `0 4px 20px ${topic.color}18`,
                display: 'flex', alignItems: 'center', gap: 16,
              }}>
                {/* Icon */}
                <div style={{
                  width: 64, height: 64, borderRadius: 18, flexShrink: 0,
                  background: `linear-gradient(135deg, ${topic.color}, ${topic.color}88)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem',
                }}>
                  {topic.emoji}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                    <span style={{ fontWeight: 800, color: '#3B1F5E', fontFamily: 'Baloo 2', fontSize: '1.05rem' }}>
                      {topic.title}
                    </span>
                    {isWeak && <span style={{ fontSize: '0.7rem', background: '#FEF3C7', color: '#92400E', borderRadius: 50, padding: '2px 8px', fontWeight: 700 }}>Review</span>}
                    {mastery === 100 && <span style={{ fontSize: '0.7rem', background: '#ECFDF5', color: '#065F46', borderRadius: 50, padding: '2px 8px', fontWeight: 700 }}>✓ Mastered</span>}
                  </div>
                  <p style={{ color: '#8B6BA8', fontSize: '0.85rem', marginBottom: visited && mastery > 0 ? 8 : 0 }}>
                    {topic.description}
                  </p>
                  {visited && mastery > 0 && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <span style={{ fontSize: '0.75rem', color: '#8B6BA8', fontWeight: 700 }}>Progress</span>
                        <span style={{ fontSize: '0.75rem', color: topic.color, fontWeight: 800 }}>{mastery}%</span>
                      </div>
                      <div style={{ height: 6, background: '#F3E8FF', borderRadius: 6, overflow: 'hidden' }}>
                        <div style={{ width: `${mastery}%`, height: '100%', background: `linear-gradient(90deg, ${topic.color}, ${topic.color}88)`, borderRadius: 6 }} />
                      </div>
                    </div>
                  )}
                  {!visited && (
                    <span style={{ fontSize: '0.8rem', color: topic.color, fontWeight: 700 }}>Tap to start! →</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Achievements */}
        <h2 style={{ fontFamily: 'Baloo 2', fontSize: '1.4rem', color: '#3B1F5E', margin: '28px 0 16px' }}>
          🏆 Achievements
        </h2>
        <div style={{ background: 'white', borderRadius: 22, padding: 20, boxShadow: '0 4px 20px rgba(192,132,252,0.15)' }}>
          {(progress.achievements || []).length === 0 ? (
            <p style={{ color: '#8B6BA8', textAlign: 'center', padding: '16px 0' }}>
              Complete quizzes and games to earn achievements! 🌟
            </p>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {(progress.achievements || []).map(a => (
                <div key={a} style={{ background: 'linear-gradient(135deg, #FFF0F6, #F5F0FF)', border: '2px solid #E9D5FF', borderRadius: 14, padding: '10px 16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem' }}>⭐</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#9333EA' }}>{a}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
