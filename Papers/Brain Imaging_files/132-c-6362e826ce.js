(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[132],{"65NJ":function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
n("w2hD")
i.a.fn.scrollToVisible=function(e){const t={}
const n=i()(e)
if(0===n.length)return
let a=n.offset(),r=n.outerWidth(),o=n.outerHeight(),s=a.top,l=s+o,c=a.left,d=c+r,u="html,body"==this.selector?i.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),g=this.outerHeight(),m=this.outerWidth()
if("html,body"!=this.selector){let e=i()("body").offset()
this.each((function(){try{e=i()(this).offset()
return false}catch(e){}}))
s-=e.top
l-=e.top
c-=e.left
d-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){g=i()(window).height()
i()("#wizard_box:visible").length>0&&(g-=i()("#wizard_box:visible").height())
m=i()(window).width()
s-=u
c-=h
l-=u
d-=h}s<0||g<o&&l>g?t.scrollTop=s+u:l>g&&(t.scrollTop=l+u-g+20)
c<0?t.scrollLeft=c+h:d>m&&(t.scrollLeft=d+h-m+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},B1bN:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var a=n("ouhR")
var i=n.n(a)
const r="#easy_student_view"
const o={show(){i()(r).show()},hide(){i()(r).hide()}}},BrAc:function(e,t,n){"use strict"
var a=n("vDqi")
var i=n.n(a)
i.a.defaults.xsrfCookieName="_csrf_token"
i.a.defaults.xsrfHeaderName="X-CSRF-Token"
const r=i.a.defaults.headers.common.Accept
i.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+r
i.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
t["a"]=i.a},Ce78J:function(e,t,n){"use strict"
var a=n("VTBJ")
var i=n("ouhR")
var r=n.n(i)
var o=n("Y/W1")
var s=n.n(o)
var l=n("JiFB")
var c=n("ik22")
function d(e,t,n){const i=Object(a["a"])({},n)
e.forEach(e=>{const a=t[e]
const r=n[e]
Array.isArray(a)&&Array.isArray(r)&&(i[e]=[...new Set(a.concat(r))])})
return i}function u(e,t,n,i,r){const o=new l["a"](r,c["a"],e,t)
const s=Object(a["a"])({},o.defaultConfig())
return Object(a["a"])(Object(a["a"])({},s),d(n.optionsToMerge||[],s,n.tinyOptions))}var h=u
var g=n("FNQM")
const m={call(e,...t){if("exists?"===e)return true
return this[e](...t)},focus(){if(void 0!==tinymce){const e=tinymce.get(this.getTextarea().id)
e&&e.focus(true)}}}
const f={show(){$("#editor_tabs").show()},hide(){$("#editor_tabs").hide()}}
const p={wrapEditor(e){const t=Object(a["a"])(Object(a["a"])({},m),e)
return Object.assign(e,t)},wrapSidebar(e){const t=Object(a["a"])(Object(a["a"])({},f),e)
return Object.assign(e,t)}}
var _=p
var b=n("eVns")
var v=n("stQK")
const y={loadingPromise:null,preload(e){(window.requestIdleCallback||window.setTimeout)(()=>this.loadRCE(e))},loadOnTarget(e,t,n){const a=this.getTargetTextarea(e)
const i=this.getRenderingTarget(a,t.getRenderingTarget)
const r=this.createRCEProps(a,t)
this.loadRCE(e=>{e.renderIntoDiv(i,r,e=>{e.tinymceOn("init",()=>n(a,_.wrapEditor(e)))})})},loadingCallbacks:[],RCE:null,loadRCE(e=(()=>{})){return Promise.all([n.e(2),n.e(3),n.e(5),n.e(6),n.e(8),n.e(11),n.e(12),n.e(13),n.e(14),n.e(20),n.e(25),n.e(35),n.e(3688)]).then(n.bind(null,"j/Fk")).then(e=>{this.RCE=e
Object(g["a"])()
return e}).then(()=>{this.loadingCallbacks.forEach(e=>e(this.RCE))
this.loadingCallbacks=[]
e(this.RCE)})},getTargetTextarea:e=>"textarea"===r()(e).get(0).type?r()(e).get(0):r()(e).find("textarea").get(0),getRenderingTarget(e,t){let n
n="undefined"===typeof t?r()(e).parent().get(0):t(e)
r()(n).addClass("ic-RichContentEditor")
return n},_attrsToMirror(e){const t=["name"]
const n=s.a.reduce(e.attributes,(e,t)=>{e[t.name]=t.value
return e},{})
return s.a.pick(n,t)},createRCEProps(e,t){var n,i,r,o,s
const l=e.offsetWidth
const c=e.offsetHeight||400
c&&(t.tinyOptions=Object(a["a"])({height:c},t.tinyOptions||{}))
const d=ENV.LOCALE
const u=Object.keys(v["a"]).map(e=>({id:e,label:v["a"][e]})).sort((e,t)=>e.id===d?-1:t.id===d?1:e.label.localeCompare(t.label,d))
const g={enabled:true,maxAge:Number.isNaN(ENV.rce_auto_save_max_age_ms)?36e5:ENV.rce_auto_save_max_age_ms}
return{defaultContent:e.value||t.defaultContent,editorOptions:h.bind(null,l,e.id,t,null),language:ENV.LOCALE,mirroredAttrs:this._attrsToMirror(e),onFocus:t.onFocus,onBlur:t.onBlur,textareaClassName:e.className,textareaId:e.id,trayProps:Object(b["a"])(),languages:u,liveRegion:()=>document.getElementById("flash_screenreader_holder"),ltiTools:null===(n=window.INST)||void 0===n?void 0:n.editorButtons,autosave:t.autosave||g,instRecordDisabled:ENV.RICH_CONTENT_INST_RECORD_TAB_DISABLED,maxInitRenderedRCEs:t.maxInitRenderedRCEs,highContrastCSS:null===(i=window.ENV)||void 0===i?void 0:i.url_for_high_contrast_tinymce_editor_css,use_rce_buttons_and_icons:!!(null!==(r=window.ENV)&&void 0!==r&&null!==(o=r.FEATURES)&&void 0!==o&&o.rce_buttons_and_icons),use_rce_a11y_checker_notifications:!!(null!==(s=window.ENV)&&void 0!==s&&s.use_rce_a11y_checker_notifications)}}}
var k=y
var w=n("eodz")
function R(e,t,n){e.css("display","none")
const a=t.onFocus
t.onFocus=(...e)=>{a instanceof Function&&a(...e)}
k.loadOnTarget(e,t,(t,a)=>{const i=D(e)
const o=G(r()(t))
o.data("remoteEditor",a)
i.trigger(w["a"],a)
n&&n(a)})}function x(e){const t=D(e)
const n=t.attr("id")
const a="tinymce-parent-of-"+n
if(t.parent().attr("id")!==a)return t.wrap(`<div id='${a}' style='visibility: hidden'></div>`)}function C(){r()(".mce-resizehandle").attr("aria-hidden",true)}let B=0
function z(){return"random_editor_id_"+B++}function E(e){const t=r()(e)
const n="attr"in t?t.attr("id"):t.id
n&&""!=n||t.attr("id",z())}function G(e){const t=D(e)
const n=t.attr("id")
if(!n||""==n)return t
const a=r()("#"+n)
if(a.length<=0)return t
return a}const O={preloadRemoteModule:(e=(()=>{}))=>k.preload(e),loadNewEditor(e,t={},n){let a=D(e)
if(a.length<=0)return
E(a)
t=r.a.extend({},t)
const i=e=>{t.focus&&this.activateRCE(a)
n&&n(e)}
a=this.freshNode(a)
if(t.manageParent){delete t.manageParent
x(a)}R(a,t,i)
C()},callOnRCE(e,t,...n){let a=D(e)
a=this.freshNode(a)
return Object(w["d"])(a,t,...n)},destroyRCE(e){let t=D(e)
t=this.freshNode(t)
Object(w["b"])(t)},closeRCE(e){this.callOnRCE(e,"RCEClosed")},activateRCE(e){let t=D(e)
t=this.freshNode(t)
Object(w["c"])(t)},freshNode:G,ensureID:E,node2jquery:D}
function D(e){return e&&e.length?e:r()(e)}t["a"]=O},ErZx:function(e,t,n){"use strict"
const a={auto_focus:false,block_formats:void 0,body_class:"default-theme",content_css:[],directionality:"ltr",height:void 0,language:"en",menubar:void 0,menu:void 0,toolbar:void 0,plugins:void 0,branding:false,browser_spellcheck:true,content_style:void 0,convert_urls:false,font_formats:"Lato=lato,Helvetica Neue,Helvetica,Arial,sans-serif; Balsamiq Sans=Balsamiq Sans,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Architect's Daughter=Architects Daughter,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",language_load:false,language_url:"none",toolbar_mode:"floating",toolbar_ticky:true,mobile:{theme:"silver"},preview_styles:"font-family font-size font-weight font-style text-decoration text-transform border border-radius outline text-shadow",remove_script_host:true,resize:true,skin:false,statusbar:false,valid_elements:"@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|role],a[rel|rev|charset|hreflang|tabindex|accesskey|type|name|href|target|title|class],strong/b,em/i,strike/s,u,#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|src|border|alt|title|hspace|vspace|width|height|align|role],-sub,-sup,-blockquote[cite],-table[border=0|cellspacing|cellpadding|width|frame|rules|height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width|height|src|*],map[name],area[shape|coords|href|alt|target],bdo,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,kbd,q[cite],samp,small,tt,var,big,figure,figcaption,source[media|sizes|src|srcset|type],track,mark,article,aside,details,footer,header,nav,section,summary,time",extended_valid_elements:"@[id|accesskey|class|dir|lang|style|tabindex|title|contenteditable|contextmenu|draggable|dropzone|hidden|longdesc|spellcheck|translate|align|role|aria-labelledby|aria-atomic|aria-busy|aria-controls|aria-describedby|aria-disabled|aria-dropeffect|aria-flowto|aria-grabbed|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-labelledby|aria-live|aria-owns|aria-relevant|aria-autocomplete|aria-checked|aria-disabled|aria-expanded|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-level|aria-multiline|aria-multiselectable|aria-orientation|aria-pressed|aria-readonly|aria-required|aria-selected|aria-sort|aria-valuemax|aria-valuemin|aria-valuenow|aria-valuetext],iframe[id|data-media-type|title|src|width|height|name|align|style|class|sandbox|allowfullscreen|webkitallowfullscreen|mozallowfullscreen|allow],i[iclass],a[hidden|href|target|rel|media|hreflang|type|charset|name|rev|shape|coords|download|alt],#p,li[value],-ol[reversed|start|type|compact],pre[width],table[border|summary|width|frame|rules|cellspacing|cellpadding|bgcolor],tbody[char|charoff|valign],td[colspan|rowspan|headers|abbr|axis|scope|align|char|charoff|valign|nowrap|bgcolor|width|height],tfoot[char|charoff|valign],th[colspan|rowspan|headers|scope|abbr|axis|align|char|charoff|valign|nowrap|bgcolor|width|height],thead[char|charoff|valign],tr[char|charoff|valign|bgcolor],-ul[compact],video[name|src|allowfullscreen|muted|poster|width|height|controls|playsinline],audio[name|src|muted|controls],annotation[href|xref|definitionURL|encoding|cd|name|src],annotation-xml[href|xref|definitionURL|encoding|cd|name|src],maction[href|xref|mathcolor|mathbackground|actiontype|selection],maligngroup[href|xref|mathcolor|mathbackground|groupalign],malignmark[href|xref|mathcolor|mathbackground|edge],math[xmlns|href|xref|display|maxwidth|overflow|altimg|altimg-width|altimg-height|altimg-valign|alttext|cdgroup|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],menclose[href|xref|mathcolor|mathbackground|notation],merror[href|xref|mathcolor|mathbackground],mfenced[href|xref|mathcolor|mathbackground|open|close|separators],mfrac[href|xref|mathcolor|mathbackground|linethickness|munalign|denomalign|bevelled],mglyph[href|xref|mathcolor|mathbackground|src|alt|width|height|valign],mi[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mlabeledtr[href|xref|mathcolor|mathbackground],mlongdiv[href|xref|mathcolor|mathbackground|longdivstyle|align|stackalign|charalign|charspacing],mmultiscripts[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],mn[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mo[href|xref|mathcolor|mathbackground|mathvariant|mathsize|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast],mover[href|xref|mathcolor|mathbackground|accent|align],mpadded[href|xref|mathcolor|mathbackground|height|depth|width|lspace|voffset],mphantom[href|xref|mathcolor|mathbackground],mprescripts[href|xref|mathcolor|mathbackground],mroot[href|xref|mathcolor|mathbackground],mrow[href|xref|mathcolor|mathbackground],ms[href|xref|mathcolor|mathbackground|mathvariant|mathsize|lquote|rquote],mscarries[href|xref|mathcolor|mathbackground|position|location|crossout|scriptsizemultiplier],mscarry[href|xref|mathcolor|mathbackground|location|crossout],msgroup[href|xref|mathcolor|mathbackground|position|shift],msline[href|xref|mathcolor|mathbackground|position|length|leftoverhang|rightoverhang|mslinethickness],mspace[href|xref|mathcolor|mathbackground|mathvariant|mathsize],msqrt[href|xref|mathcolor|mathbackground],msrow[href|xref|mathcolor|mathbackground|position],mstack[href|xref|mathcolor|mathbackground|align|stackalign|charalign|charspacing],mstyle[href|xref|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],msub[href|xref|mathcolor|mathbackground|subscriptshift],msubsup[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],msup[href|xref|mathcolor|mathbackground|superscriptshift],mtable[href|xref|mathcolor|mathbackground|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|width|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|displaystyle|side|minlabelspacing],mtd[href|xref|mathcolor|mathbackground|rowspan|columnspan|rowalign|columnalign|groupalign],mtext[href|xref|mathcolor|mathbackground|mathvariant|mathsize|width|height|depth|linebreak],mtr[href|xref|mathcolor|mathbackground|rowalign|columnalign|groupalign],munder[href|xref|mathcolor|mathbackground|accentunder|align],munderover[href|xref|mathcolor|mathbackground|accent|accentunder|align],none[href|xref|mathcolor|mathbackground],semantics[href|xref|definitionURL|encoding],picture,ruby,rp,rt,wbrsvg[*],g[*],circle[*]",non_empty_elements:"td th iframe video audio object script a i area base basefont br col frame hr img input isindex link meta param embed source wbr track ruby",target_list:false,link_title:false,default_link_target:"_blank"}
t["a"]=a},TvTI:function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
var r=n("gI0r")
n("8JEM")
i.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=i()(this)
i.a.each(["name","id","class"],(n,a)=>{t.attr(a)&&t.attr(a,t.attr(a).replace(/-iterator-/,e.iterator))})}))
e.id&&this.attr("id",e.id)
let a=false
if(e.data)for(var t in e.data){if(e.except&&-1!=i.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=i.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const o=this.find("."+t)
var n=e.avoid||""
o.each((function(){const o=i()(this)
if(o.length>0&&0===o.closest(n).length){"undefined"!==typeof e.data[t]&&null!==e.data[t]||(e.data[t]="")
if(e.htmlValues&&-1!=i.a.inArray(t,e.htmlValues)){o.html(i.a.raw(e.data[t].toString()))
if(o.hasClass("user_content")){a=true
o.removeClass("enhanced")
o.data("unenhanced_content_html",e.data[t].toString())}}else if("INPUT"==o[0].tagName.toUpperCase())o.val(e.data[t])
else try{const n=e.data[t].toString()
o.html(Object(r["a"])(n))}catch(e){}}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,n,a,r=i()(this)
for(const o in e.hrefValues){if(!e.hrefValues.hasOwnProperty(o))continue
const s=e.hrefValues[o]
if(t=r.attr("href")){const n=i.a.replaceTags(t,s,encodeURIComponent(e.data[s]))
const a=r.text()===r.html()?r.text():null
if(t!==n){r.attr("href",n)
a&&r.text(a)}}(n=r.attr("rel"))&&r.attr("rel",i.a.replaceTags(n,s,e.data[s]));(a=r.attr("name"))&&r.attr("name",i.a.replaceTags(a,s,e.data[s]))}}))
a&&i()(document).triggerHandler("user_content_change")}return this}
i.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
i.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,n={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const r=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
a=i.a.trim(r.text())
"&nbsp;"===r.html()&&(a="")
1===a.length&&160===a.charCodeAt(0)&&(a="")
n[e]=a})}if(e.dataValues)for(t in e.dataValues){var a=this.data(e.dataValues[t])
a&&(n[e.dataValues[t]]=a)}if(e.htmlValues)for(t in e.htmlValues){const r=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
a=null
a=r.hasClass("user_content")&&r.data("unenhanced_content_html")?r.data("unenhanced_content_html"):i.a.trim(r.html())
n[e.htmlValues[t]]=a}return n}
i.a.fn.getTemplateValue=function(e,t){const n=i.a.extend({},t,{textValues:[e]})
return this.getTemplateData(n)[e]}},ZbPE:function(e,t,n){"use strict"
n.d(t,"a",(function(){return C}))
var a=n("rePB")
var i=n("1OyB")
var r=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var d=n("17x9")
var u=n.n(d)
var h=n("TSYQ")
var g=n.n(h)
var m=n("J2CL")
var f=n("KgFQ")
var p=n("jtGx")
var _=n("nAyT")
var b=n("VTBJ")
function v(e){var t=e.typography,n=e.colors,a=e.spacing
return Object(b["a"])({},t,{primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,warningColor:n.textWarning,brandColor:n.textBrand,errorColor:n.textDanger,dangerColor:n.textDanger,successColor:n.textSuccess,alertColor:n.textAlert,paragraphMargin:"".concat(a.medium," 0")})}v.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var y,k,w,R
var x={componentId:"enRcg",template:function(e){return"\n\n.enRcg_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(e.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(e.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(e.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var C=(y=Object(m["l"])(v,x),y(k=(R=w=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){var e
var t=this.props,i=t.wrap,r=t.weight,o=t.fontStyle,s=t.size,l=t.lineHeight,d=t.letterSpacing,u=t.transform,h=t.color,m=t.children
var _=Object(f["a"])(n,this.props)
return c.a.createElement(_,Object.assign({},Object(p["b"])(this.props),{className:g()((e={},Object(a["a"])(e,x.root,true),Object(a["a"])(e,x[s],s),Object(a["a"])(e,x["wrap-".concat(i)],i),Object(a["a"])(e,x["weight-".concat(r)],r),Object(a["a"])(e,x["style-".concat(o)],o),Object(a["a"])(e,x["transform-".concat(u)],u),Object(a["a"])(e,x["lineHeight-".concat(l)],l),Object(a["a"])(e,x["letterSpacing-".concat(d)],d),Object(a["a"])(e,x["color-".concat(h)],h),e)),ref:this.props.elementRef}),m)}}])
n.displayName="Text"
return n}(l["Component"]),w.propTypes={as:u.a.elementType,children:u.a.node,color:_["a"].deprecatePropValues(u.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:u.a.func,fontStyle:u.a.oneOf(["italic","normal"]),letterSpacing:u.a.oneOf(["normal","condensed","expanded"]),lineHeight:u.a.oneOf(["default","fit","condensed","double"]),size:u.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:u.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:u.a.oneOf(["normal","light","bold"]),wrap:u.a.oneOf(["normal","break-word"])},w.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},R))||k)},aq8L:function(e,t,n){"use strict"
var a=n("HGxv")
var i=n("8WeW")
Object(i["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"ca":{"buttons":{"cancel":"Cancel·la","delete":"Suprimeix"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Segur que ho voleu suprimir?"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"es-ES":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Está seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ali ste prepričani, da želite to izbrisati?"}}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"th":{"buttons":{"cancel":"ยกเลิก","delete":"ลบ"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"แน่ใจว่าต้องการลบหรือไม่"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ви впевнені, що хочете це видалити?"}}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR")
n("0sPK")
var r=a["default"].scoped("instructure_misc_plugins")
var o=n("ouhR")
var s=n.n(o)
var l=n("gI0r")
var c=n("3PZ/")
n("dhbk")
n("ESjL")
n("65NJ")
n("w2hD")
s.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(l["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(l["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(s.a.raw(n))}
s.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
s.a.fn.scrollbarWidth=function(){const e=s()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const a=t.innerWidth()
e.remove()
return n-a}
s.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
s.a.fn.undim=function(e){return this.animate({opacity:1},e)}
s.a.fn.confirmDelete=function(e){e=s.a.extend({},s.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let a=true
e.noMessage=e.noMessage||e.no_message
const i=function(){if(!a){e.cancelled&&s.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const a=e.prepareData?e.prepareData.call(t,n):{}
a.authenticity_token=Object(c["a"])()
s.a.ajaxJSON(e.url,"DELETE",a,n=>{e.success.call(t,n)},(n,a,i,r)=>{e.error&&s.a.isFunction(e.error)?e.error.call(t,n,a,i,r):s.a.ajaxJSON.unhandledXHRs.push(a)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!s.a.skipConfirmations){if(e.dialog){a=false
const t="object"===typeof e.dialog?e.dialog:{}
const o=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=s()(e.message).dialog(s.a.extend({},{modal:true,close:i,buttons:[{text:r.t("#buttons.cancel","Cancel"),click(){s()(this).dialog("close")}},{text:r.t("#buttons.delete","Delete"),class:o,click(){a=true
s()(this).dialog("close")}}]},t))
return}a=confirm(e.message)}i()}
s.a.fn.confirmDelete.defaults={get message(){return r.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
s.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let a=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(a="#"+e.substring(5))}this.bind("document_fragment_change",e)
const i=this
let r=false
for(t=0;t<s.a._checkFragments.fragmentList.length;t++){const e=s.a._checkFragments.fragmentList[t]
e.doc[0]==i[0]&&(r=true)}r||s.a._checkFragments.fragmentList.push({doc:i,fragment:""})
s()(window).bind("hashchange",s.a._checkFragments)
setTimeout(()=>{a&&a.length>0?i.triggerHandler("document_fragment_change",a):i&&i[0]&&i[0].location&&i[0].location.hash.length>0&&i.triggerHandler("document_fragment_change",i[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
s.a._checkFragments=function(){const e=s.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const a=n.doc
if(a[0].location.hash!=n.fragment){a.triggerHandler("document_fragment_change",a[0].location.hash)
n.fragment=a[0].location.hash
s.a._checkFragments.fragmentList[t]=n}}}
s.a._checkFragments.fragmentList=[]
s.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
s.a.fn.showIf=function(e){if(s.a.isFunction(e))return this.each((function(t){s()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
s.a.fn.disableIf=function(e){s.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
s.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}s()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const a=this.width()
const i=this.height()
const r=(e.container||this).zIndex()
t=s()(document.createElement("div"))
t.css({width:a+6,height:i+6,top:n.top-3,left:n.left-3,zIndex:r+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){s()(this).stop().fadeOut("fast",(function(){s()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
s()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){s()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){s()(this).remove()}))
e&&e.scroll&&s()("html,body").scrollToVisible(t)}
s.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
s.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
s.a.fn.fillWindowWithMe=function(e){const t=s.a.extend({minHeight:400},e),n=s()(this),a=s()("#wrapper"),i=s()("#main"),r=s()("#not_right_side"),o=s()(window),l=s()(this).add(t.alsoResize)
function c(){l.height(0)
const e=o.height()-(a.offset().top+a.outerHeight())+(i.height()-r.height()),c=Math.max(400,e)
l.height(c)
s.a.isFunction(t.onResize)&&t.onResize.call(n,c)}c()
o.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c)
return this}
s.a.fn.autoGrowInput=function(e){e=s.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||s()(this).width(),n="",a=s()(this),i=s()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:a.css("fontSize"),fontFamily:a.css("fontFamily"),fontWeight:a.css("fontWeight"),letterSpacing:a.css("letterSpacing"),whiteSpace:"nowrap"}),r=function(){setTimeout(()=>{if(n===(n=a.val()))return
i.text(n)
const r=i.width(),o=r+e.comfortZone>=t?r+e.comfortZone:t,s=a.width(),l=o<s&&o>=t||o>t&&o<e.maxWidth
l&&a.width(o)})}
i.insertAfter(a)
s()(this).bind("keyup keydown blur update change",r)}))
return this}
s.a},dDTa:function(e,t,n){"use strict"
const a=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=a},lBOK:function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
i.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
const t=window.getComputedStyle(this[0]).direction||"ltr"
const n=this.filter(":first")
let a
if("hide"===e||"remove"===e){n.children(".loading_image").remove()
a=n.data("loading_images")||[]
a.forEach(e=>{e&&e.remove()})
n.data("loading_images",null)
this.css("margin-inline-end","")
return this}if("remove_once"===e){n.children(".loading_image").remove()
a=n.data("loading_images")||[]
const e=a.pop()
e&&e.remove()
n.data("loading_images",a)
return this}if("register_image"===e&&3===arguments.length){i.a.fn.loadingImg.image_files[arguments[1]]=arguments[2]
return this}e=i.a.extend({},i.a.fn.loadingImg.defaults,e)
let r=i.a.fn.loadingImg.image_files.normal
e.image_size&&i.a.fn.loadingImg.image_files[e.image_size]&&(r=i.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
let o=0
if(e.vertical)if("top"===e.vertical);else if("bottom"===e.vertical)o=n.outerHeight()
else if("middle"===e.vertical)o=n.outerHeight()/2-r.height/2
else{o=parseInt(e.vertical,10)
isNaN(o)&&(o=0)}let s=0
if(e.horizontal)if("left"===e.horizontal);else if("right"===e.horizontal)s=n.outerWidth()-r.width
else if("right!"===e.horizontal){s="ltr"===t?n.outerWidth()+5:-5-(r.width||16)
this.css({"margin-inline-end":"16px"})}else if("middle"===e.horizontal)s=n.outerWidth()/2-r.width/2
else{s=parseInt(e.horizontal,10)
isNaN(s)&&(s=0)}const l=n.zIndex()+1
const c=i()(document.createElement("div")).addClass("loading_image_holder")
const d=i()(document.createElement("img")).attr("src",r.url)
c.append(d)
a=n.data("loading_images")||[]
a.push(c)
n.data("loading_images",a)
if(n.css("position")&&"static"!==n.css("position")){c.css({zIndex:l,position:"absolute",top:o,left:s})
n.append(c)}else{const t=n.offset()
let a=t.top,r=t.left
e.vertical&&(a+=o)
e.horizontal&&(r+=s)
c.css({zIndex:l,position:"absolute",top:a,left:r})
i()("body").append(c)}return i()(this)}
i.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
i.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
i.a.fn.loadingImage=i.a.fn.loadingImg},zO2W:function(e,t,n){"use strict"
var a=n("ODXe")
var i=n("ouhR")
var r=n.n(i)
var o=n("HGxv")
n("7AEQ")
n("TvTI")
n("pzFb")
var s=n("wd/R")
var l=n.n(s)
const c=o["default"].lookup("date.month_names")
function d(e){return{day:e.getDate(),month:e.getMonth(),year:e.getFullYear()}}function u(e,t){e.data("calendar_objects")
var n={}
var a=null
if("string"===typeof t){a=r.a.datepicker.oldParseDate("mm/dd/yy",t)
a&&a.setDate(1)}if(!a){var i=parseInt(e.find(".month_number").text(),10)
var o=parseInt(e.find(".year_number").text(),10)
a=new Date(o,i+t-1,1)}n={month_name:c[a.getMonth()+1],month_number:a.getMonth()+1,year_number:a.getFullYear()}
e.fillTemplateData({data:n})
const s=l.a.localeData(ENV.MOMENT_LOCALE).firstDayOfWeek()
let u=new Date
const h=d(u)
const g=d(a)
u=a
u.setDate(0)
u.setDate(u.getDate()-u.getDay()+s)
const m=d(u)
let f=null
if(g.day!=m.day){u.setDate(1)
u.setMonth(u.getMonth()+1)
u.setDate(0)
f={day:u.getDate(),month:m.month,year:m.year}
u.setDate(1)
u.setMonth(u.getMonth()+1)}u.setMonth(a.getMonth()+1)
u.setDate(0)
const p={day:u.getDate(),month:g.month,year:g.yearh}
u.setDate(u.getDate()+1)
u.setDate(u.getDate()+(6-u.getDay()))
u.setDate(u.getDate()+7)
const _=d(u)
let b=e.data("days")
if(!b){b=e.find(".calendar_day_holder")
e.data("days",b)}e.hasClass("mini_month")&&(b=e.find(".day"))
e.find(".calendar_event").remove()
let v=0
let y=m.day
i=m.month
o=m.year
while(y<=_.day||i!=_.month){var k=b.eq(v)
if(k.length>0){const e=k.attr("class").split(" ")
const t=[]
for(let n=0;n<e.length;n++)0==e[n].indexOf("date_")||t.push(e[n])
k.attr("class",t.join(" "))}k.show().addClass("visible").parents("tr").show().addClass("visible")
n={day_number:y}
const t=i<9?"0"+(i+1):i+1
const a=y<10?"0"+y:y
let r=`day_${o}_${t}_${a}`
e.hasClass("mini_month")&&(r="mini_"+r)
k.attr("id",r).addClass(`date_${t}_${a}_${o}`).find(".day_number").text(y).attr("title",`${t}/${a}/${o}`).addClass(`date_${t}_${a}_${o}`)
const s=c[i+1]
k.find("span.screenreader-only:first-child").text(`${y} ${s} ${o}`)
let l=k.children("div")
e.hasClass("mini_month")&&(l=k)
l.removeClass("current_month other_month next_month previous_month today")
if(i==g.month)l.addClass("current_month")
else{l.addClass("other_month")
g.month==(i+1)%12?l.addClass("previous_month"):l.addClass("next_month")}i==h.month&&y==h.day&&o==h.year&&l.addClass("today")
y++
v++
if(f&&y>f.day&&i==f.month||y>p.day&&i==p.month){i+=1
if(i>=12){i-=12
o++}y=1}}while(v<b.length){k=b.eq(v)
k.parents("tr").hide().removeClass("visible")
k.hide().removeClass("visible")
v++}e.hasClass("mini_month")}var h=n("Ce78J")
n("Dhso")
n("aq8L")
n("lBOK")
n("w2hD")
var g=n("B1bN")
var m=n("ph9R")
var f=n("gI0r")
h["a"].preloadRemoteModule()
function p(){const e=r()(".mini_month")
const t=r()("#syllabus")
if(!e||!t)return
let n=e.find(".day.has_event")
n.removeClass("has_event")
let a=n.find(".day_wrapper")
a.removeAttr("role")
a.removeAttr("tabindex")
t.find("tr.date:visible").each((function(){const t=r()(this).find(".day_date").attr("data-date")
n=e.find("#mini_day_"+t)
n.addClass("has_event")
a=n.find(".day_wrapper")
a.attr("role","link")
a.attr("tabindex","0")}))}function _(e){const t=r()(".mini_month")
const n=r()("#syllabus")
r()("tr.date.related, .day.related").removeClass("related")
if(e){t&&t.find("#mini_day_"+e).addClass("related")
n&&n.find("tr.date.events_"+e).addClass("related")}}function b(e,t){const n=r()("#syllabus")
n.find("tr.related_event").removeClass("related_event")
e&&n&&n.find("tr.related-"+e).not(t).addClass("related_event")}function v(){const e=r()("#syllabus")
e.on("mouseenter mouseleave","tr.date",(function(e){let t
"mouseenter"===e.type&&(t=r()(this).find(".day_date").attr("data-date"))
_(t)}))
e.on("mouseenter mouseleave","tr.date.detail_list",(function(e){let t=null
if("mouseenter"===e.type){const e=(r()(this).attr("class")||"").split(/\s+/)
e.some(e=>{if("related-"===e.substr(0,8))return t=e.substr(8)})}b(t,this)}))
p()
const t=r.a.datepicker.formatDate("yy_mm_dd",new Date)
_(t)}function y(e){if(e.length>0){r()("tr.selected").removeClass("selected")
e.addClass("selected")
r()("html, body").scrollTo(e)
e.find("a").first().focus()}}function k(e){r()(".mini_month .day.selected").removeClass("selected")
r()(".mini_month").find("#mini_day_"+e).addClass("selected")}function w(){const e=r()(".mini_month")
const t=e.find(".next_month_link, .prev_month_link")
t.on("click",(function(t){t.preventDefault()
u(e,r()(this).hasClass("next_month_link")?1:-1)
p()}))
const n=function(t){t.preventDefault()
const n=r()(t.target).closest(".mini_calendar_day")[0].id.slice(9)
const i=Array.from(n.split("_")),o=Object(a["a"])(i,3),s=o[0],l=o[1],c=o[2]
u(e,`${l}/${c}/${s}`)
p()
k(n)
r()(".events_"+n).ifExists(e=>setTimeout(()=>y(e),0))}
e.on("keypress",".day_wrapper",e=>{13!==e.which&&32!==e.which||n(e)})
e.on("click",".day_wrapper",n)
e.on("focus blur mouseover mouseout",".day_wrapper",e=>{let t
"mouseout"!==e.type&&"blur"!==e.type&&(t=r()(e.target).closest(".mini_calendar_day")[0].id.slice(9))
_(t)})
r()(".jump_to_today_link").on("click",t=>{t.preventDefault()
const n=r.a.datepicker.formatDate("yy_mm_dd",new Date)
let a
r()("tr.date").each((function(){const e=r()(this).find(".day_date").attr("data-date")
if(e){if(e>n)return false
a=e}}))
u(e,r.a.datepicker.formatDate("mm/dd/yy",new Date))
p()
a||(a=r()("tr.date:first"))
k(n)
y(r()(Object(f["a"])("tr.date.events_"+a)))})}const R=function(e){const t=r()("#course_syllabus")
t.data("syllabus_body",ENV.SYLLABUS_BODY)
const n=r()(".edit_syllabus_link")
if(!n.length)return
function a(){r()(".toggle_html_editor_link").show()
r()(".toggle_rich_editor_link").hide()}const i=r()("#edit_course_syllabus_form")
let o=r()("#course_syllabus_body")
const s=r()("#course_syllabus_details")
i.on("edit",()=>{i.show()
n.hide()
t.hide()
s.hide()
g["a"].hide()
o=h["a"].freshNode(o)
o.val(t.data("syllabus_body"))
h["a"].loadNewEditor(o,{focus:true,manageParent:true})
r()(".jump_to_today_link").focus()})
function l(){r()("#tinymce-parent-of-course_syllabus_body").append(o)}i.on("hide_edit",()=>{i.hide()
n.show()
t.show()
g["a"].show()
const e=r.a.trim(t.html())
s.showIf(!e)
h["a"].destroyRCE(o)
l()
a()
n.focus()})
n.on("click",e=>{e.preventDefault()
i.triggerHandler("edit")})
i.on("click",".toggle_views_link",e=>{e.preventDefault()
h["a"].callOnRCE(o,"toggle")
r()(e.currentTarget).siblings(".toggle_views_link").andSelf().toggle().focus()})
i.on("click",".cancel_button",e=>{e.preventDefault()
h["a"].closeRCE(o)
i.triggerHandler("hide_edit")})
return i.formSubmit({object_name:"course",processData(e){h["a"].closeRCE(o)
const t=h["a"].callOnRCE(o,"get_code")
e["course[syllabus_body]"]=t
return e},beforeSubmit(e){i.triggerHandler("hide_edit")
s.hide()
t.loadingImage()},success(n){if(n.course.settings.syllabus_course_summary!==e)return window.location.reload()
t.loadingImage("remove").html(n.course.syllabus_body)
t.data("syllabus_body",n.course.syllabus_body)
s.hide()
ENV.FEATURES.new_math_equation_handling||m["a"].isMathMLOnPage()&&(m["a"].isMathJaxLoaded()?m["a"].reloadElement("content"):m["a"].loadMathJax(void 0))},error:e=>i.triggerHandler("edit").formErrors(e)})}
t["a"]={bindToEditSyllabus:R,bindToMiniCalendar:w,bindToSyllabus:v}}}])

//# sourceMappingURL=132-c-6362e826ce.js.map