(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return o});var r=n(0),a=n.n(r),i=n(156);t.default=function(e){var t=e.data;return a.a.createElement(i.a,{images:t.allHomeJson.edges[0].node.images,pathname:"fotos",pageTitle:"Fotos"})};var o="545934509"},142:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(143),s=n.n(l),c=function(e){var t=e.children;return a.a.createElement("div",{className:s.a.content},a.a.createElement("div",{className:s.a.contentInner},t))};c.propTypes={children:o.a.node.isRequired},t.a=c},143:function(e,t,n){e.exports={content:"index-module--content--3DmGQ",contentInner:"index-module--contentInner--28CwS"}},154:function(e,t,n){e.exports={grid:"index-module--grid--3MKCA",row:"index-module--row--1Qoee",cell:"index-module--cell--3eccC",isVisible:"index-module--isVisible--2z1hs",imageWrapper:"index-module--imageWrapper--uHER4",emptyCell:"index-module--emptyCell--33LPN"}},155:function(e,t,n){e.exports={intro:"index-module--intro--26JGX"}},156:function(e,t,n){"use strict";var r,a=n(0),i=n.n(a),o=n(148),l=n(165),s=n.n(l),c=n(7),u=n.n(c),p=n(166),m=n.n(p),g=n(146),d=n.n(g),h=n(167),f=n.n(h),y=n(168),v=n(169),x=n.n(v),C=n(154),S=n.n(C),w=d.a.bind(S.a),I=(r=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={imageIndex:null},t}u()(t,e);var n=t.prototype;return n.getSrc=function(e){return e.src.childImageSharp.fluid.src},n.onPrev=function(){var e=this.props.images,t=this.state.imageIndex;this.setState({imageIndex:(t+e.length-1)%e.length})},n.onNext=function(){var e=this.props.images,t=this.state.imageIndex;this.setState({imageIndex:(t+1)%e.length})},n.onClose=function(){this.setState({imageIndex:null})},n.onClick=function(e){var t=this;return function(){null!==!e&&t.setState({imageIndex:e})}},n.renderCell=function(e){if("empty"===e.type)return i.a.createElement("div",{className:S.a.emptyCell});var t=e.image;return i.a.createElement(f.a,{imgStyle:{transition:"transform 400ms ease-out"},className:S.a.imageWrapper,title:t.title,alt:t.alt,fluid:t.src.childImageSharp.fluid})},n.render=function(){var e=this,t=this.state.imageIndex;return i.a.createElement("div",{className:S.a.grid},this.rows.map(function(t,n){return i.a.createElement("div",{key:n,className:S.a.row},t.map(function(t,n){return i.a.createElement("div",{onClick:e.onClick(t.index),key:"cell-"+n,className:w("cell",{isVisible:"empty"!==t.type})},e.renderCell(t))}))}),null!==t&&i.a.createElement(x.a,{reactModalProps:{shouldReturnFocusAfterClose:!1},mainSrc:this.mainSrc,nextSrc:this.nextSrc,prevSrc:this.prevSrc,onCloseRequest:this.onClose,onMovePrevRequest:this.onPrev,onMoveNextRequest:this.onNext}))},s()(t,[{key:"rowCells",get:function(){return this.props.images.map(function(e,t){return{type:"image",image:e,index:t}})}},{key:"rows",get:function(){var e=this.rowCells.reduce(function(e,t){var n=e.length-1,r=e[n],a=r?r.length-1:null,i=null!==a?r[a]:null;return!t.image.full&&r&&r.length<2&&!i.image.full?e[n].push(t):e.push([t]),e},[]),t=e[e.length-1];if(2===t.length)return e;var n=t?t.length-1:null;return(null!==n?t[n]:null).image.full?e:(e[e.length-1].push({type:"empty",index:null}),e)}},{key:"mainSrc",get:function(){return this.getSrc(this.props.images[this.state.imageIndex])}},{key:"nextSrc",get:function(){var e=this.props.images,t=this.state.imageIndex;return this.getSrc(e[(t+1)%e.length])}},{key:"prevSrc",get:function(){var e=this.props.images,t=this.state.imageIndex;return this.getSrc(e[(t+e.length-1)%e.length])}}]),t}(i.a.Component),m()(r.prototype,"onPrev",[y.a],Object.getOwnPropertyDescriptor(r.prototype,"onPrev"),r.prototype),m()(r.prototype,"onNext",[y.a],Object.getOwnPropertyDescriptor(r.prototype,"onNext"),r.prototype),m()(r.prototype,"onClose",[y.a],Object.getOwnPropertyDescriptor(r.prototype,"onClose"),r.prototype),m()(r.prototype,"onClick",[y.a],Object.getOwnPropertyDescriptor(r.prototype,"onClick"),r.prototype),r),E=n(147),k=n(142),N=n(155),P=n.n(N);t.a=function(e){var t=e.images,n=e.pathname,r=e.pageTitle;return i.a.createElement(o.a,{metaImage:t[0].src.childImageSharp.fluid.src,pathname:n,pageTitle:r},i.a.createElement(E.a,{title:"Actor y director"},i.a.createElement("p",{className:P.a.intro},"Lorem ipsum dolor sit amet consectetur adipiscing elit nisi diam aliquam, mollis a laoreet hac magnis posuere facilisi.")),i.a.createElement(k.a,null,i.a.createElement(I,{images:t})))}}}]);
//# sourceMappingURL=component---src-pages-fotos-js-ba4e2d526a6961414db5.js.map