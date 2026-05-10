import React, { useState } from 'react';

export function Flashcards({ topic, onComplete }) {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [seen, setSeen] = useState([]);
  const [done, setDone] = useState(false);

  const cards = topic.flashcards;
  const card = cards[current];

  const handleFlip = () => setFlipped(f => !f);

  const handleNext = (knew) => {
    if (!seen.includes(current)) setSeen(s => [...s, current]);
    if (current + 1 >= cards.length) {
      setDone(true);
      onComplete && onComplete();
    } else {
      setCurrent(c => c + 1);
      setFlipped(false);
    }
  };

  if (done) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: 40 }}>
        <div style={{ fontSize: '4rem', marginBottom: 16 }}>🎉</div>
        <h2 style={{ fontFamily: 'Baloo 2', fontSize: '1.6rem', color: '#3B1F5E', marginBottom: 8 }}>
          Flashcards Complete!
        </h2>
        <p style={{ color: '#8B6BA8', marginBottom: 24 }}>
          You went through all {cards.length} flashcards! Well done, Rifa! ⭐
        </p>
        <button className="btn-primary" onClick={() => { setCurrent(0); setFlipped(false); setSeen([]); setDone(false); }}>
          🔄 Go Again
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress dots */}
      <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 20 }}>
        {cards.map((_, i) => (
          <div key={i} style={{
            width: 10, height: 10, borderRadius: '50%',
            background: i === current ? '#FF6B9D' : seen.includes(i) ? '#C084FC' : '#E9D5FF',
            transition: 'all 0.3s ease',
          }} />
        ))}
      </div>

      {/* Card */}
      <div onClick={handleFlip} style={{
        cursor: 'pointer',
        perspective: '1000px',
        marginBottom: 20,
        minHeight: 220,
      }}>
        <div style={{
          position: 'relative',
          width: '100%', minHeight: 220,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}>
          {/* Front */}
          <div style={{
            position: 'absolute', width: '100%', minHeight: 220,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, #FF6B9D, #C084FC)',
            borderRadius: 24, padding: 32,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(255, 107, 157, 0.35)',
          }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', marginBottom: 16, letterSpacing: 2, textTransform: 'uppercase' }}>
              Question {current + 1} of {cards.length}
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'white', textAlign: 'center', fontFamily: 'Baloo 2', lineHeight: 1.4 }}>
              {card.front}
            </div>
            <div style={{ marginTop: 20, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
              👆 Tap to flip
            </div>
          </div>

          {/* Back */}
          <div style={{
            position: 'absolute', width: '100%', minHeight: 220,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #6EE7B7, #93C5FD)',
            borderRadius: 24, padding: 32,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(110, 231, 183, 0.35)',
          }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', marginBottom: 16, letterSpacing: 2, textTransform: 'uppercase' }}>
              Answer ✨
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', textAlign: 'center', fontFamily: 'Baloo 2', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
              {card.back}
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      {flipped && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="slide-up">
          <button onClick={() => handleNext(false)} style={{
            background: '#FFF1F2', border: '2px solid #F43F5E', borderRadius: 14,
            padding: '12px 20px', color: '#BE123C', fontWeight: 700, fontSize: '0.95rem', fontFamily: 'Nunito',
          }}>
            😅 Need more practice
          </button>
          <button onClick={() => handleNext(true)} style={{
            background: '#ECFDF5', border: '2px solid #10B981', borderRadius: 14,
            padding: '12px 20px', color: '#065F46', fontWeight: 700, fontSize: '0.95rem', fontFamily: 'Nunito',
          }}>
            ✅ Got it!
          </button>
        </div>
      )}
    </div>
  );
}
