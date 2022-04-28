(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4023,3632],{"2JmY":function(e,a,t){"use strict"
t.r(a)
var n=t("ouhR")
var s=t.n(n)
var c=t("Y/W1")
var r=t.n(c)
var o=t("zO2W")
var i=t("HGxv")
var d=t("8WeW")
Object(d["a"])(JSON.parse('{"ar":{"course_syllabus_5de1b0af":"مناهج المساق"},"ca":{"course_syllabus_5de1b0af":"Temari de l\'assignatura"},"cy":{"course_syllabus_5de1b0af":"Maes Llafur y Cwrs"},"da":{"course_syllabus_5de1b0af":"Fagets læseplan"},"da-x-k12":{"course_syllabus_5de1b0af":"Fagets fagplan"},"de":{"course_syllabus_5de1b0af":"Kursplan"},"el":{"course_syllabus_5de1b0af":"Αναλυτικό Πρόγραμμα Μαθήματος"},"en-AU":{"course_syllabus_5de1b0af":"Course Syllabus"},"en-AU-x-unimelb":{"course_syllabus_5de1b0af":"Subject Overview"},"en-CA":{"course_syllabus_5de1b0af":"Course Syllabus"},"en-GB":{"course_syllabus_5de1b0af":"Course syllabus"},"en-GB-x-lbs":{"course_syllabus_5de1b0af":"Programme syllabus"},"en-GB-x-ukhe":{"course_syllabus_5de1b0af":"Module syllabus"},"es":{"course_syllabus_5de1b0af":"Programa del curso"},"es-ES":{"course_syllabus_5de1b0af":"Programa de la asignatura"},"fa":{"course_syllabus_5de1b0af":"سرفصل درس"},"fi":{"course_syllabus_5de1b0af":"Kurssin opinto-ohjelma"},"fr":{"course_syllabus_5de1b0af":"Descriptif du cours"},"fr-CA":{"course_syllabus_5de1b0af":"Plan de cours"},"he":{"course_syllabus_5de1b0af":"סילבוס הקורס"},"ht":{"course_syllabus_5de1b0af":"Pwogram Kou"},"hu":{"course_syllabus_5de1b0af":"Kurzus tematikája"},"hy":{"course_syllabus_5de1b0af":"Դասընթացի ուսումնական ծրագիր"},"is":{"course_syllabus_5de1b0af":"Kennsluáætlun námskeiðs"},"it":{"course_syllabus_5de1b0af":"Piano di studio corso"},"ja":{"course_syllabus_5de1b0af":"コース要綱"},"ko":{"course_syllabus_5de1b0af":"과목 강의 계획"},"mi":{"course_syllabus_5de1b0af":"mahere akoranga"},"nb":{"course_syllabus_5de1b0af":"Emneoversikt"},"nb-x-k12":{"course_syllabus_5de1b0af":"Fagoversikt"},"nl":{"course_syllabus_5de1b0af":"Cursussyllabus"},"nn":{"course_syllabus_5de1b0af":"Emneoversikt"},"pl":{"course_syllabus_5de1b0af":"Program kursu"},"pt":{"course_syllabus_5de1b0af":"Programa do curso"},"pt-BR":{"course_syllabus_5de1b0af":"Programa do curso"},"ru":{"course_syllabus_5de1b0af":"Программа обучения курса"},"sl":{"course_syllabus_5de1b0af":"Učni načrt predmeta"},"sv":{"course_syllabus_5de1b0af":"Kursöversikt"},"sv-x-k12":{"course_syllabus_5de1b0af":"Kursöversikt"},"th":{"course_syllabus_5de1b0af":"หลักสูตรสำหรับบทเรียน"},"tr":{"course_syllabus_5de1b0af":"Ders Programı"},"uk":{"course_syllabus_5de1b0af":"Програма курсу"},"zh-Hans":{"course_syllabus_5de1b0af":"课程教学大纲"},"zh-Hant":{"course_syllabus_5de1b0af":"課程教學大綱"}}'))
t("jQeR")
t("0sPK")
var l=i["default"].scoped("syllabus")
var _=t("mX+G")
var u=t.n(_)
class f extends u.a.Collection{constructor(e){super()
for(const a of e){a.on("add",(e,a,t)=>this.add(e,t))
a.on("remove",(e,a,t)=>this.remove(e,t))
a.on("reset",(e,a)=>{function t(a,t){return t.get("collection")===e?a.push(t):a}for(var n of this.reduce(t,[]))this.remove(n)
return(()=>{const a=[]
for(n of e.models)a.push(this.add(n))
return a})()})}}fetch(){}comparator(e,a){const t=e.get("start_at")
const n=a.get("start_at")
const s=e.get("end_at")
const c=a.get("end_at")
let r=e.get("title")
let o=a.get("title")
r&&(r=r.toLowerCase())
o&&(o=o.toLowerCase())
if(t!==n){if(!t)return 1
if(!n)return-1
return t<n?-1:1}if(s!==c){if(!s)return 1
if(!c)return-1
return s<c?1:-1}if(r<o)return-1
if(r>o)return 1
return 0}}var p=t("TnsN")
class h extends p["a"]{initialize(e,a="event"){this.parse=this.parse.bind(this)
this.context_codes=e
this.type=a
return super.initialize(...arguments)}fetch(e={}){null==e.remove&&(e.remove=false)
null==e.data&&(e.data={})
e.data.type=this.type
e.data.context_codes=this.context_codes
null==e.data.all_events&&(e.data.all_events="1")
e.data.excludes=["assignment","description","child_events"]
return super.fetch(e)}parse(...e){let a
const t=this.type
switch(t){case"assignment":a=function(e){e.related_id=e.id
let a=false
r.a.each(null!=e.assignment_overrides?e.assignment_overrides:[],t=>{if(!a){e.id=`${e.id}_override_${t.id}`
return a=true}})
return e}
break
case"event":a=function(e){e.related_id=e.id=`${t}_${e.id}`
e.parent_event_id&&(e.related_id=`${t}_${e.parent_event_id}`)
return e}}const n=[]
r.a.each(super.parse(...e),e=>{e.hidden||n.push(a(e))})
return n}}h.prototype.url="/api/v1/calendar_events"
class b extends p["a"]{initialize(e,a="reservable"){this.context_codes=e
this.scope=a
return super.initialize(...arguments)}fetch(e={}){null==e.remove&&(e.remove=false)
null==e.data&&(e.data={})
e.data.scope=this.scope
e.data.context_codes=this.context_codes
null==e.data.include_past_appointments&&(e.data.include_past_appointments="1")
return super.fetch(e)}parse(e){r.a.each(super.parse(...arguments),e=>e.related_id=e.id="appointment_group_"+e.id)
return e}}b.prototype.url="/api/v1/appointment_groups"
var m=t("VTBJ")
class g extends p["a"]{constructor(e){super()
this.url="/api/v1/planner/items"
this.context_codes=e}fetch(e){const a=Object(m["a"])(Object(m["a"])({},e.data),{},{context_codes:this.context_codes,filter:"all_ungraded_todo_items"})
const t=Object(m["a"])(Object(m["a"])({},e),{},{data:a})
return super.fetch(t)}parse(e){return e.map(e=>({id:`planner_${e.plannable_type}_${e.plannable_id}`,type:e.plannable_type,title:e.plannable.title,todo_at:e.plannable.todo_date,start_at:e.plannable.todo_date,html_url:e.html_url}))}}var v=t("3O+N")
var y=t.n(v)
Object(d["a"])(JSON.parse('{"ar":{"assignment_976578a8":"المهمة","calendar_event_89aadc1c":"حدث التقويم","discussion_topic_dc85ad4c":"موضوع المناقشة","due_by_c263dc10":"مستحق بحلول","page_50c4823d":"صفحة","to_c4c44f4b":"إلى","to_do_6ac7b2dc":"قائمة المهام:"},"ca":{"assignment_976578a8":"Activitat","calendar_event_89aadc1c":"Esdeveniment al calendari","discussion_topic_dc85ad4c":"Tema de debat","due_by_c263dc10":"venç el","page_50c4823d":"Pàgina","to_c4c44f4b":"al","to_do_6ac7b2dc":"tasques pendents:"},"cy":{"assignment_976578a8":"Aseiniad","calendar_event_89aadc1c":"Digwyddiad Calendr","discussion_topic_dc85ad4c":"Pwnc Trafod","due_by_c263dc10":"erbyn","page_50c4823d":"Tudalen","to_c4c44f4b":"at","to_do_6ac7b2dc":"Tasgau i’w gwneud:"},"da":{"assignment_976578a8":"Opgave","calendar_event_89aadc1c":"Kalenderbegivenhed","discussion_topic_dc85ad4c":"Diskussionsemne","due_by_c263dc10":"forfalder","page_50c4823d":"Side","to_c4c44f4b":"til","to_do_6ac7b2dc":"opgaveliste:"},"da-x-k12":{"assignment_976578a8":"Opgave","calendar_event_89aadc1c":"Kalenderbegivenhed","discussion_topic_dc85ad4c":"Diskussionsemne","due_by_c263dc10":"forfalder","page_50c4823d":"Side","to_c4c44f4b":"til","to_do_6ac7b2dc":"opgaveliste:"},"de":{"assignment_976578a8":"Aufgabe","calendar_event_89aadc1c":"Kalenderereignis","discussion_topic_dc85ad4c":"Diskussionsthema","due_by_c263dc10":"fällig um","page_50c4823d":"Seite","to_c4c44f4b":"bis/an/um","to_do_6ac7b2dc":"zu erledigen:"},"el":{"assignment_976578a8":"Εργασία","calendar_event_89aadc1c":"Γεγονός στο Ημερολόγιο","discussion_topic_dc85ad4c":"Θέμα συζήτησης","due_by_c263dc10":"προθεσμία έως","to_c4c44f4b":"σε"},"en-AU":{"assignment_976578a8":"Assignment","calendar_event_89aadc1c":"Calendar Event","discussion_topic_dc85ad4c":"Discussion Topic","due_by_c263dc10":"due by","page_50c4823d":"Page","to_c4c44f4b":"to","to_do_6ac7b2dc":"to do:"},"en-AU-x-unimelb":{"assignment_976578a8":"Assignment","calendar_event_89aadc1c":"Calendar Event","discussion_topic_dc85ad4c":"Discussion Topic","due_by_c263dc10":"due by","page_50c4823d":"Page","to_c4c44f4b":"to","to_do_6ac7b2dc":"to do:"},"en-CA":{"assignment_976578a8":"Assignment","calendar_event_89aadc1c":"Calendar Event","discussion_topic_dc85ad4c":"Discussion Topic","due_by_c263dc10":"due by","page_50c4823d":"Page","to_c4c44f4b":"to","to_do_6ac7b2dc":"to do:"},"en-GB":{"assignment_976578a8":"Assignment","calendar_event_89aadc1c":"Calendar event","discussion_topic_dc85ad4c":"Discussion topic","due_by_c263dc10":"due by","page_50c4823d":"Page","to_c4c44f4b":"to","to_do_6ac7b2dc":"to do:"},"en-GB-x-lbs":{"assignment_976578a8":"Task","discussion_topic_dc85ad4c":"Discussion topic","due_by_c263dc10":"due by","page_50c4823d":"Page","to_c4c44f4b":"to","to_do_6ac7b2dc":"to do:"},"en-GB-x-ukhe":{"assignment_976578a8":"Assignment","calendar_event_89aadc1c":"Calendar event","discussion_topic_dc85ad4c":"Discussion topic","due_by_c263dc10":"due by","page_50c4823d":"Page","to_c4c44f4b":"to","to_do_6ac7b2dc":"to do:"},"es":{"assignment_976578a8":"Tarea","calendar_event_89aadc1c":"Evento del calendario","discussion_topic_dc85ad4c":"Tema del foro de discusión","due_by_c263dc10":"fecha de entrega: ","page_50c4823d":"Página","to_c4c44f4b":"para","to_do_6ac7b2dc":"Para hacer:"},"es-ES":{"assignment_976578a8":"Actividad","calendar_event_89aadc1c":"Evento del calendario","discussion_topic_dc85ad4c":"Tema del foro","due_by_c263dc10":"fecha de entrega","page_50c4823d":"Página","to_c4c44f4b":"hasta","to_do_6ac7b2dc":"tareas endientes:"},"fa":{"assignment_976578a8":"تکلیف","calendar_event_89aadc1c":"رویداد تقویم","discussion_topic_dc85ad4c":"موضوع بحث","due_by_c263dc10":"مهلت","page_50c4823d":"صفحه","to_c4c44f4b":"تا","to_do_6ac7b2dc":"برای انجام:"},"fi":{"assignment_976578a8":"Tehtävä","calendar_event_89aadc1c":"Kalenteritapahtuma","discussion_topic_dc85ad4c":"Keskustelun aihe","due_by_c263dc10":"määräpäivä","page_50c4823d":"Sivu","to_c4c44f4b":"-","to_do_6ac7b2dc":"tehtävä:"},"fr":{"assignment_976578a8":"Travail","calendar_event_89aadc1c":"Événement de calendrier","discussion_topic_dc85ad4c":"Sujet de discussion","due_by_c263dc10":"À rendre pour le","page_50c4823d":"Page","to_c4c44f4b":"à","to_do_6ac7b2dc":"à faire :"},"fr-CA":{"assignment_976578a8":"Tâche","calendar_event_89aadc1c":"Événement du calendrier","discussion_topic_dc85ad4c":"Sujet de discussion","due_by_c263dc10":"À rendre pour le","page_50c4823d":"Page","to_c4c44f4b":"à","to_do_6ac7b2dc":"a faire :"},"he":{"assignment_976578a8":"משימה","calendar_event_89aadc1c":"אירוע יומן","discussion_topic_dc85ad4c":"נושא דיון","due_by_c263dc10":"תאריך יעד עד","to_c4c44f4b":"עבור"},"ht":{"assignment_976578a8":"Sesyon","calendar_event_89aadc1c":"Kalandriye Aktivite","discussion_topic_dc85ad4c":"Sijè Diskisyon","due_by_c263dc10":"delè pou","page_50c4823d":"Paj","to_c4c44f4b":"pou","to_do_6ac7b2dc":"tach:"},"hu":{"assignment_976578a8":"Feladat","calendar_event_89aadc1c":"Naptáresemény","discussion_topic_dc85ad4c":"Fórumtéma","due_by_c263dc10":"határidő:","page_50c4823d":"Oldal","to_c4c44f4b":" - ","to_do_6ac7b2dc":"Teendők:"},"hy":{"assignment_976578a8":"Հանձնարարություն","calendar_event_89aadc1c":"Օրացուցային միջոցառում","discussion_topic_dc85ad4c":"Քննարկման թեմա","due_by_c263dc10":"կատարել մինչև","to_c4c44f4b":"Ում"},"is":{"assignment_976578a8":"Verkefni","calendar_event_89aadc1c":"Dagatalsviðburður","discussion_topic_dc85ad4c":"Umræðuefni","due_by_c263dc10":"Skil fyrir","page_50c4823d":"Síða","to_c4c44f4b":"til","to_do_6ac7b2dc":"verkefnalisti:"},"it":{"assignment_976578a8":"Compito","calendar_event_89aadc1c":"Evento del calendario","discussion_topic_dc85ad4c":"Argomento di discussione","due_by_c263dc10":"scadenza entro","page_50c4823d":"Pagina","to_c4c44f4b":"a","to_do_6ac7b2dc":"per farlo:"},"ja":{"assignment_976578a8":"課題","calendar_event_89aadc1c":"予定表のイベント","discussion_topic_dc85ad4c":"ディスカッション トピック","due_by_c263dc10":"期限","page_50c4823d":"ページ","to_c4c44f4b":"移動先","to_do_6ac7b2dc":"タスク："},"ko":{"assignment_976578a8":"과제","calendar_event_89aadc1c":"행사","discussion_topic_dc85ad4c":"토론 주제","to_c4c44f4b":"다음 요일로"},"mi":{"assignment_976578a8":"Whakataunga","calendar_event_89aadc1c":"Tauwhāinga Māramataka","discussion_topic_dc85ad4c":"Kōrerorero Kaupapa","due_by_c263dc10":"e tika ana i te","page_50c4823d":"Whārangi","to_c4c44f4b":"kī","to_do_6ac7b2dc":"hei mahi:"},"nb":{"assignment_976578a8":"Oppgave","calendar_event_89aadc1c":"Kalenderhendelse","discussion_topic_dc85ad4c":"Diskusjonstema","due_by_c263dc10":"Frist ved","page_50c4823d":"Side","to_c4c44f4b":"til","to_do_6ac7b2dc":"gjøremål:"},"nb-x-k12":{"assignment_976578a8":"Oppgave","calendar_event_89aadc1c":"Kalenderhendelse","discussion_topic_dc85ad4c":"Diskusjonstema","due_by_c263dc10":"Frist ved","page_50c4823d":"Side","to_c4c44f4b":"til","to_do_6ac7b2dc":"gjøremål:"},"nl":{"assignment_976578a8":"Opdracht","calendar_event_89aadc1c":"Gebeurtenis op kalender","discussion_topic_dc85ad4c":"Discussieonderwerp","due_by_c263dc10":"inleveren om","page_50c4823d":"Pagina","to_c4c44f4b":"tot","to_do_6ac7b2dc":"To-do:"},"nn":{"assignment_976578a8":"Oppgåve","calendar_event_89aadc1c":"Kalenderhending","discussion_topic_dc85ad4c":"Diskusjonsemne","due_by_c263dc10":"frist innan:","page_50c4823d":"Side","to_c4c44f4b":"til","to_do_6ac7b2dc":"gjeremål:"},"pl":{"assignment_976578a8":"Zadanie","calendar_event_89aadc1c":"Wydarzenie w kalendarzu","discussion_topic_dc85ad4c":"Temat dyskusji","due_by_c263dc10":"termin dostarczenia","page_50c4823d":"Strona","to_c4c44f4b":"do","to_do_6ac7b2dc":"do zrobienia:"},"pt":{"assignment_976578a8":"Tarefa","calendar_event_89aadc1c":"Evento do calendário","discussion_topic_dc85ad4c":"Tópico de discussão","due_by_c263dc10":"prazo de entrega","page_50c4823d":"Página","to_c4c44f4b":"para","to_do_6ac7b2dc":"tarefa:"},"pt-BR":{"assignment_976578a8":"Tarefa","calendar_event_89aadc1c":"Evento do calendário","discussion_topic_dc85ad4c":"Assunto do fórum","due_by_c263dc10":"entrega até: ","page_50c4823d":"Página","to_c4c44f4b":"a","to_do_6ac7b2dc":"lista de tarefas:"},"ru":{"assignment_976578a8":"Задание","calendar_event_89aadc1c":"Событие календаря","discussion_topic_dc85ad4c":"Тема обсуждения","due_by_c263dc10":"выполнить до","page_50c4823d":"Страница","to_c4c44f4b":"к","to_do_6ac7b2dc":"выполните:"},"sl":{"assignment_976578a8":"Naloga","calendar_event_89aadc1c":"Dogodek koledarja","discussion_topic_dc85ad4c":"Tema razprave","due_by_c263dc10":"rok do:","page_50c4823d":"Stran","to_c4c44f4b":"naslovnik","to_do_6ac7b2dc":"Čakajoča opravila:"},"sv":{"assignment_976578a8":"Uppgift","calendar_event_89aadc1c":"Kalenderhändelse","discussion_topic_dc85ad4c":"Diskussionsämne","due_by_c263dc10":"ska lämnas in senast","page_50c4823d":"Sida","to_c4c44f4b":"till","to_do_6ac7b2dc":"att göra:"},"sv-x-k12":{"assignment_976578a8":"Uppgift","calendar_event_89aadc1c":"Kalenderhändelse","discussion_topic_dc85ad4c":"Diskussionsämne","due_by_c263dc10":"ska lämnas in senast","page_50c4823d":"Sida","to_c4c44f4b":"till","to_do_6ac7b2dc":"att göra:"},"th":{"assignment_976578a8":"ภารกิจ","calendar_event_89aadc1c":"กิจกรรมในปฏิทิน","discussion_topic_dc85ad4c":"หัวข้อการพูดคุย","due_by_c263dc10":"ครบกำหนดภายใน","page_50c4823d":"หน้าเพจ","to_c4c44f4b":"เป็น","to_do_6ac7b2dc":"สิ่งที่ต้องทำ:"},"tr":{"assignment_976578a8":"Ödev","calendar_event_89aadc1c":"Takvim Olayı","discussion_topic_dc85ad4c":"Tartışma Konusu","due_by_c263dc10":"son tarih","page_50c4823d":"Sayfa","to_c4c44f4b":"ile"},"uk":{"assignment_976578a8":"Завдання","calendar_event_89aadc1c":"Календарна подія","discussion_topic_dc85ad4c":"Тема для обговорення","due_by_c263dc10":"очікується до","page_50c4823d":"Сторінка","to_c4c44f4b":"до"},"zh-Hans":{"assignment_976578a8":"作业","calendar_event_89aadc1c":"日历事件","discussion_topic_dc85ad4c":"讨论主题","due_by_c263dc10":"到期时间","page_50c4823d":"页面","to_c4c44f4b":"到","to_do_6ac7b2dc":"待办事项："},"zh-Hant":{"assignment_976578a8":"作業","calendar_event_89aadc1c":"行事曆活動","discussion_topic_dc85ad4c":"討論主題","due_by_c263dc10":"截止日期","page_50c4823d":"頁面","to_c4c44f4b":"至","to_do_6ac7b2dc":"待辦事項："}}'))
i["default"].scoped("courses.syllabus")
t("BGrI")
var k=t("dbrX")
var w=y.a.default
var T=w.template,S=w.templates=w.templates||{}
var E="/work/canvas-deploy/generated/ui/features/syllabus/jst/Syllabus"
S[E]=T((function(e,a,t,n,s){this.compilerInfo=[4,">= 1.0.0"]
t=this.merge(t,e.helpers)
s=s||{}
var c,r=t.helperMissing,o=this.escapeExpression,i="function",d=this
function l(e,a){var n,s=""
s+="\n"
n=t.each.call(e,e&&e.events,{hash:{},inverse:d.noop,fn:d.program(2,_,a),data:a});(n||0===n)&&(s+=n)
s+="\n"
return s}function _(e,a){var n,s,c,l=""
l+='\n\n<tr\n  class="date detail_list '
n=t["if"].call(e,e&&e.passed,{hash:{},inverse:d.noop,fn:d.program(3,u,a),data:a});(n||0===n)&&(l+=n)
n=t["if"].call(e,e&&e.date,{hash:{},inverse:d.noop,fn:d.program(5,f,a),data:a});(n||0===n)&&(l+=n)
l+=" syllabus_"
if(s=t.type)n=s.call(e,{hash:{},data:a})
else{s=e&&e.type
n=typeof s===i?s.call(e,{hash:{},data:a}):s}l+=o(n)+" related-"
if(s=t.related_id)n=s.call(e,{hash:{},data:a})
else{s=e&&e.related_id
n=typeof s===i?s.call(e,{hash:{},data:a}):s}l+=o(n)
n=t["if"].call(e,e&&e.override,{hash:{},inverse:d.noop,fn:d.program(7,p,a),data:a});(n||0===n)&&(l+=n)
l+='"\n  data-workflow-state="'
if(s=t.workflow_state)n=s.call(e,{hash:{},data:a})
else{s=e&&e.workflow_state
n=typeof s===i?s.call(e,{hash:{},data:a}):s}l+=o(n)+'">\n  '
n=t["if"].call(e,null==a||false===a?a:a.first,{hash:{},inverse:d.noop,fn:d.program(9,h,a),data:a});(n||0===n)&&(l+=n)
l+='\n  <td class="name'
n=t.unless.call(e,e&&e.last,{hash:{},inverse:d.noop,fn:d.program(14,g,a),data:a});(n||0===n)&&(l+=n)
l+='">\n    '
n=(s=t.ifEqual||e&&e.ifEqual,c={hash:{},inverse:d.program(18,y,a),fn:d.program(16,v,a),data:a},s?s.call(e,e&&e.type,"assignment",c):r.call(e,"ifEqual",e&&e.type,"assignment",c));(n||0===n)&&(l+=n)
l+="\n    "
n=t["if"].call(e,e&&e.html_url,{hash:{},inverse:d.program(28,j,a),fn:d.program(26,E,a),data:a});(n||0===n)&&(l+=n)
l+="\n    "
n=t["if"].call(e,e&&e.override,{hash:{},inverse:d.noop,fn:d.program(30,x,a),data:a});(n||0===n)&&(l+=n)
l+='\n  </td>\n  <td class="dates'
n=t.unless.call(e,e&&e.last,{hash:{},inverse:d.noop,fn:d.program(14,g,a),data:a});(n||0===n)&&(l+=n)
l+='">\n    '
n=t["if"].call(e,e&&e.start_at,{hash:{},inverse:d.program(44,R,a),fn:d.program(32,C,a),data:a});(n||0===n)&&(l+=n)
l+="\n  </td>\n</tr>\n"
return l}function u(e,a){return" date_passed"}function f(e,a){var n,s,c=""
c+=" events_"+o((n=t.strftime||e&&e.strftime,s={hash:{},data:a},n?n.call(e,e&&e.date,"%Y_%m_%d",s):r.call(e,"strftime",e&&e.date,"%Y_%m_%d",s)))
return c}function p(e,a){return" special_date"}function h(e,a){var n,s,c=""
c+='\n  <td scope="row" rowspan="'
if(s=t.eventCount)n=s.call(e,{hash:{},data:a})
else{s=e&&e.eventCount
n=typeof s===i?s.call(e,{hash:{},data:a}):s}c+=o(n)+'" valign="top" class="day_date"\n    data-date="'
n=t["if"].call(e,e&&e.date,{hash:{},inverse:d.noop,fn:d.program(10,b,a),data:a});(n||0===n)&&(c+=n)
c+='">\n    '
n=t["if"].call(e,e&&e.orig_date,{hash:{},inverse:d.noop,fn:d.program(12,m,a),data:a});(n||0===n)&&(c+=n)
c+="\n  </td>\n  "
return c}function b(e,a){var n,s
return o((n=t.strftime||e&&e.strftime,s={hash:{},data:a},n?n.call(e,e&&e.date,"%Y_%m_%d",s):r.call(e,"strftime",e&&e.date,"%Y_%m_%d",s)))}function m(e,a){var n,s,c=""
c+="\n    "+o((n=t.tDateToString||e&&e.tDateToString,s={hash:{},data:a},n?n.call(e,e&&e.orig_date,"medium_with_weekday",s):r.call(e,"tDateToString",e&&e.orig_date,"medium_with_weekday",s)))+"\n    "
return c}function g(e,a){return" not_last"}function v(e,a){var n,s,c=""
c+='\n    <span class="screenreader-only">'+o((n=t.t||e&&e.t,s={hash:{i18n_inferred_key:true},data:a},n?n.call(e,"assignment_976578a8","Assignment",s):r.call(e,"t","assignment_976578a8","Assignment",s)))+"</span>\n    "+o((n=t.addIcon||e&&e.addIcon,s={hash:{},data:a},n?n.call(e,"assignment",s):r.call(e,"addIcon","assignment",s)))+"\n    "
return c}function y(e,a){var n,s,c
n=(s=t.ifEqual||e&&e.ifEqual,c={hash:{},inverse:d.program(21,w,a),fn:d.program(19,k,a),data:a},s?s.call(e,e&&e.type,"wiki_page",c):r.call(e,"ifEqual",e&&e.type,"wiki_page",c))
return n||0===n?n:""}function k(e,a){var n,s,c=""
c+='\n    <span class="screenreader-only">'+o((n=t.t||e&&e.t,s={hash:{i18n_inferred_key:true},data:a},n?n.call(e,"page_50c4823d","Page",s):r.call(e,"t","page_50c4823d","Page",s)))+"</span>\n    "+o((n=t.addIcon||e&&e.addIcon,s={hash:{},data:a},n?n.call(e,"document",s):r.call(e,"addIcon","document",s)))+"\n    "
return c}function w(e,a){var n,s,c
n=(s=t.ifEqual||e&&e.ifEqual,c={hash:{},inverse:d.program(24,S,a),fn:d.program(22,T,a),data:a},s?s.call(e,e&&e.type,"discussion_topic",c):r.call(e,"ifEqual",e&&e.type,"discussion_topic",c))
return n||0===n?n:""}function T(e,a){var n,s,c=""
c+='\n    <span class="screenreader-only">'+o((n=t.t||e&&e.t,s={hash:{i18n_inferred_key:true},data:a},n?n.call(e,"discussion_topic_dc85ad4c","Discussion Topic",s):r.call(e,"t","discussion_topic_dc85ad4c","Discussion Topic",s)))+"</span>\n    "+o((n=t.addIcon||e&&e.addIcon,s={hash:{},data:a},n?n.call(e,"discussion",s):r.call(e,"addIcon","discussion",s)))+"\n    "
return c}function S(e,a){var n,s,c=""
c+='\n    <span class="screenreader-only">'+o((n=t.t||e&&e.t,s={hash:{i18n_inferred_key:true},data:a},n?n.call(e,"calendar_event_89aadc1c","Calendar Event",s):r.call(e,"t","calendar_event_89aadc1c","Calendar Event",s)))+"</span>\n    "+o((n=t.addIcon||e&&e.addIcon,s={hash:{},data:a},n?n.call(e,"calendar-month",s):r.call(e,"addIcon","calendar-month",s)))+"\n    "
return c}function E(e,a){var n,s,c=""
c+='\n    <a href="'
if(s=t.html_url)n=s.call(e,{hash:{},data:a})
else{s=e&&e.html_url
n=typeof s===i?s.call(e,{hash:{},data:a}):s}c+=o(n)+'">'
if(s=t.title)n=s.call(e,{hash:{},data:a})
else{s=e&&e.title
n=typeof s===i?s.call(e,{hash:{},data:a}):s}c+=o(n)+"</a>\n    "
return c}function j(e,a){var n,s,c=""
c+="\n    "
if(s=t.title)n=s.call(e,{hash:{},data:a})
else{s=e&&e.title
n=typeof s===i?s.call(e,{hash:{},data:a}):s}c+=o(n)+"\n    "
return c}function x(e,a){var t,n=""
n+='\n    <div class="special_date_title">('+o((t=(t=e&&e.override,null==t||false===t?t:t.title),typeof t===i?t.apply(e):t))+")</div>\n    "
return n}function C(e,a){var n,s=""
s+="\n    "
n=t["if"].call(e,e&&e.due_at,{hash:{},inverse:d.program(35,A,a),fn:d.program(33,D,a),data:a});(n||0===n)&&(s+=n)
s+="\n    "
return s}function D(e,a){var n,s,c,i=""
i+="\n    "+o((s=t.t||e&&e.t,c={hash:{scope:"courses.syllabus"},data:a},s?s.call(e,"due by",c):r.call(e,"t","due by",c)))+" <span "
n=(s=t.unfudge||e&&e.unfudge,c={hash:{},data:a},s?s.call(e,e&&e.due_at,c):r.call(e,"unfudge",e&&e.due_at,c))
i+=o((s=t.contextSensitiveDatetimeTitle||e&&e.contextSensitiveDatetimeTitle,c={hash:{},data:a},s?s.call(e,n,c):r.call(e,"contextSensitiveDatetimeTitle",n,c)))+">"+o((s=t.tTimeHours||e&&e.tTimeHours,c={hash:{},data:a},s?s.call(e,e&&e.due_at,c):r.call(e,"tTimeHours",e&&e.due_at,c)))+"</span>\n    "
return i}function A(e,a){var n
n=t["if"].call(e,e&&e.todo_at,{hash:{},inverse:d.program(38,P,a),fn:d.program(36,O,a),data:a})
return n||0===n?n:""}function O(e,a){var n,s,c,i=""
i+="\n    "+o((s=t.t||e&&e.t,c={hash:{scope:"courses.syllabus"},data:a},s?s.call(e,"to do:",c):r.call(e,"t","to do:",c)))+" <span "
n=(s=t.unfudge||e&&e.unfudge,c={hash:{},data:a},s?s.call(e,e&&e.todo_at,c):r.call(e,"unfudge",e&&e.todo_at,c))
i+=o((s=t.contextSensitiveDatetimeTitle||e&&e.contextSensitiveDatetimeTitle,c={hash:{},data:a},s?s.call(e,n,c):r.call(e,"contextSensitiveDatetimeTitle",n,c)))+">"+o((s=t.tTimeHours||e&&e.tTimeHours,c={hash:{},data:a},s?s.call(e,e&&e.todo_at,c):r.call(e,"tTimeHours",e&&e.todo_at,c)))+"</span>\n    "
return i}function P(e,a){var n,s,c,i=""
i+="\n    <span "
n=(s=t.unfudge||e&&e.unfudge,c={hash:{},data:a},s?s.call(e,e&&e.start_at,c):r.call(e,"unfudge",e&&e.start_at,c))
i+=o((s=t.contextSensitiveDatetimeTitle||e&&e.contextSensitiveDatetimeTitle,c={hash:{},data:a},s?s.call(e,n,c):r.call(e,"contextSensitiveDatetimeTitle",n,c)))+">"+o((s=t.tTimeHours||e&&e.tTimeHours,c={hash:{},data:a},s?s.call(e,e&&e.start_at,c):r.call(e,"tTimeHours",e&&e.start_at,c)))+"</span>\n    "
n=t.unless.call(e,e&&e.same_time,{hash:{},inverse:d.noop,fn:d.program(39,N,a),data:a});(n||0===n)&&(i+=n)
i+="\n    "
return i}function N(e,a){var n,s,c,i=""
i+="\n    "+o((s=t.t||e&&e.t,c={hash:{scope:"courses.syllabus"},data:a},s?s.call(e,"to",c):r.call(e,"t","to",c)))+"\n    <span "
n=(s=t.unfudge||e&&e.unfudge,c={hash:{},data:a},s?s.call(e,e&&e.end_at,c):r.call(e,"unfudge",e&&e.end_at,c))
i+=o((s=t.contextSensitiveDatetimeTitle||e&&e.contextSensitiveDatetimeTitle,c={hash:{},data:a},s?s.call(e,n,c):r.call(e,"contextSensitiveDatetimeTitle",n,c)))+">\n      "
n=t["if"].call(e,e&&e.same_day,{hash:{},inverse:d.program(42,z,a),fn:d.program(40,F,a),data:a});(n||0===n)&&(i+=n)
i+="\n    </span>\n    "
return i}function F(e,a){var n,s,c=""
c+="\n      "+o((n=t.tTimeHours||e&&e.tTimeHours,s={hash:{},data:a},n?n.call(e,e&&e.end_at,s):r.call(e,"tTimeHours",e&&e.end_at,s)))+"\n      "
return c}function z(e,a){var n,s,c=""
c+="\n      "+o((n=t.tEventToString||e&&e.tEventToString,s={hash:{},data:a},n?n.call(e,e&&e.end_at,"short","tiny_on_the_hour",s):r.call(e,"tEventToString",e&&e.end_at,"short","tiny_on_the_hour",s)))+"\n      "
return c}function R(e,a){return"\n    &nbsp;\n    "}c=t.each.call(a,a&&a.dates,{hash:{},inverse:d.noop,fn:d.program(1,l,s),data:s})
return c||0===c?c:""}))
k["a"].loadStylesheetForJST({id:"1e",bundle:"jst/courses/Syllabus"})
var j=S[E]
class x extends u.a.View{static initClass(){this.prototype.template=j}initialize({can_read:e,is_valid_user:a}){this.can_read=e
this.is_valid_user=a
return super.initialize(...arguments)}toJSON(){const e=new Date
const a=new Date(e.getFullYear(),e.getMonth(),e.getDate())
const t=this.can_read
const n=this.can_read&&this.is_valid_user
const c={}
let o=null
let i=null
const d=function(e,d){let l,_,u,f,p
let h=d.related_id
null==h&&(h=d.id)
"assignment"===d.type?t&&(u=d.html_url):n&&(u=d.html_url)
const b=d.title
d.start_at&&(f=s.a.fudgeDateForProfileTimezone(d.start_at))
d.end_at&&(_=s.a.fudgeDateForProfileTimezone(d.end_at))
"assignment"===d.type?l=f:"wiki_page"!==d.type&&"discussion_topic"!==d.type||(p=s.a.fudgeDateForProfileTimezone(d.todo_at))
let m=null
r.a.each(null!=d.assignment_overrides?d.assignment_overrides:[],e=>{null==m&&(m={})
return m.title=e.title})
let g=null
let v=null
if(f){g=new Date(f.getFullYear(),f.getMonth(),f.getDate())
v=Date.parse(d.start_at)}let y=null
_&&(y=new Date(_.getFullYear(),_.getMonth(),_.getDate()))
if(o&&(null!=o.date?o.date.getTime():void 0)===(null!=g?g.getTime():void 0))i&&(i.last=false)
else{o={date:g,orig_date:v,passed:g&&g<a,events:[]}
e.push(o)
i=null}i={related_id:h,type:d.type,title:b,html_url:u,start_at:f,end_at:_,due_at:l,orig_date:v,todo_at:p,same_day:(null!=g?g.getTime():void 0)===(null!=y?y.getTime():void 0),same_time:(null!=f?f.getTime():void 0)===(null!=_?_.getTime():void 0),last:true,override:m,json:d,workflow_state:d.workflow_state}
o.events.push(i)
o.events.forEach(e=>{e.eventCount=o.events.length
e.date=o.date
e.passed=o.passed})
h in c||(c[h]=[])
c[h].push(i)
return e}
const l=r.a.reduce(super.toJSON(...arguments),d,[])
let _=false
for(const e in c){const a=c[e]
if(1===a.length)a[0].override=null
else for(const e of Array.from(a))_|=null!==e.override}return{dates:l,overrides_present:_}}}x.initClass()
var C=t("jFoo")
var D=t("3lLS")
var A=t.n(D)
const O=[new h([ENV.context_asset_string],"event"),new h([ENV.context_asset_string],"assignment")]
if(ENV.current_user_id){O.push(new b([ENV.context_asset_string],"reservable"))
O.push(new b([ENV.context_asset_string],"manageable"))}O.push(new g([ENV.context_asset_string]))
const P=r.a.map(O,e=>{const a=s.a.Deferred()
const t=()=>a.reject()
const n=()=>e.canFetch("next")?e.fetch({page:"next",success:n,error:t}):a.resolve()
e.fetch({data:{per_page:ENV.SYLLABUS_PER_PAGE||50},success:n,error:t})
return a})
A()(()=>{const e=new f(O)
const a=new x({el:"#syllabusTableBody",collection:e,can_read:ENV.CAN_READ,is_valid_user:!!ENV.current_user_id})
const n=document.getElementById("immersive_reader_mount_point")
const c=document.getElementById("immersive_reader_mobile_mount_point");(n||c)&&t.e(4082).then(t.bind(null,"AZYJ")).then(e=>{const a=()=>document.querySelector("#course_syllabus").innerHTML
const t=l.t("Course Syllabus")
let r
r=s.a.trim(a())?a:()=>document.querySelector("#course_syllabus_details").innerHTML
n&&e.initializeReaderButton(n,{content:r,title:t})
c&&e.initializeReaderButton(c,{content:r,title:t})}).catch(e=>{console.log("Error loading immersive readers.",e)})
s.a.when.apply(void 0,P).then(()=>{a.render()
o["a"].bindToSyllabus()}).fail(()=>{})
s()("#loading_indicator").replaceWith('<img src="/images/ajax-reload-animated.gif">')
o["a"].bindToEditSyllabus(true)
o["a"].bindToMiniCalendar()})
Object(C["b"])()},G4i8:function(e,a,t){var n={"./__tests__/lti.resourceImported.test.js":["LFe7",4136],"./__tests__/lti.screenReaderAlert.test.js":["0Guc",4137],"./__tests__/lti.showAlert.test.js":["+y7l",4138],"./__tests__/requestFullWindowLaunch.test.js":["o6ta",4139],"./lti.enableScrollEvents.js":["HVU3",4200],"./lti.fetchWindowSize.js":["OANa",4201],"./lti.frameResize.js":["bSyB",4129],"./lti.removeUnloadMessage.js":["tjuu",4140],"./lti.resourceImported.js":["FC2N",4202],"./lti.screenReaderAlert.js":["YYEg",4203],"./lti.scrollToTop.js":["W/R1",4204],"./lti.setUnloadMessage.js":["6fDN",4141],"./lti.showAlert.js":["onLg",4205],"./lti.showModuleNavigation.js":["NSTA",4206],"./requestFullWindowLaunch.js":["8IHO",4207],"./toggleCourseNavigationMenu.js":["ECMy",3630,4208]}
function s(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'")
a.code="MODULE_NOT_FOUND"
throw a}))
var a=n[e],s=a[0]
return Promise.all(a.slice(1).map(t.e)).then((function(){return t(s)}))}s.keys=function(){return Object.keys(n)}
s.id="G4i8"
e.exports=s},QLaP:function(e,a,t){"use strict"
var n=function(e,a,t,n,s,c,r,o){false
if(!e){var i
if(void 0===a)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var d=[t,n,s,c,r,o]
var l=0
i=new Error(a.replace(/%s/g,(function(){return d[l++]})))
i.name="Invariant Violation"}i.framesToPop=1
throw i}}
e.exports=n},TnsN:function(e,a,t){"use strict"
var n=t("ouhR")
var s=t.n(n)
var c=t("mX+G")
var r=t.n(c)
var o=t("Y/W1")
var i=t.n(o)
var d,l=function(e,a){return function(){return e.apply(a,arguments)}},_=function(e,a){for(var t in a)u.call(a,t)&&(e[t]=a[t])
function n(){this.constructor=e}n.prototype=a.prototype
e.prototype=new n
e.__super__=a.prototype
return e},u={}.hasOwnProperty,f=[].slice,p=[].indexOf||function(e){for(var a=0,t=this.length;a<t;a++)if(a in this&&this[a]===e)return a
return-1}
d=function(e){null==e&&(e="")
return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}
a["a"]=function(e){_(a,e)
function a(){this._setStateAfterFetch=l(this._setStateAfterFetch,this)
return a.__super__.constructor.apply(this,arguments)}a.prototype.nameRegex=/rel="([a-z]+)/
a.prototype.linkRegex=/^<([^>]+)/
a.prototype.pageRegex=/\Wpage=(\d+)/
a.prototype.perPageRegex=/\Wper_page=(\d+)/
a.prototype.initialize=function(){a.__super__.initialize.apply(this,arguments)
return this.urls={}}
a.prototype.fetch=function(e){var t,n,c,r
null==e&&(e={})
e=i.a.clone(e)
this.loadedAll=false
n="fetching"+d(e.page)+"Page"
this[n]=true
if(null!=e.page){null==e.remove&&(e.remove=false)
if(null!=(c=this.urls)?c[e.page]:void 0){e.url=this.urls[e.page]
e.data=""}}else null==e.reset&&(e.reset=true)
null!=e.fetchOptions&&(e.data=e.fetchOptions)
this.trigger("beforeFetch",this,e)
null!=e.page&&this.trigger("beforeFetch:"+e.page,this,e)
r=null
e.dataFilter=(o=this,function(a){o[n]=false
o._setStateAfterFetch(r,e)
return a})
var o
t=e.dfd||s.a.Deferred()
r=a.__super__.fetch.call(this,e).done(function(a){return function(n,s,c){var r
a.trigger("fetch",a,n,e)
null!=e.page&&a.trigger("fetch:"+e.page,a,n,e);(null!=(r=a.urls)?r.next:void 0)||a.trigger.apply(a,["fetched:last"].concat(f.call(arguments)))
return a.loadAll&&null!=a.urls.next?setTimeout((function(){return a.fetch({page:"next",dfd:t})})):t.resolve(n,s,c)}}(this))
t.abort=r.abort
t.success=t.done
t.error=t.fail
return t}
a.prototype.canFetch=function(e){return null!=this.urls&&null!=this.urls[e]}
a.prototype._setStateAfterFetch=function(e,a){var t,n,s,c,r,o,i,d,l,_,u,f,h,b
null==this._urlCache&&(this._urlCache=[])
b=(o=a.url,p.call(this._urlCache,o)<0)
b||this._urlCache.push(a.url)
n=!this.atLeastOnePageFetched
u=n||("next"===(i=a.page)||"bottom"===i)&&b
f=n||("prev"===(d=a.page)||"top"===d)&&b
c=this.urls
this.urls=this._parsePageLinks(e)
u&&null!=this.urls.next?this.urls.bottom=this.urls.next:this.urls.next?this.urls.bottom=c.bottom:delete this.urls.bottom
f&&null!=this.urls.prev?this.urls.top=this.urls.prev:this.urls.prev?this.urls.top=c.top:delete this.urls.top
h=null!=(l=this.urls.first)?l:this.urls.next
if(null!=h){r=parseInt(h.match(this.perPageRegex)[1],10);(null!=(t=null!=this.options?this.options:this.options={}).params?t.params:t.params={}).per_page=r}this.urls.last&&(s=this.urls.last.match(this.pageRegex))&&(this.totalPages=parseInt(s[1],10));(null!=(_=this.urls)?_.next:void 0)||(this.loadedAll=true)
return this.atLeastOnePageFetched=true}
a.prototype._parsePageLinks=function(e){var a,t
a=null!=(t=e.getResponseHeader("link"))?t.split(","):void 0
null==a&&(a=[])
return i.a.reduce(a,(n=this,function(e,a){var t,s
t=a.match(n.nameRegex)[1]
s=a.match(n.linkRegex)[1]
e[t]=s
return e}),{})
var n}
return a}(r.a.Collection)},dbrX:function(e,a,t){"use strict"
var n=t("ODXe")
var s=t("uYtQ")
var c=t("QLaP")
var r=t.n(c)
const o={}
const i={getCssVariant(){const e=window.ENV.use_responsive_layout?"responsive_layout":"new_styles"
const a=window.ENV.use_high_contrast?"high_contrast":"normal_contrast"
const t=Object(s["c"])()?"_rtl":""
return`${e}_${a}${t}`},getHandlebarsIndex:()=>window.BRANDABLE_CSS_HANDLEBARS_INDEX||[[],{}],urlFor(e,{combinedChecksum:a,includesNoVariables:t}){const n=t?"no_variables":i.getCssVariant()
return[window.ENV.ASSET_HOST||"","dist","brandable_css",n,`${e}-${a}.css`].join("/")},loadStylesheet(e,a){if(e in o)return
const t=document.createElement("link")
t.rel="stylesheet"
t.href=i.urlFor(e,a)
t.setAttribute("data-loaded-by-brandableCss",true)
document.head.appendChild(t)},loadStylesheetForJST({bundle:e,id:a}){const t=i.getHandlebarsIndex(),s=Object(n["a"])(t,2),c=s[0],o=s[1]
r()(o.hasOwnProperty(a),`requested to load stylesheet for template "${e}" (${a}) but no mapping is available for it!`)
if(1===o[a].length)return i.loadStylesheet(e,{combinedChecksum:o[a][0],includesNoVariables:true})
{let t=o[a][c.indexOf(i.getCssVariant())]
"number"===typeof t&&(t=o[a][t])
return i.loadStylesheet(e,{combinedChecksum:t,includesNoVariables:false})}}}
a["a"]=i},fhP7:function(e,a,t){"use strict"
t.d(a,"k",(function(){return n}))
t.d(a,"e",(function(){return s}))
t.d(a,"f",(function(){return c}))
t.d(a,"g",(function(){return r}))
t.d(a,"h",(function(){return o}))
t.d(a,"l",(function(){return i}))
t.d(a,"i",(function(){return d}))
t.d(a,"b",(function(){return l}))
t.d(a,"j",(function(){return _}))
t.d(a,"c",(function(){return u}))
t.d(a,"d",(function(){return f}))
t.d(a,"a",(function(){return p}))
const n="@"
const s="mentions-marker"
const c="span#"+s
const r="mention-menu"
const o="span#mention-menu"
const i=ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN
const d="mentions.NavigationEvent"
const l="mentions.InputChangeEvent"
const _="mentions.SelectionEvent"
const u={backspace:8,enter:13,up:38,down:40,escape:27,tab:9}
const f={[u.up]:"UpArrow",[u.down]:"DownArrow",[u.enter]:"Enter"}
const p={ariaControlTemplate:e=>e+"-mention-popup",activeDescendant:(e,a)=>`${e}-mention-popup-item-${a}`}},jFoo:function(e,a,t){"use strict"
t.d(a,"a",(function(){return _}))
t.d(a,"b",(function(){return h}))
var n=t("fhP7")
var s=t("VTBJ")
const c="error"
const r="unsupported_subject"
const o="wrong_origin"
const i="bad_request"
const d=({targetWindow:e,origin:a,subject:t,message_id:n})=>{const d=(c={})=>{const r={subject:t+".response"}
n&&(r.message_id=n)
e?e.postMessage(Object(s["a"])(Object(s["a"])({},r),c),a):console.error("Error sending response postMessage: target window does not exist")}
const l=()=>{d({})}
const _=(e,a)=>{const t={code:e}
a&&(t.message=a)
d({error:t})}
const u=e=>{_(c,e)}
const f=e=>{_(i,e)}
const p=()=>{_(o)}
const h=()=>{_(r)}
return{sendResponse:d,sendSuccess:l,sendError:_,sendGenericError:u,sendBadRequestError:f,sendWrongOriginError:p,sendUnsupportedSubjectError:h}}
var l=d
const _={}
const u=["lti.enableScrollEvents","lti.fetchWindowSize","lti.frameResize","lti.removeUnloadMessage","lti.resourceImported","lti.screenReaderAlert","lti.scrollToTop","lti.setUnloadMessage","lti.showAlert","lti.showModuleNavigation","requestFullWindowLaunch","toggleCourseNavigationMenu"]
const f=["A2ExternalContentReady","LtiDeepLinkingResponse",n["i"],n["b"],n["j"]]
async function p(e,a=false){if(e.data.source&&e.data.source.includes("react-devtools"))return false
let n
try{n="string"===typeof e.data?JSON.parse(e.data):e.data}catch(e){return false}const s=n.subject||n.messageType
const c=l({targetWindow:e.source,origin:e.origin,subject:s,message_id:n.message_id})
if(f.includes(s))return false
if(!u.includes(s)){a&&c.sendUnsupportedSubjectError()
return false}try{const r=await t("G4i8")(`./${s}.js`)
const o=r.default({message:n,event:e,responseMessages:c})
!o&&a&&c.sendSuccess()
return true}catch(e){console.error(`Error loading or executing message handler for "${s}": ${e}`)
a&&c.sendGenericError(e.message)
return false}}function h(){var e,a
const t=null===(e=ENV)||void 0===e||null===(a=e.FEATURES)||void 0===a?void 0:a.lti_platform_storage
window.addEventListener("message",e=>{""!==e.data&&p(e,t)})}},msTH:function(e,a,t){"use strict"
var n=t("ouhR")
var s=t.n(n)
var c=t("Y/W1")
var r=t.n(c)
var o=t("gI0r")
var i=t("HGxv")
var d=t("8WeW")
Object(d["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"ca":{"user_content_aaf0fb5a":"Contingut de l\'usuari"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"es-ES":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"th":{"user_content_aaf0fb5a":"เนื้อหาของผู้ใช้"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
t("jQeR")
t("0sPK")
var l=i["default"].scoped("user_content")
const _={translateMathmlForScreenreaders(e){var a,t
if(!(null!==(a=ENV)&&void 0!==a&&null!==(t=a.FEATURES)&&void 0!==t&&t.new_math_equation_handling)){const a=s()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const t=s()('<span class="hidden-readable"></span>')
t.html(a)
return t}},toMediaCommentLink(e){const a=s()(`<a\n        id='media_comment_${Object(o["a"])(s()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(o["a"])(s()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(o["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(o["a"])(s()(e).attr("data-alt"))}'\n      />`)
a.html(s()(e).html())
return a},convert(e,a={}){const t=s()("<div />").html(e)
t.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return _.toMediaCommentLink(this)}))
t.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!a.forEditing){t.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=s()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const a=r.a.uniqueId("uc_")
let t="/object_snippet"
ENV.files_domain&&(t=`//${ENV.files_domain}${t}`)
const n=s()(`<form\n            action='${Object(o["a"])(t)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(o["a"])(a)}'\n            id='form-${Object(o["a"])(a)}'\n          />`)
n.append(s()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
n.append(s()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
s()("body").append(n)
setTimeout(()=>n.submit(),0)
return s()(`<iframe\n            class='user_content_iframe'\n            name='${Object(o["a"])(a)}'\n            style='width: ${Object(o["a"])(e.data("uc_width"))}; height: ${Object(o["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(o["a"])(l.t("User Content"))}'\n          />`)}))
t.find("img.equation_image").each((e,a)=>{const t=s()(a)
const n=_.translateMathmlForScreenreaders(t)
t.removeAttr("x-canvaslms-safe-mathml")
t.after(n)})}return t.html()}}
a["a"]=_}}])

//# sourceMappingURL=syllabus-c-4fcf749630.js.map