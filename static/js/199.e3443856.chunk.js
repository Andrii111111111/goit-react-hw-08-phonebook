"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[199],{1445:function(n,e,t){t.d(e,{Gh:function(){return x},MM:function(){return u},W2:function(){return p},WL:function(){return l}});var r,i,o,a,c,s=t(168),d=t(7924),u=d.ZP.div(r||(r=(0,s.Z)(["\n  width: 80%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  text-align: right;\n  nav {\n    display: flex;\n    justify-content: flex-end;\n    gap: 25px;\n  }\n  nav a {\n    color: white;\n    text-decoration: none;\n    font-weight: bold;\n  }\n  nav a:hover,\n  :focus {\n    text-decoration: underline;\n  }\n"]))),l=d.ZP.header(i||(i=(0,s.Z)(["\n  background-color: #007bff;\n  color: #fff;\n  text-align: center;\n  padding: 5px;\n"]))),p=d.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  box-sizing: border-box;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  height: 500px;\n  justify-content: center;\n  align-items: center;\n"]))),x=d.ZP.h1(a||(a=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 30px;\n  color: #010101;\n  margin-bottom: 20px;\n"])));d.ZP.p(c||(c=(0,s.Z)(["\n  font-weight: 700;\n  margin: 0;\n"])))},4199:function(n,e,t){t.r(e),t.d(e,{default:function(){return tn}});var r,i,o,a,c,s,d,u,l,p,x,f,m,h,g,b,Z,v=t(2791),j=t(9434),y=t(7689),w=t(1087),P=t(3958),k=t(5861),C=t(9439),z=t(7757),A=t.n(z),I=t(168),M=t(7924),L=M.ZP.form(r||(r=(0,I.Z)(["\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n"]))),U=M.ZP.label(i||(i=(0,I.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  font-weight: bold;\n  margin-bottom: 10px;\n"]))),F=M.ZP.input(o||(o=(0,I.Z)(["\n  width: 90%;\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n"]))),N=M.ZP.button(a||(a=(0,I.Z)(["\n  display: block;\n  width: 100%;\n  padding: 10px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n"]))),S=t(8174),_=(t(5462),t(3329)),G=function(){var n=(0,j.v9)((function(n){return n.contacts.items})),e=(0,v.useState)(""),t=(0,C.Z)(e,2),r=t[0],i=t[1],o=(0,v.useState)(""),a=(0,C.Z)(o,2),c=a[0],s=a[1],d=(0,j.I0)(),u=function(){var e=(0,k.Z)(A().mark((function e(t){var o;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),o={name:r,number:c},!n.find((function(n){return n.name.toUpperCase()===o.name.toUpperCase()}))){e.next=6;break}S.Am.error("".concat(o.name," is already in the contacts")),e.next=11;break;case 6:return e.next=8,d((0,P.uK)(o));case 8:return e.next=10,d((0,P.yF)());case 10:S.Am.success("".concat(o.name," added to contacts"));case 11:i(""),s("");case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,_.jsxs)("div",{children:[(0,_.jsx)(L,{onSubmit:u,children:(0,_.jsxs)(U,{children:[(0,_.jsx)(F,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zAZ\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Name",required:!0,value:r,onChange:function(n){return i(n.target.value)}}),(0,_.jsx)(F,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Number",required:!0,value:c,onChange:function(n){return s(n.target.value)}}),(0,_.jsx)(N,{type:"submit",children:"Add new contact"})]})}),(0,_.jsx)(S.Ix,{})]})},K=M.ZP.ul(c||(c=(0,I.Z)(["\n  width: 100%;\n  margin: 0 auto; \n  list-style-type: none;\n  padding: 0;\n"]))),W=M.ZP.li(s||(s=(0,I.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),q=M.ZP.button(d||(d=(0,I.Z)(["\n  background-color: red;\n  color: white;\n  border: none;\n  padding: 5px 10px;\n  cursor: pointer;\n"]))),D=function(){var n=(0,j.v9)((function(n){return n.contacts.items})),e=(0,j.v9)((function(n){return n.filter})),t=(0,j.I0)(),r=e.length>0?n.filter((function(n){return n.name.toUpperCase().includes(e.toUpperCase())})):n;return(0,_.jsx)(K,{children:r.length>0?r.map((function(n){return(0,_.jsxs)(W,{children:[n.name,": ",n.number,(0,_.jsx)(q,{type:"button",onClick:function(){return e=n.id,void t((0,P.GK)(e));var e},children:"Delete"})]},n.id)})):(0,_.jsx)(W,{children:"You don't have any contacts yet"})})},E=M.ZP.div(u||(u=(0,I.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),B=M.ZP.label(l||(l=(0,I.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  font-weight: bold;\n"]))),J=M.ZP.input(p||(p=(0,I.Z)(["\n  width: 300px;\n  padding: 10px;\n  margin-left: 5px;\n  margin-bottom: 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n"]))),O=t(6895),Y=function(){var n=(0,j.I0)();return(0,_.jsxs)(E,{children:[(0,_.jsx)(B,{children:"Find contacts by name"}),(0,_.jsx)(J,{name:"name",onChange:function(e){n((0,O.M6)(e.target.value))},placeholder:"Name"})]})},$=t(1445),H=M.ZP.div(x||(x=(0,I.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n"]))),Q=M.ZP.p(f||(f=(0,I.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),R=M.ZP.button(m||(m=(0,I.Z)(["\n  background-color: #007bff;\n  color: white;\n  border: none;\n  padding: 5px 10px;\n  cursor: pointer;\n"]))),T=function(){var n=(0,j.v9)((function(n){return n.auth.user.email})),e=(0,j.I0)(),t=function(){var n=(0,k.Z)(A().mark((function n(){return A().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e((0,P.ni)());case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,_.jsxs)(H,{children:[(0,_.jsx)(Q,{children:n}),(0,_.jsx)(R,{onClick:t,children:"Logout"})]})},V=M.ZP.div(h||(h=(0,I.Z)(["\n  max-width: 800px;\n  display: flex;\n  margin: 0 auto;\n  padding: 15px;\n  box-sizing: border-box;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  max-width: 800px;\n  flex-direction: column;\n  gap: 20px;\n"]))),X=M.ZP.div(g||(g=(0,I.Z)(["\n  padding: 15px;\n  width: 100%;\n  border-radius: 5px;\n  box-sizing: border-box;\n"]))),nn=M.ZP.h1(b||(b=(0,I.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  color: #010101;\n  margin-bottom: 20px;\n"]))),en=M.ZP.h2(Z||(Z=(0,I.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  color: #010101;\n  margin-bottom: 20px;\n"]))),tn=function(){var n=(0,y.s0)(),e=(0,j.I0)(),t=(0,j.v9)((function(n){return n.auth.isLoggedIn})),r=(0,j.v9)((function(n){return n.auth.user.email})),i=(0,j.v9)((function(n){return n.contacts.items})),o=(0,j.v9)((function(n){return n.filter}));(0,v.useEffect)((function(){if(!t)return n("/",{replace:!0});e((0,P.yF)())}),[e,t,n]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($.WL,{children:(0,_.jsx)($.MM,{children:(0,_.jsx)("nav",{children:(0,_.jsx)(w.OL,{to:"/contacts",children:"Contacts"})})})}),(0,_.jsx)("section",{children:(0,_.jsxs)(V,{children:[(0,_.jsx)(T,{userEmail:r,onLogout:function(){}}),(0,_.jsxs)(X,{children:[(0,_.jsx)(nn,{children:"Phonebook"}),(0,_.jsx)(G,{formSubmit:function(n){}}),(0,_.jsx)(en,{children:"Contacts"}),(0,_.jsx)(Y,{input:function(n){e((0,O.M6)(n.target.value))}}),(0,_.jsx)(D,{contacts:i,filter:o,filtering:function(){return i.filter((function(n){return n.name.toUpperCase().includes(o.toUpperCase())}))},deleting:function(n){e((0,P.GK)(n.target.id))}})]})]})})]})}}}]);
//# sourceMappingURL=199.e3443856.chunk.js.map