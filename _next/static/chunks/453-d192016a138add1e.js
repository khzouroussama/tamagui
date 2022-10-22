"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[453],{660:function(n,e,o){o.r(e)},2910:function(n,e,o){o.r(e)},2386:function(n,e,o){o.r(e)},6186:function(n,e,o){o.d(e,{E:function(){return h}});var r=o(7328),t=o(6297),i=o(2322),s=o(1560),d=o(8694),a=o(6030),l=o(2784),c=o(9291);l.createElement;const u=(0,s.z)(c.Z,{name:"Image",source:{uri:""},zIndex:"_zi-1",position:"_pos-relative"},{inlineProps:new Set(["src","width","height"]),isReactNativeWeb:!0}),h=u.extractable((n=>{const e=(0,d.p)(n),{src:o}=e,s=(0,t.Z)(e,["src"]),l="string"===typeof o?(0,r.Z)({uri:o},a.$L&&{width:e.width,height:e.height}):o;return(0,i.jsx)(u,(0,r.Z)({source:l},s))}));o(660)},390:function(n,e,o){o.d(e,{r:function(){return d}});var r=o(2322),t=o(6030),i=o(5300),s=o(2784);function d(n){let{children:e,columns:o,itemMinWidth:d=200,gap:a}=n;if(t.$L)return(0,r.jsx)("div",{style:{gap:a,display:"grid",justifyContent:"stretch",gridTemplateColumns:"repeat( auto-fit, minmax(".concat(d,"px, 1fr) )")},children:e});const l=s.Children.toArray(e);return(0,r.jsx)(i.sL,{alignItems:"center",justifyContent:"center",flexWrap:"wrap",children:l.map(((n,e)=>n?(0,r.jsx)(i.sL,{flex:1,minWidth:d,marginRight:a,marginBottom:a,children:n},e):null))})}},1662:function(n,e,o){o.d(e,{E4:function(){return y},gF:function(){return j}});var r=o(7328),t=o(6670),i=o(6297),s=o(2322),d=o(1560),a=o(5337),l=o(8694),c=o(5678),u=o(936),h=o(7805),k=o(9390),f=o(9377),p=o(2784),x=o(1077);const L=(0,d.z)(f.K,{name:"GroupFrame",variants:{size:(n,e)=>{let{tokens:o}=e;var r,t;return{borderRadius:null!==(t=null!==(r=o.radius[n])&&void 0!==r?r:n)&&void 0!==t?t:o.radius.$4}}},defaultVariants:{size:"$4"},overflowX:"_overflowX-hidden",overflowY:"_overflowY-hidden",backgroundColor:"_bg-180kg62",transform:"_transform-19qlv72"});function m(n){return L.extractable((0,p.forwardRef)(((e,o)=>{const d=(0,a.lA)(e),k=(0,l.p)(d),{children:f,space:x,size:m="$4",spaceDirection:j,separator:y,scrollable:w,vertical:b=n,disabled:$,disablePassBorderRadius:W,disablePassSize:z,borderRadius:R}=k,H=(0,i.Z)(k,["children","space","size","spaceDirection","separator","scrollable","vertical","disabled","disablePassBorderRadius","disablePassSize","borderRadius"]),B=null!==R&&void 0!==R?R:m?(0,c.Ve)((0,u.lz)(!0).radius[m])-1:void 0,C=void 0!==B,Z=null!==W&&void 0!==W?W:!C,E=p.Children.toArray(f),N=null!==z&&void 0!==z?z:void 0===m,A=E.map(((n,e)=>{if(!(0,p.isValidElement)(n))return n;var o;const t=null!==(o=n.props.disabled)&&void 0!==o?o:$,i=0===e,s=e===E.length-1,d=(0,r.Z)({disabled:t},!N&&{size:m},!Z&&(0,r.Z)({borderTopLeftRadius:0,borderTopRightRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0},C&&(0,r.Z)({},i&&!b&&{borderTopLeftRadius:B,borderBottomLeftRadius:B},i&&b&&{borderTopLeftRadius:B,borderTopRightRadius:B},s&&!b&&{borderTopRightRadius:B,borderBottomRightRadius:B},s&&b&&{borderBottomLeftRadius:B,borderBottomRightRadius:B})));return v(n,d)}));return(0,s.jsx)(L,(0,t.Z)((0,r.Z)({ref:o,size:m,flexDirection:b?"column":"row",borderRadius:R},H),{children:g(d,(0,h.P9)({direction:j,separator:y,space:x,children:A}))}))})))}const j=m(!0),y=m(!1),g=(n,e)=>{let{scrollable:o,vertical:i,showScrollIndicator:d=!1}=n;return o?(0,s.jsx)(x.Z,(0,t.Z)((0,r.Z)({},i&&{showsVerticalScrollIndicator:d},!i&&{horizontal:!0,showsHorizontalScrollIndicator:d}),{children:e})):e},v=(n,e)=>{const o=(0,k.d)(n.props,e,!1,(0,u.iE)().shorthands)[0];return p.cloneElement((0,t.Z)((0,r.Z)({},n),{props:null}),o)};o(2910)},7312:function(n,e,o){o.d(e,{o:function(){return y}});var r=o(7328),t=o(6670),i=o(6297),s=o(2322),d=o(4018),a=o(1560),l=o(4722),c=o(5678),u=o(5300),h=o(2784),k=o(5314),f=o(8033),p=o(4902),x=o(2267);function L({colors:n,locations:e,startPoint:o,endPoint:r,...t}){const[i,s]=h.useState(null),{width:d=1,height:a=1}=i??{},l=`linear-gradient(${h.useMemo((()=>{const[n,e]=(()=>{let n=[0,0];Array.isArray(o)&&(n=[null!=o[0]?o[0]:0,null!=o[1]?o[1]:0]);let e=[0,1];return Array.isArray(r)&&(e=[null!=r[0]?r[0]:0,null!=r[1]?r[1]:1]),[n,e]})();n[0]*=d,e[0]*=d,n[1]*=a,e[1]*=a;const t=e[1]-n[1],i=e[0]-n[0];return 90+180*Math.atan2(t,i)/Math.PI}),[d,a,o,r])}deg, ${h.useMemo((()=>n.map(((n,o)=>{const r=function(n,e=1){if(null==n)return;if("string"===typeof n&&(n=>"currentcolor"===n||"currentColor"===n||"inherit"===n||0===n.indexOf("var("))(n))return n;const o=(0,p.a)(n);if(null!=o)return`rgba(${o>>16&255},${o>>8&255},${255&o},${((o>>24&255)/255*e).toFixed(2)})`}(n);let t=r;if(e&&e[o]){t+=` ${100*Math.max(0,Math.min(1,e[o]))}%`}return t}))),[n,e]).join(",")})`;return h.createElement(x.Z,{...t,style:[t.style,{backgroundImage:l}],onLayout:n=>{const{x:e,y:o,width:r,height:d}=n.nativeEvent.layout,a=i??{x:0,y:0,width:1,height:1};e===a.x&&o===a.y&&r===a.width&&d===a.height||s({x:e,y:o,width:r,height:d}),t.onLayout&&t.onLayout(n)}})}class m extends h.Component{render(){const{colors:n,locations:e,start:o,end:r,...t}=this.props;let i=e;return e&&n.length!==e.length&&(console.warn("LinearGradient colors and locations props should be arrays of the same length"),i=e.slice(0,n.length)),h.createElement(L,{...t,colors:f.Z.select({web:n,default:n.map(p.a)}),locations:i,startPoint:j(o),endPoint:j(r)})}}function j(n){if(n){if(!Array.isArray(n)||2===n.length)return Array.isArray(n)?n:[n.x,n.y];console.warn("start and end props for LinearGradient must be of the format [x,y] or {x, y}")}}h.createElement;const y=u.FA.extractable((0,d.Y)(h.forwardRef(((n,e)=>{const{start:o,end:d,colors:a,locations:l,children:c}=n,u=(0,i.Z)(n,["start","end","colors","locations","children"]),h=v(a||[]);return(0,s.jsx)(g,(0,t.Z)((0,r.Z)({ref:e},u),{children:(0,s.jsx)(m,{start:o,end:d,colors:h,locations:l,style:[k.Z.absoluteFill],children:c})}))})))),g=(0,a.z)(u.FA,{name:"LinearGradient",position:"_pos-relative",overflowX:"_overflowX-hidden",overflowY:"_overflowY-hidden"}),v=n=>{const e=(0,l.Fg)();return n.map((n=>"$"===n[0]?(0,c.E0)(e[n]||n):n))};o(2386)},5947:function(n,e,o){o.d(e,{Zb:function(){return f}});var r=o(2322),t=o(1560),i=o(7537),s=o(4018),d=o(2784),a=o(102);var l=o(9377);d.createElement;const c=(0,t.z)(l.K,{name:"Card",backgroundColor:"$background",position:"relative",overflow:"hidden",variants:{size:{"...size":(n,{tokens:e})=>({borderRadius:e.radius[n]??n})}},defaultVariants:{size:"$4"}}),u=(0,t.z)(l.K,{name:"CardHeader",zIndex:10,backgroundColor:"transparent",marginBottom:"auto",variants:{size:{"...size":(n,{tokens:e})=>({padding:e.space[n]??n})}}}),h=(0,t.z)(u,{name:"CardFooter",zIndex:5,flexDirection:"row",marginTop:"auto",marginBottom:0}),k=(0,t.z)(l.K,{name:"CardBackground",zIndex:0,fullscreen:!0,overflow:"hidden",pointerEvents:"none",padding:0}),f=(0,i.$)(c.extractable((0,s.Y)((0,d.forwardRef)((({size:n,__scopeCard:e,children:o,...t},i)=>(0,r.jsx)(c,{ref:i,...t,children:d.Children.map(o,(e=>((n,e)=>(0,d.isValidElement)(n)&&(0,a.R)(n.type,e))(e)&&!e.props.size?(0,d.cloneElement)(e,{size:n}):e))}))))),{Header:u,Footer:h,Background:k})},8694:function(n,e,o){o.d(e,{p:function(){return t}});var r=o(936);function t(n){const e=(0,r.iE)().shorthands;if(!e)return n;const o={};for(const r in n)o[e[r]||r]=n[r];return o}},102:function(n,e,o){function r(n,e){const o=n&&n.staticConfig;return!(!o||!o.parsed)&&(!e||e===o.componentName)}o.d(e,{R:function(){return r}})},2029:function(n,e,o){o.d(e,{K:function(){return a}});var r=o(2322),t=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...t}=n;return(0,r.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:[(0,r.jsx)(i.x1,{x1:"12",y1:"5",x2:"12",y2:"19",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.aH,{points:"19 12 12 19 5 12",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="ArrowDown";const a=(0,t.memo)((0,s.H)(d))},5503:function(n,e,o){o.d(e,{J:function(){return a}});var r=o(2322),t=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...t}=n;return(0,r.jsx)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:(0,r.jsx)(i.aH,{points:"20 6 9 17 4 12",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};d.displayName="Check";const a=(0,t.memo)((0,s.H)(d))},1255:function(n,e,o){o.d(e,{s:function(){return a}});var r=o(2322),t=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...t}=n;return(0,r.jsx)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:(0,r.jsx)(i.aH,{points:"15 18 9 12 15 6",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};d.displayName="ChevronLeft";const a=(0,t.memo)((0,s.H)(d))},9941:function(n,e,o){o.d(e,{_:function(){return a}});var r=o(2322),t=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...t}=n;return(0,r.jsx)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:(0,r.jsx)(i.aH,{points:"9 18 15 12 9 6",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};d.displayName="ChevronRight";const a=(0,t.memo)((0,s.H)(d))},3161:function(n,e,o){o.d(e,{E:function(){return a}});var r=o(2322),t=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...t}=n;return(0,r.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:[(0,r.jsx)(i.aH,{points:"16 18 22 12 16 6",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.aH,{points:"8 6 2 12 8 18",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Code";const a=(0,t.memo)((0,s.H)(d))},3557:function(n,e,o){o.d(e,{C:function(){return a}});var r=o(2322),t=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...t}=n;return(0,r.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:[(0,r.jsx)(i.UL,{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.y$,{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Copy";const a=(0,t.memo)((0,s.H)(d))},5920:function(n,e,o){o.d(e,{x:function(){return a}});var r=o(2322),t=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...t}=n;return(0,r.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:[(0,r.jsx)(i.UL,{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.UL,{x:"9",y:"9",width:"6",height:"6",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"9",y1:"2",x2:"9",y2:"4",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"15",y1:"2",x2:"15",y2:"4",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"9",y1:"21",x2:"9",y2:"22",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"15",y1:"20",x2:"15",y2:"22",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"20",y1:"9",x2:"22",y2:"9",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"20",y1:"14",x2:"22",y2:"14",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"2",y1:"9",x2:"4",y2:"9",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"2",y1:"14",x2:"4",y2:"14",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Cpu";const a=(0,t.memo)((0,s.H)(d))},2930:function(n,e,o){o.d(e,{N:function(){return a}});var r=o(2322),t=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...t}=n;return(0,r.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:[(0,r.jsx)(i.mg,{points:"13 19 22 12 13 5 13 19",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.mg,{points:"2 19 11 12 2 5 2 19",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="FastForward";const a=(0,t.memo)((0,s.H)(d))},726:function(n,e,o){o.d(e,{S:function(){return a}});var r=o(2322),t=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...t}=n;return(0,r.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:[(0,r.jsx)(i.mg,{points:"12 2 2 7 12 12 22 7 12 2",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.aH,{points:"2 17 12 22 22 17",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.aH,{points:"2 12 12 17 22 12",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Layers";const a=(0,t.memo)((0,s.H)(d))},1190:function(n,e,o){o.d(e,{H:function(){return a}});var r=o(2322),t=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...t}=n;return(0,r.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:[(0,r.jsx)(i.UL,{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.y$,{d:"M7 11V7a5 5 0 0 1 10 0v4",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Lock";const a=(0,t.memo)((0,s.H)(d))},7576:function(n,e,o){o.d(e,{$:function(){return a}});var r=o(2322),t=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...t}=n;return(0,r.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:[(0,r.jsx)(i.y$,{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.Cd,{cx:"12",cy:"10",r:"3",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="MapPin";const a=(0,t.memo)((0,s.H)(d))},6935:function(n,e,o){o.d(e,{d:function(){return a}});var r=o(2322),t=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...t}=n;return(0,r.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:[(0,r.jsx)(i.UL,{x:"6",y:"4",width:"4",height:"16",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.UL,{x:"14",y:"4",width:"4",height:"16",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Pause";const a=(0,t.memo)((0,s.H)(d))},4128:function(n,e,o){o.d(e,{s:function(){return a}});var r=o(2322),t=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...t}=n;return(0,r.jsx)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:(0,r.jsx)(i.mg,{points:"5 3 19 12 5 21 5 3",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};d.displayName="Play";const a=(0,t.memo)((0,s.H)(d))},5032:function(n,e,o){o.d(e,{F:function(){return a}});var r=o(2322),t=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...t}=n;return(0,r.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:[(0,r.jsx)(i.mg,{points:"11 19 2 12 11 5 11 19",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.mg,{points:"22 19 13 12 22 5 22 19",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Rewind";const a=(0,t.memo)((0,s.H)(d))},2800:function(n,e,o){o.d(e,{U:function(){return a}});var r=o(2322),t=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...t}=n;return(0,r.jsx)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:(0,r.jsx)(i.mg,{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};d.displayName="Star";const a=(0,t.memo)((0,s.H)(d))},8682:function(n,e,o){o.d(e,{Q:function(){return c}});var r=o(2322),t=o(6747),i=o(4128),s=o(3554),d=o(1439),a=o(6669),l=o(9145);function c(n){const[e,o]=(0,s.T)({strategy:"most-recent-wins",prop:n.position,defaultProp:0}),c=u[e],h=(0,d.z)((()=>{o((n=>(n+1)%u.length))}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.b,{focusable:!1,animation:n.animation||"bouncy",onPress:h,size:104,boc:"$backgroundHover",bw:1,br:"$9",bc:"$backgroundStrong",hoverStyle:{scale:1.1},pressStyle:{scale:.9},...c,children:n.children||(0,r.jsx)(t.K7,{downscale:.75})}),(0,r.jsx)(l.zx,{pos:"absolute",b:20,l:20,icon:i.s,theme:n.tint,size:"$5",circular:!0,onPress:h})]})}const u=[{x:0,y:0,scale:1,rotate:"0deg"},{x:-50,y:-50,scale:.5,rotate:"-45deg",hoverStyle:{scale:.6},pressStyle:{scale:.4}},{x:50,y:50,scale:1,rotate:"180deg",hoverStyle:{scale:1.1},pressStyle:{scale:.9}}]},1428:function(n,e,o){o.d(e,{O:function(){return a},q:function(){return l}});var r=o(2784),t=o(6030),i=o(1439),s=o(5378),d=o(941);function a(n,{once:e,...o}={}){const[i,s]=(0,r.useState)([]);return t.$L&&l(n,(n=>{const o=n.some((n=>null==n?void 0:n.isIntersecting));e&&!o||s((e=>{const o=n.map((n=>(null==n?void 0:n.isIntersecting)??!1));return e.length===o.length&&e.every(((n,e)=>n===o[e]))?e:o}))}),o),Array.isArray(n)?i:i[0]}function l(n,e,{threshold:o=0,root:t,rootMargin:a}={},l=[]){const c=(0,i.z)(e),u=(0,s.nj)((0,d.d)());(0,r.useEffect)((()=>{const e=Array.isArray(n)?n:[n];if(!e.length)return;let r=null,i=[];const s=new IntersectionObserver((n=>{i=e.map(((e,o)=>n.find((n=>n.target===e.current))??i[o]??null)),null==r||r(),r=c(i)||null}),{threshold:o,root:t,rootMargin:a});for(const n of e)n.current&&s.observe(n.current);return()=>{null==r||r(),s.disconnect()}}),[u,c,n,t,a,o,...l])}}}]);