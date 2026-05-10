import { useEffect } from 'react';

export function Confetti({ active }) {
  useEffect(() => {
    if (!active) return;
    const colors = ['#FF6B9D', '#C084FC', '#FDE047', '#6EE7B7', '#93C5FD', '#FB923C'];
    const pieces = [];
    for (let i = 0; i < 50; i++) {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left = Math.random() * 100 + 'vw';
      el.style.top = '-20px';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      el.style.width = (Math.random() * 10 + 6) + 'px';
      el.style.height = (Math.random() * 10 + 6) + 'px';
      el.style.animationDelay = Math.random() * 1.5 + 's';
      el.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
      document.body.appendChild(el);
      pieces.push(el);
    }
    const cleanup = setTimeout(() => {
      pieces.forEach(p => p.remove());
    }, 3500);
    return () => {
      clearTimeout(cleanup);
      pieces.forEach(p => p.remove());
    };
  }, [active]);
  return null;
}

export function StarBurst({ x, y }) {
  return (
    <div style={{
      position: 'fixed', left: x - 20, top: y - 20,
      fontSize: '2rem', animation: 'pop-in 0.5s ease forwards',
      pointerEvents: 'none', zIndex: 9999,
    }}>⭐</div>
  );
}
