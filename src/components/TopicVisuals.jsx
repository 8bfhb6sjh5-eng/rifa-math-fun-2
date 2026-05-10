import React, { useState } from 'react';
import { AnalogClock } from './AnalogClock.jsx';

// Place Value interactive visual
function PlaceValueVisual() {
  const [tens, setTens] = useState(3);
  const [ones, setOnes] = useState(5);
  const number = tens * 10 + ones;

  return (
    <div style={{ background: 'white', borderRadius: 20, padding: 24 }}>
      <h4 style={{ fontFamily: 'Baloo 2', color: '#3B1F5E', marginBottom: 16, textAlign: 'center' }}>
        🔢 Tens and Ones Builder
      </h4>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ background: '#FFF0F6', borderRadius: 14, padding: 16, marginBottom: 10 }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FF6B9D', fontFamily: 'Baloo 2' }}>{tens}</div>
            <div style={{ fontSize: '0.85rem', color: '#8B6BA8', fontWeight: 700 }}>TENS</div>
          </div>
          <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
            <button onClick={() => setTens(t => Math.max(0, t - 1))} style={{ background: '#F5F0FF', border: 'none', borderRadius: 8, width: 36, height: 36, fontSize: '1.2rem', cursor: 'pointer', fontWeight: 800, color: '#9333EA' }}>−</button>
            <button onClick={() => setTens(t => Math.min(9, t + 1))} style={{ background: '#C084FC', border: 'none', borderRadius: 8, width: 36, height: 36, fontSize: '1.2rem', cursor: 'pointer', fontWeight: 800, color: 'white' }}>+</button>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ background: '#F5F0FF', borderRadius: 14, padding: 16, marginBottom: 10 }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#9333EA', fontFamily: 'Baloo 2' }}>{ones}</div>
            <div style={{ fontSize: '0.85rem', color: '#8B6BA8', fontWeight: 700 }}>ONES</div>
          </div>
          <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
            <button onClick={() => setOnes(o => Math.max(0, o - 1))} style={{ background: '#F5F0FF', border: 'none', borderRadius: 8, width: 36, height: 36, fontSize: '1.2rem', cursor: 'pointer', fontWeight: 800, color: '#9333EA' }}>−</button>
            <button onClick={() => setOnes(o => Math.min(9, o + 1))} style={{ background: '#C084FC', border: 'none', borderRadius: 8, width: 36, height: 36, fontSize: '1.2rem', cursor: 'pointer', fontWeight: 800, color: 'white' }}>+</button>
          </div>
        </div>
      </div>
      <div style={{ background: 'linear-gradient(135deg, #FF6B9D, #C084FC)', borderRadius: 16, padding: '16px 24px', textAlign: 'center' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>My number is</span>
        <div style={{ fontSize: '3rem', fontWeight: 900, color: 'white', fontFamily: 'Baloo 2', lineHeight: 1 }}>{number}</div>
        <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>{tens} tens + {ones} ones = {tens * 10} + {ones}</span>
      </div>
      {/* Visual blocks */}
      <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
        {Array.from({ length: tens }).map((_, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {Array.from({ length: 10 }).map((_, j) => (
              <div key={j} style={{ width: 14, height: 14, background: '#FF6B9D', borderRadius: 3 }} />
            ))}
          </div>
        ))}
        {Array.from({ length: ones }).map((_, i) => (
          <div key={i} style={{ width: 14, height: 14, background: '#9333EA', borderRadius: 3, alignSelf: 'flex-end' }} />
        ))}
      </div>
    </div>
  );
}

