var regl = require('regl')({
  extensions: ['oes_standard_derivatives']
})
var resl = require('resl')
var camera = require('regl-camera')(regl, {
  distance: 1.5, theta: -Math.PI/2, phi: 0.0,
  center: [+0.0,+0.0,+0.0]
})
var mat4 = require('gl-mat4')
var vec3 = require('gl-vec3')
var tmpm = new Float32Array(16)
var tmpv = new Float32Array(3)
var PI = Math.PI

var emitter = new(require('events').EventEmitter)()

var fs = require('fs')
var icons = (function () {
  document.body.style = "background-color:#131f26"
  var div = document.createElement('div')
  div.innerHTML = fs.readFileSync(__dirname + '/icons.svg', 'utf8')
  var root = div.children[0]
  root.style.position = 'absolute'
  root.style.top = '0px'
  root.style.left = '0px'
  root.style.visibility = 'hidden'
  document.body.appendChild(root)
  return {
    element: root,
    get: function (name) {
      var elem = root.querySelector('#'+name)
      var copy = elem.cloneNode(true)
      var svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
      var g = document.createElementNS('http://www.w3.org/2000/svg','g')
      var bbox = elem.getBoundingClientRect()
      svg.setAttribute('width', bbox.width)
      svg.setAttribute('height', bbox.height)
      g.setAttribute('transform',
        'translate('+(-bbox.left)+','+(-bbox.top)+')')
      svg.appendChild(g)
      g.appendChild(copy)
      return svg
    }
  }
})()

;(function () {
  document.body.style.margin = '0px'
  document.body.style.overflow = 'hidden'

  var left = icons.get('left')
  left.style.position = 'absolute'
  left.style.left = '15px'
  left.style.bottom = '15px'
  left.style.zIndex = 100
  left.style.opacity = 0.2
  var lpath = left.querySelector('path')
  lpath.addEventListener('mouseover', function () {
    left.style.opacity = 0.8
  })
  lpath.addEventListener('mouseout', function () {
    left.style.opacity = 0.2
  })
  lpath.addEventListener('click', function () {
    emitter.emit('page:prev')
  })
  document.body.appendChild(left)

  var right = icons.get('right')
  right.style.position = 'absolute'
  right.style.right = '15px'
  right.style.bottom = '15px'
  right.style.zIndex = 100
  right.style.opacity = 0.2
  var rpath = right.querySelector('path')
  rpath.addEventListener('mouseover', function () {
    right.style.opacity = 0.8
  })
  rpath.addEventListener('mouseout', function () {
    right.style.opacity = 0.2
  })
  rpath.addEventListener('click', function () {
    emitter.emit('page:next')
  })
  document.body.appendChild(right)

  var fold = icons.get('fold')
  fold.style.position = 'absolute'
  fold.style.right = '15px'
  fold.style.top = '15px'
  fold.style.zIndex = 100
  fold.style.opacity = 0.2
  var fg = fold.querySelector('g')
  fg.addEventListener('mouseover', function () {
    fold.style.opacity = 0.8
  })
  fg.addEventListener('mouseout', function () {
    fold.style.opacity = 0.2
  })
  fg.addEventListener('click', function () {
    emitter.emit('fold:toggle')
  })
  document.body.appendChild(fold)
})()

var state = {
  page: 0,
  folded: true,
  speed: 0.35,
  zoom: 1.3,
  pan: [0,0,0],
  prevMouse: [-1,-1]
}

window.addEventListener('mousedown', frame)
window.addEventListener('mouseup', frame)
window.addEventListener('mousemove', function (ev) {
  if ((ev.buttons&1) && state.prevMouse[0] >= 0) {
    var dx = state.prevMouse[0] - ev.clientX
    var dy = state.prevMouse[1] - ev.clientY
    state.pan[0] -= dx*0.00175*state.zoom
    state.pan[1] -= dy*0.00175*state.zoom
    frame()
  }
  state.prevMouse[0] = ev.clientX
  state.prevMouse[1] = ev.clientY
})
window.addEventListener('wheel', function (ev) {
  state.zoom = clamp(0.25,1.5,state.zoom + ev.deltaY*0.01)
  frame()
})

var camera = (function () {
  var projection = new Float32Array(16)
  var view = new Float32Array(16)
  var eye = [0,0,-1.5]
  var center = [0,0,0]
  var up = [0,1,0]
  return regl({
    uniforms: {
      projection: function (context, props) {
        var aspect = context.viewportWidth / context.viewportHeight
        return mat4.perspective(projection,
          Math.PI/4, aspect, 0.1, 1000.0
        )
      },
      view: function (context, props) {
        center[0] = state.pan[0]
        center[1] = state.pan[1]
        eye[0] = state.pan[0]
        eye[1] = state.pan[1]
        eye[2] = -state.zoom * Math.max(1.0,
          Math.atan2(context.viewportHeight, context.viewportWidth)*PI)
        return mat4.lookAt(view, eye, center, up)
      }
    }
  })
})()

