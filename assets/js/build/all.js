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
$(function(){
    var Book = function($el) {
        this.$el = $el;
        this.$booksThumbsWrapper = $('.books-thumbs-wrapper');
        this.$wrapper = $('.js-books-wrapper');
        this.$toggler = this.$el.find('.js-book-toggler');
        this.$slider = this.$el.find('.js-book-slider');
        this.$title = this.$el.find('js-book-title');
        this.isShown = false;
        this.toggle();
        this.events();

        return Book;
    };

    Book.prototype = {
        events: function() {
            var _this = this;

            $('.js-books-thumbs-toggler, .js-home-link').on('click', function() {
                _this.close();
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
            $('body').addClass('book-selected');
            this.$booksThumbsWrapper.addClass('u-hide');
            this.$wrapper.removeClass('u-hide');
            this.$el.siblings().addClass('u-hide');
            this.$title.text('')
            this.initSlider();
            this.isShown = true;
            console.log('open');
        },
        close: function(transition) {
            $('body').removeClass('book-selected');
            this.$booksThumbsWrapper.removeClass('u-hide');
            this.$wrapper.addClass('u-hide');
            this.$el.siblings().removeClass('u-hide');
            $('.js-book-author').addClass('u-hide');
            this.isShown = false;
            console.log('close');
        },
        initSlider: function() {
            this.$slider.glide({
                type: "carousel",
                hoverpause: "true",
                keyboard: "true",
                autoplay: "4000"
            });
        }
    };

    $('.js-book-selector').click(function(){
        new Book($('#' + $(this).data('book')));
        $('.js-book-author').removeClass('u-hide').text($(this).data('author'));
        $('.js-book-title').text($(this).data('author'));
    });

    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop(),
    //         scrollDelta = 5;
    //         lastScrollTop = 0;

    //     if ( $('body').hasClass('book-selected') ) {
    //         if (Math.abs(lastScrollTop - scroll) <= scrollDelta) {
                
    //         }
    //     } else {

    //     }
    // });
    

    var headerAnimationOnScroll = {
        init: function() {
            // Elements we animate
            this.$body = $('body');
            this.$header = $('#header-main');
            this.headerHeight = this.$header.outerHeight();
            this.$logo = $('#header-logo');

            this.didScroll = false;
            this.lastScrollTop = 0;
            this.scrollDelta = 5;
            this.hasScrolled();
            this.scrollCheck();
        },
        scrollCheck: function() {
            var self = this;

            // On scroll, we set the didscroll variable to true 
            // so that the interval function knows the user has scrolled.
            $(window).scroll(function() {
                if(self.$body.hasClass('book-selected')) {
                    self.didScroll = true;
                }
            });

            // This interval function check every 250ms if 
            // didScroll has changed. If so it runs the function
            // and resets didScroll to false.
            setInterval(function() {
                if (self.didScroll) {
                    self.hasScrolled();
                    self.didScroll = false;
                }
            }, 250);
        },
        hasScrolled: function() {
            var self = this;
            // Here we store our scroll position for a later easy access
            var scroll = $(window).scrollTop();

            // We make sure the user has scrolled more than delta
            if (Math.abs(self.lastScrollTop - scroll) <= self.scrollDelta) {
                return;
            }

            // If the user has scrolled down and is past 
            // the header then we hide the header by addind to it a "is-hidden" class.
            if (scroll > self.lastScrollTop) {
                if (scroll > self.headerHeight) {
                    // console.log('scroll sup header height');
                    setTimeout(function() {
                        self.$body.addClass('logo-onelined');
                        self.$logo.addClass('onelined');
                    }, 300);
                }
            } else {
                  if ( scroll + $(window).height() < $(document).height()) {
                        self.$body.removeClass('logo-onelined');
                        self.$logo.removeClass('onelined');
                  }
            }

            self.lastScrollTop = scroll;
        }
    };
    headerAnimationOnScroll.init();
});

