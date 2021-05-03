import{jsxs as e,jsx as n}from"react/jsx-runtime";import t,{useState as o,useEffect as i}from"react";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var d=function(){return(d=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};var l="styles-module_Editext__button__sxYQX",s="styles-module_Editext__input__2-M50",a="styles-module_Editext__main_container__2azCD",r="styles-module_Editext__editing_container__1C4d6",_="styles-module_Editext__view_container__3oSYx",u="styles-module_Editext__buttons_container__2za5Q",c="styles-module_Editext__buttons_showButtonsOnHover__2Bfsd",v="styles-module_Editext__buttons_before_aligned__3Eg6w",m="styles-module_Editext__buttons_after_aligned__2ZHQz",f="styles-module_Editext__validation_message__1puii",p="styles-module_Editext__cancel_button__26sqr",x="styles-module_Editext__edit_button__310_J",y="styles-module_Editext__save_button__1Dlwo",b="styles-module_Editext__hide_default_icons__2k5RX",g="styles-module_Editext__hint__EGeV0";function h(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Array.apply(void 0,e).filter((function(e){return e})).join(" ")}!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}('.styles-module_Editext__button__sxYQX {\n  border-radius: 1px;\n  outline: none;\n  padding: 0.6em;\n  min-width: 30px;\n  height: 100%;\n  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);\n  border-style: solid;\n  border-width: 1px;\n}\n\n.styles-module_Editext__button__sxYQX:hover {\n  cursor: pointer;\n  background-color: rgba(241, 241, 241, 1);\n}\n\n.styles-module_Editext__input__2-M50 {\n  width: 100%;\n  border: 1px solid rgb(212, 212, 212);\n  padding: 0.6em;\n  outline: none;\n}\n\n.styles-module_Editext__main_container__2azCD {\n  display: flex;\n  flex-direction: column;\n}\n\n.styles-module_Editext__editing_container__1C4d6 {\n  display: flex;\n  flex: 1;\n  align-items: center;\n}\n\n.styles-module_Editext__view_container__3oSYx {\n  display: flex;\n  align-items: center;\n}\n\n.styles-module_Editext__buttons_container__2za5Q {\n  display: flex;\n}\n\n.styles-module_Editext__buttons_showButtonsOnHover__2Bfsd .styles-module_Editext__buttons_container__2za5Q {\n  visibility: hidden;\n}\n\n.styles-module_Editext__buttons_showButtonsOnHover__2Bfsd:hover .styles-module_Editext__buttons_container__2za5Q {\n  visibility: visible;\n}\n\n.styles-module_Editext__buttons_before_aligned__3Eg6w {\n  margin-right: 5px;\n}\n\n.styles-module_Editext__buttons_after_aligned__2ZHQz {\n  margin-left: 5px;\n}\n\n.styles-module_Editext__validation_message__1puii {\n  font-weight: 500;\n  color: crimson;\n  font-size: 0.7em;\n  margin-top: 3px;\n}\n\n.styles-module_Editext__cancel_button__26sqr {\n  color: crimson;\n}\n\n.styles-module_Editext__cancel_button__26sqr::before {\n  content: "\\2715";\n  margin: 3px;\n}\n\n.styles-module_Editext__edit_button__310_J {\n  color: #000;\n}\n\n.styles-module_Editext__edit_button__310_J::before {\n  content: "\\270E";\n  margin: 3px;\n}\n\n.styles-module_Editext__save_button__1Dlwo {\n  color: darkgreen;\n  margin-right: 3px;\n}\n\n.styles-module_Editext__save_button__1Dlwo::before {\n  content: "\\2713";\n  margin: 3px;\n}\n\n.styles-module_Editext__hide_default_icons__2k5RX::before {\n  content: none;\n  margin: 0;\n}\n\n.styles-module_Editext__hint__EGeV0 {\n  font-weight: 500;\n  color: lightslategray;\n  font-size: 0.7em;\n  margin-top: 3px;\n  text-align: left;\n}\n');var E="view-container",C="edit-container",w="edit-button",O="save-button",N="cancel-button",B="input",P="hint";function D(D){var k=D.value,I=void 0===k?"":k,z=D.type,F=void 0===z?"text":z,U=D.validationMessage,Q=void 0===U?"Invalid Value":U,V=D.cancelButtonContent,j=void 0===V?"":V,S=D.saveButtonContent,K=void 0===S?"":S,H=D.editButtonContent,R=void 0===H?"":H,T=D.buttonsAlign,X=void 0===T?"after":T,Y=D.saveButtonClassName,A=void 0===Y?"":Y,M=D.cancelButtonClassName,q=void 0===M?"":M,J=D.editButtonClassName,G=void 0===J?"":J,Z=D.viewContainerClassName,L=void 0===Z?"":Z,W=D.editContainerClassName,$=void 0===W?"":W,ee=D.mainContainerClassName,ne=void 0===ee?"":ee,te=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t}(D,["value","type","validationMessage","cancelButtonContent","saveButtonContent","editButtonContent","buttonsAlign","saveButtonClassName","cancelButtonClassName","editButtonClassName","viewContainerClassName","editContainerClassName","mainContainerClassName"]),oe=o(te.editing),ie=oe[0],de=oe[1],le=o(!0),se=le[0],ae=le[1],re=o(I||""),_e=re[0],ue=re[1],ce=o(void 0),ve=ce[0],me=ce[1],fe=o(!1),pe=fe[0],xe=fe[1],ye=t.createRef(),be=t.createRef(),ge=t.createRef();function he(e){var n,t=[13,"Enter"].some((function(n){return(null==e?void 0:e.keyCode)===n||(null==e?void 0:e.code)===n})),o=[27,"Escape","Esc"].some((function(n){return(null==e?void 0:e.keyCode)===n||e.code===n}));t&&(te.submitOnEnter&&Pe(),null==e||e.preventDefault()),o&&(te.cancelOnEscape&&Ne(),e.preventDefault()),(null===(n=te.inputProps)||void 0===n?void 0:n.onKeyDown)&&te.inputProps.onKeyDown(e)}function Ee(e){var n,t,o=null===(n=ge.current)||void 0===n?void 0:n.contains(null==e?void 0:e.relatedTarget);te.cancelOnUnfocus&&!o&&Ne(),te.submitOnUnfocus&&!o&&!te.cancelOnUnfocus&&Pe(),(null===(t=te.inputProps)||void 0===t?void 0:t.onBlur)&&te.inputProps.onBlur(e)}function Ce(e){var n;xe(!0),te.startEditingOnFocus&&de(!0),(null===(n=te.viewProps)||void 0===n?void 0:n.onFocus)&&te.viewProps.onFocus(e)}function we(e){var n,t=[13,"Enter"].some((function(n){return e.keyCode===n||e.code===n}))&&pe&&te.startEditingOnEnter;t&&e.preventDefault(),t&&de(!0),(null===(n=te.viewProps)||void 0===n?void 0:n.onKeyDown)&&te.viewProps.onKeyDown(e)}function Oe(e){ae(!0),ue(e.target.value)}function Ne(){var e,n=null!=ve?ve:I;ae(!0),de(!1),ue(n),null===(e=te.onCancel)||void 0===e||e.call(te,n,te.inputProps)}function Be(){var e;de(!0),null===(e=te.onEditingStart)||void 0===e||e.call(te,_e,te.inputProps)}function Pe(){var e;if("function"==typeof te.validation&&!(null===(e=te.validation)||void 0===e?void 0:e.call(te,_e)))return ae(!1),void(te.onValidationFail&&te.onValidationFail(_e));de(!1),me(_e),te.onSave(_e,te.inputProps)}i((function(){te.cancelOnUnfocus&&te.submitOnUnfocus&&console.warn("EdiText: Both `cancelOnUnfocus` and `submitOnUnfocus` are set to true. `submitOnUnfocus` is ignored in this case. Please remove one of these.")}),[te.cancelOnUnfocus,te.submitOnUnfocus]),i((function(){void 0!==I&&(ue(I),me(I)),void 0!==te.editing&&de(te.editing)}),[te.editing,I]);var De,ke,Ie,ze,Fe,Ue,Qe=ie?function(){var t="textarea"===F?n("textarea",d({className:s,editext:B,tabIndex:te.tabIndex},te.inputProps,{onBlur:Ee,value:_e,onChange:Oe,autoFocus:ie}),void 0):n("input",d({className:s,editext:B,tabIndex:te.tabIndex},te.inputProps,{onKeyDown:he,onBlur:Ee,value:_e,type:F,onChange:Oe,autoFocus:ie}),void 0),o=h(""+l,""+y,te.hideIcons&&""+b),i=A||o,a=h(""+l,""+p,te.hideIcons&&""+b),_=q||a,c=r;$&&(c=$),L&&(c=L);var x=h(u,"before"===X&&""+v,"after"===X&&""+m);return e("div",{children:[e("div",d({ref:be,className:c,editext:C},{children:["after"===X&&t,e("div",d({className:x,ref:ge},{children:[n("button",d({ref:ye,editext:O,type:"button",className:i,onClick:Pe},{children:K}),void 0),n("button",d({type:"button",editext:N,className:_,onClick:Ne},{children:j}),void 0)]}),void 0),"before"===X&&t]}),void 0),!se&&!te.onValidationFail&&n("div",d({className:f},{children:Q}),void 0),te.hint&&n("div",d({className:g,editext:P},{children:te.hint}),void 0)]},void 0)}():(De=h(""+l,""+x,te.hideIcons&&""+b),ke=G||De,Ie=h(L||_,te.showButtonsOnHover&&""+c),ze=h(u,"before"===X&&""+v,"after"===X&&""+m),Fe=te.editOnViewClick?Be:void 0,Ue="function"==typeof te.renderValue?te.renderValue(_e):_e,e("div",d({className:Ie,editext:E},{children:["after"===X&&n("div",d({tabIndex:te.tabIndex},te.viewProps,{onKeyDown:we,onFocus:Ce,onClick:Fe,editext:"view"},{children:Ue}),void 0),n("div",d({className:ze},{children:n("button",d({type:"button",editext:w,className:ke,onClick:Be},{children:R}),void 0)}),void 0),"before"===X&&n("div",d({tabIndex:te.tabIndex},te.viewProps,{onKeyDown:we,onFocus:Ce,onClick:Fe,editext:E},{children:Ue}),void 0)]}),void 0)),Ve=h(ne||a,te.className);return n("div",d({className:Ve},{children:Qe}),void 0)}export default D;
//# sourceMappingURL=index.es.js.map
