(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(4),c=t.n(l),i=t(1);t(10);var o=function(e){return r.a.createElement("div",{className:"score"},r.a.createElement("h3",null,"Score"),r.a.createElement("p",null,"player X: ",e.score.playerX),r.a.createElement("p",null,"player O: ",e.score.playerO))};var u=function(e){return r.a.createElement("div",{className:"turn-of"},"player ",e.turnOf)};var s=function(e){return"Draw"!=e.winner?r.a.createElement("div",null,"Winner is: ",e.winner):r.a.createElement("div",null,"It's a ",e.winner)};var f=function(e){return e.winner?r.a.createElement("button",{onClick:e.handlePlayAgain},"Play Again"):r.a.createElement("button",{style:{visibility:"hidden"}},"Play Again")},m=t(2);var y=function(e){return r.a.createElement("div",{className:"block",onClick:e.handleClick})};function b(){for(var e=[],n=Object(a.useState)({playerX:0,playerO:0}),t=Object(i.a)(n,2),l=t[0],c=t[1],o=Object(a.useState)("X"),u=Object(i.a)(o,2),s=u[0],f=u[1],b=Object(a.useState)(null),p=Object(i.a)(b,2),v=p[0],E=p[1],d=!1,O=["012","345","678","036","147","258","048","246"],h=[],k=0;k<9;k++)h.push(r.a.createElement(y,{key:k,handleClick:j}));function j(n){if(!v&&!n.target.innerHTML&&(n.target.innerHTML=s,function(){for(var n=document.querySelectorAll(".block"),t=0;t<O.length;t++){var a=parseInt(O[t][0]),r=parseInt(O[t][1]),i=parseInt(O[t][2]);if(n[a].innerHTML&&n[a].innerHTML==n[r].innerHTML&&n[r].innerHTML==n[i].innerHTML){E(s),e=[a,r,i],d=!0,c("X"==s?Object(m.a)(Object(m.a)({},l),{},{playerX:l.playerX+1}):Object(m.a)(Object(m.a)({},l),{},{playerO:l.playerO+1})),T();break}}}(),function(){var e=document.querySelectorAll(".block");if(!d)for(var n=0;n<e.length&&""!=e[n].innerHTML;n++)n==e.length-1&&E("Draw")}(),!v))switch(s){case"X":f("O");break;case"O":f("X")}}function T(){var n=document.querySelectorAll(".block"),t=e,a=Object(i.a)(t,3),r=a[0],l=a[1],c=a[2];n[r].style.color="#8cceff",n[l].style.color="#8cceff",n[c].style.color="#8cceff"}return[h,s,v,l,function(){E(null),e=[];for(var n=document.querySelectorAll(".block"),t=0;t<n.length;t++)n[t].innerHTML="",n[t].style.color="#ececec"}]}var p=function(){var e=b(),n=Object(i.a)(e,5),t=n[0],a=n[1],l=n[2],c=n[3],m=n[4];return r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"Tic Tac Toe"),r.a.createElement(o,{score:c}),r.a.createElement(f,{winner:l,handlePlayAgain:m}),r.a.createElement("div",{className:"blocks"},t),r.a.createElement("footer",null,l?r.a.createElement(s,{winner:l}):r.a.createElement(u,{turnOf:a})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))},5:function(e,n,t){e.exports=t(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.28786a6d.chunk.js.map