// Number line visual
function NumberLine({ start = 0, end = 20, highlight = [] }) {
  return (
    <div style={{ overflowX: 'auto', padding: '8px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, minWidth: 400 }}>
        {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(n => (
          <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 36 }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: highlight.includes(n) ? 'linear-gradient(135deg, #FF6B9D, #C084FC)' : '#F3E8FF',
              color: highlight.includes(n) ? 'white' : '#9333EA',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: '0.85rem', fontFamily: 'Baloo 2',
              boxShadow: highlight.includes(n) ? '0 3px 10px rgba(255,107,157,0.4)' : 'none',
              transition: 'all 0.3s',
            }}>{n}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Fraction visual
function FractionVisual() {
  const [fraction, setFraction] = useState({ num: 1, den: 2 });
  const fractions = [
    { num: 1, den: 2, label: 'Half (1/2)' },
    { num: 1, den: 4, label: 'Quarter (1/4)' },
    { num: 3, den: 4, label: 'Three Quarters (3/4)' },
    { num: 1, den: 3, label: 'Third (1/3)' },
  ];

  return (
    <div style={{ background: 'white', borderRadius: 20, padding: 24 }}>
      <h4 style={{ fontFamily: 'Baloo 2', color: '#3B1F5E', marginBottom: 16, textAlign: 'center' }}>
        🍰 Fraction Visualiser
      </h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 20 }}>
        {fractions.map(f => (
          <button key={f.label} onClick={() => setFraction(f)} style={{
            background: fraction.label === f.label ? 'linear-gradient(135deg, #FF6B9D, #C084FC)' : '#F5F0FF',
            color: fraction.label === f.label ? 'white' : '#9333EA',
            border: 'none', borderRadius: 50, padding: '8px 16px',
            fontWeight: 700, fontSize: '0.85rem', fontFamily: 'Nunito', cursor: 'pointer',
          }}>{f.label}</button>
        ))}
      </div>
      {/* Circle fraction */}
      <div style={{ textAlign: 'center' }}>
        <svg width={160} height={160} viewBox="0 0 160 160" style={{ display: 'block', margin: '0 auto 16px' }}>
          {Array.from({ length: fraction.den }).map((_, i) => {
            const startAngle = (i / fraction.den) * 360 - 90;
            const endAngle = ((i + 1) / fraction.den) * 360 - 90;
            const toRad = d => d * Math.PI / 180;
            const x1 = 80 + 70 * Math.cos(toRad(startAngle));
            const y1 = 80 + 70 * Math.sin(toRad(startAngle));
            const x2 = 80 + 70 * Math.cos(toRad(endAngle));
            const y2 = 80 + 70 * Math.sin(toRad(endAngle));
            const large = endAngle - startAngle > 180 ? 1 : 0;
            return (
              <path key={i}
                d={`M 80 80 L ${x1} ${y1} A 70 70 0 ${large} 1 ${x2} ${y2} Z`}
                fill={i < fraction.num ? '#FF6B9D' : '#F3E8FF'}
                stroke="white" strokeWidth={2}
              />
            );
          })}
        </svg>
        <div style={{ background: '#FFF0F6', borderRadius: 14, padding: '12px 24px', display: 'inline-block' }}>
          <span style={{ fontSize: '2rem', fontWeight: 900, color: '#FF6B9D', fontFamily: 'Baloo 2' }}>
            {fraction.num}/{fraction.den}
          </span>
          <span style={{ color: '#8B6BA8', marginLeft: 8, fontSize: '0.9rem' }}>= {fraction.label}</span>
        </div>
      </div>
    </div>
  );
}

// Time interactive
function TimeVisual() {
  const [hour, setHour] = useState(3);
  const [minute, setMinute] = useState(0);
  const timeLabel = () => {
    if (minute === 0) return `${hour} o'clock`;
    if (minute === 30) return `Half past ${hour}`;
    if (minute === 15) return `Quarter past ${hour}`;
    if (minute === 45) return `Quarter to ${hour === 12 ? 1 : hour + 1}`;
    return `${hour}:${String(minute).padStart(2, '0')}`;
  };

  const presets = [
    { h: 3, m: 0, label: "3 o'clock" },
    { h: 6, m: 30, label: "Half past 6" },
    { h: 9, m: 15, label: "Quarter past 9" },
    { h: 2, m: 45, label: "Quarter to 3" },
  ];

  return (
    <div style={{ background: 'white', borderRadius: 20, padding: 24 }}>
      <h4 style={{ fontFamily: 'Baloo 2', color: '#3B1F5E', marginBottom: 16, textAlign: 'center' }}>
        🕐 Interactive Clock
      </h4>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
        <AnalogClock hours={hour} minutes={minute} size={180} />
      </div>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <div style={{ background: 'linear-gradient(135deg, #6366F1, #C084FC)', borderRadius: 14, padding: '12px 24px', display: 'inline-block' }}>
          <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'white', fontFamily: 'Baloo 2' }}>{timeLabel()}</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
        {presets.map(p => (
          <button key={p.label} onClick={() => { setHour(p.h); setMinute(p.m); }} style={{
            background: '#F5F0FF', border: '2px solid #E9D5FF', borderRadius: 50,
            padding: '6px 14px', fontWeight: 700, fontSize: '0.85rem', color: '#9333EA',
            fontFamily: 'Nunito', cursor: 'pointer',
          }}>{p.label}</button>
        ))}
      </div>
    </div>
  );
}

