/* Scalioz AI Lead Qualification Chatbot */
(function () {
  const WA = "919043946087";
  const BRAND = "#1A3CFF";
  const NAVY = "#0A1860";

  const FLOWS = {
    start: {
      msg: "👋 Hi! I'm the Scalioz AI Assistant.\n\nWhat kind of business are you running?",
      options: ["🏥 Healthcare / Clinic", "🏠 Real Estate", "🏗️ Construction / PEB", "🎓 Education", "🏭 Industrial / Other"]
    },
    healthcare: {
      msg: "Great! What's your biggest challenge right now?",
      options: ["Revenue leakage / billing gaps", "Patient no-shows", "Staff productivity", "Marketing ROI", "Something else"]
    },
    "real-estate": {
      msg: "Got it! What are you looking to do?",
      options: ["Calculate property ROI / yield", "Check loan eligibility", "Track broker leads", "Compare properties", "Something else"]
    },
    construction: {
      msg: "Understood! What do you need help with?",
      options: ["PEB / warehouse cost estimate", "BOQ generation", "Cold storage ROI", "Construction timeline", "Something else"]
    },
    education: {
      msg: "Perfect! What's your priority?",
      options: ["Student performance tracking", "Admission follow-ups", "Fee collection reminders", "Career guidance tools", "Something else"]
    },
    industrial: {
      msg: "Noted! What are you planning?",
      options: ["Factory / plant ROI", "Warehouse construction", "Cold storage project", "Industrial feasibility", "Something else"]
    },
    challenge: {
      msg: "Are you looking for the standard tool, or do you need something customised for your specific workflow?",
      options: ["Standard tool works for me", "I need a customised version", "Just browsing for now"]
    },
    standard: {
      msg: "Perfect! You can try any tool free from our listing. Which would you like to explore?",
      options: ["Show me the tools →", "Chat with our team on WhatsApp"]
    },
    custom: {
      msg: "Great — custom builds are our speciality! Let me connect you with our team. What's the best way to reach you?",
      options: ["WhatsApp me now", "I'll fill a form later"]
    },
    browsing: {
      msg: "No problem! Feel free to explore. If you need help at any point, just ask. Anything specific you're curious about?",
      options: ["How is this priced?", "Can tools be white-labelled?", "Talk to a human"]
    },
    pricing: {
      msg: "All tools are ₹499/mo, ₹3,999/yr, or ₹9,999 lifetime — all + 18% GST. You get full access, PDF exports, and WhatsApp support.",
      options: ["That works for me!", "I need a custom quote", "Back to start"]
    },
    whitelabel: {
      msg: "Yes! We offer white-label versions of all tools for agencies and institutions. Let's discuss your requirements.",
      options: ["Connect me on WhatsApp", "Tell me more first"]
    },
    end_wa: {
      msg: "Opening WhatsApp now with your query summary. Our team typically responds within 1 hour! 🚀",
      options: []
    }
  };

  const CATEGORY_MAP = {
    "🏥 Healthcare / Clinic": "healthcare",
    "🏠 Real Estate": "real-estate",
    "🏗️ Construction / PEB": "construction",
    "🎓 Education": "education",
    "🏭 Industrial / Other": "industrial"
  };

  let state = { step: "start", category: "", challenge: "" };
  let msgHistory = [];

  // ── Build widget HTML ──────────────────────────────────────────────────
  const css = `
    #sz-chat-bubble{position:fixed;bottom:24px;right:24px;z-index:9999;cursor:pointer;
      width:58px;height:58px;border-radius:50%;background:linear-gradient(135deg,${NAVY},${BRAND});
      display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(26,60,255,.45);
      transition:transform .2s;}
    #sz-chat-bubble:hover{transform:scale(1.08);}
    #sz-chat-bubble svg{width:28px;height:28px;}
    #sz-chat-ping{position:absolute;top:0;right:0;width:14px;height:14px;background:#ef4444;
      border-radius:50%;border:2px solid white;animation:sz-ping 1.5s infinite;}
    @keyframes sz-ping{0%,100%{transform:scale(1);}50%{transform:scale(1.3);}}
    #sz-chat-box{position:fixed;bottom:92px;right:24px;z-index:9998;width:340px;max-width:calc(100vw - 48px);
      background:white;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,.18);
      display:none;flex-direction:column;overflow:hidden;font-family:'Segoe UI',system-ui,sans-serif;}
    #sz-chat-head{background:linear-gradient(135deg,${NAVY},${BRAND});padding:14px 16px;
      display:flex;align-items:center;gap:10px;color:white;}
    #sz-chat-head-avatar{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.2);
      display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;}
    #sz-chat-head-info{}
    #sz-chat-head-name{font-weight:800;font-size:.9rem;}
    #sz-chat-head-status{font-size:.72rem;opacity:.8;display:flex;align-items:center;gap:4px;}
    #sz-chat-head-status::before{content:'';width:7px;height:7px;background:#4ade80;border-radius:50%;display:inline-block;}
    #sz-chat-close{margin-left:auto;background:none;border:none;color:white;cursor:pointer;font-size:1.2rem;opacity:.8;padding:0;}
    #sz-chat-close:hover{opacity:1;}
    #sz-chat-msgs{padding:14px;min-height:180px;max-height:280px;overflow-y:auto;display:flex;flex-direction:column;gap:10px;}
    .sz-msg{max-width:85%;padding:10px 13px;border-radius:12px;font-size:.84rem;line-height:1.5;white-space:pre-line;}
    .sz-msg-bot{background:#f1f5f9;color:#0f172a;align-self:flex-start;border-bottom-left-radius:3px;}
    .sz-msg-user{background:linear-gradient(135deg,${NAVY},${BRAND});color:white;align-self:flex-end;border-bottom-right-radius:3px;}
    #sz-chat-opts{padding:0 14px 14px;display:flex;flex-direction:column;gap:6px;}
    .sz-opt{padding:8px 12px;border-radius:8px;border:1.5px solid #e2e8f0;background:white;
      font-size:.8rem;font-weight:600;color:${NAVY};cursor:pointer;text-align:left;
      transition:all .15s;}
    .sz-opt:hover{background:#f0f4ff;border-color:${BRAND};color:${BRAND};}
    #sz-chat-powered{padding:6px 14px 10px;font-size:.68rem;color:#94a3b8;text-align:center;}
  `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  document.body.insertAdjacentHTML("beforeend", `
    <div id="sz-chat-bubble" onclick="szToggleChat()">
      <div id="sz-chat-ping"></div>
      <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </div>
    <div id="sz-chat-box">
      <div id="sz-chat-head">
        <div id="sz-chat-head-avatar">🤖</div>
        <div id="sz-chat-head-info">
          <div id="sz-chat-head-name">Scalioz AI Assistant</div>
          <div id="sz-chat-head-status">Online now</div>
        </div>
        <button id="sz-chat-close" onclick="szToggleChat()">✕</button>
      </div>
      <div id="sz-chat-msgs"></div>
      <div id="sz-chat-opts"></div>
      <div id="sz-chat-powered">Powered by Scalioz AI</div>
    </div>
  `);

  window.szToggleChat = function () {
    const box = document.getElementById("sz-chat-box");
    const ping = document.getElementById("sz-chat-ping");
    const isOpen = box.style.display === "flex";
    box.style.display = isOpen ? "none" : "flex";
    box.style.flexDirection = "column";
    if (!isOpen && msgHistory.length === 0) szShowStep("start");
    if (ping) ping.style.display = "none";
  };

  function szShowStep(stepKey) {
    const step = FLOWS[stepKey];
    if (!step) return;
    state.step = stepKey;
    szAddBotMsg(step.msg);
    szShowOptions(step.options, stepKey);
  }

  function szAddBotMsg(text) {
    const el = document.createElement("div");
    el.className = "sz-msg sz-msg-bot";
    el.textContent = text;
    const msgs = document.getElementById("sz-chat-msgs");
    msgs.appendChild(el);
    msgs.scrollTop = msgs.scrollHeight;
    msgHistory.push({ role: "bot", text });
  }

  function szAddUserMsg(text) {
    const el = document.createElement("div");
    el.className = "sz-msg sz-msg-user";
    el.textContent = text;
    const msgs = document.getElementById("sz-chat-msgs");
    msgs.appendChild(el);
    msgs.scrollTop = msgs.scrollHeight;
    msgHistory.push({ role: "user", text });
  }

  function szShowOptions(options, context) {
    const opts = document.getElementById("sz-chat-opts");
    opts.innerHTML = "";
    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "sz-opt";
      btn.textContent = opt;
      btn.onclick = () => szHandleOption(opt, context);
      opts.appendChild(btn);
    });
  }

  function szHandleOption(opt, context) {
    szAddUserMsg(opt);
    document.getElementById("sz-chat-opts").innerHTML = "";

    // State machine
    if (context === "start") {
      state.category = CATEGORY_MAP[opt] || "general";
      const next = state.category === "industrial" ? "industrial" :
                   state.category === "healthcare" ? "healthcare" :
                   state.category === "real-estate" ? "real-estate" :
                   state.category === "construction" ? "construction" : "education";
      setTimeout(() => szShowStep(next), 400);

    } else if (["healthcare","real-estate","construction","education","industrial"].includes(context)) {
      state.challenge = opt;
      setTimeout(() => szShowStep("challenge"), 400);

    } else if (context === "challenge") {
      if (opt.includes("customised")) setTimeout(() => szShowStep("custom"), 400);
      else if (opt.includes("browsing")) setTimeout(() => szShowStep("browsing"), 400);
      else setTimeout(() => szShowStep("standard"), 400);

    } else if (context === "standard") {
      if (opt.includes("tools")) {
        window.location.href = (window.location.pathname.includes("/healthcare/") ||
          window.location.pathname.includes("/real-estate/") ||
          window.location.pathname.includes("/construction/") ||
          window.location.pathname.includes("/education/")) ? "../tools.html" : "tools.html";
      } else { szSendToWA("interested in standard tools"); }

    } else if (context === "custom") {
      if (opt.includes("WhatsApp")) szSendToWA(`needs customisation - ${state.category} - ${state.challenge}`);
      else szShowStep("browsing");

    } else if (context === "browsing") {
      if (opt.includes("priced")) setTimeout(() => szShowStep("pricing"), 400);
      else if (opt.includes("white")) setTimeout(() => szShowStep("whitelabel"), 400);
      else szSendToWA("wants to talk to a human");

    } else if (context === "pricing") {
      if (opt.includes("works")) szAddBotMsg("Great! Click 'Try Free' on any tool to get started. Happy to help if you have questions!");
      else if (opt.includes("quote")) szSendToWA("needs custom pricing quote");
      else setTimeout(() => szShowStep("start"), 400);

    } else if (context === "whitelabel") {
      szSendToWA("interested in white-label tools");
    } else if (context === "end_wa") {
      szSendToWA("general inquiry");
    }
  }

  function szSendToWA(reason) {
    szShowStep("end_wa");
    const summary = `Hi Scalioz Team! 👋\n\nI was chatting with your AI assistant.\n- Business: ${state.category || "Not specified"}\n- Challenge: ${state.challenge || "Not specified"}\n- Reason: ${reason}\n\nPlease help me!`;
    setTimeout(() => {
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(summary)}`, "_blank");
    }, 1200);
  }

})();
