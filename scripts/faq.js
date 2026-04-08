/**
 * FAQ accordion behavior for ShackDesk site.
 *
 * Why this is a separate file:
 * - The site uses a strict Content Security Policy (CSP):
 *     script-src 'self'
 * - This blocks inline <script> blocks and inline event handlers (onclick, etc.)
 * - Therefore, all JavaScript must be loaded from external files like this one.
 *
 * What this does:
 * - Toggles FAQ items open/closed on click
 * - Updates aria-expanded for accessibility
 * - Opens a specific FAQ item when linked via URL hash (e.g. /faq/#smartscreen)
 *
 * Do NOT move this logic back into inline HTML or it will be blocked by CSP.
 */

/**
 * original script in the faq/index.html
 * 
 * <script>
 * function toggle(btn) {
 * var item = btn.parentElement;
 * item.classList.toggle('open');
 *  }
 * // Open item if URL hash matches its id
 * if (location.hash) {
 * var el = document.querySelector(location.hash);
 * if (el && el.classList.contains('faq-item')) {
 * el.classList.add('open');
 * el.scrollIntoView({ behavior: 'smooth', block: 'start' });
 * }
 * }
 * </script>
 * 
 */


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;

      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el && el.classList.contains('faq-item')) {
      el.classList.add('open');
      const btn = el.querySelector('.faq-question');
      if (btn) btn.setAttribute('aria-expanded', 'true');
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});
