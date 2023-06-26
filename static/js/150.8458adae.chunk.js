"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[150],{4150:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r=t(2791),a="App_title__Xrt9W",u="App_container__ZdBeZ",i=t(9439),s=t(3402),c="ContactsForm_form__1Y65-",o="ContactsForm_label__Z7jht",l="ContactsForm_input__UjXFK",f="ContactsForm_addBtn__6R6PD",p=t(9434),m="NOT_FOUND";var d=function(e,n){return e===n};function v(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?d:r,u=t.maxSize,i=void 0===u?1:u,s=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),o=1===i?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:m},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return m}return{get:r,put:function(n,a){r(n)===m&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,c);function l(){var n=o.get(arguments);if(n===m){if(n=e.apply(null,arguments),s){var t=o.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}o.put(arguments,n)}return n}return l.clearCache=function(){return o.clear()},l}function h(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function y(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var u,i=0,s={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(s=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var o=s,l=o.memoizeOptions,f=void 0===l?t:l,p=Array.isArray(f)?f:[f],m=h(r),d=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(p)),v=e((function(){for(var e=[],n=m.length,t=0;t<n;t++)e.push(m[t].apply(null,arguments));return u=d.apply(null,e)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:d,dependencies:m,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return a}var _=y(v),x=function(e){return e.contacts.items},b=function(e){return e.filter},j=function(e){return e.contacts.isloading},g=_([x,b],(function(e,n){return e&&n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase().trim())})):e})),C=t(3064),N=t(3329);function k(){var e=(0,r.useState)(""),n=(0,i.Z)(e,2),t=n[0],a=n[1],u=(0,r.useState)(""),m=(0,i.Z)(u,2),d=m[0],v=m[1],h=(0,p.v9)(x),y=(0,p.I0)(),_=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":a(r);break;case"number":v(r);break;default:return}};return(0,N.jsx)("div",{children:(0,N.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault(),h.some((function(e){return e.name===t}))?(0,s.Am)("".concat(t," is already in contacts")):(y((0,C.uK)({name:t,number:d})),a(""),v(""))},children:[(0,N.jsxs)("label",{className:o,children:["Name",(0,N.jsx)("input",{className:l,onChange:_,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t})]}),(0,N.jsxs)("label",{className:o,children:["Number",(0,N.jsx)("input",{className:l,onChange:_,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d})]}),(0,N.jsx)("button",{className:f,type:"submit",children:"Add Contact"})]})})}var A="Filter_inputName__snXo9",w=t(4808);function F(){var e=(0,p.I0)(),n=(0,p.v9)(b);return(0,N.jsx)("div",{children:(0,N.jsx)("input",{className:A,type:"text",value:n,onChange:function(n){return e((0,w.M6)(n.target.value))},name:"filter",placeholder:"Search by name"})})}var z={items:"ContactsList_items__TY5P-",span:"ContactsList_span__f2AL-",itemBtn:"ContactsList_itemBtn__ufbn0"};function Z(){var e=(0,p.v9)(g),n=(0,p.I0)();return(0,N.jsx)("ul",{className:z.list,children:e.map((function(e){return(0,N.jsxs)("li",{className:z.items,id:e.id,children:[(0,N.jsx)("span",{className:z.span,children:e.name}),":",(0,N.jsx)("span",{className:z.span,children:e.number}),(0,N.jsx)("button",{className:z.itemBtn,onClick:function(){return n((0,C.GK)(e.id))},children:"Delete"})]},e.id)}))})}var E=t(4217);function S(){var e=(0,p.I0)(),n=(0,p.v9)(j),t=(0,p.v9)(E.rK);return(0,r.useEffect)((function(){t&&e((0,C.yF)())}),[e,t]),(0,N.jsxs)("div",{className:u,children:[(0,N.jsx)("h1",{className:a,children:"Phonebook"}),(0,N.jsx)(k,{}),(0,N.jsx)("h2",{className:a,children:" Contacts"}),(0,N.jsx)(F,{}),(0,N.jsx)("div",{children:n&&"Request in progress..."}),(0,N.jsx)(Z,{}),(0,N.jsx)(s.x7,{})]})}}}]);
//# sourceMappingURL=150.8458adae.chunk.js.map