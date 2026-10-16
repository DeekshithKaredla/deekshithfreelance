/* Page assistant: answers questions about the projects listed in js/projects.js.
   It runs fully in the browser (no server, no API key). */
(function () {
  if (typeof PROJECTS === "undefined") return;

  var EMAIL = "karedladeeks5@gmail.com", PHONE = "9494872211";

  // Extra words people may use for each project (keys are lower-case project titles)
  var ALIASES = {
    "cancer detection": ["cancer", "tumor", "tumour", "oncology", "resnet", "resnet18", "xgboost"],
    "asl to text & sound": ["asl", "sign", "signs", "sign language", "hand sign", "gesture", "gestures", "deaf", "mute"],
    "football video summarizer": ["football", "soccer", "goal", "goals", "match", "highlights", "summarizer"],
    "autism detection": ["autism", "asd", "speech", "behaviour", "behavior", "screening"],
    "harmful page detector": ["chrome", "extension", "harmful", "misleading", "fake", "misinformation", "browser", "webpage"],
    "ai commerce platform": ["commerce", "e-commerce", "shop", "shopping", "store", "menu", "delivery", "order", "orders", "tracking", "alerts"],
    "medicinal herb detection": ["herb", "herbs", "plant", "plants", "medicinal", "leaf", "leaves"],
    "ayurvedic remedy chatbot": ["ayurvedic", "ayurveda", "remedy", "remedies", "symptom", "symptoms", "voice"],
    "cardio disease prediction": ["cardio", "heart", "cardiac", "cardiovascular"],
    "drowsiness detection": ["drowsy", "drowsiness", "sleep", "sleepy", "eyes", "eye", "alarm", "blink"],
    "human action detection": ["action", "activity", "activities", "pose"],
    "floodsight ai": ["flood", "floods", "floodsight", "disaster", "yolo", "unet", "u-net", "satellite", "rescue"]
  };

  var DOMAINS = [
    { re: /health|medical|medicine|disease|clinical|doctor/, label: "health and medical",
      titles: ["Cancer Detection", "Autism Detection", "Medicinal Herb Detection", "Ayurvedic Remedy Chatbot", "Cardio Disease Prediction"] },
    { re: /accessib|disab|hearing|communicat/, label: "accessibility", titles: ["ASL to Text & Sound"] },
    { re: /sport|athlet/, label: "sports", titles: ["Football Video Summarizer"] },
    { re: /disaster|emergency|calamity|natural/, label: "disaster response", titles: ["FloodSight AI"] },
    { re: /safety|security|protect/, label: "safety", titles: ["Drowsiness Detection", "Harmful Page Detector"] }
  ];

  var ADVANCED = ["FloodSight AI", "Football Video Summarizer", "Autism Detection", "AI Commerce Platform"];

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function norm(s) { return String(s).toLowerCase().replace(/[^a-z0-9+#\s-]/g, " ").replace(/\s+/g, " ").trim(); }
  function has(q, k) {
    return new RegExp("(^|[^a-z0-9])" + k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([^a-z0-9]|$)").test(q);
  }
  function idxOf(title) { for (var i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].title === title) return i; return -1; }

  function keysFor(p) {
    var k = (ALIASES[p.title.toLowerCase()] || []).slice();
    norm(p.title).split(" ").forEach(function (w) { if (w.length > 3) k.push(w); });
    p.stack.forEach(function (s) { norm(s).split(" ").forEach(function (w) { if (w.length > 2) k.push(w); }); });
    return k.filter(function (x, i, a) { return a.indexOf(x) === i; });
  }

  function rank(q) {
    var out = [];
    PROJECTS.forEach(function (p, i) {
      var s = 0;
      keysFor(p).forEach(function (k) { if (has(q, k)) s += k.length; });
      if (s > 0) out.push({ i: i, s: s });
    });
    return out.sort(function (a, b) { return b.s - a.s; });
  }

  // ---------- answers ----------
  var COMMON = [{ l: "All projects", q: "all projects" }, { l: "Contact", q: "contact" }];

  function projAnswer(i) {
    var p = PROJECTS[i], d = p.details;
    var h = "<b>" + esc(p.title) + "</b><br>" + esc(p.summary) + "<br><br><b>Tech:</b> " + esc(p.stack.join(", "));
    if (d) {
      h += "<br><br>" + esc(d.over);
      if (d.note && /diagnos/i.test(d.note)) h += "<br><br><i>Note: this is an experimental prototype, not a medical diagnostic tool.</i>";
    } else {
      h += "<br><br><i>A full write-up and screenshots are coming soon.</i>";
    }
    return { h: h, chips: [{ l: "View details", open: i }].concat(COMMON) };
  }

  function listAnswer(idxs, intro) {
    if (idxs.length === 1) return projAnswer(idxs[0]);
    var chips = idxs.map(function (i) { return { l: PROJECTS[i].title, q: PROJECTS[i].title }; });
    return { h: intro, chips: chips.concat([{ l: "Contact", q: "contact" }]) };
  }

  function respond(raw) {
    var q = norm(raw);
    if (!q) return { h: "Type a question and I'll help.", chips: [] };

    var words = q.split(" ");
    if (/^(hi+|hello+|hey+|hola|namaste|good (morning|afternoon|evening))\b/.test(q) && words.length <= 4)
      return { h: "Hi! I'm the page assistant. Ask me about any of the " + PROJECTS.length + " projects, the tools used, or how to contact Deekshith.", chips: starters() };
    if (/\b(thanks|thank you|thx|great|awesome|cool|nice)\b/.test(q) && words.length <= 5)
      return { h: "You're welcome! Want to look at anything else?", chips: starters() };
    if (/^(bye|goodbye|see you|exit|quit)\b/.test(q))
      return { h: "Thanks for visiting! Feel free to get in touch anytime.", chips: [{ l: "Contact", q: "contact" }] };

    if (/(^|\b)(contact|email|e-mail|mail id|phone|call|whatsapp|hire|hiring|reach|available|availability|freelanc)/.test(q))
      return { h: 'You can reach Deekshith at <a href="mailto:' + EMAIL + '">' + EMAIL + '</a> or call <a href="tel:+91' + PHONE + '">' + PHONE +
                  "</a>. He is open to freelance projects.", chips: [{ l: "All projects", q: "all projects" }] };

    if (/who are you|what are you|yourself/.test(q))
      return { h: "I'm the assistant for this portfolio page. I can explain any project, list the tools used, or share contact details.", chips: starters() };
    if (/who is|about (him|deekshith|the developer|the owner)|introduce|tell me about (him|deekshith)/.test(q))
      return { h: "Deekshith is a freelancer who builds AI tools for health, accessibility, sports and disaster response, from image models to chatbots. He works with Android Studio, PyTorch and Transformers, and this page shows " + PROJECTS.length + " of his projects.", chips: starters() };

    if (/(most|more) (advanced|complex|impressive)|best project|top project|strongest|flagship|main project|highlight/.test(q))
      return listAnswer(ADVANCED.map(idxOf).filter(function (i) { return i > -1; }),
        "Some of the most advanced builds, using multi-model pipelines, video, multimodal input or a full-stack chatbot:");

    // exact title typed or clicked
    for (var t = 0; t < PROJECTS.length; t++) if (norm(PROJECTS[t].title) === q) return projAnswer(t);

    var r = rank(q);
    if (r.length && (r.length === 1 || r[0].s >= 1.5 * r[1].s)) return projAnswer(r[0].i);

    for (var d = 0; d < DOMAINS.length; d++) {
      if (DOMAINS[d].re.test(q))
        return listAnswer(DOMAINS[d].titles.map(idxOf).filter(function (i) { return i > -1; }),
          "Here are the " + DOMAINS[d].label + " projects:");
    }

    if (r.length) {
      var near = r.filter(function (x) { return x.s >= 0.6 * r[0].s; }).slice(0, 8).map(function (x) { return x.i; });
      return listAnswer(near, "Here are the closest matches. Pick one to see more:");
    }

    if (/skill|tech stack|technolog|tools|framework|librar|expertise|what (does|can) he (know|use)/.test(q)) {
      var c = {};
      PROJECTS.forEach(function (p) { p.stack.forEach(function (s) { c[s] = (c[s] || 0) + 1; }); });
      var top = Object.keys(c).sort(function (a, b) { return c[b] - c[a]; }).slice(0, 10);
      return { h: "Main tools across the projects: " + esc(top.join(", ")) + ". Ask about a tool, for example \"which projects use PyTorch?\"", chips: starters() };
    }

    if (/how many|\ball\b|every|list|projects|portfolio|what (has|have|did) he/.test(q))
      return { h: "There are " + PROJECTS.length + " projects. Pick one to see the details:",
               chips: PROJECTS.map(function (p) { return { l: p.title, q: p.title }; }) };

    return { h: "I'm not sure about that one. I can tell you about any project, the tools used, or how to contact Deekshith.", chips: starters() };
  }

  function starters() {
    return [{ l: "All projects", q: "all projects" }, { l: "Health projects", q: "health projects" },
            { l: "Which use PyTorch?", q: "which projects use pytorch" }, { l: "Contact", q: "contact" }];
  }

  if (typeof module !== "undefined") module.exports = { respond: respond };
  if (typeof document === "undefined") return;

  // ---------- UI ----------
  var ICON = '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ccfbf1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="11" rx="4"/><circle cx="9" cy="13.5" r="1.2" fill="#ccfbf1"/><circle cx="15" cy="13.5" r="1.2" fill="#ccfbf1"/><path d="M12 8V5"/><circle cx="12" cy="4" r="1.2"/><path d="M2 12v3M22 12v3"/></svg>';

  var fab = document.createElement("button");
  fab.className = "bot-fab"; fab.type = "button"; fab.setAttribute("aria-label", "Open page assistant"); fab.innerHTML = ICON;
  var tip = document.createElement("div");
  tip.className = "bot-tip"; tip.textContent = "Ask me about the projects";
  var panel = document.createElement("div");
  panel.className = "bot-panel";
  panel.innerHTML =
    '<div class="bot-h"><div class="bot-av">' + ICON + '</div><div class="bot-t"><b>Page Assistant</b><span>Ask about any project</span></div>' +
    '<button class="bot-x" type="button" aria-label="Close assistant">&#10005;</button></div>' +
    '<div class="bot-log" aria-live="polite"></div>' +
    '<form class="bot-f"><input type="text" placeholder="Ask about a project..." aria-label="Message" autocomplete="off">' +
    '<button type="submit" aria-label="Send">&#10148;</button></form>';
  document.body.appendChild(panel); document.body.appendChild(tip); document.body.appendChild(fab);

  var log = panel.querySelector(".bot-log"), input = panel.querySelector("input"), started = false;

  function addMsg(cls, html) {
    var m = document.createElement("div"); m.className = "msg " + cls; m.innerHTML = html;
    log.appendChild(m); log.scrollTop = log.scrollHeight; return m;
  }
  function clearChips() { Array.prototype.forEach.call(log.querySelectorAll(".bchips"), function (n) { n.remove(); }); }
  function addChips(node, chips) {
    if (!chips || !chips.length) return;
    var w = document.createElement("div"); w.className = "bchips";
    chips.forEach(function (c) {
      var b = document.createElement("button"); b.type = "button"; b.className = "bchip"; b.textContent = c.l;
      b.addEventListener("click", function () { if (c.open != null) doOpen(c.open); else send(c.q || c.l, c.l); });
      w.appendChild(b);
    });
    node.appendChild(w); log.scrollTop = log.scrollHeight;
  }
  function botSay(r) { var m = addMsg("b", r.h); addChips(m, r.chips); }

  function doOpen(i) {
    clearChips();
    if (window.innerWidth <= 600) closePanel();
    if (window.openProject) window.openProject(i);
    botSay({ h: "Opened the details for <b>" + esc(PROJECTS[i].title) + "</b>.", chips: COMMON });
  }

  function send(text, label) {
    addMsg("u", esc(label || text)); clearChips();
    var ty = addMsg("b typing", "<i></i><i></i><i></i>");
    setTimeout(function () { ty.remove(); botSay(respond(text)); }, 380 + Math.random() * 320);
  }

  function openPanel() {
    panel.classList.add("on"); tip.classList.remove("on"); fab.classList.add("open");
    if (!started) {
      started = true;
      botSay({ h: "Hi! I'm the page assistant. Ask me about any of the " + PROJECTS.length + " projects, the tools used, or how to contact Deekshith.", chips: starters() });
    }
    setTimeout(function () { input.focus(); }, 50);
  }
  function closePanel() { panel.classList.remove("on"); fab.classList.remove("open"); }

  fab.addEventListener("click", function () { panel.classList.contains("on") ? closePanel() : openPanel(); });
  panel.querySelector(".bot-x").addEventListener("click", closePanel);
  panel.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); var v = input.value.trim(); if (!v) return; input.value = ""; send(v);
  });

  setTimeout(function () { if (!panel.classList.contains("on")) tip.classList.add("on"); }, 1500);
  setTimeout(function () { tip.classList.remove("on"); }, 9000);
})();
