/**
 * render.js — Génère le contenu dynamique du site à partir de data.js.
 * Chaque fonction vérifie la présence de son conteneur avant d'agir :
 * ce fichier unique peut donc être inclus sur toutes les pages.
 */

let activeProjectFilter = 'all';

function L(bilingualObj) {
  if (!bilingualObj) return '';
  const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'fr';
  return bilingualObj[lang] || bilingualObj.fr || '';
}

/* ---------- Stats ---------- */
function renderStats() {
  const root = document.getElementById('stats-grid');
  if (!root) return;
  root.innerHTML = PORTFOLIO_DATA.stats.map((s) => `
    <div class="reveal text-center">
      <p class="font-display font-bold text-4xl sm:text-5xl text-lime" data-stat-value="${s.value}" data-stat-suffix="${s.suffix || ''}">${s.value}${s.suffix || ''}</p>
      <p class="mt-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-ink/60 dark:text-paper/60" data-i18n="stats.${s.key}"></p>
    </div>
  `).join('');
  applyTranslations(getCurrentLang());
}

/* ---------- Services ---------- */
function serviceCardHTML(s) {
  return `
    <div class="reveal lift group bg-paperSoft dark:bg-inkSoft border border-paperLine dark:border-inkLine rounded-2xl p-7" data-hover-icon>
      <div class="flex items-start justify-between mb-6">
        <span class="font-mono text-xs text-lime/80">${s.number}</span>
        <span data-hover-icon-target class="w-10 h-10 rounded-full bg-lime/10 text-lime flex items-center justify-center">
          <span class="w-5 h-5 block">${ICONS[s.icon] || ICONS.code}</span>
        </span>
      </div>
      <h3 class="font-display font-semibold text-lg text-ink dark:text-paper mb-2">${L(s.title)}</h3>
      <p class="text-sm text-ink/65 dark:text-paper/65 leading-relaxed">${L(s.desc)}</p>
    </div>
  `;
}

function renderServicesPreview() {
  const root = document.getElementById('services-preview-grid');
  if (!root) return;
  root.innerHTML = PORTFOLIO_DATA.services.slice(0, 3).map(serviceCardHTML).join('');
}

function renderServicesFull() {
  const root = document.getElementById('services-full-grid');
  if (!root) return;
  root.innerHTML = PORTFOLIO_DATA.services.map(serviceCardHTML).join('');
}

/* ---------- Skills ---------- */
function skillPillHTML(name) {
  return `<span class="font-mono text-sm px-4 py-2 rounded-full border border-paperLine dark:border-inkLine text-ink/80 dark:text-paper/80 hover:border-lime hover:text-lime transition-colors">${name}</span>`;
}

function renderSkills() {
  const root = document.getElementById('skills-grid');
  if (!root) return;
  const groups = [
    { key: 'frontend', items: PORTFOLIO_DATA.skills.frontend },
    { key: 'backend', items: PORTFOLIO_DATA.skills.backend },
    { key: 'mobile', items: PORTFOLIO_DATA.skills.mobile },
    { key: 'database', items: PORTFOLIO_DATA.skills.database },
    { key: 'tools', items: PORTFOLIO_DATA.skills.tools },
    { key: 'deployment', items: PORTFOLIO_DATA.skills.deployment },
  ];
  root.innerHTML = groups.filter((g) => g.items && g.items.length).map((g) => `
    <div class="reveal bg-paperSoft dark:bg-inkSoft border border-paperLine dark:border-inkLine rounded-2xl p-7">
      <h3 class="font-mono text-xs uppercase tracking-widest text-lime mb-5" data-i18n="skills.${g.key}"></h3>
      <div class="flex flex-wrap gap-2.5">
        ${g.items.map(skillPillHTML).join('')}
      </div>
    </div>
  `).join('');
  applyTranslations(getCurrentLang());
}

/* ---------- Languages ---------- */
function renderLanguages() {
  const root = document.getElementById('languages-grid');
  if (!root || !PORTFOLIO_DATA.languages) return;
  root.innerHTML = PORTFOLIO_DATA.languages.map((l) => `
    <div class="reveal bg-paperSoft dark:bg-inkSoft border border-paperLine dark:border-inkLine rounded-2xl p-5 text-center">
      <p class="font-display font-semibold text-base text-ink dark:text-paper mb-1">${l.name}</p>
      <p class="font-mono text-xs text-lime font-medium">${L(l.level)}</p>
    </div>
  `).join('');
}

