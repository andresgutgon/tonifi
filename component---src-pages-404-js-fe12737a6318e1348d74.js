(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(145);t.default=function(){return r.a.createElement(i.a,{fullExpanded:!0},r.a.createElement("h1",null,"No hay nada aqui"),r.a.createElement("p",null,"Pagina no encontrada, lo sentimos."))}},134:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(133),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(135),l=a.n(s);a.d(t,"PageRenderer",function(){return l.a});var d=a(28);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},135:function(e,t,a){var n;e.exports=(n=a(138))&&n.default||n},137:function(e){e.exports={data:{site:{siteMetadata:{title:"Toni Figuera",name:"Toni",surname:"Figuera",copyright:"© 2018 Toni Figuera",fonts:"Playfair+Display:400,700|Source+Sans+Pro:300,400,600"}}}}},138:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(46),u=a(2),s=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},139:function(e,t,a){e.exports={sidebar:"index-module--sidebar--VnmvG",sidebarInner:"index-module--sidebarInner--1SEB4",bottom:"index-module--bottom--3vkHw",menu:"index-module--menu--3qqUe",menuLink:"index-module--menuLink--1VX2v",menuLinkActive:"index-module--menuLinkActive--2Vz8v",title:"index-module--title--3mo4S",name:"index-module--name--38FRr",surname:"index-module--surname--1TFPF"}},141:function(e,t,a){},143:function(e,t,a){e.exports={layout:"index-module--layout--28Yj_",fullExpanded:"index-module--fullExpanded--FYxFJ",sidebar:"index-module--sidebar--2ttbl",content:"index-module--content--2S7Rl",contentInner:"index-module--contentInner--3jh5y"}},145:function(e,t,a){"use strict";a(136);var n=a(137),r=a(0),i=a.n(r),o=a(146),c=a.n(o),u=a(4),s=a.n(u),l=a(147),d=a.n(l),m=a(134),f=a(139),p=a.n(f),h=[{text:"CV",href:"/cv",order:0},{text:"Fotos",href:"/fotos",order:1},{text:"Vídeos",href:"/videos",order:2},{text:"Contacto",href:"/contacto",order:3}],v=function(e){var t=e.name,a=e.surname,n=e.copyright;return i.a.createElement("div",{className:p.a.sidebar},i.a.createElement("div",{className:p.a.sidebarInner},i.a.createElement("div",{className:p.a.top},i.a.createElement("h1",{className:p.a.title},i.a.createElement(m.Link,{to:"/"},i.a.createElement("div",{className:p.a.name},t),i.a.createElement("div",{className:p.a.surname},a))),i.a.createElement("ul",{className:p.a.menu},h.map(function(e,t){return i.a.createElement("li",{key:t,className:p.a.menuItem},i.a.createElement(m.Link,{to:e.href,className:p.a.menuLink,activeClassName:p.a.menuLinkActive},e.text))}))),i.a.createElement("div",{className:p.a.bottom},i.a.createElement("div",{className:p.a.copyright},n))))},y=(a(148),a(141),a(143)),E=a.n(y),x=c.a.bind(E.a),g=function(e){var t=e.fullExpanded,a=void 0!==t&&t,r=e.children;return i.a.createElement(m.StaticQuery,{query:"36637067",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Toni figuera actor"},{name:"keywords",content:"actor, director, cine, teatro"}]},i.a.createElement("html",{lang:"es"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+e.site.siteMetadata.fonts,rel:"stylesheet"})),i.a.createElement("div",{className:x("layout",{fullExpanded:a})},i.a.createElement("div",{className:E.a.sidebar},i.a.createElement(v,{name:e.site.siteMetadata.name,surname:e.site.siteMetadata.surname,copyright:e.site.siteMetadata.copyright})),i.a.createElement("div",{className:E.a.content},i.a.createElement("div",{className:E.a.contentInner},r))))},data:n})};g.propTypes={children:s.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-404-js-fe12737a6318e1348d74.js.map