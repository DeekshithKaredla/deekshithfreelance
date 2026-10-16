(function () {
  var grid = document.getElementById("projects");
  var ov = document.getElementById("ov");
  var md = document.getElementById("md");
  var search = document.getElementById("project-search");
  var visibleCount = document.getElementById("visible-count");
  var noResults = document.getElementById("no-results");
  var lastFocus = null;
  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }
  function list(a) { return "<ul>" + a.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; }
  function tags(a) { return '<div class="tg">' + a.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</div>"; }
  function render(items) { grid.innerHTML = ""; items.forEach(function (item) { var p = item.project, i = item.index, c = document.createElement("article"); c.className = "card"; c.innerHTML = '<div class="card-top"><span class="card-index">' + String(i + 1).padStart(2, "0") + '</span><div class="ic" aria-hidden="true">' + p.icon + '</div></div><h3>' + esc(p.title) + '</h3><p>' + esc(p.summary) + '</p><div class="row"><a class="btn" href="#" data-i="' + i + '">View details <span aria-hidden="true">↗</span></a></div><div class="ts"><b>Built with</b>' + esc(p.stack.join(" · ")) + '</div>'; grid.appendChild(c); }); visibleCount.textContent = items.length; noResults.style.display = items.length ? "none" : "block"; }
  function filter() { var q = (search.value || "").trim().toLowerCase(); render(PROJECTS.map(function (project, index) { return { project: project, index: index }; }).filter(function (item) { return !q || [item.project.title, item.project.summary].concat(item.project.stack).join(" ").toLowerCase().indexOf(q) !== -1; })); }
  function open(i) { var p = PROJECTS[i], d = p.details, h = '<button class="x" aria-label="Close project details" data-close>×</button><h2 id="modal-title">' + esc(p.title) + '</h2><div class="sub">' + esc(d ? d.sub : p.summary) + '</div>'; (p.images || []).forEach(function (im) { h += '<figure class="shot"><img src="' + im.file + '" alt="' + esc(p.title) + ' screenshot" onerror="this.parentNode.style.display=\'none\'">' + (im.caption ? '<figcaption>' + esc(im.caption) + '</figcaption>' : '') + '</figure>'; }); if (d) h += '<h4>Overview</h4><p>' + esc(d.over) + '</p><h4>Objectives</h4>' + list(d.obj) + '<h4>Workflow</h4><div class="fl">' + d.flow.map(function (x, k) { return (k ? '<i>→</i>' : '') + '<span>' + esc(x) + '</span>'; }).join('') + '</div><h4>Tech stack</h4>' + tags(d.stack) + '<h4>Main features</h4>' + list(d.feat) + (d.note ? '<div class="note">' + esc(d.note) + '</div>' : ''); else h += '<h4>Tech stack</h4>' + tags(p.stack) + '<h4>Details</h4><div class="soon">Detailed write-up and screenshots coming soon.</div>'; md.innerHTML = h; md.scrollTop = 0; ov.classList.add("on"); ov.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; lastFocus = document.activeElement; md.querySelector("[data-close]").focus(); }
  window.openProject = open;
  function close() { ov.classList.remove("on"); ov.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
  render(PROJECTS.map(function (project, index) { return { project: project, index: index }; }));
  function setupScrollReveal() {
    var targets = document.querySelectorAll(".hero-copy, .hero-portrait, .signal-strip, .section-heading, .work-toolbar, .card, .about-intro, .principles article, .contact-card, footer");
    Array.prototype.forEach.call(targets, function (el, index) {
      el.classList.add("scroll-reveal");
      if (el.classList.contains("card") || el.closest(".principles")) el.style.setProperty("--reveal-delay", Math.min((index % 4) * 70, 210) + "ms");
    });
    if (!("IntersectionObserver" in window)) { Array.prototype.forEach.call(targets, function (el) { el.classList.add("is-visible"); }); return; }
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); obs.unobserve(entry.target); } });
    }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    Array.prototype.forEach.call(targets, function (el) { observer.observe(el); });
  }
  setupScrollReveal();
  if (search) search.addEventListener("input", function () { filter(); setupScrollReveal(); });
  grid.addEventListener("click", function (e) { var b = e.target.closest("[data-i]"); if (b) { e.preventDefault(); open(+b.dataset.i); } });
  ov.addEventListener("click", function (e) { if (e.target === ov || e.target.closest("[data-close]")) close(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && ov.classList.contains("on")) close(); if (e.key === "Tab" && ov.classList.contains("on")) { var focusable = md.querySelectorAll("button, a, input, [tabindex]:not([tabindex='-1'])"); if (!focusable.length) return; if (e.shiftKey && document.activeElement === focusable[0]) { e.preventDefault(); focusable[focusable.length - 1].focus(); } else if (!e.shiftKey && document.activeElement === focusable[focusable.length - 1]) { e.preventDefault(); focusable[0].focus(); } } });
})();