/* ---------- Process ---------- */
function renderProcess() {
  const root = document.getElementById('process-grid');
  if (!root) return;
  root.innerHTML = PORTFOLIO_DATA.process.map((step, i) => `
    <div class="reveal relative pl-8 sm:pl-0">
      <div class="hidden sm:flex w-12 h-12 rounded-full bg-ink dark:bg-paper text-paper dark:text-ink font-mono items-center justify-center mb-5">${step.number}</div>
      <span class="sm:hidden font-mono text-lime text-sm">${step.number}</span>
      <h3 class="font-display font-semibold text-lg text-ink dark:text-paper mt-2 sm:mt-0 mb-2">${L(step.title)}</h3>
      <p class="text-sm text-ink/65 dark:text-paper/65 leading-relaxed">${L(step.desc)}</p>
    </div>
  `).join('');
}

/* ---------- Values ---------- */
function renderValues() {
  const root = document.getElementById('values-grid');
  if (!root) return;
  root.innerHTML = PORTFOLIO_DATA.values.map((v) => `
    <div class="reveal flex items-start gap-3 bg-paperSoft dark:bg-inkSoft border border-paperLine dark:border-inkLine rounded-xl p-5">
      <span class="w-6 h-6 rounded-full bg-lime/15 text-lime flex items-center justify-center flex-shrink-0 mt-0.5"><span class="w-3.5 h-3.5 block">${ICONS.check}</span></span>
      <p class="text-sm text-ink/80 dark:text-paper/80 leading-relaxed">${L(v)}</p>
    </div>
  `).join('');
}

/* ---------- About timeline ---------- */
function renderAboutTimeline() {
  const root = document.getElementById('about-timeline');
  if (!root) return;
  root.innerHTML = PORTFOLIO_DATA.aboutTimeline.map((item, i) => `
    <div class="reveal relative pl-8 pb-10 border-l border-paperLine dark:border-inkLine last:pb-0 last:border-transparent">
      <span class="absolute -left-[7px] top-0 w-3.5 h-3.5 rounded-full bg-lime"></span>
      <p class="font-mono text-xs text-lime mb-1">${item.period}</p>
      <h3 class="font-display font-semibold text-base text-ink dark:text-paper mb-1">${L(item.title)}</h3>
      <p class="text-sm text-ink/65 dark:text-paper/65 leading-relaxed">${L(item.desc)}</p>
    </div>
  `).join('');
}

/* ---------- Projects ---------- */
function projectCardHTML(p) {
  const lang = getCurrentLang();
  const dict = TRANSLATIONS[lang].projects;
  return `
    <article class="reveal lift bg-paperSoft dark:bg-inkSoft border border-paperLine dark:border-inkLine rounded-2xl overflow-hidden flex flex-col">
      <a href="project-detail.html?id=${p.id}" class="block aspect-[16/10] bg-ink/90 dark:bg-black/40 relative overflow-hidden group">
        ${p.image ? `
          <img src="${p.image}" alt="${L(p.title)}" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
        ` : `
          <div class="absolute inset-0 mesh-grid opacity-70"></div>
        `}
        <div class="absolute top-3 right-3">
          <span class="font-mono text-[11px] backdrop-blur bg-black/50 text-paper/90 border border-white/10 rounded-full px-3 py-1">${p.category}</span>
        </div>
      </a>
      <div class="p-6 flex flex-col flex-1">
        <h3 class="font-display font-semibold text-lg text-ink dark:text-paper mb-2">${L(p.title)}</h3>
        <p class="text-sm text-ink/65 dark:text-paper/65 leading-relaxed mb-4 flex-1">${L(p.shortDesc)}</p>
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${p.technologies.map((t) => `<span class="font-mono text-[11px] px-2.5 py-1 rounded-full bg-ink/5 dark:bg-paper/5 text-ink/60 dark:text-paper/60">${t}</span>`).join('')}
        </div>
        <a href="project-detail.html?id=${p.id}" class="inline-flex items-center gap-2 font-mono text-sm text-lime hover:gap-3 transition-all">
          <span>${dict.viewDetail}</span>
          <span class="w-4 h-4 block">${ICONS.arrowRight}</span>
        </a>
      </div>
    </article>
  `;
}

function renderProjectsPreview() {
  const root = document.getElementById('projects-preview-grid');
  if (!root) return;
  root.innerHTML = PORTFOLIO_DATA.projects.slice(0, 3).map(projectCardHTML).join('');
}

