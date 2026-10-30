// Static site: every enquiry goes to WhatsApp with the details pre-filled. No backend.
import { SITE } from '../data/site';

export const waUrl = (text = '') =>
  `https://wa.me/${SITE.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// Open the chat. Same tab on phones (opens the app), new tab on desktop (WhatsApp Web).
export function openWhatsApp(text: string) {
  const url = waUrl(text);
  const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (mobile) { location.href = url; return; }
  // No 'noopener' feature: with it window.open always returns null, which made the
  // fallback navigate this page away too. Detach the opener by hand instead.
  const w = window.open(url, '_blank');
  if (w) w.opener = null; else location.href = url;
}

// "Label: value" lines from a form, skipping empties, hidden and honeypot fields.
export function formToLines(form: HTMLFormElement, skip: string[] = []): string[] {
  const lines: string[] = [];
  const seen = new Set<string>();
  form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input,select,textarea').forEach((el) => {
    if (!el.name || seen.has(el.name) || skip.includes(el.name) || el.type === 'hidden' || el.type === 'checkbox' || el.closest('.hp')) return;
    let v = '';
    if (el.type === 'radio') { seen.add(el.name); const c = form.querySelector<HTMLInputElement>(`[name="${el.name}"]:checked`); v = c ? (c.nextElementSibling?.textContent || c.value) : ''; }
    else if (el instanceof HTMLSelectElement) v = el.value ? el.selectedOptions[0].textContent || '' : '';
    else v = el.value;
    v = v.replace(/\s+/g, ' ').trim();
    if (!v) return;
    const label = (form.querySelector(`label[for="${el.id}"]`)?.textContent || el.name).replace(/\(.*?\)/g, '').replace(/\s+/g, ' ').trim();
    lines.push(`${label}: ${v}`);
  });
  return lines;
}
