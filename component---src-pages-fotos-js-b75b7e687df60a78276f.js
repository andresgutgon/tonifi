(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(148),o=n(153),l=n(147),s=n(142),c=n(204),u=n.n(c),p=function(e){var t=e.images,n=e.pathname,r=e.pageTitle;return a.a.createElement(i.a,{metaImage:t[0].src.childImageSharp.fluid.src,pathname:n,pageTitle:r},a.a.createElement(l.a,{title:"Galeria d'imatges"},a.a.createElement("p",{className:u.a.intro},"Fotos d'espectacles i actuacions")),a.a.createElement(s.a,null,a.a.createElement(o.a,{images:t})))};n.d(t,"pageQuery",function(){return m});t.default=function(e){var t=e.data;return a.a.createElement(p,{images:t.allPhotosJson.edges[0].node.images,pathname:"fotos",pageTitle:"Fotos"})};var m="2328486424"},142:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(143),s=n.n(l),c=function(e){var t=e.children;return a.a.createElement("div",{className:s.a.content},a.a.createElement("div",{className:s.a.contentInner},t))};c.propTypes={children:o.a.node.isRequired},t.a=c},143:function(e,t,n){e.exports={content:"index-module--content--3DmGQ",contentInner:"index-module--contentInner--28CwS"}},153:function(e,t,n){"use strict";n.d(t,"a",function(){return w});var r,a=n(164),i=n.n(a),o=n(7),l=n.n(o),s=n(165),c=n.n(s),u=n(0),p=n.n(u),m=n(146),g=n.n(m),d=n(166),h=n.n(d),f=n(167),y=n(168),v=n.n(y),x=n(155),S=n.n(x),C=g.a.bind(S.a),w=(r=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={imageIndex:null},t}l()(t,e);var n=t.prototype;return n.getSrc=function(e){return e.src.childImageSharp.fluid.src},n.onPrev=function(){var e=this.props.images,t=this.state.imageIndex;this.setState({imageIndex:(t+e.length-1)%e.length})},n.onNext=function(){var e=this.props.images,t=this.state.imageIndex;this.setState({imageIndex:(t+1)%e.length})},n.onClose=function(){this.setState({imageIndex:null})},n.onClick=function(e){var t=this;return function(){null!==!e&&t.setState({imageIndex:e})}},n.renderCell=function(e){if("empty"===e.type)return p.a.createElement("div",{className:S.a.emptyCell});var t=e.image;return p.a.createElement(h.a,{imgStyle:{transition:"transform 400ms ease-out"},className:S.a.imageWrapper,title:t.title,alt:t.alt,fluid:t.src.childImageSharp.fluid})},n.render=function(){var e=this,t=this.state.imageIndex;return p.a.createElement("div",{className:S.a.grid},this.rows.map(function(t,n){return p.a.createElement("div",{key:n,className:S.a.row},t.map(function(t,n){return p.a.createElement("div",{onClick:e.onClick(t.index),key:"cell-"+n,className:C("cell",{isVisible:"empty"!==t.type})},e.renderCell(t))}))}),null!==t&&p.a.createElement(v.a,{reactModalProps:{shouldReturnFocusAfterClose:!1},reactModalStyle:{overlay:{zIndex:3001}},mainSrc:this.mainSrc,nextSrc:this.nextSrc,prevSrc:this.prevSrc,onCloseRequest:this.onClose,onMovePrevRequest:this.onPrev,onMoveNextRequest:this.onNext}))},i()(t,[{key:"rowCells",get:function(){return this.props.images.map(function(e,t){return{type:"image",image:e,index:t}})}},{key:"rows",get:function(){var e=this.rowCells.reduce(function(e,t){var n=e.length-1,r=e[n],a=r?r.length-1:null,i=null!==a?r[a]:null;return!t.image.full&&r&&r.length<2&&!i.image.full?e[n].push(t):e.push([t]),e},[]),t=e[e.length-1];if(2===t.length)return e;var n=t?t.length-1:null;return(null!==n?t[n]:null).image.full?e:(e[e.length-1].push({type:"empty",index:null}),e)}},{key:"mainSrc",get:function(){return this.getSrc(this.props.images[this.state.imageIndex])}},{key:"nextSrc",get:function(){var e=this.props.images,t=this.state.imageIndex;return this.getSrc(e[(t+1)%e.length])}},{key:"prevSrc",get:function(){var e=this.props.images,t=this.state.imageIndex;return this.getSrc(e[(t+e.length-1)%e.length])}}]),t}(p.a.Component),c()(r.prototype,"onPrev",[f.a],Object.getOwnPropertyDescriptor(r.prototype,"onPrev"),r.prototype),c()(r.prototype,"onNext",[f.a],Object.getOwnPropertyDescriptor(r.prototype,"onNext"),r.prototype),c()(r.prototype,"onClose",[f.a],Object.getOwnPropertyDescriptor(r.prototype,"onClose"),r.prototype),c()(r.prototype,"onClick",[f.a],Object.getOwnPropertyDescriptor(r.prototype,"onClick"),r.prototype),r)},155:function(e,t,n){e.exports={grid:"index-module--grid--3MKCA",row:"index-module--row--1Qoee",cell:"index-module--cell--3eccC",isVisible:"index-module--isVisible--2z1hs",imageWrapper:"index-module--imageWrapper--uHER4",emptyCell:"index-module--emptyCell--33LPN"}},204:function(e,t,n){e.exports={intro:"index-module--intro--1mXgu"}}}]);
//# sourceMappingURL=component---src-pages-fotos-js-b75b7e687df60a78276f.js.map