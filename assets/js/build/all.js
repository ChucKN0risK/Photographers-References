/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;



window.Modernizr = (function( window, document, undefined ) {

    var version = '2.8.3',

    Modernizr = {},

    enableClasses = true,

    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  = document.createElement('input')  ,

    smile = ':)',

    toString = {}.toString,

    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),

    ns = {'svg': 'http://www.w3.org/2000/svg'},

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, 


    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
                      while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

                style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
          (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
        if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },



    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

            var isSupported = eventName in element;

        if ( !isSupported ) {
                if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

                    if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),


    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { 
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }


    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    function setCss( str ) {
        mStyle.cssText = str;
    }

    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    function is( obj, type ) {
        return typeof obj === type;
    }

    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                            if (elem === false) return props[i];

                            if (is(item, 'function')){
                                return item.bind(elem || obj);
                }

                            return item;
            }
        }
        return false;
    }

    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

            if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

            } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };



    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };


    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };



    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    tests['rgba'] = function() {
        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
            setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
                setCss('background:url(https://),url(https://),red url(https://)');

            return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };



    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
                setCssAll('opacity:.55');

                    return (/^0.55$/).test(mStyle.opacity);
    };


    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
                       (str1 + '-webkit- '.split(' ').join(str2 + str1) +
                       prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

                        if ( ret && 'webkitPerspective' in docElement.style ) {

                      injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };



    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };

    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };
    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

            try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                            bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                                                    bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };


    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    function webforms() {
                                            Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
                                  attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
                            Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                                                    if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                                        bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                                                                                  (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                                                                                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                                        bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                                        bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        }
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    Modernizr.input || webforms();


     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
                                              return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; 
     };


    setCss('');
    modElem = inputElem = null;

    ;(function(window, document) {
                var version = '3.7.0';

            var options = window.html5 || {};

            var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

            var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

            var supportsHtml5Styles;

            var expando = '_html5shiv';

            var expanID = 0;

            var expandoData = {};

            var supportsUnknownElements;

        (function() {
          try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
                    supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
                        (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
          } catch(e) {
                    supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }

        }());

            function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

          p.innerHTML = 'x<style>' + cssText + '</style>';
          return parent.insertBefore(p.lastChild, parent.firstChild);
        }

            function getElements() {
          var elements = html5.elements;
          return typeof elements == 'string' ? elements.split(' ') : elements;
        }

            function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];
          if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
          }
          return data;
        }

            function createElement(nodeName, ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
          }
          if (!data) {
            data = getExpandoData(ownerDocument);
          }
          var node;

          if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
          } else {
            node = data.createElem(nodeName);
          }

                                                    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }

            function createDocumentFragment(ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
          }
          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
          for(;i<l;i++){
            clone.createElement(elems[i]);
          }
          return clone;
        }

            function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }


          ownerDocument.createElement = function(nodeName) {
                    if (!html5.shivMethods) {
              return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
          };

          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                          'var n=f.cloneNode(),c=n.createElement;' +
                                                          'h.shivMethods&&(' +
                                                                                                                getElements().join().replace(/[\w\-]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) +
            ');return n}'
                                                         )(html5, data.frag);
        }

            function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          var data = getExpandoData(ownerDocument);

          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                                                                                'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                                                                    'mark{background:#FF0;color:#000}' +
                                                                                    'template{display:none}'
                                         );
          }
          if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
          }
          return ownerDocument;
        }

            var html5 = {

                'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

                'version': version,

                'shivCSS': (options.shivCSS !== false),

                'supportsUnknownElements': supportsUnknownElements,

                'shivMethods': (options.shivMethods !== false),

                'type': 'default',

                'shivDocument': shivDocument,

                createElement: createElement,

                createDocumentFragment: createDocumentFragment
        };

            window.html5 = html5;

            shivDocument(document);

    }(this, document));

    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;


    Modernizr.hasEvent      = isEventSupported;

    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };

    Modernizr.testAllProps  = testPropsAll;


    Modernizr.testStyles    = injectElementWithStyles;
    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
            return testPropsAll(prop, obj, elem);
      }
    };


    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                                                    (enableClasses ? ' js ' + classes.join(' ') : '');

    return Modernizr;

})(this, this.document);
/*yepnope1.5.4|WTFPL*/
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);
Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};
;
/* Type Rendering Mix JS - (c) 2013-2014 Tim Brown, Bram Stein. License: new BSD */(function(){'use strict';var b=window;function c(a){var f=d,g;a:{g=f.className.split(/\s+/);for(var n=0,H=g.length;n<H;n+=1)if(g[n]===a){g=!0;break a}g=!1}g||(f.className+=(""===f.className?"":" ")+a)};function e(a,f,g){this.b=null!=a?a:null;this.c=null!=f?f:null;this.g=null!=g?g:null}var h=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;e.prototype.compare=function(a){return this.b>a.b||this.b===a.b&&this.c>a.c||this.b===a.b&&this.c===a.c&&this.g>a.g?1:this.b<a.b||this.b===a.b&&this.c<a.c||this.b===a.b&&this.c===a.c&&this.g<a.g?-1:0};function k(a,f){return 0===a.compare(f)||1===a.compare(f)}
function l(){var a=h.exec(m[1]),f=null,g=null,n=null;a&&(null!==a[1]&&a[1]&&(f=parseInt(a[1],10)),null!==a[2]&&a[2]&&(g=parseInt(a[2],10)),null!==a[3]&&a[3]&&(n=parseInt(a[3],10)));return new e(f,g,n)};function p(){var a=q;return 3===a.a||7===a.a||6===a.a||9===a.a||8===a.a||5===a.a?"grayscale":1===a.a&&k(a.d,new e(6,2))&&1===a.e?"grayscale":"unknown"};var q,r=b.navigator.userAgent,s=0,t=new e,u=0,v=new e,m=null;if(m=/(?:iPod|iPad|iPhone).*? OS ([\d_]+)/.exec(r))u=3,v=l();else if(m=/(?:BB\d{2}|BlackBerry).*?Version\/([^\s]*)/.exec(r))u=9,v=l();else if(m=/Android ([^;)]+)|Android/.exec(r))u=5,v=l();else if(m=/Windows Phone(?: OS)? ([^;)]+)/.exec(r))u=8,v=l();else if(m=/Linux ([^;)]+)|Linux/.exec(r))u=4,v=l();else if(m=/OS X ([^;)]+)/.exec(r))u=2,v=l();else if(m=/Windows NT ([^;)]+)/.exec(r))u=1,v=l();else if(m=/CrOS ([^;)]+)/.exec(r))u=6,v=l();
if(m=/MSIE ([\d\w\.]+)/.exec(r))s=1,t=l();else if(m=/Trident.*rv:([\d\w\.]+)/.exec(r))s=1,t=l();else if(m=/OPR\/([\d.]+)/.exec(r))s=4,t=l();else if(m=/Opera Mini.*Version\/([\d\.]+)/.exec(r))s=4,t=l();else if(m=/Opera(?: |.*Version\/|\/)([\d\.]+)/.exec(r))s=4,t=l();else if(m=/Firefox\/([\d\w\.]+)|Firefox/.exec(r))s=3,t=l();else if(m=/(?:Chrome|CrMo|CriOS)\/([\d\.]+)/.exec(r))s=2,t=l();else if(m=/Silk\/([\d\._]+)/.exec(r))s=7,t=l();else if(5===u||9===u)s=6;else if(m=/Version\/([\d\.\w]+).*Safari/.exec(r))s=
5,t=l();q=new function(a,f,g,n){this.e=a;this.f=f;this.a=g;this.d=n}(s,t,u,v);var w,x;
if(1===q.a){var y;if(2===q.e)y=k(q.f,new e(37))&&k(q.d,new e(6,1))?"directwrite":"gdi";else{var z;if(4===q.e)z=k(q.f,new e(24))&&k(q.d,new e(6,1))?"directwrite":"gdi";else{var A;if(-1===q.d.compare(new e(6,0)))A="gdi";else{var B;if(k(q.d,new e(6,0))){var C;if(C=1===q.e){var D=q.f,E=new e(8,0);C=0===D.compare(E)||-1===D.compare(E)}B=C?"gdi":"directwrite"}else B="unknown";A=B}z=A}y=z}x=y}else x=8===q.a?"directwrite":2===q.a||3===q.a?"coretext":5===q.a||4===q.a||6===q.a||7===q.a||9===q.a?"freetype":
"unknown";w=x;var F=p(),G,I=p();G="unknown"!==I?I:2===q.a||4===q.a?"subpixel":1===q.a?k(q.d,new e(6,0))?"subpixel":1===q.e?k(q.f,new e(7,0))?"subpixel":"grayscale":"subpixel":"unknown";var d=b.document.documentElement;c("tr-"+w);"unknown"===F&&"unknown"!==G&&(F+="-"+G);c("tr-aa-"+F);}());
/*!
 * glidejs
 * Version: 2.0.8
 * Glide is a responsive and touch-friendly jQuery slider. Based on CSS3 transitions with fallback to older broswers. It's simple, lightweight and fast.
 * Author: Jędrzej Chałubek <jedrzej.chalubek@gmail.com>
 * Site: http://http://glide.jedrzejchalubek.com/
 * Licensed under the MIT license
 */

