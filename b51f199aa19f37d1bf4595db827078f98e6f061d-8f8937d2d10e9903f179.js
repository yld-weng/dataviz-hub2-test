(self.webpackChunkdatavizhub_tuos=self.webpackChunkdatavizhub_tuos||[]).push([[952],{19756:function(t,e,n){"use strict";function i(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,{Z:function(){return i}})},38797:function(t,e,n){var i="[object Symbol]",o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r="\\u2700-\\u27bf",u="a-z\\xdf-\\xf6\\xf8-\\xff",l="A-Z\\xc0-\\xd6\\xd8-\\xde",s="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",d="['’]",c="["+s+"]",f="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",g="\\d+",p="[\\u2700-\\u27bf]",m="["+u+"]",h="[^\\ud800-\\udfff"+s+g+r+u+l+"]",b="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",v="["+l+"]",y="(?:"+m+"|"+h+")",w="(?:"+v+"|"+h+")",Z="(?:['’](?:d|ll|m|re|s|t|ve))?",N="(?:['’](?:D|LL|M|RE|S|T|VE))?",k="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",S="[\\ufe0e\\ufe0f]?",C=S+k+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",b,x].join("|")+")"+S+k+")*"),j="(?:"+[p,b,x].join("|")+")"+C,O=RegExp(d,"g"),I=RegExp(f,"g"),z=RegExp([v+"?"+m+"+"+Z+"(?="+[c,v,"$"].join("|")+")",w+"+"+N+"(?="+[c,v+y,"$"].join("|")+")",v+"?"+y+"+"+Z,v+"+"+N,g,j].join("|"),"g"),E=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,T="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,_="object"==typeof self&&self&&self.Object===Object&&self,L=T||_||Function("return this")();var A,U=(A={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(t){return null==A?void 0:A[t]});var B=Object.prototype.toString,R=L.Symbol,V=R?R.prototype:void 0,F=V?V.toString:void 0;function M(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&B.call(t)==i}(t))return F?F.call(t):"";var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}function P(t){return null==t?"":M(t)}var D,q=(D=function(t,e,n){return t+(n?"-":"")+e.toLowerCase()},function(t){return function(t,e,n,i){var o=-1,a=t?t.length:0;for(i&&a&&(n=t[++o]);++o<a;)n=e(n,t[o],o,t);return n}(function(t,e,n){return t=P(t),void 0===(e=n?void 0:e)?function(t){return E.test(t)}(t)?function(t){return t.match(z)||[]}(t):function(t){return t.match(o)||[]}(t):t.match(e)||[]}(function(t){return(t=P(t))&&t.replace(a,U).replace(I,"")}(t).replace(O,"")),D,"")});t.exports=q},48419:function(t,e,n){"use strict";n.d(e,{Tz:function(){return o},mI:function(){return a},FA:function(){return r},kB:function(){return u},vb:function(){return s},Y0:function(){return d},$j:function(){return c},G7:function(){return f}});var i=n(53583),o=i.default.div.withConfig({displayName:"visStyle__ShareButton",componentId:"sc-14qwj2y-0"})(["a{margin:0}"]),a=i.default.div.withConfig({displayName:"visStyle__VisItem",componentId:"sc-14qwj2y-1"})(["display:block;height:100%;width:100%;position:relative;"," @media screen and (max-width:768px){padding-bottom:inherit;}"],(function(t){return 1==t.row&&t.col>1?"\n        padding-bottom: calc(100% / "+t.col+");\n      ":1==t.col&&t.row>1?"\n        padding-bottom: calc("+t.row+" * 100%);\n      ":1!=t.col&&1!=t.row?"\n        padding-bottom: calc("+t.row+" / "+t.col+" * 100%);\n      ":"\n      padding-bottom: 100%;\n    "})),r=i.default.div.withConfig({displayName:"visStyle__VisDiv",componentId:"sc-14qwj2y-2"})(["max-width:550px;margin:auto;"]),u=i.default.div.withConfig({displayName:"visStyle__WordCloud",componentId:"sc-14qwj2y-3"})(["text-align:center;width:",";height:",";border-radius:",";overflow-y:hidden;overflow-x:clip;padding:1rem;@media (max-width:768px){width:100%;height:100%;}@media (max-width:1440px){width:",";height:",";}&::before{content:'';height:100%;width:50%;float:left;shape-outside:polygon( 0 0,100% 0,60% 4%,40% 10%,20% 20%,10% 28.2%,5% 34.4%,0 50%,5% 65.6%,10% 71.8%,20% 80%,40% 90%,60% 96%,100% 100%,0% 100% );}div.word-cloud-wrap{text-align:center;display:contents;}div.word-cloud-wrap::before{content:'';height:100%;width:50%;float:right;shape-outside:polygon( 100% 0,0 0,40% 4%,60% 10%,80% 20%,90% 28.2%,95% 34.4%,100% 50%,95% 65.6%,90% 71.8%,80% 80%,60% 90%,40% 96%,0 100%,100% 100% );}.word{white-space:nowrap;border-radius:5px;display:inline-block;line-height:1;transition:.3s ease;font-family:TUoS Blake;vertical-align:middle;padding:",";&:hover{color:#00aeef !important;background-color:"," !important;}}"],(function(t){return t.width||"50%"}),(function(t){return t.height||"55%"}),(function(t){return t.radius||"10px"}),(function(t){return t.width||"60%"}),(function(t){return t.height||"55%"}),(function(t){return!0===t.backgroundColour?"8px 13px":""}),(function(t){return!0===t.backgroundColour?"#000":""})),l=i.default.button.withConfig({displayName:"visStyle__visHelperButton",componentId:"sc-14qwj2y-4"})(["position:fixed;bottom:20px;width:50px;height:50px;text-decoration:none;border-radius:35px;z-index:99;text-align:center;visibility:invisible;-webkit-transition:all 0.3s ease;-ms-transition:all 0.3s ease;-moz-transition:all 0.3s ease;-o-transition:all 0.3s ease;transition:all 0.3s ease;cursor:pointer;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);display:flex;flex-wrap:wrap;justify-content:center;align-items:center;&:focus{outline:none;}"]),s=(0,i.default)(l).withConfig({displayName:"visStyle__VisTagMenuBtn",componentId:"sc-14qwj2y-5"})(["opacity:0;right:140px;background-image:linear-gradient(135deg,rgb(255,121,180) 15%,rgb(255,134,250) 36%,rgb(41,197,255) 85%);&:hover{background-image:linear-gradient(45deg,rgb(255,121,180) 15%,rgb(255,134,250) 36%,rgb(41,197,255) 85%);}"]),d=(0,i.default)(l).withConfig({displayName:"visStyle__VisFooterBtn",componentId:"sc-14qwj2y-6"})(["opacity:0;right:80px;"]),c=(0,i.default)(l).withConfig({displayName:"visStyle__VisBackBtn",componentId:"sc-14qwj2y-7"})(["right:80px;opacity:1;"]),f=i.default.div.withConfig({displayName:"visStyle__EmbedCode",componentId:"sc-14qwj2y-8"})(["display:hidden;"])},31796:function(t,e,n){"use strict";n.d(e,{Z:function(){return E}});var i=n(67294),o=n(56292),a=n(25444),r=n(75520),u=n(48419),l=n(80014),s=n.n(l),d=n.p+"static/TUOS_PRIMARY_LOGO_LINEAR_BLACK-9dc28511e805e147ad2507cb69b5c261.png",c=n(22122),f=n(96156),g=n(85061),p=n(19756),m=n(38797),h=n.n(m),b=n(23431),x=["words","width","height","radius","colours","backgroundColour","padding","menu","order","minFontSize","maxFontSize","fontUnit","wordStyle"];function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){(0,f.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w=i.memo((function(t){var e=t.words,n=t.width,o=t.height,l=t.radius,s=t.colours,d=t.backgroundColour,f=t.padding,m=t.menu,v=void 0===m?"":m,w=t.order,Z=void 0===w?"default":w,N=t.minFontSize,k=void 0===N?.9:N,S=t.maxFontSize,C=void 0===S?2.1:S,j=t.fontUnit,O=void 0===j?"rem":j,I=t.wordStyle,z=(0,p.Z)(t,x),E=(0,i.useState)(e),T=E[0],_=E[1],L=s||["#808080","#ff5e5e","#fedf00","#0066b3","#6d3db3","#52ff9c","#ade1f8","#f0f0f0","#fff","#ff79b4","#89f064","#393939","#08e8ff","#00aeef"],A=d||[],U=O,B=C,R=k,V=(0,g.Z)(new Set(e&&e.map((function(t){return t.count}))||[])),F=(B-R)/(V.length-1);return(0,i.useEffect)((function(){_(e),"random"==Z&&_(T&&T.map((function(t){return{sort:Math.random(),value:t}})).sort((function(t,e){return t.sort-e.sort})).map((function(t){return t.value})))}),[Z,e]),(0,b.tZ)(u.kB,(0,c.Z)({width:n,height:o,radius:l,backgroundColour:A.length>0},z),(0,b.tZ)("div",{className:"word-cloud-wrap space-y-0 space-x-1"},T&&T.map((function(t){var e=(0,r.hQ)(R+F*(t.count-1),R,B),n=L[(0,r.LU)(L.length)]||"",i=A[(0,r.LU)(A.length)]||"";return(0,b.tZ)(a.Link,{key:t.name+" | "+t.type+(v?" | "+v:""),className:"word "+("category"==t.type?"font-semibold":""),to:"/visualisation/"+t.type+"/"+h()(t.name),style:y({fontSize:""+e+U,color:""+n,backgroundColor:""+i,padding:""+(f||"")},I||"")},t.name)}))))})),Z=w;w.displayName="WordCloud";var N=n(10020),k=n(23201),S=n(42775),C=n(9295),j=n(3750),O=n(92173),I=i.memo((function(t){var e=t.tagMenu,n=t.handleTagMenu,o=t.tags,a=(0,i.useState)(""),r=a[0],l=a[1],s=(0,i.useState)(o),d=s[0],c=s[1],f=(0,i.useState)(!1),g=f[0],p=f[1],m="text-white text-2xl transform group-hover:scale-110 transition duration-500";return(0,N.i)("vis-tag-button"),(0,N.i)("vis-footer-button"),(0,i.useEffect)((function(){var t=setTimeout((function(){return t=r.toLowerCase(),e=o.filter((function(e){return-1!=e.name.toLowerCase().indexOf(t)})),void c(e);var t,e}),1e3);return function(){clearTimeout(t)}}),[r]),(0,b.tZ)("div",{className:"relative"},(0,b.tZ)(u.vb,{onClick:function(){return n()},tabindex:"100",id:"vis-tag-button",className:"group",title:"Tag Menu"},(0,b.tZ)(k.YxP,{className:"text-white text-xl transform group-hover:scale-125 transition duration-500"})),(0,b.tZ)(u.Y0,{onClick:function(){return p(!g)},tabindex:"101",id:"vis-footer-button",className:"group "+(g?"bg-brand-blue":"bg-gray-800"),title:"Footer"},!g&&(0,b.tZ)(C.hwk,{className:m}),g&&(0,b.tZ)(C.oG4,{className:m})),(0,b.tZ)("div",{id:"vis-tag-menu",className:(e?"visible":"invisible translate-x-full")+" bg-gray-900 transform",style:{zIndex:"1000",maxWidth:"450px",transition:".5s ease",width:"100%",height:"100%",top:0,right:0,position:"fixed"}},(0,b.tZ)("button",{onClick:function(){return n()},className:"text-gray-500 hover:text-red-400 text-lg",style:{border:"1px solid transparent",backgroundColor:"black",transition:".3s ease",position:"absolute",top:0,right:0,margin:"1.5rem",display:"flex",alignItems:"center",padding:".75rem .25rem",borderRadius:".375rem"}},(0,b.tZ)(S.B4e,{className:"text-xl mr-1"}),"CLOSE"),(0,b.tZ)("div",{className:"w-full m-6"},(0,b.tZ)("div",{className:"inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg ml-2"},(0,b.tZ)(j.jRj,{className:"inline-block text-center text-xl -mt-2"}),(0,b.tZ)("input",{id:"tagSearch",onChange:function(t){return l(t.target.value)},value:r,className:"py-2 pl-2 text-base focus:outline-none pr-3 text-gray-600",style:{maxWidth:"50vw"},type:"text",name:"search",placeholder:"Search for tags"}))),(0,b.tZ)("div",{className:"w-full text-center"},0==d.length&&(0,b.tZ)("h1",{className:"text-gray-300"},"No results.")),(0,b.tZ)(Z,{width:"100%",height:"auto",words:d,menu:"Tag menu",minFontSize:.97,maxFontSize:2.8,colour:["#808080","#ff5e5e","#fedf00","#6d3db3","#52ff9c","#ade1f8","#f0f0f0","#fff","#ff56a1","#89f064","#393939","#08e8ff","#00aeef"],wordStyle:{whiteSpace:"normal"}})),(0,b.tZ)(O.Z,{id:"vis-footer",className:g?"fixed bottom-0":"hidden"}))})),z=I;I.displayName="VisUtils";var E=function(t){var e=t.currentMDXs,n=t.nextPageRef,l=t.title,c=t.pageContext,f=(0,i.useState)(!1),g=f[0],p=f[1],m=l?l+" |":"",h=l?(0,b.tZ)("p",null,"Viewing items in"," ",(0,b.tZ)("span",{className:"text-gray-400 font-semibold"},l),"."):(0,b.tZ)("p",null,"The latest from the University of Sheffield."),x=c.allVisCatTag&&c.allVisCatTag.length>1&&c.allVisCatTag.sort((function(t,e){return e.count.toString().localeCompare(t.count.toString(),"en",{numeric:!0})})).slice(0,20)||[];function v(){p(!g)}return"undefined"!=typeof window&&localStorage.setItem("VisGoBackURL",c.pagePath),(0,b.tZ)("div",{className:"bg-gray-900"},(0,b.tZ)(o.Z,{title:m+" Visualisation",keywords:["the university of sheffield","data visualisation","data visualisation hub","research","about dataviz",null!=l?l:""],description:"Browse the latest visualisations from the Data Visualisation Hub at The University of Sheffield."}),(0,b.tZ)(z,{handleTagMenu:v,tagMenu:g,tags:c.allVisCatTag}),(0,b.tZ)("div",{className:"w-full pt-24 pb-8 text-center"},(0,b.tZ)("h1",{className:"w-full py-3 text-7xl font-extrabold",style:{background:"-webkit-linear-gradient(135deg, rgba(255,121,180,1) 50%, rgba(255,134,250,1) 36%, rgba(41,197,255,1) 35%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",MozBackgroundClip:"text",MozTextFillColor:"transparent"}},(0,b.tZ)(a.Link,{to:"/visualisation"},"InfoVis")),(0,b.tZ)("h3",{className:"text-gray-500"},h)),(0,b.tZ)("div",{className:"flex flex-wrap justify-center group"},(0,b.tZ)("div",{className:"flex w-full h-full justify-center"},(0,b.tZ)(Z,{id:"main-word-cloud",words:x,colours:["#ececec"],backgroundColour:["#1f2937"],padding:"8px 13px",order:"random"})),(0,b.tZ)("button",{onClick:function(){return v()},title:"Browse all tags",className:"text-center mt-3 lg:opacity-0 group-hover:opacity-100 text-brand-blue bg-black rounded-md transition duration-300 text-md px-3 py-2"},"Browse all tags")),(0,b.tZ)("div",{className:"min-h-80 flex flex-wrap justify-center pt-24 pb-32 bg-gray-900 px-5"},(0,b.tZ)("div",{className:"max-w-8xl w-full md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1",style:{gridAutoFlow:"dense",gridTemplateRows:"min-content"}},e.length>0&&e.map((function(t){var e,n,i=t.node,o=(0,r.MC)(i,!0),l=null!==(e=i.frontmatter.rowSpan)&&void 0!==e?e:1,c=null!==(n=i.frontmatter.columnSpan)&&void 0!==n?n:1;return(0,b.tZ)(a.Link,{to:i.fields.slug,key:i.id,style:{gridRow:"span "+l,gridColumn:"span "+c},className:"shadow-xl rounded-xl visualisationColourBorder"},(0,b.tZ)("img",{src:d,style:{maxWidth:"100px",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},className:"absolute"}),(0,b.tZ)(s(),{delay:1e3},(0,b.tZ)(u.mI,{row:l,col:c},(0,b.tZ)("div",{className:"rounded-xl md:absolute md:top-0 md:left-0",style:{height:"100%",width:"100%",backgroundImage:"linear-gradient(135deg, #141e30 0%,#152033 6%,#20344c 65%,#243b55 100%)",backgroundRepeat:"no-repeat"}},(0,b.tZ)("img",{style:{height:"100%",width:"100%",objectFit:"cover",objectPosition:"center",transition:".2s ease-out"},className:"rounded-xl",src:o,alt:"Visualisation: "+i.frontmatter.title})))))})),(0,b.tZ)("div",{id:"visualisation-invite",style:{gridRow:"span 1",gridColumn:"span 1",visibility:"hidden"}},(0,b.tZ)(s(),{delay:1e3},(0,b.tZ)(u.mI,{row:1,col:1},(0,b.tZ)("div",{className:"group rounded-xl relative md:absolute md:top-0 md:left-0 text-center flex",style:{height:"100%",width:"100%",backgroundImage:"linear-gradient(135deg, #141e30 0%,#152033 6%,#20344c 65%,#243b55 100%)",backgroundRepeat:"no-repeat"}},(0,b.tZ)("h1",{className:"text-gray-300 font-bold m-auto"},"Add your visualisations here"),(0,b.tZ)(a.Link,{to:"/docs/21/07/2021/Contribute-visualisation",className:"absolute text-sm text-gray-200 font-bold cursor-pointer bg-gray-600 rounded-md py-1 px-2 hidden group-hover:block",style:{transform:"translate(-50%, 0%)",left:"50%",top:"70%"}},"Learn how")))))),(0,b.tZ)("div",{ref:n,style:{height:"100px",width:"100%"}})),(0,b.tZ)("div",{className:"text-center text-gray-600 pb-5 text-sm"},"This page is inspired by"," ",(0,b.tZ)("a",{href:"https://informationisbeautiful.net/beautifulnews",target:"_blank",rel:"noreferrer",className:"text-gray-500 hover:text-brand-blue"},"Beautiful News"),"."))}},54922:function(t,e,n){"use strict";n.d(e,{L:function(){return a}});var i=n(85061),o=n(67294);function a(t,e,n,a){var r=null!=a?a:10,u=null!=n?n:"visualisation-invite",l=(0,o.useState)((0,i.Z)(t.slice(0,r))),s=l[0],d=l[1],c=(0,o.useState)(!1),f=c[0],g=c[1],p=(0,o.useState)(t.length>r),m=p[0],h=p[1];return(0,o.useEffect)((function(){var t=new IntersectionObserver((function(t){t[0].isIntersecting&&g(!0)}),{root:null,rootMargin:"300px 0px 0px 0px"});e.current&&t.observe(e.current)}),[]),(0,o.useEffect)((function(){var e=t.length>s.length;if(h(e),!e){var n=document.querySelector("#"+u);n.style.visibility="visible",n.parentElement.appendChild(n)}}),[s]),(0,o.useEffect)((function(){if(f&&m){var e=t.length>s.length?t.slice(s.length,s.length+r):[];d([].concat((0,i.Z)(s),(0,i.Z)(e))),g(!1)}}),[f,m]),s}}}]);
//# sourceMappingURL=b51f199aa19f37d1bf4595db827078f98e6f061d-8f8937d2d10e9903f179.js.map