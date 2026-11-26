const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('#nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
// Static GitHub Pages websites cannot send email themselves. Compose a complete
// mailto: draft using the visitor's default email client; the visitor sends it.
const admissionsAddress = 'info@hillsinternationalschools.com';
document.querySelector('#enquiryForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const name = form.elements.namedItem('name').value.trim();
  const email = form.elements.namedItem('email').value.trim();
  const interest = form.elements.namedItem('interest').value;
  const message = form.elements.namedItem('message').value.trim();
  if (!name || !email || !message) return;
  const subject = `Egypt Hills International School — ${interest} enquiry`;
  const body = `Dear Egypt Hills Admissions Team,\n\n${message}\n\n---\nName: ${name}\nEmail: ${email}\nInterested in: ${interest}\n`;
  const mailto = `mailto:${admissionsAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const notice = document.querySelector('#formNotice');
  notice.textContent = 'Your email application should open with an enquiry draft. Please review it and press Send in your email app. If it did not open, use the school email link above.';
  window.location.href = mailto;
});

const themeToggle = document.querySelector('#themeToggle');
const root = document.documentElement;
function setTheme(theme) {
  root.dataset.theme = theme;
  const dark = theme === 'dark';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle.textContent = dark ? '☀' : '◐';
  try { localStorage.setItem('ehis_theme', theme); } catch {}
}
let savedTheme;
try { savedTheme = localStorage.getItem('ehis_theme'); } catch {}
setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'light');
themeToggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
function closeMenu() {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (nav.classList.contains('open') && !event.target.closest('.header')) closeMenu();
});
