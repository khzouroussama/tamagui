(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[377],{381:function(e,t,s){"use strict";var a=s(1706),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var s,r,i,o,c,l,d=!1;t||(t={}),s=t.debug||!1;try{if(i=a(),o=document.createRange(),c=document.getSelection(),(l=document.createElement("span")).textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),"undefined"===typeof a.clipboardData){s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=n[t.format]||n.default;window.clipboardData.setData(r,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))})),document.body.appendChild(l),o.selectNodeContents(l),c.addRange(o),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(m){s&&console.error("unable to copy using execCommand: ",m),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(m){s&&console.error("unable to copy using clipboardData: ",m),s&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(o):c.removeAllRanges()),l&&document.body.removeChild(l),i()}return d}},9939:function(e,t,s){"use strict";s.r(t)},2056:function(e,t,s){"use strict";s.r(t)},3207:function(e,t,s){"use strict";s.r(t)},2055:function(e,t,s){"use strict";s.r(t)},172:function(e,t,s){"use strict";s.r(t)},2350:function(e,t,s){"use strict";s.r(t)},6709:function(e,t,s){"use strict";s.d(t,{i:function(){return l}});var a=s(7328),n=s(6670),r=s(2322),i=(s(2784),s(5300)),o=s(6486);const c=e=>{switch(e){case"Tamagui (No Compiler)":case"Tamagui":return"$pink9";case"Stitches":return"$yellow9";case"Stitches 0.1.9":return"$yellow4";case"Styled Components":case"SC":return"$red9";case"react-native-web":case"RN":case"RNW":case"React Native":return"$purple9";case"Emotion":return"$green9";case"Dripsy":return"$blue9";case"NativeBase":return"$orange9";default:return"gray"}};function l(e){let{data:t,large:s,skipOthers:l=!1,animateEnter:d=!1}=e;const m=Math.max(...t.map((e=>e.value)));return(0,r.jsx)(i.FA,{space:"$2",children:t.map(((e,t)=>{const s="".concat(e.value/m*100,"%");return(0,r.jsxs)(i.sL,{space:"$3",children:[(0,r.jsx)("div",{className:(0,o.concatClassName)("  is_YStack  "),children:(0,r.jsx)("p",{className:(0,o.concatClassName)("  is_Paragraph font_body  "+(e.name," ")),children:e.name},e.name)}),(0,r.jsx)("div",{className:"  is_XStack ",children:(0,r.jsx)(i.FA,(0,n.Z)((0,a.Z)({bc:c(e.name),o:(e.name,1),width:s,height:20,br:"$2",position:"relative",jc:"center",scaleX:1,animation:"lazy"},d&&{enterStyle:{scaleX:0}}),{children:(0,r.jsxs)("p",{className:"  is_Paragraph font_body ",children:[e.value,"ms"]})}))})]},t)}))})}},1497:function(e,t,s){"use strict";s.d(t,{F:function(){return r}});var a=s(2322),n=(s(2784),s(6709));const r=()=>(0,a.jsx)(n.i,{animateEnter:!0,skipOthers:!0,large:!0,data:[{name:"Tamagui",value:.02},{name:"react-native-web",value:.063},{name:"Dripsy",value:.108},{name:"NativeBase",value:.73}]})},3548:function(e,t,s){"use strict";s.d(t,{f:function(){return r}});var a=s(2322),n=s(5503);s(2784);const r=()=>(0,a.jsx)("div",{className:"  is_YStack ",children:(0,a.jsx)(n.J,{size:12,color:"var(--colorHover)"})})},773:function(e,t,s){"use strict";s.d(t,{E:function(){return r},w:function(){return i}});var a=s(1560),n=s(7855);const r=(0,a.z)(n.Paragraph,{name:"Code",tag:"code",fontFamily:"$mono",size:"$3",variants:{colored:{true:{color:"$color",backgroundColor:"$background"}}},borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",paddingTop:"_pt-1aj147z",paddingRight:"_pr-1aj147z",paddingBottom:"_pb-1aj147z",paddingLeft:"_pl-1aj147z",whiteSpace:"_whiteSpace-pre",cursor:"_cur-inherit",lineHeight:"_lh-20px"}),i=(0,a.z)(n.Paragraph,{name:"CodeInline",tag:"code",fontFamily:"$mono",paddingTop:"_pt-lrpjoe",paddingRight:"_pr-lrpjoe",paddingBottom:"_pb-lrpjoe",paddingLeft:"_pl-lrpjoe",fontSize:"_fos-inherit",borderTopLeftRadius:"_btlr-lmimb3",borderTopRightRadius:"_btrr-lmimb3",borderBottomRightRadius:"_bbrr-lmimb3",borderBottomLeftRadius:"_bblr-lmimb3",cursor:"_cur-inherit",backgroundColor:"_bg-180kg62",color:"_col-rnt87j"});s(9939)},815:function(e,t,s){"use strict";s.d(t,{s:function(){return u}});var a=s(7328),n=s(6670),r=s(6297),i=s(2322),o=(s(2784),s(1077)),c=s(5300),l=s(773),d=s(2897),m=s(6486);function u(e){var{source:t,language:s}=e,u=(0,r.Z)(e,["source","language"]);return(0,i.jsx)(c.FA,(0,n.Z)((0,a.Z)({},u),{className:(0,m.concatClassName)(("language-".concat(s)||0)+" "+(u&&u.className||""),u),children:(0,i.jsx)(o.Z,{contentContainerStyle:{flex:1},showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,children:(0,i.jsx)(o.Z,{horizontal:!0,contentContainerStyle:{flex:1},showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,children:(0,i.jsx)(d.S,{f:1,children:(0,i.jsx)(l.E,{dangerouslySetInnerHTML:{__html:t}})})})})}))}},5147:function(e,t,s){"use strict";s.d(t,{q:function(){return z},M:function(){return R}});var a=s(2322),n=s(4774),r=s(1428),i=s(2029),o=s(9097),c=s.n(o),l=s(2784),d=s(5300),m=s(2007),u=s(2341),p=s(7328),h=s(8682),_=s(1309);const g=e=>{const{tint:t}=(0,_.d5)();return(0,a.jsx)(h.Q,(0,p.Z)({tint:t},e))};var f=s(815),x=s(5437),b=s(7219),v=s(6486);const j="  is_Paragraph font_body ",y="  is_Separator ",S="  is_YStack",N="  is_XStack ",w="  is_YStack ",k=[{name:"Bouncy",description:"A bouncy spring",animation:"bouncy",settings:n.s.animations.bouncy},{name:"Lazy",description:"A lazy, straightforward spring",animation:"lazy",settings:n.s.animations.lazy},{name:"Quick",description:"A super fast spring",animation:"quick",settings:n.s.animations.quick}];let C=!1;function R(e){let{animationCode:t}=e;const{tint:s}=(0,_.d5)(),{0:n,1:r}=(0,l.useState)(!0);return(0,a.jsx)("div",{className:w,children:(0,a.jsxs)(x._k,{position:"relative",space:"$8",children:[(0,a.jsxs)(d.FA,{space:"$3",children:[(0,a.jsxs)(b.PP,{pos:"relative",children:["Universal ",(0,a.jsx)("span",{className:"rainbow clip-text",children:"Animations"})]}),(0,a.jsx)(b.vk,{children:"Better platform targeting with animation drivers that can be changed without changing code."})]}),(0,a.jsxs)("div",{className:N,children:[(0,a.jsx)(u.Q,{name:s,children:(0,a.jsx)("div",{className:w,children:(0,a.jsx)(z,{})})}),(0,a.jsxs)("div",{className:w,children:[(0,a.jsxs)("div",{className:(0,v.concatClassName)(S+"   "),children:[(0,a.jsx)("div",{className:w}),(0,a.jsx)(m.zx,{accessibilityLabel:"View more",iconAfter:i.K,size:"$4",themeInverse:!0,onPress:()=>r(!1),children:"View more"})]}),(0,a.jsx)(f.s,{pe:n?"none":"auto",maxHeight:500,height:500,maxWidth:530,minWidth:530,language:"tsx",source:t})]})]}),(0,a.jsxs)(d.sL,{space:"$3",children:[(0,a.jsx)(c(),{href:"/docs/core/animations#css",passHref:!0,children:(0,a.jsx)(m.zx,{accessibilityLabel:"CSS docs",fontFamily:"$silkscreen",theme:s,tag:"a",children:"CSS \xbb"})}),(0,a.jsx)(c(),{href:"/docs/core/animations#reanimated",passHref:!0,children:(0,a.jsx)(m.zx,{accessibilityLabel:"Reanimated docs",fontFamily:"$silkscreen",tag:"a",children:"Reanimated \xbb"})}),(0,a.jsx)(c(),{href:"/docs/core/animations",passHref:!0,children:(0,a.jsx)(m.zx,{accessibilityLabel:"Animation docs",fontFamily:"$silkscreen",tag:"a",children:"Docs \xbb"})})]})]})})}const z=(0,l.memo)((()=>{const{0:e,1:t}=(0,l.useState)(0),s=k[e],n=(0,l.useRef)(null),{0:i,1:o}=(0,l.useState)(2),c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;o((t=>(t+e)%3))},d="string"===typeof s.settings?[["transition",s.settings]]:Object.entries(s.settings);return(0,r.q)(n,(e=>{let[t]=e;if(null===t||void 0===t?void 0:t.isIntersecting){const e=e=>{"ArrowRight"===e.key&&c(),"ArrowLeft"===e.key&&c(-1)};return C||(C=!0,c()),window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}})),(0,a.jsxs)("div",{className:N,children:[(0,a.jsx)("div",{ref:n,className:w,children:(0,a.jsx)(g,{position:i,animation:s.animation})}),(0,a.jsx)("div",{className:y}),(0,a.jsxs)("div",{className:w,children:[(0,a.jsx)(u.Q,{name:"alt2",children:(0,a.jsx)("div",{className:w})}),(0,a.jsx)("div",{className:w,children:k.map(((e,n)=>{const r=e===s;return(0,a.jsx)(u.Q,{name:r?"active":"alt2",children:(0,a.jsxs)("div",{onClick:()=>{t(n),c()},className:(0,v.concatClassName)(S+"   "),children:[(0,a.jsx)("p",{className:j,children:e.name}),(0,a.jsx)("p",{className:j,children:e.description})]})},e.name)}))}),(0,a.jsx)("div",{className:y}),(0,a.jsx)("div",{className:N,children:d.map(((e,t)=>{let[s,n]=e;return"type"===s?null:(0,a.jsxs)(l.Fragment,{children:[(0,a.jsxs)("div",{className:w,children:[(0,a.jsx)("p",{className:j,children:s}),(0,a.jsx)("p",{className:j,children:n})]}),t<d.length-1&&(0,a.jsx)("div",{className:y})]},s)}))})]})]})}))},1542:function(e,t,s){"use strict";s.d(t,{D:function(){return b}});var a=s(7328),n=s(2322),r=s(2930),i=s(2784),o=s(5300),c=s(1662),l=s(2007),d=s(815),m=s(5437),u=s(7219),p=s(6566),h=s(1309),_=s(6486),g=s(2341);const f="  is_Paragraph font_body ",x="  is_H5 font_heading ";function b(e){let{examples:t,onlyDemo:s}=e;const{tint:d}=(0,h.d5)(),{0:b,1:j}=(0,i.useState)(0),y=t[b];return(0,n.jsx)(m._k,{position:"relative",children:(0,n.jsxs)(o.FA,{space:"$6",children:[!s&&(0,n.jsxs)(o.FA,{space:"$3",children:[(0,n.jsx)(u.PP,{children:"A better style system"}),(0,n.jsxs)(u.vk,{tag:"a",ai:"center",jc:"center",children:["A multi-faceted optimizing compiler enables",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:["SSR-first atomic CSS","eliminating inline style logic","flattening your component tree","removing dead code entirely"][b]}),"."]})]}),(0,n.jsx)(c.E4,{scrollable:!0,bordered:!0,bc:"$color2",chromeless:!0,theme:d,maxWidth:"100%",als:"center",children:t.map(((e,t)=>(0,n.jsx)(l.zx,{accessibilityLabel:"See example",onPress:()=>j(t),theme:t===b?"active":null,size:"$4",fontFamily:"$silkscreen",chromeless:!0,className:(0,_.concatClassName)(" "),children:e.name},t)))}),(0,n.jsxs)("div",{className:(0,_.concatClassName)("  is_XStack  "),children:[(0,n.jsxs)(o.FA,{space:"$2",className:(0,_.concatClassName)(" "),children:[(0,n.jsx)("h5",{className:x,children:"Input"}),(0,n.jsx)("p",{className:f,children:(0,n.jsx)("span",{style:{opacity:.65},children:y.input.description})}),(0,n.jsx)(v,(0,a.Z)({},y.input))]},"input".concat(b)),(0,n.jsx)(g.Q,{name:"alt2",children:(0,n.jsx)("div",{className:(0,_.concatClassName)("  is_YStack   "),children:(0,n.jsx)(p.b,{als:"center",p:"$3",mb:0,children:(0,n.jsx)(r.N,{color:"var(--colorHover)",size:22})})})}),(0,n.jsxs)(o.FA,{space:"$2",className:(0,_.concatClassName)(" "),children:[(0,n.jsx)("h5",{className:x,children:"Output"}),(0,n.jsx)("p",{className:f,children:(0,n.jsx)("span",{style:{opacity:.65},children:y.output.description})}),(0,n.jsx)(v,(0,a.Z)({},y.output))]},"output".concat(b))]})]})})}const v=(0,i.memo)((e=>{let{examples:t}=e;const{0:s,1:a}=(0,i.useState)(0),r=t[s],{tint:o}=(0,h.d5)();return(0,n.jsxs)("div",{className:"  is_YStack ",children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.E4,{size:"$2",theme:o,bordered:!0,zi:10,mb:"$-3",als:"center",children:t.map(((e,t)=>(0,n.jsx)(l.zx,{accessibilityLabel:"See example",onPress:()=>a(t),theme:t===s?"active":"alt1",size:"$2",children:e.name},t)))})}),(0,n.jsx)("div",{className:"  is_XStack ",children:(0,n.jsx)("div",{className:"  is_YStack _o-0hover-1 ",children:(0,n.jsx)(d.s,{height:300,theme:"Card",maxHeight:300,f:1,language:r.language,source:r.code})})})]})}));s(2056)},7219:function(e,t,s){"use strict";s.d(t,{PP:function(){return i},t_:function(){return r},vk:function(){return o}});var a=s(1560),n=s(7855);const r=(0,a.z)(n.H1,{className:"word-break-keep-all",size:"$9","color-gtSm":"_col-_gtSm_b5vn3b","textTransform-gtSm":"_tt-_gtSm_1b7l12b","fontFamily-gtSm":"_ff-_gtSm_4yewjq","fontWeight-gtSm":"_fow-_gtSm_1cfkkj7","letterSpacing-gtSm":"_ls-_gtSm_1782q72","fontSize-gtSm":"_fos-_gtSm_1all9bv","lineHeight-gtSm":"_lh-_gtSm_17a9wki","maxWidth-gtSm":"_maw-_gtSm_9011",marginBottom:"_mb-1aj148u"}),i=(0,a.z)(n.H2,{className:"word-break-keep-all",name:"HomeH2",size:"$11","color-xs":"_col-_xs_b5vn3b","textTransform-xs":"_tt-_xs_3tb9kn","fontFamily-xs":"_ff-_xs_4yewjq","fontWeight-xs":"_fow-_xs_3uqciv","letterSpacing-xs":"_ls-_xs_3oolzw","fontSize-xs":"_fos-_xs_3slq3j","lineHeight-xs":"_lh-_xs_3or5y0","color-sm":"_col-_sm_b5vn3b","textTransform-sm":"_tt-_sm_1b7l12b","fontFamily-sm":"_ff-_sm_4yewjq","fontWeight-sm":"_fow-_sm_1cfkkj7","letterSpacing-sm":"_ls-_sm_1782q72","fontSize-sm":"_fos-_sm_1all9bv","lineHeight-sm":"_lh-_sm_17a9wki",marginTop:"_mt-lrpkci",maxWidth:"_maw-720px",alignSelf:"_als-center",textAlign:"_ta-center"}),o=(0,a.z)(n.H3,{className:"word-break-keep-all",fontFamily:"$body",name:"HomeH3",theme:"alt1",size:"$8","fontWeight-sm":"_fow-_sm_400","color-sm":"_col-_sm_b5vn3b","textTransform-sm":"_tt-_sm_none","fontFamily-sm":"_ff-_sm_4yewjq","letterSpacing-sm":"_ls-_sm_-015px1a","fontSize-sm":"_fos-_sm_3slq0y","lineHeight-sm":"_lh-_sm_3or5vf",maxWidth:"_maw-690px",letterSpacing:"_ls--015px1a",paddingRight:"_pr-20px",paddingLeft:"_pl-20px",fontWeight:"_fow-400",alignSelf:"_als-center",textAlign:"_ta-center"});s(3207)},6566:function(e,t,s){"use strict";s.d(t,{b:function(){return r}});var a=s(1560),n=s(5300);const r=(0,a.z)(n.FA,{alignSelf:"_als-flex-start",paddingTop:"_pt-1aj148u",paddingRight:"_pr-1aj148u",paddingBottom:"_pb-1aj148u",paddingLeft:"_pl-1aj148u",backgroundColor:"_bg-180kg62",borderTopLeftRadius:"_btlr-100px",borderTopRightRadius:"_btrr-100px",borderBottomRightRadius:"_bbrr-100px",borderBottomLeftRadius:"_bblr-100px"});s(2055)},5890:function(e,t,s){"use strict";s.d(t,{S:function(){return b}});var a=s(7328),n=s(6670),r=s(6297),i=s(2322),o=s(5032),c=s(6935),l=s(2930),d=s(2784),m=s(2341),u=s(858),p=s(5300),h=s(6186),_=s(2007),g="/_next/static/media/kanye.8a1ab422.jpg",f=s(6486);const x="  is_Paragraph font_body ",b=(0,d.memo)((e=>{var{theme:t,alt:s,onHoverSection:d,pointerEvents:b,pointerEventsControls:v}=e,j=(0,r.Z)(e,["theme","alt","onHoverSection","pointerEvents","pointerEventsControls"]);return(0,i.jsx)(m.Q,{name:s?"alt".concat(s):null,children:(0,i.jsxs)(u.Zb,(0,n.Z)((0,a.Z)({bordered:!0,pointerEvents:b},j),{className:(0,f.concatClassName)(""+(j&&j.className||""),j),children:[(0,i.jsxs)(p.sL,{space:"$5",children:[(0,i.jsx)("div",{className:"  is_Square ",children:(0,i.jsx)(h.E,{width:90,height:90,src:g})}),(0,i.jsxs)("div",{className:"  is_YStack ",children:[(0,i.jsx)("p",{className:x,children:"Spaceship"}),(0,i.jsx)("p",{className:x,children:"Kanye West"}),(0,i.jsx)("p",{className:x,children:"College Dropout"})]})]}),(0,i.jsx)("div",{className:"  is_Separator "}),(0,i.jsxs)(p.sL,{space:"$5",pointerEvents:b,children:[(0,i.jsx)(o.F,{size:20}),(0,i.jsx)(_.zx,{bordered:!0,"borderTopColor-hover":"_btc-0hover-1byp41v","borderRightColor-hover":"_brc-0hover-1byp41v","borderBottomColor-hover":"_bbc-0hover-1byp41v","borderLeftColor-hover":"_blc-0hover-1byp41v","transform-hover":"_transform-0hover-1g5rx3l","boxShadow-hover":"_bxsh-0hover-13vh14k","borderTopColor-active":"_btc-0active-1fsewm4","borderRightColor-active":"_brc-0active-1fsewm4","borderBottomColor-active":"_bbc-0active-1fsewm4","borderLeftColor-active":"_blc-0active-1fsewm4",icon:c.d,size:"$8",circular:!0,elevation:"$2",pointerEvents:v}),(0,i.jsx)(l.N,{size:20})]})]}))})}));s(172)},2897:function(e,t,s){"use strict";s.d(t,{S:function(){return r}});var a=s(1560),n=s(5300);const r=(0,a.z)(n.FA,{tag:"pre",backgroundColor:"_bg-180kg62",borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",paddingTop:"_pt-1aj14ak",paddingRight:"_pr-1aj14ak",paddingBottom:"_pb-1aj14ak",paddingLeft:"_pl-1aj14ak",overflowX:"_ox-visible",overflowY:"_oy-visible"});s(2350)},1706:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,s=[],a=0;a<e.rangeCount;a++)s.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||s.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);