(this.webpackJsonpreact_test=this.webpackJsonpreact_test||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(7),i=n.n(r),c=n(1),l=n(2),s=n(4),p=n(3),m=n(5),u=function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc doted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",n,a.a.createElement("button",{onClick:this.props.eliminateItem.bind(this,e),style:d},"X")))}}]),e}(o.Component),d={background:"#a84232",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},h=u,b=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(h,{key:e.id,todo:e,markComplete:t.props.markComplete,eliminateItem:t.props.eliminateItem})}))}}]),e}(a.a.Component),f=(n(13),function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[{id:1,title:"Take out trash",completed:!1},{id:2,title:"Go to the hospital",completed:!1},{id:3,title:"Date in the aquarium",completed:!1}]},n.eliminateItem=function(t){n.state.todos.remove(t)},n.markComplete=function(t){n.setState({todos:n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Hello world"),a.a.createElement(b,{todos:this.state.todos,markComplete:this.markComplete,eliminateItem:this.eliminateItem}))}}]),e}(a.a.Component));i.a.render(a.a.createElement(f,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1e4d31f9.chunk.js.map