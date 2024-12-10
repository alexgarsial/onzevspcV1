var z=Object.defineProperty;var B=(t,s,a)=>s in t?z(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a;var S=(t,s,a)=>B(t,typeof s!="symbol"?s+"":s,a);import{r as m,a as Q,m as h,R as F}from"./vendor-CfAyLfj2.js";import{l as V,n as W}from"./game-DDYgDngS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(l){if(l.ep)return;l.ep=!0;const n=a(l);fetch(l.href,n)}})();var D={exports:{}},P={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z=m,Y=Symbol.for("react.element"),X=Symbol.for("react.fragment"),ee=Object.prototype.hasOwnProperty,te=Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,se={key:!0,ref:!0,__self:!0,__source:!0};function J(t,s,a){var r,l={},n=null,c=null;a!==void 0&&(n=""+a),s.key!==void 0&&(n=""+s.key),s.ref!==void 0&&(c=s.ref);for(r in s)ee.call(s,r)&&!se.hasOwnProperty(r)&&(l[r]=s[r]);if(t&&t.defaultProps)for(r in s=t.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Y,type:t,key:n,ref:c,props:l,_owner:te.current}}P.Fragment=X;P.jsx=J;P.jsxs=J;D.exports=P;var e=D.exports,H,L=Q;H=L.createRoot,L.hydrateRoot;const v=({card:t,onClick:s,isSelectable:a=!1,isHidden:r=!1,isSelected:l=!1})=>{const n=i=>i==="hearts"||i==="diamonds"?"text-red-600":"text-black",c=i=>{switch(i){case"hearts":return"♥";case"diamonds":return"♦";case"clubs":return"♣";case"spades":return"♠";default:return""}};return r?e.jsx(h.div,{className:`w-14 h-20 sm:w-16 sm:h-24 md:w-20 md:h-32 lg:w-24 lg:h-36
          bg-gradient-to-br from-blue-600 to-blue-800
          rounded-xl border-2 border-white/20
          shadow-lg hover:shadow-xl transition-shadow
          flex items-center justify-center p-2 m-1
          transform-gpu cursor-default`,children:e.jsx("div",{className:`w-full h-full rounded-lg border-2 border-white/10 bg-white/5 
          flex items-center justify-center`,children:e.jsx("div",{className:"text-white/20 text-2xl sm:text-3xl md:text-4xl font-bold",children:"♠"})})}):e.jsxs(h.div,{whileHover:a?{scale:1.05,y:-8}:{},whileTap:a?{scale:.95}:{},onClick:a?s:void 0,className:`
        w-14 h-20 sm:w-16 sm:h-24 md:w-20 md:h-32 lg:w-24 lg:h-36
        bg-white rounded-xl border-4 
        ${l?"border-yellow-400 ring-4 ring-yellow-400/50 shadow-yellow-400/30":a?"border-blue-300 hover:border-blue-500 cursor-pointer":"border-gray-300 cursor-default"}
        shadow-lg hover:shadow-xl 
        transition-all duration-200
        flex flex-col justify-between p-1 sm:p-2 m-1
        transform-gpu
      `,children:[e.jsxs("div",{className:`text-xs sm:text-sm md:text-base lg:text-lg font-bold ${n(t.suit)}`,children:[t.rank,e.jsx("span",{className:"ml-1",children:c(t.suit)})]}),e.jsx("div",{className:`text-xl sm:text-2xl md:text-3xl lg:text-4xl self-center ${n(t.suit)}`,children:c(t.suit)}),e.jsxs("div",{className:`text-xs sm:text-sm md:text-base lg:text-lg font-bold rotate-180 ${n(t.suit)}`,children:[t.rank,e.jsx("span",{className:"ml-1",children:c(t.suit)})]})]})};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ae={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),b=(t,s)=>{const a=m.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:n=2,absoluteStrokeWidth:c,className:i="",children:d,...p},o)=>m.createElement("svg",{ref:o,...ae,width:l,height:l,stroke:r,strokeWidth:c?Number(n)*24/Number(l):n,className:["lucide",`lucide-${re(t)}`,i].join(" "),...p},[...s.map(([x,u])=>m.createElement(x,u)),...Array.isArray(d)?d:[d]]));return a.displayName=`${t}`,a};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=b("ArrowDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=b("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=b("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=b("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=b("Club",[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=b("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=b("Diamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=b("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=b("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=b("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=b("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=b("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),I=({cards:t,isOpponent:s=!1,selectedCard:a,onCardClick:r,isCurrentPlayer:l=!1,playerName:n,score:c})=>e.jsxs(h.div,{className:`mb-4 sm:mb-8 ${l?"opacity-100":"opacity-70"}`,initial:{opacity:0,y:s?-20:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsx("div",{className:"text-center mb-2 sm:mb-4",children:e.jsxs(h.div,{className:`inline-flex items-center gap-2 bg-blue-600/80 backdrop-blur-sm 
            px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg`,whileHover:{scale:1.05},children:[e.jsx(xe,{className:"w-4 h-4 sm:w-5 sm:h-5 text-white"}),e.jsx("div",{className:"text-white text-sm sm:text-base md:text-lg font-bold",children:n})]})}),e.jsx("div",{className:"flex justify-center flex-wrap gap-1 sm:gap-2",children:t.map((i,d)=>e.jsx(h.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.3,delay:d*.1},className:a===i?"transform -translate-y-4":"",children:e.jsx(v,{card:i,isSelectable:l&&!s,onClick:()=>r==null?void 0:r(i),isHidden:s})},d))})]}),pe=({cards:t,selectedCards:s,onCardClick:a,isSelectable:r})=>e.jsx(h.div,{className:`
        bg-green-700/50 backdrop-blur-sm p-2 sm:p-4 rounded-xl sm:rounded-2xl mb-4 sm:mb-8 
        min-h-[160px] sm:min-h-[200px]
        border-4 ${r?"border-blue-300/50":"border-green-600/30"} 
        shadow-inner transition-all duration-200
        ${r?"hover:border-blue-300":""}
      `,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:e.jsx("div",{className:"flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4",children:t.map((l,n)=>e.jsx(h.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.3,delay:n*.1},children:e.jsx(v,{card:l,isSelectable:r,onClick:()=>a(l),isSelected:s.includes(l)})},`${l.suit}-${l.rank}`))})}),fe=({currentPlayer:t,isComputerThinking:s=!1,deckCount:a,tableCardsCount:r})=>e.jsxs("div",{className:"flex flex-col items-center gap-2 mb-4 sm:mb-6",children:[e.jsxs(h.div,{className:`
          px-3 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg flex items-center gap-2
          ${s?"bg-gradient-to-r from-blue-600 to-blue-800":"bg-gradient-to-r from-blue-600 to-blue-500"} text-white
        `,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},whileHover:{scale:1.05},children:[e.jsx(h.div,{animate:s?{rotate:360}:{},transition:{duration:2,repeat:s?1/0:0,ease:"linear"},children:e.jsx(ne,{className:"w-5 h-5 sm:w-6 sm:h-6"})}),e.jsx("span",{className:"text-sm sm:text-base md:text-lg font-bold",children:s?"L'ordinateur réfléchit...":`Tour du Joueur ${t}`})]}),e.jsxs("div",{className:"flex gap-4 text-white text-xs sm:text-sm",children:[e.jsxs("span",{children:["Pioche: ",a]}),e.jsxs("span",{children:["Table: ",r]})]})]}),R=({cards:t,playerName:s})=>{if(t.length===0)return null;const a=t.filter(n=>n.suit==="clubs").length,r=t.some(n=>n.rank==="10"&&n.suit==="diamonds"),l=t.some(n=>n.rank==="2"&&n.suit==="clubs");return e.jsx(h.div,{className:"mb-4 flex items-center justify-center",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.3},children:e.jsxs(h.div,{className:`bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 
          flex items-center gap-3 shadow-lg border border-white/20`,whileHover:{scale:1.05},children:[e.jsx(me,{className:"w-5 h-5 text-white"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"text-white text-sm sm:text-base",children:["Cartes: ",t.length]}),e.jsxs("span",{className:"text-white text-sm sm:text-base flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"♣"}),a]}),e.jsxs("div",{className:"flex gap-2",children:[r&&e.jsx("span",{className:"bg-red-600 text-white px-2 py-1 rounded-full text-sm",children:"10♦"}),l&&e.jsx("span",{className:"bg-green-600 text-white px-2 py-1 rounded-full text-sm",children:"2♣"})]})]})]})})},ye=({card:t,onComplete:s})=>e.jsx(h.div,{className:"fixed top-[15%] right-[15%] z-50",initial:{x:0,y:0,rotate:15,scale:.8,opacity:0},animate:{x:-200,y:200,rotate:0,scale:1,opacity:1},transition:{duration:.5,ease:[.16,1,.3,1],opacity:{duration:.2}},onAnimationComplete:s,children:e.jsx(h.div,{initial:{boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"},animate:{boxShadow:"0 20px 25px rgba(0, 0, 0, 0.15)",y:[0,-10,0]},transition:{boxShadow:{duration:.2},y:{duration:.5,ease:"easeOut"}},children:e.jsx(v,{card:t,isSelectable:!1})})}),be=({selectedCard:t,capturedCards:s})=>{const[a,r]=m.useState(!0),[l,n]=m.useState(!1),c=()=>{r(!1),s.length>0&&n(!0)};return a?e.jsx(ye,{card:t,onComplete:c}):s.length===0?e.jsxs(h.div,{className:`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600/80 backdrop-blur-sm 
          text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},children:[e.jsx(le,{className:"w-5 h-5"}),e.jsx("span",{children:"L'ordinateur dépose une carte"})]}):l?e.jsx(h.div,{className:"fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(h.div,{className:"bg-white/10 p-8 rounded-2xl",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.2},children:[e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-2",children:"Capture!"}),e.jsxs("p",{className:"text-yellow-400",children:["L'ordinateur capture ",s.length," carte",s.length>1?"s":""]})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-white text-center mb-2",children:"Avec:"}),e.jsx(v,{card:t,isSelectable:!1})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white text-center mb-2",children:"Cartes capturées:"}),e.jsx("div",{className:"flex gap-2",children:s.map((i,d)=>e.jsx(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3+d*.1},children:e.jsx(v,{card:i,isSelectable:!1})},d))})]})]})]})}):null},ge=({players:t,matchWinner:s,onNewGame:a,onNewMatch:r})=>e.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",children:e.jsxs(h.div,{className:"bg-white rounded-xl shadow-2xl w-full max-w-md p-4 sm:p-6 md:p-8",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.3},children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6",children:s?e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx(O,{className:"w-5 h-5 sm:w-6 sm:h-6 text-yellow-400"}),e.jsxs("span",{children:[t[s-1].name," gagne le match!"]})]}):"Fin de la partie"}),e.jsx("div",{className:"space-y-4 sm:space-y-6 mb-4 sm:mb-6",children:t.map(l=>e.jsxs("div",{className:"bg-gray-100 rounded-lg p-3 sm:p-4",children:[e.jsx("h3",{className:"font-bold text-base sm:text-lg mb-2",children:l.name}),e.jsxs("div",{className:"space-y-2 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ue,{className:"w-4 h-4"}),e.jsx("span",{children:"10♦"})]}),e.jsxs("span",{className:"font-medium",children:["+",l.score," points"]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(oe,{className:"w-4 h-4"}),e.jsx("span",{children:"Trèfles"})]}),e.jsxs("span",{className:"font-medium",children:[l.matchPoints," points"]})]})]})]},l.id))}),e.jsxs("button",{onClick:s?r:a,className:`w-full bg-blue-600 text-white px-4 py-2 sm:py-3 rounded-lg hover:bg-blue-700 
            transition-colors font-semibold flex items-center justify-center gap-2`,children:[e.jsx(O,{className:"w-4 h-4 sm:w-5 sm:h-5"}),s?"Nouveau Match":"Nouvelle Partie"]})]})}),je=["hearts","diamonds","clubs","spades"],we=["A","2","3","4","5","6","7","8","9","10","J","Q","K"],ke=()=>{const t=[];return je.forEach(s=>{we.forEach(a=>{t.push({suit:s,rank:a,value:Ne(a)})})}),ve(t)},Ne=t=>t==="A"?1:t==="J"||t==="Q"||t==="K"?0:parseInt(t),ve=t=>{const s=[...t];for(let a=s.length-1;a>0;a--){const r=Math.floor(Math.random()*(a+1));[s[a],s[r]]=[s[r],s[a]]}return s},Ce=t=>{let s=[],a=[...t],r=[];for(let l=0;l<4;l++){const n=a.shift();if(!n)break;n.rank==="J"?r.push(n):s.push(n)}if(r.length>0)for(a=[...a,...r];s.length<4&&a.length>0;){const l=a.shift();if(!l)break;l.rank==="J"?a.push(l):s.push(l)}return{tableCards:s,updatedDeck:a}},_=(t,s)=>{let a=0;t.some(n=>n.rank==="10"&&n.suit==="diamonds")&&(a+=1),t.some(n=>n.rank==="2"&&n.suit==="clubs")&&(a+=1);const r=t.filter(n=>n.suit==="clubs").length,l=s.filter(n=>n.suit==="clubs").length;return r>l?a+=1:r===l&&(a+=.5),t.length>s.length?a+=2:t.length===s.length&&(a+=1),{score:a}},Pe=t=>`${t.suit}-${t.rank}`,M=t=>{const s=new Map;return t.forEach(a=>{const r=Pe(a);s.has(r)||s.set(r,a)}),Array.from(s.values())},Se=(t,s,a,r,l,n)=>{const c=r.length>0?s:n!==null?n-1:s;let i=[...t.players[0].capturedCards],d=[...t.players[1].capturedCards];c===0?i=M([...i,a,...r,...l]):d=M([...d,a,...r,...l]);const{score:p}=_(i,d),{score:o}=_(d,i),x=[t.players[0].matchPoints+p,t.players[1].matchPoints+o];return{...t,tableCards:[],players:[{...t.players[0],cards:[],capturedCards:i,score:p,matchPoints:x[0]},{...t.players[1],cards:[],capturedCards:d,score:o,matchPoints:x[1]}],isGameOver:!0,matchWinner:x[0]>=11?1:x[1]>=11?2:null}};function Me(t){const[s,a]=m.useState(null),[r,l]=m.useState(null),[n,c]=m.useState({deck:[],players:[{id:1,cards:[],capturedCards:[],score:0,name:"Player 1",matchPoints:0},{id:2,cards:[],capturedCards:[],score:0,name:t?"Ordinateur":"Player 2",matchPoints:0}],tableCards:[],currentPlayer:1,isGameOver:!1,jackOnTable:!1,selectedCards:[],selectedPlayerCard:null,discardPile:[],matchWinner:null}),i=m.useCallback(()=>{const o=ke(),x=o.splice(0,4),u=o.splice(0,4),{tableCards:f,updatedDeck:w}=Ce(o),g=s===null?1:s===1?2:1;a(g),l(null),c(y=>({...y,deck:w,players:[{...y.players[0],cards:x,capturedCards:[],score:0},{...y.players[1],cards:u,capturedCards:[],score:0}],tableCards:f,currentPlayer:g,isGameOver:!1,matchWinner:null}))},[s]),d=m.useCallback(()=>{a(null),c(o=>({...o,players:o.players.map(x=>({...x,cards:[],capturedCards:[],score:0,matchPoints:0})),deck:[],tableCards:[],isGameOver:!1,matchWinner:null})),setTimeout(i,0)},[i]),p=m.useCallback((o,x)=>{c(u=>{const f=u.currentPlayer-1,w=1-f,g=u.players[f].cards.filter(j=>j.suit!==o.suit||j.rank!==o.rank);let y=[...u.players[f].capturedCards];x.length>0&&(y=M([...y,o,...x]),l(u.currentPlayer));const k=x.length>0?u.tableCards.filter(j=>!x.some(N=>N.suit===j.suit&&N.rank===j.rank)):[...u.tableCards,o],U=u.deck.length<8,A=g.length===0&&u.players[w].cards.length===0;if(U&&A)return Se(u,f,o,x,k,r);if(A&&u.deck.length>=8){const j=[...u.deck],N=j.splice(0,4),G=j.splice(0,4);return{...u,deck:j,players:[{...u.players[0],cards:N,capturedCards:f===0?y:u.players[0].capturedCards},{...u.players[1],cards:G,capturedCards:f===1?y:u.players[1].capturedCards}],tableCards:k,currentPlayer:u.currentPlayer===1?2:1}}return{...u,tableCards:k,players:[{...u.players[0],cards:f===0?g:u.players[0].cards,capturedCards:f===0?y:u.players[0].capturedCards},{...u.players[1],cards:f===1?g:u.players[1].cards,capturedCards:f===1?y:u.players[1].capturedCards}],currentPlayer:u.currentPlayer===1?2:1}})},[r]);return{gameState:n,playMove:p,initializeGame:i,startNewMatch:d}}const C=t=>t.reduce((s,a)=>a.rank==="A"?s+1:a.rank==="J"||a.rank==="Q"||a.rank==="K"?s:s+parseInt(a.rank),0),Te=(t,s)=>{const a=[];if(t.rank==="Q"||t.rank==="K"){const n=s.filter(c=>c.rank===t.rank);return n.length>0&&a.push([n[0]]),a}if(t.rank==="J")return a;const r=s.filter(n=>!["K","Q","J"].includes(n.rank)),l=(n,c,i)=>{const d=C([t,...i]);if(d===11){a.push([...i]);return}if(!(d>11))for(let p=c;p<n.length;p++)i.push(n[p]),l(n,p+1,i),i.pop()};return l(r,0,[]),a},T=t=>t.rank==="J",K=t=>t.filter(s=>s.rank!=="K"&&s.rank!=="Q"),Ae=(t,s,a)=>t.rank==="Q"||t.rank==="K"?s.length>0?!1:t.rank===a.rank:T(t)?a.rank!=="K"&&a.rank!=="Q":a.rank==="K"||a.rank==="Q"||a.rank==="J"?!1:C([t,...s])+C([a])<=11,Ge=(t,s)=>{const[a,r]=m.useState(null),[l,n]=m.useState([]),c=m.useCallback(()=>{r(null),n([])},[]),i=m.useCallback(o=>{if(a===o){c();return}r(o),n([])},[a,c]),d=m.useCallback(o=>{if(a){if(l.includes(o)){n(x=>x.filter(u=>u!==o));return}Ae(a,l,o)&&n(x=>[...x,o])}},[a,l]),p=m.useCallback(()=>{if(a){if(l.length>0){if(a.rank==="K"||a.rank==="Q"){if(l.length!==1||a.rank!==l[0].rank)return}else if(T(a)){const o=K(s);if(!l.every(x=>o.includes(x)))return}else if(C([a,...l])!==11)return}t(a,l),c()}},[a,l,s,t,c]);return{selectedCard:a,selectedTableCards:l,handleCardSelect:i,handleTableCardSelect:d,handlePlaceCard:p,clearSelection:c}},$=t=>{let s=t.length;return t.some(a=>a.rank==="10"&&a.suit==="diamonds")&&(s+=10),t.some(a=>a.rank==="2"&&a.suit==="clubs")&&(s+=5),s+=t.filter(a=>a.suit==="clubs").length*3,s},Le=t=>{const s=t.players[1].cards;if(s.length===0)return null;let a=null,r=-1;const l=t.tableCards.find(n=>n.rank==="10"&&n.suit==="diamonds");if(l){const n=s.find(c=>c.rank==="A");if(n)return{card:n,capturedCards:[l]}}for(const n of s){if(T(n)){const i=K(t.tableCards);if(i.length>0){const d=$(i);d>r&&(r=d,a={card:n,capturedCards:i})}continue}const c=Te(n,t.tableCards);for(const i of c){const d=$(i);d>r&&(r=d,a={card:n,capturedCards:i})}}return a||{card:Oe(s),capturedCards:[]}},Oe=t=>{const s=t.filter(a=>a.suit!=="clubs");return s.length>0?s[0]:t[0]},Ie=(t,s,a)=>{const[r,l]=m.useState(null),[n,c]=m.useState(!1);return m.useEffect(()=>{if(!t||s.currentPlayer!==2||s.isGameOver)return;let i=!0;c(!0);const d=setTimeout(()=>{if(!i)return;const p=Le(s);if(i&&p){l(p);const o=setTimeout(()=>{i&&(a(p.card,p.capturedCards),l(null),c(!1))},1500);return()=>clearTimeout(o)}},1e3);return()=>{i=!1,clearTimeout(d),c(!1)}},[s.currentPlayer,t,s.isGameOver,s.tableCards,s.players]),{computerMove:r,isComputerThinking:n}},Re=({isComputerOpponent:t=!1,gameId:s,playerNumber:a})=>{const{gameState:r,playMove:l,initializeGame:n,startNewMatch:c}=Me(t),{selectedCard:i,selectedTableCards:d,handleCardSelect:p,handleTableCardSelect:o,handlePlaceCard:x,clearSelection:u}=Ge(l,r.tableCards),{computerMove:f,isComputerThinking:w}=Ie(t,r,l);m.useEffect(()=>{n()},[]);const g=(y,k)=>{r.currentPlayer!==k||w||t&&k===2||p(y)};return e.jsx("div",{className:"min-h-screen bg-green-800 p-4",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsx(fe,{currentPlayer:r.currentPlayer,isComputerThinking:w,deckCount:r.deck.length,tableCardsCount:r.tableCards.length}),e.jsx(I,{cards:r.players[1].cards,isOpponent:t,selectedCard:r.currentPlayer===2?i:null,onCardClick:y=>g(y,2),isCurrentPlayer:r.currentPlayer===2,playerName:`${r.players[1].name} (${r.players[1].matchPoints} pts)`,score:r.players[1].score}),e.jsx(R,{cards:r.players[1].capturedCards,playerName:r.players[1].name}),e.jsx(pe,{cards:r.tableCards,selectedCards:d,onCardClick:o,isSelectable:!!i&&!w}),e.jsx(R,{cards:r.players[0].capturedCards,playerName:r.players[0].name}),e.jsx(I,{cards:r.players[0].cards,isOpponent:!1,selectedCard:r.currentPlayer===1?i:null,onCardClick:y=>g(y,1),isCurrentPlayer:r.currentPlayer===1,playerName:`${r.players[0].name} (${r.players[0].matchPoints} pts)`,score:r.players[0].score}),i&&!w&&e.jsx("div",{className:"fixed bottom-4 right-4",children:e.jsx("button",{className:"bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors",onClick:x,children:d.length>0?"Confirmer la capture":"Déposer sur le tapis"})}),f&&e.jsx(be,{selectedCard:f.card,capturedCards:f.capturedCards}),r.isGameOver&&e.jsx(ge,{players:r.players,matchWinner:r.matchWinner,onNewGame:n,onNewMatch:c})]})})},_e=({onSelectMode:t})=>e.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 flex items-center justify-center p-4",children:e.jsxs(h.div,{className:"bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Game of 11"}),e.jsx("p",{className:"text-gray-600",children:"Choisissez votre mode de jeu"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs(h.button,{className:"w-full bg-blue-600 text-white rounded-lg py-4 px-6 flex items-center gap-3",whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>t("computer"),children:[e.jsx(ce,{className:"w-6 h-6"}),e.jsx("span",{className:"flex-1 text-left",children:"Jouer contre l'ordinateur"})]}),e.jsxs(h.button,{className:"w-full bg-green-600 text-white rounded-lg py-4 px-6 flex items-center gap-3",whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>t("multiplayer"),children:[e.jsx(q,{className:"w-6 h-6"}),e.jsx("span",{className:"flex-1 text-left",children:"Jouer à deux"})]})]})]})}),$e="https://api.light-box.be";class Ee{constructor(){S(this,"socket",null);S(this,"gameId",null)}connect(s,a){return this.socket=V($e,{query:{gameId:s,playerNumber:a}}),this.gameId=s,this.socket.on("connect",()=>{console.log("Connected to game server")}),this.socket}disconnect(){this.socket&&(this.socket.disconnect(),this.socket=null,this.gameId=null)}playCard(s,a){this.socket&&this.socket.emit("play_card",{gameId:this.gameId,card:s,capturedCards:a})}onGameStateUpdate(s){this.socket&&this.socket.on("game_state_update",s)}onPlayerJoined(s){this.socket&&this.socket.on("player_joined",s)}onPlayerLeft(s){this.socket&&this.socket.on("player_left",s)}}const E=new Ee,De=({gameId:t,onCancel:s,onStart:a})=>{const[r,l]=F.useState(!1);m.useEffect(()=>(E.connect(t,1).on("player_joined",()=>{a()}),()=>{E.disconnect()}),[t,a]);const n=()=>{navigator.clipboard.writeText(t),l(!0),setTimeout(()=>l(!1),2e3)};return e.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",children:e.jsxs(h.div,{className:"bg-white rounded-xl shadow-2xl p-8 max-w-md w-full",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:[e.jsxs("div",{className:"flex items-center justify-center mb-6",children:[e.jsx(he,{className:"w-6 h-6 text-blue-600 animate-spin mr-3"}),e.jsx("h2",{className:"text-2xl font-bold",children:"En attente d'un autre joueur"})]}),e.jsxs("div",{className:"bg-gray-100 rounded-lg p-4 mb-6",children:[e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Code de la partie :"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("code",{className:"flex-1 bg-white px-4 py-2 rounded border border-gray-300 font-mono text-lg",children:t}),e.jsx("button",{onClick:n,className:"p-2 hover:bg-gray-200 rounded-lg transition-colors",title:"Copier le code",children:e.jsx(de,{className:"w-5 h-5 text-gray-600"})})]})]}),e.jsx("div",{className:"text-center text-gray-600 mb-6",children:e.jsx("p",{children:"Partagez ce code avec votre adversaire pour qu'il puisse rejoindre la partie."})}),e.jsx("button",{onClick:s,className:"w-full bg-gray-200 text-gray-800 rounded-lg py-2 px-4 hover:bg-gray-300 transition-colors",children:"Annuler"}),r&&e.jsx(h.div,{className:"fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg",initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},children:"Code copié !"})]})})},Je=({onJoinGame:t})=>{const[s,a]=m.useState(""),[r,l]=m.useState(null),[n,c]=m.useState(null),i=()=>{const o=W(6).toUpperCase();l(o)},d=o=>{o.preventDefault(),s.length===6&&t(s.toUpperCase(),2)},p=()=>{l(null)};return r?e.jsx(De,{gameId:r,onCancel:p,onStart:()=>t(r,1)}):e.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 flex items-center justify-center p-4",children:e.jsxs(h.div,{className:"bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Game of 11"}),e.jsx("p",{className:"text-gray-600",children:"Jouez avec un ami en ligne"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs(h.button,{className:"w-full bg-blue-600 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 font-semibold",whileHover:{scale:1.02},whileTap:{scale:.98},onClick:i,children:[e.jsx(q,{className:"w-5 h-5"}),"Créer une nouvelle partie"]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"w-full border-t border-gray-300"})}),e.jsx("div",{className:"relative flex justify-center text-sm",children:e.jsx("span",{className:"px-2 bg-white text-gray-500",children:"ou"})})]}),e.jsxs("form",{onSubmit:d,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"gameCode",className:"block text-sm font-medium text-gray-700 mb-1",children:"Rejoindre avec un code"}),e.jsx("div",{className:"relative",children:e.jsx("input",{type:"text",id:"gameCode",maxLength:6,className:"block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-center uppercase tracking-widest text-lg font-mono",placeholder:"ABC123",value:s,onChange:o=>a(o.target.value.toUpperCase())})})]}),e.jsxs(h.button,{type:"submit",className:"w-full bg-green-600 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 font-semibold disabled:opacity-50",disabled:s.length!==6,whileHover:{scale:1.02},whileTap:{scale:.98},children:[e.jsx(ie,{className:"w-5 h-5"}),"Rejoindre la partie"]})]})]}),n&&e.jsx(h.div,{className:"mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded",initial:{opacity:0},animate:{opacity:1},children:n})]})})};function He(){const[t,s]=m.useState({mode:null,inGame:!1}),a=n=>{s({mode:n,inGame:n==="computer"})},r=(n,c)=>{s({mode:"multiplayer",inGame:!0,gameId:n,playerNumber:c})},l=()=>{s({mode:null,inGame:!1})};return t.inGame?e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsxs("header",{className:"bg-blue-600 text-white p-4 text-center",children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Game of 11"}),e.jsx("p",{className:"text-sm mt-2",children:t.mode==="computer"?"Mode Ordinateur":"Mode Multijoueur"}),t.gameId&&e.jsxs("p",{className:"text-sm mt-1 bg-blue-700 inline-block px-3 py-1 rounded-full",children:["Code partie: ",t.gameId]})]}),e.jsx(Re,{isComputerOpponent:t.mode==="computer",gameId:t.gameId,playerNumber:t.playerNumber})]}):t.mode==="multiplayer"?e.jsx(Je,{onJoinGame:r,onBack:l}):e.jsx(_e,{onSelectMode:a})}H(document.getElementById("root")).render(e.jsx(m.StrictMode,{children:e.jsx(He,{})}));
//# sourceMappingURL=index-D66-9v-0.js.map