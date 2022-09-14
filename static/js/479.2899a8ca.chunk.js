"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[479],{3632:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(501),s=n(6871),i="ButtonGoBack_buttonGoBack__AAOpb",a=n(184);function c(){var e,t,n=(0,s.TH)();return(0,a.jsx)(r.rU,{to:null!==(e=null===n||void 0===n||null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:(0,a.jsx)("button",{className:i,type:"button",children:"Go back"})})}},1757:function(e,t,n){n.d(t,{KS:function(){return l},TW:function(){return _},es:function(){return d},hG:function(){return m},r1:function(){return o},z1:function(){return v}});var r=n(5861),s=n(7757),i=n.n(s),a=n(4569),c=n.n(a);c().defaults.baseURL="https://api.themoviedb.org/3/";var o="https://image.tmdb.org/t/p/w500",u="a2d752373b5fc20ba7d7c26c66d25d31",l=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/trending/all/day?api_key=".concat(u));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},8479:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(5861),s=n(885),i=n(7757),a=n.n(i),c=n(2791),o=n(6871),u=n(501),l=n(1757),v=n(4234),m=n(6409),_=(n(5462),n(3632)),d=n(184);function p(){var e,t,n=(0,o.UO)().movieId,i=(0,c.useState)(null),p=(0,s.Z)(i,2),f=p[0],h=p[1],x=(0,o.TH)(),w=null!==(e=null===(t=x.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.hG)(n);case 3:t=e.sent,h(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m.Am.error("Ooops:( There is no movie with tais name");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),(0,d.jsx)(d.Fragment,{children:f&&(0,d.jsxs)("section",{className:v.Z.moviesSection,children:[(0,d.jsx)(_.Z,{to:w}),(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+f.poster_path,alt:f.title,className:v.Z.moviePoster}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:v.Z.movieTitle,children:f.title}),(0,d.jsxs)("p",{className:v.Z.movieScore,children:["User score: ",10*f.vote_average,"%"]}),(0,d.jsx)("h2",{className:v.Z.movieOverview,children:"Overview"}),(0,d.jsx)("div",{className:v.Z.movieOverviewCont,children:(0,d.jsx)("p",{className:v.Z.movieOverviewText,children:f.overview})}),(0,d.jsx)("h3",{className:v.Z.movieOverview,children:"Genres"}),(0,d.jsx)("ul",{className:v.Z.movieGenres,children:f.genres&&f.genres.map((function(e){return(0,d.jsxs)("li",{className:v.Z.listGenre,children:[" ",e.name," "]},e.id)}))}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{className:v.Z.movieOverview,children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(u.OL,{className:v.Z.link,to:"cast",state:{from:x.state},children:"Cast"})}),(0,d.jsx)("li",{className:v.Z.link,children:(0,d.jsx)(u.OL,{to:"reviews",state:{from:x.state},className:v.Z.link,children:"Reviews"})})]})]})]}),(0,d.jsx)(c.Suspense,{children:(0,d.jsx)(o.j3,{})}),(0,d.jsx)(m.Ix,{})]})]})})}},4234:function(e,t){t.Z={titleHome:"styles_titleHome__er7Fh",ReviewList:"styles_ReviewList__J+W9j",Author:"styles_Author__7HNNc",Review:"styles_Review__R9WUI",Person:"styles_Person__NLklt",Info:"styles_Info__r4DAm",Name:"styles_Name__sMrZr",castList:"styles_castList__GFHAf",castName:"styles_castName__2OLoW",movieTitle:"styles_movieTitle__UFhtV",movieScore:"styles_movieScore__ix+f2",link:"styles_link__0P6R1",moviePoster:"styles_moviePoster__NEKfF",movieOverview:"styles_movieOverview__X6gVW",movieOverviewText:"styles_movieOverviewText__V-Wo8",movieGenres:"styles_movieGenres__m9ilC",movieOverviewCont:"styles_movieOverviewCont__Nxg41",moviesSection:"styles_moviesSection__S9P3K",listGenre:"styles_listGenre__TRMyN",castCard:"styles_castCard__Xro7Y",reviewAuthor:"styles_reviewAuthor__0b83B"}}}]);
//# sourceMappingURL=479.2899a8ca.chunk.js.map