(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=(a(74),a(52),a(149),a(145),a(146)),c=a.n(r),i=a(148),m=a(147),o=a(142),u=a(198),d=a.n(u),s=c.a.bind(d.a),p={director:"Director",production:"Producción",author:"Autor",company:"Compañía"};function f(e){var t=e.metaKey,a=e.url,l=e.name;return n.createElement("div",{className:d.a.metadata},n.createElement("strong",null,p[t]),n.createElement("a",{href:a,target:"_bkank"},l))}function g(e){var t,a=e.metaKey,l=e.item[a];if(!l)return null;if("company"!==a)t=l;else{if("company"===a&&l.url)return n.createElement(f,{metaKey:a,url:l.url,name:l.name});t=l.name}return"string"!=typeof t?null:n.createElement("div",{className:d.a.metadata},n.createElement("strong",null,p[a]),t)}var E=function(e){var t=e.content,a=e.cvPdfPath,l=t.education,r=t.work,c=t.languages,u=r[0].image.childImageSharp.fluid.src;return n.createElement(i.a,{pageTitle:"Curriculum",pathname:"cv",metaImage:u},n.createElement(m.a,{title:"Curriculum"},n.createElement("div",{className:d.a.infoLine},n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"Idiomas: "),c.join(" / ")),n.createElement("li",null,n.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"Descargar CV (PDF)"))))),n.createElement(o.a,null,n.createElement("h2",{className:d.a.sectionTitle},"Trayectoria"),r.map(function(e){return n.createElement("div",{key:e.category},n.createElement("div",{className:d.a.category,style:{backgroundImage:"url("+e.image.childImageSharp.fluid.src+")"}},n.createElement("h3",{className:d.a.categoryTitle},e.category)),n.createElement("div",{className:d.a.items},(t=e.items,t.reduce(function(e,t){var a=e.length-1,n=e[a];return n&&n.length<2?e[a].push(t):e.push([t]),e},[])).map(function(e,t){return n.createElement("div",{className:s("row",{incompleted:e.length<2}),key:t},e.map(function(e,t){return n.createElement("div",{key:t,className:d.a.col},n.createElement("div",{className:d.a.item},n.createElement("h4",{className:d.a.itemTitle},e.title),function(e){return!!Object.keys(p).map(function(t){return!e.meta})}(e)&&n.createElement("div",{className:d.a.metadataList},Object.keys(p).map(function(t){return n.createElement(g,{key:t,metaKey:t,item:e})})),e.played.length>0&&n.createElement("div",{className:d.a.places},n.createElement("strong",null,"Representado en:"),n.createElement("div",{className:d.a.placeList},e.played.map(function(e,t){return n.createElement("div",{key:t,className:d.a.place},e.name,e.location&&n.createElement("span",null," (",e.location,")"),e.tags.length>0&&e.tags.map(function(e,t){return n.createElement("span",{key:t,className:d.a.tag},e)}))})))))}))})));var t}),n.createElement("h2",{className:d.a.sectionTitle},"Estudios"),n.createElement("ul",{className:d.a.education},l.map(function(e,t){return n.createElement("li",{key:t},e)}))))};a.d(t,"pageQuery",function(){return y});t.default=function(e){var t=e.data;return l.a.createElement(E,{cvPdfPath:t.allFile.edges[0].node.publicURL,content:t.allCvJson.edges[0].node})};var y="1572853881"},142:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(4),c=a.n(r),i=a(143),m=a.n(i),o=function(e){var t=e.children;return l.a.createElement("div",{className:m.a.content},l.a.createElement("div",{className:m.a.contentInner},t))};o.propTypes={children:c.a.node.isRequired},t.a=o},143:function(e,t,a){e.exports={content:"index-module--content--3DmGQ",contentInner:"index-module--contentInner--28CwS"}},149:function(e,t,a){var n=a(24),l=a(34);a(150)("keys",function(){return function(e){return l(n(e))}})},150:function(e,t,a){var n=a(16),l=a(18),r=a(17);e.exports=function(e,t){var a=(l.Object||{})[e]||Object[e],c={};c[e]=t(a),n(n.S+n.F*r(function(){a(1)}),"Object",c)}},198:function(e,t,a){e.exports={infoLine:"index-module--infoLine--2xliA",separator:"index-module--separator--KEeWF",sectionTitle:"index-module--sectionTitle--3RWA5",category:"index-module--category--wUl2R",categoryTitle:"index-module--categoryTitle--38gm-",items:"index-module--items--gsMVL",row:"index-module--row--3Puyv",col:"index-module--col--awH71",incompleted:"index-module--incompleted--EYVkw",item:"index-module--item--2f3Ll",itemTitle:"index-module--itemTitle--1qy_X",metadataList:"index-module--metadataList--3fyoe",metadata:"index-module--metadata--3HG13",places:"index-module--places--3tJH2",place:"index-module--place--2f35N",placeList:"index-module--placeList--1HQeX",tag:"index-module--tag--rrKTR",education:"index-module--education--3X4BX"}}}]);
//# sourceMappingURL=component---src-pages-curriculum-js-321f8d16b6e71e69863c.js.map