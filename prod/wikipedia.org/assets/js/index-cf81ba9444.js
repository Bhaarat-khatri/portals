function addEvent(e,t,n){e&&(e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&(attachedEvents.push([e,t,n]),e.attachEvent("on"+t,n)))}function removeEvent(e,t,n){e&&(e.removeEventListener?e.removeEventListener(t,n):e.detachEvent&&e.detachEvent("on"+t,n))}function doWhenReady(e){var t=function(){removeEvent(document,"DOMContentLoaded",t),removeEvent(window,"load",t),e()};"complete"===document.readyState?e():(addEvent(document,"DOMContentLoaded",t),addEvent(window,"load",t))}function getIso639(e){var t=e&&e.match(/^\w+/);if(t)return t="nb"===t[0]?"no":t[0]}function getDevicePixelRatio(){return void 0!==window.devicePixelRatio?window.devicePixelRatio:void 0!==window.msMatchMedia?window.msMatchMedia("(min-resolution: 192dpi)").matches?2:window.msMatchMedia("(min-resolution: 144dpi)").matches?1.5:1:1}window.JSON||(window.JSON={parse:function(sJSON){return eval("("+sJSON+")")},stringify:function(){var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)},n={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},r=function(e){return n[e]||"\\u"+(e.charCodeAt(0)+65536).toString(16).substr(1)},o=/[\\"\u0000-\u001F\u2028\u2029]/g;return function i(n){if(null==n)return"null";if("number"==typeof n)return isFinite(n)?n.toString():"null";if("boolean"==typeof n)return n.toString();if("object"==typeof n){if("function"==typeof n.toJSON)return i(n.toJSON());if(t(n)){for(var a="[",s=0;s<n.length;s++)a+=(s?", ":"")+i(n[s]);return a+"]"}if("[object Object]"===e.call(n)){var c=[];for(var u in n)n.hasOwnProperty(u)&&c.push(i(u)+": "+i(n[u]));return"{"+c.join(", ")+"}"}}return'"'+n.toString().replace(o,r)+'"'}}()}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var n;if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),o=r.length>>>0;if(0===o)return-1;var i=+t||0;if(Math.abs(i)===1/0&&(i=0),i>=o)return-1;for(n=Math.max(i>=0?i:o-Math.abs(i),0);o>n;){if(n in r&&r[n]===e)return n;n++}return-1}),function(){window.document.querySelectorAll||(document.querySelectorAll=document.body.querySelectorAll=Object.querySelectorAll=function(e,t,n,r,o){var i=document,a=i.createStyleSheet();for(o=i.all,t=[],e=e.replace(/\[for\b/gi,"[htmlFor").split(","),n=e.length;n--;){for(a.addRule(e[n],"k:v"),r=o.length;r--;)o[r].currentStyle.k&&t.push(o[r]);a.removeRule(0)}return t})}(),document.querySelector||(document.querySelector=function(e){var t=document.querySelectorAll(e);return t.length?t[0]:null}),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,r=function(){},o=function(){return n.apply(this instanceof r?this:e,t.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(r.prototype=this.prototype),o.prototype=new r,o}),Object.defineProperty&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(Element.prototype,"textContent")&&!Object.getOwnPropertyDescriptor(Element.prototype,"textContent").get&&!function(){var e=Object.getOwnPropertyDescriptor(Element.prototype,"innerText");Object.defineProperty(Element.prototype,"textContent",{get:function(){return e.get.call(this)},set:function(t){return e.set.call(this,t)}})}(),window.Element&&!Element.prototype.matches&&(Element.prototype.matches=function e(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1}),window.attachedEvents=[],window.onunload=function(){var e,t;for(e=0;e<attachedEvents.length;e++)t=attachedEvents[e],t[0]&&t[0].detachEvent("on"+t[1],t[2]);attachedEvents=[]};var _=_||{};_.now=Date.now||function(){return(new Date).getTime()},_.throttle=function(e,t,n){var r,o,i,a=null,s=0;n||(n={});var c=function(){s=n.leading===!1?0:_.now(),a=null,i=e.apply(r,o),a||(r=o=null)};return function(){var u=_.now();s||n.leading!==!1||(s=u);var l=t-(u-s);return r=this,o=arguments,0>=l||l>t?(a&&(clearTimeout(a),a=null),s=u,i=e.apply(r,o),a||(r=o=null)):a||n.trailing===!1||(a=setTimeout(c,l)),i}},_.debounce=function(e,t,n){var r,o,i,a,s,c=function(){var u=_.now()-a;t>u&&u>=0?r=setTimeout(c,t-u):(r=null,n||(s=e.apply(i,o),r||(i=o=null)))};return function(){i=this,o=arguments,a=_.now();var u=n&&!r;return r||(r=setTimeout(c,t)),u&&(s=e.apply(i,o),i=o=null),s}};var mw=mw||{};mw.html=function(){function e(e){switch(e){case"'":return"&#039;";case'"':return"&quot;";case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;"}}return{escape:function(t){return t.replace(/['"<>&]/g,e)},element:function(e,t,n){var r,o,i="<"+e;for(o in t){if(r=t[o],r===!0)r=o;else if(r===!1)continue;i+=" "+o+'="'+this.escape(String(r))+'"'}if(void 0===n||null===n)return i+="/>";switch(i+=">",typeof n){case"string":i+=this.escape(n);break;case"number":case"boolean":i+=String(n);break;default:if(n instanceof this.Raw)i+=n.value;else{if(!(n instanceof this.Cdata))throw new Error("mw.html.element: Invalid type of contents");if(/<\/[a-zA-z]/.test(n.value))throw new Error("mw.html.element: Illegal end tag found in CDATA");i+=n.value}}return i+="</"+e+">"},Raw:function(e){this.value=e},Cdata:function(e){this.value=e}}}(),mw.storage={localStorage:window.localStorage,get:function(e){try{return mw.storage.localStorage.getItem(e)}catch(t){}return!1},set:function(e,t){try{return mw.storage.localStorage.setItem(e,t),!0}catch(n){}return!1},remove:function(e){try{return mw.storage.localStorage.removeItem(e),!0}catch(t){}return!1}},function(e){e.RegExp={escape:function(e){return e.replace(/([\\{}()|.?*+\-\^$\[\]])/g,"\\$1")}}}(mw),function(){"use strict";var e,t,n="http://bits.beta.wmflabs.org/event.gif",r=[];/www.wikipedia.org/.test(location.hostname)&&(n="//www.wikipedia.org/beacon/event"),t={extend:function(e,t){var n,r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&e[n]&&(r[n]=e[n]);for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&t[n]&&(r[n]=t[n]);return r},noop:function(){}};for(var o=0;256>o;o++)r[o]=(o+256).toString(16).slice(1);e=window.eventLoggingLite={schema:{},maxUrlSize:2e3,byteToHex:r,checkUrlSize:function(t,n){var r;return n.length>e.maxUrlSize?r="Url exceeds maximum length":void 0},generateRandomSessionId:function(){var t,n,r,o=new Array(8),i=window.crypto||window.msCrypto;if(i&&i.getRandomValues)t=new Uint8Array(8),i.getRandomValues(t);else for(t=new Array(8),n=0;8>n;n++)0===(3&n)&&(r=4294967296*Math.random()),t[n]=r>>>((3&n)<<3)&255;for(n=0;8>n;n++)o[n]=e.byteToHex[t[n]];return o.join("")},validate:function(e,t){var n,r,o,i=[];if(!t||!t.properties)return i.push("Missing or empty schema"),i;for(n in e)t.properties.hasOwnProperty(n)||i.push("Undeclared property: "+n);for(n in t.properties)o=t.properties[n],e.hasOwnProperty(n)?(r=e[n],o["enum"]&&o.required&&-1===o["enum"].indexOf(r)&&i.push('Value "'+JSON.stringify(r)+'" for property "'+n+'" is not one of '+JSON.stringify(o["enum"]))):o.required&&i.push("Missing property:",n);return i},prepare:function(n,r){for(var o=t.extend(n.defaults,r),i=e.validate(o,n);i.length;)console.log(i[i.length-1]),i.pop();return{event:o,revision:n.revision||-1,schema:n.name,webHost:location.hostname,wiki:"metawiki"}},makeBeaconUrl:function(e){var t=encodeURIComponent(JSON.stringify(e));return n+"?"+t+";"},sendBeacon:/1|yes/.test(navigator.doNotTrack)||!n?t.noop:navigator.sendBeacon?function(e){try{navigator.sendBeacon(e)}catch(t){}}:function(e){document.createElement("img").src=e},logEvent:function(t,n){var r=e.prepare(t,n),o=e.makeBeaconUrl(r),i=e.checkUrlSize(t,o);i||e.sendBeacon(o)}}}(),window.wmTest=function(e,t){"use strict";function n(){function e(e){var n=getIso639(e);n&&t.indexOf(n)<0&&t.push(n)}var t=[];for(var n in navigator.languages)e(navigator.languages[n]);return e(navigator.language),e(navigator.userLanguage),e(navigator.browserLanguage),e(navigator.systemLanguage),t}function r(e,t){var n=parseInt(e.slice(0,13),16);return n%t===0}function o(e){var t="rejected";return r(e,u)&&(t="baseline"),t}function i(){if(r(c,500)&&"rejected"===a||g){if(document.cookie.match(/hideBanner/)&&g===!1)return;var e=document.getElementById("js-survey-banner"),t=document.getElementById("js-survey-hide-banner");e.style.display="block";var n=function(){e.style.display="none";var t=new Date;t.setTime(t.getTime()+864e5),document.cookie="hideBanner=true; expires="+t.toUTCString()};addEvent(t,"click",n),g=!0}}var a,s,c=e.generateRandomSessionId(),u=2,l=9e5,d={GROUP:"portal_test_group",SESSION_ID:"portal_session_id",EXPIRES:"portal_test_group_expires"},g="survey-banner"===location.hash.slice(1);if(s=n(),/www.wikipedia.org/.test(location.hostname)&&(u=200),g)a=location.hash.slice(1);else if(window.localStorage&&!/1|yes/.test(navigator.doNotTrack)){var h=t.storage.get(d.GROUP),m=t.storage.get(d.SESSION_ID),p=t.storage.get(d.EXPIRES),f=(new Date).getTime();p&&m&&h&&f<parseInt(p,10)?(c=m,a="null"===h?null:h):(a=o(c),t.storage.set(d.SESSION_ID,c),t.storage.set(d.GROUP,a)),t.storage.set(d.EXPIRES,f+l)}else a="rejected";return i(),{loggingDisabled:g,sessionId:c,userLangs:s,group:a,populationSize:u,getTestGroup:o}}(eventLoggingLite,mw),function(e,t){"use strict";function n(e,t){var n,r,o={};for(n=0;n<t.length;n++){var i=t[n].nodes;for(r=0;r<i.length;r++)i[r].contains(e)&&(o=t[n])}return o.name}function r(e){return"A"!==e.tagName&&e.parentElement?r(e.parentElement):e}function o(){l={event_type:"landing"},e.logEvent(s,l),l=null}function i(t){var o,i=t||window.event,a=i.target||i.srcElement;a.matches("a, a *")&&(o=r(a),l={event_type:"clickthrough",destination:o.href,section_used:n(o,c)},l.section_used&&e.logEvent(s,l))}function a(t){var r=t||window.event,o=r.target||r.srcElement;null===l&&(l={event_type:"clickthrough",section_used:n(o,c),destination:o.action}),l.section_used&&e.logEvent(s,l)}var s,c,u,l,d=document.cookie.match(/GeoIP=.[^:]/);if("rejected"!==t.group&&!t.loggingDisabled){s={name:"WikipediaPortal",revision:14377354,defaults:{session_id:t.sessionId,event_type:"landing",referer:document.referrer||null,accept_language:t.userLangs.toString(),cohort:t.group},properties:{session_id:{type:"string",required:!0},event_type:{type:"string",required:!0,"enum":["landing","clickthrough"]},section_used:{type:"string",required:!1,"enum":["primary links","search","language search","secondary links","other languages","other projects"]},destination:{type:"string",required:!1},referer:{type:"string",required:!1},country:{type:"string",required:!1},accept_language:{type:"string",required:!0},cohort:{type:"string",required:!1}}},c=[{name:"primary links",nodes:document.querySelectorAll('[data-el-section="primary links"]')},{name:"search",nodes:document.querySelectorAll('[data-el-section="search"]')},{name:"language search",nodes:document.querySelectorAll('[data-el-section="language search"]')},{name:"secondary links",nodes:document.querySelectorAll('[data-el-section="secondary links"]')},{name:"other languages",nodes:document.querySelectorAll('[data-el-section="other languages"]')},{name:"other projects",nodes:document.querySelectorAll('[data-el-section="other projects"]')}],addEvent(document,"click",i),u=document.getElementsByTagName("form");for(var g=0;g<u.length;g++)addEvent(u[g],"submit",a);d&&(s.defaults.country=d.toString().split("=")[1],addEvent(window,"load",o)),addEvent(window,"load",o)}}(eventLoggingLite,wmTest);var WMTypeAhead=function(e,t){function n(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+"="+encodeURIComponent(e[n]));return t.join("&")}function r(){setTimeout(function(){m.innerHTML="";var e=document.getElementById("api_opensearch");e&&(e.src=!1),y.clear()},300)}function o(e,t){if(u=encodeURIComponent(t)||"en",l=encodeURIComponent(e),0===l.length)return void r();var o=document.getElementById("api_opensearch"),i=document.getElementsByTagName("head")[0],a="//"+u+".wikipedia.org/w/api.php?";o&&i.removeChild(o),o=document.createElement("script"),o.id="api_opensearch";var s=window.callbackStack.addCallback(window.portalOpensearchCallback),c={action:"query",format:"json",generator:"prefixsearch",prop:"pageprops|pageimages|pageterms",redirects:"",ppprop:"displaytitle",piprop:"thumbnail",pithumbsize:v,pilimit:w,wbptterms:"description",gpssearch:e,gpsnamespace:0,gpslimit:w,callback:"callbackStack.queue["+s+"]"};o.src=a+n(c),i.appendChild(o)}function i(e,t){var n=mw.html.escape(mw.RegExp.escape(t)),r=new RegExp(n,"i"),o=e.search(r),i=mw.html.escape(e);if(o>=0){var a=o+n.length,s=e.substring(o,a),c=e.substring(0,o),u=e.substring(a,e.length);i=c+mw.html.element("em",{"class":"suggestion-highlight"},s)+u}return i}function a(e){for(var t='<div class="suggestions-dropdown">',n=0;n<e.length;n++)if(e[n]){var r,o,a,s,c,d=e[n],g=!1,h="",m=d.terms&&d.terms.description?d.terms.description:"";d.thumbnail&&d.thumbnail.source&&(g=d.thumbnail.source.replace(/\"/g,"%22"),g=g.replace(/'/g,"%27")),m&&(h="object"==typeof m&&m[0]?m[0].toString():m.toString()),c=mw.html.element("p",{"class":"suggestion-description"},h),s=mw.html.element("h3",{"class":"suggestion-title"},new mw.html.Raw(i(d.title,l))),a=mw.html.element("div",{"class":"suggestion-text"},new mw.html.Raw(s+c)),o=mw.html.element("div",{"class":"suggestion-thumbnail",style:g?"background-image:url("+g+")":!1},""),r=mw.html.element("a",{"class":"suggestion-link",href:"https://"+u+".wikipedia.org/wiki/"+encodeURIComponent(d.title.replace(/ /gi,"_"))},new mw.html.Raw(a+o)),t+=r}return t+="</div>"}function s(e,t){for(var n=" active",r=0;r<t.length;r++){var o=t[r];o!==e?o.className=o.className.replace(n,""):/ active/.test(e.className)?e.className=e.className.replace(n,""):(e.className+=n,y.setIndex(r))}}function c(e){var t=e||window.event,n=t.which||t.keyCode;if(m.firstChild){if(40===n||38===n){var r,o=m.firstChild.childNodes;r=40===n?y.increment(1):y.increment(-1),g=o?o[r]:!1,s(g,o)}13===n&&g&&(t.preventDefault?t.preventDefault():t.returnValue=!1,g.children[0].click())}}var u,l,d,g,h="typeahead-suggestions",m=document.getElementById(h),p=document.getElementById(e),f=document.getElementById(t),v=80*getDevicePixelRatio(),w=6;m||(m=document.createElement("div"),m.id=h,p.appendChild(m)),window.callbackStack={queue:{},index:-1,incrementIndex:function(){return this.index+=1,this.index},addCallback:function(e){var t=this.incrementIndex();return this.queue[t]=e(t),t},deleteSelfFromQueue:function(e){delete this.queue[e]},deletePrevCallbacks:function(e){this.deleteSelfFromQueue(e);for(var t in this.queue)e>t&&(this.queue[t]=this.deleteSelfFromQueue.bind(window.callbackStack,t))}};var y={index:-1,max:w,setMax:function(e){this.max=e},increment:function(e){return this.index+=e,this.index<0&&this.setIndex(this.max-1),this.index===this.max&&this.setIndex(0),this.index},setIndex:function(e){return e<=this.max-1&&(this.index=e),this.index},clear:function(){this.setIndex(-1)}};return window.portalOpensearchCallback=function(e){var t=e;return function(e){if(window.callbackStack.deletePrevCallbacks(t),document.activeElement===f){var n=[],r=e.query&&e.query.pages?e.query.pages:[];for(var o in r){var i=r[o];n[i.index-1]=i}var c=a(n);y.setMax(n.length),y.clear(),m.innerHTML=c,d=m.childNodes[0].childNodes;for(var u=0;u<d.length;u++){var l=d[u];addEvent(l,"mouseenter",s.bind(this,l,d)),addEvent(l,"mouseleave",s.bind(this,l,d))}}}},addEvent(f,"keydown",c),addEvent(f,"blur",r),{typeAheadEl:m,query:o}};!function(e,t){var n,r=document.getElementById("searchInput"),o=new t("search-input","searchInput");n="oninput"in document?"input":"propertychange",addEvent(r,n,_.debounce(function(){o.query(r.value,document.getElementById("searchLanguage").value)},100))}(wmTest,WMTypeAhead),function(){"use strict";function e(e){return document.getElementById(e)}function t(e){var t,n;document.querySelector&&"www-wiktionary-org"===document.body.id&&!e.match(/\W/)&&(t=document.querySelector('option[lang|="'+e+'"]'),n=t&&t.getAttribute("data-logo"),n&&document.body.setAttribute("data-logo",n))}function n(){var e=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage||"";return e.toLowerCase().split("-")[0]}function r(){var e=document.cookie.match(/(?:^|\W)searchLang=([^;]+)/);return(e?e[1]:n()).toLowerCase()}function o(e,t){for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}function i(t){var n,r,i="data-convert-hans",a="data-converttitle-hans";if(-1!=="zh-hans,zh-cn,zh-sg,zh-my,".indexOf(t+",")){var s=["zh_art","zh_others","zh_search","zh_tag","zh_top10","zh-yue_wiki","gan_wiki","hak_wiki","wuu_wiki"];for(n=0;n<s.length;n+=1)r=e(s[n]),r&&(r.hasAttribute(i)&&o(r,r.getAttribute(i)),r.hasAttribute(a)&&(r.title=r.getAttribute(a)))}}function a(t){var n;0===t.indexOf("zh")&&(n=t.substring(3),"mo"===n?n="hk":"my"===n&&(n="sg"),n&&"cn,tw,hk,sg,".indexOf(n+",")>=0&&(e("zh_wiki").href+="zh-"+n+"/",e("zh_others").href=e("zh_others").href.replace("wiki/","zh-"+n+"/")),i(t))}function s(e){if(e){var r=n(),o=r.match(/^\w+/),i=new Date;t(e),o&&o[0]===e?i.setTime(i.getTime()-1):i.setFullYear(i.getFullYear()+1),document.cookie="searchLang="+e+";expires="+i.toUTCString()+";domain="+location.host+";"}}function c(e,t){var n,r,o,i,a={ratio:1};for(n=t.split(/ *, */),o=0;o<n.length;o++)r=n[o].match(/\s*(\S+)(?:\s*([\d.]+)w)?(?:\s*([\d.]+)h)?(?:\s*([\d.]+)x)?\s*/),i=r[4]&&parseFloat(r[4]),e>=i&&i>a.ratio&&(a.ratio=i,a.src=r[1],a.width=r[2]&&parseFloat(r[2]),a.height=r[3]&&parseFloat(r[3]));return a}function u(){var e,t,n=getDevicePixelRatio(),r=new Image;if(n>1&&void 0===r.srcset)for(e=document.getElementsByTagName("img"),t=0;t<e.length;t++){var o,i=e[t],a=i.getAttribute("srcset");"string"==typeof a&&""!==a&&(o=c(n,a),void 0!==o.src&&(i.setAttribute("src",o.src),void 0!==o.width&&i.setAttribute("width",o.width),void 0!==o.height&&i.setAttribute("height",o.height)))}}doWhenReady(function(){var n,i,s,c,u,l,d,g,h,m=r();if(m&&(a(m),n=getIso639(m),i=e("searchLanguage"))){for(s=i.getElementsByTagName("option"),c=0,u=s.length;!l&&u>c;c+=1)s[c].value===n&&(l=n);!l&&document.querySelector&&(d=document.querySelector('.langlist a[lang|="'+n+'"]'),d&&(l=n,g=document.createElement("option"),g.setAttribute("lang",n),g.setAttribute("value",n),h=d.textContent||d.innerText||n,o(g,h),i.appendChild(g))),l&&(i.value=l,t(l))}}),doWhenReady(function(){var t,n,r,o=e("searchInput"),i=e("searchLanguage");if(o)for(o.setAttribute("results","10"),void 0===o.autofocus?o.focus():window.scroll(0,0),t=location.search&&location.search.substr(1).split("&"),n=0;n<t.length;n+=1)if(r=t[n].split("="),"search"===r[0]&&r[1]){o.value=decodeURIComponent(r[1].replace(/\+/g," "));break}addEvent(i,"change",function(){i.blur(),s(i.value)})}),doWhenReady(function(){var e=document.searchwiki&&document.searchwiki.elements.uselang;e&&(e.value=n())}),doWhenReady(u)}(),window.mw||(window.mw=window.mediaWiki={loader:{state:function(){}}});