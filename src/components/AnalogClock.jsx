import React from 'react';

export function AnalogClock({ hours, minutes, size = 160 }) {
  const r = size / 2;
  const cx = r;
  const cy = r;

  // Angle calculations
  const minuteAngle = (minutes / 60) * 360 - 90;
  const hourAngle = ((hours % 12) / 12) * 360 + (minutes / 60) * 30 - 90;

  const toRad = deg => (deg * Math.PI) / 180;

  const handEnd = (angle, length) => ({
    x: cx + length * Math.cos(toRad(angle)),
    y: cy + length * Math.sin(toRad(angle)),
  });

  const minuteEnd = handEnd(minuteAngle, r * 0.78);
  const hourEnd = handEnd(hourAngle, r * 0.55);

  // Tick marks
  const ticks = [];
  for (let i = 0; i < 60; i++) {
    const angle = (i / 60) * 360 - 90;
    const isHour = i % 5 === 0;
    const inner = isHour ? r * 0.82 : r * 0.88;
    const outer = r * 0.95;
    const x1 = cx + inner * Math.cos(toRad(angle));
    const y1 = cy + inner * Math.sin(toRad(angle));
    const x2 = cx + outer * Math.cos(toRad(angle));
    const y2 = cy + outer * Math.sin(toRad(angle));
    ticks.push(
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={isHour ? '#9333EA' : '#C084FC'} strokeWidth={isHour ? 2.5 : 1} />
    );
  }

  // Number positions
  const numbers = [];
  for (let i = 1; i <= 12; i++) {
    const angle = (i / 12) * 360 - 90;
    const d = r * 0.72;
    const x = cx + d * Math.cos(toRad(angle));
    const y = cy + d * Math.sin(toRad(angle));
    numbers.push(
      <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="central"
        fontSize={r * 0.14} fontFamily="'Baloo 2', cursive" fontWeight="700"
        fill="#3B1F5E">{i}</text>
    );
  }

  return (
    <svg width={size} height={size} style={{ filter: 'drop-shadow(0 4px 12px rgba(147,51,234,0.2))' }}>
      {/* Face */}
      <circle cx={cx} cy={cy} r={r - 2} fill="white" stroke="#E9D5FF" strokeWidth={4} />
      {/* Gradient center */}
      <defs>
        <radialGradient id="clockFace">
          <stop offset="0%" stopColor="#FFF5FB" />
          <stop offset="100%" stopColor="#F5F0FF" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={r - 6} fill="url(#clockFace)" />
      {ticks}
      {numbers}
      {/* Hour hand */}
      <line x1={cx} y1={cy} x2={hourEnd.x} y2={hourEnd.y}
        stroke="#9333EA" strokeWidth={r * 0.065} strokeLinecap="round" />
      {/* Minute hand */}
      <line x1={cx} y1={cy} x2={minuteEnd.x} y2={minuteEnd.y}
        stroke="#FF6B9D" strokeWidth={r * 0.045} strokeLinecap="round" />
      {/* Centre dot */}
      <circle cx={cx} cy={cy} r={r * 0.06} fill="#3B1F5E" />
    </svg>
  );
}
