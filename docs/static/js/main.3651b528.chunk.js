(this.webpackJsonprickyandmorthyapp=this.webpackJsonprickyandmorthyapp||[]).push([[0],{26:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(22),r=n.n(s),o=(n(37),n(16)),i=n(3),l=n(18),j=n(15),u=n(2),d=n.n(u),p=n(4),b=n(6),f=(n(39),n(0)),m=function(){return Object(f.jsxs)("footer",{className:"footer",children:[Object(f.jsx)("div",{className:"fondo-footer",children:Object(f.jsx)("img",{className:"fondo-footer-img",src:"/assets/img/suazo.png",alt:"fondo-footer"})}),Object(f.jsx)("div",{className:"logo-footer",children:Object(f.jsx)("img",{className:"logo-footer-img",src:"/assets/img/portal-morty-smith-rick.png",alt:"logo-footer"})})]})},h=(n(41),function(e){var t=e.children;return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("div",{className:"fondo",children:Object(f.jsx)("img",{className:"fondo-img",src:"/assets/img/bg.png",alt:"fondo background"})}),Object(f.jsx)("div",{className:"logo",children:Object(f.jsx)("img",{className:"logo-img",src:"/assets/img/rick-and-morty.png",alt:"fondo background"})}),Object(f.jsx)("div",{className:"buscador-filtro",children:t})]})}),O=(n(26),n(42),function(e){var t=e.personaje,n=e.handleView,a=e.openModal,c=e.seleccionarFavorito;e.color;return Object(f.jsxs)("div",{className:"card-contenedor",children:[Object(f.jsxs)("div",{className:"contendor-image",children:[Object(f.jsx)("div",{className:"card-img",children:Object(f.jsx)("img",{src:t.image,alt:"imagenes"})}),Object(f.jsx)("div",{className:"favorito",children:Object(f.jsx)("button",{onClick:function(e){return c(t,e)},className:"btn-favorito",children:Object(f.jsx)("i",{className:"fas fa-star"})})})]}),Object(f.jsxs)("div",{onClick:function(){n(t.id),a()},className:"card-contenido",children:[Object(f.jsxs)("p",{className:"gender",children:[t.status," - ",t.species]}),Object(f.jsx)("h4",{className:"titulo",children:t.name}),Object(f.jsx)("p",{className:"localizacion",children:"first seen in"}),Object(f.jsx)("p",{className:"titulo-localizacion",children:t.origin.name}),Object(f.jsx)("p",{className:"descripcion",children:"last know location"}),Object(f.jsx)("p",{className:"titulo-descripcion",children:t.location.name})]})]})}),x=n(14),v=n(23),g=n.n(v),N=function(e){var t=e.personaje;return Object(f.jsxs)("div",{className:"card-contenedor",children:[Object(f.jsx)("div",{className:"card-img",children:Object(f.jsx)("img",{src:t.image,alt:"imagenes"})}),Object(f.jsxs)("div",{className:"card-contenido",children:[Object(f.jsxs)("p",{className:"gender",children:[t.status," - ",t.species]}),Object(f.jsx)("h4",{className:"titulo",children:t.name}),Object(f.jsx)("p",{className:"localizacion",children:"first seen in"}),Object(f.jsx)("p",{className:"titulo-localizacion",children:t.origin.name}),Object(f.jsx)("p",{className:"descripcion",children:"last know location"}),Object(f.jsx)("p",{className:"titulo-descripcion",children:t.location.name})]})]})};n(54),n(55),n(56);function k(e){var t=e.setIsOpen,n=e.modalIsOpen,c=e.episodios,s=e.personajesInteresantes,r=e.detallesPersonaje;function o(){t(!1)}return Object(a.useEffect)((function(){}),[r,c]),Object(f.jsx)("div",{children:Object(f.jsxs)(g.a,{className:"reacts",isOpen:n,onRequestClose:o,contentLabel:"Example Modal",children:[Object(f.jsx)("div",{className:"fondo-modal",children:Object(f.jsx)("img",{className:"fondo-modal-img",src:"/assets/img/fondo-modal.png",alt:"fondo-modal"})}),Object(f.jsx)("div",{className:"modal-seccion-perfil"}),r!==[]&&r.length>0&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"modal-perfil",children:[Object(f.jsx)("div",{className:"modal-contenedor-img",children:Object(f.jsx)("img",{className:"modal-img",src:r[0].image,alt:"imagen"})}),Object(f.jsxs)("div",{className:"modal-info-perfil",children:[Object(f.jsx)("p",{className:"status-info",children:r[0].status}),Object(f.jsx)("h6",{className:"titulo",children:r[0].name}),Object(f.jsx)("p",{className:"gender",children:r[0].species})]})]}),Object(f.jsxs)("div",{className:"contenedor-modal",children:[Object(f.jsxs)("div",{className:"informacion",children:[Object(f.jsx)("h5",{children:"Informacion"}),Object(f.jsxs)("div",{className:"contenedor-info-detalle",children:[Object(f.jsxs)("div",{className:"info-detalle",children:[Object(f.jsx)("p",{children:"Gender:"}),Object(f.jsx)("p",{className:"gender",children:r[0].gender})]}),Object(f.jsxs)("div",{className:"info-detalle",children:[Object(f.jsx)("p",{children:"Origin:"}),Object(f.jsx)("p",{className:"origin",children:r[0].origin.name})]}),Object(f.jsxs)("div",{className:"info-detalle",children:[Object(f.jsx)("p",{children:"Type:"}),Object(f.jsx)("p",{className:"type",children:r[0].type})]})]})]}),Object(f.jsxs)("div",{className:"episodios",children:[Object(f.jsx)("h5",{children:"Episodios"}),Object(f.jsx)("div",{className:"contenedor-episodios-detalle",children:Object(f.jsx)("div",{className:"episodios-detalle",children:c.length>0&&c.map((function(e,t){return Object(f.jsxs)("div",{className:"info-episodio",children:[Object(f.jsx)("p",{className:"encabezado",children:e.name}),Object(f.jsx)("p",{className:"titulo",children:e.episode}),Object(f.jsx)("p",{className:"fecha",children:e.air_date})]},t)}))})})]}),Object(f.jsxs)("div",{className:"personajes-interesantes",children:[Object(f.jsx)("h5",{children:"Personajes interesantes"}),Object(f.jsx)("div",{className:"card-detalle-info",children:s.map((function(e,t){return Object(f.jsx)(N,{personaje:e},t)}))})]})]})]}),Object(f.jsx)("img",{className:"button-modal-close",onClick:o,src:"/assets/img/Vector.png",alt:"boton-cerrar"})]})})}g.a.setAppElement("#root");var w="https://rickandmortyapi.com/api",y=function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t){e.next=13;break}return e.prev=1,e.next=4,fetch("".concat(w,"/character/").concat(t));case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(w,"/character/").concat(I(),",").concat(I(),",").concat(I()));case 3:return(t=e.sent).ok||console.error("No se pudo realizar la peticion"),e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),I=function(){return Math.floor(182*Math.random())+1},F=function(){var e=Object(x.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],c=JSON.parse(localStorage.getItem("favoritos")),s=Object(x.useState)([]),r=Object(b.a)(s,2),o=r[0],u=r[1],v=Object(x.useState)([]),g=Object(b.a)(v,2),N=g[0],w=g[1],I=Object(x.useState)([]),F=Object(b.a)(I,2),M=F[0],P=F[1],z=Object(i.g)(),E=function(){a(!0)},C=function(e){console.log(e),V(e)},V=function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t){e.next=6;break}return e.next=3,y(t);case 3:n=e.sent,J(n),u([n]);case 6:A();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,c,s,r,o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w([]),void 0===t){e.next=25;break}6,[],n=function(){return Math.ceil(t.episode.length/6)}(),s=(c=0*n)+n,a=t.episode.slice(c,s),r=Object(j.a)(a),e.prev=10,i=d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.value,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,w((function(e){return[].concat(Object(l.a)(e),[a])}));case 8:case"end":return e.stop()}}),e)})),r.s();case 13:if((o=r.n()).done){e.next=17;break}return e.delegateYield(i(),"t0",15);case 15:e.next=13;break;case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(10),r.e(e.t1);case 22:return e.prev=22,r.f(),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[10,19,22,25]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,P(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(h,{}),Object(f.jsxs)("div",{className:"contenedor",children:[Object(f.jsxs)("div",{className:"encabezado-favoritos",children:[Object(f.jsx)("h1",{className:"titulo",children:"Mostrar Favoritos"}),Object(f.jsx)("div",{className:"fondo-estrella",children:Object(f.jsx)("img",{className:"logo-estrella",src:"/assets/img/start.png",alt:"Estrella-logo"})})]}),Object(f.jsx)("a",{onClick:function(){return z.goBack()},children:"Regresar"}),Object(f.jsx)(k,{setIsOpen:a,modalIsOpen:n,episodios:N,personajesInteresantes:M,detallesPersonaje:o}),Object(f.jsx)("div",{style:{marginTop:"1rem"},className:"card-info",children:c.map((function(e,t){return Object(f.jsx)(O,{personaje:e,handleView:C,openModal:E,seleccionarFavorito:[],color:"#F2994A"},t)}))})]}),Object(f.jsx)(m,{})]})},M=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("All"!==t){e.next=16;break}return e.prev=1,e.next=4,fetch("".concat(w,"/character"));case 4:return(n=e.sent).ok||console.error("No se pudo realizar la peticion"),e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:e.next=29;break;case 16:return e.prev=16,e.next=19,fetch("".concat(w,"/character/?gender=").concat(t));case 19:return(a=e.sent).ok||console.error("No se pudo realizar la peticion"),e.next=23,a.json();case 23:return e.abrupt("return",e.sent);case 26:e.prev=26,e.t1=e.catch(16),console.error(e.t1);case 29:case"end":return e.stop()}}),e,null,[[1,11],[16,26]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(w,"/character/?name=").concat(t));case 3:return(n=e.sent).ok||console.error("No se pudo realizar la peticion"),e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("Page")||1,e.next=4,fetch("".concat(w,"/character/?page=").concat(t));case 4:return(n=e.sent).ok||console.error("No se pudo realizar la peticion"),e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),E=(n(60),function(e){var t=e.inputValue,n=e.search,a=e.handleSubmit;return Object(f.jsx)("form",{onSubmit:a,children:Object(f.jsxs)("div",{className:"form-group has-search",children:[Object(f.jsx)("span",{className:"fa fa-search form-control-feedback"}),Object(f.jsx)("input",{onChange:t,name:"search",value:n,type:"text",className:"form-control input-buscador",placeholder:"Search"})]})})}),C=function(e){var t=e.setIsOpen,n=e.modalIsOpen,a=e.openModal,c=e.resultado,s=e.handleView,r=e.episodios,i=e.personajesInteresantes,l=e.detallesPersonaje,j=e.seleccionarFavorito;return Object(f.jsxs)("div",{className:"contenedor",children:[Object(f.jsxs)("div",{style:{marginBottom:"1rem"},className:"encabezado-favoritos",children:[Object(f.jsx)("h1",{className:"titulo",children:Object(f.jsx)(o.b,{style:{textDecoration:"none",color:"black"},to:"/Principal/Favoritos",children:"Mostrar Favoritos"})}),Object(f.jsx)("div",{className:"fondo-estrella",children:Object(f.jsx)("img",{className:"logo-estrella",src:"/assets/img/start.png",alt:"Estrella-logo"})})]}),Object(f.jsx)(k,{setIsOpen:t,modalIsOpen:n,episodios:r,personajesInteresantes:i,detallesPersonaje:l}),Object(f.jsx)("div",{className:"card-info",children:void 0!==c&&c.map((function(e,t){return Object(f.jsx)(O,{personaje:e,handleView:s,openModal:a,seleccionarFavorito:j,color:""},t)}))})]})},V=(n(61),function(e){var t=e.selectFilter;return Object(f.jsx)("div",{className:"tabs-filtro",children:Object(f.jsxs)("ul",{onClick:t,className:"tabs-listado",children:[Object(f.jsx)("li",{children:"All"}),Object(f.jsx)("li",{children:"Unknown"}),Object(f.jsx)("li",{children:"Female"}),Object(f.jsx)("li",{children:"Male"}),Object(f.jsx)("li",{children:"Genderless"})]})})}),J=n(17),A=n(25),B=JSON.parse(localStorage.getItem("Page"))||1,L=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(b.a)(s,2),o=r[0],i=r[1],u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(b.a)(t,2),c=n[0],s=n[1];return[c,function(e){var t=e.target;s(Object(A.a)(Object(A.a)({},c),{},Object(J.a)({},t.name,t.value)))},function(){s(e)}]}({search:""}),O=Object(b.a)(u,3),x=O[0],v=O[1],g=O[2],N=Object(a.useState)([]),k=Object(b.a)(N,2),w=k[0],I=k[1],F=Object(a.useState)([]),L=Object(b.a)(F,2),R=L[0],D=L[1],G=Object(a.useState)([]),T=Object(b.a)(G,2),Y=T[0],q=T[1],U=Object(a.useState)(B),_=Object(b.a)(U,2),H=_[0],K=_[1],Q=Object(a.useState)([]),W=Object(b.a)(Q,1)[0],X=Object(a.useState)([]),Z=Object(b.a)(X,1)[0],$=x.search,ee=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:t=e.sent,t.info,n=t.results,i(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,P($);case 3:n=e.sent,n.info,a=n.results,i(a),localStorage.setItem("PersonajesFiltro",JSON.stringify(a)),g();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.textContent,e.next=3,M(n);case 3:a=e.sent,a.info,c=a.results,i(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t){e.next=6;break}return e.next=3,y(t);case 3:n=e.sent,ce(n),q([n]);case 6:se();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,c,s,r,o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I([]),void 0===t){e.next=25;break}6,[],n=function(){return Math.ceil(t.episode.length/6)}(),s=(c=0*n)+n,a=t.episode.slice(c,s),r=Object(j.a)(a),e.prev=10,i=d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.value,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,I((function(e){return[].concat(Object(l.a)(e),[a])}));case 8:case"end":return e.stop()}}),e)})),r.s();case 13:if((o=r.n()).done){e.next=17;break}return e.delegateYield(i(),"t0",15);case 15:e.next=13;break;case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(10),r.e(e.t1);case 22:return e.prev=22,r.f(),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[10,19,22,25]])})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,D(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){ce(),ee(),ae()}),[H]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(h,{children:Object(f.jsx)(E,{inputValue:v,search:$,handleSubmit:te})}),Object(f.jsx)(V,{selectFilter:ne}),Object(f.jsx)(C,{setIsOpen:c,modalIsOpen:n,openModal:function(){c(!0)},resultado:o,handleView:function(e){ae(e)},episodios:w,personajesInteresantes:R,detallesPersonaje:Y,seleccionarFavorito:function(e,t){var n=t.target.parentElement.parentElement.parentElement.parentElement.children[1].children[1].textContent;W.push(e),Z.push(e.id),localStorage.setItem("idFavoritos",JSON.stringify(Z)),localStorage.setItem("favoritos",JSON.stringify(W)),n===e.name?t.target.classList.add("active-color"):t.target.classList.remove("active-color")}}),Object(f.jsxs)("div",{className:"paginador-main",children:[Object(f.jsx)("button",{className:"paginador-boton",onClick:function(){K(H-1===0?1:H-1),localStorage.setItem("Page",H-1===0?1:H-1)},children:Object(f.jsx)("i",{className:"fas fa-arrow-left"})}),Object(f.jsx)("button",{className:"paginador-boton",onClick:function(){K(H+1===35?H:H+1),localStorage.setItem("Page",H+1===35?H:H+1)},children:Object(f.jsx)("i",{className:"fas fa-arrow-right"})})]}),Object(f.jsx)(m,{})]})},R=function(){return Object(f.jsxs)(o.a,{basename:"/RickyAndMorty",children:[Object(f.jsx)(i.b,{exact:!0,path:"/Principal",component:L}),Object(f.jsx)(i.d,{children:Object(f.jsx)(i.b,{exact:!0,path:"/Principal/Favoritos",component:F})}),Object(f.jsx)(i.a,{to:"/Principal"})]})},D=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(R,{})})};r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(D,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.3651b528.chunk.js.map