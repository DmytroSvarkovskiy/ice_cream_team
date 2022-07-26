!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports._vantaEffect = t())
    : (e._vantaEffect = t());
})('undefined' != typeof self ? self : this, function () {
  return (function (e) {
    var t = {};
    function n(i) {
      if (t[i]) return t[i].exports;
      var o = (t[i] = { i: i, l: !1, exports: {} });
      return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (
          (n.r(i),
          Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            n.d(
              i,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return i;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 6))
    );
  })([
    function (e, t, n) {
      'use strict';
      function i() {
        return 'undefined' != typeof navigator
          ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ) || window.innerWidth < 600
          : null;
      }
      n.d(t, 'e', function () {
        return i;
      }),
        n.d(t, 'i', function () {
          return o;
        }),
        n.d(t, 'h', function () {
          return s;
        }),
        n.d(t, 'g', function () {
          return r;
        }),
        n.d(t, 'f', function () {
          return a;
        }),
        n.d(t, 'b', function () {
          return h;
        }),
        n.d(t, 'c', function () {
          return c;
        }),
        n.d(t, 'd', function () {
          return u;
        }),
        n.d(t, 'a', function () {
          return l;
        }),
        (Number.prototype.clamp = function (e, t) {
          return Math.min(Math.max(this, e), t);
        });
      const o = e => e[Math.floor(Math.random() * e.length)];
      function s(e, t) {
        return (
          null == e && (e = 0),
          null == t && (t = 1),
          e + Math.random() * (t - e)
        );
      }
      function r(e, t) {
        return (
          null == e && (e = 0),
          null == t && (t = 1),
          Math.floor(e + Math.random() * (t - e + 1))
        );
      }
      const a = e => document.querySelector(e),
        h = e =>
          'number' == typeof e ? '#' + ('00000' + e.toString(16)).slice(-6) : e,
        c = (e, t = 1) => {
          const n = h(e),
            i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),
            o = i
              ? {
                  r: parseInt(i[1], 16),
                  g: parseInt(i[2], 16),
                  b: parseInt(i[3], 16),
                }
              : null;
          return 'rgba(' + o.r + ',' + o.g + ',' + o.b + ',' + t + ')';
        },
        u = e => 0.299 * e.r + 0.587 * e.g + 0.114 * e.b;
      function l(e) {
        for (; e.children && e.children.length > 0; )
          l(e.children[0]), e.remove(e.children[0]);
        e.geometry && e.geometry.dispose(),
          e.material &&
            (Object.keys(e.material).forEach(t => {
              e.material[t] &&
                null !== e.material[t] &&
                'function' == typeof e.material[t].dispose &&
                e.material[t].dispose();
            }),
            e.material.dispose());
      }
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n(0);
      const o = 'object' == typeof window;
      let s = (o && window.THREE) || {};
      o && !window.VANTA && (window.VANTA = {});
      const r = (o && window.VANTA) || {};
      (r.register = (e, t) => (r[e] = e => new t(e))), (r.version = '0.5.22');
      const a = function () {
        return (
          Array.prototype.unshift.call(arguments, '[VANTA]'),
          console.error.apply(this, arguments)
        );
      };
      (r.VantaBase = class {
        constructor(e = {}) {
          if (!o) return !1;
          (r.current = this),
            (this.windowMouseMoveWrapper =
              this.windowMouseMoveWrapper.bind(this)),
            (this.windowTouchWrapper = this.windowTouchWrapper.bind(this)),
            (this.windowGyroWrapper = this.windowGyroWrapper.bind(this)),
            (this.resize = this.resize.bind(this)),
            (this.animationLoop = this.animationLoop.bind(this)),
            (this.restart = this.restart.bind(this));
          const t =
            'function' == typeof this.getDefaultOptions
              ? this.getDefaultOptions()
              : this.defaultOptions;
          if (
            ((this.options = Object.assign(
              {
                mouseControls: !0,
                touchControls: !0,
                gyroControls: !1,
                minHeight: 200,
                minWidth: 200,
                scale: 1,
                scaleMobile: 1,
              },
              t
            )),
            (e instanceof HTMLElement || 'string' == typeof e) &&
              (e = { el: e }),
            Object.assign(this.options, e),
            this.options.THREE && (s = this.options.THREE),
            (this.el = this.options.el),
            null == this.el)
          )
            a('Instance needs "el" param!');
          else if (!(this.options.el instanceof HTMLElement)) {
            const e = this.el;
            if (((this.el = Object(i.f)(e)), !this.el))
              return void a('Cannot find element', e);
          }
          this.prepareEl(), this.initThree(), this.setSize();
          try {
            this.init();
          } catch (e) {
            return (
              a('Init error', e),
              this.renderer &&
                this.renderer.domElement &&
                this.el.removeChild(this.renderer.domElement),
              void (
                this.options.backgroundColor &&
                (console.log('[VANTA] Falling back to backgroundColor'),
                (this.el.style.background = Object(i.b)(
                  this.options.backgroundColor
                )))
              )
            );
          }
          this.initMouse(), this.resize(), this.animationLoop();
          const n = window.addEventListener;
          n('resize', this.resize),
            window.requestAnimationFrame(this.resize),
            this.options.mouseControls &&
              (n('scroll', this.windowMouseMoveWrapper),
              n('mousemove', this.windowMouseMoveWrapper)),
            this.options.touchControls &&
              (n('touchstart', this.windowTouchWrapper),
              n('touchmove', this.windowTouchWrapper)),
            this.options.gyroControls &&
              n('deviceorientation', this.windowGyroWrapper);
        }
        setOptions(e = {}) {
          Object.assign(this.options, e), this.triggerMouseMove();
        }
        prepareEl() {
          let e, t;
          if ('undefined' != typeof Node && Node.TEXT_NODE)
            for (e = 0; e < this.el.childNodes.length; e++) {
              const t = this.el.childNodes[e];
              if (t.nodeType === Node.TEXT_NODE) {
                const e = document.createElement('span');
                (e.textContent = t.textContent),
                  t.parentElement.insertBefore(e, t),
                  t.remove();
              }
            }
          for (e = 0; e < this.el.children.length; e++)
            (t = this.el.children[e]),
              'static' === getComputedStyle(t).position &&
                (t.style.position = 'relative'),
              'auto' === getComputedStyle(t).zIndex && (t.style.zIndex = 1);
          'static' === getComputedStyle(this.el).position &&
            (this.el.style.position = 'relative');
        }
        applyCanvasStyles(e, t = {}) {
          Object.assign(e.style, {
            position: 'absolute',
            zIndex: 0,
            top: 0,
            left: 0,
            background: '',
          }),
            Object.assign(e.style, t),
            e.classList.add('vanta-canvas');
        }
        initThree() {
          s.WebGLRenderer
            ? ((this.renderer = new s.WebGLRenderer({
                alpha: !0,
                antialias: !0,
              })),
              this.el.appendChild(this.renderer.domElement),
              this.applyCanvasStyles(this.renderer.domElement),
              isNaN(this.options.backgroundAlpha) &&
                (this.options.backgroundAlpha = 1),
              (this.scene = new s.Scene()))
            : console.warn('[VANTA] No THREE defined on window');
        }
        getCanvasElement() {
          return this.renderer
            ? this.renderer.domElement
            : this.p5renderer
            ? this.p5renderer.canvas
            : void 0;
        }
        getCanvasRect() {
          const e = this.getCanvasElement();
          return !!e && e.getBoundingClientRect();
        }
        windowMouseMoveWrapper(e) {
          const t = this.getCanvasRect();
          if (!t) return !1;
          const n = e.clientX - t.left,
            i = e.clientY - t.top;
          n >= 0 &&
            i >= 0 &&
            n <= t.width &&
            i <= t.height &&
            ((this.mouseX = n),
            (this.mouseY = i),
            this.options.mouseEase || this.triggerMouseMove(n, i));
        }
        windowTouchWrapper(e) {
          const t = this.getCanvasRect();
          if (!t) return !1;
          if (1 === e.touches.length) {
            const n = e.touches[0].clientX - t.left,
              i = e.touches[0].clientY - t.top;
            n >= 0 &&
              i >= 0 &&
              n <= t.width &&
              i <= t.height &&
              ((this.mouseX = n),
              (this.mouseY = i),
              this.options.mouseEase || this.triggerMouseMove(n, i));
          }
        }
        windowGyroWrapper(e) {
          const t = this.getCanvasRect();
          if (!t) return !1;
          const n = Math.round(2 * e.alpha) - t.left,
            i = Math.round(2 * e.beta) - t.top;
          n >= 0 &&
            i >= 0 &&
            n <= t.width &&
            i <= t.height &&
            ((this.mouseX = n),
            (this.mouseY = i),
            this.options.mouseEase || this.triggerMouseMove(n, i));
        }
        triggerMouseMove(e, t) {
          void 0 === e &&
            void 0 === t &&
            (this.options.mouseEase
              ? ((e = this.mouseEaseX), (t = this.mouseEaseY))
              : ((e = this.mouseX), (t = this.mouseY))),
            this.uniforms &&
              ((this.uniforms.iMouse.value.x = e / this.scale),
              (this.uniforms.iMouse.value.y = t / this.scale));
          const n = e / this.width,
            i = t / this.height;
          'function' == typeof this.onMouseMove && this.onMouseMove(n, i);
        }
        setSize() {
          this.scale || (this.scale = 1),
            Object(i.e)() && this.options.scaleMobile
              ? (this.scale = this.options.scaleMobile)
              : this.options.scale && (this.scale = this.options.scale),
            (this.width = Math.max(this.el.offsetWidth, this.options.minWidth)),
            (this.height = Math.max(
              this.el.offsetHeight,
              this.options.minHeight
            ));
        }
        initMouse() {
          ((!this.mouseX && !this.mouseY) ||
            (this.mouseX === this.options.minWidth / 2 &&
              this.mouseY === this.options.minHeight / 2)) &&
            ((this.mouseX = this.width / 2),
            (this.mouseY = this.height / 2),
            this.triggerMouseMove(this.mouseX, this.mouseY));
        }
        resize() {
          this.setSize(),
            this.camera &&
              ((this.camera.aspect = this.width / this.height),
              'function' == typeof this.camera.updateProjectionMatrix &&
                this.camera.updateProjectionMatrix()),
            this.renderer &&
              (this.renderer.setSize(this.width, this.height),
              this.renderer.setPixelRatio(
                window.devicePixelRatio / this.scale
              )),
            'function' == typeof this.onResize && this.onResize();
        }
        isOnScreen() {
          const e = this.el.offsetHeight,
            t = this.el.getBoundingClientRect(),
            n =
              window.pageYOffset ||
              (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop,
            i = t.top + n;
          return i - window.innerHeight <= n && n <= i + e;
        }
        animationLoop() {
          return (
            this.t || (this.t = 0),
            (this.t += 1),
            this.t2 || (this.t2 = 0),
            (this.t2 += this.options.speed || 1),
            this.uniforms && (this.uniforms.iTime.value = 0.016667 * this.t2),
            this.options.mouseEase &&
              ((this.mouseEaseX = this.mouseEaseX || this.mouseX || 0),
              (this.mouseEaseY = this.mouseEaseY || this.mouseY || 0),
              Math.abs(this.mouseEaseX - this.mouseX) +
                Math.abs(this.mouseEaseY - this.mouseY) >
                0.1 &&
                ((this.mouseEaseX += 0.05 * (this.mouseX - this.mouseEaseX)),
                (this.mouseEaseY += 0.05 * (this.mouseY - this.mouseEaseY)),
                this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))),
            (this.isOnScreen() || this.options.forceAnimate) &&
              ('function' == typeof this.onUpdate && this.onUpdate(),
              this.scene &&
                this.camera &&
                (this.renderer.render(this.scene, this.camera),
                this.renderer.setClearColor(
                  this.options.backgroundColor,
                  this.options.backgroundAlpha
                )),
              this.fps && this.fps.update && this.fps.update(),
              'function' == typeof this.afterRender && this.afterRender()),
            (this.req = window.requestAnimationFrame(this.animationLoop))
          );
        }
        restart() {
          if (this.scene)
            for (; this.scene.children.length; )
              this.scene.remove(this.scene.children[0]);
          'function' == typeof this.onRestart && this.onRestart(), this.init();
        }
        init() {
          'function' == typeof this.onInit && this.onInit();
        }
        destroy() {
          'function' == typeof this.onDestroy && this.onDestroy();
          const e = window.removeEventListener;
          e('touchstart', this.windowTouchWrapper),
            e('touchmove', this.windowTouchWrapper),
            e('scroll', this.windowMouseMoveWrapper),
            e('mousemove', this.windowMouseMoveWrapper),
            e('deviceorientation', this.windowGyroWrapper),
            e('resize', this.resize),
            window.cancelAnimationFrame(this.req);
          const t = this.scene;
          t && t.children && Object(i.a)(t),
            this.renderer &&
              (this.renderer.domElement &&
                this.el.removeChild(this.renderer.domElement),
              (this.renderer = null),
              (this.scene = null)),
            r.current === this && (r.current = null);
        }
      }),
        (t.b = r.VantaBase);
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return s;
      });
      var i = n(1);
      n.d(t, 'a', function () {
        return i.a;
      });
      let o = 'object' == typeof window && window.THREE;
      class s extends i.b {
        constructor(e) {
          (o = e.THREE || o),
            (o.Color.prototype.toVector = function () {
              return new o.Vector3(this.r, this.g, this.b);
            }),
            super(e),
            (this.updateUniforms = this.updateUniforms.bind(this));
        }
        init() {
          (this.mode = 'shader'),
            (this.uniforms = {
              iTime: { type: 'f', value: 1 },
              iResolution: { type: 'v2', value: new o.Vector2(1, 1) },
              iDpr: { type: 'f', value: window.devicePixelRatio || 1 },
              iMouse: {
                type: 'v2',
                value: new o.Vector2(this.mouseX || 0, this.mouseY || 0),
              },
            }),
            super.init(),
            this.fragmentShader && this.initBasicShader();
        }
        setOptions(e) {
          super.setOptions(e), this.updateUniforms();
        }
        initBasicShader(e = this.fragmentShader, t = this.vertexShader) {
          t ||
            (t =
              'uniform float uTime;\nuniform vec2 uResolution;\nvoid main() {\n  gl_Position = vec4( position, 1.0 );\n}'),
            this.updateUniforms(),
            'function' == typeof this.valuesChanger && this.valuesChanger();
          const n = new o.ShaderMaterial({
              uniforms: this.uniforms,
              vertexShader: t,
              fragmentShader: e,
            }),
            i = this.options.texturePath;
          i &&
            (this.uniforms.iTex = {
              type: 't',
              value: new o.TextureLoader().load(i),
            });
          const s = new o.Mesh(new o.PlaneGeometry(2, 2), n);
          this.scene.add(s),
            (this.camera = new o.Camera()),
            (this.camera.position.z = 1);
        }
        updateUniforms() {
          const e = {};
          let t, n;
          for (t in this.options)
            (n = this.options[t]),
              -1 !== t.toLowerCase().indexOf('color')
                ? (e[t] = { type: 'v3', value: new o.Color(n).toVector() })
                : 'number' == typeof n && (e[t] = { type: 'f', value: n });
          return Object.assign(this.uniforms, e);
        }
        resize() {
          super.resize(),
            (this.uniforms.iResolution.value.x = this.width / this.scale),
            (this.uniforms.iResolution.value.y = this.height / this.scale);
        }
      }
    },
    ,
    ,
    ,
    function (e, t, n) {
      'use strict';
      n.r(t);
      var i = n(2);
      class o extends i.b {}
      (t.default = i.a.register('CLOUDS', o)),
        (o.prototype.defaultOptions = {
          backgroundColor: 16777215,
          skyColor: 6863063,
          cloudColor: 11387358,
          cloudShadowColor: 1586512,
          sunColor: 16750873,
          sunGlareColor: 16737843,
          sunlightColor: 16750899,
          scale: 3,
          scaleMobile: 12,
          speed: 1,
          mouseEase: !0,
        }),
        (o.prototype.fragmentShader =
          'uniform vec2 iResolution;\nuniform vec2 iMouse;\nuniform float iTime;\nuniform sampler2D iTex;\n\nuniform float speed;\nuniform vec3 skyColor;\nuniform vec3 cloudColor;\nuniform vec3 cloudShadowColor;\nuniform vec3 sunColor;\nuniform vec3 sunlightColor;\nuniform vec3 sunGlareColor;\nuniform vec3 backgroundColor;\n\n// uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click\n// uniform samplerXX iChannel0..3;          // input channel. XX = 2D/Cube\n\n\n// Volumetric clouds. It performs level of detail (LOD) for faster rendering\nfloat hash(float p) {\n  p = fract(p * 0.011);\n  p *= (p + 7.5);\n  p *= (p + p);\n  return fract(p);\n}\n\nfloat noise( vec3 x ){\n    // The noise function returns a value in the range -1.0f -> 1.0f\n    vec3 p = floor(x);\n    vec3 f = fract(x);\n    f       = f*f*(3.0-2.0*f);\n    float n = p.x + p.y*57.0 + 113.0*p.z;\n    return mix(mix(mix( hash(n+0.0  ), hash(n+1.0  ),f.x),\n                   mix( hash(n+57.0 ), hash(n+58.0 ),f.x),f.y),\n               mix(mix( hash(n+113.0), hash(n+114.0),f.x),\n                   mix( hash(n+170.0), hash(n+171.0),f.x),f.y),f.z);\n}\n\nconst float constantTime = 1000.;\nfloat map5( in vec3 p ){\n    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;\n    vec3 q = p - speed1*(iTime + constantTime);\n    float f;\n    f  = 0.50000*noise( q ); q = q*2.02;\n    f += 0.25000*noise( q ); q = q*2.03;\n    f += 0.12500*noise( q ); q = q*2.01;\n    f += 0.06250*noise( q ); q = q*2.02;\n    f += 0.03125*noise( q );\n    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );\n}\nfloat map4( in vec3 p ){\n    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;\n    vec3 q = p - speed1*(iTime + constantTime);\n    float f;\n    f  = 0.50000*noise( q ); q = q*2.02;\n    f += 0.25000*noise( q ); q = q*2.03;\n    f += 0.12500*noise( q ); q = q*2.01;\n    f += 0.06250*noise( q );\n    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );\n}\nfloat map3( in vec3 p ){\n    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;\n    vec3 q = p - speed1*(iTime + constantTime);\n    float f;\n    f  = 0.50000*noise( q ); q = q*2.02;\n    f += 0.25000*noise( q ); q = q*2.03;\n    f += 0.12500*noise( q );\n    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );\n}\nfloat map2( in vec3 p ){\n    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;\n    vec3 q = p - speed1*(iTime + constantTime);\n    float f;\n    f  = 0.50000*noise( q ); q = q*2.02;\n    f += 0.25000*noise( q );\n    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );\n}\n\nvec3 sundir = normalize( vec3(-1.0,0.0,-1.0) );\n\nvec4 integrate( in vec4 sum, in float dif, in float den, in vec3 bgcol, in float t ){\n    // lighting\n    vec3 lin = cloudColor*1.4 + sunlightColor*dif;\n    vec4 col = vec4( mix( vec3(1.0,0.95,0.8), cloudShadowColor, den ), den );\n    col.xyz *= lin;\n    col.xyz = mix( col.xyz, bgcol, 1.0-exp(-0.003*t*t) );\n    // front to back blending\n    col.a *= 0.4;\n    col.rgb *= col.a;\n    return sum + col*(1.0-sum.a);\n}\n\n#define MARCH(STEPS,MAPLOD) for(int i=0; i<STEPS; i++) { vec3  pos = ro + t*rd; if( pos.y<-3.0 || pos.y>2.0 || sum.a > 0.99 ) break; float den = MAPLOD( pos ); if( den>0.01 ) { float dif = clamp((den - MAPLOD(pos+0.3*sundir))/0.6, 0.0, 1.0 ); sum = integrate( sum, dif, den, bgcol, t ); } t += max(0.075,0.02*t); }\n\nvec4 raymarch( in vec3 ro, in vec3 rd, in vec3 bgcol, in ivec2 px ){\n    vec4 sum = vec4(0.0);\n\n    float t = 0.0;\n\n    MARCH(20,map5);\n    MARCH(25,map4);\n    MARCH(30,map3);\n    MARCH(40,map2);\n\n    return clamp( sum, 0.0, 1.0 );\n}\n\nmat3 setCamera( in vec3 ro, in vec3 ta, float cr ){\n    vec3 cw = normalize(ta-ro);\n    vec3 cp = vec3(sin(cr), cos(cr),0.0);\n    vec3 cu = normalize( cross(cw,cp) );\n    vec3 cv = normalize( cross(cu,cw) );\n    return mat3( cu, cv, cw );\n}\n\nvec4 render( in vec3 ro, in vec3 rd, in ivec2 px ){\n    // background sky\n    float sun = clamp( dot(sundir,rd), 0.0, 1.0 );\n    vec3 col = skyColor - rd.y*0.2*vec3(1.0,0.5,1.0) + 0.15*0.5;\n    col += 0.2*sunColor*pow( sun, 8.0 );\n\n    // clouds\n    vec4 res = raymarch( ro, rd, col, px );\n    col = col*(1.0-res.w) + res.xyz;\n\n    // sun glare\n    col += 0.2*sunGlareColor*pow( sun, 3.0 );\n\n    return vec4( col, 1.0 );\n}\n\nvoid main(){\n    vec2 p = (-iResolution.xy + 2.0*gl_FragCoord.xy)/ iResolution.y;\n\n    vec2 m = iMouse.xy/iResolution.xy;\n    m.y = (1.0 - m.y) * 0.33 + 0.28; // camera height\n\n    m.x *= 0.25;\n    m.x += sin(iTime * 0.1 + 3.1415) * 0.25 + 0.25;\n\n    // camera\n    vec3 ro = 4.0*normalize(vec3(sin(3.0*m.x), 0.4*m.y, cos(3.0*m.x))); // origin\n    vec3 ta = vec3(0.0, -1.0, 0.0);\n    mat3 ca = setCamera( ro, ta, 0.0 );\n    // ray\n    vec3 rd = ca * normalize( vec3(p.xy,1.5));\n\n    gl_FragColor = render( ro, rd, ivec2(gl_FragCoord-0.5) );\n}\n');
    },
  ]);
});
