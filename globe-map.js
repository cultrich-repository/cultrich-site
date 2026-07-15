/* <globe-map> — canvas dotted globe with land-dot continents, pins + arcs (no deps) */
(function () {
  if (customElements.get('globe-map')) return;
  const LOCS = [
    { name: 'Manila · HQ', lat: 14.6, lon: 121.0, hq: true },
    { name: 'United States', lat: 39, lon: -98 },
    { name: 'Canada', lat: 56, lon: -106 },
    { name: 'United Kingdom', lat: 54, lon: -2 },
    { name: 'UAE', lat: 24.4, lon: 54.4 },
    { name: 'Australia', lat: -25, lon: 134 }
  ];
  const MINT = '0,212,164';
  const D2R = Math.PI / 180;
  // Coarse continent outlines [lon,lat] — enough resolution for a 300-440px dotted globe
  const POLYS = [
    [[-168,66],[-140,70],[-125,70],[-110,73],[-95,72],[-80,73],[-70,62],[-55,52],[-65,45],[-75,40],[-76,35],[-81,31],[-80,26],[-84,30],[-90,29],[-97,28],[-97,22],[-105,20],[-95,16],[-83,9],[-79,9],[-84,12],[-92,15],[-97,16],[-105,22],[-110,24],[-115,29],[-120,34],[-125,40],[-125,48],[-130,55],[-135,58],[-150,60],[-165,60]],
    [[-45,60],[-25,70],[-20,76],[-30,83],[-55,82],[-70,78],[-60,75],[-55,70],[-50,62]],
    [[-77,8],[-70,12],[-62,10],[-52,5],[-45,-1],[-35,-6],[-35,-10],[-39,-15],[-40,-22],[-48,-26],[-53,-34],[-58,-39],[-65,-41],[-65,-47],[-69,-52],[-71,-54],[-74,-50],[-73,-44],[-73,-37],[-71,-30],[-70,-20],[-76,-14],[-81,-6],[-80,0]],
    [[-17,15],[-10,32],[0,36],[10,37],[20,32],[32,31],[35,28],[43,12],[51,12],[45,2],[40,-5],[35,-20],[32,-29],[27,-34],[20,-35],[15,-28],[12,-18],[9,-2],[5,5],[-5,5],[-8,4],[-13,8]],
    [[-9,38],[-9,43],[-2,44],[0,49],[-5,48],[-4,54],[5,53],[8,57],[5,60],[10,63],[15,68],[25,71],[30,70],[40,67],[45,68],[60,69],[75,72],[95,76],[110,76],[130,72],[150,70],[160,70],[170,66],[178,64],[170,60],[155,55],[142,47],[135,43],[129,35],[122,37],[121,30],[115,22],[108,18],[105,10],[100,5],[98,8],[92,14],[88,22],[85,19],[80,13],[77,8],[73,15],[70,21],[66,25],[57,25],[55,24],[58,20],[53,15],[45,13],[43,12],[35,28],[35,33],[26,36],[23,38],[15,38],[5,43],[0,40]],
    [[114,-22],[122,-17],[130,-12],[136,-12],[142,-11],[146,-15],[149,-20],[153,-27],[150,-35],[146,-39],[140,-38],[135,-35],[131,-31],[124,-33],[118,-35],[114,-30]],
    [[-5,50],[1,51],[0,53],[-2,56],[-4,58],[-6,55]],
    [[130,31],[135,34],[140,36],[141,40],[142,44],[145,44],[140,41],[136,36],[132,32]],
    [[120,18],[122,16],[121,13],[124,11],[125,7],[122,7],[120,14]],
    [[109,0],[115,5],[119,1],[116,-4],[110,-2]],
    [[95,5],[102,-1],[106,-6],[100,-1],[96,3]],
    [[131,-1],[140,-3],[147,-6],[143,-8],[135,-4]],
    [[44,-12],[50,-16],[47,-25],[44,-20]]
  ];
  const inPoly = (lon, lat, poly) => {
    let c = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
      if (((yi > lat) !== (yj > lat)) && (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi)) c = !c;
    }
    return c;
  };
  const isLand = (lat, lon) => {
    if (lat < -70) return true; // Antarctica cap
    for (const p of POLYS) if (inPoly(lon, lat, p)) return true;
    return false;
  };
  const vec = (lat, lon) => {
    const la = lat * D2R, lo = lon * D2R;
    return [Math.cos(la) * Math.cos(lo), Math.sin(la), Math.cos(la) * Math.sin(lo)];
  };
  const slerp = (a, b, t) => {
    let d = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    d = Math.min(1, Math.max(-1, d));
    const th = Math.acos(d);
    if (th < 1e-4) return a.slice();
    const s = Math.sin(th), A = Math.sin((1 - t) * th) / s, B = Math.sin(t * th) / s;
    return [A * a[0] + B * b[0], A * a[1] + B * b[1], A * a[2] + B * b[2]];
  };

  class GlobeMap extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';
      this.style.touchAction = 'pan-y';
      this.style.cursor = 'grab';
      if (!this.style.aspectRatio && !this.style.height) this.style.aspectRatio = '1';
      const cv = document.createElement('canvas');
      cv.style.cssText = 'width:100%;height:100%;display:block';
      this.appendChild(cv);
      this._cv = cv;
      this._ctx = cv.getContext('2d');
      this._yaw = -1.2; this._pitch = -0.32; this._vel = 0;
      this._dragging = false; this._visible = true; this._raf = null;
      this._reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // sparse ocean texture dots
      const GA = Math.PI * (3 - Math.sqrt(5));
      const fib = (n) => {
        const out = [];
        for (let i = 0; i < n; i++) {
          const y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(1 - y * y), th = GA * i;
          out.push([Math.cos(th) * r, y, Math.sin(th) * r]);
        }
        return out;
      };
      this._ocean = fib(500);
      // dense sampling, keep land only
      this._land = fib(2900).filter(p => {
        const lat = Math.asin(p[1]) / D2R, lon = Math.atan2(p[2], p[0]) / D2R;
        return isLand(lat, lon);
      });
      this._locs = LOCS.map(l => ({ ...l, v: vec(l.lat, l.lon) }));
      const hq = this._locs[0];
      this._arcs = this._locs.slice(1).map((l, i) => {
        const seg = [];
        for (let k = 0; k <= 56; k++) {
          const t = k / 56, p = slerp(hq.v, l.v, t), lift = 1 + 0.16 * Math.sin(Math.PI * t);
          seg.push([p[0] * lift, p[1] * lift, p[2] * lift]);
        }
        return { seg, off: i * 0.27 };
      });

      this._ro = new ResizeObserver(() => this._size());
      this._ro.observe(this);
      this._size();

      if ('IntersectionObserver' in window) {
        this._io = new IntersectionObserver((es) => {
          es.forEach(e => { this._visible = e.isIntersecting; this._visible ? this._start() : this._stop(); });
        }, { threshold: 0.05 });
        this._io.observe(this);
      }

      cv.addEventListener('pointerdown', (e) => {
        this._dragging = true; this._px = e.clientX; this._py = e.clientY; this._vel = 0;
        this.style.cursor = 'grabbing';
        cv.setPointerCapture && cv.setPointerCapture(e.pointerId);
      });
      cv.addEventListener('pointermove', (e) => {
        if (!this._dragging) return;
        const dx = e.clientX - this._px, dy = e.clientY - this._py;
        this._px = e.clientX; this._py = e.clientY;
        this._yaw += dx * 0.006; this._vel = dx * 0.006;
        this._pitch = Math.max(-0.9, Math.min(0.9, this._pitch + dy * 0.004));
        if (this._reduce) this._draw(performance.now());
      });
      const up = () => { this._dragging = false; this.style.cursor = 'grab'; };
      cv.addEventListener('pointerup', up);
      cv.addEventListener('pointercancel', up);

      this._reduce ? this._draw(performance.now()) : this._start();
    }
    disconnectedCallback() {
      this._stop();
      this._ro && this._ro.disconnect();
      this._io && this._io.disconnect();
      this._init = false;
    }
    _size() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const w = this.clientWidth || 300, h = this.clientHeight || w;
      this._cv.width = Math.round(w * dpr); this._cv.height = Math.round(h * dpr);
      this._w = w; this._h = h; this._dpr = dpr;
      if (this._reduce) this._draw(performance.now());
    }
    _start() {
      if (this._raf || this._reduce || !this._visible) return;
      this._last = performance.now();
      const loop = (t) => {
        this._raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (t - this._last) / 1000); this._last = t;
        if (!this._dragging) {
          this._yaw += 0.09 * dt + this._vel;
          this._vel *= 0.94;
        }
        this._draw(t);
      };
      this._raf = requestAnimationFrame(loop);
    }
    _stop() { if (this._raf) { cancelAnimationFrame(this._raf); this._raf = null; } }
    _rot(p) {
      const cy = Math.cos(this._yaw), sy = Math.sin(this._yaw);
      const cx = Math.cos(this._pitch), sx = Math.sin(this._pitch);
      const x1 = p[0] * cy + p[2] * sy, z1 = -p[0] * sy + p[2] * cy, y1 = p[1];
      return [x1, y1 * cx - z1 * sx, y1 * sx + z1 * cx];
    }
    _draw(t) {
      const ctx = this._ctx, w = this._w, h = this._h, dpr = this._dpr;
      if (!w || !h) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const cxp = w / 2, cyp = h / 2, R = Math.min(w, h) * 0.36;
      const g = ctx.createRadialGradient(cxp, cyp, R * 0.2, cxp, cyp, R * 1.5);
      g.addColorStop(0, 'rgba(' + MINT + ',0.055)');
      g.addColorStop(1, 'rgba(' + MINT + ',0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      ctx.beginPath(); ctx.arc(cxp, cyp, R, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.07)'; ctx.lineWidth = 1; ctx.stroke();
      const P = (v) => [cxp + v[0] * R, cyp - v[1] * R, v[2]];
      // ocean texture — front only, very faint
      for (const p of this._ocean) {
        const v = this._rot(p);
        if (v[2] < 0) continue;
        const s = P(v);
        ctx.beginPath(); ctx.arc(s[0], s[1], 0.8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,' + (0.04 + 0.05 * v[2]).toFixed(3) + ')';
        ctx.fill();
      }
      // land dots — dim on the back limb, bright mint on the front
      for (const p of this._land) {
        const v = this._rot(p), s = P(v);
        if (v[2] < 0) {
          ctx.beginPath(); ctx.arc(s[0], s[1], 0.9, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(120,235,200,0.05)';
          ctx.fill();
        } else {
          ctx.beginPath(); ctx.arc(s[0], s[1], 1.15 + 0.45 * v[2], 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(120,235,200,' + (0.16 + 0.36 * v[2]).toFixed(3) + ')';
          ctx.fill();
        }
      }
      // arcs
      const tt = t / 1000;
      for (const arc of this._arcs) {
        ctx.beginPath();
        let started = false;
        for (const p of arc.seg) {
          const v = this._rot(p), s = P(v);
          if (v[2] < -0.15) { started = false; continue; }
          started ? ctx.lineTo(s[0], s[1]) : ctx.moveTo(s[0], s[1]);
          started = true;
        }
        ctx.strokeStyle = 'rgba(' + MINT + ',0.32)';
        ctx.lineWidth = 1;
        ctx.stroke();
        const k = ((tt * 0.22 + arc.off) % 1);
        const p = arc.seg[Math.round(k * (arc.seg.length - 1))];
        const v = this._rot(p);
        if (v[2] > -0.1) {
          const s = P(v);
          ctx.beginPath(); ctx.arc(s[0], s[1], 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(' + MINT + ',0.9)';
          ctx.shadowColor = 'rgba(' + MINT + ',0.8)'; ctx.shadowBlur = 6;
          ctx.fill(); ctx.shadowBlur = 0;
        }
      }
      // pins + labels
      ctx.font = '600 11px Inter, sans-serif';
      for (const l of this._locs) {
        const v = this._rot(l.v), s = P(v);
        if (v[2] < -0.05) continue;
        const fade = Math.min(1, (v[2] + 0.05) / 0.35);
        const pr = ((t / 2200 + (l.hq ? 0 : l.lat)) % 1);
        ctx.beginPath(); ctx.arc(s[0], s[1], 4 + pr * 11, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(' + MINT + ',' + (0.35 * (1 - pr) * fade).toFixed(3) + ')';
        ctx.lineWidth = 1.2; ctx.stroke();
        ctx.beginPath(); ctx.arc(s[0], s[1], l.hq ? 4 : 3.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + MINT + ',' + fade.toFixed(2) + ')';
        ctx.shadowColor = 'rgba(' + MINT + ',0.9)'; ctx.shadowBlur = 8;
        ctx.fill(); ctx.shadowBlur = 0;
        if (v[2] > 0.18) {
          const la = Math.min(1, (v[2] - 0.18) / 0.25);
          ctx.fillStyle = 'rgba(255,255,255,' + ((l.hq ? 0.95 : 0.62) * la).toFixed(2) + ')';
          const tw = ctx.measureText(l.name).width;
          let lx = s[0] + 9, ly = s[1] + 4;
          if (lx + tw > w - 4) lx = s[0] - 9 - tw;
          ctx.fillText(l.name, lx, ly);
        }
      }
    }
  }
  customElements.define('globe-map', GlobeMap);
})();
