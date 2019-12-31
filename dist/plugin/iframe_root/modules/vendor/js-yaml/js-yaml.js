!function(e){
if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{
("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).jsyaml=e()
}}((function(){return function e(t,n,i){function r(a,s){if(!n[a]){if(!t[a]){
var c="function"==typeof require&&require;if(!s&&c)return c(a,!0)
;if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'")
;throw u.code="MODULE_NOT_FOUND",u}var l=n[a]={exports:{}}
;t[a][0].call(l.exports,(function(e){return r(t[a][1][e]||e)
}),l,l.exports,e,t,n,i)}return n[a].exports}
for(var o="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a])
;return r}({1:[function(e,t,n){"use strict"
;var i=e("./js-yaml/loader"),r=e("./js-yaml/dumper");function o(e){
return function(){
throw new Error("Function "+e+" is deprecated and cannot be used.")}}
t.exports.Type=e("./js-yaml/type"),
t.exports.Schema=e("./js-yaml/schema"),t.exports.FAILSAFE_SCHEMA=e("./js-yaml/schema/failsafe"),
t.exports.JSON_SCHEMA=e("./js-yaml/schema/json"),
t.exports.CORE_SCHEMA=e("./js-yaml/schema/core"),
t.exports.DEFAULT_SAFE_SCHEMA=e("./js-yaml/schema/default_safe"),
t.exports.DEFAULT_FULL_SCHEMA=e("./js-yaml/schema/default_full"),
t.exports.load=i.load,t.exports.loadAll=i.loadAll,t.exports.safeLoad=i.safeLoad,
t.exports.safeLoadAll=i.safeLoadAll,
t.exports.dump=r.dump,t.exports.safeDump=r.safeDump,
t.exports.YAMLException=e("./js-yaml/exception"),
t.exports.MINIMAL_SCHEMA=e("./js-yaml/schema/failsafe"),
t.exports.SAFE_SCHEMA=e("./js-yaml/schema/default_safe"),
t.exports.DEFAULT_SCHEMA=e("./js-yaml/schema/default_full"),
t.exports.scan=o("scan"),
t.exports.parse=o("parse"),t.exports.compose=o("compose"),
t.exports.addConstructor=o("addConstructor")},{"./js-yaml/dumper":3,
"./js-yaml/exception":4,"./js-yaml/loader":5,"./js-yaml/schema":7,
"./js-yaml/schema/core":8,"./js-yaml/schema/default_full":9,
"./js-yaml/schema/default_safe":10,"./js-yaml/schema/failsafe":11,
"./js-yaml/schema/json":12,"./js-yaml/type":13}],2:[function(e,t,n){"use strict"
;function i(e){return null==e}
t.exports.isNothing=i,t.exports.isObject=function(e){
return"object"==typeof e&&null!==e},t.exports.toArray=function(e){
return Array.isArray(e)?e:i(e)?[]:[e]},t.exports.repeat=function(e,t){var n,i=""
;for(n=0;n<t;n+=1)i+=e;return i},t.exports.isNegativeZero=function(e){
return 0===e&&Number.NEGATIVE_INFINITY===1/e},t.exports.extend=function(e,t){
var n,i,r,o;if(t)for(n=0,i=(o=Object.keys(t)).length;n<i;n+=1)e[r=o[n]]=t[r]
;return e}},{}],3:[function(e,t,n){"use strict"
;var i=e("./common"),r=e("./exception"),o=e("./schema/default_full"),a=e("./schema/default_safe"),s=Object.prototype.toString,c=Object.prototype.hasOwnProperty,u=9,l=10,p=32,f=33,d=34,h=35,m=37,g=38,y=39,x=42,v=44,A=45,b=58,w=62,C=63,k=64,j=91,S=93,I=96,O=123,E=124,F=125,_={
0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",
34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"
},N=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"]
;function M(e){var t,n,o
;if(t=e.toString(16).toUpperCase(),e<=255)n="x",o=2;else if(e<=65535)n="u",
o=4;else{
if(!(e<=4294967295))throw new r("code point within a string may not be greater than 0xFFFFFFFF")
;n="U",o=8}return"\\"+n+i.repeat("0",o-t.length)+t}function T(e){
this.schema=e.schema||o,
this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,
this.skipInvalid=e.skipInvalid||!1,
this.flowLevel=i.isNothing(e.flowLevel)?-1:e.flowLevel,
this.styleMap=function(e,t){var n,i,r,o,a,s,u;if(null===t)return{};for(n={},r=0,
o=(i=Object.keys(t)).length;r<o;r+=1)a=i[r],
s=String(t[a]),"!!"===a.slice(0,2)&&(a="tag:yaml.org,2002:"+a.slice(2)),
(u=e.compiledTypeMap.fallback[a])&&c.call(u.styleAliases,s)&&(s=u.styleAliases[s]),
n[a]=s;return n
}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,
this.noRefs=e.noRefs||!1,
this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,
this.implicitTypes=this.schema.compiledImplicit,
this.explicitTypes=this.schema.compiledExplicit,
this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}
function L(e,t){
for(var n,r=i.repeat(" ",t),o=0,a=-1,s="",c=e.length;o<c;)-1===(a=e.indexOf("\n",o))?(n=e.slice(o),
o=c):(n=e.slice(o,a+1),o=a+1),n.length&&"\n"!==n&&(s+=r),s+=n;return s}
function D(e,t){return"\n"+i.repeat(" ",e.indent*t)}function U(e){
return e===p||e===u}function q(e){
return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&65279!==e||65536<=e&&e<=1114111
}function Y(e){
return q(e)&&65279!==e&&e!==v&&e!==j&&e!==S&&e!==O&&e!==F&&e!==b&&e!==h}
function R(e){return/^\n* /.test(e)}var B=1,P=2,W=3,K=4,$=5
;function H(e,t,n,i,r){var o,a,s=!1,c=!1,u=-1!==i,p=-1,_=function(e){
return q(e)&&65279!==e&&!U(e)&&e!==A&&e!==C&&e!==b&&e!==v&&e!==j&&e!==S&&e!==O&&e!==F&&e!==h&&e!==g&&e!==x&&e!==f&&e!==E&&e!==w&&e!==y&&e!==d&&e!==m&&e!==k&&e!==I
}(e.charCodeAt(0))&&!U(e.charCodeAt(e.length-1));if(t)for(o=0;o<e.length;o++){
if(!q(a=e.charCodeAt(o)))return $;_=_&&Y(a)}else{for(o=0;o<e.length;o++){
if((a=e.charCodeAt(o))===l)s=!0,
u&&(c=c||o-p-1>i&&" "!==e[p+1],p=o);else if(!q(a))return $;_=_&&Y(a)}
c=c||u&&o-p-1>i&&" "!==e[p+1]}return s||c?n>9&&R(e)?$:c?K:W:_&&!r(e)?B:P}
function G(e,t,n,i){e.dump=function(){if(0===t.length)return"''"
;if(!e.noCompatMode&&-1!==N.indexOf(t))return"'"+t+"'"
;var o=e.indent*Math.max(1,n),a=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),s=i||e.flowLevel>-1&&n>=e.flowLevel
;switch(H(t,s,e.indent,a,(function(t){return function(e,t){var n,i
;for(n=0,i=e.implicitTypes.length;n<i;n+=1)if(e.implicitTypes[n].resolve(t))return!0
;return!1}(e,t)}))){case B:return t;case P:return"'"+t.replace(/'/g,"''")+"'"
;case W:return"|"+V(t,e.indent)+Z(L(t,o));case K:
return">"+V(t,e.indent)+Z(L(function(e,t){
var n,i,r=/(\n+)([^\n]*)/g,o=function(){var n=e.indexOf("\n")
;return n=-1!==n?n:e.length,r.lastIndex=n,z(e.slice(0,n),t)
}(),a="\n"===e[0]||" "===e[0];for(;i=r.exec(e);){var s=i[1],c=i[2];n=" "===c[0],
o+=s+(a||n||""===c?"":"\n")+z(c,t),a=n}return o}(t,a),o));case $:
return'"'+function(e){
for(var t,n,i,r="",o=0;o<e.length;o++)(t=e.charCodeAt(o))>=55296&&t<=56319&&(n=e.charCodeAt(o+1))>=56320&&n<=57343?(r+=M(1024*(t-55296)+n-56320+65536),
o++):(i=_[t],r+=!i&&q(t)?e[o]:i||M(t));return r}(t)+'"';default:
throw new r("impossible error: invalid scalar style")}}()}function V(e,t){
var n=R(e)?String(t):"",i="\n"===e[e.length-1]
;return n+(i&&("\n"===e[e.length-2]||"\n"===e)?"+":i?"":"-")+"\n"}function Z(e){
return"\n"===e[e.length-1]?e.slice(0,-1):e}function z(e,t){
if(""===e||" "===e[0])return e
;for(var n,i,r=/ [^ ]/g,o=0,a=0,s=0,c="";n=r.exec(e);)(s=n.index)-o>t&&(i=a>o?a:s,
c+="\n"+e.slice(o,i),o=i+1),a=s
;return c+="\n",e.length-o>t&&a>o?c+=e.slice(o,a)+"\n"+e.slice(a+1):c+=e.slice(o),
c.slice(1)}function J(e,t,n){var i,o,a,u,l,p
;for(a=0,u=(o=n?e.explicitTypes:e.implicitTypes).length;a<u;a+=1)if(((l=o[a]).instanceOf||l.predicate)&&(!l.instanceOf||"object"==typeof t&&t instanceof l.instanceOf)&&(!l.predicate||l.predicate(t))){
if(e.tag=n?l.tag:"?",l.represent){
if(p=e.styleMap[l.tag]||l.defaultStyle,"[object Function]"===s.call(l.represent))i=l.represent(t,p);else{
if(!c.call(l.represent,p))throw new r("!<"+l.tag+'> tag resolver accepts not "'+p+'" style')
;i=l.represent[p](t,p)}e.dump=i}return!0}return!1}function Q(e,t,n,i,o,a){
e.tag=null,e.dump=n,J(e,n,!1)||J(e,n,!0);var c=s.call(e.dump)
;i&&(i=e.flowLevel<0||e.flowLevel>t)
;var u,p,f="[object Object]"===c||"[object Array]"===c
;if(f&&(p=-1!==(u=e.duplicates.indexOf(n))),
(null!==e.tag&&"?"!==e.tag||p||2!==e.indent&&t>0)&&(o=!1),
p&&e.usedDuplicates[u])e.dump="*ref_"+u;else{
if(f&&p&&!e.usedDuplicates[u]&&(e.usedDuplicates[u]=!0),
"[object Object]"===c)i&&0!==Object.keys(e.dump).length?(!function(e,t,n,i){
var o,a,s,c,u,p,f="",d=e.tag,h=Object.keys(n)
;if(!0===e.sortKeys)h.sort();else if("function"==typeof e.sortKeys)h.sort(e.sortKeys);else if(e.sortKeys)throw new r("sortKeys must be a boolean or a function")
;for(o=0,
a=h.length;o<a;o+=1)p="",i&&0===o||(p+=D(e,t)),c=n[s=h[o]],Q(e,t+1,s,!0,!0,!0)&&((u=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&l===e.dump.charCodeAt(0)?p+="?":p+="? "),
p+=e.dump,
u&&(p+=D(e,t)),Q(e,t+1,c,!0,u)&&(e.dump&&l===e.dump.charCodeAt(0)?p+=":":p+=": ",
f+=p+=e.dump));e.tag=d,e.dump=f||"{}"
}(e,t,e.dump,o),p&&(e.dump="&ref_"+u+e.dump)):(!function(e,t,n){
var i,r,o,a,s,c="",u=e.tag,l=Object.keys(n)
;for(i=0,r=l.length;i<r;i+=1)s=e.condenseFlow?'"':"",
0!==i&&(s+=", "),a=n[o=l[i]],
Q(e,t,o,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),
Q(e,t,a,!1,!1)&&(c+=s+=e.dump));e.tag=u,e.dump="{"+c+"}"
}(e,t,e.dump),p&&(e.dump="&ref_"+u+" "+e.dump));else if("[object Array]"===c){
var d=e.noArrayIndent&&t>0?t-1:t;i&&0!==e.dump.length?(!function(e,t,n,i){
var r,o,a="",s=e.tag
;for(r=0,o=n.length;r<o;r+=1)Q(e,t+1,n[r],!0,!0)&&(i&&0===r||(a+=D(e,t)),
e.dump&&l===e.dump.charCodeAt(0)?a+="-":a+="- ",a+=e.dump)
;e.tag=s,e.dump=a||"[]"
}(e,d,e.dump,o),p&&(e.dump="&ref_"+u+e.dump)):(!function(e,t,n){
var i,r,o="",a=e.tag
;for(i=0,r=n.length;i<r;i+=1)Q(e,t,n[i],!1,!1)&&(0!==i&&(o+=","+(e.condenseFlow?"":" ")),
o+=e.dump);e.tag=a,e.dump="["+o+"]"
}(e,d,e.dump),p&&(e.dump="&ref_"+u+" "+e.dump))}else{if("[object String]"!==c){
if(e.skipInvalid)return!1
;throw new r("unacceptable kind of an object to dump "+c)}
"?"!==e.tag&&G(e,e.dump,t,a)}
null!==e.tag&&"?"!==e.tag&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}
function X(e,t){var n,i,r=[],o=[];for(function e(t,n,i){var r,o,a
;if(null!==t&&"object"==typeof t)if(-1!==(o=n.indexOf(t)))-1===i.indexOf(o)&&i.push(o);else if(n.push(t),
Array.isArray(t))for(o=0,
a=t.length;o<a;o+=1)e(t[o],n,i);else for(r=Object.keys(t),
o=0,a=r.length;o<a;o+=1)e(t[r[o]],n,i)
}(e,r,o),n=0,i=o.length;n<i;n+=1)t.duplicates.push(r[o[n]])
;t.usedDuplicates=new Array(i)}function ee(e,t){var n=new T(t=t||{})
;return n.noRefs||X(e,n),Q(n,0,e,!0,!0)?n.dump+"\n":""}
t.exports.dump=ee,t.exports.safeDump=function(e,t){return ee(e,i.extend({
schema:a},t))}},{"./common":2,"./exception":4,"./schema/default_full":9,
"./schema/default_safe":10}],4:[function(e,t,n){"use strict";function i(e,t){
Error.call(this),
this.name="YAMLException",this.reason=e,this.mark=t,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),
Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""
}
i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i.prototype.toString=function(e){
var t=this.name+": "
;return t+=this.reason||"(unknown reason)",!e&&this.mark&&(t+=" "+this.mark.toString()),
t},t.exports=i},{}],5:[function(e,t,n){"use strict"
;var i=e("./common"),r=e("./exception"),o=e("./mark"),a=e("./schema/default_safe"),s=e("./schema/default_full"),c=Object.prototype.hasOwnProperty,u=1,l=2,p=3,f=4,d=1,h=2,m=3,g=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,y=/[\x85\u2028\u2029]/,x=/[,\[\]\{\}]/,v=/^(?:!|!!|![a-z\-]+!)$/i,A=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i
;function b(e){return Object.prototype.toString.call(e)}function w(e){
return 10===e||13===e}function C(e){return 9===e||32===e}function k(e){
return 9===e||32===e||10===e||13===e}function j(e){
return 44===e||91===e||93===e||123===e||125===e}function S(e){var t
;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function I(e){
return 120===e?2:117===e?4:85===e?8:0}function O(e){return 48<=e&&e<=57?e-48:-1}
function E(e){
return 48===e?"\0":97===e?"":98===e?"\b":116===e?"\t":9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""
}function F(e){
return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))
}for(var _=new Array(256),N=new Array(256),M=0;M<256;M++)_[M]=E(M)?1:0,N[M]=E(M)
;function T(e,t){
this.input=e,this.filename=t.filename||null,this.schema=t.schema||s,
this.onWarning=t.onWarning||null,
this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,
this.implicitTypes=this.schema.compiledImplicit,
this.typeMap=this.schema.compiledTypeMap,
this.length=e.length,this.position=0,this.line=0,
this.lineStart=0,this.lineIndent=0,this.documents=[]}function L(e,t){
return new r(t,new o(e.filename,e.input,e.position,e.line,e.position-e.lineStart))
}function D(e,t){throw L(e,t)}function U(e,t){
e.onWarning&&e.onWarning.call(null,L(e,t))}var q={YAML:function(e,t,n){var i,r,o
;null!==e.version&&D(e,"duplication of %YAML directive"),
1!==n.length&&D(e,"YAML directive accepts exactly one argument"),
null===(i=/^([0-9]+)\.([0-9]+)$/.exec(n[0]))&&D(e,"ill-formed argument of the YAML directive"),
r=parseInt(i[1],10),
o=parseInt(i[2],10),1!==r&&D(e,"unacceptable YAML version of the document"),
e.version=n[0],
e.checkLineBreaks=o<2,1!==o&&2!==o&&U(e,"unsupported YAML version of the document")
},TAG:function(e,t,n){var i,r
;2!==n.length&&D(e,"TAG directive accepts exactly two arguments"),i=n[0],r=n[1],
v.test(i)||D(e,"ill-formed tag handle (first argument) of the TAG directive"),
c.call(e.tagMap,i)&&D(e,'there is a previously declared suffix for "'+i+'" tag handle'),
A.test(r)||D(e,"ill-formed tag prefix (second argument) of the TAG directive"),
e.tagMap[i]=r}};function Y(e,t,n,i){var r,o,a,s;if(t<n){if(s=e.input.slice(t,n),
i)for(r=0,
o=s.length;r<o;r+=1)9===(a=s.charCodeAt(r))||32<=a&&a<=1114111||D(e,"expected valid JSON character");else g.test(s)&&D(e,"the stream contains non-printable characters")
;e.result+=s}}function R(e,t,n,r){var o,a,s,u
;for(i.isObject(n)||D(e,"cannot merge mappings; the provided source object is unacceptable"),
s=0,u=(o=Object.keys(n)).length;s<u;s+=1)a=o[s],c.call(t,a)||(t[a]=n[a],r[a]=!0)
}function B(e,t,n,i,r,o,a,s){var u,l
;if(Array.isArray(r))for(u=0,l=(r=Array.prototype.slice.call(r)).length;u<l;u+=1)Array.isArray(r[u])&&D(e,"nested arrays are not supported inside keys"),
"object"==typeof r&&"[object Object]"===b(r[u])&&(r[u]="[object Object]")
;if("object"==typeof r&&"[object Object]"===b(r)&&(r="[object Object]"),
r=String(r),
null===t&&(t={}),"tag:yaml.org,2002:merge"===i)if(Array.isArray(o))for(u=0,
l=o.length;u<l;u+=1)R(e,t,o[u],n);else R(e,t,o,n);else e.json||c.call(n,r)||!c.call(t,r)||(e.line=a||e.line,
e.position=s||e.position,D(e,"duplicated mapping key")),t[r]=o,delete n[r]
;return t}function P(e){var t
;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,
10===e.input.charCodeAt(e.position)&&e.position++):D(e,"a line break is expected"),
e.line+=1,e.lineStart=e.position}function W(e,t,n){
for(var i=0,r=e.input.charCodeAt(e.position);0!==r;){
for(;C(r);)r=e.input.charCodeAt(++e.position);if(t&&35===r)do{
r=e.input.charCodeAt(++e.position)}while(10!==r&&13!==r&&0!==r);if(!w(r))break
;for(P(e),
r=e.input.charCodeAt(e.position),i++,e.lineIndent=0;32===r;)e.lineIndent++,
r=e.input.charCodeAt(++e.position)}
return-1!==n&&0!==i&&e.lineIndent<n&&U(e,"deficient indentation"),i}
function K(e){var t,n=e.position
;return!(45!==(t=e.input.charCodeAt(n))&&46!==t||t!==e.input.charCodeAt(n+1)||t!==e.input.charCodeAt(n+2)||(n+=3,
0!==(t=e.input.charCodeAt(n))&&!k(t)))}function $(e,t){
1===t?e.result+=" ":t>1&&(e.result+=i.repeat("\n",t-1))}function H(e,t){
var n,i,r=e.tag,o=e.anchor,a=[],s=!1
;for(null!==e.anchor&&(e.anchorMap[e.anchor]=a),
i=e.input.charCodeAt(e.position);0!==i&&45===i&&k(e.input.charCodeAt(e.position+1));)if(s=!0,
e.position++,
W(e,!0,-1)&&e.lineIndent<=t)a.push(null),i=e.input.charCodeAt(e.position);else if(n=e.line,
Z(e,t,p,!1,!0),
a.push(e.result),W(e,!0,-1),i=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&0!==i)D(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break
;return!!s&&(e.tag=r,e.anchor=o,e.kind="sequence",e.result=a,!0)}function G(e){
var t,n,i,r,o=!1,a=!1;if(33!==(r=e.input.charCodeAt(e.position)))return!1
;if(null!==e.tag&&D(e,"duplication of a tag property"),
60===(r=e.input.charCodeAt(++e.position))?(o=!0,
r=e.input.charCodeAt(++e.position)):33===r?(a=!0,
n="!!",r=e.input.charCodeAt(++e.position)):n="!",t=e.position,o){do{
r=e.input.charCodeAt(++e.position)}while(0!==r&&62!==r)
;e.position<e.length?(i=e.input.slice(t,e.position),
r=e.input.charCodeAt(++e.position)):D(e,"unexpected end of the stream within a verbatim tag")
}else{
for(;0!==r&&!k(r);)33===r&&(a?D(e,"tag suffix cannot contain exclamation marks"):(n=e.input.slice(t-1,e.position+1),
v.test(n)||D(e,"named tag handle cannot contain such characters"),
a=!0,t=e.position+1)),r=e.input.charCodeAt(++e.position)
;i=e.input.slice(t,e.position),
x.test(i)&&D(e,"tag suffix cannot contain flow indicator characters")}
return i&&!A.test(i)&&D(e,"tag name cannot contain such characters: "+i),
o?e.tag=i:c.call(e.tagMap,n)?e.tag=e.tagMap[n]+i:"!"===n?e.tag="!"+i:"!!"===n?e.tag="tag:yaml.org,2002:"+i:D(e,'undeclared tag handle "'+n+'"'),
!0}function V(e){var t,n;if(38!==(n=e.input.charCodeAt(e.position)))return!1
;for(null!==e.anchor&&D(e,"duplication of an anchor property"),
n=e.input.charCodeAt(++e.position),
t=e.position;0!==n&&!k(n)&&!j(n);)n=e.input.charCodeAt(++e.position)
;return e.position===t&&D(e,"name of an anchor node must contain at least one character"),
e.anchor=e.input.slice(t,e.position),!0}function Z(e,t,n,r,o){
var a,s,g,y,x,v,A,b,E=1,M=!1,T=!1
;if(null!==e.listener&&e.listener("open",e),e.tag=null,
e.anchor=null,e.kind=null,e.result=null,a=s=g=f===n||p===n,r&&W(e,!0,-1)&&(M=!0,
e.lineIndent>t?E=1:e.lineIndent===t?E=0:e.lineIndent<t&&(E=-1)),
1===E)for(;G(e)||V(e);)W(e,!0,-1)?(M=!0,
g=a,e.lineIndent>t?E=1:e.lineIndent===t?E=0:e.lineIndent<t&&(E=-1)):g=!1
;if(g&&(g=M||o),
1!==E&&f!==n||(A=u===n||l===n?t:t+1,b=e.position-e.lineStart,1===E?g&&(H(e,b)||function(e,t,n){
var i,r,o,a,s,c=e.tag,u=e.anchor,p={},d={},h=null,m=null,g=null,y=!1,x=!1
;for(null!==e.anchor&&(e.anchorMap[e.anchor]=p),
s=e.input.charCodeAt(e.position);0!==s;){
if(i=e.input.charCodeAt(e.position+1),o=e.line,
a=e.position,63!==s&&58!==s||!k(i)){if(!Z(e,n,l,!1,!0))break;if(e.line===o){
for(s=e.input.charCodeAt(e.position);C(s);)s=e.input.charCodeAt(++e.position)
;if(58===s)k(s=e.input.charCodeAt(++e.position))||D(e,"a whitespace character is expected after the key-value separator within a block mapping"),
y&&(B(e,p,d,h,m,null),h=m=g=null),x=!0,y=!1,r=!1,h=e.tag,m=e.result;else{
if(!x)return e.tag=c,e.anchor=u,!0
;D(e,"can not read an implicit mapping pair; a colon is missed")}}else{
if(!x)return e.tag=c,e.anchor=u,!0
;D(e,"can not read a block mapping entry; a multiline key may not be an implicit key")
}
}else 63===s?(y&&(B(e,p,d,h,m,null),h=m=g=null),x=!0,y=!0,r=!0):y?(y=!1,r=!0):D(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),
e.position+=1,s=i
;if((e.line===o||e.lineIndent>t)&&(Z(e,t,f,!0,r)&&(y?m=e.result:g=e.result),
y||(B(e,p,d,h,m,g,o,a),h=m=g=null),W(e,!0,-1),s=e.input.charCodeAt(e.position)),
e.lineIndent>t&&0!==s)D(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break
}
return y&&B(e,p,d,h,m,null),x&&(e.tag=c,e.anchor=u,e.kind="mapping",e.result=p),
x}(e,b,A))||function(e,t){var n,i,r,o,a,s,c,l,p,f,d=!0,h=e.tag,m=e.anchor,g={}
;if(91===(f=e.input.charCodeAt(e.position)))r=93,s=!1,i=[];else{
if(123!==f)return!1;r=125,s=!0,i={}}
for(null!==e.anchor&&(e.anchorMap[e.anchor]=i),
f=e.input.charCodeAt(++e.position);0!==f;){
if(W(e,!0,t),(f=e.input.charCodeAt(e.position))===r)return e.position++,e.tag=h,
e.anchor=m,e.kind=s?"mapping":"sequence",e.result=i,!0
;d||D(e,"missed comma between flow collection entries"),
p=null,o=a=!1,63===f&&k(e.input.charCodeAt(e.position+1))&&(o=a=!0,e.position++,
W(e,!0,t)),
n=e.line,Z(e,t,u,!1,!0),l=e.tag,c=e.result,W(e,!0,t),f=e.input.charCodeAt(e.position),
!a&&e.line!==n||58!==f||(o=!0,
f=e.input.charCodeAt(++e.position),W(e,!0,t),Z(e,t,u,!1,!0),
p=e.result),s?B(e,i,g,l,c,p):o?i.push(B(e,null,g,l,c,p)):i.push(c),
W(e,!0,t),44===(f=e.input.charCodeAt(e.position))?(d=!0,
f=e.input.charCodeAt(++e.position)):d=!1}
D(e,"unexpected end of the stream within a flow collection")
}(e,A)?T=!0:(s&&function(e,t){var n,r,o,a,s=d,c=!1,u=!1,l=t,p=0,f=!1
;if(124===(a=e.input.charCodeAt(e.position)))r=!1;else{if(62!==a)return!1;r=!0}
for(e.kind="scalar",
e.result="";0!==a;)if(43===(a=e.input.charCodeAt(++e.position))||45===a)d===s?s=43===a?m:h:D(e,"repeat of a chomping mode identifier");else{
if(!((o=O(a))>=0))break
;0===o?D(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):u?D(e,"repeat of an indentation width identifier"):(l=t+o-1,
u=!0)}if(C(a)){do{a=e.input.charCodeAt(++e.position)}while(C(a));if(35===a)do{
a=e.input.charCodeAt(++e.position)}while(!w(a)&&0!==a)}for(;0!==a;){
for(P(e),e.lineIndent=0,
a=e.input.charCodeAt(e.position);(!u||e.lineIndent<l)&&32===a;)e.lineIndent++,
a=e.input.charCodeAt(++e.position)
;if(!u&&e.lineIndent>l&&(l=e.lineIndent),w(a))p++;else{if(e.lineIndent<l){
s===m?e.result+=i.repeat("\n",c?1+p:p):s===d&&c&&(e.result+="\n");break}
for(r?C(a)?(f=!0,
e.result+=i.repeat("\n",c?1+p:p)):f?(f=!1,e.result+=i.repeat("\n",p+1)):0===p?c&&(e.result+=" "):e.result+=i.repeat("\n",p):e.result+=i.repeat("\n",c?1+p:p),
c=!0,u=!0,p=0,n=e.position;!w(a)&&0!==a;)a=e.input.charCodeAt(++e.position)
;Y(e,n,e.position,!1)}}return!0}(e,A)||function(e,t){var n,i,r
;if(39!==(n=e.input.charCodeAt(e.position)))return!1
;for(e.kind="scalar",e.result="",
e.position++,i=r=e.position;0!==(n=e.input.charCodeAt(e.position));)if(39===n){
if(Y(e,i,e.position,!0),39!==(n=e.input.charCodeAt(++e.position)))return!0
;i=e.position,e.position++,r=e.position
}else w(n)?(Y(e,i,r,!0),$(e,W(e,!1,t)),i=r=e.position):e.position===e.lineStart&&K(e)?D(e,"unexpected end of the document within a single quoted scalar"):(e.position++,
r=e.position);D(e,"unexpected end of the stream within a single quoted scalar")
}(e,A)||function(e,t){var n,i,r,o,a,s
;if(34!==(s=e.input.charCodeAt(e.position)))return!1
;for(e.kind="scalar",e.result="",
e.position++,n=i=e.position;0!==(s=e.input.charCodeAt(e.position));){
if(34===s)return Y(e,n,e.position,!0),e.position++,!0;if(92===s){
if(Y(e,n,e.position,!0),
w(s=e.input.charCodeAt(++e.position)))W(e,!1,t);else if(s<256&&_[s])e.result+=N[s],
e.position++;else if((a=I(s))>0){
for(r=a,o=0;r>0;r--)(a=S(s=e.input.charCodeAt(++e.position)))>=0?o=(o<<4)+a:D(e,"expected hexadecimal character")
;e.result+=F(o),e.position++}else D(e,"unknown escape sequence");n=i=e.position
}else w(s)?(Y(e,n,i,!0),
$(e,W(e,!1,t)),n=i=e.position):e.position===e.lineStart&&K(e)?D(e,"unexpected end of the document within a double quoted scalar"):(e.position++,
i=e.position)}D(e,"unexpected end of the stream within a double quoted scalar")
}(e,A)?T=!0:!function(e){var t,n,i
;if(42!==(i=e.input.charCodeAt(e.position)))return!1
;for(i=e.input.charCodeAt(++e.position),
t=e.position;0!==i&&!k(i)&&!j(i);)i=e.input.charCodeAt(++e.position)
;return e.position===t&&D(e,"name of an alias node must contain at least one character"),
n=e.input.slice(t,e.position),
e.anchorMap.hasOwnProperty(n)||D(e,'unidentified alias "'+n+'"'),
e.result=e.anchorMap[n],W(e,!0,-1),!0}(e)?function(e,t,n){
var i,r,o,a,s,c,u,l,p=e.kind,f=e.result
;if(k(l=e.input.charCodeAt(e.position))||j(l)||35===l||38===l||42===l||33===l||124===l||62===l||39===l||34===l||37===l||64===l||96===l)return!1
;if((63===l||45===l)&&(k(i=e.input.charCodeAt(e.position+1))||n&&j(i)))return!1
;for(e.kind="scalar",e.result="",r=o=e.position,a=!1;0!==l;){if(58===l){
if(k(i=e.input.charCodeAt(e.position+1))||n&&j(i))break}else if(35===l){
if(k(e.input.charCodeAt(e.position-1)))break}else{
if(e.position===e.lineStart&&K(e)||n&&j(l))break;if(w(l)){
if(s=e.line,c=e.lineStart,u=e.lineIndent,W(e,!1,-1),e.lineIndent>=t){
a=!0,l=e.input.charCodeAt(e.position);continue}
e.position=o,e.line=s,e.lineStart=c,e.lineIndent=u;break}}
a&&(Y(e,r,o,!1),$(e,e.line-s),
r=o=e.position,a=!1),C(l)||(o=e.position+1),l=e.input.charCodeAt(++e.position)}
return Y(e,r,o,!1),!!e.result||(e.kind=p,e.result=f,!1)
}(e,A,u===n)&&(T=!0,null===e.tag&&(e.tag="?")):(T=!0,
null===e.tag&&null===e.anchor||D(e,"alias node should not have any properties")),
null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===E&&(T=g&&H(e,b))),
null!==e.tag&&"!"!==e.tag)if("?"===e.tag){
for(y=0,x=e.implicitTypes.length;y<x;y+=1)if((v=e.implicitTypes[y]).resolve(e.result)){
e.result=v.construct(e.result),
e.tag=v.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}
}else c.call(e.typeMap[e.kind||"fallback"],e.tag)?(v=e.typeMap[e.kind||"fallback"][e.tag],
null!==e.result&&v.kind!==e.kind&&D(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+v.kind+'", not "'+e.kind+'"'),
v.resolve(e.result)?(e.result=v.construct(e.result),
null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):D(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):D(e,"unknown tag !<"+e.tag+">")
;return null!==e.listener&&e.listener("close",e),
null!==e.tag||null!==e.anchor||T}function z(e){var t,n,i,r,o=e.position,a=!1
;for(e.version=null,
e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};0!==(r=e.input.charCodeAt(e.position))&&(W(e,!0,-1),
r=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==r));){
for(a=!0,r=e.input.charCodeAt(++e.position),
t=e.position;0!==r&&!k(r);)r=e.input.charCodeAt(++e.position)
;for(i=[],(n=e.input.slice(t,e.position)).length<1&&D(e,"directive name must not be less than one character in length");0!==r;){
for(;C(r);)r=e.input.charCodeAt(++e.position);if(35===r){do{
r=e.input.charCodeAt(++e.position)}while(0!==r&&!w(r));break}if(w(r))break
;for(t=e.position;0!==r&&!k(r);)r=e.input.charCodeAt(++e.position)
;i.push(e.input.slice(t,e.position))}
0!==r&&P(e),c.call(q,n)?q[n](e,n,i):U(e,'unknown document directive "'+n+'"')}
W(e,!0,-1),
0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,
W(e,!0,-1)):a&&D(e,"directives end mark is expected"),
Z(e,e.lineIndent-1,f,!1,!0),
W(e,!0,-1),e.checkLineBreaks&&y.test(e.input.slice(o,e.position))&&U(e,"non-ASCII line breaks are interpreted as content"),
e.documents.push(e.result),
e.position===e.lineStart&&K(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,
W(e,!0,-1)):e.position<e.length-1&&D(e,"end of the stream or a document separator is expected")
}function J(e,t){
t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),
65279===e.charCodeAt(0)&&(e=e.slice(1)));var n=new T(e,t)
;for(n.input+="\0";32===n.input.charCodeAt(n.position);)n.lineIndent+=1,
n.position+=1;for(;n.position<n.length-1;)z(n);return n.documents}
function Q(e,t,n){var i,r,o=J(e,n);if("function"!=typeof t)return o
;for(i=0,r=o.length;i<r;i+=1)t(o[i])}function X(e,t){var n=J(e,t)
;if(0!==n.length){if(1===n.length)return n[0]
;throw new r("expected a single document in the stream, but found more")}}
t.exports.loadAll=Q,t.exports.load=X,t.exports.safeLoadAll=function(e,t,n){
if("function"!=typeof t)return Q(e,i.extend({schema:a},n));Q(e,t,i.extend({
schema:a},n))},t.exports.safeLoad=function(e,t){return X(e,i.extend({schema:a
},t))}},{"./common":2,"./exception":4,"./mark":6,"./schema/default_full":9,
"./schema/default_safe":10}],6:[function(e,t,n){"use strict";var i=e("./common")
;function r(e,t,n,i,r){
this.name=e,this.buffer=t,this.position=n,this.line=i,this.column=r}
r.prototype.getSnippet=function(e,t){var n,r,o,a,s;if(!this.buffer)return null
;for(e=e||4,
t=t||75,n="",r=this.position;r>0&&-1==="\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(r-1));)if(r-=1,
this.position-r>t/2-1){n=" ... ",r+=5;break}
for(o="",a=this.position;a<this.buffer.length&&-1==="\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(a));)if((a+=1)-this.position>t/2-1){
o=" ... ",a-=5;break}
return s=this.buffer.slice(r,a),i.repeat(" ",e)+n+s+o+"\n"+i.repeat(" ",e+this.position-r+n.length)+"^"
},r.prototype.toString=function(e){var t,n=""
;return this.name&&(n+='in "'+this.name+'" '),
n+="at line "+(this.line+1)+", column "+(this.column+1),
e||(t=this.getSnippet())&&(n+=":\n"+t),n},t.exports=r},{"./common":2}],
7:[function(e,t,n){"use strict"
;var i=e("./common"),r=e("./exception"),o=e("./type");function a(e,t,n){var i=[]
;return e.include.forEach((function(e){n=a(e,t,n)})),e[t].forEach((function(e){
n.forEach((function(t,n){t.tag===e.tag&&t.kind===e.kind&&i.push(n)})),n.push(e)
})),n.filter((function(e,t){return-1===i.indexOf(t)}))}function s(e){
this.include=e.include||[],
this.implicit=e.implicit||[],this.explicit=e.explicit||[],
this.implicit.forEach((function(e){
if(e.loadKind&&"scalar"!==e.loadKind)throw new r("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")
})),
this.compiledImplicit=a(this,"implicit",[]),this.compiledExplicit=a(this,"explicit",[]),
this.compiledTypeMap=function(){var e,t,n={scalar:{},sequence:{},mapping:{},
fallback:{}};function i(e){n[e.kind][e.tag]=n.fallback[e.tag]=e}
for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(i);return n
}(this.compiledImplicit,this.compiledExplicit)}
s.DEFAULT=null,s.create=function(){var e,t;switch(arguments.length){case 1:
e=s.DEFAULT,t=arguments[0];break;case 2:e=arguments[0],t=arguments[1];break
;default:throw new r("Wrong number of arguments for Schema.create function")}
if(e=i.toArray(e),t=i.toArray(t),!e.every((function(e){return e instanceof s
})))throw new r("Specified list of super schemas (or a single Schema object) contains a non-Schema object.")
;if(!t.every((function(e){return e instanceof o
})))throw new r("Specified list of YAML types (or a single Type object) contains a non-Type object.")
;return new s({include:e,explicit:t})},t.exports=s},{"./common":2,
"./exception":4,"./type":13}],8:[function(e,t,n){"use strict"
;var i=e("../schema");t.exports=new i({include:[e("./json")]})},{"../schema":7,
"./json":12}],9:[function(e,t,n){"use strict";var i=e("../schema")
;t.exports=i.DEFAULT=new i({include:[e("./default_safe")],
explicit:[e("../type/js/undefined"),e("../type/js/regexp"),e("../type/js/function")]
})},{"../schema":7,"../type/js/function":18,"../type/js/regexp":19,
"../type/js/undefined":20,"./default_safe":10}],10:[function(e,t,n){"use strict"
;var i=e("../schema");t.exports=new i({include:[e("./core")],
implicit:[e("../type/timestamp"),e("../type/merge")],
explicit:[e("../type/binary"),e("../type/omap"),e("../type/pairs"),e("../type/set")]
})},{"../schema":7,"../type/binary":14,"../type/merge":22,"../type/omap":24,
"../type/pairs":25,"../type/set":27,"../type/timestamp":29,"./core":8}],
11:[function(e,t,n){"use strict";var i=e("../schema");t.exports=new i({
explicit:[e("../type/str"),e("../type/seq"),e("../type/map")]})},{"../schema":7,
"../type/map":21,"../type/seq":26,"../type/str":28}],12:[function(e,t,n){
"use strict";var i=e("../schema");t.exports=new i({include:[e("./failsafe")],
implicit:[e("../type/null"),e("../type/bool"),e("../type/int"),e("../type/float")]
})},{"../schema":7,"../type/bool":15,"../type/float":16,"../type/int":17,
"../type/null":23,"./failsafe":11}],13:[function(e,t,n){"use strict"
;var i=e("./exception"),r=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],o=["scalar","sequence","mapping"]
;t.exports=function(e,t){if(t=t||{},Object.keys(t).forEach((function(t){
if(-1===r.indexOf(t))throw new i('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')
})),this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){
return!0},this.construct=t.construct||function(e){return e
},this.instanceOf=t.instanceOf||null,
this.predicate=t.predicate||null,this.represent=t.represent||null,
this.defaultStyle=t.defaultStyle||null,this.styleAliases=function(e){var t={}
;return null!==e&&Object.keys(e).forEach((function(n){e[n].forEach((function(e){
t[String(e)]=n}))})),t
}(t.styleAliases||null),-1===o.indexOf(this.kind))throw new i('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')
}},{"./exception":4}],14:[function(e,t,n){"use strict";var i;try{
i=e("buffer").Buffer}catch(a){}
var r=e("../type"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"
;t.exports=new r("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){
if(null===e)return!1;var t,n,i=0,r=e.length,a=o
;for(n=0;n<r;n++)if(!((t=a.indexOf(e.charAt(n)))>64)){if(t<0)return!1;i+=6}
return i%8==0},construct:function(e){
var t,n,r=e.replace(/[\r\n=]/g,""),a=r.length,s=o,c=0,u=[]
;for(t=0;t<a;t++)t%4==0&&t&&(u.push(c>>16&255),
u.push(c>>8&255),u.push(255&c)),c=c<<6|s.indexOf(r.charAt(t))
;return 0===(n=a%4*6)?(u.push(c>>16&255),
u.push(c>>8&255),u.push(255&c)):18===n?(u.push(c>>10&255),
u.push(c>>2&255)):12===n&&u.push(c>>4&255),i?i.from?i.from(u):new i(u):u},
predicate:function(e){return i&&i.isBuffer(e)},represent:function(e){
var t,n,i="",r=0,a=e.length,s=o
;for(t=0;t<a;t++)t%3==0&&t&&(i+=s[r>>18&63],i+=s[r>>12&63],
i+=s[r>>6&63],i+=s[63&r]),r=(r<<8)+e[t]
;return 0===(n=a%3)?(i+=s[r>>18&63],i+=s[r>>12&63],
i+=s[r>>6&63],i+=s[63&r]):2===n?(i+=s[r>>10&63],
i+=s[r>>4&63],i+=s[r<<2&63],i+=s[64]):1===n&&(i+=s[r>>2&63],
i+=s[r<<4&63],i+=s[64],i+=s[64]),i}})},{"../type":13}],15:[function(e,t,n){
"use strict";var i=e("../type");t.exports=new i("tag:yaml.org,2002:bool",{
kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length
;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)
},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},
predicate:function(e){
return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{
lowercase:function(e){return e?"true":"false"},uppercase:function(e){
return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},
defaultStyle:"lowercase"})},{"../type":13}],16:[function(e,t,n){"use strict"
;var i=e("../common"),r=e("../type"),o=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$")
;var a=/^[-+]?[0-9]+e/;t.exports=new r("tag:yaml.org,2002:float",{kind:"scalar",
resolve:function(e){return null!==e&&!(!o.test(e)||"_"===e[e.length-1])},
construct:function(e){var t,n,i,r
;return n="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,
r=[],"+-".indexOf(t[0])>=0&&(t=t.slice(1)),
".inf"===t?1===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:t.indexOf(":")>=0?(t.split(":").forEach((function(e){
r.unshift(parseFloat(e,10))})),t=0,i=1,r.forEach((function(e){t+=e*i,i*=60
})),n*t):n*parseFloat(t,10)},predicate:function(e){
return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||i.isNegativeZero(e))
},represent:function(e,t){var n;if(isNaN(e))switch(t){case"lowercase":
return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"
}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf"
;case"uppercase":return".INF";case"camelcase":return".Inf"
}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf"
;case"uppercase":return"-.INF";case"camelcase":return"-.Inf"
}else if(i.isNegativeZero(e))return"-0.0"
;return n=e.toString(10),a.test(n)?n.replace("e",".e"):n},
defaultStyle:"lowercase"})},{"../common":2,"../type":13}],17:[function(e,t,n){
"use strict";var i=e("../common"),r=e("../type");function o(e){
return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function a(e){
return 48<=e&&e<=55}function s(e){return 48<=e&&e<=57}
t.exports=new r("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){
if(null===e)return!1;var t,n=e.length,i=0,r=!1;if(!n)return!1
;if("-"!==(t=e[i])&&"+"!==t||(t=e[++i]),"0"===t){if(i+1===n)return!0
;if("b"===(t=e[++i])){for(i++;i<n;i++)if("_"!==(t=e[i])){
if("0"!==t&&"1"!==t)return!1;r=!0}return r&&"_"!==t}if("x"===t){
for(i++;i<n;i++)if("_"!==(t=e[i])){if(!o(e.charCodeAt(i)))return!1;r=!0}
return r&&"_"!==t}for(;i<n;i++)if("_"!==(t=e[i])){
if(!a(e.charCodeAt(i)))return!1;r=!0}return r&&"_"!==t}if("_"===t)return!1
;for(;i<n;i++)if("_"!==(t=e[i])){if(":"===t)break
;if(!s(e.charCodeAt(i)))return!1;r=!0}
return!(!r||"_"===t)&&(":"!==t||/^(:[0-5]?[0-9])+$/.test(e.slice(i)))},
construct:function(e){var t,n,i=e,r=1,o=[]
;return-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),
"-"!==(t=i[0])&&"+"!==t||("-"===t&&(r=-1),
t=(i=i.slice(1))[0]),"0"===i?0:"0"===t?"b"===i[1]?r*parseInt(i.slice(2),2):"x"===i[1]?r*parseInt(i,16):r*parseInt(i,8):-1!==i.indexOf(":")?(i.split(":").forEach((function(e){
o.unshift(parseInt(e,10))})),i=0,n=1,o.forEach((function(e){i+=e*n,n*=60
})),r*i):r*parseInt(i,10)},predicate:function(e){
return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!i.isNegativeZero(e)
},represent:{binary:function(e){
return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){
return e>=0?"0"+e.toString(8):"-0"+e.toString(8).slice(1)},decimal:function(e){
return e.toString(10)},hexadecimal:function(e){
return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)
}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],
decimal:[10,"dec"],hexadecimal:[16,"hex"]}})},{"../common":2,"../type":13}],
18:[function(e,t,n){"use strict";var i;try{i=e("esprima")}catch(o){
"undefined"!=typeof window&&(i=window.esprima)}var r=e("../../type")
;t.exports=new r("tag:yaml.org,2002:js/function",{kind:"scalar",
resolve:function(e){if(null===e)return!1;try{var t="("+e+")",n=i.parse(t,{
range:!0})
;return"Program"===n.type&&1===n.body.length&&"ExpressionStatement"===n.body[0].type&&("ArrowFunctionExpression"===n.body[0].expression.type||"FunctionExpression"===n.body[0].expression.type)
}catch(r){return!1}},construct:function(e){var t,n="("+e+")",r=i.parse(n,{
range:!0}),o=[]
;if("Program"!==r.type||1!==r.body.length||"ExpressionStatement"!==r.body[0].type||"ArrowFunctionExpression"!==r.body[0].expression.type&&"FunctionExpression"!==r.body[0].expression.type)throw new Error("Failed to resolve function")
;return r.body[0].expression.params.forEach((function(e){o.push(e.name)
})),t=r.body[0].expression.body.range,
"BlockStatement"===r.body[0].expression.body.type?new Function(o,n.slice(t[0]+1,t[1]-1)):new Function(o,"return "+n.slice(t[0],t[1]))
},predicate:function(e){
return"[object Function]"===Object.prototype.toString.call(e)},
represent:function(e){return e.toString()}})},{"../../type":13}],
19:[function(e,t,n){"use strict";var i=e("../../type")
;t.exports=new i("tag:yaml.org,2002:js/regexp",{kind:"scalar",
resolve:function(e){if(null===e)return!1;if(0===e.length)return!1
;var t=e,n=/\/([gim]*)$/.exec(e),i="";if("/"===t[0]){
if(n&&(i=n[1]),i.length>3)return!1;if("/"!==t[t.length-i.length-1])return!1}
return!0},construct:function(e){var t=e,n=/\/([gim]*)$/.exec(e),i=""
;return"/"===t[0]&&(n&&(i=n[1]),
t=t.slice(1,t.length-i.length-1)),new RegExp(t,i)},predicate:function(e){
return"[object RegExp]"===Object.prototype.toString.call(e)},
represent:function(e){var t="/"+e.source+"/"
;return e.global&&(t+="g"),e.multiline&&(t+="m"),e.ignoreCase&&(t+="i"),t}})},{
"../../type":13}],20:[function(e,t,n){"use strict";var i=e("../../type")
;t.exports=new i("tag:yaml.org,2002:js/undefined",{kind:"scalar",
resolve:function(){return!0},construct:function(){},predicate:function(e){
return void 0===e},represent:function(){return""}})},{"../../type":13}],
21:[function(e,t,n){"use strict";var i=e("../type")
;t.exports=new i("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){
return null!==e?e:{}}})},{"../type":13}],22:[function(e,t,n){"use strict"
;var i=e("../type");t.exports=new i("tag:yaml.org,2002:merge",{kind:"scalar",
resolve:function(e){return"<<"===e||null===e}})},{"../type":13}],
23:[function(e,t,n){"use strict";var i=e("../type")
;t.exports=new i("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){
if(null===e)return!0;var t=e.length
;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},
construct:function(){return null},predicate:function(e){return null===e},
represent:{canonical:function(){return"~"},lowercase:function(){return"null"},
uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},
defaultStyle:"lowercase"})},{"../type":13}],24:[function(e,t,n){"use strict"
;var i=e("../type"),r=Object.prototype.hasOwnProperty,o=Object.prototype.toString
;t.exports=new i("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){
if(null===e)return!0;var t,n,i,a,s,c=[],u=e;for(t=0,n=u.length;t<n;t+=1){
if(i=u[t],s=!1,"[object Object]"!==o.call(i))return!1
;for(a in i)if(r.call(i,a)){if(s)return!1;s=!0}if(!s)return!1
;if(-1!==c.indexOf(a))return!1;c.push(a)}return!0},construct:function(e){
return null!==e?e:[]}})},{"../type":13}],25:[function(e,t,n){"use strict"
;var i=e("../type"),r=Object.prototype.toString
;t.exports=new i("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){
if(null===e)return!0;var t,n,i,o,a,s=e
;for(a=new Array(s.length),t=0,n=s.length;t<n;t+=1){
if(i=s[t],"[object Object]"!==r.call(i))return!1
;if(1!==(o=Object.keys(i)).length)return!1;a[t]=[o[0],i[o[0]]]}return!0},
construct:function(e){if(null===e)return[];var t,n,i,r,o,a=e
;for(o=new Array(a.length),
t=0,n=a.length;t<n;t+=1)i=a[t],r=Object.keys(i),o[t]=[r[0],i[r[0]]];return o}})
},{"../type":13}],26:[function(e,t,n){"use strict";var i=e("../type")
;t.exports=new i("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){
return null!==e?e:[]}})},{"../type":13}],27:[function(e,t,n){"use strict"
;var i=e("../type"),r=Object.prototype.hasOwnProperty
;t.exports=new i("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){
if(null===e)return!0;var t,n=e;for(t in n)if(r.call(n,t)&&null!==n[t])return!1
;return!0},construct:function(e){return null!==e?e:{}}})},{"../type":13}],
28:[function(e,t,n){"use strict";var i=e("../type")
;t.exports=new i("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){
return null!==e?e:""}})},{"../type":13}],29:[function(e,t,n){"use strict"
;var i=e("../type"),r=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),o=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$")
;t.exports=new i("tag:yaml.org,2002:timestamp",{kind:"scalar",
resolve:function(e){return null!==e&&(null!==r.exec(e)||null!==o.exec(e))},
construct:function(e){var t,n,i,a,s,c,u,l,p=0,f=null
;if(null===(t=r.exec(e))&&(t=o.exec(e)),
null===t)throw new Error("Date resolve error")
;if(n=+t[1],i=+t[2]-1,a=+t[3],!t[4])return new Date(Date.UTC(n,i,a));if(s=+t[4],
c=+t[5],u=+t[6],t[7]){for(p=t[7].slice(0,3);p.length<3;)p+="0";p=+p}
return t[9]&&(f=6e4*(60*+t[10]+ +(t[11]||0)),
"-"===t[9]&&(f=-f)),l=new Date(Date.UTC(n,i,a,s,c,u,p)),
f&&l.setTime(l.getTime()-f),l},instanceOf:Date,represent:function(e){
return e.toISOString()}})},{"../type":13}],"/":[function(e,t,n){"use strict"
;var i=e("./lib/js-yaml.js");t.exports=i},{"./lib/js-yaml.js":1}]},{},[])("/")
}));