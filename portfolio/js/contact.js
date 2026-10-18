/**
 * contact.js — Validation du formulaire + envoi via EmailJS.
 *
 * ⚠️ CONFIGURATION REQUISE :
 * Remplacez les trois constantes ci-dessous par vos identifiants EmailJS
 * (https://www.emailjs.com/ → Account / Email Services / Email Templates).
 * Tant qu'elles contiennent "À_RENSEIGNER", le formulaire affiche un message
 * clair au lieu de prétendre envoyer l'email.
 */
const EMAILJS_PUBLIC_KEY = 'À_RENSEIGNER';
const EMAILJS_SERVICE_ID = 'À_RENSEIGNER';
const EMAILJS_TEMPLATE_ID = 'À_RENSEIGNER';

function isEmailjsConfigured() {
  return ![EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID].includes('À_RENSEIGNER');
}

function initEmailjs() {
  if (isEmailjsConfigured() && typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(field) {
  const wrapper = field.closest('[data-field]');
  const value = field.value.trim();
  let error = '';
  const lang = getCurrentLang();
  const errors = TRANSLATIONS[lang].contact.errors;

  if (field.hasAttribute('required') && !value) {
    error = errors.required;
  } else if (field.type === 'email' && value && !EMAIL_REGEX.test(value)) {
    error = errors.email;
  } else if (field.hasAttribute('minlength') && value.length < Number(field.getAttribute('minlength'))) {
    error = errors.minLength;
  }

  if (wrapper) {
    wrapper.classList.toggle('field-invalid', Boolean(error));
    const errorEl = wrapper.querySelector('.field-error');
    if (errorEl) errorEl.textContent = error;
  }
  return !error;
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  initEmailjs();

  const fields = form.querySelectorAll('input[required], textarea[required], input[type="email"]');
  fields.forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
  });

  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit');
  const submitLabel = submitBtn ? submitBtn.querySelector('[data-submit-label]') : null;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const lang = getCurrentLang();
    const dict = TRANSLATIONS[lang].contact;

    let allValid = true;
    fields.forEach((field) => { if (!validateField(field)) allValid = false; });
    if (!allValid) {
      statusEl.textContent = '';
      return;
    }

    if (!isEmailjsConfigured()) {
      statusEl.textContent = dict.formNotConfigured;
      statusEl.className = 'mt-4 text-sm font-medium text-amber-600 dark:text-amber-400';
      return;
    }

    submitBtn.disabled = true;
    if (submitLabel) submitLabel.textContent = dict.formSending;
    statusEl.textContent = '';

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
      .then(() => {
        statusEl.textContent = dict.formSuccess;
        statusEl.className = 'mt-4 text-sm font-medium text-lime';
        form.reset();
      })
      .catch(() => {
        statusEl.textContent = dict.formError;
        statusEl.className = 'mt-4 text-sm font-medium text-red-500';
      })
      .finally(() => {
        submitBtn.disabled = false;
        if (submitLabel) submitLabel.textContent = dict.formSubmit;
      });
  });

  document.addEventListener('langchange', () => {
    // Les libellés statiques sont ré-appliqués par i18n.js ; on nettoie juste
    // un message de statut qui serait resté affiché dans l'ancienne langue.
    if (statusEl && statusEl.textContent) statusEl.textContent = '';
  });
}

document.addEventListener('DOMContentLoaded', initContactForm);
