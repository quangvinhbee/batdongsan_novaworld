var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(k){var g=0;return function(){return g<k.length?{done:!1,value:k[g++]}:{done:!0}}};$jscomp.arrayIterator=function(k){return{next:$jscomp.arrayIteratorImpl(k)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(k,g,b){if(k==Array.prototype||k==Object.prototype)return k;k[g]=b.value;return k};$jscomp.getGlobal=function(k){k=["object"==typeof globalThis&&globalThis,k,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var g=0;g<k.length;++g){var b=k[g];if(b&&b.Math==Math)return b}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(k,g){var b=$jscomp.propertyToPolyfillSymbol[g];if(null==b)return k[g];b=k[b];return void 0!==b?b:k[g]};
$jscomp.polyfill=function(k,g,b,r){g&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(k,g,b,r):$jscomp.polyfillUnisolated(k,g,b,r))};$jscomp.polyfillUnisolated=function(k,g,b,r){b=$jscomp.global;k=k.split(".");for(r=0;r<k.length-1;r++){var t=k[r];if(!(t in b))return;b=b[t]}k=k[k.length-1];r=b[k];g=g(r);g!=r&&null!=g&&$jscomp.defineProperty(b,k,{configurable:!0,writable:!0,value:g})};
$jscomp.polyfillIsolated=function(k,g,b,r){var t=k.split(".");k=1===t.length;r=t[0];r=!k&&r in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var c=0;c<t.length-1;c++){var x=t[c];if(!(x in r))return;r=r[x]}t=t[t.length-1];b=$jscomp.IS_SYMBOL_NATIVE&&"es6"===b?r[t]:null;g=g(b);null!=g&&(k?$jscomp.defineProperty($jscomp.polyfills,t,{configurable:!0,writable:!0,value:g}):g!==b&&(void 0===$jscomp.propertyToPolyfillSymbol[t]&&(b=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[t]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(t):$jscomp.POLYFILL_PREFIX+b+"$"+t),$jscomp.defineProperty(r,$jscomp.propertyToPolyfillSymbol[t],{configurable:!0,writable:!0,value:g})))};$jscomp.initSymbol=function(){};
$jscomp.polyfill("Symbol",function(k){if(k)return k;var g=function(c,x){this.$jscomp$symbol$id_=c;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:x})};g.prototype.toString=function(){return this.$jscomp$symbol$id_};var b="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",r=0,t=function(c){if(this instanceof t)throw new TypeError("Symbol is not a constructor");return new g(b+(c||"")+"_"+r++,c)};return t},"es6","es3");
$jscomp.polyfill("Symbol.iterator",function(k){if(k)return k;k=Symbol("Symbol.iterator");for(var g="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),b=0;b<g.length;b++){var r=$jscomp.global[g[b]];"function"===typeof r&&"function"!=typeof r.prototype[k]&&$jscomp.defineProperty(r.prototype,k,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return k},"es6",
"es3");$jscomp.iteratorPrototype=function(k){k={next:k};k[Symbol.iterator]=function(){return this};return k};$jscomp.iteratorFromArray=function(k,g){k instanceof String&&(k+="");var b=0,r=!1,t={next:function(){if(!r&&b<k.length){var c=b++;return{value:g(c,k[c]),done:!1}}r=!0;return{done:!0,value:void 0}}};t[Symbol.iterator]=function(){return t};return t};
$jscomp.polyfill("Array.prototype.values",function(k){return k?k:function(){return $jscomp.iteratorFromArray(this,function(g,b){return b})}},"es8","es3");
(function(k,g){"function"===typeof define&&define.amd?define([],g(k)):"object"===typeof exports?module.exports=g(k):k.contactUs=g(k)})("undefined"!==typeof global?global:this.window||this.global,function(k){var g={},b=null,r=!1,t=!!document.querySelector&&!!k.addEventListener,c,x=[],U,N,J=!1,y=!1,E=!1,z=!1,O=null,G=null,P=[],Q=null,V=null,W=null,ja={rootElementId:"contactus",activated:!1,pluginVersion:"2.3.3",wordpressPluginVersion:!1,align:"right",mode:"regular",visible:!0,countdown:0,drag:!1,online:null,
buttonText:"Contact us",buttonSize:"large",buttonIconSize:24,menuSize:"normal",buttonIcon:'<svg width="20" height="20" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-825 -308)"><g><path transform="translate(825 308)" fill="#FFFFFF" d="M 19 4L 17 4L 17 13L 4 13L 4 15C 4 15.55 4.45 16 5 16L 16 16L 20 20L 20 5C 20 4.45 19.55 4 19 4ZM 15 10L 15 1C 15 0.45 14.55 0 14 0L 1 0C 0.45 0 0 0.45 0 1L 0 15L 4 11L 14 11C 14.55 11 15 10.55 15 10Z"/></g></g></svg>',
reCaptcha:!1,reCaptchaAction:"callbackRequest",reCaptchaKey:"",errorMessage:"Connection error. Please try again.",showMenuHeader:!1,menuHeaderText:"How would you like to contact us?",menuSubheaderText:"",menuHeaderLayout:"icon-center",layout:"default",itemsHeader:"Start chat with:",menuHeaderIcon:null,menuHeaderTextAlign:"center",menuHeaderOnline:!0,showHeaderCloseBtn:!0,menuInAnimationClass:"show-messageners-block",menuOutAnimationClass:"",headerCloseBtnBgColor:"#787878",headerCloseBtnColor:"#FFFFFF",
items:[],itemsIconType:"rounded",iconsAnimationSpeed:800,iconsAnimationPause:2E3,promptPosition:"side",style:null,itemsAnimation:null,popupAnimation:"scale",forms:{},theme:"#000000",subMenuHeaderBackground:"#FFFFFF",subMenuHeaderColor:"#FFFFFF",closeIcon:'<svg width="12" height="13" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-4087 108)"><g><path transform="translate(4087 -108)" fill="currentColor" d="M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z"></path></g></g></svg>',
backIcon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" class=""></path></svg>',credits:!0,creditsUrl:"https://anychat.one?utm_source=widget"},X=function(a,d,f){if("[object Object]"===
Object.prototype.toString.call(a))for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&d.call(f,a[e],e,a);else{e=0;for(var l=a.length;e<l;e++)d.call(f,a[e],e,a)}},ka=function(a,d){var f={};X(a,function(e,l){f[l]=a[l]});X(d,function(e,l){f[l]=d[l]});return f},la=function(){var a=h("div",{classes:["messangers-block","arcuAnimated"]}),d=h("div",{classes:["messangers-list-container"]});if("personal"==c.layout){var f=h("div",{classes:["arcu-items-header"]},c.itemsHeader),e=h("div",{classes:["arcu-wellcome"]});
d.append(e);d.append(f)}f=h("ul",{classes:["messangers-list"]});c.itemsAnimation&&f.classList.add("arcu-"+c.itemsAnimation);"normal"!==c.menuSize&&"large"!==c.menuSize||a.classList.add("lg");"small"===c.menuSize&&a.classList.add("sm");Y(f,c.items);if(c.showMenuHeader){e=h("div",{classes:["arcu-menu-header","arcu-"+c.menuHeaderLayout],style:c.theme?"background-color:"+c.theme:null});var l=h("div",{classes:["arcu-menu-header-content","arcu-text-"+c.menuHeaderTextAlign]},c.menuHeaderText);if(c.menuHeaderIcon){var n=
h("div",{classes:["arcu-header-icon"]});c.menuHeaderIcon.match(/^https?:\/\//)?(n.style.cssText="background-image: url("+c.menuHeaderIcon+")",n.classList.add("arcu-bg-image")):n.append(w(c.menuHeaderIcon));if(null!==c.menuHeaderOnline){var q=h("div",{classes:["arcu-online-badge",c.menuHeaderOnline?"online":"offline"],style:"border-color: "+c.theme});n.append(q)}e.append(n)}e.append(l);c.menuSubheaderText&&(l=h("div",{classes:["arcu-menu-subheader","arcu-text-"+c.menuHeaderTextAlign]},c.menuSubheaderText),
e.append(l));c.showHeaderCloseBtn&&(l=h("div",{classes:["arcu-header-close"],style:"color:"+c.headerCloseBtnColor+"; background:"+c.headerCloseBtnBgColor}),l.append(w(c.closeIcon)),e.append(l));a.append(e);a.classList.add("has-header")}"rounded"==c.itemsIconType?f.classList.add("rounded-items"):f.classList.add("not-rounded-items");d.append(f);a.append(d);"elastic"==c.style?(f='<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none"><path d="M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z"/></svg>',
e=h("div",{classes:["arcu-morph-shape"],id:"arcu-morph-shape","data-morph-open":"M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z"}),e.append(f),a.append(e)):"bubble"==c.style&&(f='<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none"><path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z"></path><defs></defs></svg>',e=h("div",{classes:["arcu-morph-shape"],id:"arcu-morph-shape","data-morph-open":"M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z"}),
e.append(f),a.append(e));c.credits&&(f=h("div",{classes:["arcu-creds"]}),f.innerHTML='powered by <a href="'+c.creditsUrl+'" target="_blank">anychat.one</a>',d.append(f));b.append(a)},ma=function(){var a=h("div",{classes:["popups-block","arcuAnimated"]}),d=h("div",{classes:["popups-list-container"]}),f;for(f in x){var e=x[f];if("object"===typeof e){var l=h("div",{classes:["arcu-popup"],id:"arcu-popup-"+e.id}),n=h("div",{classes:["arcu-popup-header"],style:c.theme?"background-color:"+c.theme:null}),
q=h("div",{classes:["arcu-popup-close"],style:c.theme?"background-color:"+c.theme:null}),p=h("div",{classes:["arcu-popup-back"],style:c.theme?"background-color:"+c.theme:null});q.append(w(c.closeIcon));p.append(w(c.backIcon));n.innerHTML=e.title;n.append(q);n.append(p);q=h("div",{classes:["arcu-popup-content"]});q.innerHTML=e.popupContent;l.append(n);l.append(q);d.append(l)}}a.append(d);b.append(a)},na=function(){var a=h("div",{classes:["arcontactus-message-button"],style:A()});"large"===c.buttonSize&&
b.classList.add("lg");"huge"===c.buttonSize&&b.classList.add("hg");"medium"===c.buttonSize&&b.classList.add("md");"small"===c.buttonSize&&b.classList.add("sm");var d=h("div",{classes:["static"]}),f=h("div",{classes:["img-"+c.buttonIconSize]});f.append(w(c.buttonIcon));!1!==c.buttonText?f.append(w("<p>"+c.buttonText+"</p>")):a.classList.add("no-text");d.append(f);f=h("div",{classes:["icons","arcu-hide"]});var e=h("div",{classes:["icons-line"]});for(q in c.items){var l=c.items[q];if("object"===typeof l&&
l.includeIconToSlider){var n=h("span",{style:R()});n.append(w(l.icon));e.append(n)}}f.append(e);var q=h("div",{classes:["arcontactus-close"]});q.append(w(c.closeIcon));e=h("div",{classes:["pulsation"],style:A()});l=h("div",{classes:["pulsation"],style:A()});a.append(d);a.append(f);a.append(q);a.append(e);a.append(l);b.append(a)},Y=function(a,d){for(var f in d){var e=d[f];if("object"===typeof e){var l=h("li",{});if("_popup"==e.href){x.push(e);var n=h("div",{classes:["messanger","arcu-popup-link",e.class?
e.class:""],title:e.title,"data-id":e.id?e.id:null})}else n=h("a",{classes:["messanger",e.class?e.class:"",e.addons?"has-addon":""],id:e.id?e.id:null,rel:"nofollow noopener",href:e.href,title:e.title,target:e.target?e.target:"_blank"});e.onClick&&n.addEventListener("click",e.onClick);if(e.addons)for(var q in e.addons){var p=e.addons[q],m=h("a",{href:p.href,title:p.title?p.title:null,target:p.target?p.target:"_blank",classes:[p.class?p.class:"arcu-addon"],style:(p.color?"color:"+p.color:null)+"; background-color: transparent"});
if(p.icon)if(0===p.icon.indexOf("<"))m.append(w(p.icon));else if(-1===p.icon.indexOf("<")){var u=h("img",{src:p.icon});m.append(u)}p.onClick&&m.addEventListener("click",p.onClick);n.append(m)}u="rounded"==c.itemsIconType?e.noContainer?h("span",{style:e.color?"color:"+e.color+"; fill: "+e.color:null,classes:["no-container"]}):h("span",{style:e.color&&!e.noContainer?"background-color:"+e.color:null}):this.noContainer?h("span",{style:e.color?"color:"+e.color+"; fill: "+e.color:null,classes:["no-container"]}):
h("span",{style:(e.color&&!e.noContainer?"color:"+e.color:null)+"; background-color: transparent"});"undefined"!==typeof e.online&&null!==e.online&&(p=h("div",{classes:["arcu-online-badge",!0===e.online?"online":"offline"]}),u.append(p));u.append(w(e.icon));n.append(u);u=h("div",{classes:["arcu-item-label"]});p=h("div",{classes:["arcu-item-title"]},e.title);u.append(p);"undefined"!=typeof e.subTitle&&e.subTitle&&(p=h("div",{classes:["arcu-item-subtitle"]},e.subTitle),u.append(p));n.append(u);l.append(n);
a.append(l);if(e.items){var v=e.id;n=h("div",{classes:["arcu-submenu-header"],style:"background-color:"+c.subMenuHeaderBackground+"; color: "+e.subMenuHeaderIconColor});u=h("div",{classes:["arcu-submenu-title","arcu-text-"+e.subMenuHeaderTextAlign],style:"color:"+c.subMenuHeaderColor});u.innerHTML=e.subMenuHeader?e.subMenuHeader:e.title;p=h("div",{classes:["arcu-submenu-back"],style:"color:"+c.subMenuHeaderColor+"; fill: "+c.subMenuHeaderColor,"data-erl":v},c.backIcon);p.addEventListener("click",
function(){Z({id:"#"+v})});n.append(p);e.subMenuHeaderIcon&&n.append(w(e.subMenuHeaderIcon));n.append(u);u=h("div",{classes:["arcu-submenu-container"]});p=h("ul",{classes:["arcu-submenu"]});u.append(n);u.append(p);Y(p,e.items);l.append(u)}}}},aa=function(a,d){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||
function(e){e=(this.document||this.ownerDocument).querySelectorAll(e);for(var l=e.length;0<=--l&&e.item(l)!==this;);return-1<l});for(var f=[];a&&a!==document;a=a.parentNode)d?a.matches(d)&&f.push(a):f.push(a);return f},Z=function(a){b.querySelector(".arcu-submenu-header").classList.add("active");a=b.querySelector(a.id);a.parentElement.classList.remove("active");a.parentElement.querySelector(".arcu-submenu-container").classList.remove("active");a.parentElement.querySelector(".arcu-submenu-header").classList.add("active");
b.querySelectorAll(".arcu-submenu-header").forEach(function(d){d.classList.remove("active")});b.querySelectorAll(".arcu-submenu").forEach(function(d){d.classList.remove("active")});b.querySelector(".arcu-submenu-container.active")?(b.querySelector(".arcu-submenu-container.active > .arcu-submenu-header").classList.add("active"),b.querySelector(".arcu-submenu-container.active > .arcu-submenu").classList.add("active")):b.querySelector(".messangers-list").classList.remove("arcu-submenu-active")},oa=function(a){b.querySelectorAll(".arcu-submenu-container").forEach(function(e){e.classList.remove("active")});
b.querySelectorAll(".arcu-submenu-container .arcu-submenu").forEach(function(e){e.classList.remove("active")});b.querySelectorAll(".messangers-list li").forEach(function(e){e.classList.remove("active")});b.querySelector(".messangers-list").classList.add("arcu-submenu-active");b.querySelectorAll(".arcu-submenu-header").forEach(function(e){e.classList.remove("active")});var d=b.querySelector(a.id);d.parentElement.querySelector(".arcu-submenu-container").classList.add("active");d.parentElement.querySelector(".arcu-submenu-container").classList.add("animated");
d.parentElement.querySelector(".arcu-submenu-container > .arcu-submenu").classList.add("active");setTimeout(function(){d.parentElement.querySelector(".arcu-submenu-container").classList.remove("animated")},300);if(a=aa(d,".arcu-submenu-container"))for(var f in a)a[f].classList.add("active");if(a=aa(d.parentElement,"li"))for(f in a)a[f].classList.add("active");d.parentElement.classList.add("active");d.parentElement.querySelector(".arcu-submenu-container > .arcu-submenu-header").classList.add("active")},
ba=function(a){if(!b.querySelector("#arcu-form-"+a))return console.error("Form not found: "+a),!1;z=!0;C(!1);b.classList.add("open");b.querySelector(".arcu-forms-container").classList.add("active");b.querySelector(".arcu-form-container.active")&&b.querySelector(".arcu-form-container.active").classList.remove("active");b.querySelector("#arcu-form-"+a).classList.add("active");b.querySelector("#form-icon-"+a)&&(b.querySelector("#form-icon-"+a).classList.add("active"),b.querySelector(".arcontactus-message-button .static").classList.add("arcu-hide"));
!1===c.visible&&g.show();a=new CustomEvent("arcontactus.showForm",{detail:{id:a}});b.dispatchEvent(a)},S=function(){b.querySelector(".arcu-forms-container").classList.remove("active");b.querySelectorAll(".form-icon")&&b.querySelectorAll(".form-icon").forEach(function(d){d.classList.remove("active")});b.querySelector(".arcontactus-message-button .static").classList.remove("arcu-hide");z=!1;setTimeout(function(){y||b.classList.remove("open");b.querySelector(".arcu-form-success.active")&&b.querySelector(".arcu-form-success.active").classList.remove("active");
b.querySelector(".arcu-form-error.active")&&b.querySelector(".arcu-form-error.active").classList.remove("active");B()},150);!1===c.visible&&g.hide();var a=new Event("arcontactus.hideForm");b.dispatchEvent(a)},w=function(a){if("string"===typeof a){var d=document.createElement("template");a=a.trim();d.innerHTML=a;return d.content.firstChild}},A=function(a){return"undefined"!==typeof a?"background-color: "+a:"background-color: "+c.theme},R=function(a){return"undefined"!==typeof a?"color: "+a:"color: "+
c.theme},h=function(a,d,f){a=document.createElement(a);if(d){if(d.classes&&"object"===typeof d.classes)for(var e in d.classes)d.classes[e]&&"string"===typeof d.classes[e]&&a.classList.add(d.classes[e]);for(e in d)"classes"!==e&&d[e]&&"string"===typeof d[e]&&a.setAttribute(e,d[e])}"undefined"!==typeof f&&(a.innerHTML=f);return a},pa=function(){var a=h("div",{classes:["arcu-forms-container"]}),d=h("div",{classes:["arcu-close"],style:"background-color:"+c.theme+"; color: #FFFFFF"},c.closeIcon);a.append(d);
for(var f in c.forms)if(d=c.forms[f],"object"===typeof d){if(d.icon){var e=h("div",{id:"form-icon-"+f,classes:["form-icon"]});e.append(w(d.icon));var l=b.querySelector(".arcontactus-message-button");l&&l.append(e)}e=h("div",{classes:["arcu-form-container"],id:"arcu-form-"+f});l="undefined"!==typeof d.action?h("form",{action:d.action,method:"POST",classese:["arcu-form"],"data-id":f}):h("div",{classes:["arcu-form"]});if("string"==typeof d.header){var n=h("div",{classes:["arcu-form-header"],style:A()},
d.header);l.append(n)}else if("object"==typeof d.header){n=h("div",{classes:["arcu-form-header",d.header.layout],style:A()});var q=h("div",{classes:["arcu-form-header-content"]},d.header.content),p=h("div",{classes:["arcu-form-header-icon"]},d.header.icon);n.append(p);n.append(q);l.append(n)}n=void 0;q=d;p=l;for(n in q.fields){var m=q.fields[n];if("object"===typeof m){var u=h("div",{classes:["arcu-form-group","arcu-form-group-type-"+m.type,"arcu-form-group-"+m.name,m.required?"arcu-form-group-required":
""]}),v="input";switch(m.type){case "textarea":v="textarea";break;case "dropdown":v="select"}if(m.label){var D=h("div",{classes:["arcu-form-label"]}),K=h("label",{for:"arcu-field-"+q.id+"-"+m.name},m.label);D.append(K);u.append(D)}v=h(v,{name:m.name,classes:["arcu-form-field","arcu-field-"+m.name],required:m.required,type:"dropdown"==m.type?null:m.type,id:"arcu-field-"+q.id+"-"+m.name,value:m.value?m.value:""});"textarea"==m.type&&m.value&&(v.innerHTML=m.value);m.placeholder&&v.setAttribute("placeholder",
m.placeholder);"undefined"!=typeof m.maxlength&&v.setAttribute("maxlength",m.maxlength);if("dropdown"==m.type)for(var H in m.values)D=m.values[H],K=m.values[H],"object"==typeof m.values[H]&&(D=m.values[H].value,K=m.values[H].label),D=h("option",{value:D},K),v.append(D);u.append(v);u.append(h("div",{classes:["arcu-form-field-errors"]}));p.append(u)}}n=void 0;q=d;p=l;for(n in q.buttons)if(m=q.buttons[n],"object"===typeof m){u=h("div",{classes:["arcu-form-group","arcu-form-button"]});v="";"undefined"!=
typeof m.class&&(v=m.class);if(-1!==["button","submit"].indexOf(m.type))var L=h("button",{id:"arcu-button-"+m.id,classes:["arcu-button",v],type:m.type,style:A(m.background)+";"+(m.color?R(m.color):"")});else"a"==m.type&&(L=h("a",{id:"arcu-button-"+m.id,classes:["arcu-button",v],href:m.href,type:m.type,style:A(m.background)+";"+(m.color?R(m.color):"")}));m.onClick&&L.addEventListener("click",m.onClick);L.innerHTML=m.label;u.append(L);p.append(u)}e.append(l);"string"==typeof d.success&&(l=h("div",{classes:["arcu-form-success"]}),
n=h("div",{},d.success),l.append(n),e.append(l));"string"==typeof d.error&&(l=h("div",{classes:["arcu-form-error"]}),d=h("div",{},d.error),l.append(d),e.append(l));a.append(e)}b.append(a)},qa=function(){var a=h("div",{classes:["arcontactus-prompt","arcu-prompt-"+c.promptPosition]}),d=h("div",{classes:["arcontactus-prompt-close"],style:A()+"; color: #FFFFFF"});d.append(w(c.closeIcon));var f=h("div",{classes:["arcontactus-prompt-inner"]});a.append(d);a.append(f);b.append(a)},ca=function(){F();I()},
ra=function(){b.querySelector(".arcontactus-message-button").addEventListener("click",function(d){if("regular"==c.mode)y||E||z?(y&&F(),E&&I()):M();else if("single"==c.mode){var f=b.querySelector(".messangers-list li:first-child a");f.getAttribute("href")||f.click()}else ba("callback");d.preventDefault()});document.addEventListener("click",ca);b.addEventListener("click",function(d){d.stopPropagation();if(d.target.classList.contains("arcu-popup-link")||d.target.closest(".arcu-popup-link")){var f=(d.target.classList.contains("arcu-popup-link")?
d.target:d.target.closest(".arcu-popup-link")).getAttribute("data-id");da(f)}(d.target.classList.contains("arcu-header-close")||d.target.closest(".arcu-header-close"))&&F();(d.target.classList.contains("arcu-popup-close")||d.target.closest(".arcu-popup-close"))&&I();if(d.target.classList.contains("arcu-popup-back")||d.target.closest(".arcu-popup-back"))I(),M()});b.querySelector(".call-back")&&b.querySelector(".call-back").addEventListener("click",function(d){openCallbackPopup()});b.querySelector(".arcu-close")&&
b.querySelector(".arcu-close").addEventListener("click",function(){null!=O&&(clearInterval(O),O=null);S()});b.querySelector(".arcontactus-prompt-close")&&b.querySelector(".arcontactus-prompt-close").addEventListener("click",function(){T()});var a=b.querySelectorAll(".arcu-form-container form");a&&a.forEach(function(d){d.addEventListener("submit",function(f){f.preventDefault();d.parentElement.classList.add("ar-loading");c.reCaptcha?grecaptcha.execute(c.reCaptchaKey,{action:c.reCaptchaAction}).then(function(e){d.querySelector(".ar-g-token").value=
e;ea(d)}):ea(d)})});setTimeout(function(){fa()},500);window.addEventListener("hashchange",function(d){fa()})},ea=function(a){var d=new CustomEvent("arcontactus.beforeSendFormData",{detail:{form:a}});b.dispatchEvent(d);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE){if(200==f.status)if(a.parentElement.classList.remove("ar-loading"),ha(a),l=JSON.parse(f.responseText),l.success){a.parentElement.querySelector(".arcu-form-success").classList.add("active");
a.parentElement.querySelector(".arcu-form-error").classList.remove("active");var n=new CustomEvent("arcontactus.successSendFormData",{detail:{form:a,data:l}})}else{if(l.errors&&(n=l,0==n.success))for(var q in n.errors)a.querySelector(".arcu-form-group-"+q)&&(a.querySelector(".arcu-form-group-"+q).classList.add("has-error"),a.querySelector(".arcu-form-group-"+q).querySelector(".arcu-form-field-errors").innerHTML=n.errors[q].join("<br/>"));n=new CustomEvent("arcontactus.errorSendFormData",{detail:{form:a,
data:l}})}else ha(a),a.parentElement.querySelector(".arcu-form-success")&&a.parentElement.querySelector(".arcu-form-success").classList.remove("active"),a.parentElement.querySelector(".arcu-form-error")&&a.parentElement.querySelector(".arcu-form-error").classList.add("active"),a.parentElement.classList.remove("ar-loading"),alert(c.errorMessage),n=new CustomEvent("arcontactus.errorSendFormData",{detail:{form:a,data:null}});b.dispatchEvent(n)}};d=a.getAttribute("action");var e=a.getAttribute("method"),
l=new FormData(a);f.open(e,d,!0);f.send(l)},ha=function(a){a.querySelectorAll(".arcu-form-group.has-error").forEach(function(d){d.classList.remove("has-error")})},fa=function(){switch(window.location.hash){case "#callback-form":case "callback-form":g.showForm("callback");break;case "#callback-form-close":case "callback-form-close":g.hideForm();break;case "#contactus-menu":case "contactus-menu":g.openMenu();break;case "#contactus-menu-close":case "contactus-menu-close":g.closeMenu();break;case "#contactus-hide":case "contactus-hide":g.hide();
break;case "#contactus-show":case "contactus-show":g.show()}},da=function(a){F();b.querySelector("#arcu-popup-"+a).classList.add("show-messageners-block");b.querySelector("#arcu-popup-"+a).classList.contains("popup-opened")||(C(!1),b.classList.add("popup-opened"),b.querySelector("#arcu-popup-"+a).classList.add(c.menuInAnimationClass),b.querySelector(".arcontactus-close").classList.add("show-messageners-block"),b.querySelector(".static").classList.add("arcu-hide"),b.querySelector(".icons").classList.add("arcu-hide"),
b.querySelector(".pulsation").classList.add("stop"),E=!0,!1===c.visible&&g.show(),a=new Event("arcontactus.openPopup"),b.dispatchEvent(a))},I=function(){if(b.querySelector(".arcu-popup.show-messageners-block")){setTimeout(function(){b.classList.remove("popup-opened")},150);b.querySelector(".arcu-popup.show-messageners-block").classList.remove(c.menuInAnimationClass);c.menuOutAnimationClass&&b.querySelector(".arcu-popup.show-messageners-block").classList.add(c.menuOutAnimationClass);setTimeout(function(){b.classList.remove("popup-opened");
B()},150);b.querySelector(".arcontactus-close").classList.remove("show-messageners-block");b.querySelector(".static").classList.remove("arcu-hide");E=!1;!1===c.visible&&g.hide();var a=new Event("arcontactus.closePopup");b.dispatchEvent(a)}},M=function(){if("callback"==c.mode)return console.log("Widget in callback mode"),!1;z&&S();if("elastic"==c.style||"bubble"==c.style)document.querySelector("body").classList.add("arcu-show-menu"),document.querySelector("body").classList.add("arcu-menu-"+c.align),
document.querySelector("body").classList.add("arcu-pushed");if(!b.querySelector(".messangers-block").classList.contains(c.menuInAnimationClass)){C(!1);b.classList.add("open");b.querySelector(".messangers-block").classList.add(c.menuInAnimationClass);b.querySelector(".arcontactus-close").classList.add("show-messageners-block");b.querySelector(".icons, .static").classList.add("arcu-hide");b.querySelector(".pulsation").classList.add("stop");y=!0;!1===c.visible&&g.show();var a=new Event("arcontactus.openMenu");
b.dispatchEvent(a)}if("elastic"==c.style)G.animate({path:Q},400,mina.easeinout,function(){});else if("bubble"==c.style){var d=function(f){f>W-1||(G.animate({path:P[f]},0===f?400:500,0===f?mina.easein:mina.elastic,function(){d(f)}),f++)};d(0)}},F=function(){if("callback"==c.mode)return console.log("Widget in callback mode"),!1;if("elastic"==c.style||"bubble"==c.style)document.querySelector("body").classList.remove("arcu-show-menu"),document.querySelector("body").classList.remove("arcu-menu-"+c.align),
setTimeout(function(){document.querySelector("body").classList.remove("arcu-pushed")},500);if(b.querySelector(".messangers-block").classList.contains(c.menuInAnimationClass)){setTimeout(function(){z||b.classList.remove("open")},150);b.querySelector(".messangers-block").classList.remove(c.menuInAnimationClass);c.menuOutAnimationClass&&(b.querySelector(".messangers-block").classList.add(c.menuOutAnimationClass),setTimeout(function(){b.querySelector(".messangers-block").classList.remove(c.menuOutAnimationClass)},
1E3));b.querySelector(".arcontactus-close").classList.remove("show-messageners-block");b.querySelector(".static").classList.remove("arcu-hide");b.querySelector(".pulsation").classList.remove("stop");y=!1;c.iconsAnimationPause?N=setTimeout(function(){if(y||E||z)return!1;B()},c.iconsAnimationPause):B();!1===c.visible&&g.hide();var a=new Event("arcontactus.closeMenu");b.dispatchEvent(a)}"elastic"!=c.style&&"bubble"!=c.style||setTimeout(function(){G.attr("d",V)},300)},ia=function(a){var d=b.querySelector(".arcontactus-prompt");
a&&a.content&&(d.querySelector(".arcontactus-prompt-inner").innerHTML=a.content);d.classList.add("active");a=new Event("arcontactus.showPrompt");b.dispatchEvent(a)},T=function(){b.querySelector(".arcontactus-prompt").classList.remove("active");var a=new Event("arcontactus.hidePrompt");b.dispatchEvent(a)},B=function(a){if(y||z||J&&!a)return!1;var d=b.querySelector(".icons-line"),f=b.querySelector(".static");if(null===b.querySelector(".icons-line>span:first-child"))return!1;var e=b.querySelector(".icons-line>span:first-child").clientWidth+
40;if("huge"===c.buttonSize)var l=2,n=0;"large"===c.buttonSize&&(l=2,n=0);"medium"===c.buttonSize&&(l=4,n=-2);"small"===c.buttonSize&&(l=4,n=-2);var q=b.querySelector(".icons-line").children.length,p=0;if(0===c.iconsAnimationSpeed)return!1;J=!0;U=setInterval(function(){0===p&&(d.parentElement.classList.remove("arcu-hide"),f.classList.add("arcu-hide"));var m="translate("+-(e*p+l)+"px, "+n+"px)";d.style.cssText="-webkit-transform:"+m+"; -ms-transform: "+m+"transform: "+m;p++;p>q&&(p>q+1&&(c.iconsAnimationPause&&
(C(!0),J&&(N=setTimeout(function(){if(y||E||z)return!1;B(!0)},c.iconsAnimationPause))),p=0),d.parentElement.classList.add("arcu-hide"),f.classList.remove("arcu-hide"),m="translate("+-l+"px, "+n+"px)",d.style.cssText="-webkit-transform:"+m+"; -ms-transform: "+m+"transform: "+m)},c.iconsAnimationSpeed)},C=function(a){clearInterval(U);a||(J=!1,clearTimeout(N));a=b.querySelector(".icons-line");var d=b.querySelector(".static");a.parentElement.classList.add("arcu-hide");d.classList.remove("arcu-hide");
a.style.cssText="-webkit-transform:translate(-2px, 0px); -ms-transform: translate(-2px, 0px)transform: translate(-2px, 0px)"};g.destroy=function(){if(r){C(!1);document.removeEventListener("click",ca);b.innerHTML="";b.className="";var a=new Event("arcontactus.destroy");b.dispatchEvent(a);c=null;r=!1}};g.init=function(a){if(t){g.destroy();c=ka(ja,a||{});c.forms.dynamic_form={header:""};(b=document.getElementById(c.rootElementId))||console.log("Root element not found");b.classList.add("arcontactus-widget");
b.classList.add("arcontactus-message");b.classList.add("layout-"+c.layout);"elastic"==c.style&&b.classList.add("arcu-elastic");"bubble"==c.style&&b.classList.add("arcu-bubble");null!=c.style&&"popup"!=c.style&&""!=c.style||!c.popupAnimation||b.classList.add("arcu-"+c.popupAnimation);"left"===c.align?b.classList.add("left"):b.classList.add("right");if(c.items.length){if("regular"==c.mode||"single"==c.mode)la(),"single"==c.mode&&(a=b.querySelector(".messangers-list li:first-child a"),a.getAttribute("href")&&
b.append(h("a",{href:a.getAttribute("href"),target:a.getAttribute("target"),classes:["arcu-single-mode-link"]})));x.length&&ma();na();pa();qa();ra();setTimeout(function(){B()},c.iconsAnimationPause?c.iconsAnimationPause:2E3);null!==c.online&&(a=h("div",{classes:["arcu-online-badge",!0===c.online?"online":"offline"]}),b.append(a));!0===c.visible&&b.classList.add("active")}else console.info("jquery.contactus:no items");if("elastic"==c.style||"bubble"==c.style)a=document.getElementById("arcu-morph-shape"),
G=Snap(a.querySelector("svg")).select("path"),Q=a.getAttribute("data-morph-open"),V=G.attr("d"),P=Q.split(";"),W=P.length;r=!0;a=new Event("arcontactus.init");b.dispatchEvent(a)}};g.isInitialized=function(){return r};g.getSettings=function(){return c};g.getRootElement=function(){return b};g.openMenu=function(){return M()};g.closeMenu=function(){return F()};g.toggleMenu=function(){T();b.querySelector(".messangers-block").classList.contains(c.menuInAnimationClass)?F():M();var a=new Event("arcontactus.toggleMenu");
b.dispatchEvent(a)};g.showForm=function(a){return ba(a)};g.hideForm=function(){return S()};g.showPromptTyping=function(){b.querySelector(".arcontactus-prompt").querySelector(".arcontactus-prompt-inner").innerHTML="";var a=b.querySelector(".arcontactus-prompt-inner"),d=h("div",{classes:["arcontactus-prompt-typing"]}),f=h("div");d.append(f);d.append(f.cloneNode());d.append(f.cloneNode());a.append(d);ia({});a=new Event("arcontactus.showPromptTyping");b.dispatchEvent(a)};g.hidePromptTyping=function(){b.querySelector(".arcontactus-prompt").classList.remove("active");
var a=new Event("arcontactus.hidePromptTyping");b.dispatchEvent(a)};g.showPrompt=function(a){return ia(a)};g.hidePrompt=function(){return T()};g.showWellcomeTyping=function(){var a;if(a=b.querySelector(".arcu-wellcome")){var d=b.querySelector(".arcu-menu-header > .arcu-header-icon");if(!a.querySelector(".arcu-wellcome-msg.typing")){var f=h("div",{classes:["arcu-wellcome-msg","typing"]}),e=h("div",{classes:["arcu-wellcome-icon"]});e.append(d.cloneNode(!0));d=h("div",{classes:["arcu-wellcome-time"]});
var l=new Date;d.innerHTML=("0"+l.getHours()).slice(-2)+":"+("0"+l.getMinutes()).slice(-2);l=h("div",{classes:["arcu-wellcome-content"]});var n=h("div",{classes:["arcontactus-prompt-typing"]}),q=h("div");n.append(q);n.append(q.cloneNode());n.append(q.cloneNode());l.append(n);f.append(d);f.append(e);f.append(l);a.append(f)}a=void 0}else a=!1;return a};g.showWellcomeMessage=function(a){var d=b.querySelector(".arcu-wellcome");d?(d.querySelector(".arcu-wellcome-msg.typing")&&(d.querySelector(".arcu-wellcome-msg.typing .arcu-wellcome-content").innerHTML=
a.content,d.querySelector(".arcu-wellcome-msg.typing").classList.remove("typing")),a=void 0):a=!1;return a};g.openPopup=function(a){return da(a)};g.closePopup=function(){return I()};g.showSubmenu=function(a){return oa(a)};g.hideSubmenu=function(a){return Z(a)};g.show=function(){b.classList.add("active");var a=new Event("arcontactus.show");B();b.dispatchEvent(a)};g.hide=function(){b.classList.remove("active");var a=new Event("arcontactus.hide");C(!1);b.dispatchEvent(a)};g.startAnimation=function(){return B()};
g.stopAnimation=function(a){return C(a)};g.triggerItem=function(a,d,f){b.querySelector("#msg-item-"+d)&&(a=new CustomEvent(a,{detail:f}),b.querySelector("#msg-item-"+d).dispatchEvent(a))};g.utils={};g.utils.createElement=function(a,d,f){return h(a,d,f)};g.utils.DOMElementFromHTML=function(a){return w(a)};return g});