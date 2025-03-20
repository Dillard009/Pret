"use strict";(self.webpackChunkWebComponents=self.webpackChunkWebComponents||[]).push([[616],{24616:(e,t,s)=>{s.r(t);var o=s(78673);s(14028);class i extends o.A{constructor(e){super(e);var t=e.orig;this.origElem=t,this.divid=t.id,self.group=[],this.limit=this.origElem.dataset.size_limit,this.isPretext=document.body.classList.contains("pretext");let s=document.createElement("button");s.type="button",s.classList.add("btn","btn-success"),s.innerHTML="Submit Group",s.onclick=this.submitAll.bind(this),(this.isPretext?e.orig.querySelector(".groupsub_button"):document.getElementById("groupsub_button")).appendChild(s)}async initialize(){if(eBookConfig.useRunestoneServices){let e=new Request("/ns/auth/course_students",{method:"GET",headers:this.jsonHeaders});try{let t=await fetch(e);if(!t.ok)throw new Error("Failed to get the list of students");if(t.redirected)return void alert("You must be logged in to use this feature");let s=await t.json();this.studentList=s.detail.students}catch(e){this.isTimed&&alert(`Error: Failed to get the list of students. The error was ${e}`),console.log(`Error: ${e}`),this.studentList={failed:"Failed to load students - logout and back in"}}}else this.studentList={s1:"User 1",s2:"User 2",s3:"User 3",s4:"User 4",s5:"User 5"};var e;e=this.isPretext?this.origElem.querySelector(".assignment_partner_select"):document.getElementById("assignment_group"),this.picker=e;for(let[t,s]of Object.entries(this.studentList)){let s=document.createElement("option");s.value=t,s.innerHTML=this.studentList[t],e.appendChild(s)}$(".assignment_partner_select").select2({placeholder:"Select up to 4 team members",allowClear:!0,maximumSelectionLength:this.limit})}async submitAll(){let e=[];for(let t of this.picker.selectedOptions)e.push(t.value);let t=eBookConfig.username;if(t&&!e.includes(t)&&e.push(t),e.len>this.limit)alert(`You may not have more than ${this.limit} students in a group`);else{this.logBookEvent({event:"group_start",act:e.join(","),div_id:window.location.pathname});var s=[];if(this.isPretext){let e=this.origElem.closest("section.groupwork");for(let t of Object.keys(componentMap))e.querySelector(`#${t}`)&&s.push(componentMap[t])}else s=window.allComponents;for(let t of e)for(let e of s)try{console.log(`${t} ${e}`),await e.logCurrentAnswer(t)}catch(t){console.log(`failed to submit ${e} : ${t}`)}this.logBookEvent({event:"group_end",act:e.join(","),div_id:window.location.pathname})}}}$(document).on("runestone:login-complete",(async function(){let e=document.querySelectorAll("[data-component=groupsub]");if(e.length>1)return void alert("Only one Group Submit is allowed per page");let t=e[0];try{var s=new i({orig:t});await s.initialize()}catch(e){console.log(`Error rendering GroupSub ${t.id}`),console.log(`Details ${e}`)}}))}}]);
//# sourceMappingURL=616.js.map