function renderProjectFilters() {
  const root = document.getElementById('projects-filters');
  if (!root) return;
  const lang = getCurrentLang();
  const cats = ['all', ...PORTFOLIO_DATA.projectCategories];
  root.innerHTML = cats.map((c) => {
    const label = c === 'all' ? TRANSLATIONS[lang].projects.filterAll : c;
    const isActive = activeProjectFilter === c;
    return `<button type="button" data-filter="${c}"
      class="font-mono text-sm px-4 py-2 rounded-full border transition-colors ${isActive ? 'bg-lime text-ink border-lime' : 'border-paperLine dark:border-inkLine text-ink/70 dark:text-paper/70 hover:border-lime hover:text-lime'}">
      ${label}
    </button>`;
  }).join('');

  root.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeProjectFilter = btn.getAttribute('data-filter');
      renderProjectFilters();
      renderProjectsGrid();
    });
  });
}

function renderProjectsGrid() {
  const root = document.getElementById('projects-grid');
  if (!root) return;
  const lang = getCurrentLang();
  const list = activeProjectFilter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === activeProjectFilter);

  if (!list.length) {
    root.innerHTML = `<p class="col-span-full text-center text-ink/50 dark:text-paper/50 font-mono text-sm py-16">${TRANSLATIONS[lang].projects.empty}</p>`;
    return;
  }
  root.innerHTML = list.map(projectCardHTML).join('');
  initScrollReveal();
  initCardHovers();
}

