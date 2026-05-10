import React, { useState, useCallback } from 'react';
import { Confetti } from '../utils/confetti.jsx';

export function Quiz({ topic, onComplete }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [done, setDone] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const questions = topic.quiz;
  const q = questions[current];

  const handleSelect = useCallback((idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.answer) {
      setScore(s => s + 1);
      setShowConfetti(false);
      setTimeout(() => setShowConfetti(true), 10);
    } else {
      setWrongQuestions(w => [...w, current]);
    }
  }, [answered, q, current]);

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setDone(true);
      const finalScore = selected === q.answer ? score : score;
      onComplete && onComplete(finalScore, questions.length, wrongQuestions);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
      setShowConfetti(false);
    }
  };

  const pct = Math.round((score / questions.length) * 100);

  if (done) {
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0;
    return (
      <div className="card" style={{ textAlign: 'center', padding: 40 }}>
        <Confetti active={pct >= 80} />
        <div style={{ fontSize: '4rem', marginBottom: 16 }}>
          {pct >= 90 ? '🏆' : pct >= 60 ? '🌟' : pct >= 30 ? '⭐' : '💪'}
        </div>
        <h2 style={{ fontFamily: 'Baloo 2', fontSize: '1.8rem', color: '#3B1F5E', marginBottom: 8 }}>
          {pct >= 90 ? 'Amazing, Rifa!' : pct >= 60 ? 'Great job, Rifa!' : pct >= 30 ? 'Good try, Rifa!' : 'Keep practising!'}
        </h2>
        <p style={{ color: '#8B6BA8', fontSize: '1.1rem', marginBottom: 24 }}>
          You got <strong style={{ color: '#FF6B9D' }}>{score}</strong> out of <strong>{questions.length}</strong> correct!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 24 }}>
          {[1,2,3].map(s => (
            <span key={s} style={{ fontSize: '2.5rem', opacity: s <= stars ? 1 : 0.2, transition: 'opacity 0.5s', animationDelay: `${s * 0.2}s` }}>⭐</span>
          ))}
        </div>
        <div style={{ background: '#FFF0F6', borderRadius: 16, padding: 20, marginBottom: 24 }}>
          <p style={{ color: '#9333EA', fontWeight: 700, marginBottom: 12 }}>
            📊 Your Score: {pct}%
          </p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
        {wrongQuestions.length > 0 && (
          <div style={{ background: '#FFF7ED', borderRadius: 12, padding: 16, marginBottom: 20, textAlign: 'left' }}>
            <p style={{ color: '#C2410C', fontWeight: 700, marginBottom: 8 }}>💡 Review these questions:</p>
            {wrongQuestions.map(qi => (
              <p key={qi} style={{ color: '#9A3412', fontSize: '0.9rem', marginBottom: 4 }}>
                • {questions[qi].q}
              </p>
            ))}
          </div>
        )}
        <button className="btn-primary" onClick={() => { setCurrent(0); setSelected(null); setAnswered(false); setScore(0); setWrongQuestions([]); setDone(false); }}>
          🔄 Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <Confetti active={showConfetti} />
      {/* Progress */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ color: '#8B6BA8', fontWeight: 700, fontSize: '0.9rem' }}>
            Question {current + 1} of {questions.length}
          </span>
          <span style={{ color: '#FF6B9D', fontWeight: 700, fontSize: '0.9rem' }}>
            ⭐ {score} correct
          </span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${((current) / questions.length) * 100}%` }} />
        </div>
      </div>

      {/* Question */}
      <div className="card" style={{ marginBottom: 16, background: 'linear-gradient(135deg, #FFF5FB, #F5F0FF)' }}>
        <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#3B1F5E', lineHeight: 1.4, fontFamily: 'Baloo 2' }}>
          {q.q}
        </div>
      </div>

      {/* Options */}
      <div style={{ display: 'grid', gap: 10, marginBottom: 16 }}>
        {q.options.map((opt, i) => {
          let bg = 'white';
          let border = '2.5px solid #E9D5FF';
          let color = '#3B1F5E';
          if (answered) {
            if (i === q.answer) { bg = '#ECFDF5'; border = '2.5px solid #10B981'; color = '#065F46'; }
            else if (i === selected) { bg = '#FFF1F2'; border = '2.5px solid #F43F5E'; color = '#BE123C'; }
          } else if (selected === i) {
            bg = '#F5F0FF'; border = '2.5px solid #9333EA';
          }

          return (
            <button key={i} onClick={() => handleSelect(i)} style={{
              background: bg, border, borderRadius: 14, padding: '14px 20px',
              color, fontWeight: 700, fontSize: '1rem', fontFamily: 'Nunito',
              textAlign: 'left', cursor: answered ? 'default' : 'pointer',
              transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: 12,
              transform: !answered && 'none',
            }}>
              <span style={{
                width: 30, height: 30, borderRadius: '50%',
                background: answered && i === q.answer ? '#10B981' : answered && i === selected ? '#F43F5E' : '#F3E8FF',
                color: answered && (i === q.answer || i === selected) ? 'white' : '#9333EA',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.85rem', fontWeight: 800, flexShrink: 0,
              }}>
                {answered && i === q.answer ? '✓' : answered && i === selected ? '✗' : String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {answered && (
        <div className="card slide-up" style={{
          background: selected === q.answer ? '#ECFDF5' : '#FFF7ED',
          marginBottom: 16,
        }}>
          <p style={{ fontWeight: 700, color: selected === q.answer ? '#065F46' : '#92400E', marginBottom: 4 }}>
            {selected === q.answer ? '🎉 Correct!' : '💡 Not quite...'}
          </p>
          <p style={{ color: selected === q.answer ? '#047857' : '#B45309', fontSize: '0.95rem' }}>
            {q.explanation}
          </p>
        </div>
      )}

      {answered && (
        <button className="btn-primary" onClick={handleNext} style={{ width: '100%', justifyContent: 'center' }}>
          {current + 1 >= questions.length ? '🏁 See Results' : '➡️ Next Question'}
        </button>
      )}
    </div>
  );
}
