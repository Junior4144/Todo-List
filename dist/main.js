(()=>{"use strict";const e=()=>{const e=document.querySelector(".subContainer"),t=document.createElement("div");t.classList.add("addTaskContainer"),t.textContent="+ add project",e.appendChild(t)};function t(){const e=document.querySelector(".subContainer"),t=document.querySelector(".listContainer");e&&t.removeChild(e)}(()=>{document.querySelector(".inbox").addEventListener("click",(function(){t(),(()=>{const e=document.querySelector(".listContainer"),t=document.createElement("div");t.classList.add("subContainer");const n=document.createElement("h1");n.classList.add("InboxText"),n.textContent="Inbox",e.appendChild(t),t.appendChild(n)})(),e()})),document.querySelector(".today").addEventListener("click",(function(){t(),(()=>{const e=document.querySelector(".listContainer"),t=document.createElement("div");t.classList.add("subContainer");const n=document.createElement("h1");n.classList.add("todayText"),n.textContent="Today",e.appendChild(t),t.appendChild(n)})(),e()})),document.querySelector(".week").addEventListener("click",(function(){t(),(()=>{const e=document.querySelector(".listContainer"),t=document.createElement("div");t.classList.add("subContainer");const n=document.createElement("h1");n.classList.add("todayWeek"),n.textContent="Week",e.appendChild(t),t.appendChild(n)})(),e()}))})()})();