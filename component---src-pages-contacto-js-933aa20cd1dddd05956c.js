(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{138:function(e,t,n){"use strict";n.r(t);n(35),n(33),n(146);var a=n(0),r=n(202),l=n(203),o=n(145),c=n.n(o),i=n(148),u=n(147),s=n(143),m=n(192),d=n.n(m),p=c.a.bind(d.a);function b(e){return e?null:"Requerido"}function E(e){var t=b(e);return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(t="Email no válido"),t}function v(e){var t=e.children;return a.createElement("div",{className:d.a.row},t)}function f(e){var t=e.children,n=e.label,l=e.name,o=e.type,c=e.validate,i=e.errors,u=e.touched,s={type:o,name:l};c&&(s=Object.assign({},s,{validate:c}));var m=!!i[l]&&u[l];return a.createElement(r.a,s,function(e){var r=e.field,c=Object.assign({},r,{id:l,type:o});return a.createElement("label",{htmlFor:l,className:p("labelInput",{hasErrors:m})},t({fieldProps:c}),a.createElement("span",{className:d.a.label},n,m&&a.createElement("span",{className:d.a.errors}," - ",i[l])),a.createElement("span",{className:d.a.border}))})}function h(e){var t=e.label,n=e.name,r=e.type,l=e.validate,o=e.errors,c=e.touched;return a.createElement(f,{type:r,name:n,label:t,validate:l,errors:o,touched:c},function(e){var t=e.fieldProps;return a.createElement("input",Object.assign({},t,{className:d.a.input,placeholder:" "}))})}function x(e){var t=e.label,n=e.name,r=e.type,o=e.validate,c=e.errors,i=e.touched;return a.createElement(f,{type:r,name:n,label:t,validate:o,errors:c,touched:i},function(e){var t=e.fieldProps;return a.createElement(l.a,Object.assign({},t,{className:d.a.input,placeholder:" "}))})}function y(e,t){return Promise.resolve()}var N=function(){return a.createElement(i.a,{hideFooter:!0,pathname:"contacto",pageTitle:"Contacto"},a.createElement(u.a,{title:"Contacto",description:"Recibiré un email y te contestaré lo antes posible."}),a.createElement(s.a,null,a.createElement("div",{className:d.a.contact},a.createElement(r.c,{initialValues:{email:"",subject:"",comment:""},onSubmit:y,render:function(e){var t=e.errors,n=(e.status,e.touched),l=e.isSubmitting;return a.createElement(r.b,{className:d.a.form},a.createElement(v,null,a.createElement(h,{type:"email",name:"email",label:"Tu email",errors:t,touched:n,validate:E})),a.createElement(v,null,a.createElement(h,{type:"text",name:"subject",label:"Asunto de tu consulta",errors:t,touched:n,validate:b})),a.createElement(v,null,a.createElement(x,{type:"textarea",name:"comment",label:"Tus comentarios",errors:t,touched:n,validate:b})),a.createElement(v,null,a.createElement("button",{className:d.a.button,type:"submit",disabled:l},a.createElement("span",null,"Enviar mensaje"))))}}))))};t.default=N},143:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(4),o=n.n(l),c=n(144),i=n.n(c),u=function(e){var t=e.children;return r.a.createElement("div",{className:i.a.content},r.a.createElement("div",{className:i.a.contentInner},t))};u.propTypes={children:o.a.node.isRequired},t.a=u},144:function(e,t,n){e.exports={content:"index-module--content--3DmGQ",contentInner:"index-module--contentInner--28CwS"}},192:function(e,t,n){e.exports={contact:"index-module--contact--3rYkf",form:"index-module--form--b47tK",row:"index-module--row--kolpM",labelInput:"index-module--labelInput--2IAbt",label:"index-module--label--2_h3w",errors:"index-module--errors--3643P",border:"index-module--border--jQilC",hasErrors:"index-module--hasErrors--2qBuU",input:"index-module--input--y1aAp",button:"index-module--button--3emH0"}}}]);
//# sourceMappingURL=component---src-pages-contacto-js-933aa20cd1dddd05956c.js.map