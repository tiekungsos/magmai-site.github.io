(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{177:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{page:!0}},methods:{goback:function(){this.$router.back()}}},r=n(7),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"back-button"},[e("div",{on:{click:this.goback}},[this._v("< กลับ")])])}),[],!1,null,null,null);e.default=component.exports},226:function(t,e,n){"use strict";n.r(e);var o={props:["header","detailHeader","backgroundUrl"],data:function(){return{}}},r=n(7),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid section-1",style:{backgroundImage:"url("+t.backgroundUrl+")"}},[n("Navbar"),t._v(" "),n("NavbarMobile"),t._v(" "),n("div",{staticClass:"container-title"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-12 col-lg-12 col-xl-6"},[n("div",{staticClass:"title-scetion-room"},[n("p",{staticClass:"top"},[t._v(t._s(t.header))]),t._v(" "),n("p",{staticClass:"center"},[t._v(t._s(t.detailHeader))])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(186).default,NavbarMobile:n(183).default})},239:function(t,e,n){var map={"./DJI_0001.jpg":333,"./DJI_0015.jpg":334,"./Makmai _0133.jpg":335,"./Makmai _0135.jpg":336,"./Makmai _0137.jpg":337,"./Makmai _0139.jpg":338,"./Makmai _0142.jpg":339,"./Makmai _0146.jpg":340,"./Makmai _0149.jpg":341,"./Makmai _0150.jpg":342,"./Makmai _0151.jpg":343,"./Makmai _0154.jpg":344};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=239},330:function(t,e,n){t.exports=n.p+"img/IMG_2181.bebd7fc.jpg"},331:function(t,e,n){t.exports=n.p+"img/DJI_0010.940dd91.jpg"},332:function(t,e,n){t.exports=n.p+"img/Group552.4947e2e.jpg"},333:function(t,e,n){t.exports=n.p+"img/DJI_0001.0192be7.jpg"},334:function(t,e,n){t.exports=n.p+"img/DJI_0015.f95a9e3.jpg"},335:function(t,e,n){t.exports=n.p+"img/Makmai _0133.a6bf43d.jpg"},336:function(t,e,n){t.exports=n.p+"img/Makmai _0135.14500ef.jpg"},337:function(t,e,n){t.exports=n.p+"img/Makmai _0137.b55e6f3.jpg"},338:function(t,e,n){t.exports=n.p+"img/Makmai _0139.795bc9d.jpg"},339:function(t,e,n){t.exports=n.p+"img/Makmai _0142.154c266.jpg"},340:function(t,e,n){t.exports=n.p+"img/Makmai _0146.e340523.jpg"},341:function(t,e,n){t.exports=n.p+"img/Makmai _0149.227febe.jpg"},342:function(t,e,n){t.exports=n.p+"img/Makmai _0150.ddf10a8.jpg"},343:function(t,e,n){t.exports=n.p+"img/Makmai _0151.504c8b4.jpg"},344:function(t,e,n){t.exports=n.p+"img/Makmai _0154.20e71aa.jpg"},381:function(t,e,n){"use strict";n.r(e);n(14),n(8);var o={props:["backgroundUrlBottom","pageGalley"],data:function(){return{images:[],backgroundPercents:"",window:{width:0,height:0},limitImage:6}},mounted:function(){this.importAll(n(239))},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{importAll:function(t){var e=this,n=1;t.keys().forEach((function(o){e.checkImg(o)&&n<=e.limitImage&&(n+=1,e.images.push({pathLong:t(o),pathShort:o}))}))},checkImg:function(img){var t=[];return this.images.forEach((function(element){t.push(element.pathShort)})),t.indexOf(img)<0},handleResize:function(){this.window.width=window.innerWidth,this.window.height=window.innerHeight,this.window.width>1024?this.backgroundPercents="80%":this.backgroundPercents="0%"},clickMore:function(){this.importAll(n(239))}}},r=n(7),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"galleryPage",style:{backgroundImage:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) "+t.backgroundPercents+", rgba(255,255,255,0) 90%),url("+t.backgroundUrlBottom+")"}},[n("div",{staticClass:"row"},t._l(t.images,(function(t,e){return n("div",{key:e,staticClass:"col-12 col-xl-6 image-in"},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img-fluid",attrs:{"data-src":t.pathLong,alt:""}})])})),0),t._v(" "),n("div",{staticClass:"text-center",on:{click:t.clickMore}},[n("p",[t._v("\r\n            รูปภาพเพิ่มเติม "),n("br"),t._v(" "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"25px",height:"30px"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}})]),t._v(" "),n("br"),t._v(" "),n("svg",{staticStyle:{"margin-top":"-40px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"25px",height:"30px"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}})])])])])}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,n){"use strict";n.r(e);var o=n(330),r=n.n(o),c=n(331),l=n.n(c),d=n(332),h=n.n(d),m={data:function(){return{backgroundUrl:r.a,backgroundUrlDesktop:l.a,backgroundUrlMobile:h.a,backgroundUrlBottom:"",header:"เป็นมากกว่าสถานที่ท่องเที่ยว",detailHeader:"สังขละบุรี",page:!0,pageGalley:1,width:0,height:0}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.width=window.innerWidth,this.height=window.innerHeight,this.backgroundUrlBottom=l.a,this.width>1440||this.width>1024||this.width<=768&&(this.backgroundUrlBottom=h.a)}}},f=n(7),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("BookRoom"),t._v(" "),n("BackButtonPage"),t._v(" "),n("SectionGaOne",{attrs:{backgroundUrl:t.backgroundUrl,header:t.header,detailHeader:t.detailHeader}}),t._v(" "),n("SectionGaSecoundPage2",{attrs:{backgroundUrlBottom:t.backgroundUrlBottom,pageGalley:t.pageGalley}}),t._v(" "),n("SectionButtom")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BookRoom:n(184).default,BackButtonPage:n(177).default,SectionGaOne:n(226).default,SectionGaSecoundPage2:n(381).default,SectionButtom:n(185).default})}}]);