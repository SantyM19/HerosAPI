(this.webpackJsonpheros=this.webpackJsonpheros||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(5),a=n.n(i),j=(n(10),n(1)),s=n(4),d=(n(11),n(0)),b="https://app-heroes-of-legends.herokuapp.com",o={list:[]},u=Object(c.createContext)(o),l=function(){var e=Object(c.useContext)(u).dispatch,t=Object(c.useRef)(null),n=Object(c.useState)({}),r=Object(s.a)(n,2),i=r[0],a=r[1];return Object(d.jsxs)("form",{ref:t,children:[Object(d.jsx)("input",{type:"text",name:"nombre",onChange:function(e){a(Object(j.a)(Object(j.a)({},i),{},{nombre:e.target.value}))}}),Object(d.jsx)("input",{type:"text",name:"raza",onChange:function(e){a(Object(j.a)(Object(j.a)({},i),{},{raza:e.target.value}))}}),Object(d.jsx)("input",{type:"text",name:"habilidad",onChange:function(e){a(Object(j.a)(Object(j.a)({},i),{},{habilidad:e.target.value}))}}),Object(d.jsx)("input",{type:"text",name:"nivelDePoder",onChange:function(e){a(Object(j.a)(Object(j.a)({},i),{},{nivelDePoder:e.target.value}))}}),Object(d.jsx)("input",{type:"text",name:"urlImagen",onChange:function(e){a(Object(j.a)(Object(j.a)({},i),{},{urlImagen:e.target.value}))}}),Object(d.jsx)("button",{onClick:function(n){n.preventDefault();var c={nombre:i.nombre,raza:"",habilidad:"",nivelDePoder:0,urlImagen:""};fetch(b+"/heroes/crear",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(n){e({type:"add-item",item:n}),a({nombre:""}),t.current.reset()}))},children:"Agregar"})]})},h=function(){var e=Object(c.useContext)(u),t=e.dispatch,n=e.state;return Object(c.useEffect)((function(){fetch(b+"/heroes",{method:"GET"}).then((function(e){return e.json()})).then((function(e){t({type:"update-list",list:e})}))}),[n.list.length,t]),Object(d.jsx)("div",{children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"ID"}),Object(d.jsx)("td",{children:"NOMBRE"}),Object(d.jsx)("td",{children:"RAZA"}),Object(d.jsx)("td",{children:"HABILIDAD"}),Object(d.jsx)("td",{children:"NIVEL PODER"}),Object(d.jsx)("td",{children:"IMAGEN"})]})}),Object(d.jsx)("tbody",{children:n.list.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.nombre}),Object(d.jsx)("td",{children:e.raza}),Object(d.jsx)("td",{children:e.habilidad}),Object(d.jsx)("td",{children:e.nivelDePoder}),Object(d.jsx)("td",{children:Object(d.jsx)("img",{src:e.urlImagen,alt:"Hero",width:"200",height:"200"})})]},e.id)}))})]})})};function O(e,t){switch(t.type){case"update-list":return Object(j.a)(Object(j.a)({},e),{},{list:t.list});case"add-item":var n=e.list;return n.push(t.item),Object(j.a)(Object(j.a)({},e),{},{list:n});default:return e}}var x=function(e){var t=e.children,n=Object(c.useReducer)(O,o),r=Object(s.a)(n,2),i=r[0],a=r[1];return Object(d.jsx)(u.Provider,{value:{state:i,dispatch:a},children:t})};var f=function(){return Object(d.jsxs)(x,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(h,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),p()}},[[13,1,2]]]);
//# sourceMappingURL=main.8c696838.chunk.js.map