(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BordersPage"],{b853:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cb-item"},[r("p",{staticClass:"cb-item__title"},[e._v(" Рама ")]),r("p",{staticClass:"cb-item__text"},[e._v(' подберите раму, которая подойдет случаю и впишется в интерьер, ведь вы же не просто оставляете "пальчики", а создаете предмет декора для дома и офиса: ')]),r("Borders")],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cb-item-borders"},e._l(e.borders,(function(t){return r("div",{key:t.id,staticClass:"cb-item-border",class:{select:t.id==e.chosenBorder},on:{click:function(r){e.decideBorder(r,t),e.addSelect(t.id)}}},[r("img",{attrs:{src:t.src,alt:t.name,title:t.name,width:"120",height:"150"}}),null!=t.popup?r("router-link",{staticClass:"cb-item-border__prev fancybox gallery",attrs:{to:{name:"PopupPage",params:{id:" 123"},query:{border:t,route:e.routeForSending}},title:t.name,rel:"gal-14"}}):e._e()],1)})),0)},i=[],n=(r("a434"),{data:function(){return{borders:this.$store.state.bordersData.borders,chosenBorder:null,routeForSending:this.$route.path}},methods:{decideBorder:function(e,t){this.$children[t.id].tag!=e.path[0].localName&&this.$store.state.cart.splice(1,1,t)},addSelect:function(e){this.chosenBorder=e}},mounted:function(){this.$store.state.router="/borders"}}),c=n,d=r("2877"),l=Object(d["a"])(c,o,i,!1,null,"ab6f0faa",null),u=l.exports,b={components:{Borders:u}},p=b,h=Object(d["a"])(p,s,a,!1,null,"a1505e46",null);t["default"]=h.exports}}]);
//# sourceMappingURL=BordersPage.f069356f.js.map