(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){e.exports=n(29)},24:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);for(var r=n(0),a=n.n(r),o=n(5),c=n.n(o),l=(n(24),n(6)),i=n(7),s=n(9),u=n(8),p=n(10),m=n(2),h=(n(16),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).handleClick=function(){console.log("click column:",n.props.columns),n.props.drop(n.props.columns)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"board",onClick:this.handleClick},a.a.createElement("p",null,"column: ",this.props.columns,", ",a.a.createElement("br",null)," row: ",this.props.rows," "))}}]),t}(r.Component)),g=Object(m.b)(function(e){return{current_ply:e.current_player,winner:e.winner,start_game:e.active_game}},function(e){return{drop:function(t){return e(function(e){return console.log("in actions"),{type:"DROP_TOKEN",payload:e}}(t))},startGame:function(){return e(function(e){e({type:"GAME_START"}),e({type:"CURRENT_PLAYER",payload:1})})}}})(h),d=[],f=6;f>=0;f--){for(var v=[],y=0;y<7;y++)v.push(a.a.createElement(g,{columns:y,rows:f})),console.log("colmun length",v);d.push(a.a.createElement("div",{className:"row"},v))}console.log("row length",d);var w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).start=function(e){console.log("starting game"),e.preventDefault(),n.props.begin()},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("is game active",this.props.start_game),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("button",{onClick:this.start}," Start Game "),a.a.createElement("p",null,"Game Active: ",this.props.start_game),a.a.createElement("p",null," The Current Player is: Player ",this.props.current_ply)),a.a.createElement("div",{className:"rows"},d))}}]),t}(r.Component),_=Object(m.b)(function(e){return{current_ply:e.current_player,winner:e.winner,start_game:e.active_game}},function(e){return{begin:function(){return e(function(e){e({type:"GAME_START"}),e({type:"CURRENT_PLAYER",payload:1})})}}})(w),E=n(3),b=n(18),O={active_game:!1,current_player:1,winner:"",gameBoard:[[],[],[],[],[],[],[]]};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=Object(E.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(console.log(" game active:",t.payload),t.type){case"GAME_START":return{active_game:!e.active_game};case"CURRENT_PLAYER":return{current_player:t.payload};case"DROP_TOKEN":return{current_player:1===e.current_player?2:1};default:return e}},Object(E.a)(b.a));c.a.render(a.a.createElement(m.a,{store:j},a.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.21c07be7.chunk.js.map