(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{177:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{page:!0}},methods:{goback:function(){this.$router.back()}}},r=n(7),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"back-button"},[e("div",{on:{click:this.goback}},[this._v("< กลับ")])])}),[],!1,null,null,null);e.default=component.exports},226:function(t,e,n){"use strict";n.r(e);var o={props:["header","detailHeader","backgroundUrl"],data:function(){return{}}},r=n(7),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid section-1",style:{backgroundImage:"url("+t.backgroundUrl+")"}},[n("Navbar"),t._v(" "),n("NavbarMobile"),t._v(" "),n("div",{staticClass:"container-title"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-12 col-lg-12 col-xl-6"},[n("div",{staticClass:"title-scetion-room"},[n("p",{staticClass:"top"},[t._v(t._s(t.header))]),t._v(" "),n("p",{staticClass:"center"},[t._v(t._s(t.detailHeader))])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(186).default,NavbarMobile:n(183).default})},238:function(t,e,n){var map={"./Makmai _0008.jpg":318,"./Makmai _0013.jpg":319,"./Makmai _0015.jpg":320,"./Makmai _0022.jpg":321,"./Makmai _0024.jpg":322,"./Makmai _0033.jpg":323,"./Makmai _0034.jpg":324,"./Makmai _0036.jpg":325,"./Makmai _0071.jpg":326,"./Makmai _0073.jpg":327,"./Makmai _0074.jpg":328,"./Makmai _0077.jpg":329};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=238},315:function(t,e,n){t.exports=n.p+"img/Makmai_0011.de5343b.jpg"},316:function(t,e,n){t.exports=n.p+"img/Group546.b0c6f09.jpg"},317:function(t,e,n){t.exports=n.p+"img/Makmai_0065.8f951b5.jpg"},318:function(t,e,n){t.exports=n.p+"img/Makmai _0008.a128d69.jpg"},319:function(t,e,n){t.exports=n.p+"img/Makmai _0013.46779aa.jpg"},320:function(t,e,n){t.exports=n.p+"img/Makmai _0015.85b6917.jpg"},321:function(t,e,n){t.exports=n.p+"img/Makmai _0022.34267a9.jpg"},322:function(t,e,n){t.exports=n.p+"img/Makmai _0024.7acfd50.jpg"},323:function(t,e,n){t.exports=n.p+"img/Makmai _0033.8e3e683.jpg"},324:function(t,e,n){t.exports=n.p+"img/Makmai _0034.4843269.jpg"},325:function(t,e,n){t.exports=n.p+"img/Makmai _0036.17e0159.jpg"},326:function(t,e,n){t.exports=n.p+"img/Makmai _0071.81d034a.jpg"},327:function(t,e,n){t.exports=n.p+"img/Makmai _0073.56238b0.jpg"},328:function(t,e,n){t.exports=n.p+"img/Makmai _0074.05e0b7f.jpg"},329:function(t,e,n){t.exports=n.p+"img/Makmai _0077.7307dbc.jpg"},389:function(t,e,n){"use strict";n.r(e);n(14),n(8);var o={props:["backgroundUrlBottom","pageGalley"],data:function(){return{images:[],backgroundPercents:"",window:{width:0,height:0},limitImage:6}},mounted:function(){this.importAll(n(238))},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{importAll:function(t){var e=this,n=1;t.keys().forEach((function(o){e.checkImg(o)&&n<=e.limitImage&&(n+=1,e.images.push({pathLong:t(o),pathShort:o}))}))},checkImg:function(img){var t=[];return this.images.forEach((function(element){t.push(element.pathShort)})),t.indexOf(img)<0},handleResize:function(){this.window.width=window.innerWidth,this.window.height=window.innerHeight,this.window.width>1024?this.backgroundPercents="80%":this.backgroundPercents="0%"},clickMore:function(){this.importAll(n(238))}}},r=n(7),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"galleryPage",style:{backgroundImage:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) "+t.backgroundPercents+", rgba(255,255,255,0) 90%),url("+t.backgroundUrlBottom+")"}},[n("div",{staticClass:"row"},t._l(t.images,(function(t,e){return n("div",{key:e,staticClass:"col-12 col-xl-6 image-in"},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img-fluid",attrs:{"data-src":t.pathLong,alt:""}})])})),0),t._v(" "),n("div",{staticClass:"text-center",on:{click:t.clickMore}},[n("p",[t._v("\r\n            รูปภาพเพิ่มเติม "),n("br"),t._v(" "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"25px",height:"30px"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}})]),t._v(" "),n("br"),t._v(" "),n("svg",{staticStyle:{"margin-top":"-40px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"25px",height:"30px"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}})])])])])}),[],!1,null,null,null);e.default=component.exports},402:function(t,e,n){"use strict";n.r(e);var o=n(315),r=n.n(o),l=n(316),c=n.n(l),d=n(317),h=n.n(d),m={data:function(){return{backgroundUrl:r.a,backgroundUrlDesktop:h.a,backgroundUrlMobile:c.a,backgroundUrlBottom:"",header:"เป็นมากกว่าสถานที่ท่องเที่ยว",detailHeader:"สังขละบุรี",page:!0,pageGalley:1,width:0,height:0}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.width=window.innerWidth,this.height=window.innerHeight,this.backgroundUrlBottom=h.a,this.width>1440||this.width>1024||this.width<=768&&(this.backgroundUrlBottom=c.a)}}},f=n(7),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("BookRoom"),t._v(" "),n("BackButtonPage"),t._v(" "),n("SectionGaOne",{attrs:{backgroundUrl:t.backgroundUrl,header:t.header,detailHeader:t.detailHeader}}),t._v(" "),n("SectionGaSecound",{attrs:{backgroundUrlBottom:t.backgroundUrlBottom,pageGalley:t.pageGalley}}),t._v(" "),n("SectionButtom")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BookRoom:n(184).default,BackButtonPage:n(177).default,SectionGaOne:n(226).default,SectionGaSecound:n(389).default,SectionButtom:n(185).default})}}]);