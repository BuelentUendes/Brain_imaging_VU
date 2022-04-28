(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[40],{"1NAo":function(n,e,t){"use strict"
e["a"]=function(n){return"undefined"!==typeof Map&&n instanceof Map}},"1T5U":function(n,e,t){"use strict"
t.d(e,"b",(function(){return r}))
t.d(e,"a",(function(){return o}))
var r="/"
var o="||"},"3IO0":function(n,e){n.exports=a
var t=/\s/
var r=/(_|-|\.|:)/
var o=/([a-z][A-Z]|[A-Z][a-z])/
function a(n){if(t.test(n))return n.toLowerCase()
if(r.test(n))return(c(n)||n).toLowerCase()
if(o.test(n))return s(n).toLowerCase()
return n.toLowerCase()}var i=/[\W_]+(.|$)/g
function c(n){return n.replace(i,(function(n,e){return e?" "+e:""}))}var u=/(.)([A-Z]+)/g
function s(n){return n.replace(u,(function(n,e,t){return e+" "+t.toLowerCase().split("").join(" ")}))}},"AS+4":function(n,e,t){"use strict"
e["a"]=function(n){return n}},F39V:function(n,e,t){var r=t("NtLt")
n.exports=o
function o(n){return r(n).replace(/\s(\w)/g,(function(n,e){return e.toUpperCase()}))}},FH7K:function(n,e,t){"use strict"
t.d(e,"a",(function(){return B}))
var r=t("QLaP")
var o=t.n(r)
var a=t("w/wI")
var i=t("UfUT")
var c=t("AS+4")
var u=function(n){return Array.isArray(n)}
var s=function(n){return"string"===typeof n}
var l=t("xZ5c")
var f=function(n){return n[n.length-1]}
var p=t("F39V")
var g=t.n(p)
var d="/"
var b=function(n){return-1===n.indexOf(d)?g()(n):n.split(d).map(g.a).join(d)}
var v=function(n,e){return n.reduce((function(n,t){return e(n,t)}),{})}
var h=t("c0mm")
var y=Object(h["a"])(a["a"])
var R=t("1T5U")
var m=function(n){return 0===n.length}
function _(n,e){var t=void 0===e?{}:e,r=t.namespace,o=void 0===r?R["b"]:r,a=t.prefix
function i(e,t,r){var o=b(r.shift())
if(m(r))t[o]=n[e]
else{t[o]||(t[o]={})
i(e,t[o],r)}}var c={}
Object.getOwnPropertyNames(n).forEach((function(n){var e=a?n.replace(""+a+o,""):n
return i(n,c,e.split(o))}))
return c}var w=t("aWKK")
function O(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{}
var r=Object.keys(t)
"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))))
r.forEach((function(e){k(n,e,t[e])}))}return n}function k(n,e,t){e in n?Object.defineProperty(n,e,{value:t,enumerable:true,configurable:true,writable:true}):n[e]=t
return n}function B(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r]
var i=Object(a["a"])(f(t))?t.pop():{}
o()(t.every(s)&&(s(n)||Object(a["a"])(n)),"Expected optional object followed by string action types")
if(s(n))return x([n].concat(t),i)
return O({},j(n,i),x(t,i))}function j(n,e){var t=y(n,e)
var r=G(t)
return _(r,e)}function G(n,e){var t=void 0===e?{}:e,r=t.prefix,a=t.namespace,s=void 0===a?R["b"]:a
function f(n){if(Object(i["a"])(n)||Object(l["a"])(n))return true
if(u(n)){var e=n[0],t=void 0===e?c["a"]:e,r=n[1]
return Object(i["a"])(t)&&Object(i["a"])(r)}return false}return v(Object.keys(n),(function(e,t){var a
var i=n[t]
o()(f(i),"Expected function, undefined, null, or array with payload and meta functions for "+t)
var c=r?""+r+s+t:t
var l=u(i)?w["a"].apply(void 0,[c].concat(i)):Object(w["a"])(c,i)
return O({},e,(a={},a[t]=l,a))}))}function x(n,e){var t=v(n,(function(n,e){var t
return O({},n,(t={},t[e]=c["a"],t))}))
var r=G(t,e)
return v(Object.keys(r),(function(n,e){var t
return O({},n,(t={},t[b(e)]=r[e],t))}))}},"M/8B":function(n,e,t){"use strict"
t.d(e,"a",(function(){return p}))
var r=t("QLaP")
var o=t.n(r)
var a=t("UfUT")
var i=t("w/wI")
var c=t("AS+4")
var u=t("xZ5c")
var s=function(n){return void 0===n}
var l=function(n){return n.toString()}
var f=t("1T5U")
function p(n,e,t){void 0===e&&(e=c["a"])
var r=l(n).split(f["a"])
o()(!s(t),"defaultState for reducer handling "+r.join(", ")+" should be defined")
o()(Object(a["a"])(e)||Object(i["a"])(e),"Expected reducer to be a function or object with next and throw reducers")
var p=Object(a["a"])(e)?[e,e]:[e.next,e.throw].map((function(n){return Object(u["a"])(n)?c["a"]:n})),g=p[0],d=p[1]
return function(n,e){void 0===n&&(n=t)
var o=e.type
if(!o||-1===r.indexOf(l(o)))return n
return(true===e.error?d:g)(n,e)}}},NtLt:function(n,e,t){var r=t("3IO0")
n.exports=o
function o(n){return r(n).replace(/[\W_]+(.|$)/g,(function(n,e){return e?" "+e:""})).trim()}},QLaP:function(n,e,t){"use strict"
var r=function(n,e,t,r,o,a,i,c){false
if(!n){var u
if(void 0===e)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var s=[t,r,o,a,i,c]
var l=0
u=new Error(e.replace(/%s/g,(function(){return s[l++]})))
u.name="Invariant Violation"}u.framesToPop=1
throw u}}
n.exports=r},UfUT:function(n,e,t){"use strict"
e["a"]=function(n){return"function"===typeof n}},V55S:function(n,e,t){"use strict"
t.d(e,"a",(function(){return o}))
var r=t("1NAo")
function o(n,e){return Object(r["a"])(e)?e.get(n):e[n]}},ZbFs:function(n,e,t){"use strict"
t.d(e,"a",(function(){return p}))
var r=t("VTBJ")
var o=t("1OyB")
var a=t("vuIU")
var i=t("Ji7U")
var c=t("LK+K")
var u=t("q1tI")
var s=t.n(u)
var l=t("hPGw")
var f=s.a.createElement("path",{d:"M1743.8579 267.012456L710.746654 1300.1237 176.005086 765.382131 0 941.387217 710.746654 1652.25843 1919.98754 443.142104z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(n){Object(i["a"])(t,n)
var e=Object(c["a"])(t)
function t(){Object(o["a"])(this,t)
return e.apply(this,arguments)}Object(a["a"])(t,[{key:"render",value:function(){return s.a.createElement(l["a"],Object.assign({},this.props,{name:"IconCheck",viewBox:"0 0 1920 1920"}),f)}}])
t.displayName="IconCheckSolid"
return t}(u["Component"])
p.glyphName="check"
p.variant="Solid"
p.propTypes=Object(r["a"])({},l["a"].propTypes)},ZbPE:function(n,e,t){"use strict"
t.d(e,"a",(function(){return B}))
var r=t("rePB")
var o=t("1OyB")
var a=t("vuIU")
var i=t("Ji7U")
var c=t("LK+K")
var u=t("q1tI")
var s=t.n(u)
var l=t("17x9")
var f=t.n(l)
var p=t("TSYQ")
var g=t.n(p)
var d=t("J2CL")
var b=t("KgFQ")
var v=t("jtGx")
var h=t("nAyT")
var y=t("VTBJ")
function R(n){var e=n.typography,t=n.colors,r=n.spacing
return Object(y["a"])({},e,{primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,warningColor:t.textWarning,brandColor:t.textBrand,errorColor:t.textDanger,dangerColor:t.textDanger,successColor:t.textSuccess,alertColor:t.textAlert,paragraphMargin:"".concat(r.medium," 0")})}R.canvas=function(n){return{primaryColor:n["ic-brand-font-color-dark"],brandColor:n["ic-brand-primary"]}}
var m,_,w,O
var k={componentId:"enRcg",template:function(n){return"\n\n.enRcg_bGBk{font-family:".concat(n.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(n.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(n.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(n.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(n.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(n.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(n.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(n.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(n.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(n.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(n.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(n.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(n.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(n.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(n.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(n.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(n.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(n.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(n.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(n.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(n.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(n.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(n.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(n.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(n.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(n.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(n.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(n.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(n.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(n.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var B=(m=Object(d["l"])(R,k),m(_=(O=w=function(n){Object(i["a"])(t,n)
var e=Object(c["a"])(t)
function t(){Object(o["a"])(this,t)
return e.apply(this,arguments)}Object(a["a"])(t,[{key:"render",value:function(){var n
var e=this.props,o=e.wrap,a=e.weight,i=e.fontStyle,c=e.size,u=e.lineHeight,l=e.letterSpacing,f=e.transform,p=e.color,d=e.children
var h=Object(b["a"])(t,this.props)
return s.a.createElement(h,Object.assign({},Object(v["b"])(this.props),{className:g()((n={},Object(r["a"])(n,k.root,true),Object(r["a"])(n,k[c],c),Object(r["a"])(n,k["wrap-".concat(o)],o),Object(r["a"])(n,k["weight-".concat(a)],a),Object(r["a"])(n,k["style-".concat(i)],i),Object(r["a"])(n,k["transform-".concat(f)],f),Object(r["a"])(n,k["lineHeight-".concat(u)],u),Object(r["a"])(n,k["letterSpacing-".concat(l)],l),Object(r["a"])(n,k["color-".concat(p)],p),n)),ref:this.props.elementRef}),d)}}])
t.displayName="Text"
return t}(u["Component"]),w.propTypes={as:f.a.elementType,children:f.a.node,color:h["a"].deprecatePropValues(f.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:f.a.func,fontStyle:f.a.oneOf(["italic","normal"]),letterSpacing:f.a.oneOf(["normal","condensed","expanded"]),lineHeight:f.a.oneOf(["default","fit","condensed","double"]),size:f.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:f.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:f.a.oneOf(["normal","light","bold"]),wrap:f.a.oneOf(["normal","break-word"])},w.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},O))||_)},aWKK:function(n,e,t){"use strict"
t.d(e,"a",(function(){return u}))
var r=t("QLaP")
var o=t.n(r)
var a=t("UfUT")
var i=t("AS+4")
var c=function(n){return null===n}
function u(n,e,t){void 0===e&&(e=i["a"])
o()(Object(a["a"])(e)||c(e),"Expected payloadCreator to be a function, undefined or null")
var r=c(e)||e===i["a"]?i["a"]:function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o]
return n instanceof Error?n:e.apply(void 0,[n].concat(r))}
var u=Object(a["a"])(t)
var s=n.toString()
var l=function(){var e=r.apply(void 0,arguments)
var o={type:n}
e instanceof Error&&(o.error=true)
void 0!==e&&(o.payload=e)
u&&(o.meta=t.apply(void 0,arguments))
return o}
l.toString=function(){return s}
return l}},bZJi:function(n,e,t){"use strict"
t.d(e,"a",(function(){return L}))
var r=t("Ff2n")
var o=t("VTBJ")
var a=t("1OyB")
var i=t("vuIU")
var c=t("Ji7U")
var u=t("LK+K")
var s=t("q1tI")
var l=t.n(s)
var f=t("17x9")
var p=t.n(f)
var g=t("nAyT")
var d=t("KgFQ")
var b=t("jtGx")
var v=t("sQ3t")
var h=t("E+IV")
var y=t("UCAh")
var R=t("BTe1")
var m=t("J2CL")
var _=t("oXx0")
var w=t("jsCG")
var O=t("AdN2")
var k=function(n){var e=n.typography,t=n.spacing
return{fontFamily:e.fontFamily,fontWeight:e.fontWeightNormal,fontSize:e.fontSizeSmall,padding:t.small}}
var B,j,G,x,C,S
var T={componentId:"eZLSb",template:function(n){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(n.fontFamily||"inherit",";font-size:").concat(n.fontSize||"inherit",";font-weight:").concat(n.fontWeight||"inherit",";padding:").concat(n.padding||"inherit","}")},root:"eZLSb_bGBk"}
var L=(B=Object(g["a"])("8.0.0",{tip:"renderTip",variant:"color"}),j=Object(_["a"])(),G=Object(m["l"])(k,T),B(x=j(x=G(x=(S=C=function(n){Object(c["a"])(t,n)
var e=Object(u["a"])(t)
function t(){var n
Object(a["a"])(this,t)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
n=e.call.apply(e,[this].concat(o))
n._id=Object(R["a"])("Tooltip")
n.state={hasFocus:false}
n.handleFocus=function(e){n.setState({hasFocus:true})}
n.handleBlur=function(e){n.setState({hasFocus:false})}
return n}Object(i["a"])(t,[{key:"renderTrigger",value:function(){var n=this.props,e=n.children,r=n.as
var a=this.state.hasFocus
var i={"aria-describedby":this._id}
if(r){var c=Object(d["a"])(t,this.props)
var u=Object(b["a"])(this.props,t.propTypes)
return l.a.createElement(c,Object.assign({},u,i),e)}return"function"===typeof e?e({focused:a,getTriggerProps:function(n){return Object(o["a"])({},i,{},n)}}):Object(v["a"])(this.props.children,i)}},{key:"render",value:function(){var n=this
var e=this.props,t=e.renderTip,o=e.isShowingContent,a=e.defaultIsShowingContent,i=e.on,c=e.placement,u=e.mountNode,s=e.constrain,f=e.offsetX,p=e.offsetY,g=e.positionTarget,d=e.onShowContent,v=e.onHideContent,y=e.tip,R=(e.variant,Object(r["a"])(e,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var m=this.props.variant
m=m?"default"===m?"primary-inverse":"primary":this.props.color
return l.a.createElement(w["a"],Object.assign({},Object(b["b"])(R),{isShowingContent:o,defaultIsShowingContent:a,on:i,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:c,color:"primary"===m?"primary-inverse":"primary",mountNode:u,constrain:s,shadow:"none",offsetX:f,offsetY:p,positionTarget:g,renderTrigger:function(){return n.renderTrigger()},onShowContent:d,onHideContent:v,onFocus:this.handleFocus,onBlur:this.handleBlur}),l.a.createElement("span",{id:this._id,className:T.root,role:"tooltip"},t?Object(h["a"])(t):y))}}])
t.displayName="Tooltip"
return t}(s["Component"]),C.propTypes={children:p.a.oneOfType([p.a.node,p.a.func]).isRequired,renderTip:p.a.oneOfType([p.a.node,p.a.func]),isShowingContent:p.a.bool,defaultIsShowingContent:p.a.bool,as:p.a.elementType,on:p.a.oneOfType([p.a.oneOf(["click","hover","focus"]),p.a.arrayOf(p.a.oneOf(["click","hover","focus"]))]),color:p.a.oneOf(["primary","primary-inverse"]),placement:y["a"].placement,mountNode:y["a"].mountNode,constrain:y["a"].constrain,offsetX:p.a.oneOfType([p.a.string,p.a.number]),offsetY:p.a.oneOfType([p.a.string,p.a.number]),positionTarget:p.a.oneOfType([O["a"],p.a.func]),onShowContent:p.a.func,onHideContent:p.a.func,tip:p.a.node,variant:p.a.oneOf(["default","inverse"])},C.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(n){},onHideContent:function(n,e){e.documentClick}},S))||x)||x)||x)},c0mm:function(n,e,t){"use strict"
var r=t("1T5U")
var o=t("fUqf")
var a=t("V55S")
e["a"]=function(n){return function e(t,i,c,u){var s=void 0===i?{}:i,l=s.namespace,f=void 0===l?r["b"]:l,p=s.prefix
void 0===c&&(c={})
void 0===u&&(u="")
function g(n){var e
if(!u)return n
var t=n.toString().split(r["a"])
var o=u.split(r["a"])
return(e=[]).concat.apply(e,o.map((function(n){return t.map((function(e){return""+n+f+e}))}))).join(r["a"])}function d(n){if(u||!p||p&&new RegExp("^"+p+f).test(n))return n
return""+p+f+n}Object(o["a"])(t).forEach((function(r){var o=d(g(r))
var i=Object(a["a"])(r,t)
n(i)?e(i,{namespace:f,prefix:p},c,o):c[o]=i}))
return c}}},dI71:function(n,e,t){"use strict"
t.d(e,"a",(function(){return o}))
var r=t("s4An")
function o(n,e){n.prototype=Object.create(e.prototype)
n.prototype.constructor=n
Object(r["a"])(n,e)}},e7SQ:function(n,e,t){"use strict"
t.d(e,"a",(function(){return d}))
var r=t("qrOD")
var o=t("QLaP")
var a=t.n(o)
var i=t("w/wI")
var c=t("1NAo")
var u=t("fUqf")
function s(n){var e=Object(u["a"])(n)
var t=e.every((function(n){return"next"===n||"throw"===n}))
return e.length&&e.length<=2&&t}var l=t("c0mm")
var f=Object(l["a"])((function(n){return(Object(i["a"])(n)||Object(c["a"])(n))&&!s(n)}))
var p=t("M/8B")
var g=t("V55S")
function d(n,e,t){void 0===t&&(t={})
a()(Object(i["a"])(n)||Object(c["a"])(n),"Expected handlers to be a plain object.")
var o=f(n,t)
var s=Object(u["a"])(o).map((function(n){return Object(p["a"])(n,Object(g["a"])(n,o),e)}))
var l=r["a"].apply(void 0,s.concat([e]))
return function(n,t){void 0===n&&(n=e)
return l(n,t)}}},fUqf:function(n,e,t){"use strict"
t.d(e,"a",(function(){return o}))
var r=t("1NAo")
function o(n){if(Object(r["a"])(n))return Array.from(n.keys())
if("undefined"!==typeof Reflect&&"function"===typeof Reflect.ownKeys)return Reflect.ownKeys(n)
var e=Object.getOwnPropertyNames(n)
"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n)))
return e}},qrOD:function(n,e,t){"use strict"
e["a"]=function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t]
var r="function"!==typeof e[e.length-1]&&e.pop()
var o=e
if("undefined"===typeof r)throw new TypeError("The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.")
return function(n,e){for(var t=arguments.length,a=Array(t>2?t-2:0),i=2;i<t;i++)a[i-2]=arguments[i]
var c="undefined"===typeof n
var u="undefined"===typeof e
if(c&&u&&r)return r
return o.reduce((function(n,t){return t.apply(void 0,[n,e].concat(a))}),c&&!u&&r?r:n)}}},"w/wI":function(n,e,t){"use strict"
e["a"]=function(n){if("object"!==typeof n||null===n)return false
var e=n
while(null!==Object.getPrototypeOf(e))e=Object.getPrototypeOf(e)
return Object.getPrototypeOf(n)===e}},wx14:function(n,e,t){"use strict"
t.d(e,"a",(function(){return r}))
function r(){r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]
for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}
return r.apply(this,arguments)}},xZ5c:function(n,e,t){"use strict"
e["a"]=function(n){return null===n||void 0===n}}}])

//# sourceMappingURL=40-c-0a4914e449.js.map