!function(a,b,c,d){var e=function(a,b){function c(){}var d;return c.prototype.make=function(b){return d="undefined"!=typeof b?parseInt(b):0,this[a.options.type](),this},c.prototype.after=function(b){return setTimeout(function(){b()},a.options.animationDuration+20)},c.prototype.slider=function(){var c=a[a.size]*(a.current-1),e=b.Clones.shift-a.paddings;b.Run.isStart()?(e=a.options.centered?Math.abs(e):0,b.Arrows.disable("prev")):b.Run.isEnd()?(e=a.options.centered?Math.abs(e):Math.abs(2*e),b.Arrows.disable("next")):(e=Math.abs(e),b.Arrows.enable()),a.track.css({transition:b.Transition.get("all"),transform:b.Translate.set(a.axis,c-e-d)})},c.prototype.carousel=function(){var c,e=a[a.size]*a.current;c=a.options.centered?b.Clones.shift-a.paddings:b.Clones.shift,b.Run.isOffset("<")&&(e=0,b.Run.flag=!1,this.after(function(){a.track.css({transition:b.Transition.clear("all"),transform:b.Translate.set(a.axis,a[a.size]*a.length+c)})})),b.Run.isOffset(">")&&(e=a[a.size]*a.length+a[a.size],b.Run.flag=!1,this.after(function(){a.track.css({transition:b.Transition.clear("all"),transform:b.Translate.set(a.axis,a[a.size]+c)})})),a.track.css({transition:b.Transition.get("all"),transform:b.Translate.set(a.axis,e+c-d)})},c.prototype.slideshow=function(){a.slides.css("transition",b.Transition.get("opacity")).eq(a.current-1).css("opacity",1).siblings().css("opacity",0)},new c},f=function(a,b){function c(){}return c.prototype.instance=function(){return{current:function(){return a.current},go:function(a,c){b.Run.pause(),b.Run.make(a,c),b.Run.play()},jump:function(a,c){b.Transition.jumping=!0,b.Animation.after(function(){b.Transition.jumping=!1}),b.Run.make(a,c)},move:function(a){b.Transition.jumping=!0,b.Animation.make(a),b.Transition.jumping=!1},start:function(c){b.Run.running=!0,a.options.autoplay=parseInt(c),b.Run.play()},play:function(){return b.Run.play()},pause:function(){return b.Run.pause()},destroy:function(){b.Run.pause(),b.Clones.remove(),b.Helper.removeStyles([a.track,a.slides]),b.Bullets.remove(),a.slider.removeData("glide_api"),b.Events.unbind(),b.Touch.unbind(),b.Arrows.unbind(),b.Bullets.unbind(),delete a.slider,delete a.track,delete a.slides,delete a.width,delete a.length},refresh:function(){b.Run.pause(),a.collect(),a.setup(),b.Clones.remove().init(),b.Bullets.remove().init(),b.Build.init(),b.Run.make("="+parseInt(a.options.startAt),b.Run.play())}}},new c},g=function(b,c){function d(){this.build(),this.bind()}return d.prototype.build=function(){this.wrapper=b.slider.find("."+b.options.classes.arrows),this.items=this.wrapper.children()},d.prototype.disable=function(a){var d=b.options.classes;this.items.filter("."+d["arrow"+c.Helper.capitalise(a)]).unbind("click.glide touchstart.glide").addClass(d.disabled).siblings().bind("click.glide touchstart.glide",this.click).bind("mouseenter.glide",this.hover).bind("mouseleave.glide",this.hover).removeClass(d.disabled)},d.prototype.enable=function(){this.bind(),this.items.removeClass(b.options.classes.disabled)},d.prototype.click=function(b){b.preventDefault(),c.Events.disabled||(c.Run.pause(),c.Run.make(a(this).data("glide-dir")),c.Animation.after(function(){c.Run.play()}))},d.prototype.hover=function(a){if(!c.Events.disabled)switch(a.type){case"mouseleave":c.Run.play();break;case"mouseenter":c.Run.pause()}},d.prototype.bind=function(){this.items.on("click.glide touchstart.glide",this.click).on("mouseenter.glide",this.hover).on("mouseleave.glide",this.hover)},d.prototype.unbind=function(){this.items.off("click.glide touchstart.glide").off("mouseenter.glide").off("mouseleave.glide")},new d},h=function(a,b){function c(){this.init()}return c.prototype.init=function(){this[a.options.type](),this.active(),b.Height.set()},c.prototype.isType=function(b){return a.options.type===b},c.prototype.isMode=function(b){return a.options.mode===b},c.prototype.slider=function(){b.Transition.jumping=!0,a.slides[a.size](a[a.size]),a.track.css(a.size,a[a.size]*a.length),this.isMode("vertical")&&b.Height.set(!0),b.Animation.make(),b.Transition.jumping=!1},c.prototype.carousel=function(){b.Transition.jumping=!0,b.Clones.shift=a[a.size]*b.Clones.items.length/2-a[a.size],a.slides[a.size](a[a.size]),a.track.css(a.size,a[a.size]*a.length+b.Clones.getGrowth()),this.isMode("vertical")&&b.Height.set(!0),b.Animation.make(),b.Clones.append(),b.Transition.jumping=!1},c.prototype.slideshow=function(){b.Transition.jumping=!0,b.Animation.make(),b.Transition.jumping=!1},c.prototype.active=function(){a.slides.eq(a.current-1).addClass(a.options.classes.active).siblings().removeClass(a.options.classes.active)},new c},i=function(b,c){function d(){this.init(),this.bind()}return d.prototype.init=function(){return this.build(),this.active(),this},d.prototype.build=function(){this.wrapper=b.slider.children("."+b.options.classes.bullets);for(var c=1;c<=b.length;c++)a("<button>",{"class":b.options.classes.bullet,"data-glide-dir":"="+c}).appendTo(this.wrapper);this.items=this.wrapper.children()},d.prototype.active=function(){this.items.eq(b.current-1).addClass("active").siblings().removeClass("active")},d.prototype.remove=function(){return this.items.remove(),this},d.prototype.click=function(b){b.preventDefault(),c.Events.disabled||(c.Run.pause(),c.Run.make(a(this).data("glide-dir")),c.Animation.after(function(){c.Run.play()}))},d.prototype.hover=function(a){if(!c.Events.disabled)switch(a.type){case"mouseleave":c.Run.play();break;case"mouseenter":c.Run.pause()}},d.prototype.bind=function(){this.wrapper.on("click.glide touchstart.glide","button",this.click).on("mouseenter.glide","button",this.hover).on("mouseleave.glide","button",this.hover)},d.prototype.unbind=function(){this.wrapper.off("click.glide touchstart.glide","button").off("mouseenter.glide","button").off("mouseleave.glide","button")},new d},j=function(a,b){function c(){this.items=[],this.shift=0,this.init()}var d,e=[0,1];return c.prototype.init=function(){return this.map(),this.collect(),this},c.prototype.map=function(){var a;for(d=[],a=0;a<e.length;a++)d.push(-1-a,a)},c.prototype.collect=function(){var b,c;for(c=0;c<d.length;c++)b=a.slides.eq(d[c]).clone().addClass(a.options.classes.clone),this.items.push(b)},c.prototype.append=function(){var b,c;for(b=0;b<this.items.length;b++)c=this.items[b][a.size](a[a.size]),d[b]>=0?c.appendTo(a.track):c.prependTo(a.track)},c.prototype.remove=function(){var a;for(a=0;a<this.items.length;a++)this.items[a].remove();return this},c.prototype.getGrowth=function(){return a.width*this.items.length},new c},k=function(a,b){function c(){for(var c in b)this[c]=new b[c](a,this)}return new c},l=function(c,d){function e(){this.disabled=!1,this.keyboard(),this.hoverpause(),this.resize(),this.bindTriggers()}var f=a("[data-glide-trigger]");return e.prototype.keyboard=function(){c.options.keyboard&&a(b).on("keyup.glide",function(a){39===a.keyCode&&d.Run.make(">"),37===a.keyCode&&d.Run.make("<")})},e.prototype.hoverpause=function(){c.options.hoverpause&&c.track.on("mouseover.glide",function(){d.Run.pause(),d.Events.trigger("mouseOver")}).on("mouseout.glide",function(){d.Run.play(),d.Events.trigger("mouseOut")})},e.prototype.resize=function(){a(b).on("resize.glide."+c.uuid,d.Helper.throttle(function(){d.Transition.jumping=!0,c.setup(),d.Build.init(),d.Run.make("="+c.current,!1),d.Run.play(),d.Transition.jumping=!1},c.options.throttle))},e.prototype.bindTriggers=function(){f.length&&f.off("click.glide touchstart.glide").on("click.glide touchstart.glide",this.handleTrigger)},e.prototype.handleTrigger=function(b){b.preventDefault();var c=a(this).data("glide-trigger").split(" ");if(!this.disabled)for(var d in c){var e=a(c[d]).data("glide_api");e.pause(),e.go(a(this).data("glide-dir"),this.activeTrigger),e.play()}},e.prototype.disable=function(){return this.disabled=!0,this},e.prototype.enable=function(){return this.disabled=!1,this},e.prototype.detachClicks=function(){return c.track.find("a").each(function(b,c){a(c).attr("data-href",a(c).attr("href")).removeAttr("href")}),this},e.prototype.attachClicks=function(){return c.track.find("a").each(function(b,c){a(c).attr("href",a(c).attr("data-href"))}),this},e.prototype.preventClicks=function(a){return"mousemove"===a.type&&c.track.one("click","a",function(a){a.preventDefault()}),this},e.prototype.call=function(a){return"undefined"!==a&&"function"==typeof a&&a(this.getParams()),this},e.prototype.trigger=function(a){return c.slider.trigger(a+".glide",[this.getParams()]),this},e.prototype.getParams=function(){return{index:c.current,length:c.slides.length,current:c.slides.eq(c.current-1),slider:c.slider,swipe:{distance:d.Touch.distance||0}}},e.prototype.unbind=function(){c.track.off("keyup.glide").off("mouseover.glide").off("mouseout.glide"),f.off("click.glide touchstart.glide"),a(b).off("keyup.glide").off("resize.glide."+c._uid)},new e},m=function(a,b){function c(){a.options.autoheight&&a.wrapper.css({transition:b.Transition.get("height")})}return c.prototype.get=function(){var b="y"===a.axis?2*a.paddings:0;return a.slides.eq(a.current-1).height()+b},c.prototype.set=function(b){return a.options.autoheight||b?a.wrapper.height(this.get()):!1},new c},n=function(a,b){function c(){}return c.prototype.byAxis=function(b,c){return"y"===a.axis?c:b},c.prototype.capitalise=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},c.prototype.now=Date.now||function(){return(new Date).getTime()},c.prototype.throttle=function(a,b,c){var d,e,f,g=this,h=null,i=0;c||(c={});var j=function(){i=c.leading===!1?0:g.now(),h=null,f=a.apply(d,e),h||(d=e=null)};return function(){var k=g.now();i||c.leading!==!1||(i=k);var l=b-(k-i);return d=this,e=arguments,0>=l||l>b?(h&&(clearTimeout(h),h=null),i=k,f=a.apply(d,e),h||(d=e=null)):h||c.trailing===!1||(h=setTimeout(j,l)),f}},c.prototype.removeStyles=function(a){for(var b=0;b<a.length;b++)a[b].removeAttr("style")},new c},o=function(a,b){function c(){this.running=!1,this.flag=!1,this.play()}return c.prototype.play=function(){var b=this;return(a.options.autoplay||this.running)&&"undefined"==typeof this.interval&&(this.interval=setInterval(function(){b.pause(),b.make(">"),b.play()},this.getInterval())),this.interval},c.prototype.getInterval=function(){return parseInt(a.slides.eq(a.current-1).data("glide-autoplay"))||a.options.autoplay},c.prototype.pause=function(){return(a.options.autoplay||this.running)&&this.interval>=0&&(this.interval=clearInterval(this.interval)),this.interval},c.prototype.isStart=function(){return 1===a.current},c.prototype.isEnd=function(){return a.current===a.length},c.prototype.isOffset=function(a){return this.flag&&this.direction===a},c.prototype.make=function(c,d){var e=this;switch(this.direction=c.substr(0,1),this.steps=c.substr(1)?c.substr(1):0,a.options.hoverpause||this.pause(),d!==!1&&b.Events.disable().call(a.options.beforeTransition).trigger("beforeTransition"),this.direction){case">":this.isEnd()?(a.current=1,this.flag=!0):">"===this.steps?a.current=a.length:a.current=a.current+1;break;case"<":this.isStart()?(a.current=a.length,this.flag=!0):"<"===this.steps?a.current=1:a.current=a.current-1;break;case"=":a.current=parseInt(this.steps)}b.Height.set(),b.Bullets.active(),b.Animation.make().after(function(){b.Build.active(),d!==!1&&b.Events.enable().call(d).call(a.options.afterTransition).trigger("afterTransition"),a.options.hoverpause||e.play()}),b.Events.call(a.options.duringTransition).trigger("duringTransition")},new c},p=function(b,c){function d(){this.dragging=!1,b.options.touchDistance&&b.track.on({"touchstart.glide":a.proxy(this.start,this)}),b.options.dragDistance&&b.track.on({"mousedown.glide":a.proxy(this.start,this)})}var e;return d.prototype.unbind=function(){b.track.off("touchstart.glide mousedown.glide").off("touchmove.glide mousemove.glide").off("touchend.glide touchcancel.glide mouseup.glide mouseleave.glide")},d.prototype.start=function(d){c.Events.disabled||this.dragging||(e="mousedown"===d.type?d.originalEvent:d.originalEvent.touches[0]||d.originalEvent.changedTouches[0],c.Transition.jumping=!0,this.touchStartX=parseInt(e.pageX),this.touchStartY=parseInt(e.pageY),this.touchSin=null,this.dragging=!0,b.track.on({"touchmove.glide mousemove.glide":c.Helper.throttle(a.proxy(this.move,this),b.options.throttle),"touchend.glide touchcancel.glide mouseup.glide mouseleave.glide":a.proxy(this.end,this)}),c.Events.detachClicks().call(b.options.swipeStart).trigger("swipeStart"),c.Run.pause())},d.prototype.move=function(a){if(!c.Events.disabled&&this.dragging){e="mousemove"===a.type?a.originalEvent:a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];var d=parseInt(e.pageX)-this.touchStartX,f=parseInt(e.pageY)-this.touchStartY,g=Math.abs(d<<2),h=Math.abs(f<<2),i=Math.sqrt(g+h),j=Math.sqrt(c.Helper.byAxis(h,g));if(this.touchSin=Math.asin(j/i),this.distance=c.Helper.byAxis(e.pageX-this.touchStartX,e.pageY-this.touchStartY),180*this.touchSin/Math.PI<45&&c.Animation.make(c.Helper.byAxis(d,f)),c.Events.preventClicks(a).call(b.options.swipeMove).trigger("swipeMove"),c.Build.isMode("vertical")){if(c.Run.isStart()&&f>0)return;if(c.Run.isEnd()&&0>f)return}if(!(180*this.touchSin/Math.PI<45))return;a.stopPropagation(),a.preventDefault(),b.track.addClass(b.options.classes.dragging)}},d.prototype.end=function(a){if(!c.Events.disabled&&this.dragging){var d;e="mouseup"===a.type||"mouseleave"===a.type?a.originalEvent:a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];var f=c.Helper.byAxis(e.pageX-this.touchStartX,e.pageY-this.touchStartY),g=180*this.touchSin/Math.PI;c.Transition.jumping=!1,c.Build.isType("slider")&&(c.Run.isStart()&&f>0&&(f=0),c.Run.isEnd()&&0>f&&(f=0)),d="mouseup"===a.type||"mouseleave"===a.type?b.options.dragDistance:b.options.touchDistance,f>d&&45>g?c.Run.make("<"):-d>f&&45>g?c.Run.make(">"):c.Animation.make(),c.Animation.after(function(){c.Events.enable(),c.Run.play()}),this.dragging=!1,c.Events.attachClicks().disable().call(b.options.swipeEnd).trigger("swipeEnd"),b.track.removeClass(b.options.classes.dragging).off("touchmove.glide mousemove.glide").off("touchend.glide touchcancel.glide mouseup.glide mouseleave.glide")}},new d},q=function(a,b){function c(){this.jumping=!1}return c.prototype.get=function(b){return this.jumping?this.clear("all"):b+" "+a.options.animationDuration+"ms "+a.options.animationTimingFunc},c.prototype.clear=function(b){return b+" 0ms "+a.options.animationTimingFunc},new c},r=function(a,b){function c(){}var d={x:0,y:0,z:0};return c.prototype.set=function(a,b){return d[a]=parseInt(b),"translate3d("+-1*d.x+"px, "+-1*d.y+"px, "+-1*d.z+"px)"},new c},s=function(b,c){var d={autoplay:4e3,type:"carousel",mode:"horizontal",startAt:1,hoverpause:!0,keyboard:!0,touchDistance:80,dragDistance:120,animationDuration:400,animationTimingFunc:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",throttle:16,autoheight:!1,paddings:0,centered:!0,classes:{base:"glide",wrapper:"glide__wrapper",track:"glide__track",slide:"glide__slide",arrows:"glide__arrows",arrow:"glide__arrow",arrowNext:"next",arrowPrev:"prev",bullets:"glide__bullets",bullet:"glide__bullet",clone:"clone",active:"active",dragging:"dragging",disabled:"disabled"},beforeInit:function(a){},afterInit:function(a){},beforeTransition:function(a){},duringTransition:function(a){},afterTransition:function(a){},swipeStart:function(a){},swipeEnd:function(a){},swipeMove:function(a){}};this.options=a.extend({},d,c),this.uuid=Math.floor(1e3*Math.random()),this.current=parseInt(this.options.startAt),this.element=b,this.collect(),this.setup(),this.options.beforeInit({index:this.current,length:this.slides.length,current:this.slides.eq(this.current-1),slider:this.slider});var s=new k(this,{Helper:n,Translate:r,Transition:q,Run:o,Animation:e,Clones:j,Arrows:g,Bullets:i,Height:m,Build:h,Events:l,Touch:p,Api:f});return s.Events.call(this.options.afterInit),s.Api.instance()};s.prototype.collect=function(){var a=this.options,b=a.classes;this.slider=this.element.addClass(b.base+"--"+a.type).addClass(b.base+"--"+a.mode),this.track=this.slider.find("."+b.track),this.wrapper=this.slider.find("."+b.wrapper),this.slides=this.track.find("."+b.slide).not("."+b.clone)},s.prototype.setup=function(){var a={horizontal:["width","x"],vertical:["height","y"]};this.size=a[this.options.mode][0],this.axis=a[this.options.mode][1],this.length=this.slides.length,this.paddings=this.getPaddings(),this[this.size]=this.getSize()},s.prototype.getPaddings=function(){var a=this.options.paddings;if("string"==typeof a){var b=parseInt(a,10),c=a.indexOf("%")>=0;return c?parseInt(this.slider[this.size]()*(b/100)):b}return a},s.prototype.getSize=function(){return this.slider[this.size]()-2*this.paddings},a.fn.glide=function(b){return this.each(function(){a.data(this,"glide_api")||a.data(this,"glide_api",new s(a(this),b))})}}(jQuery,window,document);
//# sourceMappingURL=glide.min.js.map
// CREATE ELEMENT
// var newEl = document.createElement('div');

// GET ATTRIBUTE
// document.querySelector('.el').setAttribute('key', 'value');
// document.querySelector('.el').getAttribute('key');

// ADD/REMOVE/TOGGLE CLASS
// document.querySelector('.el').classList.add('class');
// document.querySelector('.el').classList.remove('class');
// document.querySelector('.el').classList.toggle('class');

// REMOVE
// remove('.el');

// function remove(el) {
//   var toRemove = document.querySelector(el);
//   toRemove.parentNode.removeChild(toRemove);
// }

// PARENT
// document.querySelector('.el').parentNode;

// PREV/NEXT ELEMENT
// document.querySelector('.el').previousElementSibling;
// document.querySelector('.el').nextElementSibling;

// Pour chaque auteur :
// 1) Cacher le books-thumbs-wrapper
// 2) Afficher le books-wrapper et le book correspondant à l'auteur
// 3) Lancer le slider propre au book
// 4) Générer le nom en dessous du logo

// Créer une class Book qui aura : 
// Un toggler : le book-thumb associé via un data attribute
// Un slider
// Un description idéalement contenue dans un JSON à part



// // Initi IMG Slider
// $("#book-images").glide({
//     type: "carousel",
//     hoverpause: "true",
//     keyboard: "true"
// });

// // Book Selector
// $('.js-book-selector').on('click', function(e){
//     modalWrapper.open();
//     var modalSelector = $(this).data('modal');
//     console.log('help ' + modalSelector);
//     $(modal).addClass('u-hide');
//     $('#' + modalSelector).removeClass('u-hide');
// });

$(function(){
    console.info('main.js Loaded');

    // -------------------
    // Book
    // -------------------

    var Book = function($el) {
        this.$el = $el;
        this.$booksThumbsWrapper = $('.books-thumbs-wrapper');
        this.$wrapper = $('.js-books-wrapper');
        this.$toggler = this.$el.find('.js-book-toggler');
        this.$slider = this.$el.find('.js-book-slider');
        this.isShown = false;
        this.toggle();
        this.events();

        return Book;
    };

    Book.prototype = {
        events: function() {
            var _this = this;

            $('.js-books-thumbs-toggler').on('click', function() {
                _this.toggle();
                _this.$booksThumbsWrapper.removeClass('u-hide');
            });
        },
        toggle: function() {
            if (this.isShown) {
                this.close();
            } else {
                this.open();
            }
        },
        open: function(transition) {
            this.$booksThumbsWrapper.addClass('u-hide');
            this.$wrapper.removeClass('u-hide');
            this.$el.siblings().addClass('u-hide');
            this.initSlider();
            this.isShown = true;
            console.log('open');
        },
        close: function(transition) {
            this.$booksThumbsWrapper.removeClass('u-hide');
            this.$wrapper.addClass('u-hide');
            this.$el.siblings().removeClass('u-hide');
            this.isShown = false;
            console.log('close');
        },
        initSlider: function() {
            this.$slider.glide({
                type: "carousel",
                hoverpause: "true",
                keyboard: "true"
            });
        }
    };

    $('.js-book-selector').click(function(){
        new Book($('#' + $(this).data('book')));
    });
});

