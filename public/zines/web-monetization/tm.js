module.exports = States;

function States(states) {
  const self = this;
  if (!(this instanceof States)) return new States(states);
  this.last = null;
  this.states = states;
  this.stopped = true;
  this.value = {};
  const init = Object.keys(states)[0];
  Object.keys(states[init].state).forEach(function (key) {
    (function walk(dst, src, key) {
      if (Array.isArray(src[key])) {
        dst[key] = [];
        src[key].forEach(function (x, i) {
          walk(dst[key], src[key], i);
        });
      } else if (src[key] && typeof src[key] === "object") {
        dst[key] = {};
        Object.keys(src[key]).forEach(function (k) {
          walk(dst[key], src[key], k);
        });
      } else {
        dst[key] = 0;
      }
    })(self.value, states[init].state, key);
  });
  this.keys = Object.keys(this.value);
  this.sequence = [];
  this.index = 0;
}

States.prototype.go = function (sequence) {
  this.sequence = sequence;
  this.state = sequence[0];
  this.index = 0;
  this.last = null;
  this.stopped = false;
};

States.prototype.tick = function (t) {
  if (this.last === null) this.last = t;
  if (t - this.last >= this.sequence[this.index + 1]) {
    this.last += this.sequence[this.index + 1];
    this.index += 2;
    this.state = this.sequence[this.index];
  }
  const A = this.states[this.state];
  if (!A) {
    this.stopped = true;
    this.last = null;
    return this.value;
  }
  let B = this.states[this.sequence[this.index + 2]];
  if (!B) {
    B = A;
    this.last = null;
    this.stopped = true;
  }
  const x =
    this.sequence[this.index + 1] !== undefined
      ? (t - this.last) / this.sequence[this.index + 1]
      : 0;
  for (let i = 0; i < this.keys.length; i++) {
    const key = this.keys[i];
    const e =
      A.easing && typeof A.easing[key] === "function" ? A.easing[key](x) : x;
    tween(this.value, A.state, B.state, key, e);
  }
  return this.value;
};

function mix(a, b, x) {
  x = Math.max(0, Math.min(1, x));
  return a * (1 - x) + b * x;
}

function tween(out, a, b, key, x) {
  if (Array.isArray(out[key])) {
    for (var i = 0; i < out[key].length; i++) {
      tween(out[key], a[key], b[key], i, x);
    }
  } else if (out[key] && typeof out[key] === "object") {
    out[key] = {};
    const keys = Object.keys(out[key]);
    for (var i = 0; i < keys.length; i++) {
      tween(out[key], a[key], b[key], keys[i], x);
    }
  } else {
    out[key] = mix(a[key], b[key], x);
  }
}
