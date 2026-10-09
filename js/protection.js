/**
 * ============================================================================
 * 🛡️ CONTENT & SOURCE CODE PROTECTION CONTROLLER
 * ============================================================================
 * Features:
 * - Disables right-click context menu across document
 * - Intercepts DevTools / Source View shortcuts:
 *   * F12
 *   * Ctrl+Shift+I / Cmd+Option+I (Inspect)
 *   * Ctrl+Shift+J / Cmd+Option+J (Console)
 *   * Ctrl+Shift+C / Cmd+Option+C (Element Picker)
 *   * Ctrl+U / Cmd+Option+U (View Source)
 *   * Ctrl+S / Cmd+Option+S (Save Page)
 *   * Ctrl+C / Cmd+C (Copy text when not in input)
 * - Disables drag-and-drop on images and media
 * - Displays a centered warning alert modal (⚠️) with auto-close after 2.5s
 * ============================================================================
 */

(function initContentProtection() {
  let modal = null;
  let closeTimer = null;

  function getModal() {
    if (!modal) {
      modal = document.getElementById('protection-alert-modal');
    }
    return modal;
  }

  function showProtectionAlert() {
    const el = getModal();
    if (!el) return;

    el.classList.add('is-active');
    el.setAttribute('aria-hidden', 'false');

    if (closeTimer) {
      clearTimeout(closeTimer);
    }

    // Auto-close after 2.5 seconds (2500ms)
    closeTimer = setTimeout(closeProtectionAlert, 2500);
  }

  function closeProtectionAlert() {
    const el = getModal();
    if (!el) return;

    el.classList.remove('is-active');
    el.setAttribute('aria-hidden', 'true');

    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }
  }

  // 1. Disable Right-Click Context Menu (Permit inside inputs for pasting)
  document.addEventListener('contextmenu', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
      return true;
    }
    e.preventDefault();
    e.stopPropagation();
    showProtectionAlert();
    return false;
  }, { capture: true });

  // 2. Intercept DevTools & Source View Shortcut Combinations
  document.addEventListener('keydown', (e) => {
    const isCtrlOrCmd = e.ctrlKey || e.metaKey;
    const isShift = e.shiftKey;
    const isAltOrOpt = e.altKey;
    const key = e.key ? e.key.toLowerCase() : '';
    const code = e.keyCode || e.which;

    let isBlocked = false;

    // F12 (DevTools)
    if (key === 'f12' || code === 123) {
      isBlocked = true;
    }
    // Ctrl+Shift+I / Cmd+Option+I (Inspect)
    else if (isCtrlOrCmd && (isShift || isAltOrOpt) && (key === 'i' || code === 73)) {
      isBlocked = true;
    }
    // Ctrl+Shift+J / Cmd+Option+J (Console)
    else if (isCtrlOrCmd && (isShift || isAltOrOpt) && (key === 'j' || code === 74)) {
      isBlocked = true;
    }
    // Ctrl+Shift+C / Cmd+Option+C (Element Picker)
    else if (isCtrlOrCmd && (isShift || isAltOrOpt) && (key === 'c' || code === 67)) {
      isBlocked = true;
    }
    // Ctrl+U / Cmd+Option+U (View Source)
    else if (isCtrlOrCmd && (key === 'u' || code === 85)) {
      isBlocked = true;
    }
    // Ctrl+S / Cmd+S (Save Page)
    else if (isCtrlOrCmd && (key === 's' || code === 83)) {
      isBlocked = true;
    }
    // Ctrl+C (Copy attempt outside form inputs)
    else if (isCtrlOrCmd && (key === 'c' || code === 67)) {
      const activeTag = document.activeElement ? document.activeElement.tagName : '';
      if (activeTag !== 'INPUT' && activeTag !== 'TEXTAREA') {
        isBlocked = true;
      }
    }

    if (isBlocked) {
      e.preventDefault();
      e.stopPropagation();
      showProtectionAlert();
      return false;
    }
  }, { capture: true });

  // 3. Disable Drag-and-Drop on Images & Media
  document.addEventListener('dragstart', (e) => {
    if (e.target && (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO' || e.target.tagName === 'A')) {
      e.preventDefault();
      return false;
    }
  }, { capture: true });

  // 4. Close modal on click or tap
  document.addEventListener('DOMContentLoaded', () => {
    const el = getModal();
    if (el) {
      el.addEventListener('click', () => {
        closeProtectionAlert();
      });
    }
  });

  // Expose global methods
  window.showProtectionAlert = showProtectionAlert;
  window.closeProtectionAlert = closeProtectionAlert;
})();