(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),s=n(141),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(159),m=n.n(c);n.d(t,"PageRenderer",function(){return m.a});var d=n(49);n.d(t,"parsePath",function(){return d.a});var u=i.a.createContext({}),p=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(4),o=n.n(r),s=n(191),l=n.n(s),c=function(e){var t=e.children,n=e.title,a=e.description;return i.a.createElement("div",{className:l.a.header},i.a.createElement("h1",{className:l.a.title},n),a&&i.a.createElement("div",{className:l.a.description},a),t&&i.a.createElement("div",{className:l.a.content},t))};c.propTypes={title:o.a.string.isRequired,children:o.a.node},t.a=c},148:function(e,t,n){"use strict";n(145);var a=n(173),i=n(0),r=n.n(i),o=n(4),s=n.n(o),l=n(144),c=n(174),m=n.n(c),d="https://fonts.googleapis.com/css?family=";var u=function(e){var t=e.url,n=e.fonts,a=e.pathname,r=e.baseTitle,o=e.pageTitle,s=e.description,l=(e.keywords,e.thumbnail),c=e.twitter,u=e.locale,p=o?o+" - "+r:r,f=l?t+"/"+l:null;return i.createElement(m.a,{title:p,meta:[{name:"title",content:p},{name:"description",content:s},{property:"og:title",content:p},{property:"og:url",content:a?t+"/"+a:t},{property:"og:image",content:f&&f},{property:"og:image:secure_url",content:f&&f},{property:"og:site_name",content:r},{property:"og:description",content:s},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:locale",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:p},{name:"twitter:description",content:s},{name:"twitter:image",content:f&&f},{name:"twitter:creator",content:"@"+c},{name:"robots",content:"index, follow"}]},i.createElement("html",{lang:u}),i.createElement("link",{href:""+d+n,rel:"stylesheet"}))};function p(){return i.createElement("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16"},i.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fillRule:"evenodd"},i.createElement("g",{id:"instagram",fillRule:"nonzero"},i.createElement("path",{d:"M10.6666667,8 C10.6666667,7.26388889 10.40625,6.63541667 9.88541667,6.11458333 C9.36458333,5.59375 8.73611111,5.33333333 8,5.33333333 C7.26388889,5.33333333 6.63541667,5.59375 6.11458333,6.11458333 C5.59375,6.63541667 5.33333333,7.26388889 5.33333333,8 C5.33333333,8.73611111 5.59375,9.36458333 6.11458333,9.88541667 C6.63541667,10.40625 7.26388889,10.6666667 8,10.6666667 C8.73611111,10.6666667 9.36458333,10.40625 9.88541667,9.88541667 C10.40625,9.36458333 10.6666667,8.73611111 10.6666667,8 Z M12.1041667,8 C12.1041667,9.13888889 11.7048611,10.1076389 10.90625,10.90625 C10.1076389,11.7048611 9.13888889,12.1041667 8,12.1041667 C6.86111111,12.1041667 5.89236111,11.7048611 5.09375,10.90625 C4.29513889,10.1076389 3.89583333,9.13888889 3.89583333,8 C3.89583333,6.86111111 4.29513889,5.89236111 5.09375,5.09375 C5.89236111,4.29513889 6.86111111,3.89583333 8,3.89583333 C9.13888889,3.89583333 10.1076389,4.29513889 10.90625,5.09375 C11.7048611,5.89236111 12.1041667,6.86111111 12.1041667,8 Z M13.2291667,3.72916667 C13.2291667,3.99305556 13.1354167,4.21875 12.9479167,4.40625 C12.7604167,4.59375 12.5347222,4.6875 12.2708333,4.6875 C12.0069444,4.6875 11.78125,4.59375 11.59375,4.40625 C11.40625,4.21875 11.3125,3.99305556 11.3125,3.72916667 C11.3125,3.46527778 11.40625,3.23958333 11.59375,3.05208333 C11.78125,2.86458333 12.0069444,2.77083333 12.2708333,2.77083333 C12.5347222,2.77083333 12.7604167,2.86458333 12.9479167,3.05208333 C13.1354167,3.23958333 13.2291667,3.46527778 13.2291667,3.72916667 Z M8,1.4375 C7.95138889,1.4375 7.68576389,1.43576389 7.203125,1.43229167 C6.72048611,1.42881944 6.35416667,1.42881944 6.10416667,1.43229167 C5.85416667,1.43576389 5.51909722,1.44618056 5.09895833,1.46354167 C4.67881944,1.48090278 4.32118056,1.515625 4.02604167,1.56770833 C3.73090278,1.61979167 3.48263889,1.68402778 3.28125,1.76041667 C2.93402778,1.89930556 2.62847222,2.10069444 2.36458333,2.36458333 C2.10069444,2.62847222 1.89930556,2.93402778 1.76041667,3.28125 C1.68402778,3.48263889 1.61979167,3.73090278 1.56770833,4.02604167 C1.515625,4.32118056 1.48090278,4.67881944 1.46354167,5.09895833 C1.44618056,5.51909722 1.43576389,5.85416667 1.43229167,6.10416667 C1.42881944,6.35416667 1.42881944,6.72048611 1.43229167,7.203125 C1.43576389,7.68576389 1.4375,7.95138889 1.4375,8 C1.4375,8.04861111 1.43576389,8.31423611 1.43229167,8.796875 C1.42881944,9.27951389 1.42881944,9.64583333 1.43229167,9.89583333 C1.43576389,10.1458333 1.44618056,10.4809028 1.46354167,10.9010417 C1.48090278,11.3211806 1.515625,11.6788194 1.56770833,11.9739583 C1.61979167,12.2690972 1.68402778,12.5173611 1.76041667,12.71875 C1.89930556,13.0659722 2.10069444,13.3715278 2.36458333,13.6354167 C2.62847222,13.8993056 2.93402778,14.1006944 3.28125,14.2395833 C3.48263889,14.3159722 3.73090278,14.3802083 4.02604167,14.4322917 C4.32118056,14.484375 4.67881944,14.5190972 5.09895833,14.5364583 C5.51909722,14.5538194 5.85416667,14.5642361 6.10416667,14.5677083 C6.35416667,14.5711806 6.72048611,14.5711806 7.203125,14.5677083 C7.68576389,14.5642361 7.95138889,14.5625 8,14.5625 C8.04861111,14.5625 8.31423611,14.5642361 8.796875,14.5677083 C9.27951389,14.5711806 9.64583333,14.5711806 9.89583333,14.5677083 C10.1458333,14.5642361 10.4809028,14.5538194 10.9010417,14.5364583 C11.3211806,14.5190972 11.6788194,14.484375 11.9739583,14.4322917 C12.2690972,14.3802083 12.5173611,14.3159722 12.71875,14.2395833 C13.0659722,14.1006944 13.3715278,13.8993056 13.6354167,13.6354167 C13.8993056,13.3715278 14.1006944,13.0659722 14.2395833,12.71875 C14.3159722,12.5173611 14.3802083,12.2690972 14.4322917,11.9739583 C14.484375,11.6788194 14.5190972,11.3211806 14.5364583,10.9010417 C14.5538194,10.4809028 14.5642361,10.1458333 14.5677083,9.89583333 C14.5711806,9.64583333 14.5711806,9.27951389 14.5677083,8.796875 C14.5642361,8.31423611 14.5625,8.04861111 14.5625,8 C14.5625,7.95138889 14.5642361,7.68576389 14.5677083,7.203125 C14.5711806,6.72048611 14.5711806,6.35416667 14.5677083,6.10416667 C14.5642361,5.85416667 14.5538194,5.51909722 14.5364583,5.09895833 C14.5190972,4.67881944 14.484375,4.32118056 14.4322917,4.02604167 C14.3802083,3.73090278 14.3159722,3.48263889 14.2395833,3.28125 C14.1006944,2.93402778 13.8993056,2.62847222 13.6354167,2.36458333 C13.3715278,2.10069444 13.0659722,1.89930556 12.71875,1.76041667 C12.5173611,1.68402778 12.2690972,1.61979167 11.9739583,1.56770833 C11.6788194,1.515625 11.3211806,1.48090278 10.9010417,1.46354167 C10.4809028,1.44618056 10.1458333,1.43576389 9.89583333,1.43229167 C9.64583333,1.42881944 9.27951389,1.42881944 8.796875,1.43229167 C8.31423611,1.43576389 8.04861111,1.4375 8,1.4375 Z M16,8 C16,9.59027778 15.9826389,10.6909722 15.9479167,11.3020833 C15.8784722,12.7465278 15.4479167,13.8645833 14.65625,14.65625 C13.8645833,15.4479167 12.7465278,15.8784722 11.3020833,15.9479167 C10.6909722,15.9826389 9.59027778,16 8,16 C6.40972222,16 5.30902778,15.9826389 4.69791667,15.9479167 C3.25347222,15.8784722 2.13541667,15.4479167 1.34375,14.65625 C0.552083333,13.8645833 0.121527778,12.7465278 0.0520833333,11.3020833 C0.0173611111,10.6909722 0,9.59027778 0,8 C0,6.40972222 0.0173611111,5.30902778 0.0520833333,4.69791667 C0.121527778,3.25347222 0.552083333,2.13541667 1.34375,1.34375 C2.13541667,0.552083333 3.25347222,0.121527778 4.69791667,0.0520833333 C5.30902778,0.0173611111 6.40972222,0 8,0 C9.59027778,0 10.6909722,0.0173611111 11.3020833,0.0520833333 C12.7465278,0.121527778 13.8645833,0.552083333 14.65625,1.34375 C15.4479167,2.13541667 15.8784722,3.25347222 15.9479167,4.69791667 C15.9826389,5.30902778 16,6.40972222 16,8 Z",id:"Shape"}))))}var f=n(181),h=n.n(f),g=function(e){var t=e.copyright,n=e.cvPdfPath,a=e.instagramUsername;return i.createElement("div",{className:h.a.footer},i.createElement("ul",{className:h.a.links},i.createElement("li",null,i.createElement("a",{className:h.a.socialLink,href:"https://www.instagram.com/"+a,title:"Instagram ("+a+")",target:"_blank",rel:"noopener noreferrer"},i.createElement(p,null))),i.createElement("li",{className:h.a.separator}),i.createElement("li",null,i.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},"Descargar CV (PDF)"))),i.createElement("div",null,t))},C=n(182),v=n.n(C),y=function(e){var t=e.name,n=e.surname;return i.createElement("div",{className:v.a.logo},i.createElement(l.Link,{to:"/"},i.createElement("div",{className:v.a.logoInner},i.createElement("div",{className:v.a.name},t),i.createElement("div",{className:v.a.surname},n))))},x=(n(183),n(146)),w=n.n(x),E=(n(33),n(7)),b=n.n(E),N=n(51),S=n.n(N);var k=n(185),M=n.n(k),P=function(e){function t(t){var n,a;return(n=e.call(this,t)||this).positionerFn=void 0,n.state={fixedStyles:null},n._statusNode=void 0,n.positionerFn=(a=t.position,function(e){return"top"===a?(n=(t=e).scrollY,i=t.styles,r=t.measurements,o=r.x,s=r.width,l=r.top,i&&i.position||!(l<=n)?i&&"fixed"===i.position&&l>n?{left:i.left,right:i.right,width:i.width}:null:{position:"fixed",top:0,width:s,left:o,right:o+s}):null;var t,n,i,r,o,s,l}),n.updateDimensions=n._updateDimensions.bind(S()(S()(n))),n.handleScroll=n._handleScroll.bind(S()(S()(n))),n}b()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateDimensions(),this.handleScroll(),window.addEventListener("scroll",this.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.updateDimensions),this.onMeasurementsReaction&&(this.onMeasurementsReaction(),this.onMeasurementsReaction=null)},n._updateDimensions=function(){var e=this._statusNode;if(e){var t=e.getBoundingClientRect(),n=window.scrollY;n>0&&(t.y+=n),this.measurements=Object.assign({},t.toJSON(),{scrollHeight:document.body.scrollHeight,innerHeight:window.innerHeight})}},n._handleScroll=function(){var e=this.state.fixedStyles,t=this.measurements;if(t){var n=window.scrollY,a=this.positionerFn({scrollY:n,measurements:t,styles:e});a&&this.setState({fixedStyles:a})}},n.render=function(){var e=this,t=this.props.children,n=this.state.fixedStyles||{},a=n&&"fixed"===n.position,r=this.measurements,o=r?{height:r.height}:null;return i.createElement("div",{className:M.a.root,ref:function(t){e._statusNode=t},style:o},t({fixed:a,inlineStyles:n}))},t}(i.Component),U=n(186),L=n.n(U),R=w.a.bind(L.a),q=[{text:"CV",href:"/curriculum/",order:0},{text:"Fotos",href:"/fotos/",order:1},{text:"Contacto",href:"/contacto/",order:3}],F=function(e){var t=e.fixed,n=void 0!==t&&t,a=e.inlineStyles,r=void 0===a?{}:a;return i.createElement("nav",{className:R("menu",{fixed:n}),style:r},i.createElement("ul",{className:L.a.list},q.map(function(e,t){return i.createElement("li",{key:t,className:L.a.menuItem},i.createElement(l.Link,{to:e.href,className:L.a.menuLink,activeClassName:L.a.menuLinkActive},e.text))})))};var T=function(){return!window||window.matchMedia("(min-width: 400px)").matches?i.createElement(F,null):i.createElement(P,{position:"top"},function(e){var t=e.fixed,n=e.inlineStyles;return i.createElement(F,{fixed:t,inlineStyles:n})})},_=n(187),I=n.n(_),D=function(e){var t=e.name,n=e.surname,a=e.copyright,r=e.cvPdfPath,o=e.instagramUsername;return i.createElement("nav",{className:I.a.navigation},i.createElement("div",{className:I.a.navigationInner},i.createElement(y,{name:t,surname:n}),i.createElement(T,null),i.createElement("div",{className:I.a.bottom},i.createElement(g,{copyright:a,cvPdfPath:r,instagramUsername:o}))))},G=(n(188),n(189),n(190)),j=n.n(G),Y=function(e){var t=e.children,n=e.pathname,i=e.pageTitle,o=e.metaImage,s=e.hideFooter,c=void 0!==s&&s;return r.a.createElement(l.StaticQuery,{query:"368071233",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{fonts:e.site.siteMetadata.fonts,baseTitle:e.site.siteMetadata.title,pageTitle:i,url:e.site.siteMetadata.siteUrl,twitter:e.site.siteMetadata.twitterUsername,pathname:n,thumbnail:o,description:"Toni figuera actor",keywords:"actor, director, cine, teatro",locale:"es"}),r.a.createElement("div",{className:j.a.layout},r.a.createElement("div",{className:j.a.nav},r.a.createElement(D,{name:e.site.siteMetadata.name,surname:e.site.siteMetadata.surname,instagramUsername:e.site.siteMetadata.instagramUsername,cvPdfPath:e.allFile.edges[0].node.publicURL,copyright:e.site.siteMetadata.copyright})),r.a.createElement("main",{className:j.a.main},t),!c&&r.a.createElement("div",{className:j.a.footer},r.a.createElement(g,{instagramUsername:e.site.siteMetadata.instagramUsername,cvPdfPath:e.allFile.edges[0].node.publicURL,copyright:e.site.siteMetadata.copyright}))))},data:a})};Y.propTypes={children:s.a.node.isRequired};t.a=Y},159:function(e,t,n){var a;e.exports=(a=n(172))&&a.default||a},172:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),s=n(70),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},173:function(e){e.exports={data:{allFile:{edges:[{node:{publicURL:"/tonifi/static/cv-5d7b300533aa5f7f3b6ba218558a9a6e.pdf",name:"cv"}}]},site:{siteMetadata:{title:"Toni Figuera",siteUrl:"https://tonifiguera.com",name:"Toni",surname:"Figuera",copyright:"© 2019 Toni Figuera",instagramUsername:"tonifi",twitterUsername:"tonifi",fonts:"Playfair+Display:400,700|Source+Sans+Pro:300,400,600"}}}}},181:function(e,t,n){e.exports={footer:"index-module--footer--3SL8b",links:"index-module--links--1Xjzg",separator:"index-module--separator--3zwGV"}},182:function(e,t,n){e.exports={logo:"index-module--logo--18hvb",logoInner:"index-module--logoInner--3BG5B",name:"index-module--name--1Jpq9",surname:"index-module--surname--31fzi"}},185:function(e,t,n){e.exports={root:"index-module--root--2KqJj"}},186:function(e,t,n){e.exports={menu:"index-module--menu--3NVho",fixed:"index-module--fixed--3RpFV",list:"index-module--list--Gsgtt",menuItem:"index-module--menuItem--2dIyD",menuLink:"index-module--menuLink--21pxx",menuLinkActive:"index-module--menuLinkActive--2MI_q"}},187:function(e,t,n){e.exports={navigation:"index-module--navigation--P-9-c",navigationInner:"index-module--navigationInner--B7rmh",bottom:"index-module--bottom--1FD1_"}},189:function(e,t,n){},190:function(e,t,n){e.exports={layout:"index-module--layout--28Yj_",main:"index-module--main--1YYU0",footer:"index-module--footer--T2Fer",nav:"index-module--nav--2lrSP"}},191:function(e,t,n){e.exports={header:"index-module--header--3qxGt",title:"index-module--title--27shS",description:"index-module--description--cAihk",content:"index-module--content--2IC1V"}}}]);
//# sourceMappingURL=0-0a232ceec1cf87a7b1a0.js.map