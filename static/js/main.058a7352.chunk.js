(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(t,e,n){t.exports={button:"FeedbackOptions_button__36NXp",button_good:"FeedbackOptions_button_good__3sTy6",button_bad:"FeedbackOptions_button_bad__1Js-T"}},,,,,,function(t,e,n){t.exports={container:"App_container__2ATCl"}},,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),a=n(4),r=n.n(a),s=(n(15),n(5)),i=n(6),b=n(7),d=n(10),u=n(9),l=(n(16),n(0)),j=function(t){var e=t.title,n=t.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:e}),n]})},p=n(2),h=n.n(p),O=function(t){var e=t.options,n=t.onLeaveFeedback,o=[h.a.button];return Object(l.jsx)(l.Fragment,{children:Object.keys(e).map((function(t){return Object(l.jsx)("button",{onClick:function(){return n(t)},type:"button",className:o.concat("good"===t&&h.a.button_good||"bad"===t&&h.a.button_bad).join(" "),children:t},t)}))})},g=function(t){var e=t.message;return Object(l.jsx)("p",{children:e})},v=(n(18),function(t){var e=t.good,n=t.neutral,o=t.bad,c=t.total,a=t.positivePercentage;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:["Good:",e]}),Object(l.jsxs)("p",{children:["Neutral:",n]}),Object(l.jsxs)("p",{children:["Bad:",o]}),Object(l.jsxs)("p",{children:["Total:",c]}),Object(l.jsxs)("p",{children:["PositivePercentage:",a]})]})});v.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var f=v,x=n(8),k=n.n(x),_=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.leaveFeedback=function(e){t.setState((function(t){return Object(s.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){var e=t.state.good;return e&&Math.round(100*e/t.countTotalFeedback())},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,o=t.bad,c=this.countTotalFeedback();return Object(l.jsxs)("div",{className:k.a.container,children:[Object(l.jsx)(j,{title:"Please leave feedback",children:Object(l.jsx)(O,{options:this.state,onLeaveFeedback:this.leaveFeedback})}),Object(l.jsx)(j,{title:"Statistics",children:c>0?Object(l.jsx)(f,{good:e,neutral:n,bad:o,total:c,positivePercentage:this.countPositiveFeedbackPercentage()}):Object(l.jsx)(g,{message:"No feedback given"})})]})}}]),n}(o.Component);r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.058a7352.chunk.js.map