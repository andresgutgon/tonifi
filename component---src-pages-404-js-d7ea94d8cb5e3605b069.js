(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{198:function(e,t,a){"use strict";a.r(t);a(23),a(381);var n=a(0),r=a.n(n),i=a(199),o=a(209),l=a(208),c=a(382),s=a.n(c),u=function(){return r.a.createElement("div",{className:s.a.notFound},r.a.createElement(l.a,{title:"Págnina no encotrada"}),r.a.createElement("p",null,"Esta página no existe"),r.a.createElement(i.a,{to:"/"},"Volver al inicio"))},m={es:{title:"Página no encontrada",description:"La página a la que has llegado no existe"},ca:{title:"Página no encontrada",description:"La pàgina a la qual has arribat no existeix"}};t.default=function(e){var t=e.location,a=t.pathname.startsWith("/ca/")?"ca":"es",n=m[a],i=n.title,l=n.description,c={markdownRemark:{frontmatter:{title:i,description:l}}};return r.a.createElement(o.a,{pageData:Object.assign({},c,{locale:a}),location:t},function(){return r.a.createElement(u,{title:i,description:l})})}},199:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(66),o=a.n(i);a.d(t,"a",function(){return o.a});a(203),a(8).default.enqueue;var l=r.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:a,render:n||i,staticQueryData:e})})}},203:function(e,t,a){var n;e.exports=(n=a(211))&&n.default||n},204:function(e,t){e.exports={chooseLanguage:"Tria idioma","languages.es":"Castellà","languages.ca":"Català","mainMenu.cv":"CV","mainMenu.photos":"Fotos","mainMenu.contact":"Contacte","footer.downloadCv":"Descarregar CV (PDF)","curriculum.education":"Estudis","curriculum.teacher":"Professor/a","curriculum.director":"Director","curriculum.author":"Autor","curriculum.years":"Anys","curriculum.company":"Companyia","curriculum.production":"Productora","contact.fields.email.label":"El teu email","contact.fields.name.label":"El teu nom","contact.fields.subject.label":"Assumpte de la teva consulta","contact.fields.comments.label":"Comentaris","contact.fields.sending":"Enviant missatge...","contact.fields.send":"Enviar missatge","contact.fields.email.invalidFormat":"Email no vàlid","contact.messageSent":"Missatge enviat","contact.thanks":"Gràcies {name}, com el rebi et contesto al teu email: {email}"}},205:function(e,t){e.exports={chooseLanguage:"Elige idioma","languages.es":"Castellano","languages.ca":"Catalán","mainMenu.cv":"CV","mainMenu.photos":"Fotos","mainMenu.contact":"Contacto","footer.downloadCv":"Descargar CV (PDF)","curriculum.education":"Educación","curriculum.teacher":"Profesor/a","curriculum.director":"Director","curriculum.author":"Autor/a","curriculum.years":"Años","curriculum.company":"Companñía","curriculum.production":"Productora","contact.fields.email.label":"Tu email","contact.fields.name.label":"Tu nombre","contact.fields.subject.label":"Asunto de tu consulta","contact.fields.comments.label":"Comentarios","contact.fields.sending":"Enviando mensaje...","contact.fields.send":"Enviar mensaje","contact.fields.email.invalidFormat":"Email no válido","contact.messageSent":"Mensaje enviado","contact.thanks":"Gracias {name} en cuanto lo reciba te contesto a tu email: {email}"}},207:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(0),r=a.n(n).a.createContext({}),i=r.Provider;r.Consumer;t.b=r},208:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(244),o=a.n(i);t.a=function(e){var t=e.children,a=e.title,n=e.description;return r.a.createElement("div",{className:o.a.header},r.a.createElement("h1",{className:o.a.title},a),n&&r.a.createElement("div",{className:o.a.description},n),t&&r.a.createElement("div",{className:o.a.content},t))}},209:function(e,t,a){"use strict";a(23),a(39),a(223);var n=a(210),r=a(0),i=a.n(r),o=a(199),l=(a(14),a(214),a(218)),c=a(201),s=a(207),u=a(232),m=a.n(u),d="https://fonts.googleapis.com/css?family=";var g=function(e){var t=e.url,a=e.fonts,n=e.pathname,i=e.baseTitle,o=e.pageTitle,l=e.description,c=(e.keywords,e.thumbnail),s=e.twitter,u=e.locale,g=o?o+" - "+i:i,p=c?t+"/"+c:null;return r.createElement(m.a,{title:g,meta:[{name:"title",content:g},{name:"description",content:l},{property:"og:title",content:g},{property:"og:url",content:n?t+"/"+n:t},{property:"og:image",content:p&&p},{property:"og:image:secure_url",content:p&&p},{property:"og:site_name",content:i},{property:"og:description",content:l},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:locale",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:g},{name:"twitter:description",content:l},{name:"twitter:image",content:p&&p},{name:"twitter:creator",content:"@"+s},{name:"robots",content:"index, follow"}]},r.createElement("html",{lang:u}),r.createElement("link",{href:""+d+a,rel:"stylesheet"}))},p=(a(233),a(66)),f=a.n(p);function h(){return r.createElement("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16"},r.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fillRule:"evenodd"},r.createElement("g",{id:"instagram",fillRule:"nonzero"},r.createElement("path",{d:"M10.6666667,8 C10.6666667,7.26388889 10.40625,6.63541667 9.88541667,6.11458333 C9.36458333,5.59375 8.73611111,5.33333333 8,5.33333333 C7.26388889,5.33333333 6.63541667,5.59375 6.11458333,6.11458333 C5.59375,6.63541667 5.33333333,7.26388889 5.33333333,8 C5.33333333,8.73611111 5.59375,9.36458333 6.11458333,9.88541667 C6.63541667,10.40625 7.26388889,10.6666667 8,10.6666667 C8.73611111,10.6666667 9.36458333,10.40625 9.88541667,9.88541667 C10.40625,9.36458333 10.6666667,8.73611111 10.6666667,8 Z M12.1041667,8 C12.1041667,9.13888889 11.7048611,10.1076389 10.90625,10.90625 C10.1076389,11.7048611 9.13888889,12.1041667 8,12.1041667 C6.86111111,12.1041667 5.89236111,11.7048611 5.09375,10.90625 C4.29513889,10.1076389 3.89583333,9.13888889 3.89583333,8 C3.89583333,6.86111111 4.29513889,5.89236111 5.09375,5.09375 C5.89236111,4.29513889 6.86111111,3.89583333 8,3.89583333 C9.13888889,3.89583333 10.1076389,4.29513889 10.90625,5.09375 C11.7048611,5.89236111 12.1041667,6.86111111 12.1041667,8 Z M13.2291667,3.72916667 C13.2291667,3.99305556 13.1354167,4.21875 12.9479167,4.40625 C12.7604167,4.59375 12.5347222,4.6875 12.2708333,4.6875 C12.0069444,4.6875 11.78125,4.59375 11.59375,4.40625 C11.40625,4.21875 11.3125,3.99305556 11.3125,3.72916667 C11.3125,3.46527778 11.40625,3.23958333 11.59375,3.05208333 C11.78125,2.86458333 12.0069444,2.77083333 12.2708333,2.77083333 C12.5347222,2.77083333 12.7604167,2.86458333 12.9479167,3.05208333 C13.1354167,3.23958333 13.2291667,3.46527778 13.2291667,3.72916667 Z M8,1.4375 C7.95138889,1.4375 7.68576389,1.43576389 7.203125,1.43229167 C6.72048611,1.42881944 6.35416667,1.42881944 6.10416667,1.43229167 C5.85416667,1.43576389 5.51909722,1.44618056 5.09895833,1.46354167 C4.67881944,1.48090278 4.32118056,1.515625 4.02604167,1.56770833 C3.73090278,1.61979167 3.48263889,1.68402778 3.28125,1.76041667 C2.93402778,1.89930556 2.62847222,2.10069444 2.36458333,2.36458333 C2.10069444,2.62847222 1.89930556,2.93402778 1.76041667,3.28125 C1.68402778,3.48263889 1.61979167,3.73090278 1.56770833,4.02604167 C1.515625,4.32118056 1.48090278,4.67881944 1.46354167,5.09895833 C1.44618056,5.51909722 1.43576389,5.85416667 1.43229167,6.10416667 C1.42881944,6.35416667 1.42881944,6.72048611 1.43229167,7.203125 C1.43576389,7.68576389 1.4375,7.95138889 1.4375,8 C1.4375,8.04861111 1.43576389,8.31423611 1.43229167,8.796875 C1.42881944,9.27951389 1.42881944,9.64583333 1.43229167,9.89583333 C1.43576389,10.1458333 1.44618056,10.4809028 1.46354167,10.9010417 C1.48090278,11.3211806 1.515625,11.6788194 1.56770833,11.9739583 C1.61979167,12.2690972 1.68402778,12.5173611 1.76041667,12.71875 C1.89930556,13.0659722 2.10069444,13.3715278 2.36458333,13.6354167 C2.62847222,13.8993056 2.93402778,14.1006944 3.28125,14.2395833 C3.48263889,14.3159722 3.73090278,14.3802083 4.02604167,14.4322917 C4.32118056,14.484375 4.67881944,14.5190972 5.09895833,14.5364583 C5.51909722,14.5538194 5.85416667,14.5642361 6.10416667,14.5677083 C6.35416667,14.5711806 6.72048611,14.5711806 7.203125,14.5677083 C7.68576389,14.5642361 7.95138889,14.5625 8,14.5625 C8.04861111,14.5625 8.31423611,14.5642361 8.796875,14.5677083 C9.27951389,14.5711806 9.64583333,14.5711806 9.89583333,14.5677083 C10.1458333,14.5642361 10.4809028,14.5538194 10.9010417,14.5364583 C11.3211806,14.5190972 11.6788194,14.484375 11.9739583,14.4322917 C12.2690972,14.3802083 12.5173611,14.3159722 12.71875,14.2395833 C13.0659722,14.1006944 13.3715278,13.8993056 13.6354167,13.6354167 C13.8993056,13.3715278 14.1006944,13.0659722 14.2395833,12.71875 C14.3159722,12.5173611 14.3802083,12.2690972 14.4322917,11.9739583 C14.484375,11.6788194 14.5190972,11.3211806 14.5364583,10.9010417 C14.5538194,10.4809028 14.5642361,10.1458333 14.5677083,9.89583333 C14.5711806,9.64583333 14.5711806,9.27951389 14.5677083,8.796875 C14.5642361,8.31423611 14.5625,8.04861111 14.5625,8 C14.5625,7.95138889 14.5642361,7.68576389 14.5677083,7.203125 C14.5711806,6.72048611 14.5711806,6.35416667 14.5677083,6.10416667 C14.5642361,5.85416667 14.5538194,5.51909722 14.5364583,5.09895833 C14.5190972,4.67881944 14.484375,4.32118056 14.4322917,4.02604167 C14.3802083,3.73090278 14.3159722,3.48263889 14.2395833,3.28125 C14.1006944,2.93402778 13.8993056,2.62847222 13.6354167,2.36458333 C13.3715278,2.10069444 13.0659722,1.89930556 12.71875,1.76041667 C12.5173611,1.68402778 12.2690972,1.61979167 11.9739583,1.56770833 C11.6788194,1.515625 11.3211806,1.48090278 10.9010417,1.46354167 C10.4809028,1.44618056 10.1458333,1.43576389 9.89583333,1.43229167 C9.64583333,1.42881944 9.27951389,1.42881944 8.796875,1.43229167 C8.31423611,1.43576389 8.04861111,1.4375 8,1.4375 Z M16,8 C16,9.59027778 15.9826389,10.6909722 15.9479167,11.3020833 C15.8784722,12.7465278 15.4479167,13.8645833 14.65625,14.65625 C13.8645833,15.4479167 12.7465278,15.8784722 11.3020833,15.9479167 C10.6909722,15.9826389 9.59027778,16 8,16 C6.40972222,16 5.30902778,15.9826389 4.69791667,15.9479167 C3.25347222,15.8784722 2.13541667,15.4479167 1.34375,14.65625 C0.552083333,13.8645833 0.121527778,12.7465278 0.0520833333,11.3020833 C0.0173611111,10.6909722 0,9.59027778 0,8 C0,6.40972222 0.0173611111,5.30902778 0.0520833333,4.69791667 C0.121527778,3.25347222 0.552083333,2.13541667 1.34375,1.34375 C2.13541667,0.552083333 3.25347222,0.121527778 4.69791667,0.0520833333 C5.30902778,0.0173611111 6.40972222,0 8,0 C9.59027778,0 10.6909722,0.0173611111 11.3020833,0.0520833333 C12.7465278,0.121527778 13.8645833,0.552083333 14.65625,1.34375 C15.4479167,2.13541667 15.8784722,3.25347222 15.9479167,4.69791667 C15.9826389,5.30902778 16,6.40972222 16,8 Z",id:"Shape"}))))}var v=a(234),C=a.n(v);function y(e){var t=e.lang,a={to:t.link};return a=t.selected?Object.assign({},a,{activeClassName:C.a.linkSelected}):a,r.createElement(f.a,Object.assign({className:C.a.link},a),r.createElement(c.a,{id:"languages."+t.langKey}))}function E(e){var t=e.langsMenu;return t?r.createElement("ul",{className:C.a.links},t.map(function(e,a){var n=a===t.length-1;return r.createElement("li",{key:e.langKey},r.createElement(y,{lang:e}),!n&&r.createElement("div",{className:C.a.separator}))})):null}var b=function(e){var t=e.copyright,a=e.cvPdfPath,n=e.instagramUsername,i=e.langsMenu;return r.createElement("div",{className:C.a.footer},r.createElement("ul",{className:C.a.links},r.createElement("li",null,r.createElement("a",{className:C.a.link,href:"https://www.instagram.com/"+n,title:"Instagram ("+n+")",target:"_blank",rel:"noopener noreferrer"},r.createElement(h,null)),r.createElement("div",{className:C.a.separator})),r.createElement("li",{className:C.a.separator}),r.createElement("li",null,r.createElement("a",{className:C.a.link,href:a,target:"_blank",rel:"noopener noreferrer"},r.createElement(c.a,{id:"footer.downloadCv"})))),r.createElement(E,{langsMenu:i}),r.createElement("div",null,t))},w=a(235),k=a.n(w),N=function(e){var t=e.name,a=e.surname,n=e.langKey;return r.createElement("div",{className:k.a.logo},r.createElement(o.a,{to:"es"===n?"/":"/"+n},r.createElement("div",{className:k.a.logoInner},r.createElement("div",{className:k.a.name},t),r.createElement("div",{className:k.a.surname},a))))},M=(a(222),a(212)),x=a.n(M);a(221);var P=a(236),S=a.n(P);function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var F=function(e){var t,a;function n(t){var a,n;return(a=e.call(this,t)||this).positionerFn=void 0,a.state={fixedStyles:null},a._statusNode=void 0,a.positionerFn=(n=t.position,function(e){return"top"===n?(a=(t=e).scrollY,r=t.styles,i=t.measurements,o=i.x,l=i.width,c=i.top,r&&r.position||!(c<=a)?r&&"fixed"===r.position&&c>a?{left:r.left,right:r.right,width:r.width}:null:{position:"fixed",top:0,width:l,left:o,right:o+l}):null;var t,a,r,i,o,l,c}),a.updateDimensions=a._updateDimensions.bind(K(a)),a.handleScroll=a._handleScroll.bind(K(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){this.updateDimensions(),this.handleScroll(),window.addEventListener("scroll",this.handleScroll)},i.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},i._updateDimensions=function(){var e=this._statusNode;if(e){var t=e.getBoundingClientRect(),a=window.scrollY;a>0&&(t.y+=a),this.measurements=Object.assign({},t.toJSON(),{scrollHeight:document.body.scrollHeight,innerHeight:window.innerHeight})}},i._handleScroll=function(){var e=this.state.fixedStyles,t=this.measurements;if(t){var a=window.scrollY,n=this.positionerFn({scrollY:a,measurements:t,styles:e});n&&this.setState({fixedStyles:n})}},i.render=function(){var e=this,t=this.props.children,a=this.state.fixedStyles||{},n=a&&"fixed"===a.position,i=this.measurements,o=i?{height:i.height}:null;return r.createElement("div",{className:S.a.root,ref:function(t){e._statusNode=t},style:o},t({fixed:n,inlineStyles:a}))},n}(r.Component),_=a(237),j=a.n(_),L=x.a.bind(j.a),U=[{textKey:"mainMenu.cv",id:"02"},{textKey:"mainMenu.photos",id:"03"},{textKey:"mainMenu.contact",id:"04"}],D=function(e){var t=e.urls,a=e.langKey,n=e.fixed,i=void 0!==n&&n,l=e.inlineStyles,s=void 0===l?{}:l;return r.createElement("nav",{className:L("menu",{fixed:i}),style:s},r.createElement("ul",{className:j.a.list},U.map(function(e,n){return r.createElement("li",{key:n,className:j.a.menuItem},r.createElement(o.a,{to:I(e.id,a,t),className:j.a.menuLink,activeClassName:j.a.menuLinkActive},r.createElement(c.a,{id:e.textKey})))})))};var O=function(e){return"undefined"==typeof window||window.matchMedia("(min-width: 400px)").matches?r.createElement(D,e):r.createElement(F,{position:"top"},function(t){var a=t.fixed,n=t.inlineStyles;return r.createElement(D,Object.assign({},e,{fixed:a,inlineStyles:n}))})},R=a(238),T=a.n(R),q=function(e){var t=e.urls,a=e.langKey,n=e.name,i=e.surname,o=e.copyright,l=e.cvPdfPath,c=e.instagramUsername,s=e.langsMenu;return r.createElement("nav",{className:T.a.navigation},r.createElement("div",{className:T.a.navigationInner},r.createElement("div",null,r.createElement(N,{langKey:a,name:n,surname:i}),r.createElement(O,{urls:t,langKey:a})),r.createElement("div",{className:T.a.bottom},r.createElement(b,{langsMenu:s,copyright:o,cvPdfPath:l,instagramUsername:c}))))},A=(a(239),a(241),a(242),a(243)),W=a.n(A);var I=function(e,t,a){return"/"+("es"===t?"":t)+a[Number(e)-1][t]},J=function(e){var t,n;function i(t){var n;n=e.call(this,t)||this;t.locarion;var r=t.urls,i=t.metadata,o=t.location,c=i.languages,s=c.langs,u=c.defaultLangKey;return n.pathname=o.pathname,n.langKey=Object(l.getCurrentLangKey)(s,u,n.pathname),n.homeLink=("/"+n.langKey).replace("/"+u+"/","/"),i.page.id&&(n.langsMenu=Object(l.getLangs)(s,n.langKey,Object(l.getUrlForLang)(n.homeLink,n.pathname)).map(function(e){return Object.assign({},e,{link:I(i.page.id,e.langKey,r)})})),n.i18nMessages=a(213)("./"+n.langKey),n.appContext={locale:n.langKey,defaultLocale:u,locales:s},n}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.prototype.render=function(){var e=this.props,t=e.children,a=e.metadata,n=e.cvPdfPath,i=e.urls,o=e.hideFooter;return r.createElement(c.b,{locale:this.langKey,messages:this.i18nMessages},r.createElement(s.a,{value:this.appContext},r.createElement(g,{fonts:a.fonts,twitter:a.twitterUsername,url:a.siteUrl,baseTitle:a.title,pageTitle:a.page.title,description:a.page.description,keywords:a.page.keywords,pathname:this.pathname,thumbnail:a.page.metaImage,locale:this.langKey}),r.createElement("div",{className:W.a.layout},r.createElement("div",{className:W.a.nav},r.createElement(q,{urls:i,langKey:this.langKey,langsMenu:this.langsMenu,name:a.name,surname:a.surname,instagramUsername:a.instagramUsername,cvPdfPath:n,copyright:a.copyright})),r.createElement("main",{className:W.a.main},t({cvPdfPath:n})),!o&&r.createElement("div",{className:W.a.footer},r.createElement(b,{langsMenu:this.langsMenu,instagramUsername:a.instagramUsername,cvPdfPath:n,copyright:a.copyright})))))},i}(r.Component);J.defaultProps={hideFooter:!1};var V=J,Z={"toni-figuera-curriculum-castellano":"es","toni-figuera-curriculum-catala":"ca"};t.a=function(e){var t=e.children,a=e.location,r=e.pageData,l=e.hideFooter;return i.a.createElement(o.b,{query:"3630592197",render:function(e){var n,o,c=Object.assign({},e.site.siteMetadata,{page:{id:r.markdownRemark.frontmatter.id,title:r.markdownRemark.frontmatter.title,description:r.markdownRemark.frontmatter.description,keywords:r.markdownRemark.frontmatter.keywords,image:r.metaImage}}),s=e.allPageMappingsJson.edges[0].node.pageUrlMappings,u=(n=e.allFile.edges,o=r.locale,n.map(function(e){return e.node}).find(function(e){return Z[e.name]===o}).publicURL);return i.a.createElement(V,{children:t,hideFooter:l,location:a,metadata:c,urls:s,cvPdfPath:u})},data:n})}},210:function(e){e.exports={data:{allFile:{edges:[{node:{publicURL:"/static/toni-figuera-curriculum-castellano-fc3b39af41138b3f3c85ff15b81a094b.pdf",name:"toni-figuera-curriculum-castellano"}},{node:{publicURL:"/static/toni-figuera-curriculum-catala-937bab42a0d9463c80bfd6fc679aa6ac.pdf",name:"toni-figuera-curriculum-catala"}}]},allPageMappingsJson:{edges:[{node:{pageUrlMappings:[{es:"",ca:""},{es:"curriculum",ca:"/curriculum"},{es:"fotos",ca:"/fotos"},{es:"contacto",ca:"/contacte"}]}}]},site:{siteMetadata:{title:"Toni Figuera",siteUrl:"https://tonifiguera.com",name:"Toni",surname:"Figuera",copyright:"© 2019 Toni Figuera",instagramUsername:"tonifi",twitterUsername:"tonifi",fonts:"Playfair+Display:400,700|Source+Sans+Pro:300,400,600",languages:{defaultLangKey:"es",langs:["es","ca"]}}}}}},211:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),i=a(96);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},213:function(e,t,a){var n={"./ca":204,"./ca.js":204,"./es":205,"./es.js":205};function r(e){var t=i(e);return a(t)}function i(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=213},240:function(e,t){},381:function(e,t,a){"use strict";var n=a(1),r=a(15),i=a(101),o="".startsWith;n(n.P+n.F*a(103)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,a):t.slice(a,a+n.length)===n}})}}]);
//# sourceMappingURL=component---src-pages-404-js-d7ea94d8cb5e3605b069.js.map