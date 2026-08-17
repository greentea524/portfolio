/**
 * jsdom implements neither matchMedia nor the layout APIs the animation
 * libraries reach for, so anything that renders <Main /> needs these stubs
 * before the first import runs.
 */

// Main.jsx seeds the theme from window.matchMedia("(prefers-color-scheme: dark)").
// jsdom has no media engine, so this reports "not dark" and stays inert.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

// lottie-web drives its player from requestAnimationFrame and measures the
// container it mounts into. jsdom reports every box as 0x0, which is harmless
// here — the assertion is that the tree mounts, not that anything animates.
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 0);
  window.cancelAnimationFrame = (id) => clearTimeout(id);
}

// lottie-web probes a 2d context at import time and writes to it, but jsdom's
// getContext returns null unless the native `canvas` package is installed.
// A no-op context keeps that probe happy without adding a native dependency
// for a test that never inspects a pixel.
HTMLCanvasElement.prototype.getContext = () => ({
  fillRect: () => {},
  clearRect: () => {},
  getImageData: (_x, _y, w, h) => ({ data: new Array(w * h * 4) }),
  putImageData: () => {},
  createImageData: () => [],
  setTransform: () => {},
  drawImage: () => {},
  save: () => {},
  restore: () => {},
  beginPath: () => {},
  closePath: () => {},
  moveTo: () => {},
  lineTo: () => {},
  fill: () => {},
  stroke: () => {},
  translate: () => {},
  scale: () => {},
  rotate: () => {},
  measureText: () => ({ width: 0 }),
  transform: () => {},
  clip: () => {},
});