var papers = {
  p0: {
    parent: 'p7',
    positions: [+0.5,+0.5,+1.5,+0.5,+1.5,+1.5,+0.5,+1.5],
    cells: [[0,1,2],[0,2,3]],
    pose: new Float32Array(16),
    model: new Float32Array(16),
    pivot: [+0.5,+0.5,0.0],
    color: [0,0,0],
    page: 0
  },
  p1: {
    parent: 'p0',
    positions: [+1.5,+0.5,+2.5,+0.5,+2.5,+1.5,+1.5,+1.5],
    cells: [[0,1,2],[0,2,3]],
    pose: new Float32Array(16),
    model: new Float32Array(16),
    pivot: [+1.5,+0.5,0.0],
    color: [0,0,1],
    page: 1
  },
  p2: {
    parent: 'p1',
    positions: [+2.5,+0.5,+3.5,+0.5,+3.5,+1.5,+2.5,+1.5],
    cells: [[0,1,2],[0,2,3]],
    pose: new Float32Array(16),
    model: new Float32Array(16),
    pivot: [+2.5,+0.5,0.0],
    color: [0,1,0],
    page: 2
  },
  p3: {
    parent: 'p4',
    positions: [+2.5,-0.5,+3.5,-0.5,+3.5,+0.5,+2.5,+0.5],
    cells: [[0,1,2],[0,2,3]],
    pose: new Float32Array(16),
    model: new Float32Array(16),
    pivot: [2.5,0.5,0.0],
    color: [0,1,1],
    page: 3
  },
  p4: {
    parent: 'p5',
    positions: [+1.5,-0.5,+2.5,-0.5,+2.5,+0.5,+1.5,+0.5],
    cells: [[0,1,2],[0,2,3]],
    pose: new Float32Array(16),
    model: new Float32Array(16),
    pivot: [1.5,0.5,0.0],
    color: [1,0,0],
    page: 4
  },
  p5: {
    parent: 'p6',
    positions: [+0.5,-0.5,+1.5,-0.5,+1.5,+0.5,+0.5,+0.5],
    cells: [[0,1,2],[0,2,3]],
    pose: new Float32Array(16),
    model: new Float32Array(16),
    pivot: [0.5,0.5,0.0],
    color: [1,0,1],
    page: 5
  },
  p6: {
    parent: null,
    positions: [-0.5,-0.5,+0.5,-0.5,+0.5,+0.5,-0.5,+0.5],
    cells: [[0,1,2],[0,2,3]],
    pose: new Float32Array(16),
    model: new Float32Array(16),
    pivot: [0.0,0.0,0.0],
    color: [1,1,0],
    page: 6
  },
  p7: {
    parent: 'p6',
    positions: [-0.5,+0.5,+0.5,+0.5,+0.5,+1.5,-0.5,+1.5],
    cells: [[0,1,2],[0,2,3]],
    pose: new Float32Array(16),
    model: new Float32Array(16),
    pivot: [+0.0,+0.5,0.0],
    color: [1,1,1],
    page: 7
  }
}
var paperProps = Object.values(papers)
var pose = {}
Object.keys(papers).forEach(function (key) {
  pose[key] = papers[key].pose
  papers[key].offset = [0,0,0]
})

var file = 'decent-small.png'
var pageOffset = 5
var zine = regl.texture()

resl({
  manifest: {
    zine: { type: 'image', src: file }
  },
  onDone: function (assets) {
    zine(assets.zine)
    frame()
  }
})

var flips = {
  5: [+1,+1,+1,+1,+1,+1,+1,+1],
  7: [+1,-1,-1,+1,+1,-1,-1,+1]
}
paperProps.forEach(function (paper) {
  paper.pageFlip = flips[pageOffset][paper.page]
  paper.pageOffset = pageOffset
})

