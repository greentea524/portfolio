const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GithubProfileCard-CBD0GVPL.js","assets/rolldown-runtime-CNC7AqOf.js","assets/vendor-lottie-BfV0P-kI.js","assets/vendor-react-Bsr-idNi.js","assets/GithubProfileCard-Dpit01nS.css"])))=>i.map(i=>d[i]);
import{a as e,i as t,n,r,t as i}from"./rolldown-runtime-CNC7AqOf.js";import{n as a,t as o}from"./vendor-lottie-BfV0P-kI.js";import{n as s,t as c}from"./vendor-react-Bsr-idNi.js";import{a as l,i as u,n as d,r as f,t as p}from"./lottie-animations-CAzi77Dv.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var m=e(a()),h=e(s()),g=i(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),_=i(((e,t)=>{var n=g();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),v=i(((e,t)=>{t.exports=_()()})),y=i(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),b=i(((e,t)=>{(function(){var e,n,r,i,a,o;typeof performance<`u`&&performance!==null&&performance.now?t.exports=function(){return performance.now()}:typeof process<`u`&&process!==null&&process.hrtime?(t.exports=function(){return(e()-a)/1e6},n=process.hrtime,e=function(){var e=n();return e[0]*1e9+e[1]},i=e(),o=process.uptime()*1e9,a=i-o):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return new Date().getTime()-r},r=new Date().getTime())}).call(e)})),x=i(((e,t)=>{for(var n=b(),r=typeof window>`u`?global:window,i=[`moz`,`webkit`],a=`AnimationFrame`,o=r[`request`+a],s=r[`cancel`+a]||r[`cancelRequest`+a],c=0;!o&&c<i.length;c++)o=r[i[c]+`Request`+a],s=r[i[c]+`Cancel`+a]||r[i[c]+`CancelRequest`+a];if(!o||!s){var l=0,u=0,d=[],f=1e3/60;o=function(e){if(d.length===0){var t=n(),r=Math.max(0,f-(t-l));l=r+t,setTimeout(function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(e){setTimeout(function(){throw e},0)}},Math.round(r))}return d.push({handle:++u,callback:e,cancelled:!1}),u},s=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}t.exports=function(e){return o.call(r,e)},t.exports.cancel=function(){s.apply(r,arguments)},t.exports.polyfill=function(e){e||=r,e.requestAnimationFrame=o,e.cancelAnimationFrame=s}})),S=i((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=t>=e?`down`:`up`,a=Math.abs(t-e);return n.disable?{action:`none`,scrollDirection:i,distanceScrolled:a}:n.pin?{action:r.state===`pinned`?`none`:`pin`,scrollDirection:i,distanceScrolled:a}:t<=n.pinStart&&r.state!==`unfixed`?{action:`unfix`,scrollDirection:i,distanceScrolled:a}:t<=r.height&&i===`down`&&r.state===`unfixed`?{action:`none`,scrollDirection:i,distanceScrolled:a}:t>r.height+n.pinStart&&i===`down`&&r.state===`unfixed`?{action:`unpin-snap`,scrollDirection:i,distanceScrolled:a}:i===`down`&&[`pinned`,`unfixed`].indexOf(r.state)>=0&&t>r.height+n.pinStart&&a>n.downTolerance?{action:`unpin`,scrollDirection:i,distanceScrolled:a}:i===`up`&&a>n.upTolerance&&[`pinned`,`unfixed`].indexOf(r.state)<0||i===`up`&&t<=r.height&&[`pinned`,`unfixed`].indexOf(r.state)<0?{action:`pin`,scrollDirection:i,distanceScrolled:a}:{action:`none`,scrollDirection:i,distanceScrolled:a}}})),C=i((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=t;function t(){var e=!1;try{var t={get passive(){return e=!0,!1}};window.addEventListener(`test`,null,t),window.removeEventListener(`test`,null,t)}catch{e=!1}return e}})),ee=e(i((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=a(),i=d(r),o=d(v()),s=d(y()),c=d(x()),l=d(S()),u=d(C());function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function p(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function m(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e}function h(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var g=function(){},_=function(e){h(r,e),n(r,null,[{key:`getDerivedStateFromProps`,value:function(e,t){return e.disable&&t.state!==`unfixed`?{translateY:0,className:`headroom headroom--unfixed headroom-disable-animation`,animation:!1,state:`unfixed`}:null}}]);function r(e){p(this,r);var t=m(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.setRef=function(e){return t.inner=e},t.setHeightOffset=function(){t.setState({height:t.inner?t.inner.offsetHeight:``}),t.resizeTicking=!1},t.getScrollY=function(){return t.props.parent().pageYOffset===void 0?t.props.parent().scrollTop===void 0?(document.documentElement||document.body.parentNode||document.body).scrollTop:t.props.parent().scrollTop:t.props.parent().pageYOffset},t.getViewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},t.getDocumentHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,t.scrollHeight,e.offsetHeight,t.offsetHeight,e.clientHeight,t.clientHeight)},t.getElementPhysicalHeight=function(e){return Math.max(e.offsetHeight,e.clientHeight)},t.getElementHeight=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},t.getScrollerPhysicalHeight=function(){var e=t.props.parent();return e===window||e===document.body?t.getViewportHeight():t.getElementPhysicalHeight(e)},t.getScrollerHeight=function(){var e=t.props.parent();return e===window||e===document.body?t.getDocumentHeight():t.getElementHeight(e)},t.isOutOfBound=function(e){var n=e<0,r=t.getScrollerPhysicalHeight(),i=t.getScrollerHeight(),a=e+r>i;return n||a},t.handleScroll=function(){t.scrollTicking||(t.scrollTicking=!0,(0,c.default)(t.update))},t.handleResize=function(){t.resizeTicking||(t.resizeTicking=!0,(0,c.default)(t.setHeightOffset))},t.unpin=function(){t.props.onUnpin(),t.setState({translateY:`-100%`,className:`headroom headroom--unpinned`,animation:!0,state:`unpinned`})},t.unpinSnap=function(){t.props.onUnpin(),t.setState({translateY:`-100%`,className:`headroom headroom--unpinned headroom-disable-animation`,animation:!1,state:`unpinned`})},t.pin=function(){t.props.onPin(),t.setState({translateY:0,className:`headroom headroom--pinned`,animation:!0,state:`pinned`})},t.unfix=function(){t.props.onUnfix(),t.setState({translateY:0,className:`headroom headroom--unfixed headroom-disable-animation`,animation:!1},function(){setTimeout(function(){t.setState({state:`unfixed`})},0)})},t.update=function(){if(t.currentScrollY=t.getScrollY(),!t.isOutOfBound(t.currentScrollY)){var e=(0,l.default)(t.lastKnownScrollY,t.currentScrollY,t.props,t.state).action;e===`pin`?t.pin():e===`unpin`?t.unpin():e===`unpin-snap`?t.unpinSnap():e===`unfix`&&t.unfix()}t.lastKnownScrollY=t.currentScrollY,t.scrollTicking=!1},t.currentScrollY=0,t.lastKnownScrollY=0,t.scrollTicking=!1,t.resizeTicking=!1,t.eventListenerOptions=!1,t.state={state:`unfixed`,translateY:0,className:`headroom headroom--unfixed`},t}return n(r,[{key:`componentDidMount`,value:function(){this.setHeightOffset(),this.eventListenerOptions=(0,u.default)()?{passive:!0,capture:!1}:!1,this.props.disable||(this.props.parent().addEventListener(`scroll`,this.handleScroll,this.eventListenerOptions),this.props.calcHeightOnResize&&this.props.parent().addEventListener(`resize`,this.handleResize,this.eventListenerOptions))}},{key:`shouldComponentUpdate`,value:function(e,t){return!(0,s.default)(this.props,e)||!(0,s.default)(this.state,t)}},{key:`componentDidUpdate`,value:function(e,t){e.children!==this.props.children&&this.setHeightOffset(),!e.disable&&this.props.disable?(this.props.parent().removeEventListener(`scroll`,this.handleScroll,this.eventListenerOptions),this.props.parent().removeEventListener(`resize`,this.handleResize,this.eventListenerOptions),t.state!==`unfixed`&&this.state.state===`unfixed`&&this.props.onUnfix()):e.disable&&!this.props.disable&&(this.props.parent().addEventListener(`scroll`,this.handleScroll,this.eventListenerOptions),this.props.calcHeightOnResize&&this.props.parent().addEventListener(`resize`,this.handleResize,this.eventListenerOptions)),e.pin!==this.props.pin&&this.handleScroll()}},{key:`componentWillUnmount`,value:function(){this.props.parent()&&(this.props.parent().removeEventListener(`scroll`,this.handleScroll,this.eventListenerOptions),this.props.parent().removeEventListener(`resize`,this.handleResize,this.eventListenerOptions)),window.removeEventListener(`scroll`,this.handleScroll,this.eventListenerOptions)}},{key:`render`,value:function(){var e=this.props,n=e.className,r=e.tag,a=f(e,[`className`,`tag`]);delete a.onUnpin,delete a.onPin,delete a.onUnfix,delete a.disableInlineStyles,delete a.disable,delete a.pin,delete a.parent,delete a.children,delete a.upTolerance,delete a.downTolerance,delete a.pinStart,delete a.calcHeightOnResize;var o=a.style,s=a.wrapperStyle,c=f(a,[`style`,`wrapperStyle`]),l={position:this.props.disable||this.state.state===`unfixed`?`relative`:`fixed`,top:0,left:0,right:0,zIndex:1,WebkitTransform:`translate3D(0, `+this.state.translateY+`, 0)`,MsTransform:`translate3D(0, `+this.state.translateY+`, 0)`,transform:`translate3D(0, `+this.state.translateY+`, 0)`},u=this.state.className;this.state.animation&&(l=t({},l,{WebkitTransition:`all .2s ease-in-out`,MozTransition:`all .2s ease-in-out`,OTransition:`all .2s ease-in-out`,transition:`all .2s ease-in-out`}),u+=` headroom--scrolled`),l=this.props.disableInlineStyles?o:t({},l,o);var d=t({},s,{height:this.state.height?this.state.height:null}),p=n?n+` headroom-wrapper`:`headroom-wrapper`;return i.default.createElement(r,{style:d,className:p},i.default.createElement(`div`,t({ref:this.setRef},c,{style:l,className:u}),this.props.children))}}]),r}(r.Component);_.propTypes={className:o.default.string,parent:o.default.func,children:o.default.any.isRequired,disableInlineStyles:o.default.bool,disable:o.default.bool,pin:o.default.bool,upTolerance:o.default.number,downTolerance:o.default.number,onPin:o.default.func,onUnpin:o.default.func,onUnfix:o.default.func,wrapperStyle:o.default.object,pinStart:o.default.number,style:o.default.object,calcHeightOnResize:o.default.bool,tag:o.default.string},_.defaultProps={parent:function(){return window},disableInlineStyles:!1,disable:!1,pin:!1,upTolerance:5,downTolerance:0,onPin:g,onUnpin:g,onUnfix:g,wrapperStyle:{},pinStart:0,calcHeightOnResize:!0,tag:`div`},e.default=_}))()),te=i(((e,t)=>{function n(e,t,n,a){if(typeof e!=`string`)throw Error(`First param must be a string`);if(typeof t!=`string`&&!(t instanceof RegExp))throw Error(`Second param must be a string pattern or a regular expression`);return(typeof t==`string`?r:i)(e,t,n,a)}function r(e,t,n,r){var i=e.indexOf(t);if(i>=0){var a=[],o=i+t.length;return i>0&&a.push(e.substring(0,i)),a.push(typeof n==`function`?n(e.substring(i,o),i+r,e):n),o<e.length&&a.push(e.substring(o)),a}else return[e]}function i(e,t,n,r){var i=[],a=typeof n==`function`,o=t.lastIndex;t.lastIndex=0;for(var s,c=0;s=t.exec(e);){var l=s.index;s[0]===``&&t.lastIndex++,l!==c&&i.push(e.substring(c,l)),c=l+s[0].length;var u=a?n.apply(this,s.concat(l+r,s.input)):n;if(i.push(u),!t.global)break}return c<e.length&&i.push(e.substring(c)),t.lastIndex=o,i}t.exports=function(e,t,r){if(typeof e==`string`)return n(e,t,r,0);if(!Array.isArray(e)||!e[0])throw TypeError(`First argument must be an array or non-empty string`);for(var i=e.length,a=[],o=0,s=0;s<i;++s){var c=e[s];typeof c==`string`?(a.push.apply(a,n(c,t,r,o)),o+=c.length):a.push(c)}return a}})),ne=i(((e,t)=>{var n=te(),r=/(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g;function i(e,t){for(var n=[],r=0,i=0,a=0;a<e.length;)r=e.charCodeAt(a++),i?(n.push((65536+(i-55296<<10)+(r-56320)).toString(16)),i=0):55296<=r&&r<=56319?i=r:n.push(r.toString(16));return n.join(t||`-`)}var a=/\uFE0F/g,o=`‍`;function s(e){return i(e.indexOf(o)<0?e.replace(a,``):e)}t.exports=function(e,t){return n(e,r,function(e,n,r){return t(s(e),e,r)})}})),re=i(((e,t)=>{var n=a().createElement,r=typeof location>`u`?``:location.protocol===`https:`?`https:`:`http:`,i={height:`1em`,width:`1em`,margin:`0 .05em 0 .1em`,verticalAlign:`-0.1em`};function o(e){return e&&e.length>0&&e.charAt(e.length-1)!==`:`?e+`:`:e}t.exports=function(e){return e=s({protocol:r,baseUrl:`//cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/`,size:`72x72`,ext:`.png`,props:null},e),function(t,r,a){var c=``;return e.baseUrl.indexOf(`http`)!==0&&(c+=o(e.protocol)),c+=e.baseUrl+e.size+`/`+t+e.ext,n(`img`,s({key:a,alt:r,draggable:!1,src:c,style:i},e.props))}};function s(){for(var e={},t=arguments.length,n=0;n<t;++n){var r=arguments[n];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}})),ie=i(((e,t)=>{var n=ne(),r=re();t.exports=function(e,t){return n(e,typeof t==`function`?t:r(t))}})),w=e(ie()),T=m.createContext(),ae=T.Provider,E=e(c()),oe=()=>{let{isDark:e}=(0,m.useContext)(T),[t,n]=(0,m.useState)(e),r=(0,m.useContext)(T);return(0,E.jsxs)(`label`,{className:`switch`,children:[(0,E.jsx)(`input`,{type:`checkbox`,checked:e,onChange:()=>{r.changeTheme(),n(!t)}}),(0,E.jsx)(`span`,{className:`slider round`,children:(0,E.jsx)(`span`,{className:`emoji`,children:t?(0,w.default)(`🌜`):(0,w.default)(`☀️`)})})]})},se=`/portfolio/assets/sacstate-yzfLSj3J.png`,ce=`/portfolio/assets/avs-BRhC4XI5.jpg`,le=`/portfolio/assets/dorado-ByGxi1fQ.jpg`,D=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAAkFBMVEX///8AVtIAVNIAStAAR88AT9EARc8AUtEATtAAS9AAUdLq8fvl6/kASM+6y/DD0fHy9/3d5viSqOVagtwAWdMVYNWEoOOBnOIAQc74+/7g6Phnjd/X4fZJedrL2PMAPc5vkuCgt+o2btcuada9zfCyxO5dht0AOM2YsOhtkeCCoOQmZtZDddmqvuygtelHeNoDcHh+AAAKcUlEQVR4nO2a12KruhKGQYBAELkXbGOCaxy3vP/bHZpGEggvk732ORdnvqs4aqMfldFIloUgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIL837CKotH/oNl1OtZ+fyRpmkR/rfrVOv17lbUYLu5+TCnlh82ju5l0Mp2zOGbz6SRt2TcQfOgJkfj/qfgqyXE4PBa/jkXa6Hl36edFmrE8uNTl3KX+9NllR/TI9jaNaZjb+tFMBCuS4td4caD0K2n0lNDYte/ZYFX+IxElVp397uBjyXjgE7uAhCz+GXbkcvNceTZC/IDz5VpLHn05FZ8nvdzxs074Kjq5iTnn+Q93nv9Yxsy3bS6+wcV3vcqKvA2fxdPEanPaxywsrMjNyG3dD/RkyqvG4kVu8TYOiE0CmbqaELfqKSEep4tCqimtzes5LEdZDNZW+O6hNZyiTSMX8ehGbWlE6wSn0ZMhrxPcQrcsrIsfrGgWlH/SanVICdPNsMN40xwDgznXMxE+175yWCcHE2tAy7bIHRJ3TGuCMD+RJWg/3QbMs1sQmum5Hq4hV+jueuu29IRuK9+v/ppXLcSk1YAd2NratzrTdibdVtDtcqwr9BbCwjtvliY0Bbv76XY1WFK2e1Or2ZhzEff8a93293rkhZsi1yk2mkG4MlejeWDMxPZyWArd/E298NhOvW6MSWioP3yIOnvpdnaMlhTdseWau2VduQIwuaduNhFfIngWkrSGgsjGoDsfnt9l6xyEE7rZQjabVutw0lwF6vpBzD66ZZ2y5Q3boqJpp2z5LNj/Ujeg3Ba+DctAbcahrmc165A2JxRWSN0ExC//H5llU+ih25NqJYledVhbvOT2C9jmn+jmB+wr3xZGLjTtuQUB7KuOV8/UrVrS9wJPlYhlRt1IGPBK0lvXWAXe122trCkk5JSFlAayXf/rUfa7kSuOKVeto6df6xa408mjmKYD+DR8WewE6wsp8+U7nth6Hq60wnG3y8n1HLpSjDht60a4v5k8S0fxqkyZwgPJO+E0lrv3ddvLZkMnSwt3YPwUGz1x99WHVqaH52TDvPZomDlyhSZs9TvdCJ2IZWkiqvOuoli+OJCATcTPlfSC2Fx4iOkW9qt6V1Z1822wZK1MLEYWxQniY3CmmnJv63aUlbkbecJ6FBYSJhq9wJci9BtyjZZyhw0Wv9JN3Srhv1w6jlvuXuU+Kc2gV6XygSPMcAcN3fybLH0GhYgLn8L6mKor0Nu67aEJulP/H839kEPtsC8RVxPkyOUStPqNblw5V2Tiv+whzcjUjsDaq9tqJWJl9Cv3FnRTNmJlQSK+dga5KOPwXd3GUMZ96imj4Ax1yJWHHvVcKZQvO9vbDzkoeWCekqB1UtErCZaNlIdIoaXfBLoFclxZC6ie6YdD6yJH3Lu6ga3huZmkhEVghLNFMxdMHf/H6q+bMrJyrxf8odyVNp2OwV2etZLmtVKsHIigmyoDLNHuqVn63Nt/u0MLr6JHYv0wGAwWlxO1r26uGsqIlD075GE7zgHitDpuPevvH06LX0I3dTh/CNP8bat0BLPmXd3E+hRmLzKNxe4fPNuJDzHg3LT/OcvTMp3VrY2EjM6W6rAbiTrIba5zONyEUuWOKnQLN7I0jGZuGMrfouU3dYOt2VQZMBBN0lakS+lNMef66qaP34/mATh3spxvWMPh8+W+eQuRVG5PcK5XlhWxIhFm6CGY96Zu6Vv5xZAyTVM5e4o1uK9ucz3XqR0OISH9GTfqeEXZESWOBIjYlWGaKhP1Td2kzq9yicWD7E2pP8rHfVO3RYdu1okaTkI+rWLBgxfnaKlbsVeadBOLQPht6sS/o5sYbwdT6v0v6mat7ybl3LKv7+lW1P9St8zUiZ66pVp3uoB56ptSbQgS/gXd8px39XgsSl3UOuywjV8TF36BSTex9PtTQx/6xi1hXhu2dkOn6bidGInEIjQodWveL4ixoutmXDA/Lof8vK1rVwyjtdgXZpvNtMm24qdcvUy6CbeXkJc9fNMPgcio6SuANEIN1Q7BBUKliaKb5tBacqq/o1vR4inztWHnZfmpHjyJP91UmnTT/KUmWU8/xJpCAcNQAsTxlIRtiyGtmMSgW3DRc4Fh7+lWML7cZECurP1AzJW3MOmWvPB7R7393p34Cu01fyfPzuDfe63NaKkd1Fax+ktBHnLe1i1nKMNXxT4JLpj/h1tOk26WDJq01qRp73OWVJo1JEldfkjgb5Grefp/QHlenvjFCCFMG5kyMPAn3dK92tcROLSFYw5Dxts0i620dcGoG5wJiNO4kl30P9crZxtHM6aIEBGa1b2/ye+uLXEyxl5LAGGpQA2QgW/8J93GWxpydcVYCvPKz3IAFa96udU+VkMkRt1k6IYw7XSkXgG8rdtYHqYDeXk7yqojj1fFF6yBjE/zO/RrvZUt8iqjjKxRZTbs5cHzlW7rMvhKiBLm2YBuxWoug6x8qo7nox3a7C7/Y9RNql4MCNAnPagXTu/HyTMl2E1vl3S9Tk4buGAm/FZuP0o03af3XZLn2v0oIWbhiR2VIS9sO82U83q3btF3XR9xYd0H96V2MKUZIVvU32902pcfOSQw/cy6pUp80qPnR96JNHd5NIfnfd1W6gUWCTilLlPjEnG5cqzV6n2W5+JMdew/hc3KFWhID9/LbOs6qmWdukVfMnjO+Pl5Gpwue3mSt8tMMsyam0q9n9yRm1FxuUdisciZdbPO6o11yNy8E00Xu8c9YGJ6WwCIu7UHfZHJpjBCrqptJPTCxrGpe7wpA7+4umMOUzolIrw71Qzi5+cE1fjP50vdXl2+io70uHc2RCGkveDsXN3OTDbPoDLlEtRIt26vekUggvXqHje8WS91s8bOn4Tr9c7h0fE8JB9tio+47BxxbqZU9jTqCzO/0k04Ytq+kHSaYcsbIivrNMODu6su3azELJxcqvq9qxkyw2uT1oOkXce7Gt01MT6IYFftvDAxnxWHXcI5qhc96cjl3FvvQ9rnwsQ3vqvZmi4k3iC6G6ZXEDSCGsm8/bkImzfPez8t4eKdHniB8dYIsCS26RFK8z1ZOjM88wjVr9etmzXatnrq82QIEe2+z1lPM66t4Pl2tWyfZp6hrhxhjuGsuNQXzDDf54Zv6Va8KGtq4nNybOaaOHou4sVT9W7vhW55T32tD8TdR/J82Fu33LfdxjwIi1i97zE6n5iDDo99zDy/zhUfdsZM6YEG1ZpB/CCe5lIdv2hF+U71+lm+m3Fp3Co6utxiJwirFsLAie+mCNdqdwAzcociWOpRibhu7LN1bVn14Va+ci3L0ltZ/70u0vedamXzcXLez+eHbfZYd+eKTtfpIc81vZ66G0kmd5abEpPtpaxqNBYUgzhKaoxBmOg0Od/zFm73zeTYGTKqzJjN75tn6wUwNNZl4Hq32Rdlv3e1BZEo0dmj/x6jKOr9OhtBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARB/i3+A4KIp5FuYVkDAAAAAElFTkSuQmCC`,ue=`/portfolio/assets/ama-BVkjaynZ.png`,de=`/portfolio/assets/udemy-v2-BHkWS5VT.png`,O={enabled:!0,animation:l,duration:1e3},fe={animated:!0},k={username:`David Phong`,title:`Hi all, I'm David`,subTitle:(0,w.default)(`A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web applications with JavaScript / Reactjs and some other cool libraries and frameworks.`),displayGreeting:!0},A={github:`https://github.com/greentea524`,linkedin:`https://www.linkedin.com/in/david-phong-48855a44/`,twitter:`https://twitter.com/davidphong_`,display:!0},j={title:`What I do`,subTitle:`FULL STACK DEVELOPER WHO LOVES TO SOLVE PROBLEMS`,skills:[(0,w.default)(`⚡ `+(new Date().getFullYear()-2016)+` years of experience in software development, 3 years in quality assurance`),(0,w.default)(`⚡ Develop interactive Front end / User Interfaces for your web and mobile applications`),(0,w.default)(`⚡ Develop applications with Yii2 framework and worked with MySQL Databases`),(0,w.default)(`⚡ Develop executables and scripts using Python, C++, Visual basic`),(0,w.default)(`⚡ Mobile application IOS development with React Native and Flutter`),(0,w.default)(`⚡ Build real-time computer vision apps with Python, OpenCV, and MediaPipe — hand, gesture, and eye tracking`),(0,w.default)(`⚡ Create interactive browser games and real-time multiplayer experiences with HTML5 Canvas and WebSockets`)],softwareSkills:[{skillName:`JavaScript`,fontAwesomeClassname:`fab fa-js`},{skillName:`Php`,fontAwesomeClassname:`fab fa-php`},{skillName:`html-5`,fontAwesomeClassname:`fab fa-html5`},{skillName:`css3`,fontAwesomeClassname:`fab fa-css3-alt`},{skillName:`reactjs`,fontAwesomeClassname:`fab fa-react`},{skillName:`nodejs`,fontAwesomeClassname:`fab fa-node`},{skillName:`npm`,fontAwesomeClassname:`fab fa-npm`},{skillName:`sql-database`,fontAwesomeClassname:`fas fa-database`},{skillName:`firebase`,fontAwesomeClassname:`fas fa-fire`}],display:!0},pe={display:!0,schools:[{schoolName:`California State University Sacramento`,logo:se,subHeader:`Bachelor of Science in Computer Science`,duration:`2008 - 2012`,desc:`Senior Project`,descBullets:[`Worked in a team of five to enhance a newsletter system, CiciNews, for Senior Project.`,` Our sponsor was a Director of the Career Services Office for the Engineering and Computer Science Department.`,` CiciNews provides the sponsor the ability to publish weekly or urgent newsletters about job opportunities and articles to subscribers.`,` Learned to utilize Linux, Apache, MySQL, and Php environment to adapt to the school's system.`]}]},me={viewSkillBars:!1,experience:[{Stack:`Frontend / Design`,progressPercentage:`70%`},{Stack:`Backend`,progressPercentage:`60%`},{Stack:`Programming`,progressPercentage:`80%`}],displayCodersrank:!0},he={display:!0,experience:[{role:`Software Engineer`,company:`Atlas Technical Consultants`,companylogo:ce,date:`May 2016 – Present`,desc:`Atlas Technical Consultants (Acquired Alta Vista Solutions in 2020). Experienced with Yii2 and Laravel frameworks and built application mainly in PHP and JavaScript language. Worked on many small projects in different languages such as React, Python, C++ and Visual basic`,descBullets:[`Worked on a web application project that allows data storage of materials testing and reporting for the California Department of Transportation - Material Engineering and Testing Services (METS) lab`,`Worked on Job Mix Formula (JMF) application to gather data from materials testing database to perform data verification, data calculation, hard copy forms into digital, and approval process`,`Rewrote a C project into C++ to compile an executable script to send test data from Instron Bluehill Universal test machine to store in a test result database.`,`Update, resolve, and troubleshoot applications for several client applications - PHP5 to PHP8`,`Design the user interface for combined aggregate gradation report for users to share gradation results with standard specifications`,`Assist with developing and testing on client's API system that connects to several of client's databases`,`Responsible for frontend and backend work.`,`Worked with development team in an agile environment`,`Use SQL Server Management Studio environment to work with Deltek Vision database for project reports.`,`Experienced with IT helping internally for about a year.`]},{role:`Quality Assurance Engineer`,company:`Dorado Software`,companylogo:le,date:`Aug 2012 – Apr 2016`,desc:`Quality Assurance testing for network management software that manage network routers and switches`,descBullets:[`Software application and web server installation in Windows and Linux OS VMWare environment`,`Worked with database MySQL and Oracle.`,`Used JIRA Issue tracking system to manage bugs and enhancements verification`,`Assist team to resolve problems or defects`,`Scrum Agile experience`,`Made changes to the software installer - InstallAnywhere`,`Automation testing with Selenium`,`Managed ESXI vmware environment`,`Mirantis Fuel OpenStack deployment - manage and deployed virtualized cloud lab environment`]}]},ge={githubConvertedToken:``,githubUserName:`greentea524`,showGithubProfile:`true`,display:!1},_e={title:`Projects`,subtitle:`selected work from my projects`,projects:[{projectName:`Web Games Hub + Fuel Calculator + Data Dashboard`,projectDesc:`Combined highlight from my Vite app featuring browser games, a unit-aware fuel calculator, and an interactive chart/table data dashboard.`,techStack:[`React 18`,`Vite`,`React Bootstrap`,`Bootstrap 5`,`React Google Charts`,`TanStack React Query`,`React Transition Group`,`GitHub Pages`],footerLink:[{name:`Link`,url:`https://greentea524.github.io/vite-project`}]},{projectName:`2D Platformer Game (Web & Godot)`,projectDesc:`A 2D platformer originally built in Godot 4 and ported to a Vite app rendering on an HTML5 canvas. Features include six levels across two worlds, polished movement (coyote time, variable jump height, double jump), stompable enemies, hazards, coins, and checkpoints. The web version includes React overlays for menus and HUD, mobile-friendly touch controls, and a work-in-progress multiplayer "Race a friend" mode using Socket.IO for real-time 4-player races.`,techStack:[`React 18`,`Vite`,`Godot 4`,`HTML5 Canvas`,`Socket.IO`,`Game Loop / Physics`],footerLink:[{name:`Link`,url:`https://greentea524.github.io/vite-project/platformer`},{name:`Web GitHub`,url:`https://github.com/greentea524/vite-project`},{name:`Godot GitHub`,url:`https://github.com/greentea524/godot-game`}]},{projectName:`camera-track — Real-Time Webcam Vision Toys`,projectDesc:`A trio of real-time computer-vision apps driven by a webcam: a finger counter that sums 0–10 across two hands, an eye tracker that reads gaze direction plus blink rate, drowsiness, and no-blink/staring time from Face Mesh irises, and a gesture-controlled Rock-Paper-Scissors game with countdown and scorekeeping. Each app draws a live landmark overlay in a resizable preview window and ships a hardware-free self-test mode, all reachable from a single menu launcher.`,techStack:[`Python`,`OpenCV`,`MediaPipe`,`NumPy`,`Computer Vision`],footerLink:[{name:`GitHub`,url:`https://github.com/greentea524/camera-track`}]},{projectName:`Flutter Shopping App`,projectDesc:`Cross-platform Flutter shop with a category-grouped catalog, an editable cart with shipping tiers and live tax/total math, and persistent order history powered by Hive — including order tracking, status progression, and cancel/archive/delete actions.`,techStack:[`Flutter`,`Dart`,`Material 3`,`Hive`,`Local Storage`],footerLink:[{name:`GitHub`,url:`https://github.com/greentea524/shopping-app`}]},{projectName:`Nebula Play — Flutter Games Hub`,projectDesc:`A neon-themed Flutter arcade bundling five playable games — Alien Invasion, Pacman Arcade, 2048 Fusion, a daily Wordle clone, and Minesweeper — with persistent high scores via local storage and a responsive desktop/mobile game-card grid.`,techStack:[`Flutter`,`Dart`,`Provider`,`Local Storage`,`Material Design`],footerLink:[{name:`GitHub`,url:`https://github.com/greentea524/flutter_application`}]}],display:!0},ve={title:(0,w.default)(`Achievements And Certifications 🏆 `),subtitle:`Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !`,achievementsCards:[{title:`Python Data Structures`,subtitle:`Coursera`,image:D,footerLink:[{name:`Certification`,url:`https://www.coursera.org/account/accomplishments/verify/XEZ93TVXXBJT`}]},{title:`Front-end Web Development with React`,subtitle:`Coursera`,image:D,footerLink:[{name:`Certification`,url:`https://www.coursera.org/account/accomplishments/verify/AX5EG3TKNVAT`}]},{title:`System Administration and IT Infrastructure Services`,subtitle:`Coursera`,image:D,footerLink:[{name:`Certification`,url:`https://www.coursera.org/account/accomplishments/verify/UFB5ADGEH7HN`}]},{title:`Management Skills for New Managers`,subtitle:`American Management Association`,image:ue,footerLink:[]},{title:`Jenkins, From Zero To Hero: Become a DevOps Jenkins Master`,subtitle:`Udemy`,image:de,footerLink:[{name:`Certification`,url:`https://www.udemy.com/certificate/UC-c21f5ddc-663e-4131-a621-0d3c96a3aa84/`}]},{title:`Postman: The Complete Guide - REST API Testing`,subtitle:`Udemy`,image:de,footerLink:[{name:`Certification`,url:`https://www.udemy.com/certificate/UC-b8cb71b9-5bb4-4bff-ab51-36f40be2e5f7/`}]},{title:`Google AI Essentials`,subtitle:`Coursera`,image:D,footerLink:[{name:`Certification`,url:`https://www.coursera.org/account/accomplishments/verify/6O8ZH4XK2R7L`}]},{title:`Fundamentals of Project Planning and Management`,subtitle:`Coursera`,image:D,footerLink:[{name:`Certification`,url:`https://www.coursera.org/account/accomplishments/verify/C3S8J5LDWUJY`}]},{title:`Introduction to Software Product Management`,subtitle:`Coursera`,image:D,footerLink:[{name:`Certification`,url:`https://www.coursera.org/account/accomplishments/verify/L3PG5D25DYGS`}]},{title:`Flutter and Dart: Developing iOS, Android, and Mobile Apps`,subtitle:`Coursera`,image:D,footerLink:[{name:`Certification`,url:`https://www.coursera.org/account/accomplishments/verify/T9RI6BO2UTKC`}]}],display:!0},ye={title:`Blogs`,subtitle:`With Love for Developing cool stuff, I love to write and teach others what I have learnt.`,blogs:[{url:`https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae`,title:`Win a Google Assistant Tshirt and $200 in Google Cloud Credits`,description:`Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?`},{url:`https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e`,title:`Why REACT is The Best?`,description:`React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.`}],display:!1},be={title:`TALKS`,subtitle:(0,w.default)(``),talks:[{title:``,subtitle:``,slides_url:``,event_url:``}],display:!1},M={title:(0,w.default)(`Podcast 🎙️`),subtitle:`I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY`,podcast:[``],display:!1},N={title:(0,w.default)(`Contact`),subtitle:`Discuss a project or just want to say hi? My Inbox is open for all.`};function xe(){let{isDark:e}=(0,m.useContext)(T),t=he.display,n=ge.display,r=j.display,i=_e.display,a=ve.display,o=ye.display,s=be.display;return(0,E.jsx)(ee.default,{children:(0,E.jsxs)(`header`,{className:e?`dark-menu header`:`header`,children:[(0,E.jsxs)(`a`,{href:`/`,className:`logo`,children:[(0,E.jsx)(`span`,{className:`grey-color`,children:` <`}),(0,E.jsx)(`span`,{className:`logo-name`,children:k.username}),(0,E.jsx)(`span`,{className:`grey-color`,children:`/>`})]}),(0,E.jsx)(`input`,{className:`menu-btn`,type:`checkbox`,id:`menu-btn`,"aria-label":`Toggle navigation menu`}),(0,E.jsx)(`label`,{className:`menu-icon`,htmlFor:`menu-btn`,style:{color:`white`},"aria-label":`Toggle navigation menu`,children:(0,E.jsx)(`span`,{className:e?`navicon navicon-dark`:`navicon`})}),(0,E.jsxs)(`ul`,{className:e?`dark-menu menu`:`menu`,children:[r&&(0,E.jsx)(`li`,{children:(0,E.jsx)(`a`,{href:`#skills`,children:`Skills`})}),t&&(0,E.jsx)(`li`,{children:(0,E.jsx)(`a`,{href:`#experience`,children:`Work Experiences`})}),i&&(0,E.jsx)(`li`,{children:(0,E.jsx)(`a`,{href:`#projects`,children:`Projects`})}),n&&(0,E.jsx)(`li`,{children:(0,E.jsx)(`a`,{href:`#opensource`,children:`Open Source`})}),a&&(0,E.jsx)(`li`,{children:(0,E.jsx)(`a`,{href:`#achievements`,children:`Achievements`})}),o&&(0,E.jsx)(`li`,{children:(0,E.jsx)(`a`,{href:`#blogs`,children:`Blogs`})}),s&&(0,E.jsx)(`li`,{children:(0,E.jsx)(`a`,{href:`#talks`,children:`Talks`})})]}),(0,E.jsx)(oe,{})]})})}var Se=e(o());function Ce(){return(0,E.jsx)(`div`,{className:`centerContent`,children:(0,E.jsxs)(`div`,{className:`sk-circle`,children:[(0,E.jsx)(`div`,{className:`sk-circle1 sk-child`}),(0,E.jsx)(`div`,{className:`sk-circle2 sk-child`}),(0,E.jsx)(`div`,{className:`sk-circle3 sk-child`}),(0,E.jsx)(`div`,{className:`sk-circle4 sk-child`}),(0,E.jsx)(`div`,{className:`sk-circle5 sk-child`}),(0,E.jsx)(`div`,{className:`sk-circle6 sk-child`}),(0,E.jsx)(`div`,{className:`sk-circle7 sk-child`}),(0,E.jsx)(`div`,{className:`sk-circle8 sk-child`}),(0,E.jsx)(`div`,{className:`sk-circle9 sk-child`}),(0,E.jsx)(`div`,{className:`sk-circle10 sk-child`}),(0,E.jsx)(`div`,{className:`sk-circle11 sk-child`}),(0,E.jsx)(`div`,{className:`sk-circle12 sk-child`})]})})}var P=class extends m.Component{render(){let e=this.props.animationData;return(0,E.jsx)(m.Suspense,{fallback:(0,E.jsx)(Ce,{}),children:(0,E.jsx)(Se.default,{animationData:e,loop:!0,autoplay:!0})})}};function we(){return A.display?(0,E.jsxs)(`div`,{className:`social-media-div`,children:[A.github?(0,E.jsxs)(`a`,{href:A.github,className:`icon-button github`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`GitHub`,children:[(0,E.jsx)(`i`,{className:`fab fa-github`}),(0,E.jsx)(`span`,{})]}):null,A.linkedin?(0,E.jsxs)(`a`,{href:A.linkedin,className:`icon-button linkedin`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`LinkedIn`,children:[(0,E.jsx)(`i`,{className:`fab fa-linkedin-in`}),(0,E.jsx)(`span`,{})]}):null,A.gmail?(0,E.jsxs)(`a`,{href:`mailto:${A.gmail}`,className:`icon-button google`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Email`,children:[(0,E.jsx)(`i`,{className:`fas fa-envelope`}),(0,E.jsx)(`span`,{})]}):null,A.gitlab?(0,E.jsxs)(`a`,{href:A.gitlab,className:`icon-button gitlab`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`GitLab`,children:[(0,E.jsx)(`i`,{className:`fab fa-gitlab`}),(0,E.jsx)(`span`,{})]}):null,A.facebook?(0,E.jsxs)(`a`,{href:A.facebook,className:`icon-button facebook`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Facebook`,children:[(0,E.jsx)(`i`,{className:`fab fa-facebook-f`}),(0,E.jsx)(`span`,{})]}):null,A.instagram?(0,E.jsxs)(`a`,{href:A.instagram,className:`icon-button instagram`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Instagram`,children:[(0,E.jsx)(`i`,{className:`fab fa-instagram`}),(0,E.jsx)(`span`,{})]}):null,A.twitter?(0,E.jsxs)(`a`,{href:A.twitter,className:`icon-button twitter`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Twitter`,children:[(0,E.jsx)(`i`,{className:`fab fa-twitter`}),(0,E.jsx)(`span`,{})]}):null,A.medium?(0,E.jsxs)(`a`,{href:A.medium,className:`icon-button medium`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Medium`,children:[(0,E.jsx)(`i`,{className:`fab fa-medium`}),(0,E.jsx)(`span`,{})]}):null,A.stackoverflow?(0,E.jsxs)(`a`,{href:A.stackoverflow,className:`icon-button stack-overflow`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Stack Overflow`,children:[(0,E.jsx)(`i`,{className:`fab fa-stack-overflow`}),(0,E.jsx)(`span`,{})]}):null,A.kaggle?(0,E.jsxs)(`a`,{href:A.kaggle,className:`icon-button kaggle`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Kaggle`,children:[(0,E.jsx)(`i`,{className:`fab fa-kaggle`}),(0,E.jsx)(`span`,{})]}):null]}):null}function Te({text:e,className:t,href:n,newTab:r}){return(0,E.jsx)(`div`,{className:t,children:(0,E.jsx)(`a`,{className:`main-button`,href:n,target:r&&`_blank`,children:e})})}function Ee(){let{isDark:e}=(0,m.useContext)(T);return k.displayGreeting?(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(`div`,{className:`greet-main`,id:`greeting`,children:(0,E.jsxs)(`div`,{className:`greeting-main`,children:[(0,E.jsx)(`div`,{className:`greeting-text-div`,children:(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`h1`,{className:e?`dark-mode greeting-text`:`greeting-text`,children:[k.title,(0,E.jsx)(`span`,{className:`wave-emoji`,children:`👋`})]}),(0,E.jsx)(`p`,{className:e?`dark-mode greeting-text-p`:`greeting-text-p subTitle`,children:k.subTitle}),(0,E.jsx)(we,{}),(0,E.jsx)(`div`,{className:`button-greeting-div`,children:k.resumeLink?(0,E.jsx)(Te,{text:k.resumeLinkText,href:k.resumeLink,newTab:!0}):(0,E.jsx)(Te,{text:`Contact Me`,href:`#contact`})})]})}),(0,E.jsx)(`div`,{className:`greeting-image-div`,children:(0,E.jsx)(P,{animationData:u})})]})})}):null}function De(){return(0,E.jsx)(`div`,{children:(0,E.jsx)(`div`,{className:`software-skills-main-div`,children:(0,E.jsx)(`ul`,{className:`dev-icons`,children:j.softwareSkills.map(e=>(0,E.jsxs)(`li`,{className:`software-skill-inline`,name:e.skillName,children:[(0,E.jsx)(`i`,{className:e.fontAwesomeClassname}),(0,E.jsx)(`p`,{children:e.skillName})]},e.skillName))})})})}var Oe=r({default:()=>ke}),ke,Ae=n((()=>{ke=`/portfolio/assets/developerActivity-DkUw2ab9.svg`}));function je(){let{isDark:e}=(0,m.useContext)(T);return j.display?(0,E.jsx)(`div`,{className:e?`dark-mode main`:`main`,id:`skills`,children:(0,E.jsxs)(`div`,{className:`skills-main-div`,children:[(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(`div`,{className:`skills-image-div`,children:fe.animated?(0,E.jsx)(P,{animationData:f}):(0,E.jsx)(`img`,{alt:`Man Working`,src:(Ae(),t(Oe))})})}),(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(`div`,{className:`skills-text-div`,children:[(0,E.jsxs)(`h1`,{className:e?`dark-mode skills-heading`:`skills-heading`,children:[j.title,` `]}),(0,E.jsx)(`p`,{className:e?`dark-mode subTitle skills-text-subtitle`:`subTitle skills-text-subtitle`,children:j.subTitle}),(0,E.jsx)(De,{}),(0,E.jsx)(`div`,{children:j.skills.map(t=>(0,E.jsx)(`p`,{className:e?`dark-mode subTitle skills-text`:`subTitle skills-text`,children:t},t))})]})})]})}):null}var Me=r({default:()=>Ne}),Ne,Pe=n((()=>{Ne=`/portfolio/assets/skill-bfopk0_0.svg`}));function Fe(){return me.viewSkillBars?(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(`div`,{className:`skills-container`,children:[(0,E.jsxs)(`div`,{className:`skills-bar`,children:[(0,E.jsx)(`h1`,{className:`skills-heading`,children:`Proficiency`}),me.experience.map(e=>{let t={width:e.progressPercentage};return(0,E.jsxs)(`div`,{className:`skill`,children:[(0,E.jsx)(`p`,{children:e.Stack}),(0,E.jsx)(`div`,{className:`meter`,children:(0,E.jsx)(`span`,{style:t})})]},e.Stack)})]}),(0,E.jsx)(`div`,{className:`skills-image`,children:fe.animated?(0,E.jsx)(P,{animationData:d}):(0,E.jsx)(`img`,{alt:`Skills`,src:(Pe(),t(Me))})})]})}):null}function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(null,arguments)}var Ie=function(e,t){return e<t?-1:+(e>t)},Le=function(e){return e.reduce(function(e,t){return e+t},0)},Re=function(){function e(e){this.colors=e}var t=e.prototype;return t.palette=function(){return this.colors},t.map=function(e){return e},e}(),ze=function(){function e(e,t,n){return(e<<10)+(t<<5)+n}function t(e){var t=[],n=!1;function r(){t.sort(e),n=!0}return{push:function(e){t.push(e),n=!1},peek:function(e){return n||r(),e===void 0&&(e=t.length-1),t[e]},pop:function(){return n||r(),t.pop()},size:function(){return t.length},map:function(e){return t.map(e)},debug:function(){return n||r(),t}}}function n(e,t,n,r,i,a,o){var s=this;s.r1=e,s.r2=t,s.g1=n,s.g2=r,s.b1=i,s.b2=a,s.histo=o}function r(){this.vboxes=new t(function(e,t){return Ie(e.vbox.count()*e.vbox.volume(),t.vbox.count()*t.vbox.volume())})}function i(t,n){if(n.count()){var r=n.r2-n.r1+1,i=n.g2-n.g1+1,a=Math.max.apply(null,[r,i,n.b2-n.b1+1]);if(n.count()==1)return[n.copy()];var o,s,c,l,u=0,d=[],f=[];if(a==r)for(o=n.r1;o<=n.r2;o++){for(l=0,s=n.g1;s<=n.g2;s++)for(c=n.b1;c<=n.b2;c++)l+=t[e(o,s,c)]||0;d[o]=u+=l}else if(a==i)for(o=n.g1;o<=n.g2;o++){for(l=0,s=n.r1;s<=n.r2;s++)for(c=n.b1;c<=n.b2;c++)l+=t[e(s,o,c)]||0;d[o]=u+=l}else for(o=n.b1;o<=n.b2;o++){for(l=0,s=n.r1;s<=n.r2;s++)for(c=n.g1;c<=n.g2;c++)l+=t[e(s,c,o)]||0;d[o]=u+=l}return d.forEach(function(e,t){f[t]=u-e}),function(e){var t,r,i,a,s,c=e+`1`,l=e+`2`,p=0;for(o=n[c];o<=n[l];o++)if(d[o]>u/2){for(i=n.copy(),a=n.copy(),s=(t=o-n[c])<=(r=n[l]-o)?Math.min(n[l]-1,~~(o+r/2)):Math.max(n[c],~~(o-1-t/2));!d[s];)s++;for(p=f[s];!p&&d[s-1];)p=f[--s];return i[l]=s,a[c]=i[l]+1,[i,a]}}(a==r?`r`:a==i?`g`:`b`)}}return n.prototype={volume:function(e){var t=this;return t._volume&&!e||(t._volume=(t.r2-t.r1+1)*(t.g2-t.g1+1)*(t.b2-t.b1+1)),t._volume},count:function(t){var n=this,r=n.histo;if(!n._count_set||t){var i,a,o,s=0;for(i=n.r1;i<=n.r2;i++)for(a=n.g1;a<=n.g2;a++)for(o=n.b1;o<=n.b2;o++)s+=r[e(i,a,o)]||0;n._count=s,n._count_set=!0}return n._count},copy:function(){var e=this;return new n(e.r1,e.r2,e.g1,e.g2,e.b1,e.b2,e.histo)},avg:function(t){var n=this,r=n.histo;if(!n._avg||t){var i,a,o,s,c=0,l=0,u=0,d=0;if(n.r1===n.r2&&n.g1===n.g2&&n.b1===n.b2)n._avg=[n.r1<<3,n.g1<<3,n.b1<<3];else{for(a=n.r1;a<=n.r2;a++)for(o=n.g1;o<=n.g2;o++)for(s=n.b1;s<=n.b2;s++)c+=i=r[e(a,o,s)]||0,l+=i*(a+.5)*8,u+=i*(o+.5)*8,d+=i*(s+.5)*8;n._avg=c?[~~(l/c),~~(u/c),~~(d/c)]:[~~(8*(n.r1+n.r2+1)/2),~~(8*(n.g1+n.g2+1)/2),~~(8*(n.b1+n.b2+1)/2)]}}return n._avg},contains:function(e){var t=this,n=e[0]>>3;return gval=e[1]>>3,bval=e[2]>>3,n>=t.r1&&n<=t.r2&&gval>=t.g1&&gval<=t.g2&&bval>=t.b1&&bval<=t.b2}},r.prototype={push:function(e){this.vboxes.push({vbox:e,color:e.avg()})},palette:function(){return this.vboxes.map(function(e){return e.color})},size:function(){return this.vboxes.size()},map:function(e){for(var t=this.vboxes,n=0;n<t.size();n++)if(t.peek(n).vbox.contains(e))return t.peek(n).color;return this.nearest(e)},nearest:function(e){for(var t,n,r,i=this.vboxes,a=0;a<i.size();a++)((n=Math.sqrt((e[0]-i.peek(a).color[0])**2+(e[1]-i.peek(a).color[1])**2+(e[2]-i.peek(a).color[2])**2))<t||t===void 0)&&(t=n,r=i.peek(a).color);return r},forcebw:function(){var e=this.vboxes;e.sort(function(e,t){return Ie(Le(e.color),Le(t.color))});var t=e[0].color;t[0]<5&&t[1]<5&&t[2]<5&&(e[0].color=[0,0,0]);var n=e.length-1,r=e[n].color;r[0]>251&&r[1]>251&&r[2]>251&&(e[n].color=[255,255,255])}},{quantize:function(a,o){if(!Number.isInteger(o)||o<1||o>256)throw Error(`Invalid maximum color count. It must be an integer between 1 and 256.`);if(!a.length||o<2||o>256||!a.length||o<2||o>256)return!1;for(var s=[],c=new Set,l=0;l<a.length;l++){var u=a[l],d=u.join(`,`);c.has(d)||(c.add(d),s.push(u))}if(s.length<=o)return new Re(s);var f=function(t){var n,r=Array(32768);return t.forEach(function(t){n=e(t[0]>>3,t[1]>>3,t[2]>>3),r[n]=(r[n]||0)+1}),r}(a);f.forEach(function(){});var p=function(e,t){var r,i,a,o=1e6,s=0,c=1e6,l=0,u=1e6,d=0;return e.forEach(function(e){(r=e[0]>>3)<o?o=r:r>s&&(s=r),(i=e[1]>>3)<c?c=i:i>l&&(l=i),(a=e[2]>>3)<u?u=a:a>d&&(d=a)}),new n(o,s,c,l,u,d,t)}(a,f),m=new t(function(e,t){return Ie(e.count(),t.count())});function h(e,t){for(var n,r=e.size(),a=0;a<1e3;){if(r>=t||a++>1e3)return;if((n=e.pop()).count()){var o=i(f,n),s=o[0],c=o[1];if(!s)return;e.push(s),c&&(e.push(c),r++)}else e.push(n),a++}}m.push(p),h(m,.75*o);for(var g=new t(function(e,t){return Ie(e.count()*e.volume(),t.count()*t.volume())});m.size();)g.push(m.pop());h(g,o);for(var _=new r;g.size();)_.push(g.pop());return _}}}().quantize,Be=function(e,t,n,r){for(var i,a,o,s,c,l=r||{},u=l.ignoreWhite,d=u===void 0||u,f=l.whiteThreshold,p=f===void 0?250:f,m=l.alphaThreshold,h=m===void 0?125:m,g=l.minSaturation,_=g===void 0?0:g,v=e,y=[],b=0;b<t;b+=n)if(a=v[0+(i=4*b)],o=v[i+1],s=v[i+2],!((c=v[i+3])!==void 0&&c<h||d&&a>p&&o>p&&s>p)){if(_>0){var x=Math.max(a,o,s);if(x===0||(x-Math.min(a,o,s))/x<_)continue}y.push([a,o,s])}return y},Ve=function(e){var t=e.colorCount,n=e.quality;if(t!==void 0&&Number.isInteger(t)){if(t===1)throw Error(`colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()`);t=Math.max(t,2),t=Math.min(t,20)}else t=10;return(n===void 0||!Number.isInteger(n)||n<1)&&(n=10),{colorCount:t,quality:n,ignoreWhite:e.ignoreWhite===void 0||!!e.ignoreWhite,whiteThreshold:typeof e.whiteThreshold==`number`?e.whiteThreshold:250,alphaThreshold:typeof e.alphaThreshold==`number`?e.alphaThreshold:125,minSaturation:typeof e.minSaturation==`number`?Math.max(0,Math.min(1,e.minSaturation)):0}},I=function(){};I.prototype.getColor=function(e,t){if(typeof t==`object`&&t){var n=this.getPalette(e,F({colorCount:5},t));return n===null?null:n[0]}var r=this.getPalette(e,5,t);return r===null?null:r[0]},I.prototype.getPalette=function(e,t,n){var r,i,a,o={ignoreWhite:(r=Ve(typeof t==`object`&&t?{colorCount:t.colorCount,quality:t.quality,ignoreWhite:t.ignoreWhite,whiteThreshold:t.whiteThreshold,alphaThreshold:t.alphaThreshold,minSaturation:t.minSaturation}:{colorCount:t,quality:n})).ignoreWhite,whiteThreshold:r.whiteThreshold,alphaThreshold:r.alphaThreshold,minSaturation:r.minSaturation};if(!e)throw Error(`sourceImage is required`);if(e instanceof HTMLImageElement){if(!e.complete)throw Error(`Image has not finished loading. Wait for the "load" event before calling getColor/getPalette.`);if(!e.naturalWidth)throw Error(`Image has no dimensions. It may not have loaded successfully.`)}try{var s=function(e){if(e instanceof HTMLImageElement){var t=document.createElement(`canvas`),n=t.getContext(`2d`),r=t.width=e.naturalWidth,i=t.height=e.naturalHeight;return n.drawImage(e,0,0,r,i),{imageData:n.getImageData(0,0,r,i),pixelCount:r*i}}if(e instanceof HTMLCanvasElement){var a=e.getContext(`2d`),o=e.width,s=e.height;return{imageData:a.getImageData(0,0,o,s),pixelCount:o*s}}if(typeof ImageData<`u`&&e instanceof ImageData)return{imageData:e,pixelCount:e.width*e.height};if(typeof ImageBitmap<`u`&&e instanceof ImageBitmap){var c=document.createElement(`canvas`),l=c.getContext(`2d`);return c.width=e.width,c.height=e.height,l.drawImage(e,0,0),{imageData:l.getImageData(0,0,e.width,e.height),pixelCount:e.width*e.height}}throw Error(`Unsupported source type. Expected HTMLImageElement, HTMLCanvasElement, ImageData, or ImageBitmap.`)}(e);i=s.imageData,a=s.pixelCount}catch(e){throw e.name===`SecurityError`?Error(`Image is tainted by cross-origin data. Add crossorigin="anonymous" to the <img> tag and ensure the server sends appropriate CORS headers.`,{cause:e}):e}var c=Be(i.data,a,r.quality,o);c.length===0&&(c=Be(i.data,a,r.quality,F({},o,{ignoreWhite:!1}))),c.length===0&&(c=Be(i.data,a,r.quality,F({},o,{ignoreWhite:!1,alphaThreshold:0})));var l=ze(c,r.colorCount),u=l?l.palette():null;if(u)return u;var d=function(e,t,n){for(var r=e,i=0,a=0,o=0,s=0,c=0;c<t;c+=n){var l=4*c;i+=r[l],a+=r[l+1],o+=r[l+2],s++}return s===0?null:[Math.round(i/s),Math.round(a/s),Math.round(o/s)]}(i.data,a,r.quality);return d?[d]:null},I.prototype.getColorFromUrl=function(e,t,n){var r=this,i=document.createElement(`img`);i.addEventListener(`load`,function(){var a=r.getPalette(i,5,n);t(a?a[0]:null,e)}),i.src=e},I.prototype.getImageData=function(e,t){var n=new XMLHttpRequest;n.open(`GET`,e,!0),n.responseType=`arraybuffer`,n.onload=function(){if(this.status==200){for(var e=new Uint8Array(this.response),n=Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);var i=n.join(``);t(`data:image/png;base64,`+window.btoa(i))}},n.send()},I.prototype.getColorAsync=function(e,t,n){var r=this;this.getImageData(e,function(e){var i=document.createElement(`img`);i.addEventListener(`load`,function(){var e=r.getPalette(i,5,n);t(e?e[0]:null,this)}),i.src=e})};function He(e){return e===void 0?null:`rgb(`+e.join(`, `)+`)`}function Ue({descBullets:e,isDark:t,company:n}){return e?e.map(e=>(0,E.jsx)(`li`,{className:t?`subTitle dark-mode-text`:`subTitle`,children:e},`${n}-${e}`)):null}function We({cardInfo:e,isDark:t}){let[n,r]=(0,m.useState)([]),i=(0,m.useRef)(null);function a(){r(new I().getColor(i.current))}return(0,E.jsxs)(`div`,{className:t?`experience-card-dark`:`experience-card`,children:[(0,E.jsxs)(`div`,{style:{background:He(n)},className:`experience-banner`,children:[(0,E.jsx)(`div`,{className:`experience-blurred_div`}),(0,E.jsx)(`div`,{className:`experience-div-company`,children:(0,E.jsx)(`h5`,{className:`experience-text-company`,children:e.company})}),(0,E.jsx)(`img`,{crossOrigin:`anonymous`,ref:i,className:`experience-roundedimg`,src:e.companylogo,alt:e.company,onLoad:()=>a()})]}),(0,E.jsxs)(`div`,{className:`experience-text-details`,children:[(0,E.jsx)(`h5`,{className:t?`experience-text-role dark-mode-text`:`experience-text-role`,children:e.role}),e.date&&(0,E.jsx)(`p`,{className:t?`experience-text-date dark-mode-text`:`experience-text-date`,children:e.date}),e.desc&&(0,E.jsx)(`p`,{className:t?`experience-text-desc dark-mode-text`:`experience-text-desc`,children:e.desc}),e.descBullets&&(0,E.jsx)(`ul`,{className:`experience-text-bullets`,children:(0,E.jsx)(Ue,{descBullets:e.descBullets,isDark:t,company:e.company})})]})]})}function Ge(){let{isDark:e}=(0,m.useContext)(T);if(he.display)return(0,E.jsx)(`div`,{id:`experience`,children:(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(`div`,{className:`experience-container`,id:`workExperience`,children:(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h1`,{className:`experience-heading`,children:`Experiences`}),(0,E.jsx)(`div`,{className:`experience-cards-div`,children:he.experience.map(t=>(0,E.jsx)(We,{isDark:e,cardInfo:{company:t.company,desc:t.desc,date:t.date,companylogo:t.companylogo,role:t.role,descBullets:t.descBullets}},`${t.company}-${t.role}`))})]})})})})}function Ke(){return null}function qe(){let{isDark:e}=(0,m.useContext)(T);return _e.display?(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(`div`,{className:`main`,id:`projects`,children:(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h1`,{className:`skills-heading`,children:_e.title}),(0,E.jsx)(`p`,{className:e?`dark-mode project-subtitle`:`subTitle project-subtitle`,children:_e.subtitle}),(0,E.jsx)(`div`,{className:`projects-container`,children:_e.projects.map(t=>(0,E.jsxs)(`div`,{className:e?`dark-mode project-card project-card-dark`:`project-card project-card-light`,children:[t.image?(0,E.jsx)(`div`,{className:`project-image`,children:(0,E.jsx)(`img`,{src:t.image,alt:t.projectName,className:`card-image`})}):null,(0,E.jsxs)(`div`,{className:`project-detail`,children:[(0,E.jsx)(`h5`,{className:e?`dark-mode card-title`:`card-title`,children:t.projectName}),(0,E.jsx)(`p`,{className:e?`dark-mode card-subtitle`:`card-subtitle`,children:t.projectDesc}),t.techStack?(0,E.jsx)(`div`,{className:`project-tech-stack`,children:t.techStack.map(n=>(0,E.jsx)(`span`,{className:e?`dark-mode project-tag tech-tag`:`project-tag tech-tag`,children:n},`${t.projectName}-${n}`))}):null,t.footerLink?(0,E.jsx)(`div`,{className:`project-card-footer`,children:t.footerLink.map(n=>(0,E.jsx)(`a`,{className:e?`dark-mode project-tag`:`project-tag`,href:n.url,target:`_blank`,rel:`noopener noreferrer`,children:n.name},n.url||`${t.projectName}-${n.name}`))}):null]})]},t.projectName||t.projectDesc))})]})})}):null}function Je(e,t){if(!e){console.log(`URL for ${t} not found`);return}window.open(e,`_blank`).focus()}function Ye({cardInfo:e,isDark:t}){return(0,E.jsxs)(`div`,{className:t?`dark-mode certificate-card`:`certificate-card`,children:[(0,E.jsx)(`div`,{className:`certificate-image-div`,children:(0,E.jsx)(`img`,{src:e.image,alt:e.imageAlt||`Card Thumbnail`,className:`card-image`})}),(0,E.jsxs)(`div`,{className:`certificate-detail-div`,children:[(0,E.jsx)(`h5`,{className:t?`dark-mode card-title`:`card-title`,children:e.title}),(0,E.jsx)(`p`,{className:t?`dark-mode card-subtitle`:`card-subtitle`,children:e.description})]}),(0,E.jsx)(`div`,{className:`certificate-card-footer`,children:e.footer.map(n=>(0,E.jsx)(`button`,{className:t?`dark-mode certificate-tag`:`certificate-tag`,type:`button`,onClick:()=>Je(n.url,n.name),children:n.name},n.url||`${e.title}-${n.name}`))})]})}function Xe(){let{isDark:e}=(0,m.useContext)(T);return ve.display?(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(`div`,{className:`main`,id:`achievements`,children:(0,E.jsxs)(`div`,{className:`achievement-main-div`,children:[(0,E.jsxs)(`div`,{className:`achievement-header`,children:[(0,E.jsx)(`h1`,{className:e?`dark-mode heading achievement-heading`:`heading achievement-heading`,children:ve.title}),(0,E.jsx)(`p`,{className:e?`dark-mode subTitle achievement-subtitle`:`subTitle achievement-subtitle`,children:ve.subtitle})]}),(0,E.jsx)(`div`,{className:`achievement-cards-div`,children:ve.achievementsCards.map(t=>(0,E.jsx)(Ye,{isDark:e,cardInfo:{title:t.title,description:t.subtitle,image:t.image,imageAlt:t.imageAlt,footer:t.footerLink}},t.title))})]})})}):null}function Ze({blog:e,isDark:t}){return(0,E.jsx)(`div`,{children:(0,E.jsx)(`div`,{className:t?`blog-container dark-mode`:`blog-container`,children:(0,E.jsxs)(`a`,{className:t?`dark-mode blog-card blog-card-shadow`:`blog-card`,href:e.url,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Open blog post ${e.title}`,children:[(0,E.jsx)(`h3`,{className:t?`small-dark blog-title`:`blog-title`,children:e.title}),(0,E.jsx)(`p`,{className:t?`small-dark small`:`small`,children:e.description}),(0,E.jsx)(`div`,{className:`go-corner`,children:(0,E.jsx)(`div`,{className:`go-arrow`,children:`→`})})]})})})}function Qe(){let{isDark:e}=(0,m.useContext)(T);return ye.display?(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(`div`,{className:`main`,id:`blogs`,children:[(0,E.jsxs)(`div`,{className:`blog-header`,children:[(0,E.jsx)(`h1`,{className:`blog-header-text`,children:ye.title}),(0,E.jsx)(`p`,{className:e?`dark-mode blog-subtitle`:`subTitle blog-subtitle`,children:ye.subtitle})]}),(0,E.jsx)(`div`,{className:`blog-main-div`,children:(0,E.jsx)(`div`,{className:`blog-text-div`,children:ye.blogs.map(t=>(0,E.jsx)(Ze,{isDark:e,blog:{url:t.url,image:t.image,title:t.title,description:t.description}},t.url||t.title))})})]})}):null}function $e(){let{isDark:e}=(0,m.useContext)(T);return(0,E.jsxs)(`div`,{className:`footer-div`,children:[(0,E.jsx)(`p`,{className:e?`dark-mode footer-text`:`footer-text`,children:(0,w.default)(`Made with ❤️ by DeveloperFolio Team`)}),(0,E.jsxs)(`p`,{className:e?`dark-mode footer-text`:`footer-text`,children:[`Theme by`,` `,(0,E.jsx)(`a`,{href:`https://github.com/saadpasta/developerFolio`,children:`developerFolio`})]})]})}function et({talkDetails:e}){return(0,E.jsx)(`div`,{children:(0,E.jsx)(`div`,{className:`container`,children:(0,E.jsxs)(`div`,{className:e.isDark?`dark-rectangle rectangle`:`rectangle`,children:[(0,E.jsx)(`div`,{className:`diagonal-fill`}),(0,E.jsx)(`div`,{className:`talk-card-title`,children:e.title}),(0,E.jsx)(`p`,{className:`talk-card-subtitle`,children:e.subtitle}),(0,E.jsxs)(`div`,{className:`card-footer-button-div`,children:[(0,E.jsx)(`a`,{href:e.slides_url,target:`_`,className:`talk-button`,children:`Slides`}),(0,E.jsx)(`a`,{href:e.event_url,target:`_`,className:`talk-button`,children:`Event`})]})]})})})}function tt(){let{isDark:e}=(0,m.useContext)(T);return be.display?(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(`div`,{className:`main`,id:`talks`,children:(0,E.jsxs)(`div`,{className:`talk-header`,children:[(0,E.jsx)(`h1`,{className:`talk-header-title`,children:be.title}),(0,E.jsx)(`p`,{className:e?`dark-mode talk-header-subtitle`:`subTitle talk-header-subtitle`,children:be.subtitle}),be.talks.map(t=>(0,E.jsx)(et,{talkDetails:{title:t.title,subtitle:t.subtitle,slides_url:t.slides_url,event_url:t.event_url,image:t.image,isDark:e}},t.title||t.event_url))]})})}):null}function nt(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function rt(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var it=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(rt(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=nt(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),L=`-ms-`,at=`-moz-`,R=`-webkit-`,ot=`comm`,st=`rule`,ct=`decl`,lt=`@import`,ut=`@keyframes`,dt=`@layer`,ft=Math.abs,pt=String.fromCharCode,mt=Object.assign;function ht(e,t){return B(e,0)^45?(((t<<2^B(e,0))<<2^B(e,1))<<2^B(e,2))<<2^B(e,3):0}function gt(e){return e.trim()}function _t(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,n){return e.replace(t,n)}function vt(e,t){return e.indexOf(t)}function B(e,t){return e.charCodeAt(t)|0}function yt(e,t,n){return e.slice(t,n)}function V(e){return e.length}function bt(e){return e.length}function xt(e,t){return t.push(e),e}function St(e,t){return e.map(t).join(``)}var Ct=1,H=1,wt=0,U=0,W=0,G=``;function Tt(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ct,column:H,length:o,return:``}}function K(e,t){return mt(Tt(``,null,null,``,null,null,0),e,{length:-e.length},t)}function Et(){return W}function Dt(){return W=U>0?B(G,--U):0,H--,W===10&&(H=1,Ct--),W}function q(){return W=U<wt?B(G,U++):0,H++,W===10&&(H=1,Ct++),W}function J(){return B(G,U)}function Ot(){return U}function Y(e,t){return yt(G,e,t)}function kt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function At(e){return Ct=H=1,wt=V(G=e),U=0,[]}function jt(e){return G=``,e}function Mt(e){return gt(Y(U-1,Ft(e===91?e+2:e===40?e+1:e)))}function Nt(e){for(;(W=J())&&W<33;)q();return kt(e)>2||kt(W)>3?``:` `}function Pt(e,t){for(;--t&&q()&&!(W<48||W>102||W>57&&W<65||W>70&&W<97););return Y(e,Ot()+(t<6&&J()==32&&q()==32))}function Ft(e){for(;q();)switch(W){case e:return U;case 34:case 39:e!==34&&e!==39&&Ft(W);break;case 40:e===41&&Ft(e);break;case 92:q();break}return U}function It(e,t){for(;q()&&e+W!==57&&!(e+W===84&&J()===47););return`/*`+Y(t,U-1)+`*`+pt(e===47?e:q())}function Lt(e){for(;!kt(J());)q();return Y(e,U)}function Rt(e){return jt(zt(``,null,null,null,[``],e=At(e),0,[0],e))}function zt(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=q()){case 40:if(m!=108&&B(C,d-1)==58){vt(C+=z(Mt(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Mt(v);break;case 9:case 10:case 13:case 32:C+=Nt(m);break;case 92:C+=Pt(Ot()-1,7);continue;case 47:switch(J()){case 42:case 47:xt(Vt(It(q(),Ot()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=V(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=z(C,/\f/g,``)),p>0&&V(C)-d&&xt(p>32?Ht(C+`;`,r,n,d-1):Ht(z(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(xt(S=Bt(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)zt(C,t,S,S,b,a,d,s,x);else switch(f===99&&B(C,3)===110?100:f){case 100:case 108:case 109:case 115:zt(e,S,S,r&&xt(Bt(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:zt(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+V(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Dt()==125)continue}switch(C+=pt(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(V(C)-1)*_,_=1;break;case 64:J()===45&&(C+=Mt(q())),f=J(),u=d=V(y=C+=Lt(Ot())),v++;break;case 45:m===45&&V(C)==2&&(h=0)}}return a}function Bt(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=bt(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=yt(e,d+1,d=ft(h=o[m])),y=e;_<p;++_)(y=gt(h>0?f[_]+` `+v:z(v,/&\f/g,f[_])))&&(c[g++]=y);return Tt(e,t,n,i===0?st:s,c,l,u)}function Vt(e,t,n){return Tt(e,t,n,ot,pt(Et()),yt(e,2,-2),0)}function Ht(e,t,n,r){return Tt(e,t,n,ct,yt(e,0,r),yt(e,r+1,-1),r)}function X(e,t){for(var n=``,r=bt(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function Ut(e,t,n,r){switch(e.type){case dt:if(e.children.length)break;case lt:case ct:return e.return=e.return||e.value;case ot:return``;case ut:return e.return=e.value+`{`+X(e.children,r)+`}`;case st:e.value=e.props.join(`,`)}return V(n=X(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Wt(e){var t=bt(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Gt(e){return function(t){t.root||(t=t.return)&&e(t)}}function Kt(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var qt=function(e,t,n){for(var r=0,i=0;r=i,i=J(),r===38&&i===12&&(t[n]=1),!kt(i);)q();return Y(e,U)},Jt=function(e,t){var n=-1,r=44;do switch(kt(r)){case 0:r===38&&J()===12&&(t[n]=1),e[n]+=qt(U-1,t,n);break;case 2:e[n]+=Mt(r);break;case 4:if(r===44){e[++n]=J()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=pt(r)}while(r=q());return e},Yt=function(e,t){return jt(Jt(At(e),t))},Xt=new WeakMap,Zt=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!Xt.get(n))&&!r){Xt.set(e,!0);for(var i=[],a=Yt(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},Qt=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function $t(e,t){switch(ht(e,t)){case 5103:return R+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+at+e+L+e+e;case 6828:case 4268:return R+e+L+e+e;case 6165:return R+e+L+`flex-`+e+e;case 5187:return R+e+z(e,/(\w+).+(:[^]+)/,R+`box-$1$2`+L+`flex-$1$2`)+e;case 5443:return R+e+L+`flex-item-`+z(e,/flex-|-self/,``)+e;case 4675:return R+e+L+`flex-line-pack`+z(e,/align-content|flex-|-self/,``)+e;case 5548:return R+e+L+z(e,`shrink`,`negative`)+e;case 5292:return R+e+L+z(e,`basis`,`preferred-size`)+e;case 6060:return R+`box-`+z(e,`-grow`,``)+R+e+L+z(e,`grow`,`positive`)+e;case 4554:return R+z(e,/([^-])(transform)/g,`$1`+R+`$2`)+e;case 6187:return z(z(z(e,/(zoom-|grab)/,R+`$1`),/(image-set)/,R+`$1`),e,``)+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,R+`box-pack:$3`+L+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+R+e+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,R+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(V(e)-1-t>6)switch(B(e,t+1)){case 109:if(B(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,`$1`+R+`$2-$3$1`+at+(B(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~vt(e,`stretch`)?$t(z(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(B(e,t+1)!==115)break;case 6444:switch(B(e,V(e)-3-(~vt(e,`!important`)&&10))){case 107:return z(e,`:`,`:`+R)+e;case 101:return z(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+R+(B(e,14)===45?`inline-`:``)+`box$3$1`+R+`$2$3$1`+L+`$2box$3`)+e}break;case 5936:switch(B(e,t+11)){case 114:return R+e+L+z(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return R+e+L+z(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return R+e+L+z(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return R+e+L+e+e}return e}var en=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ct:e.return=$t(e.value,e.length);break;case ut:return X([K(e,{value:z(e.value,`@`,`@`+R)})],r);case st:if(e.length)return St(e.props,function(t){switch(_t(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return X([K(e,{props:[z(t,/:(read-\w+)/,`:`+at+`$1`)]})],r);case`::placeholder`:return X([K(e,{props:[z(t,/:(plac\w+)/,`:`+R+`input-$1`)]}),K(e,{props:[z(t,/:(plac\w+)/,`:`+at+`$1`)]}),K(e,{props:[z(t,/:(plac\w+)/,L+`input-$1`)]})],r)}return``})}}],tn=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||en,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[Zt,Qt],l,u=[Ut,Gt(function(e){l.insert(e)})],d=Wt(c.concat(r,u)),f=function(e){return X(Rt(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new it({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},nn=i((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),rn=i(((e,t)=>{t.exports=nn()})),an=i(((e,t)=>{var n=rn(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h}));function on(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var sn=function(e,t,n){var r=e.key+`-`+t.name;n===!1&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},cn=function(e,t,n){sn(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function ln(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var un={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dn=!1,fn=/[A-Z]|^ms/g,pn=/_EMO_([^_]+?)_([^]*?)_EMO_/g,mn=function(e){return e.charCodeAt(1)===45},hn=function(e){return e!=null&&typeof e!=`boolean`},gn=Kt(function(e){return mn(e)?e:e.replace(fn,`-$&`).toLowerCase()}),_n=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(pn,function(e,t,n){return Z={name:t,styles:n,next:Z},t})}return un[e]!==1&&!mn(e)&&typeof t==`number`&&t!==0?t+`px`:t},vn=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;function yn(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return Z={name:i.name,styles:i.styles,next:Z},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Z={name:o.name,styles:o.styles,next:Z},o=o.next;return a.styles+`;`}return bn(e,t,n);case`function`:if(e!==void 0){var s=Z,c=n(e);return Z=s,yn(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function bn(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=yn(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:hn(s)&&(r+=gn(a)+`:`+_n(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&dn)throw Error(vn);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)hn(o[c])&&(r+=gn(a)+`:`+_n(a,o[c])+`;`);else{var l=yn(e,t,o);switch(a){case`animation`:case`animationName`:r+=gn(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}var xn=/label:\s*([^\s;{]+)\s*(;|$)/g,Z;function Sn(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Z=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=yn(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=yn(n,t,e[o]),r&&(i+=a[o]);xn.lastIndex=0;for(var s=``,c;(c=xn.exec(i))!==null;)s+=`-`+c[1];return{name:ln(i)+s,styles:i,next:Z}}var Cn=function(e){return e()},wn=m.useInsertionEffect?m.useInsertionEffect:!1,Tn=wn||Cn;wn||m.useLayoutEffect;var En=m.createContext(typeof HTMLElement<`u`?tn({key:`css`}):null);En.Provider;var Dn=function(e){return(0,m.forwardRef)(function(t,n){return e(t,(0,m.useContext)(En),n)})},On=m.createContext({}),kn={}.hasOwnProperty,An=`__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,jn=function(e,t){var n={};for(var r in t)kn.call(t,r)&&(n[r]=t[r]);return n[An]=e,n},Mn=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return sn(t,n,r),Tn(function(){return cn(t,n,r)}),null},Nn=Dn(function(e,t,n){var r=e.css;typeof r==`string`&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[An],a=[r],o=``;typeof e.className==`string`?o=on(t.registered,a,e.className):e.className!=null&&(o=e.className+` `);var s=Sn(a,void 0,m.useContext(On));o+=t.key+`-`+s.name;var c={};for(var l in e)kn.call(e,l)&&l!==`css`&&l!==An&&(c[l]=e[l]);return c.className=o,n&&(c.ref=n),m.createElement(m.Fragment,null,m.createElement(Mn,{cache:t,serialized:s,isStringTag:typeof i==`string`}),m.createElement(i,c))});an();var Pn=E.Fragment,Q=function(e,t,n){return kn.call(t,`css`)?E.jsx(Nn,jn(e,t),n):E.jsx(e,t,n)},Fn=function(e,t){var n=arguments;if(t==null||!kn.call(t,`css`))return m.createElement.apply(void 0,n);var r=n.length,i=Array(r);i[0]=Nn,i[1]=jn(e,t);for(var a=2;a<r;a++)i[a]=n[a];return m.createElement.apply(null,i)};(function(e){var t;t||=e.JSX||={}})(Fn||={});function In(){return Sn([...arguments])}function $(){var e=In.apply(void 0,arguments),t=`animation-`+e.name;return{name:t,styles:`@keyframes `+t+`{`+e.styles+`}`,anim:1,toString:function(){return`_EMO_`+this.name+`_`+this.styles+`_EMO_`}}}var Ln=function e(t){for(var n=t.length,r=0,i=``;r<n;r++){var a=t[r];if(a!=null){var o=void 0;switch(typeof a){case`boolean`:break;case`object`:if(Array.isArray(a))o=e(a);else for(var s in o=``,a)a[s]&&s&&(o&&(o+=` `),o+=s);break;default:o=a}o&&(i&&(i+=` `),i+=o)}}return i};function Rn(e,t,n){var r=[],i=on(e,r,n);return r.length<2?n:i+t(r)}var zn=function(e){var t=e.cache,n=e.serializedArr;return Tn(function(){for(var e=0;e<n.length;e++)cn(t,n[e],!1)}),null},Bn=Dn(function(e,t){var n=[],r=function(){var e=Sn([...arguments],t.registered);return n.push(e),sn(t,e,!1),t.key+`-`+e.name},i={css:r,cx:function(){var e=[...arguments];return Rn(t.registered,r,Ln(e))},theme:m.useContext(On)},a=e.children(i);return m.createElement(m.Fragment,null,m.createElement(zn,{cache:t,serializedArr:n}),a)}),Vn=Object.defineProperty,Hn=(e,t,n)=>t in e?Vn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Un=(e,t,n)=>Hn(e,typeof t==`symbol`?t:t+``,n),Wn=new Map,Gn=new WeakMap,Kn=0,qn=void 0;function Jn(e){return e?Gn.has(e)?Gn.get(e):(Kn+=1,Gn.set(e,Kn.toString()),Gn.get(e)):`0`}function Yn(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t===`root`?Jn(e.root):e[t]}`).toString()}function Xn(e){let t=Yn(e),n=Wn.get(t);if(!n){let r=new Map,i,a=new IntersectionObserver(t=>{t.forEach(t=>{var n;let a=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&t.isVisible===void 0&&(t.isVisible=a),(n=r.get(t.target))==null||n.forEach(e=>{e(a,t)})})},e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},Wn.set(t,n)}return n}function Zn(e,t,n={},r=qn){if(window.IntersectionObserver===void 0&&r!==void 0){let i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold==`number`?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:a,elements:o}=Xn(n),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(o.delete(e),a.unobserve(e)),o.size===0&&(a.disconnect(),Wn.delete(i))}}function Qn(e){return typeof e.children!=`function`}var $n=class extends m.Component{constructor(e){super(e),Un(this,`node`,null),Un(this,`_unobserveCb`,null),Un(this,`handleNode`,e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),Un(this,`handleChange`,(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),Qn(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:a}=this.props;this._unobserveCb=Zn(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},a)}unobserve(){this._unobserveCb&&=(this._unobserveCb(),null)}render(){let{children:e}=this.props;if(typeof e==`function`){let{inView:t,entry:n}=this.state;return e({inView:t,entry:n,ref:this.handleNode})}let{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:a,onChange:o,skip:s,trackVisibility:c,delay:l,initialInView:u,fallbackInView:d,...f}=this.props;return m.createElement(t||`div`,{ref:this.handleNode,...f},e)}};function er({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:a,skip:o,initialInView:s,fallbackInView:c,onChange:l}={}){let[u,d]=m.useState(null),f=m.useRef(l),[p,h]=m.useState({inView:!!s,entry:void 0});f.current=l,m.useEffect(()=>{if(o||!u)return;let s;return s=Zn(u,(e,t)=>{h({inView:e,entry:t}),f.current&&f.current(e,t),t.isIntersecting&&a&&s&&(s(),s=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},c),()=>{s&&s()}},[Array.isArray(e)?e.toString():e,u,i,r,a,o,n,c,t]);let g=p.entry?.target,_=m.useRef(void 0);!u&&g&&!a&&!o&&_.current!==g&&(_.current=g,h({inView:!!s,entry:void 0}));let v=[d,p.inView,p.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var tr=i((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.server_context`),l=Symbol.for(`react.forward_ref`),u=Symbol.for(`react.suspense`),d=Symbol.for(`react.suspense_list`),f=Symbol.for(`react.memo`),p=Symbol.for(`react.lazy`);function m(e){if(typeof e==`object`&&e){var m=e.$$typeof;switch(m){case t:switch(e=e.type,e){case r:case a:case i:case u:case d:return e;default:switch(e&&=e.$$typeof,e){case c:case s:case l:case p:case f:case o:return e;default:return m}}case n:return m}}}e.isFragment=function(e){return m(e)===r}})),nr=i(((e,t)=>{t.exports=tr()}))();$`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,$`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,$`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,$`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,$`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,$`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,$`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,$`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,$`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,$`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,$`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,$`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,$`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var rr=$`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,ir=$`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ar=$`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,or=$`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sr=$`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,cr=$`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lr=$`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ur=$`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,dr=$`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fr=$`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pr=$`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mr=$`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,hr=$`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function gr({duration:e=1e3,delay:t=0,timingFunction:n=`ease`,keyframes:r=cr,iterationCount:i=1}){return In`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function _r(e){return e==null}function vr(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`}function yr(e,t){return n=>n?e():t()}function br(e){return yr(e,()=>null)}function xr(e){return br(()=>({opacity:0}))(e)}var Sr=e=>{let{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:a=0,keyframes:o=cr,triggerOnce:s=!1,className:c,style:l,childClassName:u,childStyle:d,children:f,onVisibilityChange:p}=e,h=(0,m.useMemo)(()=>gr({keyframes:o,duration:i}),[i,o]);return _r(f)?null:vr(f)?Q(wr,{...e,animationStyles:h,children:String(f)}):(0,nr.isFragment)(f)?Q(Tr,{...e,animationStyles:h}):Q(Pn,{children:m.Children.map(f,(o,f)=>{if(!(0,m.isValidElement)(o))return null;let g=r+(t?f*i*n:0);switch(o.type){case`ol`:case`ul`:return Q(Bn,{children:({cx:t})=>Q(o.type,{...o.props,className:t(c,o.props.className),style:Object.assign({},l,o.props.style),children:Q(Sr,{...e,children:o.props.children})})});case`li`:return Q($n,{threshold:a,triggerOnce:s,onChange:p,children:({inView:e,ref:t})=>Q(Bn,{children:({cx:n})=>Q(o.type,{...o.props,ref:t,className:n(u,o.props.className),css:br(()=>h)(e),style:Object.assign({},d,o.props.style,xr(!e),{animationDelay:g+`ms`})})})});default:return Q($n,{threshold:a,triggerOnce:s,onChange:p,children:({inView:e,ref:t})=>Q(`div`,{ref:t,className:c,css:br(()=>h)(e),style:Object.assign({},l,xr(!e),{animationDelay:g+`ms`}),children:Q(Bn,{children:({cx:e})=>Q(o.type,{...o.props,className:e(u,o.props.className),style:Object.assign({},d,o.props.style)})})})})}})})},Cr={display:`inline-block`,whiteSpace:`pre`},wr=e=>{let{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:a=1e3,fraction:o=0,triggerOnce:s=!1,className:c,style:l,children:u,onVisibilityChange:d}=e,{ref:f,inView:p}=er({triggerOnce:s,threshold:o,onChange:d});return yr(()=>Q(`div`,{ref:f,className:c,style:Object.assign({},l,Cr),children:u.split(``).map((e,n)=>Q(`span`,{css:br(()=>t)(p),style:{animationDelay:i+n*a*r+`ms`},children:e},n))}),()=>Q(Tr,{...e,children:u}))(n)},Tr=e=>{let{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:a,children:o,onVisibilityChange:s}=e,{ref:c,inView:l}=er({triggerOnce:r,threshold:n,onChange:s});return Q(`div`,{ref:c,className:i,css:br(()=>t)(l),style:Object.assign({},a,xr(!l)),children:o})};$`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,$`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,$`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,$`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,$`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var Er=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Dr=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Or=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,kr=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Ar=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,jr=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Mr=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Nr=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Pr=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Fr=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Ir=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Lr=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Rr=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function zr(e,t,n){switch(n){case`bottom-left`:return t?Dr:ir;case`bottom-right`:return t?Or:ar;case`down`:return e?t?Ar:sr:t?kr:or;case`left`:return e?t?Mr:lr:t?jr:cr;case`right`:return e?t?Pr:dr:t?Nr:ur;case`top-left`:return t?Fr:fr;case`top-right`:return t?Ir:pr;case`up`:return e?t?Rr:hr:t?Lr:mr;default:return t?Er:rr}}var Br=e=>{let{big:t=!1,direction:n,reverse:r=!1,...i}=e;return Q(Sr,{keyframes:(0,m.useMemo)(()=>zr(t,r,n),[t,n,r]),...i})};$`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,$`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,$`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,$`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,$`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,$`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,$`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,$`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,$`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,$`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,$`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,$`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function Vr(){let{isDark:e}=(0,m.useContext)(T);return M||console.error(`podcastSection object for Podcast section is missing`),M.display?(0,E.jsx)(Br,{bottom:!0,duration:1e3,distance:`20px`,children:(0,E.jsxs)(`div`,{className:`main`,children:[(0,E.jsxs)(`div`,{className:`podcast-header`,children:[(0,E.jsx)(`h1`,{className:`podcast-header-title`,children:M.title}),(0,E.jsx)(`p`,{className:e?`dark-mode podcast-header-subtitle`:`subTitle podcast-header-subtitle`,children:M.subtitle})]}),(0,E.jsx)(`div`,{className:`podcast-main-div`,children:M.podcast.map(e=>(e||console.log(`Podcast link for ${M.title} is missing`),(0,E.jsx)(`div`,{children:(0,E.jsx)(`iframe`,{className:`podcast`,src:e,frameBorder:`0`,scrolling:`no`,sandbox:`allow-scripts allow-popups allow-popups-to-escape-sandbox`,title:`Podcast`})},`${M.title}-${e}`)))})]})}):null}function Hr({descBullets:e}){return e?e.map(e=>(0,E.jsx)(`li`,{className:`subTitle`,children:e},e)):null}function Ur({school:e}){let t=(0,m.useRef)(null),{isDark:n}=(0,m.useContext)(T);return e.logo||console.error(`Image of ${e.name} is missing in education section`),(0,E.jsx)(`div`,{children:(0,E.jsx)(Br,{direction:`left`,duration:1e3,children:(0,E.jsxs)(`div`,{className:`education-card`,children:[e.logo&&(0,E.jsx)(`div`,{className:`education-card-left`,children:(0,E.jsx)(`img`,{crossOrigin:`anonymous`,ref:t,className:`education-roundedimg`,src:e.logo,alt:e.schoolName})}),(0,E.jsxs)(`div`,{className:`education-card-right`,children:[(0,E.jsx)(`h5`,{className:`education-text-school`,children:e.schoolName}),(0,E.jsxs)(`div`,{className:`education-text-details`,children:[(0,E.jsx)(`h5`,{className:n?`dark-mode education-text-subHeader`:`education-text-subHeader`,children:e.subHeader}),(0,E.jsx)(`p`,{className:`${n?`dark-mode`:``} education-text-duration`,children:e.duration}),(0,E.jsx)(`p`,{className:`education-text-desc`,children:e.desc}),(0,E.jsx)(`div`,{className:`education-text-bullets`,children:(0,E.jsx)(`ul`,{children:(0,E.jsx)(Hr,{descBullets:e.descBullets})})})]})]})]})})})}function Wr(){return pe.display?(0,E.jsxs)(`div`,{className:`education-section`,id:`education`,children:[(0,E.jsx)(`h1`,{className:`education-heading`,children:`Education`}),(0,E.jsx)(`div`,{className:`education-card-container`,children:pe.schools.map(e=>(0,E.jsx)(Ur,{school:e},e.schoolName))})]}):null}function Gr(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById(`topButton`).style.visibility=`visible`:document.getElementById(`topButton`).style.visibility=`hidden`}function Kr(){document.body.scrollTop=0,document.documentElement.scrollTop=0}function qr(){return window.onscroll=function(){Gr()},window.onload=function(){Gr()},(0,E.jsx)(`button`,{type:`button`,onClick:Kr,id:`topButton`,title:`Go to top`,"aria-label":`Go to top`,children:(0,E.jsx)(`i`,{className:`fas fa-hand-point-up`,"aria-hidden":`true`})})}function Jr(){return null}var Yr=r({default:()=>Xr}),Xr,Zr=n((()=>{Xr=`/portfolio/assets/contactMailDark-e3VCw-5k.svg`}));function Qr(){let{isDark:e}=(0,m.useContext)(T);return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(`div`,{className:`main contact-margin-top`,id:`contact`,children:(0,E.jsxs)(`div`,{className:`contact-div-main`,children:[(0,E.jsxs)(`div`,{className:`contact-header`,children:[(0,E.jsx)(`h1`,{className:`heading contact-title`,children:N.title}),(0,E.jsx)(`p`,{className:e?`dark-mode contact-subtitle`:`subTitle contact-subtitle`,children:N.subtitle}),(0,E.jsxs)(`div`,{className:e?`dark-mode contact-text-div`:`contact-text-div`,children:[N.number&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`a`,{className:`contact-detail`,href:`tel:`+N.number,children:N.number}),(0,E.jsx)(`br`,{}),(0,E.jsx)(`br`,{})]}),(0,E.jsx)(`a`,{className:`contact-detail-email`,href:`mailto:`+N.email_address,children:N.email_address}),(0,E.jsx)(`br`,{}),(0,E.jsx)(`br`,{}),(0,E.jsx)(we,{})]})]}),(0,E.jsx)(`div`,{className:`contact-image-div`,children:fe.animated?(0,E.jsx)(P,{animationData:p}):(0,E.jsx)(`img`,{alt:`Man working`,src:(Zr(),t(Yr))})})]})})})}var $r=`modulepreload`,ei=function(e){return`/portfolio/`+e},ti={},ni=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=ei(t,n),t=s(t),t in ti)return;ti[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:$r,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ri=(0,m.lazy)(()=>ni(()=>import(`./GithubProfileCard-CBD0GVPL.js`),__vite__mapDeps([0,1,2,3,4])));function ii(){let e=ge.githubProfileData||null;return ge.display&&ge.showGithubProfile===`true`&&e?(0,E.jsx)(m.Suspense,{fallback:(0,E.jsx)(Ce,{}),children:(0,E.jsx)(ri,{prof:e},e.id)}):(0,E.jsx)(Qr,{})}function ai(){let{isDark:e}=(0,m.useContext)(T);return(0,E.jsxs)(`div`,{className:e?`dark-mode splash-container`:`splash-container`,children:[(0,E.jsx)(`div`,{className:`splash-animation-container`,children:(0,E.jsx)(P,{animationData:O.animation})}),(0,E.jsxs)(`div`,{className:`splash-title-container`,children:[(0,E.jsx)(`span`,{className:`grey-color`,children:` <`}),(0,E.jsx)(`span`,{className:`splash-title`,children:k.username}),(0,E.jsx)(`span`,{className:`grey-color`,children:`/>`})]})]})}var oi=(e,t)=>{let[n,r]=(0,m.useState)(()=>{try{let n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(e){return console.log(e),t}});return[n,t=>{try{let i=t instanceof Function?t(n):t;r(i),window.localStorage.setItem(e,JSON.stringify(i))}catch(e){console.log(e)}}]},si=()=>{let[e,t]=oi(`isDark`,window.matchMedia(`(prefers-color-scheme: dark)`).matches),[n,r]=(0,m.useState)(!0);return(0,m.useEffect)(()=>{if(O.enabled){let e=setTimeout(()=>r(!1),O.duration);return()=>{clearTimeout(e)}}},[]),(0,E.jsx)(`div`,{className:e?`dark-mode`:null,children:(0,E.jsxs)(ae,{value:{isDark:e,changeTheme:()=>{t(!e)}},children:[n&&O.enabled&&(0,E.jsx)(ai,{}),(0,E.jsxs)(`div`,{style:{display:n&&O.enabled?`none`:`block`},children:[(0,E.jsx)(xe,{}),(0,E.jsx)(Ee,{}),(0,E.jsx)(je,{}),(0,E.jsx)(Fe,{}),(0,E.jsx)(Wr,{}),(0,E.jsx)(Ge,{}),(0,E.jsx)(Ke,{}),(0,E.jsx)(qe,{}),(0,E.jsx)(Xe,{}),(0,E.jsx)(Qe,{}),(0,E.jsx)(tt,{}),(0,E.jsx)(Jr,{}),(0,E.jsx)(Vr,{}),(0,E.jsx)(ii,{}),(0,E.jsx)($e,{}),(0,E.jsx)(qr,{})]})]})})};function ci(){return(0,E.jsx)(`div`,{children:(0,E.jsx)(si,{})})}h.createRoot(document.getElementById(`root`)).render((0,E.jsx)(m.StrictMode,{children:(0,E.jsx)(ci,{})}));export{ie as i,we as n,N as r,Br as t};