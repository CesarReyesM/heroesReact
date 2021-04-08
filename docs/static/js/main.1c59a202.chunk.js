(this["webpackJsonp07-heroes-react"]=this["webpackJsonp07-heroes-react"]||[]).push([[0],{47:function(e,a,r){"use strict";r.r(a);var t=r(1),c=r(21),s=r.n(c),n=r(10),i=Object(t.createContext)(),l=r(4),o="[auth] login",h="[auth] logout",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case o:return Object(l.a)(Object(l.a)({},a.payload),{},{logged:!0});case h:return{logged:!1};default:return e}},d=r(7),u=r(2),b=r(0),m=function(e){var a=e.history,r=Object(t.useContext)(i).dispatch,c=localStorage.getItem("lastPath");return Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"LoginScreen"}),Object(b.jsx)("hr",{}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){r({type:o,payload:{name:"Cesar"}}),a.replace(c)},children:"Login"})]})},p=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],O=function(e){var a=e.id,r=e.superhero,t=e.alter_ego,c=e.first_appearance,s=e.characters;return Object(b.jsx)("div",{className:"card ms-3 animate__animated animate__fadeIn",style:{maxWidth:540},children:Object(b.jsxs)("div",{className:"row no-gutters",children:[Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"card-img",alt:r})}),Object(b.jsx)("div",{className:"col-md-8",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:r}),Object(b.jsx)("p",{className:"card-text",children:t}),t!==s&&Object(b.jsxs)("p",{className:"card-text",children:[" ",s," "]}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsxs)("small",{className:"text-muted",children:[" ",c," "]})}),Object(b.jsx)(d.b,{to:"./hero/".concat(a),children:"M\xe1s..."})]})})]})})},v=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto'));return p.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(b.jsx)("div",{className:"card-columns animate_animated animate__fadeIn",children:r.map((function(e){return Object(b.jsx)(O,Object(l.a)({},e),e.id)}))})},x=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"DC Screen"}),Object(b.jsx)("hr",{}),Object(b.jsx)(v,{publisher:"DC Comics"})]})},f=function(e){var a=e.history,r=Object(u.i)().heroeId,c=Object(t.useMemo)((function(){return e=r,p.find((function(a){return a.id===e}));var e}),[r]);if(!c)return Object(b.jsx)(u.a,{to:"/"});var s=c.superhero,n=c.publisher,i=c.alter_ego,l=c.first_appearance,o=c.characters;return Object(b.jsxs)("div",{className:"row mt-5",children:[Object(b.jsx)("div",{className:" col-4",children:Object(b.jsx)("img",{src:"../assets/heroes/".concat(r,".jpg"),className:"img-thumbnail animate__animated animate__fadeInLeft",alt:s})}),Object(b.jsxs)("div",{className:"col-8 animate__animated animate__fadeIn",children:[Object(b.jsxs)("h3",{children:[s," "]}),Object(b.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(b.jsxs)("li",{className:"list-group-item",children:[" ",Object(b.jsx)("b",{children:"Alter ego:"}),i," "]}),Object(b.jsxs)("li",{className:"list-group-item",children:[" ",Object(b.jsx)("b",{children:"Publisher:"}),n," "]}),Object(b.jsxs)("li",{className:"list-group-item",children:[" ",Object(b.jsx)("b",{children:"First Appearance:"}),l," "]})]}),Object(b.jsx)("h5",{children:"Characters"}),Object(b.jsx)("p",{children:o}),Object(b.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?a.push("/"):a.goBack()},children:"Return "})]})]})},g=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Marvel"}),Object(b.jsx)("hr",{}),Object(b.jsx)(v,{publisher:"Marvel Comics"})]})},C=r(23),_=r.n(C),N=r(12),y=function(e){var a=e.history,r=Object(u.h)(),c=_.a.parse(r.search).q,s=void 0===c?"":c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(n.a)(a,2),c=r[0],s=r[1];return[c,function(e){var a=e.target;s(Object(l.a)(Object(l.a)({},c),{},Object(N.a)({},a.name,a.value)))},function(){s(e)}]}({searchText:s}),o=Object(n.a)(i,2),h=o[0],j=o[1],d=h.searchText,m=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),p.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(s)}),[s]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Search Screen"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-5",children:[Object(b.jsx)("h4",{children:"Search Form"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(d))},children:[Object(b.jsx)("input",{type:"text",placeholder:"find your hero",className:"form-control",name:"searchText",value:d,onChange:j,autoComplete:"off"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Search"})]})]}),Object(b.jsxs)("div",{className:"col-7",children:[Object(b.jsx)("h4",{children:"Results"}),Object(b.jsx)("hr",{}),""===s&&Object(b.jsx)("div",{className:"alert alert-info",children:"Search a Hero"}),""!==s&&0===m.length&&Object(b.jsxs)("div",{className:"alert alert-danger",children:["There is no a hero with ",s]}),m.map((function(e){return Object(b.jsx)(O,Object(l.a)({},e),e.id)}))]})]})]})},S=function(){var e=Object(t.useContext)(i),a=e.user.name,r=e.dispatch,c=Object(u.g)();return Object(b.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(b.jsx)(d.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(b.jsx)("div",{className:"navbar-collapse w-100",children:Object(b.jsxs)("div",{className:"navbar-nav",children:[Object(b.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(b.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(b.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(b.jsx)("div",{className:"navbar-collapse collapse w-800 order-3 dual-collapse2",children:Object(b.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(b.jsx)("span",{className:"nav-item nav-link text-info",children:a}),Object(b.jsx)("button",{className:"nav nav-link btn",onClick:function(){c.replace("/login"),r({type:h})},children:"Logout"})]})})]})},M=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S,{}),Object(b.jsx)("div",{className:"container mt-2",children:Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{exact:!0,path:"/marvel",component:g}),Object(b.jsx)(u.b,{exact:!0,path:"/hero/:heroeId",component:f}),Object(b.jsx)(u.b,{exact:!0,path:"/dc",component:x}),Object(b.jsx)(u.b,{exact:!0,path:"/search",component:y}),Object(b.jsx)(u.a,{to:"/marvel"})]})})]})},k=r(13),D=function(e){var a=e.isAuthenticated,r=e.component,t=Object(k.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",t.location.pathname),Object(b.jsx)(u.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(b.jsx)(r,Object(l.a)({},e)):Object(b.jsx)(u.a,{to:"/login"})}}))},w=function(e){var a=e.isAuthenticated,r=e.component,t=Object(k.a)(e,["isAuthenticated","component"]);return Object(b.jsx)(u.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(b.jsx)(u.a,{to:"/"}):Object(b.jsx)(r,Object(l.a)({},e))}}))},A=function(){var e=Object(t.useContext)(i).user;return Object(b.jsx)(d.a,{children:Object(b.jsx)("div",{children:Object(b.jsxs)(u.d,{children:[Object(b.jsx)(w,{exact:!0,path:"/login",component:m}),Object(b.jsx)(D,{path:"/",component:M,isAuthenticated:e.logged})]})})})},B=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},J=function(){var e=Object(t.useReducer)(j,{},B),a=Object(n.a)(e,2),r=a[0],c=a[1];return Object(t.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(b.jsx)(i.Provider,{value:{user:r,dispatch:c},children:Object(b.jsx)(A,{})})};s.a.render(Object(b.jsx)(J,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.1c59a202.chunk.js.map