var ease = {
  sineIn: require('eases/sine-in.js'),
  sineOut: require('eases/sine-out.js')
}
var zNear = 0
var zFar = +2.0
var tm = require('./tm.js')({
  page0Flip: {
    state: { x: PI, y: PI, page: 0, offset: [+0.0,+0.0,zNear], flip: +PI },
    easing: { x: ease.sineOut, y: ease.sineOut }
  },
  page0: {
    state: { x: PI, y: PI, page: 0, offset: [+0.0,+0.0,zNear], flip: 0 },
    easing: { x: ease.sineOut, y: ease.sineOut }
  },
  page1: {
    state: { x: PI, y: PI, page: 1, offset: [-0.5,+0.0,zNear], flip: 0 },
    easing: { x: ease.sineOut, y: ease.sineOut }
  },
  page2: {
    state: { x: PI, y: PI, page: 2, offset: [-0.5,+0.0,zNear], flip: 0 },
    easing: { x: ease.sineOut, y: ease.sineOut }
  },
  page3: {
    state: { x: PI, y: PI, page: 3, offset: [-0.5,+0.0,zNear], flip: 0 },
    easing: { x: ease.sineOut, y: ease.sineOut }
  },
  page4: {
    state: { x: PI, y: PI, page: 4, offset: [+0.0,+0.0,zNear], flip: 0 },
    easing: { x: ease.sineOut, y: ease.sineOut }
  },
  page4Flip: {
    state: { x: PI, y: PI, page: 4, offset: [+0.0,+0.0,zNear], flip: -PI },
    easing: { x: ease.sineOut, y: ease.sineOut }
  },
  fold0: {
    state: { x: PI, y: 0, page: 0, offset: [+0.0,+0.0,zFar], flip: 0 },
    easing: { x: ease.sineOut, y: ease.sineOut }
  },
  fold1: {
    state: { x: 0, y: 0, page: 0, offset: [-1.5,-0.5,zFar], flip: 0 },
    easing: { x: ease.sineOut, y: ease.sineOut }
  }
})

var draw = {
  paper: paper(regl, zine)
}

tm.go([ 'page0' ])
frame()

emitter.on('page:next', function () {
  var sp = state.speed
  if (!state.folded && state.page === 4) {
    tm.go([
      'fold1',
      sp,
      'fold0',
      sp,
      'page0'
    ])
    state.folded = true
  } else if (!state.folded) {
    tm.go([
      'fold1',
      sp,
      'fold0',
      sp,
      'page' + state.page,
      sp,
      'page' + String((state.page+1)%5)
    ])
    state.folded = true
  } else if (state.page === 4) {
    tm.go([ 'page4', sp, 'page4Flip' ])
  } else {
    tm.go([
      'page' + state.page,
      sp,
      'page' + String((state.page+1)%5)
    ])
  }
  state.page = (state.page+1)%5
  frame()
})

emitter.on('page:prev', function () {
  var sp = state.speed
  if (!state.folded && state.page === 0) {
    tm.go([
      'fold1',
      sp,
      'fold0',
      sp,
      'page4'
    ])
    state.folded = true
  } else if (!state.folded) {
    tm.go([
      'fold1',
      sp,
      'fold0',
      sp,
      'page' + state.page,
      sp,
      'page' + String((state.page+4)%5)
    ])
    state.folded = true
  } else if (state.page === 0) {
    tm.go([ 'page0', sp, 'page0Flip' ])
  } else {
    tm.go([
      'page' + state.page,
      sp,
      'page' + String((state.page+4)%5)
    ])
  }
  state.page = (state.page+4)%5
  frame()
})

emitter.on('fold:toggle', function () {
  if (state.folded) emitter.emit('fold:unfold')
  else emitter.emit('fold:fold')
})

emitter.on('fold:unfold', function () {
  var sp = state.speed
  tm.go([ 'page' + state.page, sp, 'fold0', sp, 'fold1' ])
  state.folded = false
  frame()
})

emitter.on('fold:fold', function () {
  var sp = state.speed
  tm.go([ 'fold1', sp, 'fold0', sp, 'page' + state.page ])
  state.folded = true
  frame()
})

window.addEventListener('keydown', function (ev) {
  if (ev.key === 'ArrowRight') {
    emitter.emit('page:next')
  } else if (ev.key === 'ArrowLeft') {
    emitter.emit('page:prev')
  } else if (ev.key === ' ') {
    emitter.emit('fold:toggle')
  }
})

window.addEventListener('resize', frame)

function frame () {
  regl.poll()
  update(performance.now()/1000)
  updateModels()
  regl.clear({ color: [0,0.0,0,0], depth: true })
  camera(function () {
    draw.paper(paperProps)
  })
  if (!tm.stopped) window.requestAnimationFrame(frame)
}