// Measurement ruler
function MeasurementVisual() {
  return (
    <div style={{ background: 'white', borderRadius: 20, padding: 24 }}>
      <h4 style={{ fontFamily: 'Baloo 2', color: '#3B1F5E', marginBottom: 16, textAlign: 'center' }}>
        📏 Understanding Units
      </h4>
      <div style={{ display: 'grid', gap: 12 }}>
        {[
          { label: 'Length', unit1: 'centimetre (cm)', unit2: 'metre (m)', conv: '100 cm = 1 m', emoji: '📏', color: '#10B981' },
          { label: 'Mass/Weight', unit1: 'gram (g)', unit2: 'kilogram (kg)', conv: '1000 g = 1 kg', emoji: '⚖️', color: '#F59E0B' },
          { label: 'Capacity', unit1: 'millilitre (ml)', unit2: 'litre (l)', conv: '1000 ml = 1 l', emoji: '💧', color: '#3B82F6' },
          { label: 'Temperature', unit1: 'degrees Celsius (°C)', unit2: '', conv: 'Water freezes: 0°C\nBody temp: 37°C', emoji: '🌡️', color: '#EC4899' },
        ].map(m => (
          <div key={m.label} style={{ background: `${m.color}11`, border: `2px solid ${m.color}44`, borderRadius: 14, padding: 14, display: 'flex', gap: 14, alignItems: 'center' }}>
            <span style={{ fontSize: '2rem' }}>{m.emoji}</span>
            <div>
              <div style={{ fontWeight: 800, color: '#3B1F5E', marginBottom: 2 }}>{m.label}</div>
              <div style={{ fontSize: '0.85rem', color: '#8B6BA8' }}>{m.unit1}{m.unit2 ? ` → ${m.unit2}` : ''}</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: m.color, whiteSpace: 'pre-line' }}>{m.conv}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Geometry shapes
function GeometryVisual() {
  const shapes2D = [
    { name: 'Circle', sides: 0, vertices: 0, emoji: '⭕', fact: 'No sides, no corners!' },
    { name: 'Triangle', sides: 3, vertices: 3, emoji: '🔺', fact: '3 sides, 3 corners' },
    { name: 'Square', sides: 4, vertices: 4, emoji: '🟥', fact: '4 equal sides, 4 right angles' },
    { name: 'Rectangle', sides: 4, vertices: 4, emoji: '▬', fact: 'Opposite sides equal' },
    { name: 'Pentagon', sides: 5, vertices: 5, emoji: '⬠', fact: 'Penta = 5' },
    { name: 'Hexagon', sides: 6, vertices: 6, emoji: '⬡', fact: 'Hex = 6 (like a beehive!)' },
  ];

  return (
    <div style={{ background: 'white', borderRadius: 20, padding: 24 }}>
      <h4 style={{ fontFamily: 'Baloo 2', color: '#3B1F5E', marginBottom: 16, textAlign: 'center' }}>
        🔷 2D Shapes Explorer
      </h4>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {shapes2D.map(s => (
          <div key={s.name} style={{ background: '#F5F0FF', borderRadius: 14, padding: 14, textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: 6 }}>{s.emoji}</div>
            <div style={{ fontWeight: 800, color: '#3B1F5E', fontSize: '0.95rem' }}>{s.name}</div>
            {s.sides > 0 && <div style={{ fontSize: '0.75rem', color: '#9333EA', marginTop: 2 }}>{s.sides} sides · {s.vertices} vertices</div>}
            <div style={{ fontSize: '0.75rem', color: '#8B6BA8', marginTop: 4 }}>{s.fact}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Statistics tally visual
function StatisticsVisual() {
  const [tallies, setTallies] = useState({ cats: 7, dogs: 5, birds: 3, fish: 4 });
  const animals = Object.entries(tallies);
  const max = Math.max(...Object.values(tallies));

  const renderTally = (n) => {
    const groups = Math.floor(n / 5);
    const rem = n % 5;
    let result = '';
    for (let i = 0; i < groups; i++) result += '𝍸 ';
    for (let i = 0; i < rem; i++) result += '|';
    return result || '—';
  };

  return (
    <div style={{ background: 'white', borderRadius: 20, padding: 24 }}>
      <h4 style={{ fontFamily: 'Baloo 2', color: '#3B1F5E', marginBottom: 16, textAlign: 'center' }}>
        📊 Pets Pictogram & Tally
      </h4>
      {animals.map(([animal, count], i) => {
        const colors = ['#FF6B9D', '#C084FC', '#6EE7B7', '#93C5FD'];
        return (
          <div key={animal} style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <span style={{ fontSize: '1.3rem', width: 30 }}>
                {animal === 'cats' ? '🐱' : animal === 'dogs' ? '🐶' : animal === 'birds' ? '🐦' : '🐟'}
              </span>
              <span style={{ fontWeight: 700, color: '#3B1F5E', width: 50, fontSize: '0.9rem', textTransform: 'capitalize' }}>{animal}</span>
              <div style={{ flex: 1, height: 24, background: '#F3E8FF', borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ width: `${(count / max) * 100}%`, height: '100%', background: colors[i], borderRadius: 8, transition: 'width 0.6s ease' }} />
              </div>
              <span style={{ fontWeight: 800, color: colors[i], width: 20, textAlign: 'right' }}>{count}</span>
            </div>
            <div style={{ marginLeft: 90, fontSize: '1rem', letterSpacing: 2, color: '#6B7280' }}>
              {renderTally(count)}
            </div>
          </div>
        );
      })}
      <div style={{ background: '#F5F0FF', borderRadius: 12, padding: 10, marginTop: 8 }}>
        <p style={{ fontSize: '0.85rem', color: '#9333EA', fontWeight: 700 }}>
          🔑 Key: 𝍸 = 5 pets &nbsp;|&nbsp; | = 1 pet
        </p>
      </div>
    </div>
  );
}

// Multiplication array visual
function MultiplicationVisual() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(4);

  return (
    <div style={{ background: 'white', borderRadius: 20, padding: 24 }}>
      <h4 style={{ fontFamily: 'Baloo 2', color: '#3B1F5E', marginBottom: 16, textAlign: 'center' }}>
        ✖️ Array Builder
      </h4>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 20 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#8B6BA8', marginBottom: 6 }}>Rows</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={() => setRows(r => Math.max(1, r - 1))} style={{ background: '#F5F0FF', border: 'none', borderRadius: 8, width: 32, height: 32, fontWeight: 800, color: '#9333EA', cursor: 'pointer' }}>−</button>
            <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#FF6B9D', width: 32, textAlign: 'center', lineHeight: '32px' }}>{rows}</span>
            <button onClick={() => setRows(r => Math.min(10, r + 1))} style={{ background: '#C084FC', border: 'none', borderRadius: 8, width: 32, height: 32, fontWeight: 800, color: 'white', cursor: 'pointer' }}>+</button>
          </div>
        </div>
        <div style={{ fontSize: '2rem', color: '#C084FC', lineHeight: '64px' }}>×</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#8B6BA8', marginBottom: 6 }}>Columns</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={() => setCols(c => Math.max(1, c - 1))} style={{ background: '#F5F0FF', border: 'none', borderRadius: 8, width: 32, height: 32, fontWeight: 800, color: '#9333EA', cursor: 'pointer' }}>−</button>
            <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#FF6B9D', width: 32, textAlign: 'center', lineHeight: '32px' }}>{cols}</span>
            <button onClick={() => setCols(c => Math.min(10, c + 1))} style={{ background: '#C084FC', border: 'none', borderRadius: 8, width: 32, height: 32, fontWeight: 800, color: 'white', cursor: 'pointer' }}>+</button>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', marginBottom: 16 }}>
        {Array.from({ length: rows }).map((_, r) => (
          <div key={r} style={{ display: 'flex', gap: 4 }}>
            {Array.from({ length: cols }).map((_, c) => (
              <div key={c} style={{ width: 28, height: 28, borderRadius: 6, background: 'linear-gradient(135deg, #FF6B9D, #C084FC)', boxShadow: '0 2px 6px rgba(255,107,157,0.3)' }} />
            ))}
          </div>
        ))}
      </div>
      <div style={{ background: 'linear-gradient(135deg, #FF6B9D, #C084FC)', borderRadius: 14, padding: '12px 24px', textAlign: 'center' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'white', fontFamily: 'Baloo 2' }}>
          {rows} × {cols} = {rows * cols}
        </span>
      </div>
    </div>
  );
}

export function TopicVisual({ topicId }) {
  const visuals = {
    'place-value': <PlaceValueVisual />,
    'addition': <NumberLine start={0} end={20} highlight={[0, 5, 10, 15, 20]} />,
    'subtraction': <NumberLine start={0} end={20} highlight={[0, 3, 7, 12, 15, 20]} />,
    'multiplication': <MultiplicationVisual />,
    'division': <MultiplicationVisual />,
    'fractions': <FractionVisual />,
    'time': <TimeVisual />,
    'measurement': <MeasurementVisual />,
    'geometry': <GeometryVisual />,
    'statistics': <StatisticsVisual />,
  };

  return visuals[topicId] || null;
}
