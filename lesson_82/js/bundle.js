!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i=window,r=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.msRequestAnimationFrame||function(t){return setTimeout(t,16)},a=window,o=a.cancelAnimationFrame||a.mozCancelAnimationFrame||function(t){clearTimeout(t)};function u(){for(var t,e,n,i=arguments[0]||{},r=1,a=arguments.length;r<a;r++)if(null!==(t=arguments[r]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function l(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function s(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function c(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var f=document.documentElement;function d(t){var e="";return t.fake&&(e=f.style.overflow,t.style.background="",t.style.overflow=f.style.overflow="hidden",f.appendChild(t)),e}function v(t,e){t.fake&&(t.remove(),f.style.overflow=e,f.offsetHeight)}function p(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function m(t){return("insertRule"in t?t.cssRules:t.rules).length}function h(t,e,n){for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i)}var y="classList"in document.createElement("_"),g=y?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},b=y?function(t,e){g(t,e)||t.classList.add(e)}:function(t,e){g(t,e)||(t.className+=" "+e)},x=y?function(t,e){g(t,e)&&t.classList.remove(e)}:function(t,e){g(t,e)&&(t.className=t.className.replace(e,""))};function w(t,e){return t.hasAttribute(e)}function M(t,e){return t.getAttribute(e)}function C(t){return void 0!==t.item}function T(t,e){if(t=C(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function E(t,e){t=C(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var r=n;r--;)t[i].removeAttribute(e[r])}function A(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function S(t,e){"none"!==t.style.display&&(t.style.display="none")}function N(t,e){"none"===t.style.display&&(t.style.display="")}function L(t){return"none"!==window.getComputedStyle(t).display}function B(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),r=(t.length,0);r<t.length;r++){var a=t[r];if(void 0!==i.style[a])return a}return!1}function O(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var H=!1;try{var D=Object.defineProperty({},"passive",{get:function(){H=!0}});window.addEventListener("test",null,D)}catch(t){}var P=!!H&&{passive:!0};function k(t,e,n){for(var i in e){var r=["touchstart","touchmove"].indexOf(i)>=0&&!n&&P;t.addEventListener(i,e[i],r)}}function R(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&P;t.removeEventListener(n,e[n],i)}}function I(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var W=function(t){t=u({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var e=document,n=window,i={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},a={},f=t.useLocalStorage;if(f){var y=navigator.userAgent,C=new Date;try{(a=n.localStorage)?(a.setItem(C,C),f=a.getItem(C)==C,a.removeItem(C)):f=!1,f||(a={})}catch(t){f=!1}f&&(a.tnsApp&&a.tnsApp!==y&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){a.removeItem(t)})),localStorage.tnsApp=y)}var H=a.tC?l(a.tC):s(a,"tC",function(){var t=document,e=c(),n=d(e),i=t.createElement("div"),r=!1;e.appendChild(i);try{for(var a,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(a=u[l],i.style.width=a,100===i.offsetWidth){r=a.replace(o,"");break}}catch(t){}return e.fake?v(e,n):i.remove(),r}(),f),D=a.tPL?l(a.tPL):s(a,"tPL",function(){var t,e=document,n=c(),i=d(n),r=e.createElement("div"),a=e.createElement("div"),o="";r.className="tns-t-subp2",a.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return a.innerHTML=o,r.appendChild(a),n.appendChild(r),t=Math.abs(r.getBoundingClientRect().left-a.children[67].getBoundingClientRect().left)<2,n.fake?v(n,i):r.remove(),t}(),f),P=a.tMQ?l(a.tMQ):s(a,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=c(),i=d(n),r=e.createElement("div"),a=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return a.type="text/css",r.className="tns-mq-test",n.appendChild(a),n.appendChild(r),a.styleSheet?a.styleSheet.cssText=o:a.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(r).position:r.currentStyle.position,n.fake?v(n,i):r.remove(),"absolute"===t}(),f),z=a.tTf?l(a.tTf):s(a,"tTf",B("transform"),f),j=a.t3D?l(a.t3D):s(a,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=c(),r=d(i),a=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(a,null),a.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(a).getPropertyValue(o),i.fake?v(i,r):a.remove(),void 0!==e&&e.length>0&&"none"!==e}(z),f),q=a.tTDu?l(a.tTDu):s(a,"tTDu",B("transitionDuration"),f),F=a.tTDe?l(a.tTDe):s(a,"tTDe",B("transitionDelay"),f),_=a.tADu?l(a.tADu):s(a,"tADu",B("animationDuration"),f),V=a.tADe?l(a.tADe):s(a,"tADe",B("animationDelay"),f),G=a.tTE?l(a.tTE):s(a,"tTE",O(q,"Transition"),f),Q=a.tAE?l(a.tAE):s(a,"tAE",O(_,"Animation"),f),X=n.console&&"function"==typeof n.console.warn,Y=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],K={};if(Y.forEach((function(n){if("string"==typeof t[n]){var i=t[n],r=e.querySelector(i);if(K[n]=i,!r||!r.nodeName)return void(X&&console.warn("Can't find",t[n]));t[n]=r}})),!(t.container.children.length<1)){var J=t.responsive,U=t.nested,Z="carousel"===t.mode;if(J){0 in J&&(t=u(t,J[0]),delete J[0]);var $={};for(var tt in J){var et=J[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}J=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,rt=t.animateDelay,at=t.animateNormal}var ot,ut,lt="horizontal"===t.axis,st=e.createElement("div"),ct=e.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.outerHTML,pt=ft.children,mt=pt.length,ht=Hn(),yt=!1;J&&Zn(),Z&&(ft.className+=" tns-vpfix");var gt,bt,xt,wt,Mt,Ct,Tt,Et,At,St=t.autoWidth,Nt=Rn("fixedWidth"),Lt=Rn("edgePadding"),Bt=Rn("gutter"),Ot=Pn(),Ht=Rn("center"),Dt=St?1:Math.floor(Rn("items")),Pt=Rn("slideBy"),kt=t.viewportMax||t.fixedWidthViewportWidth,Rt=Rn("arrowKeys"),It=Rn("speed"),Wt=t.rewind,zt=!Wt&&t.loop,jt=Rn("autoHeight"),qt=Rn("controls"),Ft=Rn("controlsText"),_t=Rn("nav"),Vt=Rn("touch"),Gt=Rn("mouseDrag"),Qt=Rn("autoplay"),Xt=Rn("autoplayTimeout"),Yt=Rn("autoplayText"),Kt=Rn("autoplayHoverPause"),Jt=Rn("autoplayResetOnVisibility"),Ut=(Tt=null,Et=Rn("nonce"),At=document.createElement("style"),Tt&&At.setAttribute("media",Tt),Et&&At.setAttribute("nonce",Et),document.querySelector("head").appendChild(At),At.sheet?At.sheet:At.styleSheet),Zt=t.lazyload,$t=t.lazyloadSelector,te=[],ee=zt?(Mt=function(){if(St||Nt&&!kt)return mt-1;var e=Nt?"fixedWidth":"items",n=[];if((Nt||t[e]<mt)&&n.push(t[e]),J)for(var i in J){var r=J[i][e];r&&(Nt||r<mt)&&n.push(r)}return n.length||n.push(0),Math.ceil(Nt?kt/Math.min.apply(null,n):Math.max.apply(null,n))}(),Ct=Z?Math.ceil((5*Mt-mt)/2):4*Mt-mt,Ct=Math.max(Mt,Ct),kn("edgePadding")?Ct+1:Ct):0,ne=Z?mt+2*ee:mt+ee,ie=!(!Nt&&!St||zt),re=Nt?Ti():null,ae=!Z||!zt,oe=lt?"left":"top",ue="",le="",se=Nt?function(){return Ht&&!zt?mt-1:Math.ceil(-re/(Nt+Bt))}:St?function(){for(var t=0;t<ne;t++)if(gt[t]>=-re)return t}:function(){return Ht&&Z&&!zt?mt-1:zt||Z?Math.max(0,ne-Math.ceil(Dt)):ne-1},ce=Ln(Rn("startIndex")),fe=ce,de=(Nn(),0),ve=St?null:se(),pe=t.preventActionWhenRunning,me=t.swipeAngle,he=!me||"?",ye=!1,ge=t.onInit,be=new I,xe=" tns-slider tns-"+t.mode,we=ft.id||(wt=window.tnsId,window.tnsId=wt?wt+1:1,"tns"+window.tnsId),Me=Rn("disable"),Ce=!1,Te=t.freezable,Ee=!(!Te||St)&&Un(),Ae=!1,Se={click:Di,keydown:function(t){t=qi(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ye.disabled||Di(t,-1):Ke.disabled||Di(t,1))}},Ne={click:function(t){if(ye){if(pe)return;Oi()}var e=Fi(t=qi(t));for(;e!==$e&&!w(e,"data-nav");)e=e.parentNode;if(w(e,"data-nav")){var n=rn=Number(M(e,"data-nav")),i=Nt||St?n*mt/en:n*Dt;Hi(Re?n:Math.min(Math.ceil(i),mt-1),t),an===n&&(fn&&Wi(),rn=-1)}},keydown:function(t){t=qi(t);var n=e.activeElement;if(!w(n,"data-nav"))return;var r=[i.LEFT,i.RIGHT,i.ENTER,i.SPACE].indexOf(t.keyCode),a=Number(M(n,"data-nav"));r>=0&&(0===r?a>0&&ji(Ze[a-1]):1===r?a<en-1&&ji(Ze[a+1]):(rn=a,Hi(a,t)))}},Le={mouseover:function(){fn&&(ki(),dn=!0)},mouseout:function(){dn&&(Pi(),dn=!1)}},Be={visibilitychange:function(){e.hidden?fn&&(ki(),pn=!0):pn&&(Pi(),pn=!1)}},Oe={keydown:function(t){t=qi(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&Di(t,0===e?-1:1)}},He={touchstart:Qi,touchmove:Xi,touchend:Yi,touchcancel:Yi},De={mousedown:Qi,mousemove:Xi,mouseup:Yi,mouseleave:Yi},Pe=kn("controls"),ke=kn("nav"),Re=!!St||t.navAsThumbnails,Ie=kn("autoplay"),We=kn("touch"),ze=kn("mouseDrag"),je="tns-slide-active",qe="tns-complete",Fe={load:function(t){ui(Fi(t))},error:function(t){e=Fi(t),b(e,"failed"),li(e);var e}},_e="force"===t.preventScrollOnTouch;if(Pe)var Ve,Ge,Qe=t.controlsContainer,Xe=t.controlsContainer?t.controlsContainer.outerHTML:"",Ye=t.prevButton,Ke=t.nextButton,Je=t.prevButton?t.prevButton.outerHTML:"",Ue=t.nextButton?t.nextButton.outerHTML:"";if(ke)var Ze,$e=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=St?mt:Ji(),nn=0,rn=-1,an=On(),on=an,un="tns-nav-active",ln="Carousel Page ",sn=" (Current Slide)";if(Ie)var cn,fn,dn,vn,pn,mn="forward"===t.autoplayDirection?1:-1,hn=t.autoplayButton,yn=t.autoplayButton?t.autoplayButton.outerHTML:"",gn=["<span class='tns-visually-hidden'>"," animation</span>"];if(We||ze)var bn,xn,wn={},Mn={},Cn=!1,Tn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};St||Sn(Me||Ee),z&&(oe=z,ue="translate",j?(ue+=lt?"3d(":"3d(0px, ",le=lt?", 0px, 0px)":", 0px)"):(ue+=lt?"X(":"Y(",le=")")),Z&&(ft.className=ft.className.replace("tns-vpfix","")),function(){kn("gutter");st.className="tns-outer",ct.className="tns-inner",st.id=we+"-ow",ct.id=we+"-iw",""===ft.id&&(ft.id=we);xe+=D||St?" tns-subpixel":" tns-no-subpixel",xe+=H?" tns-calc":" tns-no-calc",St&&(xe+=" tns-autowidth");xe+=" tns-"+t.axis,ft.className+=xe,Z?((ot=e.createElement("div")).id=we+"-mw",ot.className="tns-ovh",st.appendChild(ot),ot.appendChild(ct)):st.appendChild(ct);if(jt){(ot||ct).className+=" tns-ah"}if(dt.insertBefore(st,ft),ct.appendChild(ft),h(pt,(function(t,e){b(t,"tns-item"),t.id||(t.id=we+"-item"+e),!Z&&at&&b(t,at),T(t,{"aria-hidden":"true",tabindex:"-1"})})),ee){for(var n=e.createDocumentFragment(),i=e.createDocumentFragment(),r=ee;r--;){var a=r%mt,o=pt[a].cloneNode(!0);if(b(o,"tns-slide-cloned"),E(o,"id"),i.insertBefore(o,i.firstChild),Z){var u=pt[mt-1-a].cloneNode(!0);b(u,"tns-slide-cloned"),E(u,"id"),n.appendChild(u)}}ft.insertBefore(n,ft.firstChild),ft.appendChild(i),pt=ft.children}}(),function(){if(!Z)for(var e=ce,i=ce+Math.min(mt,Dt);e<i;e++){var r=pt[e];r.style.left=100*(e-ce)/Dt+"%",b(r,nt),x(r,at)}lt&&(D||St?(p(Ut,"#"+we+" > .tns-item","font-size:"+n.getComputedStyle(pt[0]).fontSize+";",m(Ut)),p(Ut,"#"+we,"font-size:0;",m(Ut))):Z&&h(pt,(function(t,e){t.style.marginLeft=function(t){return H?H+"("+100*t+"% / "+ne+")":100*t/ne+"%"}(e)})));if(P){if(q){var a=ot&&t.autoHeight?Fn(t.speed):"";p(Ut,"#"+we+"-mw",a,m(Ut))}a=In(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),p(Ut,"#"+we+"-iw",a,m(Ut)),Z&&(a=lt&&!St?"width:"+Wn(t.fixedWidth,t.gutter,t.items)+";":"",q&&(a+=Fn(It)),p(Ut,"#"+we,a,m(Ut))),a=lt&&!St?zn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=jn(t.gutter)),Z||(q&&(a+=Fn(It)),_&&(a+=_n(It))),a&&p(Ut,"#"+we+" > .tns-item",a,m(Ut))}else{Z&&jt&&(ot.style[q]=It/1e3+"s"),ct.style.cssText=In(Lt,Bt,Nt,jt),Z&&lt&&!St&&(ft.style.width=Wn(Nt,Bt,Dt));a=lt&&!St?zn(Nt,Bt,Dt):"";Bt&&(a+=jn(Bt)),a&&p(Ut,"#"+we+" > .tns-item",a,m(Ut))}if(J&&P)for(var o in J){o=parseInt(o);var u=J[o],l=(a="",""),s="",c="",f="",d=St?null:Rn("items",o),v=Rn("fixedWidth",o),y=Rn("speed",o),g=Rn("edgePadding",o),w=Rn("autoHeight",o),M=Rn("gutter",o);q&&ot&&Rn("autoHeight",o)&&"speed"in u&&(l="#"+we+"-mw{"+Fn(y)+"}"),("edgePadding"in u||"gutter"in u)&&(s="#"+we+"-iw{"+In(g,M,v,y,w)+"}"),Z&&lt&&!St&&("fixedWidth"in u||"items"in u||Nt&&"gutter"in u)&&(c="width:"+Wn(v,M,d)+";"),q&&"speed"in u&&(c+=Fn(y)),c&&(c="#"+we+"{"+c+"}"),("fixedWidth"in u||Nt&&"gutter"in u||!Z&&"items"in u)&&(f+=zn(v,M,d)),"gutter"in u&&(f+=jn(M)),!Z&&"speed"in u&&(q&&(f+=Fn(y)),_&&(f+=_n(y))),f&&(f="#"+we+" > .tns-item{"+f+"}"),(a=l+s+c+f)&&Ut.insertRule("@media (min-width: "+o/16+"em) {"+a+"}",Ut.cssRules.length)}}(),Vn();var En=zt?Z?function(){var t=de,e=ve;t+=Pt,e-=Pt,Lt?(t+=1,e-=1):Nt&&(Ot+Bt)%(Nt+Bt)&&(e-=1),ee&&(ce>e?ce-=mt:ce<t&&(ce+=mt))}:function(){if(ce>ve)for(;ce>=de+mt;)ce-=mt;else if(ce<de)for(;ce<=ve-mt;)ce+=mt}:function(){ce=Math.max(de,Math.min(ve,ce))},An=Z?function(){var t,e,n,i,r,a,o,u,l,s,c;Mi(ft,""),q||!It?(Si(),It&&L(ft)||Oi()):(t=ft,e=oe,n=ue,i=le,r=Ei(),a=It,o=Oi,u=Math.min(a,10),l=r.indexOf("%")>=0?"%":"px",r=r.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(r-s)/a*u,setTimeout((function r(){a-=u,s+=c,t.style[e]=n+s+l+i,a>0?setTimeout(r,u):o()}),u)),lt||Ki()}:function(){te=[];var t={};t[G]=t[Q]=Oi,R(pt[fe],t),k(pt[ce],t),Ni(fe,nt,it,!0),Ni(ce,at,nt),G&&Q&&It&&L(ft)||Oi()};return{version:"2.9.3",getInfo:Zi,events:be,goTo:Hi,play:function(){Qt&&!fn&&(Ii(),vn=!1)},pause:function(){fn&&(Wi(),vn=!0)},isOn:yt,updateSliderHeight:pi,refresh:Vn,destroy:function(){if(Ut.disabled=!0,Ut.ownerNode&&Ut.ownerNode.remove(),R(n,{resize:Kn}),Rt&&R(e,Oe),Qe&&R(Qe,Se),$e&&R($e,Ne),R(ft,Le),R(ft,Be),hn&&R(hn,{click:zi}),Qt&&clearInterval(cn),Z&&G){var i={};i[G]=Oi,R(ft,i)}Vt&&R(ft,He),Gt&&R(ft,De);var r=[vt,Xe,Je,Ue,tn,yn];for(var a in Y.forEach((function(e,n){var i="container"===e?st:t[e];if("object"==typeof i&&i){var a=!!i.previousElementSibling&&i.previousElementSibling,o=i.parentNode;i.outerHTML=r[n],t[e]=a?a.nextElementSibling:o.firstElementChild}})),Y=nt=it=rt=at=lt=st=ct=ft=dt=vt=pt=mt=ut=ht=St=Nt=Lt=Bt=Ot=Dt=Pt=kt=Rt=It=Wt=zt=jt=Ut=Zt=gt=te=ee=ne=ie=re=ae=oe=ue=le=se=ce=fe=de=ve=me=he=ye=ge=be=xe=we=Me=Ce=Te=Ee=Ae=Se=Ne=Le=Be=Oe=He=De=Pe=ke=Re=Ie=We=ze=je=qe=Fe=bt=qt=Ft=Qe=Xe=Ye=Ke=Ve=Ge=_t=$e=tn=Ze=en=nn=rn=an=on=un=ln=sn=Qt=Xt=mn=Yt=Kt=hn=yn=Jt=gn=cn=fn=dn=vn=pn=wn=Mn=bn=Cn=xn=Tn=Vt=Gt=null,this)"rebuild"!==a&&(this[a]=null);yt=!1},rebuild:function(){return W(u(t,K))}}}function Sn(t){t&&(qt=_t=Vt=Gt=Rt=Qt=Kt=Jt=!1)}function Nn(){for(var t=Z?ce-ee:ce;t<0;)t+=mt;return t%mt+1}function Ln(t){return t=t?Math.max(0,Math.min(zt?mt-1:mt-Dt,t)):0,Z?t+ee:t}function Bn(t){for(null==t&&(t=ce),Z&&(t-=ee);t<0;)t+=mt;return Math.floor(t%mt)}function On(){var t,e=Bn();return t=Re?e:Nt||St?Math.ceil((e+1)*en/mt-1):Math.floor(e/Dt),!zt&&Z&&ce===ve&&(t=en-1),t}function Hn(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function Dn(t){return"top"===t?"afterbegin":"beforeend"}function Pn(){var t=Lt?2*Lt-Bt:0;return function t(n){if(null!=n){var i,r,a=e.createElement("div");return n.appendChild(a),r=(i=a.getBoundingClientRect()).right-i.left,a.remove(),r||t(n.parentNode)}}(dt)-t}function kn(e){if(t[e])return!0;if(J)for(var n in J)if(J[n][e])return!0;return!1}function Rn(e,n){if(null==n&&(n=ht),"items"===e&&Nt)return Math.floor((Ot+Bt)/(Nt+Bt))||1;var i=t[e];if(J)for(var r in J)n>=parseInt(r)&&e in J[r]&&(i=J[r][e]);return"slideBy"===e&&"page"===i&&(i=Rn("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function In(t,e,n,i,r){var a="";if(void 0!==t){var o=t;e&&(o-=e),a=lt?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";a="margin: 0 "+(lt?u+" 0 0":"0 "+u+" 0")+";"}return!Z&&r&&q&&i&&(a+=Fn(i)),a}function Wn(t,e,n){return t?(t+e)*ne+"px":H?H+"("+100*ne+"% / "+n+")":100*ne/n+"%"}function zn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var r=Z?ne:n;i=H?H+"(100% / "+r+")":100/r+"%"}return i="width:"+i,"inner"!==U?i+";":i+" !important;"}function jn(t){var e="";!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;");return e}function qn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Fn(t){return qn(q,18)+"transition-duration:"+t/1e3+"s;"}function _n(t){return qn(_,17)+"animation-duration:"+t/1e3+"s;"}function Vn(){if(kn("autoHeight")||St||!lt){var t=ft.querySelectorAll("img");h(t,(function(t){var e=t.src;Zt||(e&&e.indexOf("data:image")<0?(t.src="",k(t,Fe),b(t,"loading"),t.src=e):ui(t))})),r((function(){fi(A(t),(function(){bt=!0}))})),kn("autoHeight")&&(t=si(ce,Math.min(ce+Dt-1,ne-1))),Zt?Gn():r((function(){fi(A(t),Gn)}))}else Z&&Ai(),Xn(),Yn()}function Gn(){if(St&&mt>1){var t=zt?ce:mt-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Qn():setTimeout((function(){e()}),16)}()}else Qn()}function Qn(){lt&&!St||(mi(),St?(re=Ti(),Te&&(Ee=Un()),ve=se(),Sn(Me||Ee)):Ki()),Z&&Ai(),Xn(),Yn()}function Xn(){if(hi(),st.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ri()+"</span>  of "+mt+"</div>"),xt=st.querySelector(".tns-liveregion .current"),Ie){var e=Qt?"stop":"start";hn?T(hn,{"data-action":e}):t.autoplayButtonOutput&&(st.insertAdjacentHTML(Dn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+gn[0]+e+gn[1]+Yt[0]+"</button>"),hn=st.querySelector("[data-action]")),hn&&k(hn,{click:zi}),Qt&&(Ii(),Kt&&k(ft,Le),Jt&&k(ft,Be))}if(ke){if($e)T($e,{"aria-label":"Carousel Pagination"}),h(Ze=$e.children,(function(t,e){T(t,{"data-nav":e,tabindex:"-1","aria-label":ln+(e+1),"aria-controls":we})}));else{for(var n="",i=Re?"":'style="display:none"',r=0;r<mt;r++)n+='<button type="button" data-nav="'+r+'" tabindex="-1" aria-controls="'+we+'" '+i+' aria-label="'+ln+(r+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",st.insertAdjacentHTML(Dn(t.navPosition),n),$e=st.querySelector(".tns-nav"),Ze=$e.children}if(Ui(),q){var a=q.substring(0,q.length-18).toLowerCase(),o="transition: all "+It/1e3+"s";a&&(o="-"+a+"-"+o),p(Ut,"[aria-controls^="+we+"-item]",o,m(Ut))}T(Ze[an],{"aria-label":ln+(an+1)+sn}),E(Ze[an],"tabindex"),b(Ze[an],un),k($e,Ne)}Pe&&(Qe||Ye&&Ke||(st.insertAdjacentHTML(Dn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+we+'">'+Ft[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+we+'">'+Ft[1]+"</button></div>"),Qe=st.querySelector(".tns-controls")),Ye&&Ke||(Ye=Qe.children[0],Ke=Qe.children[1]),t.controlsContainer&&T(Qe,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&T([Ye,Ke],{"aria-controls":we,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(T(Ye,{"data-controls":"prev"}),T(Ke,{"data-controls":"next"})),Ve=gi(Ye),Ge=gi(Ke),wi(),Qe?k(Qe,Se):(k(Ye,Se),k(Ke,Se))),$n()}function Yn(){if(Z&&G){var i={};i[G]=Oi,k(ft,i)}Vt&&k(ft,He,t.preventScrollOnTouch),Gt&&k(ft,De),Rt&&k(e,Oe),"inner"===U?be.on("outerResized",(function(){Jn(),be.emit("innerLoaded",Zi())})):(J||Nt||St||jt||!lt)&&k(n,{resize:Kn}),jt&&("outer"===U?be.on("innerLoaded",ci):Me||ci()),oi(),Me?ni():Ee&&ei(),be.on("indexChanged",di),"inner"===U&&be.emit("innerLoaded",Zi()),"function"==typeof ge&&ge(Zi()),yt=!0}function Kn(t){r((function(){Jn(qi(t))}))}function Jn(n){if(yt){"outer"===U&&be.emit("outerResized",Zi(n)),ht=Hn();var i,r=ut,a=!1;J&&(Zn(),(i=r!==ut)&&be.emit("newBreakpointStart",Zi(n)));var o,u,l=Dt,s=Me,c=Ee,f=Rt,d=qt,v=_t,y=Vt,g=Gt,w=Qt,M=Kt,C=Jt,T=ce;if(i){var E=Nt,A=jt,L=Ft,B=Ht,O=Yt;if(!P)var H=Bt,D=Lt}if(Rt=Rn("arrowKeys"),qt=Rn("controls"),_t=Rn("nav"),Vt=Rn("touch"),Ht=Rn("center"),Gt=Rn("mouseDrag"),Qt=Rn("autoplay"),Kt=Rn("autoplayHoverPause"),Jt=Rn("autoplayResetOnVisibility"),i&&(Me=Rn("disable"),Nt=Rn("fixedWidth"),It=Rn("speed"),jt=Rn("autoHeight"),Ft=Rn("controlsText"),Yt=Rn("autoplayText"),Xt=Rn("autoplayTimeout"),P||(Lt=Rn("edgePadding"),Bt=Rn("gutter"))),Sn(Me),Ot=Pn(),lt&&!St||Me||(mi(),lt||(Ki(),a=!0)),(Nt||St)&&(re=Ti(),ve=se()),(i||Nt)&&(Dt=Rn("items"),Pt=Rn("slideBy"),(u=Dt!==l)&&(Nt||St||(ve=se()),En())),i&&Me!==s&&(Me?ni():function(){if(!Ce)return;if(Ut.disabled=!1,ft.className+=xe,Ai(),zt)for(var t=ee;t--;)Z&&N(pt[t]),N(pt[ne-t-1]);if(!Z)for(var e=ce,n=ce+mt;e<n;e++){var i=pt[e],r=e<ce+Dt?nt:at;i.style.left=100*(e-ce)/Dt+"%",b(i,r)}ti(),Ce=!1}()),Te&&(i||Nt||St)&&(Ee=Un())!==c&&(Ee?(Si(Ei(Ln(0))),ei()):(!function(){if(!Ae)return;Lt&&P&&(ct.style.margin="");if(ee)for(var t="tns-transparent",e=ee;e--;)Z&&x(pt[e],t),x(pt[ne-e-1],t);ti(),Ae=!1}(),a=!0)),Sn(Me||Ee),Qt||(Kt=Jt=!1),Rt!==f&&(Rt?k(e,Oe):R(e,Oe)),qt!==d&&(qt?Qe?N(Qe):(Ye&&N(Ye),Ke&&N(Ke)):Qe?S(Qe):(Ye&&S(Ye),Ke&&S(Ke))),_t!==v&&(_t?(N($e),Ui()):S($e)),Vt!==y&&(Vt?k(ft,He,t.preventScrollOnTouch):R(ft,He)),Gt!==g&&(Gt?k(ft,De):R(ft,De)),Qt!==w&&(Qt?(hn&&N(hn),fn||vn||Ii()):(hn&&S(hn),fn&&Wi())),Kt!==M&&(Kt?k(ft,Le):R(ft,Le)),Jt!==C&&(Jt?k(e,Be):R(e,Be)),i){if(Nt===E&&Ht===B||(a=!0),jt!==A&&(jt||(ct.style.height="")),qt&&Ft!==L&&(Ye.innerHTML=Ft[0],Ke.innerHTML=Ft[1]),hn&&Yt!==O){var I=Qt?1:0,W=hn.innerHTML,z=W.length-O[I].length;W.substring(z)===O[I]&&(hn.innerHTML=W.substring(0,z)+Yt[I])}}else Ht&&(Nt||St)&&(a=!0);if((u||Nt&&!St)&&(en=Ji(),Ui()),(o=ce!==T)?(be.emit("indexChanged",Zi()),a=!0):u?o||di():(Nt||St)&&(oi(),hi(),ii()),u&&!Z&&function(){for(var t=ce+Math.min(mt,Dt),e=ne;e--;){var n=pt[e];e>=ce&&e<t?(b(n,"tns-moving"),n.style.left=100*(e-ce)/Dt+"%",b(n,nt),x(n,at)):n.style.left&&(n.style.left="",b(n,at),x(n,nt)),x(n,it)}setTimeout((function(){h(pt,(function(t){x(t,"tns-moving")}))}),300)}(),!Me&&!Ee){if(i&&!P&&(Lt===D&&Bt===H||(ct.style.cssText=In(Lt,Bt,Nt,It,jt)),lt)){Z&&(ft.style.width=Wn(Nt,Bt,Dt));var j=zn(Nt,Bt,Dt)+jn(Bt);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Ut,m(Ut)-1),p(Ut,"#"+we+" > .tns-item",j,m(Ut))}jt&&ci(),a&&(Ai(),fe=ce)}i&&be.emit("newBreakpointEnd",Zi(n))}}function Un(){if(!Nt&&!St)return mt<=(Ht?Dt-(Dt-1)/2:Dt);var t=Nt?(Nt+Bt)*mt:gt[mt],e=Lt?Ot+2*Lt:Ot+Bt;return Ht&&(e-=Nt?(Ot-Nt)/2:(Ot-(gt[ce+1]-gt[ce]-Bt))/2),t<=e}function Zn(){for(var t in ut=0,J)t=parseInt(t),ht>=t&&(ut=t)}function $n(){!Qt&&hn&&S(hn),!_t&&$e&&S($e),qt||(Qe?S(Qe):(Ye&&S(Ye),Ke&&S(Ke)))}function ti(){Qt&&hn&&N(hn),_t&&$e&&N($e),qt&&(Qe?N(Qe):(Ye&&N(Ye),Ke&&N(Ke)))}function ei(){if(!Ae){if(Lt&&(ct.style.margin="0px"),ee)for(var t="tns-transparent",e=ee;e--;)Z&&b(pt[e],t),b(pt[ne-e-1],t);$n(),Ae=!0}}function ni(){if(!Ce){if(Ut.disabled=!0,ft.className=ft.className.replace(xe.substring(1),""),E(ft,["style"]),zt)for(var t=ee;t--;)Z&&S(pt[t]),S(pt[ne-t-1]);if(lt&&Z||E(ct,["style"]),!Z)for(var e=ce,n=ce+mt;e<n;e++){var i=pt[e];E(i,["style"]),x(i,nt),x(i,at)}$n(),Ce=!0}}function ii(){var t=ri();xt.innerHTML!==t&&(xt.innerHTML=t)}function ri(){var t=ai(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function ai(t){null==t&&(t=Ei());var e,n,i,r=ce;if(Ht||Lt?(St||Nt)&&(n=-(parseFloat(t)+Lt),i=n+Ot+2*Lt):St&&(n=gt[ce],i=n+Ot),St)gt.forEach((function(t,a){a<ne&&((Ht||Lt)&&t<=n+.5&&(r=a),i-t>=.5&&(e=a))}));else{if(Nt){var a=Nt+Bt;Ht||Lt?(r=Math.floor(n/a),e=Math.ceil(i/a-1)):e=r+Math.ceil(Ot/a)-1}else if(Ht||Lt){var o=Dt-1;if(Ht?(r-=o/2,e=ce+o/2):e=ce+o,Lt){var u=Lt*Dt/Ot;r-=u,e+=u}r=Math.floor(r),e=Math.ceil(e)}else e=r+Dt-1;r=Math.max(r,0),e=Math.min(e,ne-1)}return[r,e]}function oi(){if(Zt&&!Me){var t=ai();t.push($t),si.apply(null,t).forEach((function(t){if(!g(t,qe)){var e={};e[G]=function(t){t.stopPropagation()},k(t,e),k(t,Fe),t.src=M(t,"data-src");var n=M(t,"data-srcset");n&&(t.srcset=n),b(t,"loading")}}))}}function ui(t){b(t,"loaded"),li(t)}function li(t){b(t,qe),x(t,"loading"),R(t,Fe)}function si(t,e,n){var i=[];for(n||(n="img");t<=e;)h(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function ci(){var t=si.apply(null,ai());r((function(){fi(t,pi)}))}function fi(t,e){return bt?e():(t.forEach((function(e,n){!Zt&&e.complete&&li(e),g(e,qe)&&t.splice(n,1)})),t.length?void r((function(){fi(t,e)})):e())}function di(){oi(),hi(),ii(),wi(),function(){if(_t&&(an=rn>=0?rn:On(),rn=-1,an!==on)){var t=Ze[on],e=Ze[an];T(t,{tabindex:"-1","aria-label":ln+(on+1)}),x(t,un),T(e,{"aria-label":ln+(an+1)+sn}),E(e,"tabindex"),b(e,un),on=an}}()}function vi(t,e){for(var n=[],i=t,r=Math.min(t+e,ne);i<r;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function pi(){var t=jt?vi(ce,Dt):vi(ee,mt),e=ot||ct;e.style.height!==t&&(e.style.height=t+"px")}function mi(){gt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=pt[0].getBoundingClientRect()[t];h(pt,(function(i,r){r&&gt.push(i.getBoundingClientRect()[t]-n),r===ne-1&&gt.push(i.getBoundingClientRect()[e]-n)}))}function hi(){var t=ai(),e=t[0],n=t[1];h(pt,(function(t,i){i>=e&&i<=n?w(t,"aria-hidden")&&(E(t,["aria-hidden","tabindex"]),b(t,je)):w(t,"aria-hidden")||(T(t,{"aria-hidden":"true",tabindex:"-1"}),x(t,je))}))}function yi(t){return t.nodeName.toLowerCase()}function gi(t){return"button"===yi(t)}function bi(t){return"true"===t.getAttribute("aria-disabled")}function xi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function wi(){if(qt&&!Wt&&!zt){var t=Ve?Ye.disabled:bi(Ye),e=Ge?Ke.disabled:bi(Ke),n=ce<=de,i=!Wt&&ce>=ve;n&&!t&&xi(Ve,Ye,!0),!n&&t&&xi(Ve,Ye,!1),i&&!e&&xi(Ge,Ke,!0),!i&&e&&xi(Ge,Ke,!1)}}function Mi(t,e){q&&(t.style[q]=e)}function Ci(t){return null==t&&(t=ce),St?(Ot-(Lt?Bt:0)-(gt[t+1]-gt[t]-Bt))/2:Nt?(Ot-Nt)/2:(Dt-1)/2}function Ti(){var t=Ot+(Lt?Bt:0)-(Nt?(Nt+Bt)*ne:gt[ne]);return Ht&&!zt&&(t=Nt?-(Nt+Bt)*(ne-1)-Ci():Ci(ne-1)-gt[ne-1]),t>0&&(t=0),t}function Ei(t){var e;if(null==t&&(t=ce),lt&&!St)if(Nt)e=-(Nt+Bt)*t,Ht&&(e+=Ci());else{var n=z?ne:Dt;Ht&&(t-=Ci()),e=100*-t/n}else e=-gt[t],Ht&&St&&(e+=Ci());return ie&&(e=Math.max(e,re)),e+=!lt||St||Nt?"px":"%"}function Ai(t){Mi(ft,"0s"),Si(t)}function Si(t){null==t&&(t=Ei()),ft.style[oe]=ue+t+le}function Ni(t,e,n,i){var r=t+Dt;zt||(r=Math.min(r,ne));for(var a=t;a<r;a++){var o=pt[a];i||(o.style.left=100*(a-ce)/Dt+"%"),rt&&F&&(o.style[F]=o.style[V]=rt*(a-t)/1e3+"s"),x(o,e),b(o,n),i&&te.push(o)}}function Li(t,e){ae&&En(),(ce!==fe||e)&&(be.emit("indexChanged",Zi()),be.emit("transitionStart",Zi()),jt&&ci(),fn&&t&&["click","keydown"].indexOf(t.type)>=0&&Wi(),ye=!0,An())}function Bi(t){return t.toLowerCase().replace(/-/g,"")}function Oi(t){if(Z||ye){if(be.emit("transitionEnd",Zi(t)),!Z&&te.length>0)for(var e=0;e<te.length;e++){var n=te[e];n.style.left="",V&&F&&(n.style[V]="",n.style[F]=""),x(n,it),b(n,at)}if(!t||!Z&&t.target.parentNode===ft||t.target===ft&&Bi(t.propertyName)===Bi(oe)){if(!ae){var i=ce;En(),ce!==i&&(be.emit("indexChanged",Zi()),Ai())}"inner"===U&&be.emit("innerLoaded",Zi()),ye=!1,fe=ce}}}function Hi(t,e){if(!Ee)if("prev"===t)Di(e,-1);else if("next"===t)Di(e,1);else{if(ye){if(pe)return;Oi()}var n=Bn(),i=0;if("first"===t?i=-n:"last"===t?i=Z?mt-Dt-n:mt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<Dt){var r=i>0?1:-1;i+=ce+i-mt>=de?mt*r:2*mt*r*-1}ce+=i,Z&&zt&&(ce<de&&(ce+=mt),ce>ve&&(ce-=mt)),Bn(ce)!==Bn(fe)&&Li(e)}}function Di(t,e){if(ye){if(pe)return;Oi()}var n;if(!e){for(var i=Fi(t=qi(t));i!==Qe&&[Ye,Ke].indexOf(i)<0;)i=i.parentNode;var r=[Ye,Ke].indexOf(i);r>=0&&(n=!0,e=0===r?-1:1)}if(Wt){if(ce===de&&-1===e)return void Hi("last",t);if(ce===ve&&1===e)return void Hi("first",t)}e&&(ce+=Pt*e,St&&(ce=Math.floor(ce)),Li(n||t&&"keydown"===t.type?t:null))}function Pi(){cn=setInterval((function(){Di(null,mn)}),Xt),fn=!0}function ki(){clearInterval(cn),fn=!1}function Ri(t,e){T(hn,{"data-action":t}),hn.innerHTML=gn[0]+t+gn[1]+e}function Ii(){Pi(),hn&&Ri("stop",Yt[1])}function Wi(){ki(),hn&&Ri("start",Yt[0])}function zi(){fn?(Wi(),vn=!0):(Ii(),vn=!1)}function ji(t){t.focus()}function qi(t){return _i(t=t||n.event)?t.changedTouches[0]:t}function Fi(t){return t.target||n.event.srcElement}function _i(t){return t.type.indexOf("touch")>=0}function Vi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Gi(){return a=Mn.y-wn.y,o=Mn.x-wn.x,e=Math.atan2(a,o)*(180/Math.PI),n=me,i=!1,(r=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":r<=n&&(i="vertical"),i===t.axis;var e,n,i,r,a,o}function Qi(t){if(ye){if(pe)return;Oi()}Qt&&fn&&ki(),Cn=!0,xn&&(o(xn),xn=null);var e=qi(t);be.emit(_i(t)?"touchStart":"dragStart",Zi(t)),!_i(t)&&["img","a"].indexOf(yi(Fi(t)))>=0&&Vi(t),Mn.x=wn.x=e.clientX,Mn.y=wn.y=e.clientY,Z&&(bn=parseFloat(ft.style[oe].replace(ue,"")),Mi(ft,"0s"))}function Xi(t){if(Cn){var e=qi(t);Mn.x=e.clientX,Mn.y=e.clientY,Z?xn||(xn=r((function(){!function t(e){if(!he)return void(Cn=!1);o(xn),Cn&&(xn=r((function(){t(e)})));"?"===he&&(he=Gi());if(he){!_e&&_i(e)&&(_e=!0);try{e.type&&be.emit(_i(e)?"touchMove":"dragMove",Zi(e))}catch(t){}var n=bn,i=Tn(Mn,wn);if(!lt||Nt||St)n+=i,n+="px";else n+=z?i*Dt*100/((Ot+Bt)*ne):100*i/(Ot+Bt),n+="%";ft.style[oe]=ue+n+le}}(t)}))):("?"===he&&(he=Gi()),he&&(_e=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&_e&&t.preventDefault()}}function Yi(e){if(Cn){xn&&(o(xn),xn=null),Z&&Mi(ft,""),Cn=!1;var n=qi(e);Mn.x=n.clientX,Mn.y=n.clientY;var i=Tn(Mn,wn);if(Math.abs(i)){if(!_i(e)){var a=Fi(e);k(a,{click:function t(e){Vi(e),R(a,{click:t})}})}Z?xn=r((function(){if(lt&&!St){var t=-i*Dt/(Ot+Bt);t=i>0?Math.floor(t):Math.ceil(t),ce+=t}else{var n=-(bn+i);if(n<=0)ce=de;else if(n>=gt[ne-1])ce=ve;else for(var r=0;r<ne&&n>=gt[r];)ce=r,n>gt[r]&&i<0&&(ce+=1),r++}Li(e,i),be.emit(_i(e)?"touchEnd":"dragEnd",Zi(e))})):he&&Di(e,i>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(_e=!1),me&&(he="?"),Qt&&!fn&&Pi()}function Ki(){(ot||ct).style.height=gt[ce+Dt]-gt[ce]+"px"}function Ji(){var t=Nt?(Nt+Bt)*mt/Ot:mt/Dt;return Math.min(Math.ceil(t),mt)}function Ui(){if(_t&&!Re&&en!==nn){var t=nn,e=en,n=N;for(nn>en&&(t=en,e=nn,n=S);t<e;)n(Ze[t]),t++;nn=en}}function Zi(t){return{container:ft,slideItems:pt,navContainer:$e,navItems:Ze,controlsContainer:Qe,hasControls:Pe,prevButton:Ye,nextButton:Ke,items:Dt,slideBy:Pt,cloneCount:ee,slideCount:mt,slideCountNew:ne,index:ce,indexCached:fe,displayIndex:Nn(),navCurrentIndex:an,navCurrentIndexCached:on,pages:en,pagesCached:nn,sheet:Ut,isOn:yt,event:t||{}}}X&&console.warn("No slides found in",t.container)};W({container:".my-slider",items:1,slideBy:1,autoplay:!0,fixedWidth:500,autoWidth:!0,viewportMax:1,center:!0})}]);
//# sourceMappingURL=bundle.js.map