/* =========================================================
   Shine Star — main interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Preloader ---------- */
  window.addEventListener("load", function () {
    setTimeout(function () {
      var p = document.getElementById("preloader");
      if (p) p.classList.add("is-done");
    }, 1700);
  });

  /* ---------- Year ---------- */
  var yEl = document.getElementById("year");
  if (yEl) yEl.textContent = new Date().getFullYear();

  /* =========================================================
     Projects data — referenced work (live screenshots via thum.io)
     ========================================================= */
  var PROJECTS = [
    { url: "https://yokanavi.com",        cat: "web",       tag: "Web System",
      name: { en: "Yokanavi", ja: "Yokanavi", zh: "Yokanavi" },
      desc: { en: "Web-based system focused on functionality and usability.",
              ja: "機能性と使いやすさを重視したWebシステム。",
              zh: "注重功能性与易用性的 Web 系统。" } },
    { url: "https://mazrica.com",         cat: "web",       tag: "Web System",
      name: { en: "Mazrica", ja: "Mazrica", zh: "Mazrica" },
      desc: { en: "Business web application with a clean, modern interface.",
              ja: "洗練されたモダンなUIのビジネスWebアプリ。",
              zh: "界面简洁现代的商务 Web 应用。" } },
    { url: "https://waaq.jp",             cat: "web",       tag: "Web System",
      name: { en: "waaq", ja: "waaq", zh: "waaq" },
      desc: { en: "Platform web system with workflow-oriented design.",
              ja: "ワークフロー志向で設計されたプラットフォーム。",
              zh: "以工作流为导向的平台系统。" } },
    { url: "https://exawizards.com",      cat: "web",       tag: "Web System",
      name: { en: "ExaWizards", ja: "ExaWizards", zh: "ExaWizards" },
      desc: { en: "Corporate AI-company web presence and system.",
              ja: "AI企業のコーポレートWebと基盤システム。",
              zh: "AI 企业的官网与基础系统。" } },
    { url: "https://kimono-bito.com",     cat: "ecommerce", tag: "E-Commerce",
      name: { en: "Kimono Bito", ja: "きもの美人", zh: "Kimono Bito" },
      desc: { en: "E-commerce storefront for traditional Japanese kimono.",
              ja: "伝統的な着物のECストアフロント。",
              zh: "传统日本和服电商店铺。" } },
    { url: "https://bellefeelclinic.com/lp/hada-01", cat: "lp", tag: "Landing Page",
      name: { en: "Bellefeel Clinic LP", ja: "ベルフィールクリニック LP", zh: "Bellefeel 诊所落地页" },
      desc: { en: "Conversion-focused landing page for a skin clinic.",
              ja: "コンバージョン重視のクリニック向けLP。",
              zh: "以转化为核心的皮肤诊所落地页。" } },
    { url: "https://templater.jp",        cat: "design",    tag: "Design",
      name: { en: "Templater", ja: "Templater", zh: "Templater" },
      desc: { en: "Design & prototyping reference with crafted UI.",
              ja: "作り込まれたUIのデザイン・プロトタイプ事例。",
              zh: "精心打造的设计与原型案例。" } },
    { url: "https://wreath-ent.co.jp/",   cat: "corporate", tag: "Corporate",
      name: { en: "Wreath Entertainment", ja: "Wreath Entertainment", zh: "Wreath Entertainment" },
      desc: { en: "Corporate website with brand-led visual design.",
              ja: "ブランド主導のビジュアル設計のコーポレートサイト。",
              zh: "以品牌为核心的企业官网。" } },
    { url: "https://www.hjsd.co.jp/",     cat: "corporate", tag: "Corporate",
      name: { en: "HJSD", ja: "HJSD", zh: "HJSD" },
      desc: { en: "Clean corporate website emphasizing clarity & trust.",
              ja: "明快さと信頼感を重視したコーポレートサイト。",
              zh: "强调清晰与信任感的企业官网。" } }
  ];

  var workGrid = document.getElementById("workGrid");
  var currentLang = "en";

  function shot(url) {
    return "https://image.thum.io/get/width/700/crop/560/" + url;
  }

  function renderProjects() {
    if (!workGrid) return;
    workGrid.innerHTML = PROJECTS.map(function (p) {
      return (
        '<article class="project reveal" data-cat="' + p.cat + '">' +
          '<div class="project__shot">' +
            '<span class="project__cat">' + p.tag + '</span>' +
            '<img loading="lazy" alt="' + p.name.en + ' preview" ' +
                 'src="' + shot(p.url) + '" ' +
                 'onerror="this.onerror=null;this.src=\'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&q=70\'"/>' +
          '</div>' +
          '<div class="project__body">' +
            '<h3>' + p.name[currentLang] + '</h3>' +
            '<p>' + p.desc[currentLang] + '</p>' +
            '<a class="project__link" href="' + p.url + '" target="_blank" rel="noopener">' +
              (currentLang === "ja" ? "サイトを見る" : currentLang === "zh" ? "访问网站" : "Visit site") +
              ' <span>↗</span></a>' +
          '</div>' +
        '</article>'
      );
    }).join("");
    observeReveals();
  }

  /* ---------- Project filters ---------- */
  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var f = btn.getAttribute("data-filter");
      document.querySelectorAll(".project").forEach(function (card) {
        var match = f === "all" || card.getAttribute("data-cat") === f;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });

  /* =========================================================
     i18n language switching
     ========================================================= */
  function applyLang(lang) {
    currentLang = lang;
    var dict = window.I18N[lang] || window.I18N.en;
    document.documentElement.lang = lang;
    document.body.classList.remove("lang-en", "lang-ja", "lang-zh");
    document.body.classList.add("lang-" + lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });

    renderProjects();
    try { localStorage.setItem("ss_lang", lang); } catch (e) {}
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { applyLang(btn.getAttribute("data-lang")); });
  });

  /* ---------- Hero rotating greeting ---------- */
  var greetEl = document.getElementById("heroGreeting");
  var gi = 0;
  function rotateGreeting() {
    if (!greetEl) return;
    gi = (gi + 1) % window.GREETINGS.length;
    greetEl.innerHTML = '<span class="greet-word">' + window.GREETINGS[gi] + "</span>";
  }
  setInterval(rotateGreeting, 2400);

  /* =========================================================
     Reveal on scroll
     ========================================================= */
  var revealObserver;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            if (en.target.querySelector("[data-count]")) animateCounters(en.target);
            revealObserver.unobserve(en.target);
          }
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });
    }
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---------- Count-up ---------- */
  function animateCounters(scope) {
    scope.querySelectorAll("[data-count]").forEach(function (el) {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      var target = parseInt(el.getAttribute("data-count"), 10);
      var suffix = el.getAttribute("data-suffix") || "";
      var dur = 1500, start = performance.now();
      function tick(now) {
        var prog = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - prog, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (prog < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  /* =========================================================
     Nav behaviour
     ========================================================= */
  var nav = document.getElementById("nav");
  var toTop = document.getElementById("toTop");
  var progress = document.getElementById("scrollProgress");

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle("is-scrolled", y > 40);
    if (toTop) toTop.classList.toggle("is-visible", y > 600);
    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      navToggle.classList.toggle("is-open");
      navLinks.classList.toggle("is-open");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navToggle.classList.remove("is-open");
        navLinks.classList.remove("is-open");
      });
    });
  }

  if (toTop) toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Cursor glow ---------- */
  var glow = document.getElementById("cursorGlow");
  if (glow && window.matchMedia("(pointer:fine)").matches) {
    window.addEventListener("mousemove", function (e) {
      glow.style.opacity = "1";
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
    window.addEventListener("mouseout", function () { glow.style.opacity = "0"; });
  }

  /* =========================================================
     Starfield canvas
     ========================================================= */
  var canvas = document.getElementById("starfield");
  if (canvas && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var ctx = canvas.getContext("2d");
    var stars = [], shooting = [], W, H, DPR = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      W = canvas.width = window.innerWidth * DPR;
      H = canvas.height = window.innerHeight * DPR;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      var count = Math.min(220, Math.floor((window.innerWidth * window.innerHeight) / 7000));
      stars = [];
      for (var i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * W, y: Math.random() * H,
          r: Math.random() * 1.5 * DPR + 0.3,
          a: Math.random(), tw: Math.random() * 0.02 + 0.004,
          dx: (Math.random() - 0.5) * 0.08 * DPR,
          dy: (Math.random() - 0.5) * 0.08 * DPR,
          hue: Math.random() > 0.8 ? 46 : (Math.random() > 0.5 ? 255 : 190)
        });
      }
    }

    function spawnShoot() {
      if (Math.random() < 0.012 && shooting.length < 2) {
        shooting.push({
          x: Math.random() * W, y: Math.random() * H * 0.5,
          len: (Math.random() * 120 + 80) * DPR,
          speed: (Math.random() * 6 + 6) * DPR,
          angle: Math.PI / 4, life: 1
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        s.a += s.tw;
        var alpha = 0.4 + Math.abs(Math.sin(s.a)) * 0.6;
        s.x += s.dx; s.y += s.dy;
        if (s.x < 0) s.x = W; if (s.x > W) s.x = 0;
        if (s.y < 0) s.y = H; if (s.y > H) s.y = 0;
        var col = s.hue === 46 ? "255,209,102" : s.hue === 190 ? "0,224,255" : "230,235,255";
        ctx.beginPath();
        ctx.fillStyle = "rgba(" + col + "," + alpha + ")";
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      spawnShoot();
      for (var j = shooting.length - 1; j >= 0; j--) {
        var sh = shooting[j];
        var ex = sh.x - Math.cos(sh.angle) * sh.len;
        var ey = sh.y - Math.sin(sh.angle) * sh.len;
        var grad = ctx.createLinearGradient(sh.x, sh.y, ex, ey);
        grad.addColorStop(0, "rgba(124,92,255," + sh.life + ")");
        grad.addColorStop(1, "rgba(124,92,255,0)");
        ctx.strokeStyle = grad; ctx.lineWidth = 2 * DPR;
        ctx.beginPath(); ctx.moveTo(sh.x, sh.y); ctx.lineTo(ex, ey); ctx.stroke();
        sh.x += Math.cos(sh.angle) * sh.speed;
        sh.y += Math.sin(sh.angle) * sh.speed;
        sh.life -= 0.012;
        if (sh.life <= 0 || sh.x > W || sh.y > H) shooting.splice(j, 1);
      }
      requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();
  }

  /* =========================================================
     Init
     ========================================================= */
  var saved = "en";
  try { saved = localStorage.getItem("ss_lang") || "en"; } catch (e) {}
  applyLang(saved);
  observeReveals();
  onScroll();
})();
