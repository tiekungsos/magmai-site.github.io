(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{256:function(t,e,n){t.exports=n.p+"img/right.eae5f49.png"},258:function(t,e,n){t.exports=n.p+"img/logo1.b74cf15.png"},259:function(t,e,n){"use strict";n.r(e);n(8),n(9),n(32),n(65);var r=n(24),l=(n(257),n(261)),o=n.n(l),c=n(262),m=n(140),d=n.n(m),v=n(256),_=n.n(v),f={data:function(){return{burgerStyle:{"--padding":"0px","--layer-bg-color":"yellow","--active-layer-bg-color":"#ABABAB","--layer-width":"10px"},cursorUrl:_.a,isActive:!1,cursorDotUrl:d.a,elmentDelay:[],menuActiveParent:!1,menuActive:!1,menuActiveIn:{works:!1,about:!1,growup:!1,menuButtom:!1}}},mounted:function(){this.setData()},components:{VueAos:o.a,VBurger:c.VBurger},methods:{showMenu:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0==t.menuActiveParent&&(t.menuActiveParent=!0),t.elmentDelay,n=100,t.elmentDelay.forEach((function(e,i){!1===t.elmentDelay[i].delay?setTimeout((function(){return t.elmentDelay[i].delay=!t.elmentDelay[i].delay}),n):t.elmentDelay[i].delay=!t.elmentDelay[i].delay,n+=100})),n+=0,!1===t.menuActive?(setTimeout((function(){return t.menuActive=!t.menuActive}),n),n+=500,setTimeout((function(){return t.menuActiveIn.works=!t.menuActiveIn.works}),n),n+=100,setTimeout((function(){return t.menuActiveIn.about=!t.menuActiveIn.about}),n),n+=100,setTimeout((function(){return t.menuActiveIn.growup=!t.menuActiveIn.growup}),n),n+=500,setTimeout((function(){return t.menuActiveIn.menuButtom=!t.menuActiveIn.menuButtom}),n)):(t.menuActive=!t.menuActive,t.menuActiveIn.works=!t.menuActiveIn.works,t.menuActiveIn.about=!t.menuActiveIn.about,t.menuActiveIn.growup=!t.menuActiveIn.growup,t.menuActiveIn.menuButtom=!t.menuActiveIn.menuButtom,setTimeout((function(){return t.menuActiveParent=!1}),1e3));case 6:case"end":return e.stop()}}),e)})))()},setData:function(){for(var t=0;t<12;t++)this.elmentDelay.push({delay:!1})}}},A=n(57),component=Object(A.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main",style:{cursor:"url("+t.cursorDotUrl+"),auto"}},[t.menuActiveParent?r("div",{staticClass:"tab-parent"},[t.menuActive?r("div",[r("div",{staticClass:"about"},[r("b-container",{staticClass:"bv-menu"},[r("b-row",{staticClass:"text-center menu-center"},[r("b-col",{staticClass:"bv-menu-menu",attrs:{cols:"12"}},[r("transition",{attrs:{name:"bv-menu","enter-active-class":"animate__animated animate__fadeInDown","leave-active-class":"animate__animated animate__slideOutUp"}},[t.menuActiveIn.works?r("h1",{staticClass:"menu-link"},[r("nuxt-link",{attrs:{to:"#"}},[t._v("works")])],1):t._e()])],1),t._v(" "),r("b-col",{staticClass:"bv-menu-menu",attrs:{cols:"12"}},[r("transition",{attrs:{name:"bv-menu","enter-active-class":"animate__animated animate__fadeInDown","leave-active-class":"animate__animated animate__slideOutUp"}},[t.menuActiveIn.about?r("h1",{staticClass:"menu-link"},[r("nuxt-link",{attrs:{to:"/about"}},[t._v("about")])],1):t._e()])],1),t._v(" "),r("b-col",{staticClass:"bv-menu-menu",attrs:{cols:"12"}},[r("transition",{attrs:{name:"bv-menu","enter-active-class":"animate__animated animate__fadeInDown","leave-active-class":"animate__animated animate__slideOutUp"}},[t.menuActiveIn.growup?r("h1",{staticClass:"menu-link"},[r("nuxt-link",{attrs:{to:"growup"}},[t._v("GROWUP")])],1):t._e()])],1)],1),t._v(" "),r("b-row",{staticClass:"text-center menu-buttom"},[r("b-col",{staticClass:"left-contact",attrs:{cols:"5"}},[r("transition",{attrs:{name:"bv-menu","enter-active-class":"animate__animated animate__fadeInUp","leave-active-class":"animate__animated animate__slideOutUp"}},[t.menuActiveIn.menuButtom?r("p",[t._v("Leave your contact")]):t._e()])],1),t._v(" "),r("b-col",{staticClass:"social-menu",attrs:{cols:"7"}},[r("transition",{attrs:{name:"bv-menu","enter-active-class":"animate__animated animate__fadeInUp","leave-active-class":"animate__animated animate__slideOutUp"}},[t.menuActiveIn.menuButtom?r("b-row",[r("b-col",{staticClass:"text"},[t._v("FACEBOOK")]),t._v(" "),r("b-col",{staticClass:"text"},[t._v("MESSENGER")]),t._v(" "),r("b-col",{staticClass:"text"},[t._v("INSTAGRAM")]),t._v(" "),r("b-col",{staticClass:"text"},[t._v("TWITTER")]),t._v(" "),r("b-col",{staticClass:"text"},[t._v("LINKEDIN")]),t._v(" "),r("b-col",{staticClass:"text"},[t._v("LINE")])],1):t._e()],1)],1)],1)],1)],1)]):t._e(),t._v(" "),r("b-row",t._l(t.elmentDelay,(function(t,e){return r("transition",{key:e,attrs:{name:"page-menu","enter-active-class":"animate__animated animate__slideInDown delay-1","leave-active-class":"animate__animated animate__slideOutUp"}},[r("b-col",{directives:[{name:"show",rawName:"v-show",value:t.delay,expression:"elmentDelayIn.delay"}],staticClass:"tab-child",attrs:{cols:"1"}})],1)})),1)],1):t._e(),t._v(" "),r("div",{staticClass:"pg-nav"},[r("div",{staticClass:"logo"},[r("nuxt-link",{attrs:{to:"/"}},[t.isActive?t._e():r("img",{style:{cursor:"url("+t.cursorDotUrl+"),auto"},attrs:{src:n(258),alt:"logo 1"}})])],1),t._v(" "),r("div",{staticClass:"center",on:{click:function(e){return t.showMenu()}}},[r("v-burger",{style:{cursor:"url("+t.cursorDotUrl+"),auto"},attrs:{type:"spin",active:t.isActive,burgerStyle:t.burgerStyle},on:{updated:function(e){t.isActive=e}}})],1),t._v(" "),t.isActive?t._e():r("div",{staticClass:"content",style:{cursor:"url("+t.cursorDotUrl+"),auto"}},[r("nuxt-link",{style:{cursor:"url("+t.cursorDotUrl+")25 15 ,auto"},attrs:{to:"contact"}},[t._v("Contact")])],1)])])}),[],!1,null,null,null);e.default=component.exports},274:function(t,e,n){var content=n(339);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("1b7833da",content,!0,{sourceMap:!1})},329:function(t,e,n){t.exports=n.p+"img/image1.709addb.jpg"},330:function(t,e,n){t.exports=n.p+"img/image2.e4cf7f1.jpg"},331:function(t,e,n){t.exports=n.p+"img/image3.57c8579.jpg"},332:function(t,e,n){t.exports=n.p+"img/image4.709addb.jpg"},338:function(t,e,n){"use strict";n(274)},339:function(t,e,n){(e=n(46)(!1)).push([t.i,".slide-right-enter-active,.slide-right-leave-active{transition:all .3s}.slide-right-enter,.slide-right-leave-to{transform:translateX(10vw);opacity:0}",""]),t.exports=e},343:function(t,e,n){"use strict";n.r(e);var r=n(329),l=n.n(r),o=n(330),c=n.n(o),m=n(331),d=n.n(m),v=(n(332),n(256)),_=n.n(v),f=n(140),A=n.n(f),I=n(333),h=n.n(I),y=(n(334),n(336),n(257),n(261)),x=n.n(y),C=n(262),w={transition:"page",data:function(){return{burgerStyle:{"--padding":"0px","--layer-bg-color":"yellow","--active-layer-bg-color":"#ABABAB","--layer-width":"10px"},imageSlide:[{image:l.a,content:{line1:"PHYGITAL",line2:"We create world-class",line3:{text:["Physical & digital product"],style:{"font-size":"72px !important","margin-top":"40px"},class:"bannerType1"}},active:!1},{image:c.a,content:{line1:"PHYSICAL",line2:"Compound of PHYGITAL",line3:{text:["PHYSICAL BUSINESSES","REAL-LIFE EXPERIENCES","TRADITIONAL","INCREASED IN-STORE VISITS","STORE SHOPPING","WORD OF MOUNT"],style:{"font-size":"30px !important","font-family":"DB Adman X",width:"30vw","margin-top":"30px","line-height":"0.9"},class:"bannerType2"}},active:!1},{image:d.a,content:{line1:"DIGITAL",line2:"Compound of PHYGITAL",line3:{text:["DIGITAL LANDSCAPE","DIGITAL EXPERIENCES","INNOVATION","NCREASED ON SOCIAL MEDIA","ONLINE SHOPPING","ENGAGEMENT"],style:{"font-size":"30px !important","font-family":"DB Adman X",width:"30vw","margin-top":"30px","line-height":"0.9"},class:"bannerType2"}},active:!1}],imageSlideNext:[l.a,c.a,d.a],imageSlideNextText:["PHYGITAL","PHYSICAL","DIGITAL"],active:!1,slide:0,sliding:null,colorText:"transparent",cursorUrl:_.a,cursorDotUrl:A.a,isActive:!1,elmentDelay:[],menuActiveParent:!1,menuActive:!1,menuActiveIn:{works:!1,about:!1,growup:!1,menuButtom:!1},indexPage:null}},components:{VueSlickCarousel:h.a,VueAos:x.a,VBurger:C.VBurger},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},addNextImage:function(t){return void 0===this.imageSlideNext[t+1]?this.imageSlideNext[0]:this.imageSlideNext[t+1]},addNextText:function(t){return void 0===this.imageSlideNextText[t+1]?this.imageSlideNextText[0]:this.imageSlideNextText[t+1]},checkNumber:function(t,e){return e+=1,t.length===e?" ":"/"},mouseOver:function(t){this.active=!0,this.colorText="white",this.imageSlide[t].active=!0,this.indexPage=t},mouseOut:function(t){this.active=!1,this.imageSlide[t].active=!1,this.colorText="transparent"},hidebar:function(){var t=this.indexPage;this.imageSlide[t].active=2}}},S=(n(338),n(57)),component=Object(S.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("Menu"),t._v(" "),n("VueSlickCarousel",{attrs:{dots:!1,arrows:!0,lazyLoad:"ondemand",dotsClass:"slick-dots custom-dot-class",edgeFriction:1,infinite:!0,slidesToShow:1,slidesToScroll:1,speed:1e3},on:{beforeChange:function(e){return t.hidebar()}},scopedSlots:t._u([{key:"prevArrow",fn:function(){return[n("div",{staticClass:"custom-arrow-prevArrow animate__animated animate__fadeIn animate__delay-2s animate__delay-2s",style:{cursor:"url("+t.cursorDotUrl+"),auto"}})]},proxy:!0},{key:"nextArrow",fn:function(e){return[n("div",{staticClass:"custom-arrow animate__animated animate__fadeIn animate__delay-2s",style:{cursor:"url("+t.cursorUrl+"),auto"},on:{mouseover:function(n){return t.mouseOver(e.currentSlide)},mouseleave:function(n){return t.mouseOut(e.currentSlide)}}})]}}])},t._l(t.imageSlide,(function(e,r){return n("div",{key:r},[n("div",{staticClass:"image-slide-main",style:{cursor:"url("+t.cursorDotUrl+"),auto"}},[n("div",{staticClass:"image-slide"},[n("div",{staticClass:"content-left"},[n("div",{staticClass:"content-left-line1"},[n("h1",{staticClass:"animate__animated animate__slideInUp animate__delay-200ms"},[t._v("\n            "+t._s(e.content.line1)+"\n          ")])]),t._v(" "),n("div",{staticClass:"revert-prant"},[n("div",{staticClass:"revert animate__animated animate__slideInLeft animate__delay-500ms"},[n("h2",{staticClass:"animate__animated animate__slideInUp animate__delay-1300ms"},[t._v(t._s(e.content.line2))])])]),t._v(" "),n("div",{staticClass:"contentLineLast"},[n("h2",{class:["contentLineLast-in","animate__animated","animate__slideInUp","animate__delay-1800ms",e.content.line3.class]},t._l(e.content.line3.text,(function(r,l){return n("span",{key:l},[t._v("\n                "+t._s(r)+"  \n                "),n("span",{staticClass:"red",staticStyle:{color:"red !important"}},[t._v("\n                  "+t._s(t.checkNumber(e.content.line3.text,l))+"\n                ")])])})),0)])]),t._v(" "),n("img",{attrs:{src:""+e.image,alt:"First slide"}})]),t._v(" "),n("div",{staticClass:"image-slide-right"},[n("div",{staticClass:"backChangeColor",style:[t.imageSlide[r].active?{width:"100%",height:"100%"}:{width:"0%",height:"0%"},{cursor:"url("+t.cursorUrl+"),auto"},2===t.imageSlide[r].active?{right:"100%"}:{right:"0"},{opacity:"50%"}]}),t._v(" "),n("div",{staticClass:"text-right-out animate__animated animate__slideInRight animate__delay-2s"},[n("div",{staticClass:"text-right ",style:{color:t.colorText,cursor:"url("+t.cursorUrl+"),auto"}},[t._v("\n            "+t._s(t.addNextText(r))+"\n          ")])]),t._v(" "),n("img",{attrs:{src:""+t.addNextImage(r),alt:"Second slide"}})])])])})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Menu:n(259).default})}}]);