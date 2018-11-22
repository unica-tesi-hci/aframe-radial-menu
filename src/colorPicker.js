
       /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/**https://webpack.js.org/concepts/ indirizzo per documentarsi su webpack****/ 
         __webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/

/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	AFRAME.registerComponent('colorwheel', {
	  dependencies: ['raycaster'],
	  tweenDuration: 280,
	  tweenEasing: TWEEN.Easing.Cubic.Out,
	  padding: 0.15,
	  hsv: {
	    h: 0.0,
	    s: 0.0,
	    v: 1.0
	  },
    
	  defaultMaterial: {
	    color: '#ffffff',
	    flatShading: true,
	    transparent: true,
	    shader: 'flat',
	    fog: false,
	    side: 'double'
	  },
    
	  color: '#ffffff',
	  schema: {
	    disabled: {
	      type: 'boolean',
	      default: false
	    },
	    
	    //Size of the colorWheel. NOTE: Assumed in metres.
	    wheelSize: {
	      type: 'number',
	      default: 0.45
	    },
	    //Show color choice in an element
	    showSelection: {
	      type: 'boolean',
	      default: true
	    },
	    selectionSize: {
	      type: 'number',
	      default: 0.10
	    },
	    
	  },
	
	  init: function init() {
	    var _this = this;
	
	    var that = this,
	        padding = this.padding,
	        defaultMaterial = this.defaultMaterial;
	
	    this.swatchReady = false;
	
	    //Background color of this interface
	    //TODO: Expose sizing for deeper customisation?
	    
	    this.brightnessSliderHeight = 0.6;
	    this.brightnessSliderWidth = 1;
	   
	
	    //Circle for colorwheel
	    this.colorWheel = document.createElement('a-circle');
	    this.colorWheel.setAttribute('radius', 0.7);     /**********raggio del cerchio color picker************/
	    this.colorWheel.setAttribute('material', defaultMaterial);
	    this.colorWheel.setAttribute('position', {
	      x: 0,
	      y: 0,
	      z: 0.001
	    });
	    this.el.appendChild(this.colorWheel);
	
      /****************************************************************************************************************/
	    /****************************Brightness slider: più luminoso o meno luminoso*************************************/
      /****************************************************************************************************************/
      
	    this.brightnessSlider = document.createElement('a-ring'); //si puo' mettere a-ring plane
      this.brightnessSlider.setAttribute('theta-length', 105);
      this.brightnessSlider.setAttribute('theta-start', 90);
	    this.brightnessSlider.setAttribute('width', this.brightnessSliderWidth);
	    this.brightnessSlider.setAttribute('height', this.brightnessSliderHeight);
	    this.brightnessSlider.setAttribute('material', defaultMaterial);
	    this.brightnessSlider.setAttribute('position', {
	      x: 0,
	      y: 0,
	      z: 0.001
	    });
	    this.el.appendChild(this.brightnessSlider);
	
	    //Plane the color selection element will inhabit
	    if (this.data.showSelection) {
	      this.selectionEl = document.createElement('a-circle');
	      this.selectionEl.setAttribute('radius', 0.16);  /********raggio piccolo che indica il colore*********/
	      this.selectionEl.setAttribute('material', defaultMaterial);
	
        /***********************************************************************************************/
        /****************Cerchio piccolo che prende il colore selezionato nel color wheel***************/
        /***********************************************************************************************/
        
        
        
        
	      //Place in top left, lift slightly
	      this.selectionEl.setAttribute('position', {
	        x: 0.2,
	        y: 0.97,
	        z: 0.001
	      });
	      this.el.appendChild(this.selectionEl);
	    }
	    /************************************************************************************************/
	    /*****Color 'cursor'. We'll use this to indicate a rough color selection *********/
      /****** Il cursore comprende entrambi i cerchi, sia luminosità che colore***********/
      /************************************************************************************************/
	     this.colorCursorOptions = {
	     cursorRadius: 0, 
	     cursorSegments: 32,
	     cursorColor: '#FFF'
	     };
	
	    this.colorCursorOptions.cursorMaterial = new THREE.MeshBasicMaterial({
	    color: this.colorCursorOptions.cursorColor,
	    transparent: true
	   });
	
      this.colorCursor = document.createElement('a-entity');
	    this.brightnessCursor = document.createElement('a-entity');
	
	    var geometry = new THREE.TorusBufferGeometry(this.colorCursorOptions.cursorRadius, this.colorCursorOptions.cursorRadius - 0.02, this.colorCursorOptions.cursorSegments, this.colorCursorOptions.cursorSegments / 4);
	    this.colorCursor.setObject3D('mesh', new THREE.Mesh(geometry, this.colorCursorOptions.cursorMaterial));
	    this.brightnessCursor.setObject3D('mesh', new THREE.Mesh(geometry, this.colorCursorOptions.cursorMaterial));
	
	    this.el.appendChild(this.colorCursor);
	    this.brightnessSlider.appendChild(this.brightnessCursor);
	    this.brightnessCursor.setAttribute('position', {
	      x: 0,
	      y: this.brightnessSliderHeight / 2,
	      z: 0
	    });
	
	    //Handlers
	    this.bindMethods();
      
	//crea i colori e le sfumature del color picker e slider
	    //TODO: Replace setTimeout as it can be unreliable
	      setTimeout(function () {
	      that.el.initColorWheel();
	      that.el.initBrightnessSlider();
	    
	      that.colorWheel.addEventListener('click', _this.onColorWheelClicked.bind(_this));
	      that.brightnessSlider.addEventListener('click', _this.onBrightnessSliderClicked.bind(_this));
	    }, 5);
	  },
    //probabilmente aggiorna le posizioni
	  //Util to animate between positions. Item represents a mesh or object containing a position
	  setPositionTween: function setPositionTween(item, fromPosition, toPosition) {
	    this.tween = new TWEEN.Tween(fromPosition).to(toPosition, this.tweenDuration).onUpdate(function () {
	      item.position.x = this.x;
	      item.position.y = this.y;
	      item.position.z = this.z;
	    }).easing(this.tweenEasing).start();
	
	    return this.tween;
	  },
	  //Util to animate between colors. Item represents a mesh or object's material
	  setColorTween: function setColorTween(item, fromColor, toColor) {
	    this.tween = new TWEEN.Tween(new THREE.Color(fromColor)).to(toColor, this.tweenDuration).onUpdate(function () {
	      item.color.r = this.r;
	      item.color.g = this.g;
	      item.color.b = this.b;
	    }).easing(this.tweenEasing).start();
	
	    return this.tween;
	  },
	  onColorWheelClicked: function onColorWheelClicked(evt) {
	    if (this.data.disabled) return;
	    this.el.onHueDown(evt.detail.intersection.point);
	  },
	  onBrightnessSliderClicked: function onBrightnessSliderClicked(evt) {
	    if (this.data.disabled) return;
	    this.el.onBrightnessDown(evt.detail.intersection.point);
	  },
	  
	//centra con i coloriii
	  bindMethods: function bindMethods() {
	    this.el.initColorWheel = this.initColorWheel.bind(this);
	    this.el.initBrightnessSlider = this.initBrightnessSlider.bind(this);
	    this.el.updateColor = this.updateColor.bind(this);
	    this.el.onHueDown = this.onHueDown.bind(this);
	    this.el.onBrightnessDown = this.onBrightnessDown.bind(this);
	  },
	

	 
	  initBrightnessSlider: function initBrightnessSlider() {
	    /*
	     * NOTE:
	     *
	     * In A-Painter, the brightness slider is actually a model submesh / element.
	     * Here we generate it using GLSL and add it to our plane material
	     */
	
	    var vertexShader = '\n      varying vec2 vUv;\n      void main(){\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n      }\n    ';
	
	    var fragmentShader = '\n      uniform vec3 color1;\n      uniform vec3 color2;\n      varying vec2 vUv;\n\n      void main(){\n        vec4 c1 = vec4(color1, 1.0);\n  \t    vec4 c2 = vec4(color2, 1.0);\n\n        vec4 color = mix(c2, c1, smoothstep(0.0, 1.0, vUv.y));\n        gl_FragColor = color;\n      }\n    ';
	
      //solo il colore di grafica esterna della slider
	    var material = new THREE.ShaderMaterial({
	      uniforms: {
	        color1: {
	          type: 'c',
	          value: new THREE.Color(0xFFFFFF)
	        },
	        color2: {
	          type: 'c',
	          value: new THREE.Color(0x000000)
	        }
	      },
	      vertexShader: vertexShader,
	      fragmentShader: fragmentShader
	    });
	
      //sfuma lo slider
	  this.brightnessSlider.getObject3D('mesh').material = material;
	  this.brightnessSlider.getObject3D('mesh').material.needsUpdate = true;
	  },
    
    //sfuma il color picker
	  initColorWheel: function initColorWheel() {
	    var colorWheel = this.colorWheel.getObject3D('mesh');
	    var vertexShader = '\n\n      varying vec2 vUv;\n      void main() {\n        vUv = uv;\n        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n        gl_Position = projectionMatrix * mvPosition;\n      }\n    ';
	
	    var fragmentShader = '\n      #define M_PI2 6.28318530718\n      uniform float brightness;\n      varying vec2 vUv;\n      vec3 hsb2rgb(in vec3 c){\n          vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0 );\n          rgb = rgb * rgb * (3.0 - 2.0 * rgb);\n          return c.z * mix( vec3(1.0), rgb, c.y);\n      }\n\n      void main() {\n        vec2 toCenter = vec2(0.5) - vUv;\n        float angle = atan(toCenter.y, toCenter.x);\n        float radius = length(toCenter) * 2.0;\n        vec3 color = hsb2rgb(vec3((angle / M_PI2) + 0.5, radius, brightness));\n        gl_FragColor = vec4(color, 1.0);\n      }\n      ';
	
	    var material = new THREE.ShaderMaterial({
	      uniforms: {
	        brightness: {
	          type: 'f',
	          value: this.hsv.v
	        }
	      },
	      vertexShader: vertexShader,
	      fragmentShader: fragmentShader
	    });
	
	    colorWheel.material = material;
	    colorWheel.material.needsUpdate = true;
	  },
	  onSwatchClicked: function onSwatchClicked(color) {
	    var colorWheel = this.colorWheel.getObject3D('mesh'),
	        brightnessCursor = this.brightnessCursor.getObject3D('mesh'),
	        brightnessSlider = this.brightnessSlider.getObject3D('mesh');
	
	    var rgb = this.hexToRgb(color);
	    this.hsv = this.rgbToHsv(rgb.r, rgb.g, rgb.b);
	
	    var angle = this.hsv.h * 2 * Math.PI,
	        radius = this.hsv.s * this.data.wheelSize;
	
	    var x = radius * Math.cos(angle),
	        y = radius * Math.sin(angle),
	        z = colorWheel.position.z;
	
	    var colorPosition = new THREE.Vector3(x, y, z);
	    colorWheel.localToWorld(colorPosition);
	    //We can reuse hueDown for this
	    this.onHueDown(colorPosition);
	
	    //Need to do the reverse of onbrightnessdown
	    var offset = this.hsv.v * this.brightnessSliderHeight;
	    var bY = offset - this.brightnessSliderHeight;
	    var brightnessPosition = new THREE.Vector3(0, bY, 0);
	    this.setPositionTween(brightnessCursor, brightnessCursor.position, brightnessPosition);
	    colorWheel.material.uniforms['brightness'].value = this.hsv.v;
	  },
	  onBrightnessDown: function onBrightnessDown(position) {
	    var brightnessSlider = this.brightnessSlider.getObject3D('mesh'),
	        brightnessCursor = this.brightnessCursor.getObject3D('mesh'),
	        colorWheel = this.colorWheel.getObject3D('mesh');
	
	    brightnessSlider.updateMatrixWorld();
	    brightnessSlider.worldToLocal(position);
	
	    //Brightness is a value between 0 and 1. The parent plane is centre registered, hence offset
	    var cursorOffset = position.y + this.brightnessSliderHeight / 2;
	    var brightness = cursorOffset / this.brightnessSliderHeight;
	    var updatedPosition = {
	      x: 0,
	      y: position.y - this.brightnessSliderHeight / 2,
	      z: 0
	
	      //Set brightness cursor position to offset position
	    };this.setPositionTween(brightnessCursor, brightnessCursor.position, updatedPosition);
	
	    //Update material brightness
	    colorWheel.material.uniforms['brightness'].value = brightness;
	    this.hsv.v = brightness;
	    this.el.updateColor();
	  },
	  onHueDown: function onHueDown(position) {
	    var colorWheel = this.colorWheel.getObject3D('mesh'),
	        colorCursor = this.colorCursor.getObject3D('mesh'),
	        radius = this.data.wheelSize;
	
	    colorWheel.updateMatrixWorld();
	    colorWheel.worldToLocal(position);
	
	    this.setPositionTween(colorCursor, colorCursor.position, position);
	
	    //Determine Hue and Saturation value from polar co-ordinates
	    var polarPosition = {
	      r: Math.sqrt(position.x * position.x + position.y * position.y),
	      theta: Math.PI + Math.atan2(position.y, position.x)
	    };
	
	    var angle = (polarPosition.theta * (180 / Math.PI) + 180) % 360;
	    this.hsv.h = angle / 360;
	    this.hsv.s = polarPosition.r / radius;
	
	    this.el.updateColor();
	  },
	
    //aggiorna il colore
	  updateColor: function updateColor() {
	
	    var rgb = this.hsvToRgb(this.hsv),
	        color = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')',
	        hex = '#' + new THREE.Color(color).getHexString();
	
	    var selectionEl = this.selectionEl.getObject3D('mesh'),
	        colorCursor = this.colorCursor.getObject3D('mesh'),
	        brightnessCursor = this.brightnessCursor.getObject3D('mesh');
	/*cubo demo*/
  /**/ 
  /**/ var cubo = document.querySelector('#sfera');
  /**/
  /**/
	    //Update indicator element of selected color aggiorna il cerchietto
	    if (this.data.showSelection) {
	       this.setColorTween(selectionEl.material, selectionEl.material.color, new THREE.Color(color));
          /**/cubo.setAttribute("color", hex);
	    }
	
	  },

//cambia il colore del cerchietto in base al triangolo del colorpicker cliccato
	 hsvToRgb: function hsvToRgb(hsv) {
	    var r, g, b, i, f, p, q, t;
	    var h = THREE.Math.clamp(hsv.h, 0, 1);
	    var s = THREE.Math.clamp(hsv.s, 0, 1);
	    var v = hsv.v;
	
	    i = Math.floor(h * 6);
	    f = h * 6 - i;
	    p = v * (1 - s);
	    q = v * (1 - f * s);
	    t = v * (1 - (1 - f) * s);
	    switch (i % 6) {
	      case 0:
	        r = v;
	        g = t;
	        b = p;
	        break;
	      case 1:
	        r = q;
	        g = v;
	        b = p;
	        break;
	      case 2:
	        r = p;
	        g = v;
	        b = t;
	        break;
	      case 3:
	        r = p;
	        g = q;
	        b = v;
	        break;
	      case 4:
	        r = t;
	        g = p;
	        b = v;
	        break;
	      case 5:
	        r = v;
	        g = p;
	        b = q;
	        break;
	    }
	    return {
	      r: Math.round(r * 255),
	      g: Math.round(g * 255),
	      b: Math.round(b * 255)
	    };
	  },
	});
	
	AFRAME.registerPrimitive('a-colorwheel', {
	  defaultComponents: {
	    colorwheel: {}
	  }	  
	});

/***/ })
/******/ ]);
    
 