(this.webpackJsonpheros=this.webpackJsonpheros||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(8),n=a.n(r),s=(a(39),a(40),a(10)),l=a.n(s),i=(a(14),a(68)),d=a(4);function o(e,t){switch(t.type){case"update-list":return Object(d.a)(Object(d.a)({},e),{},{list:t.list});case"add-item":var a=e.list;return a.push(t.item),Object(d.a)(Object(d.a)({},e),{},{list:a});default:return e}}var b=a(12),j=a(11),u=a(1),h=function(){Object(j.a)(),Object(c.useContext)(g).dispatch;var e=Object(c.useRef)(null),t=Object(c.useState)({}),a=Object(b.a)(t,2),r=a[0],n=a[1];return Object(u.jsx)("form",{ref:e,children:Object(u.jsx)("div",{className:"col-md-5 p-5 mx-auto",children:Object(u.jsxs)("div",{className:"card ",children:[Object(u.jsx)("div",{className:"card-header text-center",children:Object(u.jsx)("h5",{children:" Ingresa tu h\xe9roe favorito "})}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsxs)("label",{for:"Nombre",className:"form-label",children:[" ","Nombre"," "]}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"Nombre",placeholder:"Ingrese el nombre de su heroe",autoFocus:!0,required:!0,onChange:function(e){n(Object(d.a)(Object(d.a)({},r),{},{nombre:e.target.value}))}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsxs)("label",{for:"Raza",className:"form-label",children:[" ","Raza"," "]}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"Raza",placeholder:"Ingrese su raza de origen",required:!0,onChange:function(e){n(Object(d.a)(Object(d.a)({},r),{},{raza:e.target.value}))}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsxs)("label",{for:"Habilidad",className:"form-label",children:[" ","Habilidad"," "]}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"Habilidad",placeholder:"Ingrese su habilidad",required:!0,onChange:function(e){n(Object(d.a)(Object(d.a)({},r),{},{habilidad:[e.target.value]}))}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsxs)("label",{for:"Nivel de Poder",className:"form-label",children:[" ","Nivel de poder"," "]}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"NivelPoder",placeholder:"Ingrese su nivel de poder",required:!0,onChange:function(e){n(Object(d.a)(Object(d.a)({},r),{},{nivelDePoder:e.target.value}))}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsxs)("label",{for:"Link de la imagen",className:"form-label",children:[" ","Link de la imagen"," "]}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"LinkImagen",placeholder:"Ingrese el link de la imagen",required:!0,onChange:function(e){n(Object(d.a)(Object(d.a)({},r),{},{urlImagen:e.target.value}))}})]}),Object(u.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(u.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(e){e.preventDefault();var t={nombre:r.nombre,raza:r.raza,habilidad:r.habilidad,nivelDePoder:r.nivelDePoder,urlImagen:r.urlImagen};null!=t.nombre&&null!=t.raza&&null!=t.habilidad&&null!=t.nivelDePoder&&null!=t.urlImagen?(l.a.post("https://app-heroes-of-legends.herokuapp.com/heroes/crear",t).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),alert("Heroe creado")):alert("Llenar todos los campos")},children:"Agregar"})})]})]})})})},m=a(18),O=a.n(m),x=a(31),f=function(){var e=Object(c.useContext)(g),t=e.dispatch,a=e.state;return Object(c.useEffect)(Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://app-heroes-of-legends.herokuapp.com/heroes",{method:"GET"}).then((function(e){return e.json()})).then((function(e){t({type:"update-list",list:e})}));case 1:case"end":return e.stop()}}),e)}))),[t]),Object(u.jsx)("div",{className:"container flex-column flex-md-row justify-content-center align-items-center h-100",children:Object(u.jsx)("div",{className:"row",children:a.list.map((function(e){return Object(u.jsx)("div",{className:"col-md-4",children:Object(u.jsxs)("div",{className:"tamano-carta card text-center bg-dark animate__animated animate__fadeInUp mx-3 my-3",children:[Object(u.jsx)("div",{className:"overflow",children:Object(u.jsx)("img",{src:e.urlImagen,alt:"Hero",width:"200",height:"200"})}),Object(u.jsxs)("div",{className:"card-body text-light",children:[Object(u.jsx)("h4",{className:"card-title",children:e.nombre}),Object(u.jsx)("hr",{}),Object(u.jsxs)("p",{className:"card-text text-white",children:["Raza: ",e.raza]}),Object(u.jsxs)("p",{className:"card-text text-white",children:["Habilidad: ",e.habilidad]}),Object(u.jsxs)("p",{className:"card-text text-white",children:["Nivel de poder: ",e.nivelDePoder]})]})]})})}))})})},p=function(e){var t=e.children,a=Object(c.useReducer)(o,v),r=Object(b.a)(a,2),n=r[0],s=r[1];return Object(u.jsx)(g.Provider,{value:{state:n,dispatch:s},children:t})},v={list:[]},g=Object(c.createContext)(v);var N=function(){return Object(u.jsx)(p,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(i.a,{bg:"dark",variant:"dark",children:Object(u.jsx)(i.a.Brand,{children:"T\xfa heroe favorito"})}),Object(u.jsx)(h,{}),Object(u.jsx)(f,{})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};n.a.render(Object(u.jsx)(N,{}),document.getElementById("root")),I()}},[[66,1,2]]]);
//# sourceMappingURL=main.fca8eddb.chunk.js.map