(this.webpackJsonplibfasc=this.webpackJsonplibfasc||[]).push([[0],{34:function(e,a,t){e.exports=t(45)},39:function(e,a,t){},40:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),i=t.n(c),o=(t(39),t(40),t(74)),l=t(46),s=t(23),u=t(73),d=t(67),m=t(68),g=t(75),p=Object(s.a)((function(e){return{root:{flexGrow:1},title:{marginRight:"auto"}}}));function f(){var e=p();return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{position:"relative"},r.a.createElement(m.a,null,r.a.createElement(l.a,{variant:"h6",className:e.title},"LibFasc"),r.a.createElement(g.a,{color:"inherit"},"Play"),r.a.createElement(g.a,{color:"inherit"},"Rules"))))}var h=t(25),E=t(26),v=t(28),b=t(27),y=t(29),k=t(72),x=t(71),C=t(69),w=t(70),j=Object(s.a)({card:{maxWidth:100},img:{maxWidth:100,height:"auto"}});function N(e){var a=j(),t="/libfasc/images/cards/"+e.cardType+".png";return r.a.createElement(C.a,{className:a.card},r.a.createElement(w.a,{title:e.cardType+"card"},r.a.createElement("img",{className:a.img,src:t,alt:e.cardType+"card"})))}function O(e){var a=e.cards.slice(0,e.index);return r.a.createElement(x.a,{container:!0,spacing:1},a.map((function(e){return r.a.createElement(x.a,{item:!0,key:e.key},r.a.createElement(N,{cardType:e.cardType}))})))}var T=Object(s.a)((function(e){return{guess:{backgroundColor:"gainsboro",paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},guessButton:{margin:e.spacing(1)},cardGrid:{backgroundColor:"darkgrey",paddingTop:e.spacing(8),paddingBottom:e.spacing(8)}}}));function B(e){var a=T();return r.a.createElement(k.a,{className:a.guess,maxWidth:"lg"},r.a.createElement(g.a,{variant:"outlined",className:a.guessButton,color:"primary",onClick:e.onClick(this),value:"liberal"},"LIB"),r.a.createElement(g.a,{variant:"outlined",className:a.guessButton,color:"secondary",onClick:e.onClick(this),value:"fascist"},"FASC"))}function F(e){var a=T();return r.a.createElement(k.a,{className:a.cardGrid,maxWidth:"lg"},r.a.createElement(O,{cards:e.cards,index:e.index}))}var W=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(v.a)(this,Object(b.a)(a).call(this,e))).guessCard=function(e){e===t.props.cards[t.state.index].cardType?t.state.index++:t.endGame()},t.state={index:0},t}return Object(y.a)(a,e),Object(E.a)(a,[{key:"endGame",value:function(){}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement(B,{onClick:this.guessCard}),r.a.createElement(F,{cards:this.props.cards,index:this.state.index})))}}]),a}(r.a.Component);function G(e,a){this.cardType=e,this.key="".concat(e,"-card-").concat(a)}function L(e,a){for(var t=[],n=0;n<a;n++)t.push(new G(e,n));return t}var A=Object(s.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),I=L("liberal",6),J=L("fascist",11),M=function(e){for(var a,t,n=e.length;n;)t=Math.floor(Math.random()*n--),a=e[n],e[n]=e[t],e[t]=a;return e}(I.concat(J));function R(){var e=A();return r.a.createElement("footer",{className:e.footer},r.a.createElement(l.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(u.a,{color:"inherit",href:"https://jamesbaskerville.github.io/libfasc/"},"LibFasc")," ",(new Date).getFullYear(),"."))}function S(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement(f,null),r.a.createElement(W,{cards:M}),r.a.createElement(R,null))}var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.61a7de59.chunk.js.map