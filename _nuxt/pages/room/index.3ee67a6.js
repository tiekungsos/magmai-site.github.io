(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{177:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{page:!0}},methods:{goback:function(){this.$router.back()}}},l=o(7),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"back-button"},[e("div",{on:{click:this.goback}},[this._v("< กลับ")])])}),[],!1,null,null,null);e.default=component.exports},187:function(t,e,o){t.exports=o.p+"img/EAK_0964.8ad441f.jpg"},209:function(t,e,o){t.exports=o.p+"img/EAK_1436-HDR.84f16fd.jpg"},237:function(t,e,o){t.exports=o.p+"img/Makmai_0136.171ddcb.jpg"},307:function(t,e,o){t.exports=o.p+"img/Group-522.34fe725.jpg"},308:function(t,e,o){t.exports=o.p+"img/EAK_1451-HDR.fcf3563.jpg"},309:function(t,e,o){t.exports=o.p+"img/EAK_1038-HDR-Edit.74e9842.jpg"},310:function(t,e,o){t.exports=o.p+"img/EAK_1561-HDR.f4132e3.jpg"},311:function(t,e,o){t.exports=o.p+"img/EAK_1463-HDR.018e569.jpg"},312:function(t,e,o){t.exports=o.p+"img/EAK_1338-HDR.01e6202.jpg"},313:function(t,e,o){t.exports=o.p+"img/EAK_0835-HDR.0b7a5c3.jpg"},314:function(t,e,o){t.exports=o.p+"img/EAK_0903-HDR-Edit.f4a50db.jpg"},387:function(t,e,o){"use strict";o.r(e);var n=o(308),l=o.n(n),r={data:function(){return{backgroundUrl:l.a}},methods:{openBook:function(){this.$root.$refs.bookRoom.openNav()}}},c=o(7),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid section-1",style:{backgroundImage:"url("+t.backgroundUrl+")"}},[n("Navbar"),t._v(" "),n("NavbarMobile"),t._v(" "),n("div",{staticClass:"container-title"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-12 col-md-12 col-lg-12 col-xl-6"},[n("div",{staticClass:"hotel-book hotel-book-room",staticStyle:{cursor:"pointer"},on:{click:t.openBook}},[t._m(1),t._v(" "),n("div",{staticClass:"body-box"},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":o(209),alt:""}})])]),t._v(" "),n("div",{staticClass:"hotel-book-mobile",staticStyle:{cursor:"pointer"},on:{click:t.openBook}},[t._m(2)])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-12 col-lg-12 col-xl-6"},[e("div",{staticClass:"title-scetion-room"},[e("p",{staticClass:"top"},[this._v("หลากหลายห้องพัก")]),this._v(" "),e("p",{staticClass:"center"},[this._v("“ ตามสไตล์คุณ ”")]),this._v(" "),e("p",{staticClass:"button text-widte"},[this._v("การตกแต่งภายในห้องเน้นความเป็นธรรมชาติควบคู่กับสไตล์โมเดิร์นได้อย่างลงตัว "),e("br",{staticClass:"new-line"}),this._v("\r\nทำให้คุณได้รู้สึกถึงการพักผ่อนที่แท้จริงท่ามกลางธรรมชาติ "),e("br",{staticClass:"new-line"}),this._v("\r\nและความอบอุ่นจากการบริการของเรา")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-box"},[e("p",[this._v("จองห้องพัก")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-box"},[e("p",[this._v("จองห้องพัก")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:o(186).default,NavbarMobile:o(183).default})},388:function(t,e,o){"use strict";o.r(e);var n=o(187),l=o.n(n),r=o(309),c=o(310),d=o(311),m=o(312),v=o(313),h=o(314),f={data:function(){return{backgroundUrl:l.a,backgroundPercents:"",backgroundPercents2:"",window:{width:0,height:0},imgUrls:[{img:r,text:"Standard",link:"standard"},{img:c,text:"Superior",link:"superior"},{img:d,text:"Deluxe",link:"deluxe"},{img:m,text:"Deluxe Jacuzzi",link:"jacuzzi"},{img:v,text:"Family Room",link:"family"},{img:h,text:"Deluxe Panorama View",link:"panorama"}]}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.window.width=window.innerWidth,this.window.height=window.innerHeight,this.window.width>1024&&this.window.width<=1440?(this.backgroundPercents="70%",this.backgroundPercents2="90%"):this.window.width>1440?(this.backgroundPercents="45%",this.backgroundPercents2="70%"):(this.backgroundPercents="0%",this.backgroundPercents2="70%")}}},_=o(7),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sectionRoom-4",style:{backgroundImage:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) "+t.backgroundPercents+", rgba(255,255,255,0) "+t.backgroundPercents2+"),url("+t.backgroundUrl+")"}},[o("div",{staticClass:"block"},[o("div",{staticClass:"row "},t._l(t.imgUrls,(function(e){return o("nuxt-link",{key:e.img,staticClass:"col-12 col-md-12 col-lg-12 col-xl-6 top40",attrs:{to:"/room/"+e.link}},[o("picture",[o("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(max-width: 1024px","data-srcset":e.img}}),t._v(" "),o("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-srcset":e.img}}),t._v(" "),o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":e.img,alt:""}})]),t._v(" "),o("div",{staticClass:"detail detailimg-room-page"},[o("p",{staticClass:"inFirst"},[t._v("ห้องนอน")]),t._v(" "),o("p",{staticClass:"inSec"},[t._v(t._s(e.text))])])])})),1)])])}),[],!1,null,null,null);e.default=component.exports},400:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{page:!0}}},l=o(7),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("BookRoom"),this._v(" "),e("BackButtonPage"),this._v(" "),e("SectionRoomOne"),this._v(" "),e("div",{staticClass:"col-12 col-md-12 col-lg-12 col-xl-12 top100",staticStyle:{"text-align":"center","padding-left":"0","padding-right":"0"}},[e("picture",[e("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img-fluid",attrs:{media:"(max-width: 1024px)","data-srcset":o(307)}}),this._v(" "),e("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img-fluid",attrs:{"data-srcset":o(237)}}),this._v(" "),e("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img-fluid",attrs:{"data-srcset":o(237),alt:""}})])]),this._v(" "),e("SectionRoomSecond",{staticClass:"top50"}),this._v(" "),e("SectionButtom")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BookRoom:o(184).default,BackButtonPage:o(177).default,SectionRoomOne:o(387).default,SectionRoomSecond:o(388).default,SectionButtom:o(185).default})}}]);