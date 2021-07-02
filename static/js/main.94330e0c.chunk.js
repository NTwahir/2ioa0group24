(this.webpackJsonp2ioa0group24=this.webpackJsonp2ioa0group24||[]).push([[0],{185:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(60),i=n.n(r),s=n(11),c=n(3),l=n(4),d=n(23),h=n(24),u=n(25),b=n(27),m=(n(58),n(2)),p=n(63),f=n.n(p),j=n(1),g=f.a.home,y=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(m.g,{initialTab:"The tool",children:[Object(j.jsxs)(m.f,{title:"The tool",className:g,children:["This interactive web-based tool provides 2 different visualisations to present dynamic network data. Simply click on the Visualisations tab in the navigation bar above, and the 2 visualisations will load. They are both node-link graphs; the first is a network diagram, where you can click a node to see all its immediate connections. The second is an arc diagram, which presents the data on one axis, and on hovering over a node, will highlight all its edges. Both diagrams provide a tooltip to view data about the node.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),'The data comes from the Enron corpus, the history of which is also covered in more detail here. The data used contains 149 employees, each unique employee represented by a node, and 31,401 emails between them, being represented as edges. This is only a subset of the corpus, the full version of which contains over 600,000 emails and 158 employees, with a revised version containing over 1.7 million emails, which offers one of the largest and richest set of publically available, general-purpose corporate emails to date. The corpus also contains the actual email content of the emails that were sent out from employees, however, for our project, we do not consider email content. Rather, we work with a sentiment value that measures the "tone" of the email on an interval of [-1, 1]. ',Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"The corpus is a widely used and popular dataset used by many researchers in their studies on social networking and computer-mediated communication. Linguistic comparison with more recent corpora has shown changes in the linguistic register of formal e-mail communication in the English language since the data was collected in 2002. Jitesh Shetty and Jafar Adibi from the University of Southern California processed the data in 2004 and published a MySQL version, in addition to a link analysis of which users emailed which, revealing more about the relationship between various employees. The corpus is also used as test or training data for machine learning models and natural language processing."]}),Object(j.jsx)(m.f,{title:"The project",children:"The project is part of the Eindhoven University of Technology course 2IOA0 - DBL HTI + Webtech, where we develop a web based application to interactively visualise dynamic network data; anything that can be modeled as a network is covered under this project. Additionally, networks change over time, they are rarely static, so it can be very useful to visualise the structural changes of a network over time. This site has been created as a part of the project, by Nagib Twahir, Julia Dobladez Brisquet, Samir Saidi, and Poyraz Yapali."}),Object(j.jsx)(m.f,{title:"Enron",children:Object(j.jsxs)(m.b.Row,{cards:!0,deck:!0,className:g,children:[Object(j.jsx)(m.b.Col,{md:4,children:Object(j.jsxs)(m.a,{children:[Object(j.jsx)(m.a.Status,{color:"yellow",side:!0}),Object(j.jsx)(m.a.Header,{children:Object(j.jsx)(m.a.Title,{children:"History"})}),Object(j.jsxs)(m.a.Body,{children:["Enron Corporation was an American energy company based in Houston, Texas, founded by Kenneth Lay in 1985 as a merger between Houston Natural Gas and InterNorth. ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Enron employed approximately 29,000 staff, and was a major electricity, gas, communications and pulp and paper company before its bankruptcy on December 3, 2001, and had claimed revenues of $101 billion during 2000, a 658% increase in just four years, from 1996 when their revenue was $13 billion. ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Their growth and success made them a very attractive company for investors, and was one of the world's leaders in business, comparable to how we view companies like Apple and Google today. Based on the information people knew then, investing in Enron in the stock market was the best choice due to this unprecedented and unheard of growth that seemed to have no signs of slowing down or stopping. ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"As it turns out, only a year later in 2001 things would go quite badly as Enron went bankrupt and thousands of people lost their jobs, all the money they had invested into Enron, including retirement funds and 401k plans. This was due to a massive scandal involving Enron that was publicized in October of that year."]})]})}),Object(j.jsx)(m.b.Col,{md:4,children:Object(j.jsxs)(m.a,{children:[Object(j.jsx)(m.a.Status,{color:"orange",side:!0}),Object(j.jsx)(m.a.Header,{children:Object(j.jsx)(m.a.Title,{children:"Scandal"})}),Object(j.jsxs)(m.a.Body,{children:["Several years after the formation of Enron, in 1990, Jeffrey Skilling was hired as chairman and CEO of Enron Finance Corp., after impressing Kenneth Lay during Skilling's work with Enron as a consultant for McKinsey & Company. Skilling was promoted to manage other companies under Enron, such as Enron Gas Servies Co., Enron Capital and Trade Resources, and later, became president and COO of Enron, second only to Lay.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),'During Skilling\'s management, Enron adopted an accounting strategy called "mark-to-market", where the anticipated future profits from any deal were accounted for by estimating their present value, not their historical cost. For example, in 2000, Enron signed a 20 year contract with Blockbuster Video. Enron thought the contract would result in profits in excess of $100 million. The contract did not work out, however, and it was doomed from the start. The technology that Blockbuster signed the contract for did not actually work, and Blockbuster ended the deal.',Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"The problem with the mark-to-market strategy is that Enron recognized profits of $100 million from this deal, while they did not actually earn that money. Yet, they did report profits of $100 million from the deal. Repeated applications of this strategy made it seem like Enron was a very profitable company, by essentially creating profit out of thin air when it never actually existed. Enron used this as a way to cover up their failed deals, which, alongside many other accounting loopholes and shady business practices, caused this unprecedented growth in Enron's profit (which also means that, yes, the 658% increase in profit over 4 years previously mentioned was actually faked, however, financial advisors obviously did not know about this, and advised clients to invest in Enron due to this extremely large growth). ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"They had also faked their debts/liabilities by creating offshore companies and they would push the debt over to them, making it seem like Enron had little debts, as it was no longer on their financial reports, and therefore nonexistent as far as investors are concerned. Due to this, Enron had manipulated the stock market by fooling investors and financial advisors into making it seem like Enron was very profitable.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Enron's auditors, Arthur Andersen, would have exposed Enron's business practices and manipulation, but Enron had paid the auditors at Arthur Andersen to look the other way and ignore the issues. All of this led to lawsuits filed by Enron's shareholders, and investigations into Enron started by the United States Securities and Exchange Commission. The Federal Energy Regulatory Commission also investigated Enron, and produced the Enron corpus, generated from their email servers in the years leading up to the company's collapse, which is the dataset we are analysing. Enron filed for bankruptcy by December 2, 2001."]})]})}),Object(j.jsx)(m.b.Col,{md:4,children:Object(j.jsxs)(m.a,{children:[Object(j.jsx)(m.a.Status,{color:"red",side:!0}),Object(j.jsx)(m.a.Header,{children:Object(j.jsx)(m.a.Title,{children:"Aftermath"})}),Object(j.jsxs)(m.a.Body,{children:["The aftermath of the scandal introduced a new set of rules that dramatically changed the accounting industry due to its flaws at the time that led to this happening. Now, auditors have much stricter independence rules, and the CEO and CFO have to certify the financial statements, so they cannot deny that they ever saw them (which happened with Enron...) and additionally, penalties were increased for destroying, altering, or fabricating records in federal investigations or for attempting to defraud shareholders. ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"A result of a class action lawsuit by Enron employees who had lost their jobs and their pensions was a settlement of $3,100 for each employee. Investors received $4.2 billion in settlement from several banks in 2005. In 2008, a $7.2 billion settlement was reached on behalf of the shareholders.",Object(j.jsx)("br",{}),"Lay had long supported former president George W. Bush and donated to his campaigns, including his successful campaign in 2000, which increased criticism of the Bush administration in light of the scandal (due to the money that was used to donate to his campaign) and the Economist on January 2002 claimed Lay had been a close personal friend of Bush's family, and had backed him financially since his Congress bid in 1978, and he was rumored to be running as Secretary of Energy under Bush's administration, and in the same month, Time magazine accused the administration of attempting to distance themselves from the scandal."]})]})})]})})]})}}]),n}(a.Component),v=n(40),O=n.n(v),x=O.a.about,w=(O.a.iframe,function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(m.b.Row,{cards:!0,deck:!0,className:x,children:[Object(j.jsx)(m.b.Col,{md:4,children:Object(j.jsxs)(m.a,{children:[Object(j.jsx)(m.a.Status,{color:"yellow",side:!0}),Object(j.jsx)(m.a.Header,{children:Object(j.jsx)(m.a.Title,{children:"The tool"})}),Object(j.jsx)(m.a.Body,{children:"This interactive web-based tool provides 2 different visualisations to present dynamic network data."})]})}),Object(j.jsx)(m.b.Col,{md:4,children:Object(j.jsxs)(m.a,{children:[Object(j.jsx)(m.a.Status,{color:"orange",side:!0}),Object(j.jsx)(m.a.Header,{children:Object(j.jsx)(m.a.Title,{children:"The data"})}),Object(j.jsx)(m.a.Body,{children:"The sample data used is the email traffic of former energy service company Enron, with 149 employees with unique IDs (nodes) and 31.401 emails between them (edges)."})]})}),Object(j.jsx)(m.b.Col,{md:4,children:Object(j.jsxs)(m.a,{children:[Object(j.jsx)(m.a.Status,{color:"red",side:!0}),Object(j.jsx)(m.a.Header,{children:Object(j.jsx)(m.a.Title,{children:"Our team"})}),Object(j.jsx)(m.a.Body,{children:"Nagib Twahir, Julia Dobladez Brisquet, Samir Saidi, Thomas Schoenmakers, and Poyraz Yapali are Bachelor students at the Eindhoven University of Technology. This site has been created as a part of the Q4 course titled DBL HTI + Webtech (2IOA0)."})]})})]}),Object(j.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/3VHdJkp0vKk",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})}}]),n}(a.Component)),k=n(29),E=n(28),T=n.n(E),N=function(e){e=e.filter((function(e){return"136"!==e.toId&&"78"!==e.toId}));var t=Object(k.a)().key((function(e){return e.fromId})).sortKeys(c.a).entries(e),n=[],a=[];t.forEach((function(e){n.push(e.key),a.push(e.values.length)}));var o=T.a.zipObject(n,a),r=Object(k.a)().key((function(e){return e.fromId})).key((function(e){return e.date})).rollup((function(e){var t;return e.forEach((function(e){t=e.sentiment})),t})).entries(e),i=[];T.a.uniqBy(t,(function(e){return e.values[0].fromJobtitle})).forEach((function(e){return i.push(e.values[0].fromJobtitle)}));var l=T.a.zipObject(i,["#003f5c","#2f4b7c","#665191","#a05195","#d45087","#f95d6a","#ff7c43","#ffa600","#488f31","#de425b","#69b3a2"]);var d=function(e){var t=[],n=[],a=[];return e.forEach((function(e){var o=e.values[0].fromJobtitle,r=[],i=e.values[0].fromEmail,s=i.substring(0,i.lastIndexOf("@"));s=s.split(".").filter((function(e){return""!==e})),r.push(s),r.forEach((function(e){e.forEach((function(t,n){e[n]=t.charAt(0).toUpperCase()+t.substring(1)})),r=e.join(" ")})),t.push({id:e.key,name:r,email:i,job:{name:o,color:l[o]}}),a.push({id:e.key,job:o,thickness:e.values.length}),e.values.forEach((function(e){n.push({source:e.fromId,target:e.toId})}))})),[t,n,a]}(t),h=Object(s.a)(d,3),u=h[0],b=h[1],m=h[2],p=Object(k.a)().key((function(e){return e.job.name})).sortKeys(c.a).entries(u),f={nodes:u,links:b=b.filter((function(e,t,n){return t===n.findIndex((function(t){return t.source===e.source&&t.target===e.target}))})),jobs:i,stats:o,sortedNodes:p,uniqueNodes:t};return console.log({uniqueNodes:t,processedData:f,data:e,linkInfo:m,jobColor:l,sortedNodes:p,sentimentPerDay:r}),f},I=n(6),_=n.n(I),B=648-40-30,A=1152-10-30;function S(e){var t=Object(c.q)("line"),n=Object(c.q)("path"),a=Object(c.p)("#node-edge"),o=Object(c.p)("#chord");Object(c.q)("circle").on("click",(function(o,r){!function(e,t,n){t.style("stroke",(function(t){var n=t.source.id,a=t.target.id;return n===e.id?"red":a===e.id?"green":""})),n.style("stroke",(function(t){return t.source===e.id||t.target===e.id?"#69b3b2":"#b8b8b8"})).style("stroke-width",(function(t){return t.source===e.id||t.target===e.id?4:1}))}(r,t,n),L(r,"none","block",e),function(e,t,n,a){var o=n.selectAll("circle").filter((function(e){return e.id===t.id})).datum(),r=o.x,i=o.y;e.stopPropagation(),n.transition().duration(750).call(a.transform,c.s.translate(B/2,A/2).scale(2).translate(-r,-i),Object(c.k)(e,n.node()))}(o,r,a,U)})),a.on("click",(function(){return C(t,n,a,U)})),o.on("click",(function(){return C(t,n,a,U)}))}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"block",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"none",a=arguments.length>3?arguments[3]:void 0;e?(document.getElementById("nodeName").innerHTML="Name: "+e.name,document.getElementById("nodeTitle").innerHTML="Job title: "+e.job.name,document.getElementById("nodeUserID").innerHTML="User ID: "+e.id,document.getElementById("nodeEmailsSent").innerHTML="Number of Emails sent: "+a[e.id],document.getElementById("nodeEmailAddress").innerHTML="Email: "+e.email,document.getElementById("nodeMeanSentiment").innerHTML="Average sentiment: "+e.sentiment):(document.getElementById("nodeName").innerHTML="Name: ",document.getElementById("nodeTitle").innerHTML="Job title: ",document.getElementById("nodeUserID").innerHTML="User ID: ",document.getElementById("nodeEmailsSent").innerHTML="Number of Emails sent: ",document.getElementById("nodeEmailAddress").innerHTML="Email: ",document.getElementById("nodeMeanSentiment").innerHTML="Average sentiment: ");var o=document.getElementById("toolIntro"),r=document.getElementById("nodeDescription");o.style.display=t,r.style.display=n}function C(e,t,n,a){L(),n.transition().duration(750).call(a.transform,c.s,Object(c.t)(n.node()).invert([B/2,A/2])),e.style("stroke","#aaa"),t.style("stroke","#aaa")}var H=_.a.tooltip,D=_.a.legend,M=648-40-30,J=1152-10-30;var U=Object(c.r)().scaleExtent([.1,80]).on("zoom",(function(e){var t=e.transform;Object(c.p)("#graph").attr("transform",t)})),z=function(e,t){var n=t=N(t),a=n.nodes,o=n.links,r=n.jobs,i=n.stats,s=Object(c.p)(e).append("svg").attr("viewBox",[0,0,M,J]),l=Object(c.p)(e).append("div").attr("class",H).style("opacity",0),d=Object(c.n)().domain(r).range(["#003f5c","#2f4b7c","#665191","#a05195","#d45087","#f95d6a","#ff7c43","#ffa600","#488f31","#de425b","#69b3a2"]),h=Object(c.p)(e).append("div").attr("class",D).append("svg").attr("height","215px"),u=s.append("g").attr("id","graph"),b=u.selectAll("line").data(o).enter().append("line").style("stroke","#aaa").style("stroke-width",1),m=u.selectAll("circle").data(a).enter().append("circle").attr("cursor","pointer").attr("r",10).style("fill",(function(e){return e.job.color})).on("mouseover",(function(e,t){l.transition().duration(200).style("opacity",1),l.html("Name: "+t.name+"</br>Job title: "+t.job.name+"</br>User ID: "+t.id+"</br>Number of Emails sent: "+i[t.id]+"</br>Email: "+t.email).style("display","block").style("left",e.pageX+28+"px").style("top",e.pageY-162+"px")})).on("mouseout",(function(e){l.transition().duration(500).style("opacity",0)}));h.selectAll("mydots").data(r).enter().append("circle").attr("cx",10).attr("cy",(function(e,t){return 10+20*t})).attr("r",7).style("fill",(function(e){return d(e)})),h.selectAll("mylabels").data(r).enter().append("text").attr("x",30).attr("y",(function(e,t){return 10+20*t})).style("fill",(function(e){return d(e)})).text((function(e){return e})).attr("text-anchor","left").style("alignment-baseline","middle").style("top","50px").style("right","50px"),Object(c.i)(a).force("link",Object(c.g)().id((function(e){return e.id})).links(o).distance(0).strength(.05)).force("charge",Object(c.h)().strength(-4e3)).force("center",Object(c.f)(J/2,M/2)).on("tick",(function(){b.attr("x1",(function(e){return e.source.x})).attr("y1",(function(e){return e.source.y})).attr("x2",(function(e){return e.target.x})).attr("y2",(function(e){return e.target.y})).attr("source",(function(e){return e.source.id})).attr("target",(function(e){return e.target.id})),m.attr("cx",(function(e){return e.x})).attr("cy",(function(e){return e.y}))})),S(i),s.call(U)},R=_.a.tooltip,q=_.a.legend,F=648-40-30,G=1152-10-30,V=function(e,t){var n=t=N(t),a=n.nodes,o=n.links,r=n.jobs,i=n.stats,s=n.sortedNodes,l=Object(c.p)(e).append("svg").attr("viewBox",[0,0,F,G]),d=Object(c.p)(e).append("div").attr("class",R).style("opacity",0),h=Object(c.l)().domain(r).range(["#003f5c","#2f4b7c","#665191","#a05195","#d45087","#f95d6a","#ff7c43","#ffa600","#488f31","#de425b","#69b3a2"]),u=Object(c.p)(e).append("div").attr("class",q).append("svg").attr("height","215px"),b=l.append("g").attr("id","graph"),m=[],p={};s.forEach((function(e){e.values.forEach((function(e){m.push(e.name),p[e.id]=e}))}));var f=Object(c.o)().range([0,G]).domain(m),j=b.append("g").attr("class","links").selectAll("links").data(o).enter().append("path").attr("d",(function(e){var t=f(p[e.source].name),n=f(p[e.target].name);return["M",25,t,"A",(t-n)/2,",",(t-n)/2,0,0,",",t<n?1:0,25,n,","].join(" ")})).style("fill","none").attr("stroke","#aaa");b.append("g").attr("class","nodes").selectAll("nodes").data(a).enter().append("circle").attr("cy",(function(e){return f(e.name)})).attr("cx",25).attr("r",5).style("fill",(function(e){return e.job.color})).on("mouseover",(function(e,t){d.transition().duration(200).style("opacity",1),d.html("Name: "+t.name+"</br>Job title: "+t.job.name+"</br>User ID: "+t.id+"</br>Number of Emails sent: "+i[t.id]+"</br>Email: "+t.email).style("display","block").style("left","80px").style("top",e.pageY-162+"px"),j.style("stroke",(function(e){return e.source===t.id||e.target===t.id?"#69b3b2":"#b8b8b8"})).style("stroke-width",(function(e){return e.source===t.id||e.target===t.id?4:1}))})).on("mouseout",(function(e){d.transition().duration(500).style("opacity",0),j.style("stroke","#aaa").style("stroke-width","1")})),u.selectAll("mydots").data(r).enter().append("circle").attr("cx",10).attr("cy",(function(e,t){return 10+20*t})).attr("r",7).style("fill",(function(e){return h(e)})),u.selectAll("mylabels").data(r).enter().append("text").attr("x",30).attr("y",(function(e,t){return 10+20*t})).style("fill",(function(e){return h(e)})).text((function(e){return e})).attr("text-anchor","left").style("alignment-baseline","middle"),S(i)},Y=_.a.SvgThree,$=460-40-30,W=450-10-90,K=function(e,t){var n=(t=N(t)).uniqueNodes[0],a=[],o=[];n.values.forEach((function(e){a.push(e.date),o.push(e.sentiment)})),a.forEach((function(e){return new Date(e.date)})),console.log(a,o,n);var r=Object(c.p)(e).append("svg").attr("class",Y).attr("viewBox",[0,0,$,W]),i=Object(c.l)().domain(Object(c.e)(a)).range([0,$]).padding(.2);r.append("g").attr("transform","translate(0,"+W+")").call(Object(c.b)(i)).selectAll("text").attr("transform","translate(-10,0)rotate(-45)").style("text-anchor","end");var s=Object(c.m)().domain([-1,1]).range([W,0]);r.append("g").call(Object(c.c)(s)),r.append("path").datum(t).attr("fill","none").attr("stroke","#69b3a2").attr("stroke-width",1.5).attr("d",Object(c.j)().x((function(e){return i(e.date)})).y((function(e){return s(e.value)}))),r.append("g").selectAll("dot").data(t).enter().append("circle").attr("cx",(function(e){return i(e.date)})).attr("cy",(function(e){return s(e.sentiment)})).attr("r",5).attr("fill","#69b3a2"),r.selectAll("rect").transition().duration(800).attr("y",(function(e){return s(e.sentiment)})).attr("height",(function(e){return W-s(e.sentiment)})).delay((function(e,t){return console.log(t),100*t}))};function P(e){var t=e.data,n=e.type,r=o.a.useRef(null);return Object(a.useEffect)((function(){return r.current&&1===n?z(r.current,t):r.current&&2===n?V(r.current,t):r.current&&3===n?K(r.current,t):null}),[]),Object(j.jsx)("div",{ref:r})}var Q=n(18),X=_.a.gridContainer,Z=_.a.titles,ee=_.a.node,te=_.a.chord,ne=_.a.info,ae=_.a.vis1,oe=_.a.vis2,re=_.a.introduction,ie=_.a.important,se=function(e){var t=e.data;return Object(j.jsxs)("div",{className:X,children:[Object(j.jsx)("h1",{id:"one",className:"".concat(Z," ").concat(ee),children:"Node-edge graph of email network"}),Object(j.jsx)("div",{className:ae,id:"node-edge",children:Object(j.jsx)(P,{data:t,type:1})}),Object(j.jsxs)("div",{className:re,id:"toolIntro",style:{display:"block"},children:[Object(j.jsx)("h1",{children:"Welcome to CSVIZ!"}),Object(j.jsx)("p",{children:"This interactive visualisation tool provides you with two visualisations of dynamic network data."}),Object(j.jsxs)("p",{children:["The dataset comes from Enron, which, if you're interested, is covered in more depth in our ",Object(j.jsx)(Q.b,{to:"/",children:" homepage."})]}),Object(j.jsx)("p",{children:"With this tool, you can: "}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:ie,children:"Drag"}),": Simply click and drag to move the graph around."]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:ie,children:"Double click or scroll"}),": Double clicking or scrolling will zoom in on the graph. Clicking again will reset it to its original position."]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:ie,children:"Node click"}),": Click on a node to zoom into the node, and display some information about the user the node represents, as well as a bar graph that contains the user's average email sentiment value per day.",Object(j.jsx)("br",{}),"Additionally, on the node diagram to your left, clicking on a node will also highlight incoming and outgoing edges, and hide all other edges not connected to the node, allowing you to see who this user has emailed, and who has emailed this user.",Object(j.jsx)("br",{}),"Red edges represent emails the user sent, while green edges represent emails the user received. "]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:ie,children:"Hover"}),": If you hover over a node, the same summary will be displayed in a small tooltip.",Object(j.jsx)("br",{}),"Additionally, on the chord diagram to your right, hovering on a node will also highlight all edges the user has with other users, representing the users who they have emailed."]})]}),Object(j.jsx)("p",{children:"We hope you enjoy using this tool!"})]}),Object(j.jsxs)("div",{className:ne,id:"nodeDescription",style:{display:"none"},children:[Object(j.jsx)("h1",{children:"Node Information:"}),Object(j.jsx)("p",{id:"nodeName",children:"Name: "}),Object(j.jsx)("p",{id:"nodeTitle",children:"Job title: "}),Object(j.jsx)("p",{id:"nodeUserID",children:"User ID: "}),Object(j.jsx)("p",{id:"nodeEmailsSent",children:"Number of Emails sent: "}),Object(j.jsx)("p",{id:"nodeEmailAddress",children:"Email: "}),Object(j.jsx)("p",{id:"nodeMeanSentiment",children:"Average sentiment: "})]}),Object(j.jsx)("h1",{id:"two",className:"".concat(Z," ").concat(te),children:"Chord graph of email network"}),Object(j.jsx)("div",{className:oe,id:"chord",children:Object(j.jsx)(P,{data:t,type:2})})]})},ce=n(65),le=n.n(ce);m.c;var de=le.a.navbar,he=function(){return Object(j.jsx)("div",{className:de,children:Object(j.jsxs)(m.d,{children:[Object(j.jsx)(m.d.Item,{to:"/",value:"Homepage",icon:"home"}),Object(j.jsx)(m.d.Item,{to:"/About",value:"About Us",icon:"globe"}),Object(j.jsx)(m.d.Item,{to:"/Visualizations",value:"Visualizations",icon:"star"}),Object(j.jsx)(m.d.Item,{to:"https://github.com/NTwahir/2ioa0group24",value:"GitHub",icon:"github"})]})})},ue=n.p+"static/media/footer.2a8ca8a2.png",be=n(26),me=n.n(be),pe=me.a.footer,fe=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:pe,src:ue,alt:"CSVIZ Logo"})})},je=me.a.footerTab,ge=function(){return Object(j.jsx)("div",{className:je,children:Object(j.jsx)(m.e,{children:Object(j.jsx)(m.e.Footer,{nav:Object(j.jsx)(fe,{}),copyright:"Site created using React, D3 and the Tabler React UI."})})})};var ye=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){Object(c.d)("https://raw.githubusercontent.com/NTwahir/2ioa0group24/master/data/enron-v1.csv").then(o)}),[]),n?Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(he,{}),Object(j.jsx)(l.a,{exact:!0,path:"/",component:y}),Object(j.jsx)(l.a,{path:"/About",component:w}),Object(j.jsx)(l.a,{path:"/Visualizations",render:function(){return Object(j.jsx)(se,{data:n})}}),Object(j.jsx)(ge,{})]}):Object(j.jsx)("div",{children:"Loading... "})};n(185);i.a.render(Object(j.jsx)(Q.a,{basename:"/2ioa0group24",children:Object(j.jsx)(ye,{})}),document.getElementById("root"))},26:function(e,t,n){e.exports={footerTab:"FooterImage_footerTab__1TXtN"}},40:function(e,t,n){e.exports={about:"About_about__2Hbag"}},6:function(e,t,n){e.exports={gridContainer:"NodeLink_gridContainer__6OUIb",tooltip:"NodeLink_tooltip__BMukY",legend:"NodeLink_legend__1c5GI",titles:"NodeLink_titles__vvgPw",node:"NodeLink_node__JRnie",chord:"NodeLink_chord__2Yv3H",vis1:"NodeLink_vis1__3xWRG",vis2:"NodeLink_vis2__3hu-6",SvgThree:"NodeLink_SvgThree__2DjTT",info:"NodeLink_info__1CpEn",introduction:"NodeLink_introduction__26s_b",important:"NodeLink_important__11RPf"}},63:function(e,t,n){e.exports={home:"Home_home__9bb7G"}},65:function(e,t,n){e.exports={navbar:"NavBar_navbar__23guE"}}},[[186,1,2]]]);
//# sourceMappingURL=main.94330e0c.chunk.js.map