function update (t) {
  paperProps.forEach(function (paper) {
    mat4.identity(paper.pose)
  })
  var { x, y, offset, page, flip } = tm.tick(t)
  paperProps.forEach(function (paper) {
    vec3.copy(paper.offset, offset)
    var z = 0
    if (paper.page < page*2) {
      z = -paper.page * x * 0.004
    } else {
      z = (paper.page - page*3) * x * 0.004
    }
    z *= (Math.abs(flip) > PI*0.5 ? -1 : +1)
    paper.offset[2] += z
  })

  mat4.rotateY(pose.p5,pose.p5,+x*0.5)
  mat4.rotateY(pose.p4,pose.p4,-x*1.0)
  mat4.rotateY(pose.p3,pose.p3,+x*0.5)
  mat4.rotateY(pose.p0,pose.p0,+x*0.5)
  mat4.rotateY(pose.p1,pose.p1,-x*1.0)
  mat4.rotateY(pose.p2,pose.p2,+x*0.5)
  mat4.rotateX(pose.p7,pose.p7,+x*1.0)

  mat4.rotateY(pose.p5,pose.p5,+y*0.5)
  mat4.rotateY(pose.p3,pose.p3,+y*0.5)
  mat4.rotateY(pose.p0,pose.p0,-y*1.5)
  mat4.rotateY(pose.p2,pose.p2,+y*0.5)

  mat4.rotateY(pose.p0,pose.p0,
    +smstep(0,1,page)*PI
    -smstep(3,4,page)*PI
  )
  mat4.rotateY(pose.p2,pose.p2,
    +smstep(1,2,page)*PI
    -smstep(0,1,page)*PI
  )
  mat4.rotateY(pose.p3,pose.p3,
    -smstep(1,2,page)*PI
    +smstep(2,3,page)*PI
  )
  mat4.rotateY(pose.p5,pose.p5,
    -smstep(2,3,page)*PI
    +smstep(3,4,page)*PI
  )
  mat4.rotateY(pose.p6,pose.p6,
    -smstep(3,4,page)*PI
    + flip
  )
}

function smstep (a, b, x) {
  return clamp(0, 1, (x-a) / (b-a))
}
function clamp (a, b, x) {
  return Math.max(a, Math.min(b, x))
}

function updateModels () {
  paperProps.forEach(function (paper) {
    mat4.identity(paper.model)
    var p = paper
    while (p) {
      mat4.identity(tmpm)
      mat4.translate(tmpm, tmpm, p.pivot)
      mat4.multiply(tmpm, tmpm, p.pose)
      mat4.translate(tmpm, tmpm, vec3.negate(tmpv,p.pivot))
      mat4.multiply(paper.model, tmpm, paper.model)
      p = papers[p.parent]
    }
  })
}

function paper (regl, texture) {
  var size = [0,0]
  return regl({
    frag: `
      precision highp float;
      #extension GL_OES_standard_derivatives: enable
      uniform float page, pageOffset, pageFlip;
      uniform sampler2D texture;
      uniform vec2 size;
      varying vec2 vpos;
      void main () {
        float p = mod(page + pageOffset, 8.0);
        float y = floor(p/4.0);
        vec2 offset = vec2(
          mix(1.0-(mod(p+1.0,4.01))/4.0,mod(p,4.0)/4.0,y),
          y*0.5
        );
        vec2 uv = mod(vpos.xy*vec2(pageFlip)+0.5,vec2(1))/vec2(4,2) + offset;
        vec2 d = vec2(0.2)/size;
        vec4 c = texture2D(texture,uv);
        vec4 cW = texture2D(texture,uv + vec2(-d.x,0));
        vec4 cS = texture2D(texture,uv + vec2(0,d.y));
        vec4 cE = texture2D(texture,uv + vec2(d.x,0));
        vec4 cN = texture2D(texture,uv + vec2(0,-d.y));
        gl_FragColor = (c + cW + cS + cE + cN) / 5.0;
      }
    `,
    vert: `
      precision highp float;
      uniform mat4 projection, view, model;
      uniform vec3 offset;
      attribute vec2 position;
      varying vec2 vpos;
      void main () {
        vpos = position;
        vec3 p = (model * vec4(position,0,1)).xyz + offset;
        gl_Position = projection * view * vec4(p*vec3(1,1.3,1),1);
      }
    `,
    uniforms: {
      pageOffset: regl.prop('pageOffset'),
      pageFlip: regl.prop('pageFlip'),
      page: regl.prop('page'),
      model: regl.prop('model'),
      offset: regl.prop('offset'),
      texture: function () { return texture },
      size: function (context) {
        size[0] = context.viewportWidth
        size[1] = context.viewportHeight
        return size
      }
    },
    attributes: {
      position: regl.prop('positions')
    },
    elements: regl.prop('cells')
  })
}

