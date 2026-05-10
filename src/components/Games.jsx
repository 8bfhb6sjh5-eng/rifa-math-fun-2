import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Confetti } from '../utils/confetti.jsx';

// ─── GAME 1: Number Pop - pop the correct answer bubbles ───────────────────
function NumberPop({ onDone }) {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(null);
  const [bubbles, setBubbles] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [feedback, setFeedback] = useState(null);
  const [finished, setFinished] = useState(false);

  const newQuestion = useCallback(() => {
    const ops = ['+', '-'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a, b, ans;
    if (op === '+') {
      a = Math.floor(Math.random() * 20) + 1;
      b = Math.floor(Math.random() * 20) + 1;
      ans = a + b;
    } else {
      a = Math.floor(Math.random() * 20) + 10;
      b = Math.floor(Math.random() * a);
      ans = a - b;
    }
    const wrong = new Set([ans]);
    const opts = [ans];
    while (opts.length < 4) {
      const w = ans + (Math.floor(Math.random() * 10) - 5);
      if (w > 0 && !wrong.has(w)) { wrong.add(w); opts.push(w); }
    }
    opts.sort(() => Math.random() - 0.5);
    const colors = ['#FF6B9D', '#C084FC', '#6EE7B7', '#93C5FD'];
    setBubbles(opts.map((v, i) => ({ val: v, color: colors[i], id: Math.random(), popped: false })));
    setQuestion({ a, b, op, ans });
  }, []);

  useEffect(() => { newQuestion(); }, []);

  useEffect(() => {
    if (finished) return;
    const t = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { setFinished(true); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [finished]);

  const pop = (bubble) => {
    if (bubble.popped || !question) return;
    if (bubble.val === question.ans) {
      setScore(s => s + 1);
      setFeedback('🎉 Correct!');
      setTimeout(() => { setFeedback(null); newQuestion(); }, 700);
    } else {
      setFeedback('❌ Try again!');
      setTimeout(() => setFeedback(null), 600);
    }
    setBubbles(b => b.map(bub => bub.id === bubble.id ? { ...bub, popped: true } : bub));
  };

  if (finished) {
    return (
      <div style={{ textAlign: 'center', padding: 32 }}>
        <Confetti active={score >= 8} />
        <div style={{ fontSize: '4rem', marginBottom: 16 }}>🏆</div>
        <h3 style={{ fontFamily: 'Baloo 2', fontSize: '1.6rem', color: '#3B1F5E' }}>Time's Up!</h3>
        <p style={{ color: '#8B6BA8', fontSize: '1.2rem', marginTop: 8 }}>You got <strong style={{ color: '#FF6B9D' }}>{score}</strong> right! ⭐</p>
        <button className="btn-primary" style={{ marginTop: 24 }} onClick={onDone}>🔙 Back to Games</button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <div style={{ background: '#FFF0F6', borderRadius: 12, padding: '8px 16px' }}>
          <span style={{ fontWeight: 800, color: '#FF6B9D' }}>⭐ Score: {score}</span>
        </div>
        <div style={{ background: timeLeft <= 10 ? '#FFF1F2' : '#F5F0FF', borderRadius: 12, padding: '8px 16px' }}>
          <span style={{ fontWeight: 800, color: timeLeft <= 10 ? '#F43F5E' : '#9333EA' }}>⏱ {timeLeft}s</span>
        </div>
      </div>
      {question && (
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ background: 'linear-gradient(135deg, #FF6B9D, #C084FC)', borderRadius: 20, padding: '20px 32px', display: 'inline-block' }}>
            <span style={{ fontSize: '2rem', fontWeight: 900, color: 'white', fontFamily: 'Baloo 2' }}>
              {question.a} {question.op} {question.b} = ?
            </span>
          </div>
          {feedback && (
            <div style={{ marginTop: 12, fontSize: '1.3rem', fontWeight: 700, animation: 'pop-in 0.3s ease' }}>
              {feedback}
            </div>
          )}
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {bubbles.map(b => (
          <button key={b.id} onClick={() => pop(b)} style={{
            background: b.popped ? '#F3F4F6' : b.color,
            border: 'none', borderRadius: '50%', width: '100%', aspectRatio: '1',
            fontSize: '1.8rem', fontWeight: 900, color: b.popped ? '#D1D5DB' : 'white',
            fontFamily: 'Baloo 2', cursor: b.popped ? 'default' : 'pointer',
            boxShadow: b.popped ? 'none' : `0 6px 20px ${b.color}66`,
            transform: b.popped ? 'scale(0.85)' : 'scale(1)',
            transition: 'all 0.25s ease',
            maxWidth: 140, margin: 'auto',
          }}>
            {b.popped ? '💨' : b.val}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── GAME 2: Times Table Zap - choose the correct answer ─────────────────────
function TimesTableZap({ onDone }) {
  const [table, setTable] = useState(2);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [done, setDone] = useState(false);

  const questions = Array.from({ length: 10 }, (_, i) => ({
    a: i + 1,
    b: table,
    ans: (i + 1) * table,
    opts: [...new Set([(i + 1) * table,
      Math.max(1, (i + 1) * table + table),
      Math.max(1, (i + 1) * table - table),
      Math.max(1, (i + 1) * table + 1)])].slice(0, 4).sort(() => Math.random() - 0.5)
  }));

  const q = questions[current];

  const answer = (opt) => {
    if (answered) return;
    setSelected(opt);
    setAnswered(true);
    if (opt === q.ans) setScore(s => s + 1);
  };

  const next = () => {
    if (current + 1 >= 10) { setDone(true); return; }
    setCurrent(c => c + 1);
    setSelected(null);
    setAnswered(false);
  };

  if (!started) {
    return (
      <div style={{ textAlign: 'center', padding: 24 }}>
        <div style={{ fontSize: '3rem', marginBottom: 16 }}>⚡</div>
        <h3 style={{ fontFamily: 'Baloo 2', fontSize: '1.5rem', color: '#3B1F5E', marginBottom: 16 }}>Times Table Zap!</h3>
        <p style={{ color: '#8B6BA8', marginBottom: 24 }}>Choose your times table:</p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
          {[2, 5, 10].map(t => (
            <button key={t} onClick={() => setTable(t)} style={{
              background: table === t ? 'linear-gradient(135deg, #FF6B9D, #C084FC)' : 'white',
              color: table === t ? 'white' : '#9333EA',
              border: '2.5px solid #C084FC', borderRadius: 50, width: 56, height: 56,
              fontSize: '1.3rem', fontWeight: 900, fontFamily: 'Baloo 2', cursor: 'pointer',
            }}>{t}×</button>
          ))}
        </div>
        <button className="btn-primary" onClick={() => setStarted(true)}>⚡ Start!</button>
      </div>
    );
  }

  if (done) {
    return (
      <div style={{ textAlign: 'center', padding: 32 }}>
        <Confetti active={score >= 8} />
        <div style={{ fontSize: '4rem', marginBottom: 16 }}>{score === 10 ? '🏆' : '🌟'}</div>
        <h3 style={{ fontFamily: 'Baloo 2', fontSize: '1.6rem', color: '#3B1F5E' }}>
          {score === 10 ? 'Perfect! Amazing Rifa!' : `Great effort, Rifa!`}
        </h3>
        <p style={{ color: '#8B6BA8', marginTop: 8, fontSize: '1.2rem' }}>
          Score: <strong style={{ color: '#FF6B9D' }}>{score}/10</strong>
        </p>
        <button className="btn-primary" style={{ marginTop: 24 }} onClick={onDone}>🔙 Back to Games</button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ background: '#FFF0F6', borderRadius: 12, padding: '8px 16px', fontWeight: 800, color: '#FF6B9D' }}>⭐ {score}</span>
        <span style={{ background: '#F5F0FF', borderRadius: 12, padding: '8px 16px', fontWeight: 800, color: '#9333EA' }}>Q{current + 1}/10</span>
      </div>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <div style={{ background: 'linear-gradient(135deg, #6EE7B7, #93C5FD)', borderRadius: 20, padding: '20px 32px', display: 'inline-block' }}>
          <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', fontFamily: 'Baloo 2' }}>
            {q.a} × {table} = ?
          </span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {q.opts.map((opt, i) => {
          let bg = 'white', border = '2.5px solid #E9D5FF', color = '#3B1F5E';
          if (answered && opt === q.ans) { bg = '#ECFDF5'; border = '2.5px solid #10B981'; color = '#065F46'; }
          else if (answered && opt === selected) { bg = '#FFF1F2'; border = '2.5px solid #F43F5E'; color = '#BE123C'; }
          return (
            <button key={i} onClick={() => answer(opt)} style={{
              background: bg, border, borderRadius: 14, padding: '16px', color,
              fontSize: '1.4rem', fontWeight: 900, fontFamily: 'Baloo 2', cursor: answered ? 'default' : 'pointer',
              transition: 'all 0.2s',
            }}>{opt}</button>
          );
        })}
      </div>
      {answered && (
        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }} onClick={next}>
          {current + 1 >= 10 ? '🏁 Finish' : '➡️ Next'}
        </button>
      )}
    </div>
  );
}

// ─── GAME 3: Clock Challenge ───────────────────────────────────────────────────
function ClockChallenge({ onDone }) {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const rounds = 8;
  const times = [
    { h: 3, m: 0, label: "3 o'clock" },
    { h: 6, m: 30, label: "Half past 6" },
    { h: 9, m: 15, label: "Quarter past 9" },
    { h: 2, m: 45, label: "Quarter to 3" },
    { h: 5, m: 0, label: "5 o'clock" },
    { h: 11, m: 30, label: "Half past 11" },
    { h: 4, m: 15, label: "Quarter past 4" },
    { h: 8, m: 45, label: "Quarter to 9" },
  ].sort(() => Math.random() - 0.5);

  const current = times[round];
  const distractors = [
    "Half past " + current.h,
    "Quarter past " + ((current.h % 12) + 1),
    current.h + " o'clock",
    "Quarter to " + ((current.h % 12) + 1),
    "Half past " + ((current.h + 1) % 12),
  ].filter(d => d !== current.label);

  const opts = [current.label, ...distractors.slice(0, 3)].sort(() => Math.random() - 0.5);

  const r = 70;
  const cx = r, cy = r;
  const toRad = deg => (deg * Math.PI) / 180;
  const minuteAngle = (current.m / 60) * 360 - 90;
  const hourAngle = ((current.h % 12) / 12) * 360 + (current.m / 60) * 30 - 90;
  const mEnd = { x: cx + r * 0.78 * Math.cos(toRad(minuteAngle)), y: cy + r * 0.78 * Math.sin(toRad(minuteAngle)) };
  const hEnd = { x: cx + r * 0.55 * Math.cos(toRad(hourAngle)), y: cy + r * 0.55 * Math.sin(toRad(hourAngle)) };

  const answer = (opt) => {
    if (answered) return;
    setSelected(opt);
    setAnswered(true);
    if (opt === current.label) setScore(s => s + 1);
  };

  const next = () => {
    if (round + 1 >= rounds) { setFinished(true); return; }
    setRound(r => r + 1);
    setSelected(null);
    setAnswered(false);
  };

  if (finished) {
    return (
      <div style={{ textAlign: 'center', padding: 32 }}>
        <Confetti active={score >= 6} />
        <div style={{ fontSize: '4rem', marginBottom: 16 }}>🕐</div>
        <h3 style={{ fontFamily: 'Baloo 2', fontSize: '1.6rem', color: '#3B1F5E' }}>Clock Challenge Done!</h3>
        <p style={{ color: '#8B6BA8', marginTop: 8, fontSize: '1.2rem' }}>
          Score: <strong style={{ color: '#FF6B9D' }}>{score}/{rounds}</strong>
        </p>
        <button className="btn-primary" style={{ marginTop: 24 }} onClick={onDone}>🔙 Back to Games</button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ background: '#FFF0F6', borderRadius: 12, padding: '8px 16px', fontWeight: 800, color: '#FF6B9D' }}>⭐ {score}</span>
        <span style={{ background: '#F5F0FF', borderRadius: 12, padding: '8px 16px', fontWeight: 800, color: '#9333EA' }}>Q{round + 1}/{rounds}</span>
      </div>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <p style={{ fontWeight: 700, color: '#3B1F5E', fontSize: '1.1rem', marginBottom: 16 }}>What time does this clock show?</p>
        <svg width={r * 2} height={r * 2} style={{ filter: 'drop-shadow(0 4px 12px rgba(147,51,234,0.2))', marginBottom: 8 }}>
          <circle cx={cx} cy={cy} r={r - 2} fill="white" stroke="#E9D5FF" strokeWidth={4} />
          <circle cx={cx} cy={cy} r={r - 6} fill="#FFF5FB" />
          {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => {
            const a = (n / 12) * 360 - 90;
            return <text key={n} x={cx + r * 0.72 * Math.cos(toRad(a))} y={cy + r * 0.72 * Math.sin(toRad(a))}
              textAnchor="middle" dominantBaseline="central" fontSize={r * 0.14}
              fontFamily="'Baloo 2'" fontWeight="700" fill="#3B1F5E">{n}</text>;
          })}
          <line x1={cx} y1={cy} x2={hEnd.x} y2={hEnd.y} stroke="#9333EA" strokeWidth={r * 0.065} strokeLinecap="round" />
          <line x1={cx} y1={cy} x2={mEnd.x} y2={mEnd.y} stroke="#FF6B9D" strokeWidth={r * 0.045} strokeLinecap="round" />
          <circle cx={cx} cy={cy} r={r * 0.06} fill="#3B1F5E" />
        </svg>
      </div>
      <div style={{ display: 'grid', gap: 10 }}>
        {opts.map((opt, i) => {
          let bg = 'white', border = '2.5px solid #E9D5FF', color = '#3B1F5E';
          if (answered && opt === current.label) { bg = '#ECFDF5'; border = '2.5px solid #10B981'; color = '#065F46'; }
          else if (answered && opt === selected) { bg = '#FFF1F2'; border = '2.5px solid #F43F5E'; color = '#BE123C'; }
          return (
            <button key={i} onClick={() => answer(opt)} style={{
              background: bg, border, borderRadius: 14, padding: '12px 20px', color,
              fontSize: '1rem', fontWeight: 700, fontFamily: 'Nunito', cursor: answered ? 'default' : 'pointer',
              transition: 'all 0.2s', textAlign: 'left',
            }}>{opt}</button>
          );
        })}
      </div>
      {answered && (
        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }} onClick={next}>
          {round + 1 >= rounds ? '🏁 Finish' : '➡️ Next'}
        </button>
      )}
    </div>
  );
}

// ─── GAME HUB ─────────────────────────────────────────────────────────────────
export function GameHub({ topicId, onGamePlayed }) {
  const [activeGame, setActiveGame] = useState(null);

  const allGames = [
    { id: 'number-pop', title: 'Number Pop! 🫧', desc: 'Pop the bubble with the correct answer!', color: '#FF6B9D', topics: ['addition', 'subtraction', 'place-value'] },
    { id: 'times-zap', title: 'Times Table Zap ⚡', desc: 'Race through your times tables!', color: '#C084FC', topics: ['multiplication', 'division'] },
    { id: 'clock-challenge', title: 'Clock Challenge 🕐', desc: 'What time does the clock show?', color: '#6366F1', topics: ['time'] },
  ];

  // Show relevant + all games
  const relevant = allGames.filter(g => g.topics.includes(topicId));
  const others = allGames.filter(g => !g.topics.includes(topicId));
  const games = [...relevant, ...others];

  const launchGame = (id) => {
    setActiveGame(id);
    onGamePlayed && onGamePlayed();
  };

  const back = () => setActiveGame(null);

  if (activeGame === 'number-pop') return <NumberPop onDone={back} />;
  if (activeGame === 'times-zap') return <TimesTableZap onDone={back} />;
  if (activeGame === 'clock-challenge') return <ClockChallenge onDone={back} />;

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <h3 style={{ fontFamily: 'Baloo 2', fontSize: '1.3rem', color: '#3B1F5E' }}>🎮 Fun Games</h3>
        <p style={{ color: '#8B6BA8', fontSize: '0.9rem' }}>Play to practise your maths!</p>
      </div>
      <div style={{ display: 'grid', gap: 14 }}>
        {games.map(g => (
          <button key={g.id} onClick={() => launchGame(g.id)} style={{
            background: 'white', border: `2.5px solid ${g.color}33`,
            borderRadius: 18, padding: '18px 20px', cursor: 'pointer',
            textAlign: 'left', transition: 'all 0.3s ease',
            boxShadow: `0 4px 16px ${g.color}15`,
            display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: 16,
              background: `linear-gradient(135deg, ${g.color}, ${g.color}88)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.8rem', flexShrink: 0,
            }}>
              {g.title.slice(-2)}
            </div>
            <div>
              <div style={{ fontWeight: 800, color: '#3B1F5E', fontFamily: 'Baloo 2', fontSize: '1.05rem' }}>{g.title.slice(0, -3)}</div>
              <div style={{ color: '#8B6BA8', fontSize: '0.85rem', marginTop: 2 }}>{g.desc}</div>
              {relevant.some(r => r.id === g.id) && (
                <span style={{ background: g.color + '22', color: g.color, fontSize: '0.75rem', fontWeight: 700, borderRadius: 50, padding: '2px 10px', marginTop: 6, display: 'inline-block' }}>
                  🌟 Recommended
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
