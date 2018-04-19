"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var styled=require("styled-components"),styled__default=_interopDefault(styled),React=_interopDefault(require("react"));function rem(e){return e/16+"rem"}var colors={grey:{normal:"#e6e6e6",light:"#fafafa"}},taggedTemplateLiteral=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},_templateObject=taggedTemplateLiteral(["\n  width: ","%;\n"],["\n  width: ","%;\n"]),_templateObject2=taggedTemplateLiteral(["\n  min-width: 1rem;\n  height: ",";\n  background-color: ",";\n  border-radius: ",";\n  ",";\n"],["\n  min-width: 1rem;\n  height: ",";\n  background-color: ",";\n  border-radius: ",";\n  ",";\n"]),line=styled.css(_templateObject,function(e){return void 0!==e.width?e.width:100}),Line=styled__default.div(_templateObject2,rem(8),colors.grey.normal,rem(3),line);function random(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return Math.max(e,Math.floor(Math.random()*(t-e)+e))}function range(e,t){return Array(t-e+1).fill().map(function(t,n){return e+n})}var _templateObject$1=taggedTemplateLiteral(["\n    width: ",";\n    height: ",";\n  "],["\n    width: ",";\n    height: ",";\n  "]),_templateObject2$1=taggedTemplateLiteral(["\n  box-sizing: border-box;\n  background-color: #fff;\n  border-radius: ",";\n  padding: ",";\n  ",";\n"],["\n  box-sizing: border-box;\n  background-color: #fff;\n  border-radius: ",";\n  padding: ",";\n  ",";\n"]),shapes={rectangle:styled.css(_templateObject$1,function(e){return rem(e.size?2*e.size:700)},function(e){return rem(e.size?e.size:350)}),square:styled.css(_templateObject$1,function(e){return rem(e.size?e.size:350)},function(e){return rem(e.size?e.size:350)}),card:styled.css(_templateObject$1,function(e){return rem(e.size?e.size:350)},function(e){return rem(e.size?1.75*e.size:525)})},Paper=styled__default.div(_templateObject2$1,rem(2),rem(8),function(e){return e.shape&&shapes[e.shape]}),_templateObject$2=taggedTemplateLiteral([""],[""]),C=function(e){var t=e.className,n=e.count,r=void 0===n?1:n;return React.createElement(Paper,{className:t},range(0,r).map(function(e){return React.createElement(Paper,{key:e},React.createElement(Line,{width:random(20)}))}))},Column=styled__default(C)(_templateObject$2),_templateObject$3=taggedTemplateLiteral(["\n    height: ",";\n  "],["\n    height: ",";\n  "]),_templateObject2$2=taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: ",";\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-bottom: ",";\n\n  "," {\n    margin-right: ",";\n    margin-bottom: ",";\n    ",";\n  }\n"],["\n  display: flex;\n  flex-wrap: ",";\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-bottom: ",";\n\n  "," {\n    margin-right: ",";\n    margin-bottom: ",";\n    ",";\n  }\n"]),size=function(e){var t=e.size,n=void 0===t?1:t;return styled.css(_templateObject$3,rem(Math.max(64/n)))},H=function(e){var t=e.className,n=e.words,r=void 0===n?1:n;e.size;return React.createElement(Paper,{className:t},range(0,r).map(function(e){return React.createElement(Line,{key:"w"+e,width:random(25,Math.max(50,80/Math.min(4,r)))})}))},Header=styled__default(H)(_templateObject2$2,function(e){return e.wrap&&"wrap"},rem(8),Line,rem(8),function(e){return e.wrap&&rem(8)},size),_templateObject$4=taggedTemplateLiteral(["\n      border-radius: 100%;\n      width: ",";\n      height: ",";\n    "],["\n      border-radius: 100%;\n      width: ",";\n      height: ",";\n    "]),_templateObject2$3=taggedTemplateLiteral(["\n    width: ",";\n    height: ",";\n  "],["\n    width: ",";\n    height: ",";\n  "]),_templateObject3=taggedTemplateLiteral(["\n  ",";\n  background-color: ",";\n"],["\n  ",";\n  background-color: ",";\n"]),normalize=function(e){var t=e.circle,n=e.height,r=void 0===n?50:n,a=e.width,i=void 0===a?50:a;if(t){var l=Math.max(r,i);return styled.css(_templateObject$4,rem(l),rem(l))}return styled.css(_templateObject2$3,rem(i),rem(r))},Image=styled__default.div(_templateObject3,normalize,colors.grey.normal),_templateObject$5=taggedTemplateLiteral(["\n  border-radius: ",";\n  border: "," solid #0000000f;\n  height: ",";\n  max-width: ",";\n  width: 100%;\n  background-color: ",";\n"],["\n  border-radius: ",";\n  border: "," solid #0000000f;\n  height: ",";\n  max-width: ",";\n  width: 100%;\n  background-color: ",";\n"]),Input=styled__default.div(_templateObject$5,rem(2),rem(2),rem(40),function(e){return rem(e.width||250)},colors.grey.light),_templateObject$6=taggedTemplateLiteral(["\n  "," {\n    display: flex;\n\n    "," {\n      &:first-child {\n        margin-right: ",";\n      }\n    }\n  }\n"],["\n  "," {\n    display: flex;\n\n    "," {\n      &:first-child {\n        margin-right: ",";\n      }\n    }\n  }\n"]),L=function(e){var t=e.className,n=e.items,r=void 0===n?1:n;return React.createElement(Paper,{className:t},range(0,r).map(function(e){return React.createElement(Paper,{key:e},React.createElement(Line,{width:2}),React.createElement(Line,{width:random(20)}))}))},List=styled__default(L)(_templateObject$6,Paper,Line,rem(8)),_templateObject$7=taggedTemplateLiteral(["\n    width: ","%;\n    margin-left: ","%;\n  "],["\n    width: ","%;\n    margin-left: ","%;\n  "]),_templateObject2$4=taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  margin: "," 0;\n\n  "," {\n    width: 100%;\n    margin-bottom: 0;\n\n    &:first-child {\n      ",";\n    }\n\n    &:last-child {\n      width: ","%;\n    }\n  }\n"],["\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  margin: "," 0;\n\n  "," {\n    width: 100%;\n    margin-bottom: 0;\n\n    &:first-child {\n      ",";\n    }\n\n    &:last-child {\n      width: ","%;\n    }\n  }\n"]),P=function(e){var t=e.className,n=e.lines,r=void 0===n?3:n,a=e.paragraphs,i=void 0===a?0:a;return React.createElement(Paper,{className:t,shape:"rectangle"},range(0,i).map(function(e){return React.createElement(Paper,{key:"p"+e},range(0,r).map(function(t){return React.createElement(Header,{key:"p"+e+"l"+t,words:random(1,3),size:8})}))}))},rightAlign=function(){var e=random(90);return styled.css(_templateObject$7,e,100-e)},Paragraph=styled__default(P)(_templateObject2$4,rem(8),Header,rightAlign(),random(20,80)),_templateObject$8=taggedTemplateLiteral(["\n  position: relative;\n  border-radius: ",";\n  border: "," solid #0000000f;\n  height: ",";\n  max-width: ",";\n  width: 100%;\n  background-color: ",";\n\n  &:after {\n    position: absolute;\n    background-color: #0000000f;\n    border-radius: ",";\n    content: '';\n    height: 80%;\n    top: 2.5%;\n    width: ",";\n    right: ",";\n  }\n"],["\n  position: relative;\n  border-radius: ",";\n  border: "," solid #0000000f;\n  height: ",";\n  max-width: ",";\n  width: 100%;\n  background-color: ",";\n\n  &:after {\n    position: absolute;\n    background-color: #0000000f;\n    border-radius: ",";\n    content: '';\n    height: 80%;\n    top: 2.5%;\n    width: ",";\n    right: ",";\n  }\n"]),Textarea=styled__default.div(_templateObject$8,rem(2),rem(2),function(e){return rem(e.height||250)},function(e){return rem(e.width||500)},colors.grey.light,rem(5),rem(5),rem(5)),fakey={Line:Line,Column:Column,Header:Header,Image:Image,Input:Input,List:List,Paragraph:Paragraph,Textarea:Textarea};module.exports=fakey;
//# sourceMappingURL=index.js.map