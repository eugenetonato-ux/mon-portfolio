/**
 * components.js — Navbar & footer partagés.
 * Chaque page HTML reste un fichier indépendant (son URL propre) ; ce module
 * évite simplement de dupliquer le balisage du header/footer dans chacune.
 */

const THEME_STORAGE_KEY = 'portfolio-theme';

const NAV_ITEMS = [
  { key: 'home', href: 'index.html', page: 'home' },
  { key: 'about', href: 'about.html', page: 'about' },
  { key: 'services', href: 'services.html', page: 'services' },
  { key: 'skills', href: 'skills.html', page: 'skills' },
  { key: 'projects', href: 'projects.html', page: 'projects' },
  { key: 'contact', href: 'contact.html', page: 'contact' },
];

// Mode sombre exclusif et permanent
document.documentElement.classList.add('dark');
try {
  localStorage.setItem('portfolio-theme', 'dark');
} catch (e) {}

function renderNavbar() {
  const root = document.getElementById('navbar-root');
  if (!root) return;
  const currentPage = document.body.getAttribute('data-page') || 'home';

  const links = NAV_ITEMS.map((item) => `
    <a href="${item.href}"
       class="nav-link font-mono text-sm tracking-wide text-paper/80 hover:text-paper transition-colors ${item.page === currentPage ? 'active text-paper' : ''}"
       data-i18n="nav.${item.key}">${item.key}</a>
  `).join('');

  const mobileLinks = NAV_ITEMS.map((item) => `
    <a href="${item.href}"
       class="block py-3 border-b border-inkLine font-display text-lg ${item.page === currentPage ? 'text-lime' : 'text-paper'}"
       data-i18n="nav.${item.key}">${item.key}</a>
  `).join('');

  root.innerHTML = `
    <header class="sticky top-0 z-50 bg-ink/85 backdrop-blur-md border-b border-inkLine">
      <nav class="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between" aria-label="Navigation principale">
        <a href="index.html" class="font-display font-bold text-lg sm:text-xl tracking-tight text-paper flex items-center gap-2.5 group" aria-label="TONATO Sandro Eugène — Accueil">
          <span class="w-2.5 h-2.5 rounded-full bg-lime animate-pulse inline-block shadow-[0_0_8px_#C6F135]"></span>
          <span>Sandro<span class="text-lime">.dev</span></span>
        </a>

        <div class="hidden lg:flex items-center gap-8">
          ${links}
        </div>

        <div class="flex items-center gap-2 sm:gap-3">
          <button type="button" id="lang-toggle"
            class="font-mono text-xs sm:text-sm w-10 h-10 rounded-full border border-inkLine text-paper hover:border-lime hover:text-lime transition-colors flex items-center justify-center"
            data-i18n="nav.langSwitch" aria-label="Changer de langue / Switch language">EN</button>

          <a href="contact.html"
            class="hidden sm:inline-flex items-center gap-2 bg-lime text-ink font-mono text-sm font-medium px-5 py-2.5 rounded-full hover:bg-limeSoft transition-colors"
            data-i18n="nav.cta">Me contacter</a>

          <button type="button" id="mobile-menu-toggle"
            class="lg:hidden w-10 h-10 rounded-full border border-inkLine text-paper flex items-center justify-center"
            aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="mobile-menu">
            <span id="mobile-menu-icon" class="w-5 h-5 block">${ICONS.menu}</span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" class="mobile-menu lg:hidden border-t border-inkLine bg-ink px-5 sm:px-8">
        ${mobileLinks}
        <a href="contact.html" class="block mt-4 mb-5 text-center bg-lime text-ink font-mono text-sm font-medium px-5 py-3 rounded-full" data-i18n="nav.cta">Me contacter</a>
      </div>
    </header>
  `;

  document.getElementById('lang-toggle').addEventListener('click', () => {
    setLanguage(getCurrentLang() === 'fr' ? 'en' : 'fr');
  });

  const menuToggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('mobile-menu-icon');
  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuIcon.innerHTML = isOpen ? ICONS.close : ICONS.menu;
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    menu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuIcon.innerHTML = ICONS.menu;
  }));
}

function renderFooter() {
  const root = document.getElementById('footer-root');
  if (!root) return;
  const p = PORTFOLIO_DATA.personal;
  const year = new Date().getFullYear();

  const navLinks = NAV_ITEMS.map((item) => `
    <a href="${item.href}" class="block text-sm text-paper/70 hover:text-lime transition-colors py-1" data-i18n="nav.${item.key}">${item.key}</a>
  `).join('');

  root.innerHTML = `
    <footer class="bg-ink text-paper border-t border-inkLine">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="index.html" class="font-display font-bold text-xl flex items-center gap-2.5 mb-4 group">
            <span class="w-2.5 h-2.5 rounded-full bg-lime shadow-[0_0_8px_#C6F135]"></span>
            <span>Sandro<span class="text-lime">.dev</span></span>
          </a>
          <p class="text-sm text-paper/60 leading-relaxed max-w-xs" data-i18n="footer.description"></p>
        </div>

        <div>
          <h3 class="font-mono text-xs uppercase tracking-widest text-lime mb-4" data-i18n="footer.navTitle">Navigation</h3>
          ${navLinks}
        </div>

        <div>
          <h3 class="font-mono text-xs uppercase tracking-widest text-lime mb-4" data-i18n="footer.contactTitle">Contact</h3>
          <a href="mailto:${p.email}" class="block text-sm text-paper/70 hover:text-lime transition-colors py-1">${p.email}</a>
          <a href="${p.whatsappLink}" target="_blank" rel="noopener" class="block text-sm text-paper/70 hover:text-lime transition-colors py-1">WhatsApp — ${p.whatsapp}</a>
          <p class="text-sm text-paper/70 py-1">🇧🇯 <span data-i18n="footer.locationInline">Bénin</span></p>
        </div>

        <div>
          <h3 class="font-mono text-xs uppercase tracking-widest text-lime mb-4" data-i18n="footer.techTitle">Technologies principales</h3>
          <p class="text-sm text-paper/60 leading-relaxed font-mono">HTML · Tailwind CSS · JavaScript · Anime.js · Django</p>
          <div class="flex items-center gap-3 mt-4">
            <a href="${p.github}" target="_blank" rel="noopener" aria-label="GitHub" class="w-9 h-9 rounded-full border border-inkLine flex items-center justify-center hover:border-lime hover:text-lime transition-colors"><span class="w-4 h-4 block">${ICONS.github}</span></a>
            <a href="${p.whatsappLink}" target="_blank" rel="noopener" aria-label="WhatsApp" class="w-9 h-9 rounded-full border border-inkLine flex items-center justify-center hover:border-lime hover:text-lime transition-colors"><span class="w-4 h-4 block">${ICONS.whatsapp}</span></a>
            <a href="mailto:${p.email}" aria-label="Email" class="w-9 h-9 rounded-full border border-inkLine flex items-center justify-center hover:border-lime hover:text-lime transition-colors"><span class="w-4 h-4 block">${ICONS.mail}</span></a>
          </div>
        </div>
      </div>

      <div class="border-t border-inkLine">
        <div class="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-xs text-paper/50 font-mono text-center sm:text-left">© ${year} ${p.name}. <span data-i18n="footer.rights"></span></p>
          <p class="text-xs text-paper/50 font-mono" data-i18n="footer.langLabel"></p>
        </div>
      </div>
    </footer>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  document.addEventListener('langchange', () => {
    // Les libellés dynamiques (année, texte statique fr) restent corrects :
    // seuls les data-i18n sont ré-appliqués par i18n.js lui-même.
  });
});
