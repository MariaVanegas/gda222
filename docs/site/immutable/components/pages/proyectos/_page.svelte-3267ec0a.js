import{S as F,i as O,s as R,k as g,a as z,q as A,l as p,m as k,h as c,c as C,r as H,n as h,M as x,b as S,H as n,u as T,B as Q,e as B,f as M,g as re,t as U,d as ie,P as ne,w as J,x as K,y as W,z as X,Q as ce,L as ee,o as oe}from"../../../chunks/index-f220cb6f.js";import{g as fe,t as ue}from"../../../chunks/store-f7a9683a.js";/* empty css                                                             */import{c as he}from"../../../chunks/dsv-772e98ef.js";function me(i){let t,l,e,a,s,m,_,$,y,b=i[0].nombreFamilia+"",I,w,r,d=i[0].Subtitulo+"",o,q;return{c(){t=g("a"),l=g("div"),e=g("div"),a=g("img"),_=z(),$=g("div"),y=g("h1"),I=A(b),w=z(),r=g("p"),o=A(d),this.h()},l(E){t=p(E,"A",{class:!0,href:!0});var D=k(t);l=p(D,"DIV",{class:!0});var P=k(l);e=p(P,"DIV",{class:!0});var L=k(e);a=p(L,"IMG",{class:!0,alt:!0,src:!0}),L.forEach(c),_=C(P),$=p(P,"DIV",{class:!0});var v=k($);y=p(v,"H1",{class:!0});var f=k(y);I=H(f,b),f.forEach(c),w=C(v),r=p(v,"P",{class:!0});var u=k(r);o=H(u,d),u.forEach(c),v.forEach(c),P.forEach(c),D.forEach(c),this.h()},h(){h(a,"class","gallery-img no-select svelte-ewwq37"),h(a,"alt",s=i[0].nombreFamilia),x(a.src,m=i[0].fotoPrototipo)||h(a,"src",m),h(e,"class","left"),h(y,"class","gallery-name svelte-ewwq37"),h(r,"class","gallery-description svelte-ewwq37"),h($,"class","right svelte-ewwq37"),h(l,"class","gallery-div svelte-ewwq37"),h(t,"class","clean-link"),h(t,"href",q=`./gda/proyecto/?p=${i[1]+1}`)},m(E,D){S(E,t,D),n(t,l),n(l,e),n(e,a),n(l,_),n(l,$),n($,y),n(y,I),n($,w),n($,r),n(r,o)},p(E,[D]){D&1&&s!==(s=E[0].nombreFamilia)&&h(a,"alt",s),D&1&&!x(a.src,m=E[0].fotoPrototipo)&&h(a,"src",m),D&1&&b!==(b=E[0].nombreFamilia+"")&&T(I,b),D&1&&d!==(d=E[0].Subtitulo+"")&&T(o,d),D&2&&q!==(q=`./gda/proyecto/?p=${E[1]+1}`)&&h(t,"href",q)},i:Q,o:Q,d(E){E&&c(t)}}}function _e(i,t,l){let{data:e}=t,{i:a}=t;return i.$$set=s=>{"data"in s&&l(0,e=s.data),"i"in s&&l(1,a=s.i)},[e,a]}class de extends F{constructor(t){super(),O(this,t,_e,me,R,{data:0,i:1})}}function te(i,t,l){const e=i.slice();return e[1]=t[l],e[3]=l,e}function le(i){let t,l,e,a,s,m,_,$,y,b,I,w,r,d,o=[],q=new Map,E,D,P=i[0];const L=f=>f[3];for(let f=0;f<P.length;f+=1){let u=te(i,P,f),V=L(u);q.set(V,o[f]=ae(V,u))}let v=i[0].length%2===0&&se();return{c(){t=g("div"),l=g("div"),e=g("div"),a=g("h1"),s=A("\xA1 Mucha"),m=g("br"),_=A("l\xE1mpara !"),$=z(),y=g("h2"),b=A("COLECCI\xD3N 2022-2"),I=z(),w=g("h2"),r=A("DISE\xD1O INDUSTRIAL UEB"),d=z();for(let f=0;f<o.length;f+=1)o[f].c();E=z(),v&&v.c(),this.h()},l(f){t=p(f,"DIV",{});var u=k(t);l=p(u,"DIV",{class:!0});var V=k(l);e=p(V,"DIV",{class:!0});var j=k(e);a=p(j,"H1",{class:!0});var N=k(a);s=H(N,"\xA1 Mucha"),m=p(N,"BR",{}),_=H(N,"l\xE1mpara !"),N.forEach(c),$=C(j),y=p(j,"H2",{class:!0});var Y=k(y);b=H(Y,"COLECCI\xD3N 2022-2"),Y.forEach(c),I=C(j),w=p(j,"H2",{class:!0});var Z=k(w);r=H(Z,"DISE\xD1O INDUSTRIAL UEB"),Z.forEach(c),j.forEach(c),d=C(V);for(let G=0;G<o.length;G+=1)o[G].l(V);E=C(V),v&&v.l(V),V.forEach(c),u.forEach(c),this.h()},h(){h(a,"class","no-select svelte-jutxzt"),h(y,"class","no-select svelte-jutxzt"),h(w,"class","no-select svelte-jutxzt"),h(e,"class","gallery-title svelte-jutxzt"),h(l,"class","gallery-container svelte-jutxzt")},m(f,u){S(f,t,u),n(t,l),n(l,e),n(e,a),n(a,s),n(a,m),n(a,_),n(e,$),n(e,y),n(y,b),n(e,I),n(e,w),n(w,r),n(l,d);for(let V=0;V<o.length;V+=1)o[V].m(l,null);n(l,E),v&&v.m(l,null),D=!0},p(f,u){u&1&&(P=f[0],re(),o=ne(o,u,L,1,f,P,q,l,ce,ae,E,te),ie()),f[0].length%2===0?v||(v=se(),v.c(),v.m(l,null)):v&&(v.d(1),v=null)},i(f){if(!D){for(let u=0;u<P.length;u+=1)M(o[u]);D=!0}},o(f){for(let u=0;u<o.length;u+=1)U(o[u]);D=!1},d(f){f&&c(t);for(let u=0;u<o.length;u+=1)o[u].d();v&&v.d()}}}function ae(i,t){let l,e,a;return e=new de({props:{data:t[1],i:t[3]}}),{key:i,first:null,c(){l=B(),J(e.$$.fragment),this.h()},l(s){l=B(),K(e.$$.fragment,s),this.h()},h(){this.first=l},m(s,m){S(s,l,m),W(e,s,m),a=!0},p(s,m){t=s;const _={};m&1&&(_.data=t[1]),m&1&&(_.i=t[3]),e.$set(_)},i(s){a||(M(e.$$.fragment,s),a=!0)},o(s){U(e.$$.fragment,s),a=!1},d(s){s&&c(l),X(e,s)}}}function se(i){let t;return{c(){t=g("div"),this.h()},l(l){t=p(l,"DIV",{class:!0}),k(t).forEach(c),this.h()},h(){h(t,"class","gallery-title svelte-jutxzt")},m(l,e){S(l,t,e)},d(l){l&&c(t)}}}function ve(i){let t,l,e=i[0]&&le(i);return{c(){e&&e.c(),t=B()},l(a){e&&e.l(a),t=B()},m(a,s){e&&e.m(a,s),S(a,t,s),l=!0},p(a,[s]){a[0]?e?(e.p(a,s),s&1&&M(e,1)):(e=le(a),e.c(),M(e,1),e.m(t.parentNode,t)):e&&(re(),U(e,1,1,()=>{e=null}),ie())},i(a){l||(M(e),l=!0)},o(a){U(e),l=!1},d(a){e&&e.d(a),a&&c(t)}}}function ge(i,t,l){let{mainData:e}=t;return i.$$set=a=>{"mainData"in a&&l(0,e=a.mainData)},[e]}class pe extends F{constructor(t){super(),O(this,t,ge,ve,R,{mainData:0})}}function Ee(i){let t,l,e,a,s,m,_=i[1].mainPage.title+"",$,y,b,I,w;return I=new pe({props:{mainData:i[0]}}),{c(){t=g("div"),l=g("a"),e=A("Acerca de"),a=z(),s=g("header"),m=g("h1"),$=A(_),y=z(),b=g("div"),J(I.$$.fragment),this.h()},l(r){t=p(r,"DIV",{class:!0});var d=k(t);l=p(d,"A",{class:!0,href:!0});var o=k(l);e=H(o,"Acerca de"),o.forEach(c),d.forEach(c),a=C(r),s=p(r,"HEADER",{class:!0});var q=k(s);m=p(q,"H1",{class:!0});var E=k(m);$=H(E,_),E.forEach(c),q.forEach(c),y=C(r),b=p(r,"DIV",{class:!0});var D=k(b);K(I.$$.fragment,D),D.forEach(c),this.h()},h(){h(l,"class","menu-item clean-link svelte-tk1of1"),h(l,"href","./acerca"),h(t,"class","top-menu svelte-tk1of1"),h(m,"class","title no-select svelte-tk1of1"),h(s,"class","header"),h(b,"class","gallery-container svelte-tk1of1")},m(r,d){S(r,t,d),n(t,l),n(l,e),S(r,a,d),S(r,s,d),n(s,m),n(m,$),S(r,y,d),S(r,b,d),W(I,b,null),w=!0},p(r,[d]){(!w||d&2)&&_!==(_=r[1].mainPage.title+"")&&T($,_);const o={};d&1&&(o.mainData=r[0]),I.$set(o)},i(r){w||(M(I.$$.fragment,r),w=!0)},o(r){U(I.$$.fragment,r),w=!1},d(r){r&&c(t),r&&c(a),r&&c(s),r&&c(y),r&&c(b),X(I)}}}function $e(i,t,l){let e,a;ee(i,fe,_=>l(2,e=_)),ee(i,ue,_=>l(1,a=_)),console.log(e);let s;oe(async()=>{l(0,s=(await m(e)).slice(1))});async function m(_){return await he(_)}return[s,a]}class ye extends F{constructor(t){super(),O(this,t,$e,Ee,R,{})}}function De(i){let t,l;return t=new ye({}),{c(){J(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,a){W(t,e,a),l=!0},p:Q,i(e){l||(M(t.$$.fragment,e),l=!0)},o(e){U(t.$$.fragment,e),l=!1},d(e){X(t,e)}}}class Ve extends F{constructor(t){super(),O(this,t,null,De,R,{})}}export{Ve as default};