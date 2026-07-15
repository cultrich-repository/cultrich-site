/* <time-ring> — 3D rotating ring of live analog clock cards (CSS 3D + SVG + Intl, no deps) */
(function () {
  if (customElements.get('time-ring')) return;
  const CITIES = [
    { city: 'Manila', tag: 'HQ', tz: 'Asia/Manila', hq: true },
    { city: 'New York', tag: 'United States', tz: 'America/New_York' },
    { city: 'Toronto', tag: 'Canada', tz: 'America/Toronto' },
    { city: 'London', tag: 'United Kingdom', tz: 'Europe/London' },
    { city: 'Dubai', tag: 'UAE', tz: 'Asia/Dubai' },
    { city: 'Sydney', tag: 'Australia', tz: 'Australia/Sydney' }
  ];
  const CSS = `
.tr-wrap{position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;perspective:950px;overflow:hidden}
.tr-ring{position:relative;width:150px;height:196px;transform-style:preserve-3d}
.tr-card{position:absolute;inset:0;display:flex;flex-direction:column;gap:7px;align-items:center;justify-content:center;text-align:center;backface-visibility:hidden}
.tr-card.tr-hq .tr-city{color:#00D4A4}
.tr-city{font:600 13.5px Inter,sans-serif;color:#fff;letter-spacing:-0.2px}
.tr-face{display:block;filter:drop-shadow(0 10px 18px rgba(0,0,0,0.45))}
.tr-time{font:500 12.5px Inter,sans-serif;color:rgba(255,255,255,0.5);letter-spacing:0.4px;font-variant-numeric:tabular-nums}
.tr-hq .tr-time{color:#00D4A4}
.tr-tag{font:600 9.5px Inter,sans-serif;letter-spacing:0.8px;text-transform:uppercase;color:rgba(255,255,255,0.38)}
.tr-hq .tr-tag{color:#00D4A4}
.tr-hint{position:absolute;bottom:4px;left:0;right:0;text-align:center;font:500 11.5px Inter,sans-serif;color:rgba(255,255,255,0.3);pointer-events:none}
`;
  const NS = 'http://www.w3.org/2000/svg';
  const el = (n, at) => { const e = document.createElementNS(NS, n); for (const k in at) e.setAttribute(k, at[k]); return e; };
  function buildFace(hq, idx) {
    const uid = 'trf' + idx;
    const svg = el('svg', { viewBox: '0 0 60 60', width: '82', height: '82', class: 'tr-face' });
    const defs = el('defs', {});
    const dial = el('radialGradient', { id: uid + 'd', cx: '38%', cy: '30%', r: '78%' });
    dial.appendChild(el('stop', { offset: '0%', 'stop-color': hq ? '#18352f' : '#242b34' }));
    dial.appendChild(el('stop', { offset: '58%', 'stop-color': '#161b22' }));
    dial.appendChild(el('stop', { offset: '100%', 'stop-color': '#0c0f14' }));
    defs.appendChild(dial);
    const bez = el('linearGradient', { id: uid + 'b', x1: '0', y1: '0', x2: '1', y2: '1' });
    const bstops = hq
      ? [['0%', 'rgba(96,242,206,0.95)'], ['46%', 'rgba(0,212,164,0.5)'], ['100%', 'rgba(0,110,88,0.75)']]
      : [['0%', 'rgba(224,231,238,0.9)'], ['46%', 'rgba(120,132,145,0.32)'], ['100%', 'rgba(54,62,72,0.72)']];
    bstops.forEach(function (p) { bez.appendChild(el('stop', { offset: p[0], 'stop-color': p[1] })); });
    defs.appendChild(bez);
    const sheen = el('linearGradient', { id: uid + 's', x1: '0', y1: '0', x2: '0.3', y2: '1' });
    sheen.appendChild(el('stop', { offset: '0%', 'stop-color': 'rgba(255,255,255,0.17)' }));
    sheen.appendChild(el('stop', { offset: '46%', 'stop-color': 'rgba(255,255,255,0.03)' }));
    sheen.appendChild(el('stop', { offset: '100%', 'stop-color': 'rgba(255,255,255,0)' }));
    defs.appendChild(sheen);
    const clip = el('clipPath', { id: uid + 'c' });
    clip.appendChild(el('circle', { cx: 30, cy: 30, r: 25.4 }));
    defs.appendChild(clip);
    svg.appendChild(defs);
    svg.appendChild(el('circle', { cx: 30, cy: 30, r: 27.2, fill: 'none', stroke: 'url(#' + uid + 'b)', 'stroke-width': 2.6 }));
    svg.appendChild(el('circle', { cx: 30, cy: 30, r: 25.4, fill: 'url(#' + uid + 'd)' }));
    svg.appendChild(el('circle', { cx: 30, cy: 30, r: 21.5, fill: 'none', stroke: 'rgba(255,255,255,0.05)', 'stroke-width': 0.5 }));
    for (let k = 0; k < 12; k++) {
      const a = k * 30 * Math.PI / 180, major = k % 3 === 0;
      const r1 = 23.5, r2 = major ? 19.6 : 21.7;
      svg.appendChild(el('line', {
        x1: 30 + r1 * Math.sin(a), y1: 30 - r1 * Math.cos(a),
        x2: 30 + r2 * Math.sin(a), y2: 30 - r2 * Math.cos(a),
        stroke: major ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.28)', 'stroke-width': major ? 1.7 : 1, 'stroke-linecap': 'round'
      }));
    }
    svg.appendChild(el('rect', { x: 3, y: 3, width: 54, height: 30, fill: 'url(#' + uid + 's)', 'clip-path': 'url(#' + uid + 'c)' }));
    const handCol = hq ? '#00E6B0' : '#eef2f6';
    const h = el('polygon', { points: '30,31 28.7,20 30,15.5 31.3,20', fill: handCol });
    const m = el('polygon', { points: '30,31.5 29.05,12.5 30,9 30.95,12.5', fill: handCol });
    const s = el('line', { x1: 30, y1: 34.5, x2: 30, y2: 8.5, stroke: '#00D4A4', 'stroke-width': 0.9, 'stroke-linecap': 'round' });
    svg.appendChild(h); svg.appendChild(m); svg.appendChild(s);
    svg.appendChild(el('circle', { cx: 30, cy: 30, r: 2.2, fill: '#0c0f14', stroke: 'url(#' + uid + 'b)', 'stroke-width': 0.8 }));
    svg.appendChild(el('circle', { cx: 30, cy: 30, r: 0.9, fill: '#00D4A4' }));
    return { svg, h, m, s };
  }
  class TimeRing extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';
      this.style.height = '100%';
      this.style.touchAction = 'pan-y';
      this.style.cursor = 'grab';
      const st = document.createElement('style');
      st.textContent = CSS;
      this.appendChild(st);
      const wrap = document.createElement('div');
      wrap.className = 'tr-wrap';
      const ring = document.createElement('div');
      ring.className = 'tr-ring';
      const R = 195, step = 360 / CITIES.length;
      this._clocks = [];
      CITIES.forEach((c, i) => {
        const card = document.createElement('div');
        card.className = 'tr-card' + (c.hq ? ' tr-hq' : '');
        card.style.transform = 'rotateY(' + (i * step) + 'deg) translateZ(' + R + 'px)';
        const ct = document.createElement('div'); ct.className = 'tr-city'; ct.textContent = c.city;
        const face = buildFace(!!c.hq, i);
        const tm = document.createElement('div'); tm.className = 'tr-time'; tm.textContent = '--:--';
        const tg = document.createElement('div'); tg.className = 'tr-tag'; tg.textContent = c.tag;
        card.appendChild(ct); card.appendChild(face.svg); card.appendChild(tm); card.appendChild(tg);
        ring.appendChild(card);
        this._clocks.push({ tm, face, tz: c.tz, fmt: new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: false, timeZone: c.tz }), fmt12: new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: c.tz }) });
      });
      wrap.appendChild(ring);
      const hint = document.createElement('div');
      hint.className = 'tr-hint';
      hint.textContent = 'Live local times — drag to spin';
      wrap.appendChild(hint);
      this.appendChild(wrap);
      this._ring = ring;

      const tick = () => {
        const now = new Date();
        for (const c of this._clocks) {
          try {
            const parts = c.fmt.formatToParts(now);
            const get = (t) => parseInt((parts.find(p => p.type === t) || {}).value || '0', 10);
            const H = get('hour') % 12, M = get('minute'), S = get('second');
            c.face.h.setAttribute('transform', 'rotate(' + (H * 30 + M * 0.5) + ' 30 30)');
            c.face.m.setAttribute('transform', 'rotate(' + (M * 6 + S * 0.1) + ' 30 30)');
            c.face.s.setAttribute('transform', 'rotate(' + (S * 6) + ' 30 30)');
            c.tm.textContent = c.fmt12.format(now);
          } catch (e) { c.tm.textContent = ''; }
        }
      };
      tick();
      this._clock = setInterval(tick, 1000);

      this._deg = 0; this._vel = 0; this._dragging = false; this._visible = true; this._raf = null;
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const paint = () => { ring.style.transform = 'rotateY(' + this._deg + 'deg)'; };
      paint();
      const loop = (t) => {
        this._raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (t - (this._last || t)) / 1000); this._last = t;
        if (!this._dragging) { this._deg -= 7 * dt; this._deg += this._vel; this._vel *= 0.94; }
        paint();
      };
      this._start = () => { if (!this._raf && !reduce && this._visible) { this._last = 0; this._raf = requestAnimationFrame(loop); } };
      this._stopA = () => { if (this._raf) { cancelAnimationFrame(this._raf); this._raf = null; } };
      if ('IntersectionObserver' in window) {
        this._io = new IntersectionObserver((es) => {
          es.forEach(e => { this._visible = e.isIntersecting; this._visible ? this._start() : this._stopA(); });
        }, { threshold: 0.05 });
        this._io.observe(this);
      }
      wrap.addEventListener('pointerdown', (e) => {
        this._dragging = true; this._px = e.clientX; this._vel = 0;
        this.style.cursor = 'grabbing';
        wrap.setPointerCapture && wrap.setPointerCapture(e.pointerId);
      });
      wrap.addEventListener('pointermove', (e) => {
        if (!this._dragging) return;
        const dx = e.clientX - this._px; this._px = e.clientX;
        this._deg += dx * 0.35; this._vel = dx * 0.35;
        if (reduce) paint();
      });
      const up = () => { this._dragging = false; this.style.cursor = 'grab'; };
      wrap.addEventListener('pointerup', up);
      wrap.addEventListener('pointercancel', up);
      this._start();
    }
    disconnectedCallback() {
      this._stopA && this._stopA();
      this._io && this._io.disconnect();
      if (this._clock) clearInterval(this._clock);
      this._init = false;
    }
  }
  customElements.define('time-ring', TimeRing);
})();
