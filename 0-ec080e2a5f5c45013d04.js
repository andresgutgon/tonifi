(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return C}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(142),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(157),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=a(49);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function C(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(186),c=a.n(l),s=function(e){var t=e.children,a=e.title,n=e.description;return r.a.createElement("div",{className:c.a.header},r.a.createElement("h1",{className:c.a.title},a),n&&r.a.createElement("div",{className:c.a.description},n),t&&r.a.createElement("div",{className:c.a.content},t))};s.propTypes={title:o.a.string.isRequired,children:o.a.node},t.a=s},148:function(e,t,a){"use strict";a(146);var n=a(171),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(141),s=a(172),m=a.n(s),u="https://fonts.googleapis.com/css?family=";var d=function(e){var t=e.url,a=e.fonts,n=e.pathname,i=e.baseTitle,o=e.pageTitle,l=e.description,c=(e.keywords,e.thumbnail),s=e.twitter,d=e.locale,p=o?o+" - "+i:i,C=c?t+"/"+c:null;return r.createElement(m.a,{title:p,meta:[{name:"title",content:p},{name:"description",content:l},{property:"og:title",content:p},{property:"og:url",content:n?t+"/"+n:t},{property:"og:image",content:C&&C},{property:"og:image:secure_url",content:C&&C},{property:"og:site_name",content:i},{property:"og:description",content:l},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:locale",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:p},{name:"twitter:description",content:l},{name:"twitter:image",content:C&&C},{name:"twitter:creator",content:"@"+s},{name:"robots",content:"index, follow"}]},r.createElement("html",{lang:d}),r.createElement("link",{href:""+u+a,rel:"stylesheet"}))};function p(){return r.createElement("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16"},r.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fillRule:"evenodd"},r.createElement("g",{id:"instagram",fillRule:"nonzero"},r.createElement("path",{d:"M10.6666667,8 C10.6666667,7.26388889 10.40625,6.63541667 9.88541667,6.11458333 C9.36458333,5.59375 8.73611111,5.33333333 8,5.33333333 C7.26388889,5.33333333 6.63541667,5.59375 6.11458333,6.11458333 C5.59375,6.63541667 5.33333333,7.26388889 5.33333333,8 C5.33333333,8.73611111 5.59375,9.36458333 6.11458333,9.88541667 C6.63541667,10.40625 7.26388889,10.6666667 8,10.6666667 C8.73611111,10.6666667 9.36458333,10.40625 9.88541667,9.88541667 C10.40625,9.36458333 10.6666667,8.73611111 10.6666667,8 Z M12.1041667,8 C12.1041667,9.13888889 11.7048611,10.1076389 10.90625,10.90625 C10.1076389,11.7048611 9.13888889,12.1041667 8,12.1041667 C6.86111111,12.1041667 5.89236111,11.7048611 5.09375,10.90625 C4.29513889,10.1076389 3.89583333,9.13888889 3.89583333,8 C3.89583333,6.86111111 4.29513889,5.89236111 5.09375,5.09375 C5.89236111,4.29513889 6.86111111,3.89583333 8,3.89583333 C9.13888889,3.89583333 10.1076389,4.29513889 10.90625,5.09375 C11.7048611,5.89236111 12.1041667,6.86111111 12.1041667,8 Z M13.2291667,3.72916667 C13.2291667,3.99305556 13.1354167,4.21875 12.9479167,4.40625 C12.7604167,4.59375 12.5347222,4.6875 12.2708333,4.6875 C12.0069444,4.6875 11.78125,4.59375 11.59375,4.40625 C11.40625,4.21875 11.3125,3.99305556 11.3125,3.72916667 C11.3125,3.46527778 11.40625,3.23958333 11.59375,3.05208333 C11.78125,2.86458333 12.0069444,2.77083333 12.2708333,2.77083333 C12.5347222,2.77083333 12.7604167,2.86458333 12.9479167,3.05208333 C13.1354167,3.23958333 13.2291667,3.46527778 13.2291667,3.72916667 Z M8,1.4375 C7.95138889,1.4375 7.68576389,1.43576389 7.203125,1.43229167 C6.72048611,1.42881944 6.35416667,1.42881944 6.10416667,1.43229167 C5.85416667,1.43576389 5.51909722,1.44618056 5.09895833,1.46354167 C4.67881944,1.48090278 4.32118056,1.515625 4.02604167,1.56770833 C3.73090278,1.61979167 3.48263889,1.68402778 3.28125,1.76041667 C2.93402778,1.89930556 2.62847222,2.10069444 2.36458333,2.36458333 C2.10069444,2.62847222 1.89930556,2.93402778 1.76041667,3.28125 C1.68402778,3.48263889 1.61979167,3.73090278 1.56770833,4.02604167 C1.515625,4.32118056 1.48090278,4.67881944 1.46354167,5.09895833 C1.44618056,5.51909722 1.43576389,5.85416667 1.43229167,6.10416667 C1.42881944,6.35416667 1.42881944,6.72048611 1.43229167,7.203125 C1.43576389,7.68576389 1.4375,7.95138889 1.4375,8 C1.4375,8.04861111 1.43576389,8.31423611 1.43229167,8.796875 C1.42881944,9.27951389 1.42881944,9.64583333 1.43229167,9.89583333 C1.43576389,10.1458333 1.44618056,10.4809028 1.46354167,10.9010417 C1.48090278,11.3211806 1.515625,11.6788194 1.56770833,11.9739583 C1.61979167,12.2690972 1.68402778,12.5173611 1.76041667,12.71875 C1.89930556,13.0659722 2.10069444,13.3715278 2.36458333,13.6354167 C2.62847222,13.8993056 2.93402778,14.1006944 3.28125,14.2395833 C3.48263889,14.3159722 3.73090278,14.3802083 4.02604167,14.4322917 C4.32118056,14.484375 4.67881944,14.5190972 5.09895833,14.5364583 C5.51909722,14.5538194 5.85416667,14.5642361 6.10416667,14.5677083 C6.35416667,14.5711806 6.72048611,14.5711806 7.203125,14.5677083 C7.68576389,14.5642361 7.95138889,14.5625 8,14.5625 C8.04861111,14.5625 8.31423611,14.5642361 8.796875,14.5677083 C9.27951389,14.5711806 9.64583333,14.5711806 9.89583333,14.5677083 C10.1458333,14.5642361 10.4809028,14.5538194 10.9010417,14.5364583 C11.3211806,14.5190972 11.6788194,14.484375 11.9739583,14.4322917 C12.2690972,14.3802083 12.5173611,14.3159722 12.71875,14.2395833 C13.0659722,14.1006944 13.3715278,13.8993056 13.6354167,13.6354167 C13.8993056,13.3715278 14.1006944,13.0659722 14.2395833,12.71875 C14.3159722,12.5173611 14.3802083,12.2690972 14.4322917,11.9739583 C14.484375,11.6788194 14.5190972,11.3211806 14.5364583,10.9010417 C14.5538194,10.4809028 14.5642361,10.1458333 14.5677083,9.89583333 C14.5711806,9.64583333 14.5711806,9.27951389 14.5677083,8.796875 C14.5642361,8.31423611 14.5625,8.04861111 14.5625,8 C14.5625,7.95138889 14.5642361,7.68576389 14.5677083,7.203125 C14.5711806,6.72048611 14.5711806,6.35416667 14.5677083,6.10416667 C14.5642361,5.85416667 14.5538194,5.51909722 14.5364583,5.09895833 C14.5190972,4.67881944 14.484375,4.32118056 14.4322917,4.02604167 C14.3802083,3.73090278 14.3159722,3.48263889 14.2395833,3.28125 C14.1006944,2.93402778 13.8993056,2.62847222 13.6354167,2.36458333 C13.3715278,2.10069444 13.0659722,1.89930556 12.71875,1.76041667 C12.5173611,1.68402778 12.2690972,1.61979167 11.9739583,1.56770833 C11.6788194,1.515625 11.3211806,1.48090278 10.9010417,1.46354167 C10.4809028,1.44618056 10.1458333,1.43576389 9.89583333,1.43229167 C9.64583333,1.42881944 9.27951389,1.42881944 8.796875,1.43229167 C8.31423611,1.43576389 8.04861111,1.4375 8,1.4375 Z M16,8 C16,9.59027778 15.9826389,10.6909722 15.9479167,11.3020833 C15.8784722,12.7465278 15.4479167,13.8645833 14.65625,14.65625 C13.8645833,15.4479167 12.7465278,15.8784722 11.3020833,15.9479167 C10.6909722,15.9826389 9.59027778,16 8,16 C6.40972222,16 5.30902778,15.9826389 4.69791667,15.9479167 C3.25347222,15.8784722 2.13541667,15.4479167 1.34375,14.65625 C0.552083333,13.8645833 0.121527778,12.7465278 0.0520833333,11.3020833 C0.0173611111,10.6909722 0,9.59027778 0,8 C0,6.40972222 0.0173611111,5.30902778 0.0520833333,4.69791667 C0.121527778,3.25347222 0.552083333,2.13541667 1.34375,1.34375 C2.13541667,0.552083333 3.25347222,0.121527778 4.69791667,0.0520833333 C5.30902778,0.0173611111 6.40972222,0 8,0 C9.59027778,0 10.6909722,0.0173611111 11.3020833,0.0520833333 C12.7465278,0.121527778 13.8645833,0.552083333 14.65625,1.34375 C15.4479167,2.13541667 15.8784722,3.25347222 15.9479167,4.69791667 C15.9826389,5.30902778 16,6.40972222 16,8 Z",id:"Shape"}))))}var C=a(179),g=a.n(C),f=function(e){var t=e.copyright,a=e.cvPdfPath,n=e.instagramUsername;return r.createElement("div",{className:g.a.footer},r.createElement("ul",{className:g.a.links},r.createElement("li",null,r.createElement("a",{className:g.a.socialLink,href:"https://www.instagram.com/"+n,title:"Instagram ("+n+")",target:"_blank",rel:"noopener noreferrer"},r.createElement(p,null))),r.createElement("li",{className:g.a.separator}),r.createElement("li",null,r.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"Descargar CV (PDF)"))),r.createElement("div",null,t))},h=a(180),v=a.n(h),y=function(e){var t=e.name,a=e.surname;return r.createElement("div",{className:v.a.logo},r.createElement(c.Link,{to:"/"},r.createElement("div",{className:v.a.logoInner},r.createElement("div",{className:v.a.name},t),r.createElement("div",{className:v.a.surname},a))))},E=a(181),x=a.n(E),w=[{text:"CV",href:"/curriculum/",order:0},{text:"Fotos",href:"/fotos/",order:1},{text:"Contacto",href:"/contacto/",order:3}],b=function(){return r.createElement("nav",{className:x.a.menu},r.createElement("ul",{className:x.a.list},w.map(function(e,t){return r.createElement("li",{key:t,className:x.a.menuItem},r.createElement(c.Link,{to:e.href,className:x.a.menuLink,activeClassName:x.a.menuLinkActive},e.text))})))},N=a(182),k=a.n(N),P=function(e){var t=e.name,a=e.surname,n=e.copyright,i=e.cvPdfPath,o=e.instagramUsername;return r.createElement("div",{className:k.a.navigation},r.createElement("div",{className:k.a.navigationInner},r.createElement("div",{className:k.a.top},r.createElement("div",{className:k.a.header},r.createElement(y,{name:t,surname:a})),r.createElement(b,null)),r.createElement("div",{className:k.a.bottom},r.createElement(f,{copyright:n,cvPdfPath:i,instagramUsername:o}))))},U=(a(183),a(184),a(185)),M=a.n(U),q=function(e){var t=e.children,a=e.pathname,r=e.pageTitle,o=e.metaImage,l=e.hideFooter,s=void 0!==l&&l;return i.a.createElement(c.StaticQuery,{query:"368071233",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{fonts:e.site.siteMetadata.fonts,baseTitle:e.site.siteMetadata.title,pageTitle:r,url:e.site.siteMetadata.siteUrl,twitter:e.site.siteMetadata.twitterUsername,pathname:a,thumbnail:o,description:"Toni figuera actor",keywords:"actor, director, cine, teatro",locale:"es"}),i.a.createElement("div",{className:M.a.layout},i.a.createElement("div",{className:M.a.nav},i.a.createElement(P,{name:e.site.siteMetadata.name,surname:e.site.siteMetadata.surname,instagramUsername:e.site.siteMetadata.instagramUsername,cvPdfPath:e.allFile.edges[0].node.publicURL,copyright:e.site.siteMetadata.copyright})),i.a.createElement("main",{className:M.a.main},t),!s&&i.a.createElement("div",{className:M.a.footer},i.a.createElement(f,{instagramUsername:e.site.siteMetadata.instagramUsername,cvPdfPath:e.allFile.edges[0].node.publicURL,copyright:e.site.siteMetadata.copyright}))))},data:n})};q.propTypes={children:l.a.node.isRequired};t.a=q},157:function(e,t,a){var n;e.exports=(n=a(170))&&n.default||n},170:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(70),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},171:function(e){e.exports={data:{allFile:{edges:[{node:{publicURL:"/tonifi/static/cv-96fe855cea676ed5ea2c83c19f4d80f8.pdf",name:"cv"}}]},site:{siteMetadata:{title:"Toni Figuera",siteUrl:"https://tonifiguera.com",name:"Toni",surname:"Figuera",copyright:"© 2019 Toni Figuera",instagramUsername:"tonifi",twitterUsername:"tonifi",fonts:"Playfair+Display:400,700|Source+Sans+Pro:300,400,600"}}}}},179:function(e,t,a){e.exports={footer:"index-module--footer--3SL8b",links:"index-module--links--1Xjzg",separator:"index-module--separator--3zwGV"}},180:function(e,t,a){e.exports={logo:"index-module--logo--18hvb",logoInner:"index-module--logoInner--3BG5B",name:"index-module--name--1Jpq9",surname:"index-module--surname--31fzi"}},181:function(e,t,a){e.exports={menu:"index-module--menu--3NVho",list:"index-module--list--Gsgtt",menuItem:"index-module--menuItem--2dIyD",menuLink:"index-module--menuLink--21pxx",menuLinkActive:"index-module--menuLinkActive--2MI_q"}},182:function(e,t,a){e.exports={navigation:"index-module--navigation--P-9-c",navigationInner:"index-module--navigationInner--B7rmh",bottom:"index-module--bottom--1FD1_"}},184:function(e,t,a){},185:function(e,t,a){e.exports={layout:"index-module--layout--28Yj_",footer:"index-module--footer--T2Fer",nav:"index-module--nav--2lrSP",main:"index-module--main--1YYU0"}},186:function(e,t,a){e.exports={header:"index-module--header--3qxGt",title:"index-module--title--27shS",description:"index-module--description--cAihk",content:"index-module--content--2IC1V"}}}]);
//# sourceMappingURL=0-ec080e2a5f5c45013d04.js.map