/* ---------- Project detail ---------- */
function renderProjectDetail() {
  const root = document.getElementById('project-detail-root');
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === id);
  const lang = getCurrentLang();
  const dict = TRANSLATIONS[lang].projects.detail;

  if (!project) {
    root.innerHTML = `
      <div class="text-center py-24">
        <h1 class="font-display font-bold text-3xl text-ink dark:text-paper mb-3">${dict.notFoundTitle}</h1>
        <p class="text-ink/60 dark:text-paper/60 mb-8">${dict.notFoundText}</p>
        <a href="projects.html" class="inline-flex items-center gap-2 bg-lime text-ink font-mono text-sm px-6 py-3 rounded-full">
          <span class="w-4 h-4 block">${ICONS.arrowLeft}</span>${dict.notFoundCta}
        </a>
      </div>`;
    document.title = dict.notFoundTitle;
    return;
  }

  document.title = `${L(project.title)} — ${PORTFOLIO_DATA.personal.name}`;

  const links = [];
  if (project.extraLinks && project.extraLinks.length) {
    project.extraLinks.forEach((el) => {
      const label = typeof el.label === 'object' ? L(el.label) : el.label;
      links.push(`<a href="${el.url}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-lime text-ink font-mono text-sm px-5 py-2.5 rounded-full font-medium shadow-sm hover:shadow-md transition-all"><span>${label}</span><span class="w-4 h-4 block">${ICONS.arrowUpRight}</span></a>`);
    });
  } else if (project.url) {
    links.push(`<a href="${project.url}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-lime text-ink font-mono text-sm px-5 py-2.5 rounded-full font-medium shadow-sm hover:shadow-md transition-all">${TRANSLATIONS[lang].projects.viewProject}<span class="w-4 h-4 block">${ICONS.arrowUpRight}</span></a>`);
  }
  if (project.github) links.push(`<a href="${project.github}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 border border-paperLine dark:border-inkLine font-mono text-sm px-5 py-2.5 rounded-full text-ink dark:text-paper font-medium hover:border-lime transition-all">${TRANSLATIONS[lang].projects.viewCode}<span class="w-4 h-4 block">${ICONS.github}</span></a>`);

  root.innerHTML = `
    <a href="projects.html" class="reveal inline-flex items-center gap-2 font-mono text-sm text-ink/60 dark:text-paper/60 hover:text-lime mb-8">
      <span class="w-4 h-4 block">${ICONS.arrowLeft}</span>${dict.back}
    </a>

    <div class="reveal flex flex-wrap items-center gap-3 mb-4">
      <span class="font-mono text-xs px-3 py-1 rounded-full bg-lime/15 text-lime">${project.category}</span>
    </div>
    <h1 class="reveal font-display font-bold text-3xl sm:text-5xl text-ink dark:text-paper mb-8 max-w-3xl">${L(project.title)}</h1>

    <div class="reveal aspect-[16/8] rounded-2xl bg-ink dark:bg-black/40 border border-paperLine dark:border-inkLine relative overflow-hidden mb-12">
      ${project.image ? `
        <img src="${project.image}" alt="${L(project.title)}" class="w-full h-full object-cover object-top">
      ` : `
        <div class="absolute inset-0 mesh-grid opacity-70"></div>
      `}
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div class="lg:col-span-2 space-y-10">
        <div class="reveal">
          <h2 class="font-mono text-xs uppercase tracking-widest text-lime mb-3">${dict.context}</h2>
          <p class="text-ink/75 dark:text-paper/75 leading-relaxed">${L(project.context)}</p>
        </div>
        <div class="reveal">
          <h2 class="font-mono text-xs uppercase tracking-widest text-lime mb-3">${dict.problem}</h2>
          <p class="text-ink/75 dark:text-paper/75 leading-relaxed">${L(project.problem)}</p>
        </div>
        <div class="reveal">
          <h2 class="font-mono text-xs uppercase tracking-widest text-lime mb-3">${dict.solution}</h2>
          <p class="text-ink/75 dark:text-paper/75 leading-relaxed">${L(project.solution)}</p>
        </div>
        <div class="reveal">
          <h2 class="font-mono text-xs uppercase tracking-widest text-lime mb-3">${dict.features}</h2>
          <ul class="space-y-2">
            ${project.features.map((f) => `<li class="flex items-start gap-2 text-ink/75 dark:text-paper/75"><span class="w-4 h-4 mt-1 text-lime block">${ICONS.check}</span>${L(f)}</li>`).join('')}
          </ul>
        </div>
        <div class="reveal">
          <h2 class="font-mono text-xs uppercase tracking-widest text-lime mb-3">${dict.results}</h2>
          <p class="text-ink/75 dark:text-paper/75 leading-relaxed">${L(project.results)}</p>
        </div>
      </div>

      <aside class="reveal space-y-8">
        <div>
          <h2 class="font-mono text-xs uppercase tracking-widest text-lime mb-3">${dict.technologies}</h2>
          <div class="flex flex-wrap gap-2">
            ${project.technologies.map((t) => `<span class="font-mono text-xs px-3 py-1.5 rounded-full border border-paperLine dark:border-inkLine text-ink/70 dark:text-paper/70">${t}</span>`).join('')}
          </div>
        </div>
        ${links.length ? `<div><h2 class="font-mono text-xs uppercase tracking-widest text-lime mb-3">${dict.links}</h2><div class="flex flex-col gap-3">${links.join('')}</div></div>` : ''}
      </aside>
    </div>

    ${(project.gallery && project.gallery.length) ? `
      <div class="reveal mt-16 pt-12 border-t border-paperLine dark:border-inkLine">
        <h2 class="font-mono text-xs uppercase tracking-widest text-lime mb-6">${dict.galleryTitle}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${project.gallery.map((img, i) => `
            <a href="${img}" target="_blank" rel="noopener" class="group block aspect-[16/10] rounded-2xl overflow-hidden border border-paperLine dark:border-inkLine bg-paperSoft dark:bg-inkSoft relative shadow-sm hover:shadow-xl transition-all">
              <img src="${img}" alt="${L(project.title)} aperçu ${i + 1}" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span class="w-10 h-10 rounded-full bg-lime text-ink flex items-center justify-center font-bold shadow-md"><span class="w-4 h-4 block">${ICONS.arrowUpRight}</span></span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `;
  initScrollReveal();
}

/* ---------- CV Download (FR / EN) ---------- */
function initCvButtons() {
  const cvButtons = document.querySelectorAll('[data-cv-btn], #hero-cv-btn, #about-cv-btn');
  cvButtons.forEach((btn) => {
    const icon = btn.querySelector('[data-cv-icon], #hero-cv-icon, #about-cv-icon');
    if (icon && typeof ICONS !== 'undefined' && ICONS.download) {
      icon.innerHTML = ICONS.download;
    }
    btn.onclick = (e) => {
      e.preventDefault();
      const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'fr';
      const cvData = PORTFOLIO_DATA.personal.cvUrl;
      const cvUrl = (typeof cvData === 'object' && cvData !== null)
        ? (cvData[lang] || cvData.fr || cvData.en)
        : cvData;

      if (!cvUrl) {
        alert(TRANSLATIONS[lang].hero.cvUnavailable);
      } else {
        window.open(cvUrl, '_blank');
      }
    };
  });
}

function renderAll() {
  renderStats();
  renderServicesPreview();
  renderServicesFull();
  renderSkills();
  renderLanguages();
  renderProcess();
  renderValues();
  renderAboutTimeline();
  renderProjectsPreview();
  renderProjectFilters();
  renderProjectsGrid();
  renderProjectDetail();
  initCvButtons();
  initScrollReveal();
  initCardHovers();
  initStatCounters();
}

document.addEventListener('DOMContentLoaded', renderAll);
document.addEventListener('langchange', renderAll);
