(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{258:function(t,e,a){"use strict";var s=a(1),n=a(100)(!0);s(s.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(163)("includes")},259:function(t,e,a){"use strict";var s=a(1),n=a(98);s(s.P+s.F*a(99)("includes"),"String",{includes:function(t){return!!~n(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},260:function(t,e){},272:function(t,e,a){"use strict";a(258),a(259);var s={props:["base","totalPages","currentPage"],computed:{showPreviousPage:function(){return 1!==this.currentPage},previousPage:function(){return[0,1].includes(this.currentPage-1)?this.base:"".concat(this.base,"/").concat(this.currentPage-1)},showNextPage:function(){return this.currentPage!==this.totalPages},nextPage:function(t,e){return this.totalPages>this.currentPage?"".concat(this.base,"/").concat(this.currentPage+1):"".concat(this.base,"/").concat(this.currentPage)}}},n=a(13),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex justify-between text-xl items-center"},[a("g-link",{class:{"text-gray-400 hover:text-gray-400 cursor-not-allowed":!t.showPreviousPage},attrs:{to:t.previousPage}},[t._v("← Prev")]),a("div",{staticClass:"text-base"},[t._v("Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages))]),a("g-link",{class:{"text-gray-400 hover:text-gray-400 cursor-not-allowed":!t.showNextPage},attrs:{to:t.nextPage}},[t._v("Next →")])],1)}),[],!1,null,null,null);e.a=o.exports},273:function(t,e,a){"use strict";var s=a(260),n=a.n(s);e.default=n.a},289:function(t,e,a){"use strict";a.r(e);var s={metaInfo:function(){return{title:"Tag: "+this.$page.tag.title}},components:{PaginationPosts:a(272).a}},n=a(13),o=a(273),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"container-inner mx-auto my-16"},[a("h2",{staticClass:"text-4xl font-bold mb-8 border-b"},[t._v("Tag: "+t._s(t.$page.tag.title))]),t._l(t.$page.tag.belongsTo.edges,(function(e){return a("div",{key:e.node.id,staticClass:"post border-gray-400 border-b mb-12"},[a("h2",{staticClass:"text-3xl font-bold"},[a("g-link",{staticClass:"text-copy-primary",attrs:{to:e.node.path}},[t._v(t._s(e.node.title))])],1),a("div",{staticClass:"text-copy-secondary mb-4"},[a("span",[t._v(t._s(e.node.date))]),a("span",[t._v(" · ")]),a("span",[t._v(t._s(e.node.timeToRead)+" min read")])]),a("div",{staticClass:"text-lg mb-4"},[t._v("\n        "+t._s(e.node.summary)+"\n      ")]),a("div",{staticClass:"mb-8"},[a("g-link",{staticClass:"font-bold uppercase",attrs:{to:e.node.path}},[t._v("Read More")])],1)])})),t.$page.tag.belongsTo.pageInfo.totalPages>1?a("pagination-posts",{attrs:{base:"/tag/"+t.$page.tag.title,totalPages:t.$page.tag.belongsTo.pageInfo.totalPages,currentPage:t.$page.tag.belongsTo.pageInfo.currentPage}}):t._e()],2)])}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(r);e.default=r.exports}}]);