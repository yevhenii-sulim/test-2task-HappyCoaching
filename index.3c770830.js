const e=document.querySelector(".nav-button"),o=document.querySelector(".nav-menu"),t=document.querySelector(".backdrop");e.addEventListener("click",(function(){const e=document.querySelectorAll(".button-menu");for(const o of e)o.classList.toggle("hidden");o.classList.toggle("hidden"),t.classList.toggle("hidden")}));document.querySelector(".question-list").addEventListener("click",(function(e){const o=e.target.closest("li"),t=o.querySelector(".open-close"),n=o.querySelector(".text-question");console.log(t),n.classList.contains("hidden")?(console.log("open"),n.classList.remove("hidden"),t.style="background-position: -11px -98px"):(console.log("close"),n.classList.add("hidden"),t.style="background-position: -55px -96px")}));
//# sourceMappingURL=index.3c770830.js.map
