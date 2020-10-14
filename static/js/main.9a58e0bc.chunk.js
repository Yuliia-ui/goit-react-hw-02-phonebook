(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__nMYLN",label:"ContactForm_label__1H0bK",input:"ContactForm_input__1rqNg"}},,,,,function(t,e,n){t.exports={section:"ContactListItem_section__l9-Wa",listItem:"ContactListItem_listItem__25fvE"}},,,,function(t,e,n){t.exports={list:"ContactList_list__P1-DE"}},function(t,e,n){t.exports={filter:"Filter_filter__38yQI"}},function(t,e,n){},,,function(t,e,n){t.exports=n(20)},,,,,function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),l=n(13),i=n(2),s=n(3),u=n(5),m=n(4),d=n(22),b=n(9),h=n(1),f=n.n(h),p=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onAddContact(a,c),t.setState({name:"",number:""})},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:f.a.ContactForm,onSubmit:this.handleSubmit},c.a.createElement("label",{className:f.a.label},"Name",c.a.createElement("input",{className:f.a.input,type:"text",placeholder:"Enter contact name",name:"name",value:e,required:!0,onChange:this.handleChange})),c.a.createElement("label",{className:f.a.label},"Number",c.a.createElement("input",{className:f.a.input,type:"tel",placeholder:"Enter phone number",name:"number",value:n,required:!0,onChange:this.handleChange})),c.a.createElement("button",{type:"submit"},"Add contact"))}}]),n}(a.Component),C=n(14),v=n(6),E=n.n(v),g=function(t){var e=t.name,n=t.id,a=t.number,r=t.deleteContact;return c.a.createElement("li",{key:n,className:E.a.listItem},c.a.createElement("p",null,e,":"),c.a.createElement("p",null,a),c.a.createElement("section",{className:E.a.section},c.a.createElement("button",{type:"button",onClick:r},"Delete")))},_=n(10),y=n.n(_),N=function(t){var e=t.contacts,n=t.deleteContact;return c.a.createElement("ul",{className:y.a.list},e.map((function(t){var e=t.id,a=Object(C.a)(t,["id"]);return c.a.createElement(g,Object.assign({key:e},a,{deleteContact:function(){return n(e)}}))})))},O=n(11),S=n.n(O),j=function(t){var e=t.value,n=t.onChange;return c.a.createElement("div",null,c.a.createElement("input",{className:S.a.filter,type:"text",value:e,onChange:n}))},k=n(12),w=n.n(k),F=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"4591256"},{id:"id-2",name:"Hermione Kline",number:"4438912"},{id:"id-3",name:"Eden Clements",number:"6451779"},{id:"id-4",name:"Annie Copeland",number:"2279126"}],filter:""},t.addContact=function(e,n){var a={id:Object(d.a)(),name:e,number:n};t.state.contacts.map((function(t){return t.name.toLowerCase()})).includes(a.name.toLowerCase().trim())?alert("".concat(a.name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[a])}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return c.a.createElement("div",{className:w.a.box},c.a.createElement("h1",null,"Phonebook"),c.a.createElement(p,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),e.length>0&&c.a.createElement(j,{value:t,onChange:this.changeFilter}),c.a.createElement(N,{contacts:e,deleteContact:this.deleteContact}))}}]),n}(a.Component);o.a.render(c.a.createElement(F,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.9a58e0bc.chunk.js.map